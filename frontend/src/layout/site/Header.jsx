import React, { useContext, useState } from 'react';
import "./Header.scss";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn, CiMenuBurger, CiSearch, CiUser } from "react-icons/ci";
import { GiHamburgerMenu, GiScales } from "react-icons/gi"; 
import { BiBasket } from "react-icons/bi";
import { HiOutlineHeart } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { FaRegMoon } from "react-icons/fa";
import dataContexts from '../../contexts/contexts';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const Header = () => {
  const { data, setData,  original,user,setUser } = useContext(dataContexts);
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
  const toggleCanvas = () => {
    setIsCanvasOpen(!isCanvasOpen); 
  };
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      mobile: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      axios.post("http://localhost:8080/users/register", values).then((res) => {
        setUser([...user, res.data]);
  
      });
      resetForm();
    },
  });

  return (
    <div className="lr header-container">
      <div className="header">
        <div className="one">
          <div className="img">
            <Link to={"/"}>
              <img style={{"width":"200px"}} src="https://gamenotebaku.az/_next/image?url=https%3A%2F%2Fcdn.gamenotebaku.az%2Fera_cms_assets%2Flogolight.webp&w=3840&q=75" alt="" />
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
        <form onSubmit={formik.handleSubmit}>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       />
          <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
 
    
   
 
 
     </form>
        <div className="around">
          Hesabı yadda saxla
          <p style={{"color":"rgb(147, 215, 46)"}}>Şifrəmi unutdum</p>
        </div>
        <button type='sumbit' className='gr'>Giriş et</button>
        <p>Əgər hesabınız yoxdursa, 
          <span
            className='register'
            style={{"color": "rgb(147, 215, 46)"}}
            onClick={toggleRegister}
          >
            Qeydiyyatdan keçin
          </span>
        </p>
      </div>
      <div className="registeropen" style={{"display": isRegisterOpen ? 'block' : 'none'}}>
        <h3>Qeydiyyat</h3>
        <form onSubmit={formik.handleSubmit} >
     <div className="flexos">
                  <input
                    id="name"
                    type="text"
                    placeholder='ad soyad'
                    {...formik.getFieldProps("name")}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                  ) : null}

                  <label htmlFor="mobile" >mobile</label>
                  <input
                    id="mobile"
                    type="string"
                    {...formik.getFieldProps("mobile")}
                  />
                  {formik.touched.mobile && formik.errors.mobile ? (
                    <div>{formik.errors.mobile}</div>
                  ) : null}
     </div>
<div className="flexos">
  
<label htmlFor="email" >E-POSTA</label>
                  <input
                    id="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}

                  <label htmlFor="password" >ŞİFRE</label>
                  <input
                    id="password"
                    type="password"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
</div>

                  <button type="submit">Oluştur</button>
                </form>
        <div className="ara">
          <div className="n">
            <p  onClick={toggleOpen}>
              Qeydiyyatdan keçmisiniz? <span>Giriş et</span>
            </p>
          </div>
          <div className="n">
            <button>Qeydiyyatdan keç</button>
          </div>
        </div>
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
          <input onChange={(e) => handleChange(e)} type="text" placeholder='Axtarış'/>
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