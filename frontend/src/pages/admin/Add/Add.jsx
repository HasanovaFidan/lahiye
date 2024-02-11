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
      satis: '',
      endirim: '',
      image: '',
      video: '',
      yaddas: '',
      screen: '',
      system: '',
      prs: '',
      brand: '',
      catagory: '',
    },

    onSubmit: values => {
      axios.post("http://localhost:8080/technical", values).then(res => {
        setData([...data, res.data]);
        navigate('/admin'); 
        toast.success('Əlavə edildi.');
      })
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
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Ad</label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>

            <div className="form-group">
              <label htmlFor="alis">Alış qiyməti</label>
              <input
                id="alis"
                name="alis"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.alis}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="satis">Satış qiyməti</label>
              <input
                id="satis"
                name="satis"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.satis}
              />
            </div>

            <div className="form-group">
              <label htmlFor="endirim">Endirim faizi</label>
              <input
                id="endirim"
                name="endirim"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endirim}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                id="image"
                name="image"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.image}
              />
            </div>

            <div className="form-group">
              <label htmlFor="video">Videokart</label>
              <input
                id="video"
                name="video"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.video}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="yaddas">RAM</label>
              <input
                id="yaddas"
                name="yaddas"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.yaddas}
              />
            </div>

            <div className="form-group">
              <label htmlFor="screen">Ekran</label>
              <input
                id="screen"
                name="screen"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.screen}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="system">Sistem</label>
              <input
                id="system"
                name="system"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.system}
              />
            </div>

            <div className="form-group">
              <label htmlFor="prs">Prosessor</label>
              <input
                id="prs"
                name="prs"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.prs}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="system">Brend</label>
              <input
                id="brand"
                name="brand"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.brand}
              />
            </div>

            <div className="form-group">
              <label htmlFor="prs">Katagoriya</label>
              <input
                id="catagory"
                name="catagory"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.catagory}
              />
            </div>
          </div>
          <button type="submit">Əlavə et</button>
        </form>
      </div>
      <Toaster />
    </div>
  )
}

export default Add;
