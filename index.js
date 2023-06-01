'use strict';
let tableData = document.querySelector(".body");

fetch('http://localhost:5000/api/Home/Index',
{
    method : 'GET' 
}).
then(promise => promise.json()).
then(response => {
    if(response.isSuccess == true)
    {
        response.data.forEach(element => {
            generateProducts(element);
        })
    }});

    const generateProducts = function(element){
        let date = element.availabilityDateFrom.toString();
        let dateFrom = date.substring(0,10);
        let date2 = element.availabilityDateTo.toString();
        let dateTo = date2.substring(0,10);
        tableData.innerHTML += ` <div class="content">
        <main>
            <img src="${`http://localhost:5000/products/${element.firstDimentionPicture}`}" alt="product" width="300vw" height="190vh">
            <img src="${`http://localhost:5000/products/${element.secondDimentionPicture}`}" alt="product" width="300vw" height="190vh">
            <img src="${`http://localhost:5000/products/${element.thirdDimentionPicture}`}" alt="product" width="300vw" height="190vh">
            <img src="${`http://localhost:5000/products/${element.forthDimentionPicture}`}" alt="product" width="300vw" height="190vh">
        </main><br>
        <div class="first"> <span class="title">${element.productName}</span><span class="price">#${element.price}/${element.measurement}</span> </div>
        <div class="second"> <span>Quantity</span><span>${element.quantity} ${element.measurement}(s)</span> </div>
        <div class="second"> <span>Location</span><span>${element.productLocalGovernment}/${element.productState}</span> </div>
        <div class="third"> <span>Availability</span><span class="date">${dateFrom} - ${dateTo}</span> </div>
    </div><br>`

    }

    
 




   