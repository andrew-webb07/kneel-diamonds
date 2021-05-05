import { getMetals, setMetal, getCurrentOrder } from "./database.js";
import { currentOrder } from "./Orders.js";

const metals = getMetals();

document.addEventListener("change", (event) => {
  if (event.target.name === "metal") {
    setMetal(parseInt(event.target.value));
    document.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

export const Metals = () => {
  let html = "<ul>";

  const currentOrder = getCurrentOrder();

  // This is how you have been converting objects to <li> elements
  for (const metal of metals) {
    if (currentOrder.metalId === metal.id) {
      html += `<li>
            <input type="radio" name="metal" value="${metal.id}" checked='checked' /> ${metal.metal}
        </li>`;
    } else {
      html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`;
    }
  }
  console.log(currentOrder);
  html += "</ul>";
  return html;
};

export const currentMetalOnOrder = () => {
  const currentOrder = getCurrentOrder();

  let html = "<ul>";

  if (currentOrder.metalId) {
    const foundMetalInOrder = metals.find((metal) => {
      return metal.id === currentOrder.metalId;
    });

    html += `New Order - 
    Metal - ${foundMetalInOrder.metal}`;

    html += "</ul>";
  }

  return html;
};
