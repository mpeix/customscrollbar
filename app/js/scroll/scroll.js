import Browser from '../../enums/browsers';
import {detectBrowser} from './browserUtils';

export default class Scroll {

  constructor(options){
    const {selector, scrollWidth, scrollTrackColor, scrollThumbBackground, scrollThumbHoverBackground,
      useArrows} = options;


      this.createStylesSheet = this.createStylesSheet.bind(this);
      this.addStylesSheetToHeadSection = this.addStylesSheetToHeadSection.bind(this);
      this.addWebkitStyles = this.addWebkitStyles.bind(this);
      this.addFirefoxStyles = this.addFirefoxStyles.bind(this);
      this.addIEStyles = this.addIEStyles.bind(this);
      this.addStylesToElement = this.addStylesToElement.bind(this);

      this.options = {
        selector: selector || '',
        scrollWidth: scrollWidth || 5,
        scrollTrackColor: scrollTrackColor || '#888',       
        scrollThumbBackground: scrollThumbBackground || 'black',
        scrollThumbHoverBackground: scrollThumbHoverBackground || 'lightgray',
        useArrows: useArrows || false,
      };
      
      this.addStylesToElement(this.options);
  }

  createStylesSheet() {
      let stylesSheet = document.createElement('style');
      stylesSheet.type = 'text/css';
      return stylesSheet;
  }

  addStylesSheetToHeadSection(stylesheet){
    debugger;
    stylesheet && document.head.appendChild(stylesheet);
  }

  addFirefoxStyles(){
    return `${this.options.selector}{
      scrollbar-color: ${this.options.scrollThumbBackground} ${this.options.scrollTrackColor};
      scrollbar-width: ${this.options.scrollWidth};
    }`;  
  }

  addWebkitStyles(){
    let webkitCssRulesCollection = [];

    webkitCssRulesCollection.push(`${this.options.selector}::-webkit-scrollbar{
                                      width:${this.options.scrollWidth}px;}`);

    webkitCssRulesCollection.push(`${this.options.selector}::-webkit-scrollbar-track{
                                      background:${this.options.scrollTrackColor};}`);

    webkitCssRulesCollection.push( `${this.options.selector}::-webkit-scrollbar-thumb{
                                      background:${this.options.scrollThumbBackground};}`);

    webkitCssRulesCollection.push(`${this.options.selector}::-webkit-scrollbar-thumb:hover{
                                      background:${this.options.scrollThumbHoverBackground};}`);
                
    if(this.options.useArrows){
      webkitCssRulesCollection.push(`${this.options.selector}::-webkit-scrollbar-button:vertical:increment{
                                      background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC4xMiA5LjI5TDEyIDEzLjE3bDMuODgtMy44OGMuMzktLjM5IDEuMDItLjM5IDEuNDEgMCAuMzkuMzkuMzkgMS4wMiAwIDEuNDFsLTQuNTkgNC41OWMtLjM5LjM5LTEuMDIuMzktMS40MSAwTDYuNyAxMC43Yy0uMzktLjM5LS4zOS0xLjAyIDAtMS40MS4zOS0uMzggMS4wMy0uMzkgMS40MiAweiIvPjwvc3ZnPg==) center center no-repeat;
                                      display: block;
                                      background-size: contain; }`);

      webkitCssRulesCollection.push(`${this.options.selector}::-webkit-scrollbar-button:vertical:decrement{
                                    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC4xMiAxNC43MUwxMiAxMC44M2wzLjg4IDMuODhjLjM5LjM5IDEuMDIuMzkgMS40MSAwIC4zOS0uMzkuMzktMS4wMiAwLTEuNDFMMTIuNyA4LjcxYy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMEw2LjcgMTMuM2MtLjM5LjM5LS4zOSAxLjAyIDAgMS40MS4zOS4zOCAxLjAzLjM5IDEuNDIgMHoiLz48L3N2Zz4=) center center no-repeat;
                                    display: block;
                                    background-size: contain;}`);            
    }

    return webkitCssRulesCollection;
  }

  addIEStyles(){
    return`${this.options.selector}{
      scrollbar-face-color:${this.options.scrollThumbBackground};
      scrollbar-arrow-color:#05B7FF;
      scrollbar-track-color:${this.options.scrollTrackColor};
      scrollbar-shadow-color:#05B7FF;
      scrollbar-highlight-color:#05B7FF;
      scrollbar-3dlight-color:#808080;
      scrollbar-darkshadow-Color:#202020;
    }`;
  }

  addStylesToElement(){
    let cssRulesCollection = [];
    //Create stylessheet and at it to head section
    debugger;
    let stylesheet = this.createStylesSheet();
    this.addStylesSheetToHeadSection(stylesheet);
    //General styling
    let generalStyling = `${this.options.selector}{
                            overflow:auto;
                          }`;
    cssRulesCollection.push(generalStyling);
    
    switch (detectBrowser()) {
      case Browser.firefox:
        cssRulesCollection.push(this.addFirefoxStyles());  
        break;
      case Browser.webkit:
            //Rules for webkit browsers (Chrome, Safari, Opera)   
        cssRulesCollection.concat(this.addWebkitStyles());
        break;
      case Browser.ie:
          cssRulesCollection.push(this.addIEStyles());
        break;
      default:
          console.log('%cNot supported browser', "color:red;font-size:18px;font:weight:600");
        break;
    }
    console.log('%cFeel free to contribute here: =>', "color:blue;font-size:18px;font:weight:600");
    let sheet = stylesheet.sheet;
    for (let i = 0; i < cssRulesCollection.length; i++) {
      sheet.insertRule(cssRulesCollection[i],i);        
    }
  }
}

