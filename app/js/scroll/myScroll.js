import Browser from '../../enums/browsers';
import {detectBrowser} from './browserUtils';

const run = (options) =>{
  const {selector, scrollWidth, scrollTrackColor, scrollThumbColor, scrollThumbHoverColor,
    useArrows} = options;

    let optionsOrDefaults = {
      selector: selector || '',
      scrollWidth: scrollWidth || 5,
      scrollTrackColor: scrollTrackColor || '#f5f5f6',       
      scrollThumbColor: scrollThumbColor || '#4f5b62',
      scrollThumbHoverColor: scrollThumbHoverColor || '#000a12',
      useArrows:useArrows || false,
    };
    
    let styleTag = document.getElementById('my-scroll-style');
    if(!styleTag){
      styleTag = document.createElement("style");
      styleTag.id = "my-scroll-style";
      styleTag.type = "text/css";
    }
   
    styleTag.innerText = '';
    let css = createStylesheetString(optionsOrDefaults);   
    styleTag.appendChild(document.createTextNode(css))
    document.head.appendChild(styleTag);
};

const createStylesheetString = (options) =>{
  let styles = `
    ${options.selector}::-webkit-scrollbar{
      width:${options.scrollWidth}px;
    }
    ${options.selector}::-webkit-scrollbar-track{
      background:${options.scrollTrackColor};
    }
    ${options.selector}::-webkit-scrollbar-thumb{
      background:${options.scrollThumbColor};
    }
    ${options.selector}::-webkit-scrollbar-thumb:hover{
      background:${options.scrollThumbHoverColor};
    }
    ${options.selector}{
      scrollbar-face-color:${options.scrollThumbColor};
      scrollbar-arrow-color:pink;
      scrollbar-track-color:${options.scrollTrackColor};
      scrollbar-shadow-color:${options.scrollThumbColor};
      scrollbar-highlight-color:green;
      scrollbar-3dlight-color:blue;
      scrollbar-darkshadow-Color:red;
    }
    ${options.selector}{
      scrollbar-color: ${options.scrollThumbBackground} ${options.scrollTrackColor};
      scrollbar-width: ${options.scrollWidth};
    }
  `;

  if(options.useArrows){
    styles += `${options.selector}::-webkit-scrollbar-button:vertical:increment{
      background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC4xMiA5LjI5TDEyIDEzLjE3bDMuODgtMy44OGMuMzktLjM5IDEuMDItLjM5IDEuNDEgMCAuMzkuMzkuMzkgMS4wMiAwIDEuNDFsLTQuNTkgNC41OWMtLjM5LjM5LTEuMDIuMzktMS40MSAwTDYuNyAxMC43Yy0uMzktLjM5LS4zOS0xLjAyIDAtMS40MS4zOS0uMzggMS4wMy0uMzkgMS40MiAweiIvPjwvc3ZnPg==) center center no-repeat;
      display: block;
      background-size: contain; }
      ${options.selector}::-webkit-scrollbar-button:vertical:decrement{
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC4xMiAxNC43MUwxMiAxMC44M2wzLjg4IDMuODhjLjM5LjM5IDEuMDIuMzkgMS40MSAwIC4zOS0uMzkuMzktMS4wMiAwLTEuNDFMMTIuNyA4LjcxYy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMEw2LjcgMTMuM2MtLjM5LjM5LS4zOSAxLjAyIDAgMS40MS4zOS4zOCAxLjAzLjM5IDEuNDIgMHoiLz48L3N2Zz4=) center center no-repeat;
        display: block;
        background-size: contain;}`
  }
  return styles;
};

module.exports = {
  run
}

