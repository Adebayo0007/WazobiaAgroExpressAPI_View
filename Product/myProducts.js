
let tableData = document.querySelector(".my-product");

fetch('http://localhost:5000/api/Product/MyProducts',
{
    method : 'GET', 
    headers:{
        "Authorization" : `Bearer ${localStorage.getItem("setToken")}`
    },
    
}).
then(promise => promise.json()).
then(response => {
    if(response.isSuccess == true)
    {
        response.data.forEach(element => {
            let date = element.availabilityDateFrom.toString();
            let dateFrom = date.substring(0,10);
            let date2 = element.availabilityDateTo.toString();
            let dateTo = date2.substring(0,10);
            var date3 = new Date;
            let date5 = Number(date3.getDate());
            let date6 = Number(element.availabilityDateTo.substring(8,10));
            let runningDays = date6-date5;
           tableData.innerHTML += `<div class="bodyyy">
           <div class="content">
            <main>
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${element.firstDimentionPicture}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${element.secondDimentionPicture}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${element.thirdDimentionPicture}">
                <img id="profilePicture" alt="product" width="300vw" height="190vh" object-fit:cover" src="${element.forthDimentionPicture}">
            </main><br>
            <div class="first"> <span class="title">${element.productName}</span><span class="price">₦${element.price}/${element.measurement}</span> </div>
            <div class="second"> <span>Quantity</span><span class="sec">${element.quantity}<span class="sec"> ${element.measurement} (s)</span> </span> </div>
            <div class="second"> <span>Location</span><span class="sec">${element.productState}/${element.ProductLocalGovernment}</span> </div>
            <div class="third"> <span>Availability</span><span class="date">${dateFrom} - ${dateTo}</span> </div>
           
             <div class="third"> <span>Running days ahead</span><span class="date">${runningDays}</span> </div>
           
            <div class="profile-opt">
                                                                    <span class="profile-update"><a class="link" href="/Product/editProduct.html?productId=${element.id}"><span class="profile-update">Edit</span></a></span>
                                                                     <span class="back-to-profile"><a class="link" href="/Product/deleteProduct.html?productId=${element.id}"><span class="profile-update">Delete</span></a></span>
                                                                </div>
           </div>
           <br>
           </div>
           `
        })
        
        console.log(response)
    }});

 

   