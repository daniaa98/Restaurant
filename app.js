'use strict';
function Food ( name, type,price) {
    this.id = this.id();
  this.name = name;
  this.type = type;
  this.price = price;

}
Food.prototype.id = function () {
    return Math.floor(Math.random()*100) + 300;
}

let table = document.getElementById("table");
let body=document.getElementsByTagName("body")[0];
body.appendChild(table);
Food.prototype.render = function () {
    let rowInf = document.createElement("tr");

    let idCell = document.createElement("td");
  idCell.textContent = this.id;
  rowInf.appendChild(idCell);

  let nameCell = document.createElement("td");
  nameCell.textContent = this.name;
  rowInf.appendChild(nameCell);

  let typeCell = document.createElement("td");
  typeCell.textContent =  getTypeLabel(this.type);
  rowInf.appendChild(typeCell);

  let priceCell = document.createElement("td");
  priceCell.textContent = this.price;
  rowInf.appendChild(priceCell);

  table.appendChild(rowInf);
    
}
function getTypeLabel(type) {
    switch (type) {
      case "1":
        return "Fruit and vegetables";
      case "2":
        return "Starchy food";
      case "3":
        return "Dairy";
      case "4":
        return "Protein";
      case "5":
        return "Fat";
      default:
        return "";
    }
  }
function handler (e){
    e.preventDefault();

    let name = e.target.food.value;
    let type = e.target.Typefood.value;
    let price = e.target.price.value;

   let inf = new Food (name,type,price);
   inf.render();
    


}
let savevalue = document.getElementById("save");
savevalue.addEventListener("submit",handler);