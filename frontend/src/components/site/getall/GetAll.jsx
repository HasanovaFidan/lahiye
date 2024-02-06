import React, { useContext } from 'react'
import "./all.scss"
import { MdOutlineScore } from 'react-icons/md';
import { FcVideoCall } from 'react-icons/fc';
import { GiPentagramRose, GiScales } from 'react-icons/gi';
import { HiColorSwatch } from 'react-icons/hi';
import { PiScreencastBold } from 'react-icons/pi';
import { CgWindows } from 'react-icons/cg';
import { HiOutlineHeart } from 'react-icons/hi2';
import { BiBasket } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';
import { IoLogoElectron } from "react-icons/io5";
import dataContexts from '../../../contexts/contexts';

const GetAll = () => {
  const {data,setData,AddtoBasket,handleFav,handleMuq}=useContext(dataContexts)
  return (
    <div className='lr'>
        <div className="xetto"></div>
        <h3 className='hasu'>Ən çox satılanlar</h3>
        <div className="getall">
   
       {
        data.slice(0,6).map((item,index)=>(
          <div className="get">
          <div className="face">
         <div className="ust">
         <img src={item.image} alt="" />
              <p>{item.name}</p>
            <h6>Əsas göstəricilər</h6>
         </div>
       
              <div className="alt">
              <p>{item.price}</p> <span>2740₼</span>
              </div>
              
          </div>
          <div className="yanyana">
              <div className="birinci">
              <div className="duzulus">
    <div className="aycon">
      <MdOutlineScore className='ayc' />
    </div>
    <div className="yazs">
      <p style={{"color":"gray","fontSize":"11px"}}>Prosessor</p>
      <p>{item.prs}</p>
    </div>
  </div>
  <div className="duzulus">
    <div className="aycon">
      <FcVideoCall  className='ayc' />
    </div>
    <div className="yazs">
      <p style={{"color":"gray","fontSize":"13px"}}>{item.video}</p>
      <p>NVIDIA  RTX 4060 8GB</p>
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
              </div>
              <div className="ikinci">
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
      <PiScreencastBold className='ayc' />
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
              </div>
          </div>
          <div className="ayir">
              <div className="flex">
              <button onClick={()=>{
        AddtoBasket(item)
    }}><BiBasket /> Səbətə at</button>
              <p className='saam'> <IoLogoElectron />Yeni</p>
              </div>
          <div className="flex">
   <span onClick={()=>handleMuq(item)} ><GiScales /></span>
     <span onClick= {()=>handleFav(item)} ><HiOutlineHeart/></span>
     <span><FaArrowRight /></span>

    </div>
          </div>
      </div>
        ))
       }

        </div>
      
    </div>
  )
}

export default GetAll
