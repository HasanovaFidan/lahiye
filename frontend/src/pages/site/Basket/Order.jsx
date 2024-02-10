import React, { useContext } from 'react'
import dataContexts from '../../../contexts/contexts';

const Order = () => {
    const { basket, decreaseBtn, increase, removeFrombasket } = useContext(dataContexts);

    const totalOrderAmount = basket.reduce((total, item) => total + item.totalPrice, 0);
  return (
    <div className="lr">
      <div className="contact-fl">
<div className="elaqe">
    <div className="py">
        <h2>Bizimlə əlaqəyə keç</h2>
        <p>Əgər hər hansısa təklifin və ya şikayətin varsa bizimlə əlaqəyə keç</p>
    </div>
    <div className="melumat">
        <div className="emailyan">
            <input type="text" placeholder='ad soyad'/>
            <input type="email" placeholder='email'/>
        </div>
        <div className="ikiyan">
          <div className="emailyan">
          <input type="number" placeholder='Telefon' />
            <input type="text" placeholder='Şəhər'/>
          </div>

            
            
            <button>Göndər</button>

        </div>
    </div>
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
          <button className='orderbutton'>Sifarişi Rəsmiləşdir</button>
          </div>
        </div>

</div>
    </div>
  )
}

export default Order
