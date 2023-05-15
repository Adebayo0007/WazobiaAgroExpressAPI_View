let errorMesage = document.querySelector("#err-message");
let load = document.querySelector("#btn");
let myForm = document.querySelector("#buyer-form");

    myForm.addEventListener("submit", (e) => {
        e.preventDefault();
    });
    let Submit = () =>{
        
        load.innerHTML = `<div class="loading add-loading"></div>`
        
       let sendForm = new FormData(myForm);
       console.log(sendForm);

        fetch('http://localhost:5000/api/Buyer/CreateBuyer',
        {
            method : 'POST',
            body : sendForm
            
        })
        .then((response) => {
            debugger;
            console.log("1");
            return response.json();
        })
        .then((value) => {
            console.log("2");
            console.log(value);
            if(value.status != 200)
            {
                errorMesage.textContent = value.title;
            }

            if(value.isSuccess == true)
            {
                console.log("22");
                
                window.location.href = "/Login/login.html";
            }
            else{
                window.alert("check your inputs"); 
            }
        })
        .catch((resp) => 
        {
            window.alert("An error occured pls check your inputs!"); 
            
        })

    }
    myForm.addEventListener("submit", Submit);