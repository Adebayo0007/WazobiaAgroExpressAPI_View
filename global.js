'use strict'
const baseUrl = 'http://localhost:5000/api/';
var postRequest = (url,data)=> {
    return new Promise(() => {
        fetch(`${baseUrl}${url}`, {
            method: 'Post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
    })  
 
}
