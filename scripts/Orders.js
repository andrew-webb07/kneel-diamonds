import { getOrders } from "./database.js"
import { getMetals } from "./database.js"
import {getSizes} from "./database.js"
import {getStyles} from "./database.js"
import {getJewelryTypes , getCurrentOrder} from "./database.js"

const metals = getMetals();
const sizes = getSizes()
const styles = getStyles()
const jewelryTypes = getJewelryTypes()





const buildOrderListItem = (order) => {

   // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find((metal) => {
    if(metal.id === order.metalId) {
        return true
    }
  })

  const foundSize = sizes.find((size) => {
    if(size.id === order.sizeId) {
        return true
    }
  })

  const foundStyle = styles.find((style) => {
    if(style.id === order.styleId) {
        return true
    }
  })

  const foundJewelryType = jewelryTypes.find((jewelryType) => {
    if(jewelryType.id === order.jewelryTypeId) {
        return true
    }
  })

  let totalCost = foundMetal.price + foundSize.price + foundStyle.price;


  if(foundJewelryType.id === 2) {
    totalCost = totalCost * 2
  }
  else if (foundJewelryType.id === 3) {
    totalCost = totalCost * 4
  }


  const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })

 

    return `<li>Order #${order.id} cost ${costString}</li>`
}


export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

export const currentOrder = () => {

  let currentOrder = getCurrentOrder()

  document.addEventListener("click", 
  (clickEvent) => {
    if(clickEvent.target.name === "metal") {
      const foundMetalInOrder = metals.find(metal => {
        metal.id === currentOrder.metalId
        return foundMetalInOrder
      })
    }

  })

  

  

  // const foundSizeInOrder = sizes.find(size => {
  //   return size.id === currentOrder.sizeId
  // })

  // const foundStyleInOrder = styles.find(style => {
  //   return style.id === currentOrder.styleId
  // })

  let html = "<ul>"

  html += `Order - ${currentOrder.id}
  Metal - ${foundMetalInOrder.metal}`
  // Size - ${foundSizeInOrder.carets}
  // Style - ${foundStyleInOrder.style}

  html += "</ul>"

  return html
}

