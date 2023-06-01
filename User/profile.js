'use strict'
let email = localStorage.getItem('email');
let profilePage = document.querySelector('.profile');
    
    fetch(`http://localhost:5000/api/User/GetUserByEmail/${email}`,
    {
        method : 'GET',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('setToken')}`,
          },
    })
    .then((response) => {
          return response.json();
          
    })
    .then(data =>{
        generateProfile(data);
    });

const generateProfile = function(element){
    profilePage.innerHTML += `
    <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
<div class="col-xl-6 col-md-12">
                                                <div class="card user-card-full">
                                                    <div class="row m-l-0 m-r-0">
                                                         <div class="col-sm-4 bg-c-lite-green user-profile">
                                                            <div class="card-block text-center text-white">
                                                                <div class="m-b-25">
                                                                    <img style="width:150px;height:150px; object-fit:cover"  src="${`http://localhost:5000/Images/${element.data.profilePicture}`}"class="img-radius" alt="Farmer-Profile-Image">
                                                                </div>
                                                                <h6 style="color: black !important;" class="f-w-600">${element.data.userName}</h6>
                                                                <p style="color: purple !important;">${element.data.role}</p>
                                                                <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                                            </div>
                                                        </div> 
                                                        <div class="col-sm-8">
                                                            <div class="card-block">
                                                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Your Profile</h6>
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">User Name</p>
                                                                        <h6 class="text-muted f-w-400">${element.data.userName}</h6>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Name</p>
                                                                        <h6 class="text-muted f-w-400">${element.data.name}</h6>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Email</p>
                                                                        <h6 class="text-muted f-w-400">${element.data.email}</h6>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Phone</p>
                                                                        <h6 class="text-muted f-w-400">${element.data.phoneNumber}</h6>
                                                                    </div>
                                                                     <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Gender</p>
                                                                        <h6 class="text-muted f-w-400">${element.data.gender}</h6>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Role</p>
                                                                        <h6 class="text-muted f-w-400">${element.data.role}</h6>
                                                                    </div>
                                                                     <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Address</p>
                                                                        <h6 class="text-muted f-w-400">${element.data.fullAddress}</h6>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">LGA</p>
                                                                        <h6 class="text-muted f-w-400">${element.data.localGovernment}</h6>
                                                                    </div>
                                                                     <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">State</p>
                                                                        <h6 class="text-muted f-w-400">${element.data.state}</h6>
                                                                    </div>
                                                                </div><br>
                                                                <div class="profile-opt">
                                                                    <div class="profile-update"><a asp-controller="Farmer" asp-action="UpdateFarmer"><span class="profile-update">Edit</span></a></div>
                                                                     <div class="back-to-profile"><a asp-controller="Farmer" asp-action="FarmerIndex"><span class="profile-update">Board</span></a></div>
                                                                </div>
                                                                <ul class="social-link list-unstyled m-t-40 m-b-10">
                                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                             </div>
                                                </div>
                                            </div>
                                            `;

}

// button.addEventListener('click', deliveredRequest);