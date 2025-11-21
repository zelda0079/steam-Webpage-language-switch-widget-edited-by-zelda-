// ==UserScript==
// @name              steam 网页语言切换小工具 (zelda improved version)
// @namespace         jasaj.me (edited by zelda)
// @match             https://store.steampowered.com/*
// @match             https://steamcommunity.com/*
// @exclude     *store.steampowered.com/widget/*
// @version           4 (beta)
// @updateURL         https://raw.githubusercontent.com/zelda0079/steam-Webpage-language-switch-widget-edited-by-zelda-/main/script_beta.user.js
// @description       添加語言切換按鈕，只更改前端語言。同時讓 store + community 所有連結自動帶上 ?l=語言。
// ==/UserScript==

(function () {

    /* === 美化選單用 CSS === */
    const style = document.createElement("style");
    style.textContent = `
        #zelda-lang-box {
            display: flex;
            gap: 6px;
            align-items: center;
            padding: 4px 8px;
            background: rgba(0,0,0,0.35);
            border-radius: 6px;
            margin-left: 10px;
        }
        .zelda-lang-btn {
            padding: 3px 7px;
            border-radius: 6px;
            color: #fff;
            font-size: 12px;
            cursor: pointer;
            transition: 0.15s;
            user-select: none;
        }
        .zelda-lang-btn:hover {
            background: rgba(255,255,255,0.25);
        }
        .zelda-lang-btn.active {
            background: rgba(255,255,255,0.15);
            color: rgba(255,255,255,0.6);
            cursor: default;
        }
    `;
    document.head.appendChild(style);


    /* === 語言選單放置位置 === */
    const headerTarget =
        document.querySelector("#global_actions") ||
        document.querySelector(".user_avatar")?.parentNode ||
        document.body;

    const langBox = document.createElement("div");
    langBox.id = "zelda-lang-box";
    headerTarget.appendChild(langBox);


    const LANG_MAP = [
        ["繁", "tchinese", "zh-tw"],
        ["簡", "schinese", "zh-cn"],
        ["日", "japanese", "ja"],
        ["英", "english", "en"]
    ];


    function addLangButton(label, langParam, iso) {
        const btn = document.createElement("div");
        btn.className = "zelda-lang-btn";
        btn.textContent = label;

        const currentURL = new URL(location.href);

        const isActive =
            currentURL.searchParams.get("l") === langParam ||
            document.documentElement.lang === iso;

        if (isActive) btn.classList.add("active");
        else {
            btn.onclick = () => {
                currentURL.searchParams.set("l", langParam);
                location.href = currentURL.href;
            };
        }

        langBox.appendChild(btn);
    }


    LANG_MAP.forEach(v => addLangButton(v[0], v[1], v[2]));


    /* === 將所有Steam連結補上 ?l=語言（含 store + community）=== */
    function applyLangToAllLinks(langParam) {
        document.querySelectorAll("a[href]").forEach(a => {
            try {
                const url = new URL(a.href);

                // 限制為 steam store or community 域名
                if (
                    url.host === "store.steampowered.com" ||
                    url.host === "steamcommunity.com"
                ) {
                    url.searchParams.set("l", langParam);
                    a.href = url.toString();
                }
            } catch (_) {}
        });
    }

    function updateLinksByCurrentPage() {
        const htmlLang = document.documentElement.lang;

        for (const v of LANG_MAP) {
            if (v[2] === htmlLang) {
                applyLangToAllLinks(v[1]);
            }
        }
    }

    updateLinksByCurrentPage();


    /* === 隱藏 Steam store 的語言提示框 === */
    function hideLanguageWarning() {
        const w = document.querySelector(".es_language_warning");
        if (w) w.style.display = "none";
    }
    hideLanguageWarning();


    /* === 監聽 DOM 變化，自動重新調整連結語言 === */
    const observer = new MutationObserver(() => {
        updateLinksByCurrentPage();
        hideLanguageWarning();
    });
    observer.observe(document.body, { childList: true, subtree: true });

})();
