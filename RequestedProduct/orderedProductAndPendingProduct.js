'use strict';
let orderedTable = document.querySelector('#ordered');
let pendingTable = document.querySelector('#pending');
fetch(
  `http://localhost:5000/api/RequestedProduct/OrderedProductAndPendingProduct`,
  {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('setToken')}`,
    },
  }
)
  .then((promise) => {
    debugger;
    return promise.json();
  })
  .then((response) => {
    console.log('i am in');
    debugger;
    if (response.isSuccess == true) {
      response.data.orderedProduct.forEach((element) => {
        orderedTable.innerHTML += `<div class="app-user">
        <div style="height:18rem !important" class="user-body">
            <div class="user-detail">
                <div><span class="user-font">Product: </span> <span class="user-font">${element.productName}</span></div>
                 <div><span class="user-font">Email: </span> <span class="user-font">${element.buyerEmail}</span></div>
                 <div><span class="user-font">Location: </span> <span class="user-font">${element.buyerLocalGovernment}</span></div>
                  <div><span class="user-font">Farmer name: </span> <span class="user-font">${element.farmerName}</span></div>
                 <div><span class="user-font">Farmer no: </span> <span class="user-font">${element.farmerNumber}</span></div>
 
                       <div style=" margin:2vh 0vw;display:flex;justify-content:center;" class="partial-sign">
                        <a class="partial-sign2" style="text-decoration:none;color:white;background-color:green;padding:.5vh 1vw; border-radius:10px; font-size:15px;width:15vw;
                        text-align: center;" class="nav-link text-dark" href="/RequestedProduct/deleteRequestedProduct.html?requestId=${element.id}">Delete</a>
                         </div>
                </div>
            </div>
        </div><hr>`;
      });

      if (response.data.orderedProduct == 0) {
        orderedTable.innerHTML += `<h2 style = "color:red;">You've not ordered yet</h2>`;
      }

      response.data.pendingProduct.forEach((element) => {
        debugger;
        pendingTable.innerHTML += `<div class="app-user">
        <div style="height:18rem !important" class="user-body">
            <div class="user-detail">
                <div><span class="user-font">Product: </span> <span class="user-font">${element.productName}</span></div>
                 <div><span class="user-font">Email: </span> <span class="user-font">${element.buyerEmail}</span></div>
                 <div><span class="user-font">Location: </span> <span class="user-font">${element.buyerLocalGovernment}</span></div>
                  <div><span class="user-font">Farmer name: </span> <span class="user-font">${element.farmerName}</span></div>
                 <div><span class="user-font">Farmer no: </span> <span class="user-font">${element.farmerNumber}</span></div>
 
                       <div style=" margin:2vh 0vw;display:flex;justify-content:center;" class="partial-sign">
                        <a class="partial-sign2" style="text-decoration:none;color:white;background-color:green;padding:.5vh 1vw; border-radius:10px; font-size:10px;width:15vw;
                        text-align: center;" class="nav-link text-dark" href="/RequestedProduct/deliveredRequestedProduct.html?requestId=${element.id}">Delivered</a>
                         </div>
                        
                </div>
            </div>
        </div><hr>`;
      });

      if (response.data.pendingProduct == 0) {
        pendingTable.innerHTML += `<h2 style = "color:red;">You have no accepted order</h2>`;
      }
    }
  });
