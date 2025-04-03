const BASEURL="https://script.google.com/macros/s/AKfycbxxKQdIPs1uBNzCLfV0sfQgtCV5Li6uxa0cky0P2_swrmiDejhXjsHJKZEO3_h7kRnmDA/exec";

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
function getLastFilename(url) {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const segments = pathname.split('/').filter(segment => segment.length > 0);
    const lastSegment = segments.pop();
    return lastSegment;
}

function changeIframeSourceAsPerContainingFilename() {
	const paramStr = getAllUrlParameters();
	//console.log(paramStr);
	
	const fullURL = document.location.href;
	const filename = getLastFilename(fullURL);
	//console.log(filename);
	let iframeUrlParam;
	switch(filename){
	case "manager.html":
		iframeUrlParam=paramStr.replace(/&/, "?");
		break;
	case "admin.html":
		iframeUrlParam="?mode=admin"+paramStr;
		break;
	case "search.html":
		iframeUrlParam="?mode=search"+paramStr;
		break;			
	default:
		//index.html
		iframeUrlParam="?mode=simple"+paramStr;
		break;
	}
	const iframe = document.getElementById('myIframe');
	iframe.src = BASEURL+iframeUrlParam;
}
