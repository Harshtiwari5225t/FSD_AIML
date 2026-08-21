function Book({props}){
    return (
        <div className="card">
            <img src={props.src} width="100px" height="100px"/>
            <h2 style={{color:"red"}}>Price:{props.price}</h2>
            <button>AddToCart</button>
        </div>
    )
}

export default book;