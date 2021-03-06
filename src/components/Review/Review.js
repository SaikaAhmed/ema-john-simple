import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import { getDatabaseCart } from '../../utilities/databaseManager';


const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find( pd => pd.key === key );
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts);
    }, [])
    return (
        <div>
            <h1>Cart items: {cart.length}</h1>
            {
                cart.map( pd => <ReviewItem product={pd} key={
                    pd.key}></ReviewItem>)
            }
            
        </div>
    );
};

export default Review;