'use strict';
let tableData = document.querySelector('.use');

fetch('http://localhost:5000/api/User/PendingRegistration')
  .then((promise) => promise.json())
  .then((response) => {
    console.log(response);
    if (response.isSuccess == true) {
      tableData.innerHTML += `<h2 style= "margin-left:9vw;">List of pending registration</h2><hr>`;
      response.data.forEach((element) => {
        tableData.innerHTML += `<div class="app-user">
                <div class="user-body">
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
                       <a href= "/SignUp/verify.html?email=${element.email}" class="partial-sign2" style="padding:0.2rem 2.4rem !important;background-color:green; border-radius:15px; color: white !important; font-weight: bolder;text-align: center;" class="nav-link text-dark" id="${element.email}">Verify</a>
                        </div>
                        </div>
                    </div><hr>`;
      });

      console.log(response);
    }
  });
