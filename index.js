const BASEURL="https://script.google.com/macros/s/AKfycbwkjFBU9kBJv3tpyJBQx4I93SU99Aq-xll_1mjTHp73TEHHShsx0B5vYq9sL5XFkG-7Rg/exec";

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
