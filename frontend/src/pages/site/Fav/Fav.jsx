import React, { useContext } from 'react'
import dataContexts from '../../../contexts/contexts'
import Swal from "sweetalert2"
import { TbPointFilled } from 'react-icons/tb'
import { MdOutlineScore } from 'react-icons/md'
import { FcVideoCall } from 'react-icons/fc'
import { GiPentagramRose, GiScales } from 'react-icons/gi'
import { HiColorSwatch } from 'react-icons/hi'
import { PiScreencastBold } from 'react-icons/pi'
import { CgWindows } from 'react-icons/cg'
import { BiBasket } from 'react-icons/bi'
import { IoLogoElectron } from 'react-icons/io5'
import { MdDeleteOutline } from "react-icons/md";
import { FaArrowRight } from 'react-icons/fa'
import { toast } from 'react-toastify'
const Fav = () => {
    const {fav,setFav,AddtoBasket}=useContext(dataContexts)
    const handleDelete = (id) => {
      const deleted = fav.filter((item) => item._id !== id);
      setFav([...deleted]);
      localStorage.setItem("fav", JSON.stringify([...deleted]));
    
      // Display toast notification for deletion
      toast.error("Favoritlərdən  silindi.");}
  return (
    <div className='lr'>

<div className="noqte">
<span>GameNote</span>
<TbPointFilled className='field' />
<p>Aksesuarlar</p>
</div>
    <h3 className='hasu'>Favoritlər</h3>
    <div className="getall">

   {
    fav.map((item,index)=>{
   if(item.catagory=="notebok"){
    return(
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
  <p>{item.system}</p>
</div>
</div>
          </div>
      </div>
      <div className="ayir">
          <div className="flex">
          <button  onClick={()=>{ AddtoBasket(item) }}><BiBasket /> Səbətə at</button>
          <p className='saam'> <IoLogoElectron />Yeni</p>
          </div>
      <div className="flex">
<span><GiScales /></span>
 <span onClick={(e)=>handleDelete(item._id)}><MdDeleteOutline/></span>
 <span><FaArrowRight /></span>

</div>
      </div>
  </div>
    )
   }
   else{
    return(
      <div className="get">
      <div className="face">
     <div className="ust">
     <img src={item.image} alt="" />
          <p>{item.name}</p>
        
     </div>
   
          <div className="alt">
          <p>₼{item.satis - (item.satis * item.endirim) / 100}</p>
    <span>₼{item.satis}</span>
          </div>
          
      </div>
     
      <div className="ayir">
          <div className="flex">
          <button  onClick={()=>{ AddtoBasket(item) }}><BiBasket /> Səbətə at</button>
          <p className='saam'> <IoLogoElectron />Yeni</p>
          </div>
      <div className="flex">
<span><GiScales /></span>
 <span onClick={(e)=>handleDelete(item._id)}><MdDeleteOutline/></span>
 <span><FaArrowRight /></span>

</div>
      </div>
  </div>
    )
   }
})
   }

    </div>
  
</div>
  )
}

export default Fav