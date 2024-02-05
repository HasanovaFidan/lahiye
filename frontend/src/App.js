import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import dataContexts from "./contexts/contexts";
import ROOT from "./router/index.routes";
import "./Reset.css"
import Darkmode from 'darkmode-js';





const root = createBrowserRouter(ROOT)
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [original, setOriginal] = useState([])
  useEffect(() => {
    axios.get("")
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
  new Darkmode().showWidget();

  const values = {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
    original,
    setOriginal
  };
  return (
   <dataContexts.Provider value={values}>
      <RouterProvider router={root} />
   </dataContexts.Provider>

    
  );
}

export default App;
