import './style.css'
import {HomePage} from './page-load.js'
import {Menu} from './menu.js'
import {About} from "./about.js"
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

HomePage()

menuBtn.addEventListener('click', (e)=>
{
    const content = document.querySelector("#content");
    content.innerHTML = "";
    Menu()
})
homeBtn.addEventListener('click',(e)=>
{
    const content = document.querySelector("#content");
    content.innerHTML = "";
    HomePage()
})

aboutBtn.addEventListener('click',(e)=>
    {
        const content = document.querySelector("#content");
        content.innerHTML = "";
        About()
    })