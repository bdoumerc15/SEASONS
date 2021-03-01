import React from "react";

const Product = function (props) {
    return (
        <div className="product-target">
            <img className="img" src={props.src} alt={props.alt} />
            <h3>{props.description}</h3>
            <h5>{props.seller}</h5>
            <span>{props.price}</span>
        </div>
    );
}


export default Product;