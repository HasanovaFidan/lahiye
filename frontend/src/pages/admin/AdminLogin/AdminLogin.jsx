import React, { useContext } from 'react';
import "./login.scss";
import { useFormik } from 'formik';
import axios from 'axios';
import dataContexts from '../../../contexts/contexts';
import { useNavigate } from 'react-router';

const AdminLogin = () => {
  const { data, setData } = useContext(dataContexts);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      axios.post("http://localhost:8080/users/login", values)
        .then(res => {
          localStorage.setItem('token', res.data.token)
          navigate("/adminhome");
        })
        .catch(error => {
          if (error.response) {

            if (error.response.status === 401) {
              formik.setErrors({ email: 'Email or password is incorrect', password: 'Email or password is incorrect' });
            } else {

              console.log("Server error:", error.response.data.message);
            }
          } else if (error.request) {

            console.log("No response from server");
          } else {

            console.log("Error:", error.message);
          }
        });
    },
  });

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Admin Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className={`form-control ${formik.errors.email ? 'is-invalid' : ''}`}
              placeholder="Enter your email"
            />
            {formik.errors.email && <div className="invalid-feedback">{formik.errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className={`form-control ${formik.errors.password ? 'is-invalid' : ''}`}
              placeholder="Enter your password"
            />
            {formik.errors.password && <div className="invalid-feedback">{formik.errors.password}</div>}
          </div>

          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
