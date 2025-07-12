import './page.css';
import './component.css'
import loadHomePage from './loadHomepage';
import loadAboutPage from './loadAboutpage';
import loadMenuPage from './loadMenupage';

document.addEventListener('DOMContentLoaded', () => {
    loadHomePage();

    let homeBtn = document.getElementById('home');
    let aboutBtn = document.getElementById('about');
    let menuBtn = document.getElementById('menu');

    homeBtn.addEventListener('click', () => {
        loadHomePage();
    })
    aboutBtn.addEventListener('click', () => {
        loadAboutPage();
    })
    menuBtn.addEventListener('click', () => {
        loadMenuPage();
    })
})
console.log("Webpack is serving slayyyy")

function promise() {
    return new Promise
}