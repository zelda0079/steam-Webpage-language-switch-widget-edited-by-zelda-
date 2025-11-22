// ==UserScript==
// @name              steam 网页语言切换小工具 (V3 edited by zelda)
// @name:en           steam Webpage language switch widget (V3 edited by zelda)
// @name:ja           steam ウェブ言語スイッチ (V3 edited by zelda)
// @namespace         jasaj.me (edited by zelda)
// @match             https://store.steampowered.com/*
// @match             https://steamcommunity.com/*
// @version           3.1
// @updateURL         https://raw.githubusercontent.com/zelda0079/steam-Webpage-language-switch-widget-edited-by-zelda-/main/script_edited_by_zelda_v3.user.js
// @description       这个脚本用于添加一个小按钮来 只更改网页前端语言设置，不更改用户的语言设置。并且使所有的链接指向指定的语言。
// @description:en    This script is used to add a small button to change only the front-end language setting of the web page, not the language set by the user. and make all links point to the specified language.
// @description:ja    このスクリプトは、（ユーザーの言語設定を変更せずに）WebページのUI言語のみを変更するスイッチをページに追加。そして、すべてのリンクが指定した言語に移動するようにする。
// @author            Jasaj
// ==/UserScript==



{
    // 加入自訂 CSS
    const style = document.createElement("style");
    style.textContent = `
        .zelda-lang-btn {
            padding: 4px 10px !important;
            margin-left: 6px;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            background: rgba(255,255,255,0.06);
            color: rgba(255,255,255,0.8) !important;
            transition: all 0.18s ease;
            cursor: pointer;
            user-select: none;
        }

        .zelda-lang-btn:hover {
            background: rgba(255,255,255,0.15);
            transform: translateY(-1px);
        }

        .zelda-lang-btn.disabled {
            background: rgba(255,255,255,0.20) !important;
            color: rgba(255,255,255,0.45) !important;
            cursor: not-allowed !important;
            transform: none !important;
        }
    `;
    document.head.appendChild(style);


    const add_lang_change_btn = (l_txt, l_URL, l_iso) => {
        let theURL = new URL(window.location);
        theURL.searchParams.set("l", l_URL);

        // 外層
        let div = document.createElement("div");
        div.classList.add("menuitem");

        // 按鈕本體
        let btn = document.createElement("a");
        btn.classList.add("zelda-lang-btn");
        btn.textContent = l_txt;

        const active = ((new URL(window.location)).searchParams.get("l") == l_URL)
                     || (document.documentElement.lang == l_iso);

        if (active) {
            btn.classList.add("disabled");
        } else {
            btn.onclick = () => { window.location = theURL.href; };
        }

        div.appendChild(btn);
        document.getElementById("global_actions").append(div);
    };

    // 語言按鈕清單
    let steam_lang_btn_map = [
        ["繁", "tchinese", "zh-tw"],
        ["簡", "schinese", "zh-cn"],
        ["日", "japanese", "ja"],
        ["英", "english", "en"]
    ];

    steam_lang_btn_map.forEach(v => add_lang_change_btn(v[0], v[1], v[2]));
}

