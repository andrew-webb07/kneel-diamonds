import {database} from "./database.js"

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    const totalCustomOrders = database.customOrders.length

    // database.orders.length > 0 ?
    
    
    if (totalCustomOrders < 1) {
        newOrder.id = 1
    } else {newOrder.id = [...database.customOrders].pop().id + 1}
  
    // newOrder.id = [...database.customOrders].pop().id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getCurrentOrder = () => {
    return {...database.orderBuilder}
}

export const getMetals = () => {
    return [...database.metals]
}

export const getStyles = () => {
    return [...database.styles]
}

export const getSizes = () => {
    return [...database.sizes]
}

export const getOrders = () => {
    return [...database.customOrders]
}

export const getJewelryTypes = () => {
    return [...database.jewelryTypes]
}

export const setJewelryType = (id) => {
    database.orderBuilder.jewelryTypeId = id
}

export const setMetal = (id) => {
    database.orderBuilder.metalId = id
}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
}