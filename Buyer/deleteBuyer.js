'use strict';
var email = window.location.href.split('=')[1];
var nname = document.getElementById('name');
var userName = document.getElementById('userName');
var address = document.getElementById('fullAddress');
var state = document.getElementById('state');
var lga = document.getElementById('localGovernment');
var sex = document.getElementById('gender');
var number = document.getElementById('phoneNumber');
var userId = document.getElementById('userId');

console.log(email);
fetch(`http://localhost:5000/api/User/GetUserByEmail/${email}`)
  .then((promise) => promise.json())
  .then((response) => {
    console.log(response);
    if (response.isSuccess == true) {
      nname.value = response.data.name;
      userName.value = response.data.userName;
      address.value = response.data.fullAddress;
      lga.value = response.data.localGovernment;
      state.value = response.data.state;
      sex.value = response.data.gender;
      number.value = response.data.phoneNumber;
      userId.value = response.data.id;
      var button = document.querySelector('.form-bottom');
      button.innerHTML = `<button class="submit-form" type="submit">Yes</button>`;
      document.getElementById('msg1').textContent = response.message;
      console.log('it is success');
    } else {
      document.getElementById('msg').textContent = response.message;
    }
  });

let myForm = document.querySelector('#delete-user');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
let Submit = () => {
  let sendForm = new FormData(myForm);
  console.log(sendForm);

  fetch(`https://localhost:7256/api/User/DeleteUser/${userId.value}`, {
    method: 'PATCH',
    body: sendForm,
  }).then((response) => {
    console.log(userId.value);
    debugger;
    console.log('1');
    response.json();
    document.location.href = '/Buyer/buyers.html';
  });
};
myForm.addEventListener('submit', Submit);
