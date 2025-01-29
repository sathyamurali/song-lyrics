const BASEURL="https://script.google.com/macros/s/AKfycbyCQwuOOMkRPWCOzV2m2cZvncQxIPN2n9tjh-LE78IUVFIQI2dz0HJdllLIxOm3alOX/exec";

function changeIframeSourceAsPerContainingFilename() {
	const urlParams = new URLSearchParams(window.location.search);
	const paramEventId = urlParams.get('eventId'); 
	console.log(paramEventId);
	
	const fullURL = document.location.href;
	const filename = fullURL.substring(fullURL.lastIndexOf('/') + 1);
	let iframeUrlParam;
	switch(filename){
	case "manager.html":
		iframeUrlParam="";
		break;
	case "admin.html":
		iframeUrlParam="?mode=admin";
		break;
	default:
		//index.html
		iframeUrlParam="?mode=simple";
		break;
	}
	const iframe = document.getElementById('myIframe');
	iframe.src = BASEURL+iframeUrlParam;
}
