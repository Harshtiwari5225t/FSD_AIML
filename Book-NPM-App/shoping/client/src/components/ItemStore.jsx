import React from 'react'
import Item from "./Item"
import {useState,useEffect} from "react";

const ItemStore = () => {
    const [items,setItems]=useState([]);
    

    async function loadProducts(){
        const URL="https://dummyjson.com/products";
        try{
            const res= await fetch(URL);
            const data=await res.json();
            setItems(data.products);
        }
        catch(err){
            console.log("Error=",err)
        }
    } 

    useEffect(()=>{
        loadProducts();
    },[]);


  return (
    <div className="home">
      {
        items.map((item,index)=>{
        return <Item key={index} props={item}/>
      })
      }
    </div>
  )
}

export default ItemStore
