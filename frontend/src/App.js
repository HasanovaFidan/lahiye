import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import dataContexts from "./contexts/contexts";
import ROOT from "./router/index.routes";
import "./Reset.css"
import Darkmode from 'darkmode-js';

import Swal from "sweetalert2"



const root = createBrowserRouter(ROOT)
function App() {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [original, setOriginal] = useState([])
  const [fav, setFav] = useState(
    localStorage.getItem("fav") ? JSON.parse(localStorage.getItem("fav")) : []
  );
  const [muq, setMuq] = useState(
    localStorage.getItem("muq") ? JSON.parse(localStorage.getItem("muq")) : []
  );
  const [basket, setbasket] = useState(
    localStorage.getItem("BasketItem") ? JSON.parse(localStorage.getItem("BasketItem")) : []
  );
  

  new Darkmode().showWidget();
  const handleFav = (item) => {
    const favItem = fav.find((favItem) => favItem._id == item._id);
    console.log(favItem)
    if (favItem != undefined) {
      Swal.fire({
        icon: "error",
        title: "Artıq əlavə edilib!",
    
      });
   
    } else {
      setFav([...fav, item]);
      localStorage.setItem("fav", JSON.stringify([...fav, item]));
    
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Favorilərinizə əlavə edildi!",
  showConfirmButton: false,
  timer: 1500
});
    }
  };
  const handleMuq = (item) => {
    const favItem = muq.find((favItem) => favItem._id == item._id);
    console.log(favItem)
    if (favItem != undefined) {
      Swal.fire({
        icon: "error",
        title: "Artıq əlavə edilib!",
    
      });
   
    } else {
      setMuq([...muq, item]);
      localStorage.setItem("fav", JSON.stringify([...muq, item]));
    
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Artıq Müqayisə edə bilərsiz!",
  showConfirmButton: false,
  timer: 1500
});
    }
  };
  const removeFrombasket=(product)=>{
    const target=basket.find(item=>item._id==product._id)
    basket.splice(basket.indexOf(target),1)
    setbasket([...basket])
    localStorage.setItem("BasketItem",JSON.stringify([...basket]))
    
    Swal.fire({
      title: "Silmək istədiyinizə əminsiz?",
      text: "Bunu geri qaytara bilməyəcəksiniz",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Əminəm,Silin!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Silindi!",
          text: "Səbətdən silindi.",
          icon: "success"
        });
      }
    });
  }
  const AddtoBasket=(product)=>{
    const target=basket.find(item=>item.product._id==product._id)
    if(target){
      target.count +=1
      target.totalPrice=target.product.satis*target.count
      setbasket([...basket])
      localStorage.setItem("BasketItem",JSON.stringify([...basket]))
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Səbətə  əlavə edildi!",
        showConfirmButton: false,
        timer: 1500
      });
     
    }
    else{
      const BasketProduct={
        id: product._id,
        product:product,
        count:1,
        totalPrice:product.satis
  
      }
      setbasket([...basket,BasketProduct])
      localStorage.setItem("BasketItem",JSON.stringify([...basket,BasketProduct]))
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Səbətə  əlavə edildi!",
        showConfirmButton: false,
        timer: 1500
      });
 
    }
  }
  const decreaseBtn=(product)=>{
    const target=basket.find(item=>item.id==product.id)
    if(target.count>1){
      target.count -=1
      target.totalPrice=target.product.satis*target.count
      setbasket([...basket])
      localStorage.setItem("BasketItem",JSON.stringify([...basket]))
    }
  }
  
  const increase=(product)=>{
    const target=basket.find(item=>item.id==product.id)
    
      target.count +=1
      target.totalPrice=target.product.satis*target.count
      setbasket([...basket])
      localStorage.setItem("BasketItem",JSON.stringify([...basket]))
   
    
  }
  useEffect(() => {
    axios.get("http://localhost:8080/technical")
      .then(res => {
        setLoading(false);
        setData(res.data);
        setOriginal(res.data);

      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const values = {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
    original,
    setOriginal,fav,setFav,handleFav,AddtoBasket,increase,decreaseBtn, removeFrombasket,basket,setbasket,handleMuq,
    muq,setMuq
  };
  return (
   <dataContexts.Provider value={values}>
      <RouterProvider router={root} />
   </dataContexts.Provider>

    
  );
}

export default App;
