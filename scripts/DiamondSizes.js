import { getSizes, setSize, getCurrentOrder } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    const currentOrder = getCurrentOrder()



    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {

        if(currentOrder.sizeId === size.id) {
            html += `<li>
                <input type="radio" name="size" value="${size.id}" checked='checked' /> ${size.carets}
            </li>`
            } else {
                html += `<li>
                <input type="radio" name="size" value="${size.id}" /> ${size.carets}
            </li>`
            }
        // return `<li>
        //     <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        // </li>`
    })
console.log(currentOrder)
    html += listItems.join("")
    html += "</ul>"

    return html
}


  export const currentSizeOnOrder = () => {
    const currentOrder = getCurrentOrder();
  
    let html = "<ul>";
  
    if (currentOrder.sizeId) {
      const foundSizeInOrder = sizes.find((size) => {
        return size.id === currentOrder.sizeId;
      });
  
      html += `
      Size - ${foundSizeInOrder.carets} caret(s)`;
  
      html += "</ul>";
    }
  
    return html;
  };
