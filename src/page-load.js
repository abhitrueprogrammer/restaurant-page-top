
import img from './images/resturant.png'
export function  HomePage(){
    console.log('Hello World!');
    const content = document.querySelector("#content")
    const h1 = document.createElement("h1")
    h1.textContent = "My resturant is cool."
    content.appendChild(h1)

    const p = document.createElement("p")
    p.textContent = "Your resturant is not cool. Your resturant sux."
    content.appendChild(p)
    const image = new Image()
    image.src  = img
    image.classList.toggle("img")
    content.appendChild(image)
}