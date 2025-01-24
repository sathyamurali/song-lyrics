const BASEURL="https://script.google.com/macros/s/AKfycbyCQwuOOMkRPWCOzV2m2cZvncQxIPN2n9tjh-LE78IUVFIQI2dz0HJdllLIxOm3alOX/exec";
function changeIframeSource() {
  const iframe = document.getElementById('myIframe');
  const source = BASEURL+"?mode=admin";
  iframe.src = source;
}
