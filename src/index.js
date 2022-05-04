import pageLoad from './page-load.js';
import home from './home.js'
import menu from './menu.js'
import contact from './contact.js'
import './style.css';

pageLoad();
document.getElementById('btn0').addEventListener('click', () => {
    home();
})
document.getElementById('btn1').addEventListener('click', () => {
    menu();
})
document.getElementById('btn2').addEventListener('click', () => {
    contact();
})