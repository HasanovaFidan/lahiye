import React from 'react'
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

const GetAll = () => {
  return (
    <div className='lr'>
        <div className="xetto"></div>
        <h3 className='hasu'>Ən çox satılanlar</h3>
        <div className="getall">
   
            <div className="get">
                <div className="face">
               <div className="ust">
               <img src="https://cdn.gamenotebaku.az/productimg/107/210/gamenote_img_65_1701258046.png.webp" alt="" />
                    <p>ASUS TUF Gaming A15 (FA506QM-HN128) Gaming Laptop</p>
                  <h6>Əsas göstəricilər</h6>
               </div>
             
                    <div className="alt">
                    <p>2499 ₼</p> <span>2740₼</span>
                    </div>
                    
                </div>
                <div className="yanyana">
                    <div className="birinci">
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
                    </div>
                </div>
                <div className="ayir">
                    <div className="flex">
                    <button><BiBasket /> Səbətə at</button>
                    <p className='saam'> <IoLogoElectron />Yeni</p>
                    </div>
                <div className="flex">
         <span><GiScales /></span>
           <span><HiOutlineHeart /></span>
           <span><FaArrowRight /></span>
     
          </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default GetAll
