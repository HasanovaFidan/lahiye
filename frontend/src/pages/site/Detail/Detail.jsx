import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./det.scss"
import { GiMouthWatering, GiPentagramRose, GiPocketRadio, GiScales } from 'react-icons/gi';
import dataContexts from '../../../contexts/contexts';
import { BiBasket } from 'react-icons/bi';
import { HiOutlineHeart } from 'react-icons/hi2';
import { CgWindows } from 'react-icons/cg';
import { PiScreencastBold } from 'react-icons/pi';
import { HiColorSwatch } from 'react-icons/hi';
import { FcVideoCall } from 'react-icons/fc';
import { MdOutlineScore } from 'react-icons/md';


const Detail = () => {
  const {AddtoBasket,handleFav,handleMuq}=useContext(dataContexts)
    const {id}=useParams()
    const [item, setItem] = useState([]);

  
    useEffect(() => {
      axios(`http://localhost:8080/technical/${id}`).then((res) => {
      setItem(res.data)
      });
    }, []);
  return (
    <div className='lr'>
      <div className="detail-page">
<div className="detail-image">
  <img className='img-thumbnail' src={item.image} alt="" />
</div>
<div className="detail-names">
  <p className='nma'>{item.name}</p>
  <div className="yaxin">
  {
  item.endirim > 0 ? (
    <div className='yaxin'>
      <p>{item.satis - (item.satis * item.endirim) / 100}₼</p>
      <span>{item.satis}₼</span>
    </div>
  ) : null
}
  </div>
  <div className="tezexett"></div>
<div className="stflex">
<div className="stolck">

<GiMouthWatering className='balaca' />
<p>Stokda mövcuddur</p>
    </div>
    <div className="stolck">
    <GiMouthWatering className='balaca'  />
<p>Birbank Taksit</p>


    </div>
 
</div>
<div className="tezexett"></div>
<div className="yum-flex">
<div className="yumuru">
<button  onClick={()=>{ AddtoBasket(item) }}><BiBasket /> Səbətə at</button>
</div>
<div className="yumuru">
<span><GiScales onClick={()=>handleMuq(item)} /></span>
            <span><HiOutlineHeart onClick={()=>handleFav(item)} /></span>
</div>
</div>
<div className="tezexett"></div>
<div className="start">
<p>Əsas Göstəricilər</p>
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
      <p style={{"color":"gray","fontSize":"13px"}}>Operativ yaddaş</p>
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
</div>

      </div>

    </div>
  )
}

export default Detail