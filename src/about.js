const aboutText = 
` 
Our resturant owes its everything to abhitruechamp.
Our founder is the reason our resturant is so kewl.
Our founder is the reason our resturant is a jewel.

`
export function About()
{
    const content = document.querySelector("#content")
    const h1 = document.createElement("h1")
    h1.textContent = "About"
    content.appendChild(h1) 
    const p = document.createElement("p")
    p.textContent = aboutText
    content.appendChild(p)

}