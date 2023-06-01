'use strict';
let tableData = document.querySelector('#use');
fetch('http://localhost:5000/api/Product/AvailableProducts', {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('setToken')}`,
  },
})
  .then((promise) => promise.json())
  .then((response) => {
    debugger;
    if (response.isSuccess == true) {
      response.data.forEach((element) => {
        let from = element.availabilityDateFrom.toString().substring(0, 10);
        let to = element.availabilityDateTo.toString().substring(0, 10);
        if (element.farmerRank < 3) {
          tableData.innerHTML += `<div class="bodyyy">
                <div class="content">
                <main>
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.firstDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.secondDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.thirdDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.forthDimentionPicture}`}">
                </main><br>
                    <div class="first"> <span class="title">${element.productName}</span><span class="price">₦${element.price}/${element.measurement}</span></div>
                    <div class="second"> <span>Quantity</span><span class="sec">${element.quantity}<span style ="font-size:15px;" class="sec">${element.measurement}(s)</span> </span> </div>
                    <div class="second"> <span>Location</span><span class="sec">${element.productState}/${element.productLocalGovernment}</span> </div>
                    <div class="third"> <span>Availability</span><span class="date">${from} - ${to}</span> </div>

                    <div class="third"> <span>Farmer Rank(<i class="fa-solid fa-star"></i>)</span><span class="date"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></span> </div> 


                    <div>
                    <div style ="display:flex;justify-content:center;"class="product-choice">               
                            <div><a style="text-decoration:none;color:white" href="/RequestedProduct/createRequestedProduct.html?requestId=${element.id}">Buy</a></div>
                      </div>
                   </div>


                    </div> 
                    <br>
                   </div>
                    `;
        }

        if (element.farmerRank >= 3 && element.farmerRank <= 6) {
          tableData.innerHTML += `<div class="bodyyy">
                <div class="content">
                <main>
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.firstDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.secondDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.thirdDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.forthDimentionPicture}`}">
               </main><br>
                    <div class="first"> <span class="title">${element.productName}</span><span class="price">₦${element.price}/${element.measurement}</span></div>
                    <div class="second"> <span>Quantity</span><span class="sec">${element.quantity}<span style ="font-size:15px;" class="sec">${element.measurement} (s)</span> </span> </div>
                    <div class="second"> <span>Location</span><span class="sec">${element.productState}/${element.productLocalGovernment}</span> </div>
                    <div class="third"> <span>Availability</span><span class="date">${from} - ${to}</span> </div>

                    <div class="third"> <span>Farmer Rank(<i class="fa-solid fa-star"></i>)</span><span class="date"><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></span> </div> 


                    <div>
                    <div style ="display:flex;justify-content:center;"class="product-choice">               
                            <div><a style="text-decoration:none;color:white" href="/RequestedProduct/createRequestedProduct?requestId=${element.id}">Buy</a></div>
                      </div>
                   </div>


                    </div> 
                    <br>
                   </div>
                    `;
        }

        if (element.farmerRank >= 7 && element.farmerRank <= 10) {
          tableData.innerHTML += `<div class="bodyyy">
                <div class="content">
                <main>
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.firstDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.secondDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.thirdDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.forthDimentionPicture}`}">
                </main><br>
                    <div class="first"> <span class="title">${element.productName}</span><span class="price">₦${element.price}/${element.measurement}</span></div>
                    <div class="second"> <span>Quantity</span><span class="sec">${element.quantity}<span style ="font-size:15px;" class="sec">${element.measurement} (s)</span> </span> </div>
                    <div class="second"> <span>Location</span><span class="sec">${element.productState}/${element.productLocalGovernment}</span> </div>
                    <div class="third"> <span>Availability</span><span class="date">${from} - ${to}</span> </div>

                    <div class="third"> <span>Farmer Rank(<i class="fa-solid fa-star"></i>)</span><span class="date"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></span> </div> 

                    <div>
                    <div style ="display:flex;justify-content:center;"class="product-choice">               
                            <div><a style="text-decoration:none;color:white" href="/RequestedProduct/createRequestedProduct?requestId=${element.id}">Buy</a></div>
                      </div>
                   </div>
                                      
                    
                    </div> 
                    <br>
                   </div>
                    `;
        }

        if (element.farmerRank >= 11 && element.farmerRank <= 14) {
          tableData.innerHTML += `<div class="bodyyy">
                <div class="content">
                <main>
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.firstDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.secondDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.thirdDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.forthDimentionPicture}`}">
               </main><br>
                    <div class="first"> <span class="title">${element.productName}</span><span class="price">₦${element.price}/${element.measurement}</span></div>
                    <div class="second"> <span>Quantity</span><span class="sec">${element.quantity}<span style ="font-size:15px;" class="sec">${element.measurement} (s)</span> </span> </div>
                    <div class="second"> <span>Location</span><span class="sec">${element.productState}/${element.productLocalGovernment}</span> </div>
                    <div class="third"> <span>Availability</span><span class="date">${from} - ${to}</span> </div>

                    <div class="third"> <span>Farmer Rank(<i class="fa-solid fa-star"></i>)</span><span class="date"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></span> </div> 
                    
                    

                    <div>
                    <div style ="display:flex;justify-content:center;"class="product-choice">               
                            <div><a style="text-decoration:none;color:white" href="/RequestedProduct/createRequestedProduct?requestId=${element.id}">Buy</a></div>
                      </div>
                   </div>
                    
                    
                    </div> 
                    <br>
                   </div>
                    `;
        }

        if (element.farmerRank >= 15 && element.farmerRank <= 18) {
          tableData.innerHTML += `<div class="bodyyy">
                <div class="content">
                <main>
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.firstDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.secondDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.thirdDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.forthDimentionPicture}`}">
               </main><br>
                    <div class="first"> <span class="title">${element.productName}</span><span class="price">₦${element.price}/${element.measurement}</span></div>
                    <div class="second"> <span>Quantity</span><span class="sec">${element.quantity}<span style ="font-size:15px;" class="sec">${element.measurement} (s)</span> </span> </div>
                    <div class="second"> <span>Location</span><span class="sec">${element.productState}/${element.productLocalGovernment}</span> </div>
                    <div class="third"> <span>Availability</span><span class="date">${from} - ${to}</span> </div>

                    <div class="third"> <span>Farmer Rank(<i class="fa-solid fa-star"></i>)</span><span class="date"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></span> </div> 
                    
                    
                    <div>
                    <div style ="display:flex;justify-content:center;"class="product-choice">               
                            <div><a style="text-decoration:none;color:white" href="/RequestedProduct/createRequestedProduct?requestId=${element.id}">Buy</a></div>
                      </div>
                   </div>

                    
                    </div> 
                    <br>
                   </div>
                    `;
        }

        if (element.farmerRank >= 19) {
          tableData.innerHTML += `<div class="bodyyy">
                <div class="content">
                <main>
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.firstDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.secondDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.thirdDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.forthDimentionPicture}`}">
               </main><br>
                    <div class="first"> <span class="title">${element.productName}</span><span class="price">₦${element.price}/${element.measurement}</span></div>
                    <div class="second"> <span>Quantity</span><span class="sec">${element.quantity}<span style ="font-size:15px;" class="sec">${element.measurement} (s)</span> </span> </div>
                    <div class="second"> <span>Location</span><span class="sec">${element.productState}/${element.productLocalGovernment}</span> </div>
                    <div class="third"> <span>Availability</span><span class="date">${from} - ${to}</span> </div>

                    <div class="third"> <span>Farmer Rank(<i class="fa-solid fa-star"></i>)</span><span class="date"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span> </div> 


                    <div>
                    <div style ="display:flex;justify-content:center;"class="product-choice">               
                            <div><a style="text-decoration:none;color:white" href="/RequestedProduct/createRequestedProduct?requestId=${element.id}">Buy</a></div>
                      </div>
                   </div>



                    </div> 
                    <br>
                   </div>
                    `;
        }
      });
      if (response.data == 0) {
        var msg = document.querySelector('#msg');
        msg.textContent =
          'There is no product available at your local government,you can kindly change your location to see more product';
      }
      console.log(response);
    }
  });

var search = document.querySelector('.search-search');

let SearchProduct = () => {
  fetch(`http://localhost:5000/api/Product/SearchProduct/${search.value}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('setToken')}`,
    },
  })
    .then((promise) => promise.json())
    .then((response) => {
      debugger;
      if (response.isSuccess == true) {
        response.data.forEach((element) => {
          let from = element.availabilityDateFrom.toString().substring(0, 10);
          let to = element.availabilityDateTo.toString().substring(0, 10);
          if (element.farmerRank < 3) {
            tableData.innerHTML = '';
            tableData.innerHTML += `<div class="bodyyy">
                <div class="content">
                <main>
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.firstDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.secondDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.thirdDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.forthDimentionPicture}`}">
                   </main><br>
                    <div class="first"> <span class="title">${element.productName}</span><span class="price">₦${element.price}/${element.measurement}</span></div>
                    <div class="second"> <span>Quantity</span><span class="sec">${element.quantity}<span style ="font-size:15px;" class="sec">${element.measurement}(s)</span> </span> </div>
                    <div class="second"> <span>Location</span><span class="sec">${element.productState}/${element.productLocalGovernment}</span> </div>
                    <div class="third"> <span>Availability</span><span class="date">${from} - ${to}</span> </div>

                    <div class="third"> <span>Farmer Rank(<i class="fa-solid fa-star"></i>)</span><span class="date"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></span> </div> 


                    <div>
                    <div style ="display:flex;justify-content:center;"class="product-choice">               
                            <div><a style="text-decoration:none;color:white" href="/RequestedProduct/createRequestedProduct.html?requestId=${element.id}">Buy</a></div>
                      </div>
                   </div>


                    </div> 
                    <br>
                   </div>
                    `;
          }

          if (element.FarmerRank >= 3 && element.FarmerRank <= 6) {
            tableData.innerHTML += `<div class="bodyyy">
                <div class="content">
                <main>
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.firstDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.secondDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.thirdDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.forthDimentionPicture}`}">
                </main><br>
                    <div class="first"> <span class="title">${element.productName}</span><span class="price">₦${element.price}/${element.measurement}</span></div>
                    <div class="second"> <span>Quantity</span><span class="sec">${element.quantity}<span style ="font-size:15px;" class="sec">${element.measurement} (s)</span> </span> </div>
                    <div class="second"> <span>Location</span><span class="sec">${element.productState}/${element.productLocalGovernment}</span> </div>
                    <div class="third"> <span>Availability</span><span class="date">${from} - ${to}</span> </div>

                    <div class="third"> <span>Farmer Rank(<i class="fa-solid fa-star"></i>)</span><span class="date"><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></span> </div> 


                    <div>
                    <div style ="display:flex;justify-content:center;"class="product-choice">               
                            <div><a style="text-decoration:none;color:white" href="/RequestedProduct/createRequestedProduct?requestId=${element.id}">Buy</a></div>
                      </div>
                   </div>


                    </div> 
                    <br>
                   </div>
                    `;
          }

          if (element.FarmerRank >= 7 && element.FarmerRank <= 10) {
            tableData.innerHTML += `<div class="bodyyy">
                <div class="content">
                <main>
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.firstDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.secondDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.thirdDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.forthDimentionPicture}`}">
                 </main><br>
                    <div class="first"> <span class="title">${element.productName}</span><span class="price">₦${element.price}/${element.measurement}</span></div>
                    <div class="second"> <span>Quantity</span><span class="sec">${element.quantity}<span style ="font-size:15px;" class="sec">${element.measurement} (s)</span> </span> </div>
                    <div class="second"> <span>Location</span><span class="sec">${element.productState}/${element.productLocalGovernment}</span> </div>
                    <div class="third"> <span>Availability</span><span class="date">${from} - ${to}</span> </div>

                    <div class="third"> <span>Farmer Rank(<i class="fa-solid fa-star"></i>)</span><span class="date"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></span> </div> 

                    <div>
                    <div style ="display:flex;justify-content:center;"class="product-choice">               
                            <div><a style="text-decoration:none;color:white" href="/RequestedProduct/createRequestedProduct?requestId=${element.id}">Buy</a></div>
                      </div>
                   </div>
                                      
                    
                    </div> 
                    <br>
                   </div>
                    `;
          }

          if (element.FarmerRank >= 11 && element.FarmerRank <= 14) {
            tableData.innerHTML += `<div class="bodyyy">
                <div class="content">
                <main>
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.firstDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.secondDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.thirdDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.forthDimentionPicture}`}">
                </main><br>
                    <div class="first"> <span class="title">${element.productName}</span><span class="price">₦${element.price}/${element.measurement}</span></div>
                    <div class="second"> <span>Quantity</span><span class="sec">${element.quantity}<span style ="font-size:15px;" class="sec">${element.measurement} (s)</span> </span> </div>
                    <div class="second"> <span>Location</span><span class="sec">${element.productState}/${element.productLocalGovernment}</span> </div>
                    <div class="third"> <span>Availability</span><span class="date">${from} - ${to}</span> </div>

                    <div class="third"> <span>Farmer Rank(<i class="fa-solid fa-star"></i>)</span><span class="date"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></span> </div> 
                    
                    

                    <div>
                    <div style ="display:flex;justify-content:center;"class="product-choice">               
                            <div><a style="text-decoration:none;color:white" href="/RequestedProduct/createRequestedProduct?requestId=${element.id}">Buy</a></div>
                      </div>
                   </div>
                    
                    
                    </div> 
                    <br>
                   </div>
                    `;
          }

          if (element.FarmerRank >= 15 && element.FarmerRank <= 18) {
            tableData.innerHTML += `<div class="bodyyy">
                <div class="content">
                    <main>
                        <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.firstDimentionPicture}`}">
                        <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.secondDimentionPicture}`}">
                        <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.thirdDimentionPicture}`}">
                        <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.forthDimentionPicture}`}">
                    </main><br>
                    <div class="first"> <span class="title">${element.productName}</span><span class="price">₦${element.price}/${element.measurement}</span></div>
                    <div class="second"> <span>Quantity</span><span class="sec">${element.quantity}<span style ="font-size:15px;" class="sec">${element.measurement} (s)</span> </span> </div>
                    <div class="second"> <span>Location</span><span class="sec">${element.productState}/${element.productLocalGovernment}</span> </div>
                    <div class="third"> <span>Availability</span><span class="date">${from} - ${to}</span> </div>

                    <div class="third"> <span>Farmer Rank(<i class="fa-solid fa-star"></i>)</span><span class="date"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></span> </div> 
                    
                    
                    <div>
                    <div style ="display:flex;justify-content:center;"class="product-choice">               
                            <div><a style="text-decoration:none;color:white" href="/RequestedProduct/createRequestedProduct?requestId=${element.id}">Buy</a></div>
                      </div>
                   </div>

                    
                    </div> 
                    <br>
                   </div>
                    `;
          }

          if (element.FarmerRank >= 19) {
            tableData.innerHTML += `<div class="bodyyy">
                <div class="content">
                <main>
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.firstDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.secondDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.thirdDimentionPicture}`}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${`http://localhost:5000/products/${element.forthDimentionPicture}`}">
                </main><br>
                    <div class="first"> <span class="title">${element.productName}</span><span class="price">₦${element.price}/${element.measurement}</span></div>
                    <div class="second"> <span>Quantity</span><span class="sec">${element.quantity}<span style ="font-size:15px;" class="sec">${element.measurement} (s)</span> </span> </div>
                    <div class="second"> <span>Location</span><span class="sec">${element.productState}/${element.productLocalGovernment}</span> </div>
                    <div class="third"> <span>Availability</span><span class="date">${from} - ${to}</span> </div>

                    <div class="third"> <span>Farmer Rank(<i class="fa-solid fa-star"></i>)</span><span class="date"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span> </div> 


                    <div>
                    <div style ="display:flex;justify-content:center;"class="product-choice">               
                            <div><a style="text-decoration:none;color:white" href="/RequestedProduct/createRequestedProduct?requestId=${element.id}">Buy</a></div>
                      </div>
                   </div>



                    </div> 
                    <br>
                   </div>
                    `;
          }
        });
        if (response.data == 0) {
          var msg = document.querySelector('#msg');
          msg.textContent =
            'There is no product available at your local government,you can kindly change your location to see more product';
        }
        console.log(response);
      }
    });
};

var butt = document.querySelector('#completed-task');
butt.addEventListener('click', SearchProduct);
