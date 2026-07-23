function register(cb){
    setTimeout(()=>{
        console.log("Register here");
        cb();
    },6000)
    

}

function login(cb){
    setTimeout(()=>{
        console.log("login here");
        cb();
    },6000)
}

function getData(cb){
    setTimeout(()=>{
        console.log("Fetch here");
        cb();
    },1000)

}
function displayData(){
    waitforinput(5000);
    console.log("Display here");

}
function waitforinput(delay){
    const ct=Date.now();
    const ms=ct+delay;
    while(Date.now()<ms){

    }
}
//callback hell
register(()=>{
    login(()=>{
        getData(()=>{
            displayData()
        })
    })
});


console.log("Call another app");