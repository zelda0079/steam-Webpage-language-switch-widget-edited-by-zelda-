# steam-Webpage-language-switch-widget-edited-by-zelda-  
~~~~~~~~~~~~~~~~~~~
2025年12月28日更新 V3.2版 更新  
V3.2 是修正按鈕位置
~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~
2025年11月22日更新 V3.1版 更新  
我發現V4版有些問題所以我自己也不用
例如STEAMDB插件在全球成就頁面生成一個跳到自己成就的連結
腳本會使連結生效
V3.1版是基於V3版改良按鈕變得好看一點，其他功能不變。
~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~
2025年11月21日更新 V4版 (BETA) 更新  
畢竟現在是AI時代了，我用AI把按鈕變好看  
還有steamcommunity.com後面網址?l=language也支持了，不用每次要看都按一次那麼87  
還有V2片的問題早已消失（好像是），因此這V4版是兼容V2和V3的優點  
應該是最好，但未測試，我暫時在做白老鼠，一段時間沒問題就正式了  
~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~
2024年3月13日更新 V3版

刪去把所有頁面都換掉語言的功能

因為當初就是只用來看公告

不需要長時間轉換語言

反而現在自帶?l=language(繁體是tchinese)會讓STEAM網頁有些問題

想用原版本可以去old_version複製貼上

script_edited_by_zelda1.js或是script_edited_by_zelda2.js

已知的V2版問題:

商店頁面閱讀評論時，評論太長會顯示繼續閱讀，按下去不行，它的網址是https://store.steampowered.com/app/APPID/GAME_NAME/#，如果再有?=tchinese會出問題

V3版的缺點就是如果你要看一大堆公告是按進去看的情況，那就不方便，不按進去的話還好

~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~
2024年1月26日更新

script_edited_by_zelda2.js

這個版本STEAM商店和社區比較統一顯示

但是比商店版醜，比社區版好看
~~~~~~~~~~~~~~~~~~~
截圖:

社群
https://i.imgur.com/XMmwCbKm.jpg

商店
https://i.imgur.com/PMMgZKtm.jpg

想用原版參考old version裡的  

script_edited_by_zelda1.js


這個是用來切換STEAM網頁語言用的腳本

你必須要有Tampermonkey

作者的原腳本

https://greasyfork.org/zh-TW/scripts/425175-steam-%E7%BD%91%E9%A1%B5%E8%AF%AD%E8%A8%80%E5%88%87%E6%8D%A2%E5%B0%8F%E5%B7%A5%E5%85%B7

原本效果在商店遊戲頁面才能用

https://i.imgur.com/w73KExH.png

我修改後加了繁體和改變位置

同時能在商店和社群使用

https://i.imgur.com/hA8sL4t.png

https://i.imgur.com/ttnsjPd.png

這樣在看遊戲新聞/更新公告時就相當方便切換語言了

可以看到只寫簡體中文公告的

而不用看英文公告

安裝方法:

按script_edited_by_zelda.js

複製內容

到Tampermonkey新增，再貼上，儲存

=================================================================
2022/4/16更新

發現了有個問題, 就是STEAM社區按下連結, 有些連結後面如果有?l=tchinese, 連結就會無效, 修正此問題, 請重新複製腳本一次
