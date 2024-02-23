import React, { useContext, useEffect, useState } from 'react'
import dataContexts from '../../../contexts/contexts';
import { useFormik } from 'formik';
import axios from 'axios';
import { loadStripe } from "@stripe/stripe-js";
let totalorder=0
const Order = () => {
  
    const { basket, decreaseBtn, increase, removeFrombasket } = useContext(dataContexts);
    const [isChecked, setIsChecked] = useState(false);
    const publishKey="pk_test_51OmaEdF8GqX2syLzxdY4rad0Wm4W26datgpsSxVRsOq4DO8JhlnNXvGWteIh69TTWSBA7UvYx8coUvGazPmfx34q00kKuFhER7"
    // const createOrder = (items, totalPrice) => {
    //     axios.post("http://localhost:3000/orders", { items: items, totalPrice: totalPrice, status: "pending" }).then(res => {
    //         console.log(res)
    //     })
    // }
    const handleCheckOut= async()=>{
  //       const productsContent={
  //           products:basket
  //       }
  //       const stripe= await loadStripe(publishKey)

        
  //     const res = await axios.post(`http://localhost:8080/payment`, productsContent);
  //   //   console.log(res.)z 
  //   //   if (!res.ok) {
  //   //     console.log("Ödeme işlemi başarısız oldu.");
  //   //   }
  //   //   const session = await res.data.json();
    
  //     axios.post("http://localhost:8080/orders/", { items: basket }).then(res => {
      
  //     })
    
  //     const result = await stripe.redirectToCheckout({
  //       sessionId: res.data.id,
  //     });
  //  console.log(result)
  //     if (result.error) {
  //       throw new Error(result.error.message);
  //     }
    }


    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

  
    const formik = useFormik({
      initialValues: {
        email: '',
        name:'',
        mobile:'',
        city:'',
      },
      onSubmit: async (values) => {
      // axios.post("http://localhost:8080/order",values).then(res=>{

      // })

      const productsContent={
        products:basket
    }
    const stripe= await loadStripe(publishKey)

    
  const res = await axios.post(`http://localhost:8080/payment`, productsContent);
//   console.log(res.)z 
//   if (!res.ok) {
//     console.log("Ödeme işlemi başarısız oldu.");
//   }
//   const session = await res.data.json();

  axios.post("http://localhost:8080/orders/", { items: basket.map(x=>x.product._id),values }).then(res => {
  
  })

  const result = await stripe.redirectToCheckout({
    sessionId: res.data.id,
  });
console.log(result)
  if (result.error) {
    throw new Error(result.error.message);
  }
      },
    });
  return (
    <div className="lr">
    <div className="contact-fl">
      <div className="elaqe">
        <div className="py">
          <h2>Sifarişi rəsmiləşdir</h2>
        </div>
        <div className="melumat">
          <form onSubmit={formik.handleSubmit}>
            <div className="input-containers">
              <div className="input-grup">
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
              <div className="input-grup">
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
     
            </div>
     <div className="flex-middle">
     <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
      <span className="label-text">Mağazadan təhvil alacağam</span>
    </label>
     <button className="sam" type="submit" >Sifarişi tamamla</button>
           
     </div>
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
         {
          basket.map((item,index)=>(
            <p>
            <p className='total'>{item.totalPrice}₼</p>
            </p>
          ))
         }
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
            {
          basket.map((item,index)=>(
            <p>
            <p style={{"color":"yellowgreen"}} className='tot'>{item.totalPrice}₼</p>
            </p>
          ))
         }
         
            </div>
          </div>
      
          <button onClick={() => {
                handleCheckOut()
            }} className='orderbutton'>Sifarişi tamamla</button>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Order
