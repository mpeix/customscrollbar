import Scroll from './js/scroll/scroll';

import './css/styles.scss';

document.addEventListener('DOMContentLoaded', () =>{
    console.log('DOMContentLoaded -->');    
    new Scroll({selector: '.scrollable-container'});
});