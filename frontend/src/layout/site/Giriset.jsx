import React, { useContext } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import dataContexts from '../../contexts/contexts';
import Swal from 'sweetalert2';

const Giriset = ({ toggleOpen }) => { // toggleOpen prop'unu al
  const { data, setData, original, user, setUser } = useContext(dataContexts);

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Ad daxil edin"),
      surname: Yup.string().required("Soyad daxil edin"),
      email: Yup.string().required("Email daxil edin"),
      password: Yup.string().required("Şifrə daxil edin"),
    }),
    onSubmit: (values, { resetForm }) => {
      axios.post("http://localhost:8080/users/register", values)
      .then((res) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Uğurla qeydiyyatdan keçdiniz"
        });
        toggleOpen(true); // Open the login modal after successful registration
      })
      .catch(error => {
        Swal.fire("Bu email artıq istifadə edilib");
      });
      resetForm();
    },
  });

  return (
    <div>
      <h3>Qeydiyyat</h3>
      <form onSubmit={formik.handleSubmit} >
        <div className="flexos">
          <input
            id="name"
            type="text"
            placeholder='ad '
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}

          <input
            id="surname"
            type="text"
            placeholder='soyad'
            {...formik.getFieldProps("surname")}
          />
          {formik.touched.surname && formik.errors.surname ? (
            <div>{formik.errors.surname}</div>
          ) : null}
        </div>
        <div className="flexos">
          <input
            id="email"
            type="email"
            placeholder='email'
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <input
            id="password"
            type="password"
            placeholder='şifrə'
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="n">
          <button type="submit">Qeydiyyatdan keç</button>
        </div>
      </form>
      <div className="ara">
        <div className="ng">
          {/* toggleOpen fonksiyonunu props olarak al ve onClick olayında çağır */}
          <p onClick={toggleOpen}>
            Qeydiyyatdan keçmisiniz? <span>Giriş et</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Giriset;
