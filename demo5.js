export const sum=(...a)=>{
    return a.reduce((i,s)=>(s+i));
}


export const add=(...a)=>{
    let s=0
    for(let i of a){
        s+=i;
    }
    return s;
}

// export {sum,add};
