import React, { useContext, useState } from 'react';
import "./Header.scss";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn, CiMenuBurger, CiSearch, CiUser } from "react-icons/ci";
import { GiHamburgerMenu, GiScales } from "react-icons/gi";
import { BiBasket } from "react-icons/bi";
import { HiOutlineHeart } from "react-icons/hi2";
import { Link, useNavigate } from 'react-router-dom';
import { FaRegMoon, FaUserAlt } from "react-icons/fa";
import dataContexts from '../../contexts/contexts';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import Giriset from './Giriset';
import Swal from 'sweetalert2';

const Header = () => {
  const { data, setData, original, user, setUser, isLogin, setIsLogin } = useContext(dataContexts);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const [searchEmpty, setSearchEmpty] = useState(false);
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setIsRegisterOpen(false);
  };

  const toggleRegister = () => {
    setIsRegisterOpen(!isRegisterOpen);
    setIsOpen(false);
  };

  const closeOpen = () => {
    setIsOpen(false);
    setIsRegisterOpen(false);
  };
  
  const toggleCanvas = () => {
    setIsCanvasOpen(!isCanvasOpen);
  };

  const handleChange = (e) => {
    const searched = e.target.value.trim().toLowerCase();
    if (searched === "") {
      setData(original);
      setSearchEmpty(false);
    } else {
      const datasrc = data.filter((data) => data.name.trim().toLowerCase().includes(searched));
      setData(datasrc);
      setSearchEmpty(datasrc.length === 0);
    }
  };
  
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Düzgün bir email adresi girin")
      .required("Email daxil et"),
    password: Yup.string()
      .required("Şifrə daxil et"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      axios.post("http://localhost:8080/users/login", values)
        .then((res) => {
          navigate("/");
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
            title: "Giriş edildi"
          });
          resetForm(); // Reset the form
          closeOpen(); // Close the modal
          setIsLogin(localStorage.setItem("isLogin", JSON.stringify(true)))
          localStorage.setItem("token",res.data.token)
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Xəta!',
            text: 'Email və ya şifrə yanlışdır!',
          });
        });
    },
  });


  return (
    <div className="lr header-container">
      <div className="header">
        <div className="one">
          <div className="img">
            <Link to={"/"}>
              <img style={{ "width": "200px" }} src="https://gamenotebaku.az/_next/image?url=https%3A%2F%2Fcdn.gamenotebaku.az%2Fera_cms_assets%2Flogolight.webp&w=3840&q=75" alt="" />
            </Link>
          </div>
          <div className="rite">
            <p><span><BsTelephone /></span>+994 77 517-57-47 </p>
            <p><span><CiLocationOn /></span>​Bülbül prospekti 58D </p>
          </div>
        </div>
        <div className="two">
          <div className="flex">
            <Link to={"muq"}><span><GiScales /></span></Link>
            <Link to={"fav"}><span><HiOutlineHeart /></span></Link>
            <Link to={"basket"}><span><BiBasket /></span></Link>
          </div>
          <button className='openbutton' onClick={toggleOpen}>
            Giriş et
          </button>
        {/* <div className="reg">
          <p>Fidan</p>
        <div className="islogin">
          <FaUserAlt />
          </div>
        </div> */}
          <CiUser className='user' onClick={toggleOpen} />
        </div>
        <div className="burger" onClick={toggleCanvas}>
          <CiMenuBurger />
        </div>
      </div>
      <div className={`overlay ${isOpen || isRegisterOpen ? 'visible' : ''}`} onClick={closeOpen}></div>
      <div className={`open ${isOpen ? 'visible' : ''}`}>
        <div className="around">
          <div className="giris">
            <p>Giriş et</p>
          </div>
        </div>
        <p className='p'>Giriş edərkən məlumatların düzgün daxil etdiyinizdən əmin <br /> olun. Əgər hesabınız yoxdursa qeydiyyatdan keçərək <br /> istədiyiniz notebook və digər məhsullardan əldə edə bilərsiniz</p>
        <form className="giriset" onSubmit={formik.handleSubmit}>
          <input
            id="email"
            type="email"
            placeholder='email'
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
          <input
            id="password"
            type="password"
            placeholder='şifre'
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
          <button type="submit">Giriş et</button>
        </form>
        <p>Əgər hesabınız yoxdursa,
          <span
            className='register'
            style={{ "color": "rgb(147, 215, 46)" }}
            onClick={toggleRegister}
          >
            Qeydiyyatdan keçin
          </span>
        </p>
      </div>
      <div className="registeropen" style={{ "display": isRegisterOpen ? 'block' : 'none' }}>
  <Giriset toggleOpen={toggleOpen} />
</div>
      <div className={`canvas-open ${isCanvasOpen ? 'visible' : ''}`}>
        <Link to={"/home"}>Noutbuklar</Link>
        <Link to={"/komponents"}>Komponentlər və Monitorlar</Link>
        <Link to={"/aksesuar"}>Aksesuarlar</Link>
        <Link to={"/about"}>Şirkət haqqında</Link>
        <Link to={"/news"}>Xəbərlər</Link>
        <Link to={"/nvdia"}>NVDIA</Link>
        <Link to={"/fav"}>Favoritlər</Link>
        <Link to={"/basket"}>Səbət</Link>
        <Link to={"/muq"}>Müqayisə</Link>
      </div>
      <div className="og">
        <div className="left-og">
          <Link to={"/home"}>Noutbuklar</Link>
          <Link to={"/komponents"}>Komponentlər və Monitorlar</Link>
          <Link to={"/aksesuar"}>Aksesuarlar</Link>
          <Link to={"/about"}>Şirkət haqqında</Link>
          <Link to={"/news"}>Xəbərlər</Link>
          <Link to={"/nvdia"}>NVDIA</Link>
        </div>
        <div className="right-og">
          <div className="span">
            <FaRegMoon />
          </div>
          <select className='nese'>
            <option value="option1"> Azərbaycan dili</option>
            <option value="option2">Русский</option>
            <option value="option3">English</option>
          </select>
        </div>
      </div>
      <div className="flex">
        <div className="bos">
          <div className="kataloq">
            <GiHamburgerMenu />
            Kataloq
          </div>
        </div>
        <div className="input">
          <input onChange={(e) => handleChange(e)} type="text" placeholder='Axtarış' />
          <p className='ser'><CiSearch /><span>Axtar</span></p>
        </div>
      </div>
      {searchEmpty && (
        <div className='di' id="searchResultMessage">
          Axtardığınız məhsul mövcud deyil
        </div>
      )}
    </div>
  );
};

export default Header;
