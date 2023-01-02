import React from 'react';
import './cart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';
import {useSelector} from 'react-redux';
// import {removeItem, resetCart} from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';
// import {makeRequest} from "../../makeRequest";
// import {loadStripe} from "@stripe/stripe-js";


const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.products);
    const totalPrice = () =>{
        let total = 0;
        products.forEach((item) =>{
            total += item.quantity * item.price;
        });
        return total.toFixed(2);
    };

    // const stripePromise = loadStripe(
    //    ""
    // );

    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            <div className="item">
                {/* <img src={} alt=''/> */}
                <div className="details">
                    {/* <h1>{item.title}</h1> */}
                    <h1>Item Title</h1>
                    {/* <p>{item.desc?.substring(0, 100)}</p> */}
                    <p>Item desc</p>
                    <div className="price">
                        {/* {item.quantity} x ${item.price} */}
                        quantity + price
                    </div>
                </div>
                {/* <DeleteOutlinedIcon
                    className='delete'
                    onClick={() => dispatch(removeItem(item.id))}
                /> */}
                <DeleteOutlinedIcon className='delete'/>
            </div>

            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='reset'>Reset Cart</span>
        </div>
    )
}

export default Cart