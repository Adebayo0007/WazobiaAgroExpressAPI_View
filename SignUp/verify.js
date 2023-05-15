let myForm = document.querySelector("#verify-user");
let userEmail = window.location.href.split('=')[1];

    myForm.addEventListener("submit", (e) => {
        e.preventDefault();
    });
    let Submit = () =>{
        
       let sendForm = new FormData(myForm);

        fetch(`http://localhost:5000/api/User/VerifyUser/${userEmail}`,
        {
            method : 'PATCH',
            body : sendForm
        }
        )
        .then((response) => {
            console.log(userEmail.value);
            debugger;
            console.log("1");
              response.json();
              document.location.href = "/SignUp/registrationPending.html";
        })
        

    }
    myForm.addEventListener("submit", Submit);