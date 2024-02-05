import React, { useContext } from 'react'
import { BiBasket } from 'react-icons/bi'
import { GiScales } from 'react-icons/gi'
import { HiOutlineHeart } from 'react-icons/hi2'
import { MdOutlineScore } from "react-icons/md";
import { FcVideoCall } from "react-icons/fc";
import { GiPentagramRose } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";
import { PiScreencastBold } from "react-icons/pi"
import { CgWindows } from "react-icons/cg";
import dataContexts from '../../../contexts/contexts';


const Card = () => {
  const {data,setData}=useContext(dataContexts)
  return (
  <div className="row">
 
{
  data.map((item,index)=>(
    <div key={index} className="cards col-4 col-mb-4 col-lg-12">
<img src={item.image} alt="" />
<p style={{"color":"yellowgreen","fontWeight":"bold","fontSize":"15px","paddingLeft":"10px","paddingTop":"10px"}} >ASUS ROG Strix G18 (G814JV-N6035) Gaming Laptop</p>
<p  style={{"color":"red","fontSize":"20px","textAlign":"start"}}>₼{item.price}</p>
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
        <p>{item.prs}</p>
    </div>
  </div>
  <div className="duzulus">
    <div className="aycon">
    <FcVideoCall  className='ayc' />
    </div>
    <div className="yazs">
        <p style={{"color":"gray","fontSize":"13px"}}>Videokart (GPU)</p>
        <p>{item.video}</p>
    </div>
  </div>
  <div className="duzulus">
    <div className="aycon">
    <GiPentagramRose  className='ayc' />
    </div>
    <div className="yazs">
        <p style={{"color":"gray","fontSize":"13px"}}>Operativ yaddaş (RAM)</p>
        <p>{item.yaddas}</p>
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
        <p>{item.screen}</p>
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
  ))
}


  </div>
  )
}

export default Card
