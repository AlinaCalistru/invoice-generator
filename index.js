let services = [
  { name: "Wash Car", price: 10 },
  { name: "Mow Lawn", price: 20 },
  { name: "Pull Weeds", price: 30 }
];

function addServices() {
  const serviceContainer = document.querySelector(".buttons");
  // alert("test");
  // serviceContainer.innerHTML = ""
  for (let i = 0; i < services.length; i++) {
    console.log(i);
    const addServices = document.createElement("button");
    addServices.classList.add("btn-service")
    addServices.dataset.name = services[i].name;
    addServices.dataset.price = services[i].price;
    addServices.dataset.index = i;
    addServices.textContent = services[i].name + " $" + services[i].price;
    serviceContainer.append(addServices);
  }
}

addServices();


const serviceOrders = document.querySelectorAll(".buttons");

Array.from(serviceOrders).forEach(function (element) {
    element.addEventListener("click", addToOrder);
  });


function addToOrder(el){
    const orderEl = document.createElement("li");
    let ulEl= document.querySelector(".selected-services");
    orderEl.textContent = el.target.dataset.name;
    ulEl.append(orderEl);
}




// //   reset button 
// function resetItems(){
//         document.getElementById("btn-send").onclick = function() {
//         document.getElementById("button").value = "";
// }
// };