const BASEURL="https://script.google.com/macros/s/AKfycbyCQwuOOMkRPWCOzV2m2cZvncQxIPN2n9tjh-LE78IUVFIQI2dz0HJdllLIxOm3alOX/exec";

function changeIframeSource() {
	const fullURL = document.location.href;
	const filename = fullURL.substring(fullURL.lastIndexOf('/') + 1);
	let iframeUrlParam;
	switch(filename){
	case "index.html":
		iframeUrlParam="?mode=simple";
		break;
	case "admin.html":
		iframeUrlParam="?mode=admin";
		break;
	default:
		//manager.html
		iframeUrlParam="";
		break;
	}
	const iframe = document.getElementById('myIframe');
	iframe.src = BASEURL+iframeUrlParam;
}
