'use strict';
var id = window.location.href.split('=')[1];
var productName = document.querySelector('.productName');
var price = document.querySelector('.price');
var measurement = document.querySelector('.measurement');
var quantity = document.querySelector('.quantity');
var from = document.querySelector('.from');
var to = document.querySelector('.to');

fetch(`http://localhost:5000/api/Product/GetProductById/${id}`)
  .then((promise) => promise.json())
  .then((response) => {
    console.log(response);
    if (response.isSuccess == true) {
      productName.value = response.data.productName;
      price.value = response.data.price;
      measurement.value = response.data.measurement;
      quantity.value = response.data.quantity;
      from.value = response.data.availabilityDateFrom
        .toString()
        .substring(0, 10);
      to.value = response.data.availabilityDateTo.toString().substring(0, 10);
    } else {
      document.getElementById('msg').textContent = response.message;
    }
  });

let myForm = document.querySelector('#edit-product');
let button = document.querySelector('.submit-form');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
let Submit = () => {
  let sendForm = new FormData(myForm);
  console.log(sendForm);

  fetch(`http://localhost:5000/api/Product/UpdateProduct/${id}`, {
    method: 'PATCH',
    body: sendForm,
  }).then((response) => {
    debugger;
    console.log('1');
    response.json();
    document.location.href = '/Product/myProduct.html';
  });
};
button.addEventListener('click', Submit);
