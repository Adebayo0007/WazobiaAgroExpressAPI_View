var requestId = window.location.href.split('=')[1];
var productName = document.getElementById("productName");
var price = document.getElementById("price");


// console.log(email)

console.log(requestId);
fetch(`http://localhost:5000/api/RequestedProduct/GetRequestedProductById/${requestId}`,{
    method : "GET"
}).
then(promise => promise.json()).
then(response => {console.log((response));
    debugger;
    if(response.isSuccess == true)
    {
        productName.textContent = response.data.productName;
        price.textContent = response.data.price;
      
    }
    else{
        document.getElementById("msg").textContent = response.message;
    }
})