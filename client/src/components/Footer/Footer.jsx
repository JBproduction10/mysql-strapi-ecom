import React from 'react'
import './Footer.scss';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div className='item'>
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Bowties</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>
            <div className='item'>
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className='item'>
                <h1>About</h1>
                <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolor possimus maiores enim, incidunt praesentium corrupti
                    nobis officiis at! Id temporibus minus aperiam rerum ut
                    sunt pariatur mollitia veniam minima repudiandae.
                </span>
            </div>
            <div className='item'>
                <h1>Contact</h1>
                <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolor possimus maiores enim, incidunt praesentium corrupti
                    nobis officiis at! Id temporibus minus aperiam rerum ut
                    sunt pariatur mollitia veniam minima repudiandae.
                </span>
            </div>
        </div>
        <div className='bottom'>
            <div className='left'>
                <span className='logo'>Houtkappers</span>
                <span className='copyright'>
                    © Copyright 2023. All Rights Reserved
                </span>
            </div>
        </div>
        <div className='right'>
            <img src='/img/payment.png' alt=''/>
        </div>
    </div>
  )
}

export default Footer;
