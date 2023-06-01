'use strict';
let requestsTable = document.querySelector('#resqusts');
let farmerId = localStorage.getItem('id')
fetch(
  `http://localhost:5000/api/RequestedProduct/MyRequests/${farmerId}`,
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
      response.data.forEach((element) => {
        requestsTable.innerHTML += `<div class="app-user">
        <div style="height:18rem !important" class="user-body">
            <div class="user-detail">
                <div><span class="user-font">Product: </span> <span class="user-font">${element.productName}</span></div>
                 <div><span class="user-font">Email: </span> <span class="user-font">${element.buyerEmail}</span></div>
                 <div><span class="user-font">Location: </span> <span class="user-font">${element.buyerLocalGovernment}</span></div>
                  <div><span class="user-font">Buyer no: </span> <span class="user-font">${element.buyerPhoneNumber}</span></div>
                       <div style=" margin:2vh 0vw;display:flex;justify-content:center;" class="partial-sign">
                        <a class="partial-sign2" style="text-decoration:none;color:white;background-color:green;padding:.5vh 1vw; border-radius:10px; font-size:15px;width:15vw;
                        text-align: center;" class="nav-link text-dark" href="/Farmer/acceptMyRequestedProduct.html?requestId=${element.id}">Accept</a>
                         </div>
                </div>
            </div>
        </div><hr>`;
      });

      if (response.data == 0) {
        orderedTable.innerHTML += `<h2 style = "color:red;">You've no request yet</h2>`;
      }
    }
  });
