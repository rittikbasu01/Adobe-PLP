import './css/home.css';
import './js/banner.js';
import './js/nav.js';
import './js/product.js';
import './js/drawer.js';
import bannerImage from './assets/banner.png';
import arrowDownImage from './assets/arrow-down.svg';
import arrowUpImage from './assets/arrow-up.svg';

const bannerImgElement = document.createElement('img');
bannerImgElement.src = bannerImage;
document.body.appendChild(bannerImgElement);

const arrowUpElement = document.createElement('img');
arrowUpElement.src = arrowUpImage;
document.body.appendChild(arrowUpElement);

const arrowDownImgElement = document.createElement('img');
arrowDownImgElement.src = arrowDownImage;
document.body.appendChild(arrowDownImgElement);