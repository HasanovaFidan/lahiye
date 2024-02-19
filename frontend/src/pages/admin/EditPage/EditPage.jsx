import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

function EditPage() {
  const { id } = useParams();
  const [edit, setEdit] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/technical/${id}`)
      .then((res) => {
        setEdit(res.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  useEffect(() => {
    formik.setValues({
      name: edit.name || '',
      alis: edit.alis || '',
      satis: edit.satis || '',
      endirim: edit.endirim || '',
      image: edit.image || '',
      video: edit.video || '',
      yaddas: edit.yaddas || '',
      screen: edit.screen || '',
      system: edit.system || '',
      prs: edit.prs || '',
      brand: edit.brand || '',
      catagory: edit.catagory || '',
    })
  }, [edit])
  const formik = useFormik({
    initialValues: {
      name: '',
      alis:  '',
      satis: '',
      endirim:  '',
      image:  '',
      video:  '',
      yaddas:  '',
      screen: '',
      system:  '',
      prs:  '',
      brand:  '',
      catagory:   '',
    },
    onSubmit: values => {
      axios.put(`http://localhost:8080/technical/${edit._id}`, values)
        .then(res => {
          navigate('/adminhome');
          toast.success('Updated successfully.');
        })
        .catch(error => {
          toast.error('An error occurred while updating.');
          console.error("Error updating data:", error);
        });
    },
  });




  return (
    <div style={{ marginTop: "30px", minHeight: "500px" }}>
      <div className="application"></div>
      <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
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
              <label htmlFor="alis">Alis price</label>
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
              <label htmlFor="satis">Satis price</label>
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
              <label htmlFor="endirim">Discount percentage</label>
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
              <label htmlFor="brand">Brand</label>
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
              <label htmlFor="catagory">Category</label>
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

          <button className="differbtn" type="submit">Submit</button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default EditPage;
