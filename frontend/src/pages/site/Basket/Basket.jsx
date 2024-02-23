
import React, { useContext } from 'react';
import dataContexts from '../../../contexts/contexts';
import './Basket.scss';
import { IoLogoElectron } from 'react-icons/io5';
import { MdArrowBackIos, MdArrowForwardIos, MdDeleteOutline } from 'react-icons/md';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Basket() {
  const { basket, decreaseBtn, increase, removeFrombasket } = useContext(dataContexts);

  const totalOrderAmount = basket.reduce((total, item) => total + item.totalPrice, 0);


  return (
    <div className='lr'>
      <div className="sebet">
        <div className="dr">
          {
            basket.map((item, index) => (
              <div className="left-basket" key={index}>
                <div className="sk">
                  <img src={item.product.image} alt="" />
                </div>
                <div className="logo">
                  <p className='saam'> <IoLogoElectron />Yeni</p>
                </div>
                <div className="bosduz"></div>
                <div className="altalt">
                  <div className="writeone">
                    <p>{item.product.name}</p>
                    <span className='l' onClick={() => { removeFrombasket(item) }}>
                      <MdDeleteOutline  />
                    </span>
                    
              
                  </div>
                  <div className="twobtn">
                    <div className="count">
                      <span><MdArrowBackIos onClick={() => { decreaseBtn(item) }} /></span>
                      <p>{item.count}</p>
                      <span><MdArrowForwardIos onClick={() => { increase(item) }} /></span>
                    </div>
                    <p className='total'>{item.totalPrice}₼</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="right-order">
          <p className='ci'>Sifarişi rəsmiləşdir</p>
          <div className="order">
          <div className="dib">
     <div className="pr">
     <p>Məhsulların qiyməti:</p>
     </div>
         <div className="esas">
         <p className='tot'>{totalOrderAmount}₼</p>
         </div>
          </div>
          <div className="dib">
     <div className="pr">
     <p>Endirim:</p>
     </div>
         <div className="esas">
         <p className='tot'>0₼</p>
         </div>
          </div>
          <div className="vol"></div>
          <div className="dib">
     <div className="pro">
     <p>Sifarişi rəsmiləşdir:</p>
     </div>
         <div className="esas">
         <p style={{"color":"yellowgreen"}} className='tot'>{totalOrderAmount}₼</p>
         </div>
          </div>
 <Link to={"/order"}>
 <button className='orderbutton'>Sifarişi Rəsmiləşdir</button>
 </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;


