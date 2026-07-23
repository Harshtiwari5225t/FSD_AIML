function register(){
    setTimeout(()=>{
        console.log("Register here");
    },6000)
    

}

function login(){
    waitforinput(5000);
    console.log("login here");
}

function getData(){
    setTimeout(()=>{
        console.log("Fetch here");
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

register();
login();
getData();
displayData();

console.log("Call another app");