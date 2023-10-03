import * as elements from './elements.js';
import { changeImgPage } from './actions.js';

export function registerControls() {
    elements.pagesControls.addEventListener('click', (event) => {
        const action = event.target.dataset.action;
        console.log(action);
        changeImgPage(action);
    })                                                                 
    
}                             