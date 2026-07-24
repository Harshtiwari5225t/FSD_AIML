//create a student object and create the copy of the object and assign a new property address

const student={
    name:"Nanu",
    age:87,
    branch:"NANU"
}

const newstudent={...student,
    address:{
        street1:"Nanu road",
        city:"Nanupur",
        state:"Nanu Pradesh",
        pincode:41764745612454542582472343347847434528547
    }
}
console.log(student);

console.log(newstudent);
