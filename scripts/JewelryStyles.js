import { getStyles, setStyle, getCurrentOrder } from "./dataAccess.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {    
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))

        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    const currentOrder = getCurrentOrder()

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(style => {
        if(currentOrder.styleId === style.id) {
            html += `<li>
                <input type="radio" name="style" value="${style.id}" checked='checked' /> ${style.carets}
            </li>`
            } else {
                html += `<li>
                <input type="radio" name="style" value="${style.id}" /> ${style.style}
            </li>`
            }
        })

    console.log(currentOrder)

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

export const currentStyleOnOrder = () => {
    const currentOrder = getCurrentOrder();
  
    let html = "<ul>";
  
    if (currentOrder.styleId) {
      const foundStyleInOrder = styles.find((style) => {
        return style.id === currentOrder.styleId;
      });
  
      html += `
      Style - ${foundStyleInOrder.style}`;
  
      html += "</ul>";
    }
  
    return html;
  };
