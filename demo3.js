//finding sum of any numbers by rest and spread operator

function sum(...a){
    // const su=a.reduce((i,s)=>(s+i));
    let sum=0;
    for(i of a){
        sum=sum+i;
    }
    console.log(sum); 
}
sum(1,2,34,4345,25,346,4566,654645)

