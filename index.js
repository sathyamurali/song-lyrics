const BASEURL="https://script.google.com/macros/s/AKfycbxX5zHGvADCTH4KvqOxh9yIdVhaXgLgg35_EnjNZOoEk-WJZdq526QKixY209uAW4RIXQ/exec";

function getAllUrlParameters() {
	const params = new URLSearchParams(window.location.search);
	const paramObject = {};
	let paramStr="";
	for (const [key, value] of params.entries()) {
		paramObject[key] = value;
		paramStr=paramStr+"&"+key+"="+value
	}
	return paramStr;
}

function changeIframeSourceAsPerContainingFilename() {
	const paramStr = getAllUrlParameters();
	console.log(paramStr);
	
	const fullURL = document.location.href;
	const filename = fullURL.substring(fullURL.lastIndexOf('/') + 1);
	let iframeUrlParam;
	switch(filename){
	case "manager.html":
		iframeUrlParam=paramStr.replace(/&/, "?");
		break;
	case "admin.html":
		iframeUrlParam="?mode=admin"+paramStr;
		break;
	default:
		//index.html
		iframeUrlParam="?mode=simple"+paramStr;
		break;
	}
	const iframe = document.getElementById('myIframe');
	iframe.src = BASEURL+iframeUrlParam;
}
