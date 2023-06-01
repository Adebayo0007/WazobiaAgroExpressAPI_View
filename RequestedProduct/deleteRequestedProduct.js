'use strict';
var requestId = window.location.href.split('=')[1];
var productName = document.getElementById('productName');
var price = document.getElementById('price');
var button = document.querySelector('.submit-form')

// console.log(email)

console.log(requestId);
fetch(
  `http://localhost:5000/api/RequestedProduct/GetRequestedProductById/${requestId}`,
  {
    method: 'GET',
  }
)
  .then((promise) => promise.json())
  .then((response) => {
    console.log(response);
    debugger;
    if (response.isSuccess == true) {
      productName.textContent = response.data.productName;
      price.textContent = response.data.price;
    } else {
      document.getElementById('msg').textContent = response.message;
    }
  });

  button.addEventListener('click', function(){
    fetch(
      `http://localhost:5000/api/RequestedProduct/DeleteRequest/${requestId}`,
      {
        method: 'DELETE',
      }
    )
      .then((promise) =>  {location.href = '/RequestedProduct/orderedProductAndPendingProduct.html'})
  })
