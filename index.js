/////*****CHALLANGE*****//////
    // successfully use the `fetch` library (DON'T LOOK IT UP ON THE INTERNET)
/*
    fetch is a library we can use to make HTTP requests, it's very similar to Xmlhttprequest
    which we use in cart, checkout
    how does it work:
    for a GET request, it's enough to just pass the url of the endpoint you want to call
    E.G.:
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    this call -> fetch('https://jsonplaceholder.typicode.com/tdos/1') -> returns a Promise that resolves a
    `Response` object. To see an actual JSON response you will have to call:
    
    Response.json()
    which returns another Promise that resolves with the actual JSON you want to display from the GET request
    Task 1:
    display the result by doing a GET on this url: https://jsonplaceholder.typicode.com/todos/1
    Task 2:
    wrap the JSON result in a promise, call it, and display the result
*/
const fetch = require('node-fetch');

// fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => {
//  return response.json()  // type of Response, not a json

// })
// .then (jsonResult => {
//     console.log(jsonResult);
//     console.log('title is', jsonResult.title);
// })

///////////// fara async away
// const getToDo = (id) => {
//    return new Promise((resolve, reject) => {
//         fetch('https://jsonplaceholder.typicode.com/todos/' + id)
//         .then(response => {
//             resolve(response.json());
//         })
       
//     })
// }

////rescris cu async await cel de sus
const getToDo = async (id) => {
        const fetchedResult = await  fetch('https://jsonplaceholder.typicode.com/todos/' + id); ///fetch returneaza un promise, si await returneaza reultatul unui promise
        /// fethedResult is a promise right now
        const jsonResult = await fetchedResult.json();
         
        return jsonResult;

        //  fetch('https://jsonplaceholder.typicode.com/todos/' + id)
        //  .then(response => {
        //      resolve(response.json());
        //  })
        
    
 }
 



getToDo('5').then(jsonResult => {
    console.log(jsonResult);
})
.catch(e => {
    console.log(e);
})

// const getToDo = async (no) => {   ////async returneza un promise
//     // const result = await myPromise();
//     /// await someAsyncFunction(); wait for promise to finish, could be used just inside the async block
//     /// after await resolves, run the following lines 
//     return 'some string';  /// return Promise.resolve('some string')
//     //by default return a Promise.resolve(undefined)
// }

// console.log(getToDo());