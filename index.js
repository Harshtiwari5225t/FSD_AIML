const data=[
    {image:"", price:"5375/-"},
    {image:"", price:"758732/-"},
    {image:"", price:"5375/-"},
    {image:"", price:"758732/-"}
]

function Book(props){
const child=document.createElement("div");
child.setAttribute("class","card");
const image=document.createElement("img");
image.setAttribute("src","props.image");
image.setAttribute("width","200px");
image.setAttribute("height","150px");
image.style.margin="auto";
const h2=document.createElement("h2");
h2.innerText="Price: "+props.price;
child.appendChild(image);
child.appendChild(h2);
return child;
}
const parent=document.getElementById("root");

const book_list=document.createElement("div");
book_list.setAttribute("Class","booklist")
for(i of data){
    book_list.appendChild(Book(i));
}
parent.appendChild(book_list);