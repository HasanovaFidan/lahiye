import React, { useContext } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import dataContexts from '../../../contexts/contexts';
import { useNavigate } from 'react-router-dom'; 
import "./add.scss"; 

function Add() {
  const { setData, data } = useContext(dataContexts);
  const navigate = useNavigate(); 

  const formik = useFormik({
    initialValues: {
      name: '',
      alis: '',
      image: '',
      satis: '',
      endirim: '',
      video: '',
    yaddas: '',
    screen: '',
    system: '',
    prs: '',
    },

    onSubmit: values => {
      axios.post("http://localhost:8080/technical", values).then(res => {
        setData([...data, res.data]);
      
        navigate('/admin'); 
        toast.success('Əlavə edildi.');
      }).catch(error => {
        toast.error('Əlavə edilərkən bir hata oluştu.');
      });
      formik.resetForm();
    },
  });

  return (
    <div style={{ marginTop: "30px", minHeight: "500px" }}>
      <div className="application">
        {/* ... */}
      </div>
      <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <form className="form" onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Ad</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />

          <label htmlFor="alis">Alış qiyməti</label>
          <input
            id="alis"
            name="alis"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.alis}
          />
          <label htmlFor="satis">satış qiyməti</label>
          <input
            id="satis"
            name="satis"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.satis}
          />
                    <label htmlFor="endirim">Endirim faizi</label>
          <input
            id="endirim"
            name="endirim"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endirim}
          />
          <label htmlFor="image">Image</label>
          <input
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
          />
    <label htmlFor="video">videokart</label>
          <input
            id="video"
            name="video"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.video}
          />
             <label htmlFor="yaddas">RAM</label>
          <input
            id="yaddas"
            name="yaddas"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.yaddas}
          />
                     <label htmlFor="screen">Ekran</label>
          <input
            id="screen"
            name="screen"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.screen}
          />
                     <label htmlFor="screen">Sistem</label>
          <input
            id="system"
            name="system"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.system}
          />
              <input
            id="prs"
            name="sys\tem"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.system}
          />
          <button type="submit">Əlavə et</button>
        </form>
      </div>
      <Toaster />
    </div>
  )
}

export default Add;
