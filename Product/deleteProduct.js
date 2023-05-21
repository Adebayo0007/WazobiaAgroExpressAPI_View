'use strict';
var id = window.location.href.split('=')[1];
var productName = document.getElementById('productName');
var price = document.getElementById('price');
var measurement = document.getElementById('measurement');
var quantity = document.getElementById('quantity');
var dateFrom = document.getElementById('dateFrom');
var dateTo = document.getElementById('dateTo');

// console.log(email)
fetch(`https://localhost:7256/api/Product/GetProductById/${id}`)
  .then((promise) => promise.json())
  .then((response) => {
    console.log(response);
    debugger;
    if (response.isSuccess == true) {
      productName.textContent = response.data.productName;
      price.textContent = response.data.price;
      measurement.textContent = response.data.measurement;
      quantity.textContent = response.data.quantity;
      dateFrom.textContent = response.data.availabilityDateFrom
        .toString()
        .substring(0, 10);
      dateTo.textContent = response.data.availabilityDateTo
        .toString()
        .substring(0, 10);
    } else {
      document.getElementById('msg').textContent = response.message;
    }
  });

let myrequest = document.querySelector('.submit-form');

let Submit = () => {
  fetch(`https://localhost:7256/api/Product/DeleteProduct/${id}`, {
    method: 'DELETE',
  }).then((response) => {
    response.json();
    document.location.href = '/Product/myProduct.html';
  });
};
myrequest.addEventListener('click', Submit);
