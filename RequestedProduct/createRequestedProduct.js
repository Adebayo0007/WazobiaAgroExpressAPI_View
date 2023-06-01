'use strict';
var requestId = window.location.href.split('=')[1];
var productName = document.querySelector('.productName');
var price = document.querySelector('.price');
var measurement = document.querySelector('.measurement');
var quantity = document.querySelector('.quantity');
var form = document.querySelector('#requested-product');
var error = document.querySelector('#err-message');

fetch(`http://localhost:5000/api/Product/GetProductById/${requestId}`)
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
    `http://localhost:5000/api/RequestedProduct/CreateRequestedProduct/${requestId}`,
    {
      method: 'POST',
      body: sendForm,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('setToken')}`,
      },
    }
  )
    .then((response) => {
      debugger;
      if (response.ok != true && response.status != 500)
      {
        location.href = 'http://127.0.0.1:5501/Payment/payment.html';
      }
      if (response.status == 500) error.textContent = 'internal server error';
      if(response.status == 200) location.href = '/Product/availableProduct.html';
      response.json();
    })
    // .then((data) => {
    //   location.href = 'http://127.0.0.1:5501/Payment/payment.html';
    // })
    // .catch((err) => alert(JSON.parse(err.message)));
};
button.addEventListener('click', Submit);
