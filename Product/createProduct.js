'use strict';
let errorMesage = document.querySelector('#err-message');
let load = document.querySelector('#btn');
let myForm = document.querySelector('#form');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
let Submit = () => {
  load.innerHTML = `<div class="loading add-loading"></div>`;

  let sendForm = new FormData(myForm);
  console.log(sendForm);

  fetch('http://localhost:5000/api/Product/CreateProduct', {
    method: 'POST',
    body: sendForm,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('setToken')}`,
    },
  })
    .then((response) => {
      debugger;
      console.log('1');
      return response.json();
    })
    .then((value) => {
      console.log('2');
      console.log(value);

      if (value.isSuccess == true) {
        console.log('22');

        window.location.href = '/Product/myProduct.html';
      }
      if (value.status != 200) {
        errorMesage.textContent = value.title;
      }
    })
    .catch((resp) => {
      window.alert('An error occure check you input and the accepted picture must not be more than 20KB!');
    });
};
myForm.addEventListener('submit', Submit);
