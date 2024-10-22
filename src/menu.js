const menu = ["Paneer Butter Masala", "Chicken Biryani", "Masala Dosa", "Rajma Chawal", "Aloo Paratha", "Butter Naan", "Chole Bhature", "Samosa", "Gulab Jamun", "Rasgulla"]
// Convert menu to json and add prices
export function Menu()
{
    const content = document.querySelector("#content")
    const h1 = document.createElement("h1")
    h1.textContent = "Menu"
    content.appendChild(h1) 
    const ul = document.createElement("ul");
    for( const item of menu)
    {
        const list = document.createElement("li");
        list.textContent = item
        ul.appendChild(list)
    } 
    content.appendChild(ul)
}