import React, { useContext } from 'react'
import { BiBasket } from 'react-icons/bi'
import { CgWindows } from 'react-icons/cg'
import { FaArrowRight } from 'react-icons/fa'
import { FcVideoCall } from 'react-icons/fc'
import { GiPentagramRose, GiPocketRadio, GiScales } from 'react-icons/gi'
import { HiColorSwatch } from 'react-icons/hi'
import { HiOutlineHeart } from 'react-icons/hi2'
import { IoLogoElectron } from 'react-icons/io5'
import { MdOutlineScore } from 'react-icons/md'
import { PiScreencastBold } from 'react-icons/pi'
import dataContexts from '../../../contexts/contexts'
import { Link } from 'react-router-dom'

const Premium = () => {
  const {data,setData,AddtoBasket,handleFav,handleMuq}=useContext(dataContexts)
  return (
    <div className='lr'>

    <h3 className='hasu'>Premium</h3>
    <div className="getall">

    {
        data.slice(6,12).map((item,index)=>(
          <div className="get">
          <div className="face">
         <div className="ust">
         <img src={item.image} alt="" />
              <p>{item.name}</p>
            <h6>Əsas göstəricilər</h6>
         </div>
       
              <div className="alt">
              <p>₼{item.satis - (item.satis * item.endirim) / 100}</p>
    <span>₼{item.satis}</span>
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
    <GiPocketRadio  className='ayc' />
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
     <Link to={`/${item._id}`} > <span><FaArrowRight /></span></Link>

    </div>
          </div>
      </div>
        ))
       }

    </div>
  
</div>
  )
}

export default Premium
