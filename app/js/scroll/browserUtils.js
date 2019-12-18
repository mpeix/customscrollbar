import Browser from '../../enums/browsers';

const detectBrowser = () =>{    
  if(!!navigator.userAgent.match(/firefox/i))
    return Browser.firefox;      
  else if('webkitTransformOriginZ' in document.documentElement.style)
    return Browser.webkit;
  else if(/*@cc_on!@*/false || window.navigator.msPointerEnabled)
    return Browser.ie;      
};


module.exports = {
    detectBrowser
};