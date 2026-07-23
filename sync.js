function register(){
    waitforinput(5000);
    console.log("Register here");

}

function login(){
    waitforinput(5000);
    console.log("login here");
}

function getData(){
    waitforinput(5000);
    console.log("Get here");

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