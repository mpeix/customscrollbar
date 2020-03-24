import Browser from '../../enums/browsers';
import {detectBrowser} from './browserUtils';

const run = (options) =>{
  const {selector, scrollWidth, scrollTrackColor, scrollThumbBackground, scrollThumbHoverBackground,
    useArrows} = options;

    let optionsOrDefaults = {
      selector: selector || '',
      scrollWidth: scrollWidth || 5,
      scrollTrackColor: scrollTrackColor || '#888',       
      scrollThumbBackground: scrollThumbBackground || 'blue',
      scrollThumbHoverBackground: scrollThumbHoverBackground || 'red',
      useArrows:useArrows || false,
    };
    
    //addStylesToElement(optionsOrDefaults);
    let styleTag = document.getElementById('my-scroll-style');
    if(!styleTag){
      styleTag = document.createElement("style");
      styleTag.id = "my-scroll-style";
      styleTag.type = "text/css";
    }
    let css = createStylesheetString(optionsOrDefaults);
    console.log(css);
    styleTag.innerText = css;
    //styleTag.appendChild(document.createTextNode(css))
    document.head.appendChild(styleTag);
}

const createStylesheetString = (options) =>{
  let styles = `
    ${options.selector}::-webkit-scrollbar{
      width:${options.scrollWidth}px;
    }
    ${options.selector}::-webkit-scrollbar-track{
      background:${options.scrollTrackColor};
    }
    ${options.selector}::-webkit-scrollbar-thumb{
      background:${options.scrollThumbBackground};
    }
    ${options.selector}::-webkit-scrollbar-thumb:hover{
      background:${options.scrollThumbHoverBackground};
    }
    ${options.selector}{
      scrollbar-face-color:${options.scrollThumbBackground};
      scrollbar-arrow-color:#05B7FF;
      scrollbar-track-color:${options.scrollTrackColor};
      scrollbar-shadow-color:#05B7FF;
      scrollbar-highlight-color:#05B7FF;
      scrollbar-3dlight-color:#808080;
      scrollbar-darkshadow-Color:#202020;
    }
    ${options.selector}{
      scrollbar-color: ${options.scrollThumbBackground} ${options.scrollTrackColor};
      scrollbar-width: ${options.scrollWidth};
    }
  `;

  if(options.useArrows){
    

  }
  return styles;
}

const  createStylesSheet = () => {
      let stylesSheet = document.createElement('style');
      stylesSheet.type = 'text/css';
      document.head.appendChild(stylesheet)
      return stylesSheet;
}
 
 const addFirefoxStyles = (options) => {
    return `${options.selector}{
      scrollbar-color: ${options.scrollThumbBackground} ${options.scrollTrackColor};
      scrollbar-width: ${options.scrollWidth};
    }`;  
  }

  const addWebkitStyles = (options) =>{
    let webkitCssRulesCollection = [];

    webkitCssRulesCollection.push(`${options.selector}::-webkit-scrollbar{
                                      width:${options.scrollWidth}px;}`);

    webkitCssRulesCollection.push(`${options.selector}::-webkit-scrollbar-track{
                                      background:${options.scrollTrackColor};}`);

    webkitCssRulesCollection.push( `${options.selector}::-webkit-scrollbar-thumb{
                                      background:${options.scrollThumbBackground};}`);

    webkitCssRulesCollection.push(`${options.selector}::-webkit-scrollbar-thumb:hover{
                                      background:${options.scrollThumbHoverBackground};}`);
                
    if(options.useArrows){
      webkitCssRulesCollection.push(`${options.selector}::-webkit-scrollbar-button:vertical:increment{
                                      background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC4xMiA5LjI5TDEyIDEzLjE3bDMuODgtMy44OGMuMzktLjM5IDEuMDItLjM5IDEuNDEgMCAuMzkuMzkuMzkgMS4wMiAwIDEuNDFsLTQuNTkgNC41OWMtLjM5LjM5LTEuMDIuMzktMS40MSAwTDYuNyAxMC43Yy0uMzktLjM5LS4zOS0xLjAyIDAtMS40MS4zOS0uMzggMS4wMy0uMzkgMS40MiAweiIvPjwvc3ZnPg==) center center no-repeat;
                                      display: block;
                                      background-size: contain; }`);

      webkitCssRulesCollection.push(`${options.selector}::-webkit-scrollbar-button:vertical:decrement{
                                    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC4xMiAxNC43MUwxMiAxMC44M2wzLjg4IDMuODhjLjM5LjM5IDEuMDIuMzkgMS40MSAwIC4zOS0uMzkuMzktMS4wMiAwLTEuNDFMMTIuNyA4LjcxYy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMEw2LjcgMTMuM2MtLjM5LjM5LS4zOSAxLjAyIDAgMS40MS4zOS4zOCAxLjAzLjM5IDEuNDIgMHoiLz48L3N2Zz4=) center center no-repeat;
                                    display: block;
                                    background-size: contain;}`);            
    }

    return webkitCssRulesCollection;
  }

  const addIEStyles = (options) =>{
    return`${options.selector}{
      scrollbar-face-color:${options.scrollThumbBackground};
      scrollbar-arrow-color:#05B7FF;
      scrollbar-track-color:${options.scrollTrackColor};
      scrollbar-shadow-color:#05B7FF;
      scrollbar-highlight-color:#05B7FF;
      scrollbar-3dlight-color:#808080;
      scrollbar-darkshadow-Color:#202020;
    }`;
  }

  const addStylesToElement = (options) => {
    let cssRulesCollection = [];
    //Create stylessheet and at it to head section
    let stylesheet = createStylesSheet();
    
    //General styling
    let generalStyling = `${options.selector}{
                            overflow:auto;
                          }`;
    cssRulesCollection.push(generalStyling);
    
    switch (detectBrowser()) {
      case Browser.firefox:
        cssRulesCollection.push(addFirefoxStyles(option));  
        break;
      case Browser.webkit:
            //Rules for webkit browsers (Chrome, Safari, Opera)   
            console.log('webkit');
        cssRulesCollection.concat(addWebkitStyles(options));
        break;
      case Browser.ie:
          cssRulesCollection.push(addIEStyles(options));
        break;
      default:
          console.log('%cNot supported browser', "color:red;font-size:18px;font:weight:600");
        break;
    }
    debugger;
    console.log('%cFeel free to contribute here: =>', "color:blue;font-size:18px;font:weight:600");
    let sheet = stylesheet.sheet;
    
    for (let i = 0; i < cssRulesCollection.length; i++) {
      sheet.insertRule(cssRulesCollection[i],i);        
    }
    debugger;
    

    console.log('sheet');
    console.log(sheet);
  }


module.exports = {
  run
}

