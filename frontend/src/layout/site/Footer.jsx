import React from 'react'
import { FaFacebookF, FaInstagram, FaRegMoon, FaWhatsapp } from 'react-icons/fa'
import './footer.scss'
import { BsTelephone } from "react-icons/bs";
import { GiLoveLetter } from "react-icons/gi";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
   

        <div className="lr">
        <div className="yan">
       <div className="fk">
       <div className="bir">
         <img style={{"width":"130px"}}  src="https://gamenotebaku.az/_next/image?url=https%3A%2F%2Fcdn.gamenotebaku.az%2Fera_cms_assets%2Flogolight.webp&w=3840&q=75" alt="" />
         
         <div className="div">
         <span><FaWhatsapp /></span>
            <span><FaInstagram /></span>
            <span><FaFacebookF /></span>
         </div>
         <p >​Bülbül prospekti 58D</p>
         <p  style={{"color":"gray"}}>Telefonla sifarişlərin işlənməsi və <br /> qəbulu:</p>
         <p>+994 77 517-57-47</p>
        
         </div>
         <div className="iki">
          <h2>Noutbuklar</h2>
          <p>ASUS ROG / TUF</p>
          <p>​MSI Gaming</p>
          <p>​Acer Predator / <br /> Nitro</p>
          <p>Lenovo Legion / <br /> LOQ​</p>
          <p>HP OMEN / <br /> Victus​</p>
          <p>Alienware</p>
          <p>Razer</p>
         </div>
         <div className="uc">
          <h2>Komponentlər və <br /> Monitorlar</h2>
         <p>Monitorlar</p>
         <p>Videokartlar</p>

         </div>
         <div className="dort">
          <h2>Aksesuarlar</h2>
          <p>Gaming <br /> Oturacaqlar</p>
          <p>​Oyun Qurğuları</p>
        <p>Kompüter <br /> siçanları</p>
        <p>Klaviaturalar</p>
        <p>Qulaqlıqlar</p>
        <p>
Səs <br /> qurğuları</p>
        <p>Mikrofonlar</p>
        <p>
Siçan altlıqları</p>
        <p>Mikrofonlar</p>
  <p>Web kameralar</p>
         </div>
         <div className="bes">
          <h2>Şirkət haqqında</h2>
          <p>Brendler</p>
          <p>​Çatdırılma <br /> və ödəniş</p>
        <p>Zəmanət şərtləri</p>
        <p>Məxfilik siyasəti</p>
        <p>Qaytarılma <br /> şərtləri</p>
<p>  <Link to={"elaqe"}>Əlaqə</Link></p>
         </div>
         <div className="alti">
          <h2>Xəbərlər</h2>
         </div>
         <div className="yeddi">
          <h2>NVDIA</h2>
         </div>
         <div className="sekkiz">
          <div className="span">
            <FaRegMoon />
          </div>
          <select>
            <option value="option1"> Azərbaycan dili</option>
            <option value="option2">Русский</option>
            <option value="option3">English</option>
          </select>
        </div>
       </div>
       <div className="fax">
        <p> <BsTelephone />+994 77 517-57-47</p>
   
<p><GiLoveLetter />info@gamenotebaku.az</p>
       </div>
         <div className="boss"></div>
     <div className="area">
     <p>Bütün hüquqlar qorunur.</p>
     <p>Hazırlanıb:Fedan</p>
     </div>
        </div>
    
      </div>
    

  )
}

export default Footer







