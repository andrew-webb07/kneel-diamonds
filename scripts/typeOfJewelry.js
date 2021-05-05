import { getCurrentOrder, getJewelryTypes, setJewelryType } from "./dataAccess.js";

const jewelryTypes = getJewelryTypes();

document.addEventListener("change", (eventChange) => {
  if (eventChange.target.name === "jewelryType") {
    setJewelryType(parseInt(eventChange.target.value))
    document.dispatchEvent(new CustomEvent("stateChanged"))
  }
});

export const DiamondStyle = () => {
  let html = "<ul class='jewelryTypeList'>";

  const currentOrder = getCurrentOrder()

  const jewelryTypeListItems = jewelryTypes.map((jewelryType) => {
    if (jewelryType.id === currentOrder.jewelryTypeId) {
      html += `<li>
                <input type="radio" name="jewelryType" value="${jewelryType.id}" checked='checked' /> ${jewelryType.type}
            </li>`
            } else {
                html += `<li>
                <input type="radio" name="jewelryType" value="${jewelryType.id}" /> ${jewelryType.type}
            </li>`
            }
    });

  html += jewelryTypeListItems.join("")

  html+= "</ul>"
  return html
};

export const currentJewelryTypeOnOrder = () => {
  const currentOrder = getCurrentOrder();

  let html = "<ul>";

  if (currentOrder.jewelryTypeId) {
    const foundJewelryTypeInOrder = jewelryTypes.find((jewelryType) => {
      return jewelryType.id === currentOrder.jewelryTypeId;
    });

    html += `
    Jewelry Type - ${foundJewelryTypeInOrder.type}`;

    html += "</ul>";
  }

  return html;
};

