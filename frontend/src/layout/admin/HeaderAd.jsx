import React, { useContext, useState } from 'react';
import "./Mix.css"
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom'; // useNavigate eklendi
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dataContexts from '../../contexts/contexts';
import { GiHamburgerMenu } from 'react-icons/gi';

function Header() {
  const { data, setData, original, setOriginal } = useContext(dataContexts);
  const navigate = useNavigate(); // useNavigate hook'u kullanıldı

  const [isNotseeVisible, setIsNotseeVisible] = useState(false);

  const handleChan = (e) => {
    const searched = e.target.value.trim().toLowerCase();
    if (searched == "") {
      setData(original);
    } else {
      let searchedCards = data.filter(data => data.name.trim().toLowerCase().includes(searched));
      setData(searchedCards);
    }
  }

  const toggleNotseeVisibility = () => {
    setIsNotseeVisible(!isNotseeVisible);
  }

  const handleLogout = () => {
    // Burada çıkış işlemi gerçekleştirilir
    // Örnek olarak sessionStorage'dan kullanıcı bilgisini kaldıralım
    sessionStorage.removeItem('user');

    toast.success("Çıxış edildi", { autoClose: 2000 });


    navigate('/dashboard');
  }

  return (
    <div className='fullos'>
      <ToastContainer />
      <div>
        <div className="headero">
          <div className="leftos">
            <Link style={{ "color": "black" }} to={"/adminhome"}>
              <h1>Admin.</h1>
            </Link>
          </div>
          <div className="middleos">
            <Link to={"home"}><p>Home</p></Link>
            <Link to={"/add"}><p>Əlavə et</p></Link>
            <Link to={"/users"}>İstifadəçilər</Link>
            <Link to={"/ordersuser"}>Sifarişlər</Link>

            <div className="inpos">
              <input type="text" placeholder='search entire store here' onChange={(e) => handleChan(e)} />
              <CiSearch className='sorcos' />
            </div>
          </div>
          <div className="rightos">
            <p>
              <CiUser /> <span>Admin</span>
            </p>
            <IoSettingsOutline className='opensee' onClick={toggleNotseeVisibility} />
          </div>

        </div>
        {isNotseeVisible && (
          <div className="notsee" onClick={handleLogout}>
            <h1>Log out</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
