const Data=[
    {image:"", Price:"3259/-"},
    {image:"", Price:"3259/-"},
    {image:"", Price:"3259/-"},
    {image:"", Price:"3259/-"}
]
function Book(props){
    const image=React.createElement("image",{src:props.image,with:"50px",height:"50px"});
    const h2=React.createElement("h2",{color:"red"},"Price: "+props.price);
    const child=React.createElement("div",{classname:"card"},[image,h2]);
    return child;
}

const booklist=    React.createElement("div",{classname:"booklist"},Data.map((b)=>{
        Book(b);
    }));


const parent=document.getElementById("root");
