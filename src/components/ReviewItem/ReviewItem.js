import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const {name, quantity} = props.product;
    return (
        <div className="review-item">
            <h4 className="product-name">{name}</h4>
    <p>Quantity: {quantity.length} </p>
            <br/>
            <button className="order-btn">Remove</button>
            <br/><br/>
        </div>
    );
};

export default ReviewItem;