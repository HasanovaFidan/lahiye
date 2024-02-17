import React, { useContext } from 'react';
import "./Mix.css"
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import dataContexts from '../../contexts/contexts';
import { GiHamburgerMenu } from 'react-icons/gi';




function Header() {
 const {data,setData,original,setOrginal} = useContext(dataContexts)
 const handleChan=(e)=>{
  const searched=e.target.value.trim().toLowerCase()
 if(searched==""){
  setData(original)
 }
 else{
  let searchedCards=data.filter(data=>data.name.trim().toLowerCase().includes(searched))
  setData(searchedCards)
 }
  }
  return (
    <div className='fullos'>
  <div>
  <div className="headero">
                <div className="leftos">
         <Link style={{"color":"black"}} to={"/adminhome"}>  <h1>Admin.</h1></Link>
                </div>
                <div className="middleos">
     <Link to={"home"} ><p>home</p></Link>               
     <Link to={"/add"} ><p>Add</p></Link>      
     <Link to={"/users"}>Users</Link>
          <Link to={"/news"}>Xəbərlər</Link>     
                 
                 
                  <div className="inpos">
                  <input   type="text" placeholder='search entire store here'  onChange={(e)=>handleChan(e)}  />
                    <CiSearch className='sorcos'/>
                  </div>

                </div>
                <div className="rightos">
                <CiUser/>
                <CiHeart/>
                <CiShoppingCart />
                <IoSettingsOutline/>
                    
                </div>
   
                
            </div>
 
  </div>
  
    </div>
  );
}

export default Header;