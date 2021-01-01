console.log(test); // variable defined in main script
url = "https://tmwebscript.github.io/script/script2.js" + "?nocache=" + Date.now();

// setInterval(async()=>{
	GM_xmlhttpRequest({
               method: "GET",
               url: url,
               onload: data=> eval(data.responseText)
             });
// }, 30*1000)
