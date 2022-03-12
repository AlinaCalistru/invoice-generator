let services = [
   { name: "Wash Car", price: 10 },
  { name: "Mow Lawn", price: 20 },
  { name: "Pull Weeds", price: 30 },
];

let selectedServices = [];
let total = 0;

function addServicesBtns() {
  const serviceContainer = document.querySelector(".buttons");
  for (let i = 0; i < services.length; i++) {
    console.log(i);
    const addServices = document.createElement("button");
    addServices.classList.add("btn-service");
    addServices.dataset.index = i;
    addServices.textContent = services[i].name + " $" + services[i].price;
    serviceContainer.append(addServices);
  }
}

addServicesBtns();

const serviceOrders = document.querySelectorAll(".buttons");

Array.from(serviceOrders).forEach(function (element) {
  element.addEventListener("click", addService);
});

function addService(el) {
  const index = el.target.dataset.index;
  if (!selectedServices.includes(index)) {
    selectedServices.push(index);
    total += services[index].price;
    renderServices();
  }
}

function renderServices() {
  let ulEl = document.querySelector(".selected-services");
  ulEl.innerHTML = "";
  Array.from(selectedServices).forEach(function (index) {
    console.log(index);
    const orderEl = document.createElement("li");
    orderEl.classList.add("service");
    const orderNameEl = document.createElement("div");
    const orderPriceEl = document.createElement("div");
    const removeEl = document.createElement("a");
    removeEl.dataset.index = index;
    removeEl.addEventListener("click",  removeService);
    removeEl.innerHTML = " Remove";
    removeEl.classList.add("remove");
    orderNameEl.innerHTML = services[index].name;
    orderNameEl.append(removeEl);
    orderPriceEl.innerHTML = "<span>$</span>" + services[index].price;
    orderEl.append(orderNameEl);
    orderEl.append(orderPriceEl);
    ulEl.append(orderEl);
  });
  const totalEl = document.querySelector(".total");
  totalEl.innerHTML = "<span>$</span>" + total;
}

function removeService(el){
  console.log("aaaaa")
  console.log(selectedServices);
  el.preventDefault();
  let idx = el.target.dataset.index;
  console.log(idx)
  let findItem = selectedServices.indexOf(idx);
  selectedServices.splice(findItem, 1);
  total -= services[idx].price;
  renderServices();
}

const btnSend = document.getElementById("btn-send");
btnSend.addEventListener("click", function(){
  total = 0;
  selectedServices = [];
  renderServices();
})