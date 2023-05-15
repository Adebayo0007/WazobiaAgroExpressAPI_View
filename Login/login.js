let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btn = document.querySelector("#btn");

let Submit = (e) => {
    e.preventDefault();
    console.log("seen");
   Data = {
    email : email.value,
    password : password.value,
   };
   console.log(JSON.stringify(Data))
   document.querySelector("#btn").innerHTML = `<div class="loading add-loading"></div>`
 //  console.log(Data.Email);
   fetch('http://localhost:5000/api/User/Login', {
    method : "Post",
    headers : {
        "Content-Type": "application/json"
    },
    body : JSON.stringify(Data)
   })
   .then((pro) => pro.json())
    .then(function (response) {
        console.log("Sucessful");
        localStorage.setItem("setToken", response.token);
        console.log('this is token;'+ response.token)
        console.log(localStorage.getItem("setToken"));
        console.log(response);
        debugger;
        if(response.isSuccess == true)
        {
             localStorage.setItem("id", response.data.id);
             localStorage.setItem("email", response.data.email);
             localStorage.setItem("hasPaid", response.data.haspaid);
             localStorage.setItem("userName", response.data.userName);
            if(response.data.role == "Admin")
            {
                console.log('you are an admin you should e redirected to admin index');
                location.href = "/Admin/adminDashboard.html";
            }
            else if(response.data.role == "Farmer")
            {
                location.href = "/Farmer/farmerDashboard.html";
                console.log('you are a farmer you should e redirected to farmer index');
            }
            else if(response.data.role == "Buyer")
            {

                console.log('you are a buyer you should e redirected to buyer index');
            }
            else
            {
                console.log('you are not recognize as the application user');
            }
        }
        else
        {
            document.querySelector("#overlay").textContent = response.message;
            document.querySelector("#btn").innerHTML = ` <span class="button__text">Log In</span>
            <i class="button__icon fas fa-chevron-right"></i>`;
        }
            
    })
    .catch((resp) => {
        //window.alert("Invalid email or password");
       // location.reload()
        console.log(resp.error);
    })   
}
btn.addEventListener('click' , Submit)