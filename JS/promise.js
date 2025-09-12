let myPromise = new Promise((resolve,reject)=>{
    reject("Rejected")
})
.then()
.catch(r =>(console.log(r + " catch block"),r))
.then(r => (console.log(r + " Resolved the catch and hence came to then"),r))
.catch(r => (console.log(r + " catch 2 didnt occur coz then was resolved"),r))
.finally(r => (console.log(r + " didnt go to c2 coz the then was resolved and since no ore then and catch came to finally")))

// why is the finally block giving r as undefined