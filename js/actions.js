import * as elements from './elements.js';
import * as images from './images.js';

export function changeImgPage(action) {
    const img = action === 'home' ? images.home : action === 'universe' ? images.universe : images.exploration;
    
    elements.changeImg.style.backgroundImage = `url(${img})`;
}