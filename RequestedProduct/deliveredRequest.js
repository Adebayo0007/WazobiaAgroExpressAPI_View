'use strict'
let button = document.querySelector('.submit-form');
let requestId = window.location.href.split('=')[1];
let deliveredRequest = function(){
    
    fetch(`http://localhost:5000/api/RequestedProduct/DeliveredRequest/${requestId}`,
    {
        method : 'PATCH',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('setToken')}`,
          },
    })
    .then((response) => {
          response.json();
          document.location.href = "/RequestedProduct/orderedProductAndPendingProduct.html";
    })
}
button.addEventListener('click', deliveredRequest);