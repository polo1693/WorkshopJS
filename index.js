// function callback(printable) {
//     console.log("I'm the callback", printable, 3, "Pot orice")
// }


// function a (callback) {  
//     const myConstant = 2 
//     const myString = "I'm string"
//     const myObject = {
//         obj2 : {
//             obj3: {

//             }
//         }
//     }
//     const myArray = [1,2,3]
//     callback(myArray[2]) 
// }

// setTimeout(callback, 2000) //merge la referinta functiei callback
// setTimeout(callback, 3000)
// setTimeout(callback, 4000)

// callback(2)

// a(callback)  //trebuie sa avem fun de callback ca param


// const obj = {}
// obj.fakeA = 3 //mergee
// obj = { fakeA: 3 } // ERROR

class Example {
    /// we dont need to define the fields, this - is an object, where we declare param1 as a key
    constructor(param1, param2){
        this.param1 = param1;
        this.param2 = param2;
    }

    method1 () {
        console.log("Method 1", this.param1);
    }

    method2 () {
        console.log("Method 2");
    }
}

    const myExampleInst = new Example(); ///here is the class
    myExampleInst.method1();

    const example = {
        method1(){
            console.log("m1");
        },
        method2(){
            console.log("m2")
        }
    }

    example.method1();   ///here is an object

    console.log(example);

    setTimeout(myExampleInst.method1, 3000); ///se face asincron, candva..si nu blocheaza procesul
    console.log(example);


    /////PROMISE////
    

    const a = 2;
    function impl(resolve, reject){ //sincron
      //  resolve(); ///pe resolve se stie ca promise-ul a fost executat cu success
      //  reject(); //pe reject - se stie ca promise-ul s-a apelat, insa fara success, a fost ceva exceptie...promise-ul nu s-a indeplinit

      if (a === 2){  //sincron
          setTimeout(function() { //asincron
              console.log("I'm finally called after 2000 ms", 2000)
          resolve(a)
        }, 2000);
      } else{
          reject()
      }
    }

    // clasa care reda starea obiectului - are 3 stari, pending, fulfilles, rejected(cand avem ceva exceptie in interiorul promise-ului)
    const promise = new Promise(impl);
    //pe then se pot trimite si date ca param
    promise.then(function (a) {   //se apeleaza cand promise-ul e gata
        console.log("I am finally fulfilled", a);
    })
    console.log(promise);

    // const promise = new Promise(function impl(resolve, reject){
    // });


    const myPromise = () => new Promise((resolve, reject) => {
    
    })

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

