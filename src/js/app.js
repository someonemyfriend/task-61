//import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let elements = document.querySelectorAll(".hot");
 console.log(elements);
 
// elements.textContent = '🔥';

  if(elements){
    console.log(elements);
    for(let element of elements){
      let child = document.createElement("i");
      child.setAttribute("class", 'fa fa-fire');
      element.appendChild(child).textContent = '🔥';;
    }
  }

}

);
