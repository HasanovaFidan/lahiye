import React from 'react'
import { BiBasket } from 'react-icons/bi'
import { GiScales } from 'react-icons/gi'
import { HiOutlineHeart } from 'react-icons/hi2'
import { MdOutlineScore } from "react-icons/md";
import { FcVideoCall } from "react-icons/fc";
import { GiPentagramRose } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";
import { PiScreencastBold } from "react-icons/pi"
import { CgWindows } from "react-icons/cg";


const Card = () => {
  return (
  <div className="row">
 
    <div className="cards col-4 col-mb-4 col-lg-12">
        <img src="https://cdn.gamenotebaku.az/productimg/107/373/gamenote_img_74_1706904500.png.webp" alt="" />
        <p style={{"color":"yellowgreen","fontWeight":"bold","fontSize":"15px","paddingLeft":"10px","paddingTop":"10px"}} >ASUS ROG Strix G18 (G814JV-N6035) Gaming Laptop</p>
        <p  style={{"color":"red","fontSize":"20px","textAlign":"start"}}>120</p>
        <div className="xett"></div>
        <div className="flex">
         <span><GiScales /></span>
           <span><HiOutlineHeart /></span>
         <button><BiBasket /> Səbətə at</button>
          </div>
          <div className="duzulus">
            <div className="aycon">
            <MdOutlineScore className='ayc' />
            </div>
            <div className="yazs">
                <p style={{"color":"gray","fontSize":"13px"}}>Prosessor</p>
                <p>Intel Core i7-13650HX</p>
            </div>
          </div>
          <div className="duzulus">
            <div className="aycon">
            <FcVideoCall  className='ayc' />
            </div>
            <div className="yazs">
                <p style={{"color":"gray","fontSize":"13px"}}>Videokart (GPU)</p>
                <p>NVIDIA  RTX 4060 8GB</p>
            </div>
          </div>
          <div className="duzulus">
            <div className="aycon">
            <GiPentagramRose  className='ayc' />
            </div>
            <div className="yazs">
                <p style={{"color":"gray","fontSize":"13px"}}>Operativ yaddaş (RAM)</p>
                <p>16GB DDR5 4800MHz</p>
            </div>
          </div>
          <div className="duzulus">
            <div className="aycon">
            <HiColorSwatch className='ayc' />
            </div>
            <div className="yazs">
                <p style={{"color":"gray","fontSize":"13px"}}>Yaddaş</p>
                <p>1TB PCIe NVMe SSD</p>
            </div>
          </div>
          <div className="duzulus">
            <div className="aycon">
            <PiScreencastBold  className='ayc' />
            </div>
            <div className="yazs">
                <p style={{"color":"gray","fontSize":"13px"}}>Ekran</p>
                <p>18" WQXGA IPS 240Hz</p>
            </div>
          </div>
          <div className="duzulus">
            <div className="aycon">
            <CgWindows className='ayc' />
            </div>
            <div className="yazs">
                <p style={{"color":"gray","fontSize":"13px"}}>Əməliyyat sistemi</p>
                <p>Windows 11</p>
            </div>
       
          </div>
          <button className='baxs'>Ətraflı bax</button>
    </div>



  </div>
  )
}

export default Card
