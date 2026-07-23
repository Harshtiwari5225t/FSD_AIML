

function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve();
        console.log("Register here");
        },5000)
    })
    

}

function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        reject();
        console.log("Login here");
        },5000)
    })
}

function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve();
        console.log("Fetch here");
        },5000)
    })

}
function displayData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve();
        console.log("Display here");
        },5000)
    })

}


// register().then(login)
//            .then(getData)
//             .then(displayData)
//              .catch((err)=>{
//                 console.log("Error.",err);
//              })

async function test(){
    try{
        await register();
        await login();
        await getData();
        await displayData();
    }
    catch(err){
       console.log("Error",err);
    }
}
test();
console.log("Call another app");