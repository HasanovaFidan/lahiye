import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dataContexts from "./contexts/contexts";
import ROOT from "./router/index.routes";
import "./Reset.css"
import Darkmode from 'darkmode-js';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const root = createBrowserRouter(ROOT);

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [original, setOriginal] = useState([]);
  const [user, setUser] = useState([])
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
    if (favItem != undefined) {
      toast.error("Artıq əlavə edilib!");
    } else {
      setFav([...fav, item]);
      localStorage.setItem("fav", JSON.stringify([...fav, item]));
      toast.success("Favorilərinizə əlavə edildi!");
    }
  };

  const handleMuq = (item) => {
    const favItem = muq.find((favItem) => favItem._id == item._id);
    if (favItem != undefined) {
      toast.error("Artıq əlavə edilib!");
    } else {
      setMuq([...muq, item]);
      localStorage.setItem("fav", JSON.stringify([...muq, item]));
      toast.success("Artıq Müqayisə edə bilərsiz!");
    }
  };

  const removeFrombasket = (product) => {
    const target = basket.find(item => item._id == product._id);
    basket.splice(basket.indexOf(target), 1);
    setbasket([...basket]);
    localStorage.setItem("BasketItem", JSON.stringify([...basket]));

    toast.error("Səbətdən silindi.");
  };

  const AddtoBasket = (product) => {
    const target = basket.find(item => item.product._id == product._id);
    if (target) {
      target.count += 1;
      target.totalPrice = product.satis * target.count;
      setbasket([...basket]);
      localStorage.setItem("BasketItem", JSON.stringify([...basket]));
      toast.success("Səbətə əlavə edildi!");
    } else {
      const BasketProduct = {
        id: product._id,
        product: product,
        count: 1,
        totalPrice: product.satis
      };
      setbasket([...basket, BasketProduct]);
      localStorage.setItem("BasketItem", JSON.stringify([...basket, BasketProduct]));
      toast.success("Səbətə əlavə edildi!");
    }
  };

  const decreaseBtn = (product) => {
    const target = basket.find(item => item.id == product.id);
    if (target.count > 1) {
      target.count -= 1;
      target.totalPrice = target.product.satis * target.count;
      setbasket([...basket]);
      localStorage.setItem("BasketItem", JSON.stringify([...basket]));
    }
  };

  const increase = (product) => {
    const target = basket.find(item => item.id == product.id);
    target.count += 1;
    target.totalPrice = target.product.satis * target.count;
    setbasket([...basket]);
    localStorage.setItem("BasketItem", JSON.stringify([...basket]));
  };

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
  useEffect(() => {
    axios.get("http://localhost:8080/users")
      .then((res) => {

        setUser(res.data);

      })
      .catch(err => {
        setError(err);
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
    setOriginal,
    fav,
    setFav,
    handleFav,
    AddtoBasket,
    increase,
    decreaseBtn,
    removeFrombasket,
    basket,
    setbasket,
    handleMuq,
    muq,
    setMuq, 
    user, 
    setUser
  };

  return (
    <dataContexts.Provider value={values}>
      <RouterProvider router={root} />
      <ToastContainer />
    </dataContexts.Provider>
  );
}

export default App;
