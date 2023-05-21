'use strict';
var requestId = window.location.href.split('=')[1];
var productName = document.querySelector('.productName');
var price = document.querySelector('.price');
var measurement = document.querySelector('.measurement');
var quantity = document.querySelector('.quantity');

fetch(`https://localhost:7256/api/Product/GetProductById/${requestId}`)
  .then((promise) => promise.json())
  .then((response) => {
    console.log(response);
    if (response.isSuccess == true) {
      productName.value = response.data.productName;
      price.value = response.data.price;
      measurement.value = response.data.measurement;
    } else {
      document.getElementById('msg').textContent = response.message;
    }
  });

let myForm = document.querySelector('#requested-product');
let button = document.querySelector('.submit-form');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
let Submit = () => {
  let sendForm = new FormData(myForm);
  console.log(sendForm);

  fetch(
    `https://localhost:7256/api/RequestedProduct/CreateRequestedProduct/${requestId}`,
    {
      method: 'POST',
      body: sendForm,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('setToken')}`,
      },
    }
  ).then((response) => {
    debugger;
    console.log('1');
    response.json();
    document.location.href = '/Product/availableProduct.html';
  });
};
button.addEventListener('click', Submit);
