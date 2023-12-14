import React from "react";
import {useDispatch, useSelector} from "react-redux";

import "./cart.css"
import {addToCart, removeFromCart} from "../store/itemSlice";
import {Link} from "react-router-dom";

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    let itemObjectList = cart.items;
    let totalPrice = 0;
    const handleIncreaseAmount = (item) => {
        dispatch(addToCart(item))
    }
    const handleDecreaseAmount = (item) => {
        dispatch(removeFromCart(item))
    }
    if (cart.items.length === 0) {
        return (<div className="cartSec">
            <p>Cart is empty</p>
        </div>)
    } else {
        for (let i of cart.items) {
            totalPrice += i.amount * i.price;
        }
        let itemsList = itemObjectList.map((item) => {
            return (<div className='block' key={itemObjectList.indexOf(item)}>
                <div className='photo'>
                    <h2>{item.name}</h2>
                    <Link to={(`/catalog/${item.id}`)}>
                    <img src={item.image} alt=""/>
                </Link>
                </div>
                <button onClick={() => {
                    handleIncreaseAmount(item)
                }}>+
                </button>
                <div className='amount'>{item.amount}</div>
                <button onClick={() => {
                    handleDecreaseAmount(item)
                }}>-
                </button>
                <div className='price'>{item.price}$</div>
            </div>)
        })
        return (
            <div className="cartSec">
                <div>{itemsList}</div>
                <div className='total-price'>Total price: {totalPrice}$</div>
            </div>
        )
    }
}

export default Cart;