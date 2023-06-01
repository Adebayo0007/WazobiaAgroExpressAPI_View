'use strict'
let button = document.querySelector('.submit-form');
let requestId = window.location.href.split('=')[1];
let acceptRequest = function(){
    
    fetch(`http://localhost:5000/api/RequestedProduct/AcceptRequest/${requestId}`,
    {
        method : 'PATCH'
    })
    .then((response) => {
          response.json();
          document.location.href = "/Farmer/myRequest.html";
    })
}
button.addEventListener('click', acceptRequest);