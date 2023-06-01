'use strict';
let tableData = document.querySelector('.use');
var inputFromRoute = window.location.href.split('=')[1];

let submitButton = document.querySelector('#completed-task');
let input = document.querySelector('.search-search');

let Submit = () => {
  console.log(input.value);
  if (input.value == '' || input.value == undefined) {
    input.value = inputFromRoute;
  }
  fetch(`http://localhost:5000/api/User/SearchUser/${input.value}`)
    .then((promise) => promise.json())
    .then((response) => {
      debugger;
      console.log(response);
      if (response.isSuccess == true) {
        let tableData = document.querySelector('.use');
        response.data.forEach((element) => {
          if (element.isActive == true) {
            tableData.innerHTML += `<div class="user-body">
              <div class="user-picture"><img style="width:150px;height:150px; object-fit:cover" src="${`http://localhost:5000/Images/${element.profilePicture}`}" alt="user Picture"></div>
              <div class="user-detail">
                  <div><span class="user-font">Name: </span> <span class="user-font">${element.name}</span></div>
                   <div><span class="user-font">User name: </span> <span class="user-font">${element.userName}</span></div>
                  <div><span class="user-font">Role: </span> <span class="user-font">${element.role}</span></div>
                   <div><span class="user-font">Gender: </span> <span class="user-font">${element.gender}</span></div>
                   <div><span class="user-font">Number: </span> <span class="user-font">${element.phoneNumber}</span></div>
                  <div><span class="user-font">State: </span> <span class="user-font">${element.state}</span></div>
                   <div><span class="user-font">LGA: </span> <span class="user-font">${element.localGovernment}</span></div>

                   <div style=" margin-bottom: 1rem; margin-left: 1.5rem !important;  margin:2vh 10vw;" class="partial-sign">
                      <a href= "/Farmer/DeleteFarmerUsingId.html?userId=${element.email}" class="partial-sign2" style="padding:0.2rem 2.4rem !important;background-color:green; border-radius:15px; color: white !important; font-weight: bolder;text-align: center;" class="nav-link text-dark" id="${element.email}">Delete</a>
                       </div>
                       </div>
                   </div><hr>`;
          } else if (element.isActive == false) {
            tableData.innerHTML += `<div class="user-body">
          <div class="user-picture"><img style="width:150px;height:150px; object-fit:cover" src="${`http://localhost:5000/Images/${element.profilePicture}`}" alt="user Picture"></div>
          <div class="user-detail">
              <div><span class="user-font">Name: </span> <span class="user-font">${element.name}</span></div>
               <div><span class="user-font">User name: </span> <span class="user-font">${element.userName}</span></div>
              <div><span class="user-font">Role: </span> <span class="user-font">${element.role}</span></div>
               <div><span class="user-font">Gender: </span> <span class="user-font">${element.gender}</span></div>
               <div><span class="user-font">Number: </span> <span class="user-font">${element.phoneNumber}</span></div>
              <div><span class="user-font">State: </span> <span class="user-font">${element.state}</span></div>
               <div><span class="user-font">LGA: </span> <span class="user-font">${element.localGovernment}</span></div>

                <div><span class="user-font">Status: </span> <span style="color:red" class="user-font">Not Active</span></div>
                   <div style=" margin-bottom: 1rem; margin-left: 1.5rem !important;  margin:2vh 10vw;" class="partial-sign">
                      <a href= "/Farmer/DeleteFarmerUsingId.html?userId=${element.email}" class="partial-sign2"  style="padding:0.2rem 2.4rem !important;background-color:green; border-radius:15px; color: white !important; font-weight: bolder;text-align: center;" class="nav-link text-dark"  id="${element.email}">Add back</a>
                       </div>
                       </div>
                   </div><hr>`;
          }
        });
      }
    });
};
submitButton.addEventListener('click', Submit);
