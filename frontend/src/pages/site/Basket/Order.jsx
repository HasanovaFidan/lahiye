import React, { useContext, useEffect, useState } from 'react'
import dataContexts from '../../../contexts/contexts';
import { useFormik } from 'formik';
import axios from 'axios';

const Order = () => {
  
    const { basket, decreaseBtn, increase, removeFrombasket } = useContext(dataContexts);

  
    const formik = useFormik({
      initialValues: {
        email: '',
        name:'',
        mobile:'',
        city:'',
      },
      onSubmit: values => {
      // axios.post("http://localhost:8080/order",values).then(res=>{

      // })
      },
    });
  return (
    <div className="lr">
      <div className="contact-fl">
<div className="elaqe">
    <div className="py">
        <h2>Bizimlə əlaqəyə keç</h2>
        <p>Əgər hər hansısa təklifin və ya şikayətin varsa bizimlə əlaqəyə keç</p>
    </div>
    <div className="melumat">
    <form onSubmit={formik.handleSubmit}>
      <div className="ikiyan">
      <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
         placeholder='email'
       />
            <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
         placeholder='name'
       />
      </div>
      <div className="ikiyan">
      <input
         id="city"
         name="city"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.city}
         placeholder='city'
       />
            <input
         id="mobile"
         name="mobile"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.mobile}
         placeholder='mobile'
       />
      </div>
 
       <button className="btn btn-info" type="submit">Submit</button>
     </form>
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
         <p className='tot'>₼</p>
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
         <p style={{"color":"yellowgreen"}} className='tot'>₼</p>
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
