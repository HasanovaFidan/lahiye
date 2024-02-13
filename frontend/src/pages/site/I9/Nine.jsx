import React, { useContext, useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { TbPointFilled } from "react-icons/tb";
import dataContexts from '../../../contexts/contexts';
import { BiBasket } from 'react-icons/bi';
import { GiPocketRadio, GiScales } from 'react-icons/gi';
import { HiOutlineHeart } from 'react-icons/hi2';
import { MdOutlineScore } from 'react-icons/md';
import { FcVideoCall } from 'react-icons/fc';
import { GiPentagramRose } from 'react-icons/gi';
import { HiColorSwatch } from 'react-icons/hi';
import { PiScreencastBold } from 'react-icons/pi';
import { CgWindows } from 'react-icons/cg';

import { Link } from 'react-router-dom';


const ITEMS_PER_PAGE = 12;

const Asus = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
  const  {data,setData,handleFav,handleMuq,AddtoBasket}=useContext(dataContexts)
  const [cpuDropdownOpen, setCpuDropdownOpen] = useState(false);
  const [gpuDropdownOpen, setGpuDropdownOpen] = useState(false);
  const [spuDropdownOpen, setSpuDropdownOpen] = useState(false);

  const toggleCpuDropdown = () => {
    setCpuDropdownOpen(!cpuDropdownOpen);
    setGpuDropdownOpen(false);
    setSpuDropdownOpen(false);
  };

  const toggleGpuDropdown = () => {
    setGpuDropdownOpen(!gpuDropdownOpen);
    setCpuDropdownOpen(false);
    setSpuDropdownOpen(false);
  };

  const toggleSpuDropdown = () => {
    setSpuDropdownOpen(!spuDropdownOpen);
    setCpuDropdownOpen(false);
    setGpuDropdownOpen(false);
  };

  const closeDropdowns = (event) => {
    const cpuDropdownContent = document.getElementById("cpuDropdownContent");
    const gpuDropdownContent = document.getElementById("gpuDropdownContent");
    const spuDropdownContent = document.getElementById("spuDropdownContent");
    const cpuAroundse = document.querySelector(".cpu-aroundse");
    const gpuAroundse = document.querySelector(".gpu-aroundse");
    const spuAroundse = document.querySelector(".spu-aroundse");

    if (!cpuAroundse.contains(event.target) && !cpuDropdownContent.contains(event.target)) {
      setCpuDropdownOpen(false);
    }

    if (!gpuAroundse.contains(event.target) && !gpuDropdownContent.contains(event.target)) {
      setGpuDropdownOpen(false);
    }

    if (!spuAroundse.contains(event.target) && !spuDropdownContent.contains(event.target)) {
      setSpuDropdownOpen(false);
    }
  };
  const HAndlerSorty=(e)=>{
    const sorting=e.target.value
    if(sorting=="df"){
      setData([...data])
    }
    else if(sorting=="09"){
      const target=data.sort((a,b)=>(a.satis) - (a.satis * a.endirim) / 100-(b.satis) - (b.satis * b.endirim) / 100)
      setData([...target])
    }
    else if(sorting=="90"){
      const target=data.sort((a,b)=>(a.satis) - (a.satis * a.endirim) / 100-(b.satis) - (b.satis * b.endirim) / 100)
      setData([...target])
    }
    else if(sorting=="az"){
      const target=data.sort((a,b)=>a.name.localeCompare(b.name))
      setData([...target])
    }
    else if(sorting=="za"){
      const target=data.sort((a,b)=>b.name.localeCompare(a.name))
    }
  }
const [currentPage, setCurrentPage] = useState(1);

const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
const endIndex = currentPage * ITEMS_PER_PAGE;
const currentData = data.filter(item=>item.prs[0]=="Intel Core i9-14900HX").slice(startIndex, endIndex);

const changePage = (pageNumber) => {
  setCurrentPage(pageNumber);
  window.scrollTo(0, 0);
};
  return (
    <div className='lr' onClick={closeDropdowns}>
 <div className="noqte">
 <span>GameNote</span>
 <TbPointFilled className='field' />
 <p>Notebooklar</p>
 </div>

      <div className="cards-flex">
        <div className="left-bord">
          <div className="arounds">
            <h6>Filter</h6>
            <Link to={"/home"}> <button>sıfırla</button></Link>
          </div>
          <div className="borderone">
         <Link to={"/asus"}>ASUS ROG / TUF</Link>
         <Link to={"/msi"}>MSI Gaming</Link>
         <Link to={"/lenovo"}>Lenovo Legion / LOQ</Link>
         <Link to={"/hp"}>HP OMEN / Victus</Link>
         <Link to={"/acer"}>Acer Predator / Nitro</Link>
         <Link to={"/alien"}>Alienware</Link>
         <Link to={"/razer"}>Razer</Link>
          
          </div>
          <div className="borderone">
            <h6>Qiymət aralığı</h6>
            <div className="xett"></div>
            <div className="duz">
              <div className="drec">
                <p>Qiymətdən </p>
                <input type="number" name="" id="" placeholder='1' />
              </div>
              <div className="drec">
                <p>Qiymətədək </p>
                <input type="number" name="" id=""  placeholder='9000'/>
              </div>
            </div>
          </div>
          <div className="bordertwo">
            <div className="cpu-aroundse" onClick={toggleCpuDropdown}>
              <p>Prosessor (CPU)</p>
              <IoIosArrowDown className='drop' />
            </div>

            <div className={`active ${cpuDropdownOpen ? 'show' : ''}`} id="cpuDropdownContent">
              <div className="xett"></div>
              <div className="wn">
              <Link to={"/Intelfive"}><label htmlFor="i5">i5:</label></Link>
         <input type="checkbox" id="i5" name="i5" value="checked"/>
              </div>
              <div className="wn">
             <Link to={"/intelseven"}>   <label htmlFor="i7">i7:</label></Link>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="wn">
              <Link to={"/nine"}><label htmlFor="i9">i9:</label></Link>
                <input type="checkbox" id="i9" name="i9" value="checked"/>
              </div>
              <div className="wn">
               <Link to={"/ryzenfive"}> <label htmlFor="ryzen5">Ryzen 5:</label></Link>
                <input type="checkbox" id="ryzen5" name="ryzen5" value="checked"/>
              </div>
              <div className="wn">
             <Link to={"/ryzenseven"}>   <label htmlFor="ryzen7">Ryzen 7:</label></Link>
                <input type="checkbox" id="ryzen7" name="ryzen7" value="checked"/>
              </div>
              <div className="wn">
           <Link to={"/ryzennine"}> <label htmlFor="ryzen9">Ryzen 9:</label></Link>
                <input type="checkbox" id="ryzen9" name="ryzen9" value="checked"/>
              </div>
            </div>
          </div>
          <div className="bordertwo">
            <div className="gpu-aroundse" onClick={toggleGpuDropdown}>
              <p>Videokart (GPU)</p>
              <IoIosArrowDown className='drop' />
            </div>

            <div className={`active ${gpuDropdownOpen ? 'show' : ''}`} id="gpuDropdownContent">
              <div className="xett"></div>
              <div className="win">
              <Link to={"/fourfive"}> <label htmlFor="i5">NVIDIA GeForce RTX 4050 6GB</label></Link>
                <input type="checkbox" id="i5" name="i5" value="checked"/>
              </div>
              <div className="win">
             <Link to={"/fourseven"}>   <label htmlFor="i7">NVIDIA GeForce RTX 4070 6GB</label></Link>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="win">
            <Link  to={"/foureight"}>   <label htmlFor="i7">NVIDIA GeForce RTX 4080 6GB</label></Link>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="win">
        <Link to={"/fournine"}><label htmlFor="i7">NVIDIA GeForce RTX 4090 6GB</label></Link>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="win">
       <Link to={"/threefive"}>         <label htmlFor="i7">NVIDIA GeForce RTX 3050 6GB</label></Link>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
   
              <div className="win">
       <Link to={"/foursix"}>         <label htmlFor="i7">NVIDIA GeForce RTX 3060 6GB</label></Link>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="win">
              <Link to={"/threeseven"}>       <label htmlFor="i7">NVIDIA GeForce RTX 3070 8GB</label></Link>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="win">
            <Link to={"/threight"}>    <label htmlFor="i7">NVIDIA GeForce RTX 3080 8GB</label></Link>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="win">
             <Link to={"/qrafik"}>   <label htmlFor="i7">AMD Radeon Graphics</label></Link>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
    
    
          
 

            </div>
          </div>
          <div className="bordertwo">
            <div className="spu-aroundse" onClick={toggleSpuDropdown}>
              <p>Ekran</p>
              <IoIosArrowDown className='drop' />
            </div>

            <div className={`active ${spuDropdownOpen ? 'show' : ''}`} id="spuDropdownContent">
              <div className="xett"></div>
              <div className="wn">
                <label htmlFor="i5">16</label>
                <input type="checkbox" id="i5" name="i5" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i7">18:</label>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i9">15.6:</label>
                <input type="checkbox" id="i9" name="i9" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="ryzen5">Ryzen 17.3</label>
                <input type="checkbox" id="ryzen5" name="ryzen5" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="ryzen7"> 7:</label>
                <input type="checkbox" id="ryzen7" name="ryzen7" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="ryzen9">8.8</label>
                <input type="checkbox" id="ryzen9" name="ryzen9" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="ryzenZ1">14</label>
                <input type="checkbox" id="ryzenZ1" name="ryzenZ1" value="checked"/>
              </div>
            </div>
          </div>
        </div>
        <div className="right-cards">
        <div className="araund">
    <h1>Noutbuklar</h1>
    <select className='custom-select' name="" id="" onChange={(e)=>{
                        HAndlerSorty(e)
                }}>
<option value="09"><span>Sıralama:</span>Əvvəlcə ucuz</option>
<option value="90"><span>Sıralama:</span> Əvvəlcə baha</option>


                </select>
   </div>
   <div className="row">
      {currentData.map((item, index) => {
    if(item.prs=="Intel Core i9-14900HX"){
      return(
        <div key={index} className="cards col-4 col-mb-4 col-lg-12">
        <img src={item.image} alt="" />
        <p style={{ color: 'yellowgreen', fontWeight: 'bold', fontSize: '15px', paddingLeft: '10px', paddingTop: '10px' }}>{item.name}</p>
        {
item.endirim > 0 ? (
  <div className='yaxin'>
    <p>₼{item.satis - (item.satis * item.endirim) / 100}</p>
    <span>₼{item.satis}</span>
  </div>
) : null
}
        <div className="xett"></div>
        <div className="flex">
          <span><GiScales onClick={()=>handleMuq(item)} /></span>
          <span><HiOutlineHeart onClick={()=>handleFav(item)} /></span>
          <button  onClick={()=>{ AddtoBasket(item) }}><BiBasket /> Səbətə at</button>
        </div>
        <div className="duzulus">
          <div className="aycon">
            <MdOutlineScore className='ayc' />
          </div>
          <div className="yazs">
            <p style={{ color: 'gray', fontSize: '13px' }}>Prosessor</p>
            <p>{item.prs}</p>
          </div>
        </div>
        <div className="duzulus">
          <div className="aycon">
          <GiPocketRadio className='ayc' />
          </div>
          <div className="yazs">
            <p style={{ color: 'gray', fontSize: '13px' }}>Videokart (GPU)</p>
            <p>{item.video}</p>
          </div>
        </div>
        <div className="duzulus">
          <div className="aycon">
            <GiPentagramRose className='ayc' />
          </div>
          <div className="yazs">
            <p style={{ color: 'gray', fontSize: '13px' }}>Operativ yaddaş (RAM)</p>
            <p>{item.yaddas}</p>
          </div>
        </div>
        {/* <div className="duzulus">
          <div className="aycon">
            <HiColorSwatch className='ayc' />
          </div>
          <div className="yazs">
            <p style={{ color: 'gray', fontSize: '13px' }}>Yaddaş</p>
            <p>1TB PCIe NVMe SSD</p>
          </div>
        </div> */}
        <div className="duzulus">
          <div className="aycon">
            <PiScreencastBold className='ayc' />
          </div>
          <div className="yazs">
            <p style={{ color: 'gray', fontSize: '13px' }}>Ekran</p>
            <p>{item.screen}</p>
          </div>
        </div>
        <div className="duzulus">
          <div className="aycon">
            <CgWindows className='ayc' />
          </div>
          <div className="yazs">
            <p style={{ color: 'gray', fontSize: '13px' }}>Əməliyyat sistemi</p>
            <p>Windows 11</p>
          </div>
        </div>
        <button className='baxs'><Link to={`/${item._id}`}>Ətraflı bax</Link></button>
      </div>
      )
    }
})}


<div className="pagination">
  {Array.from({ length:1 }, (_, i) => (
    <span
      key={i + 1}
      className={currentPage === i + 1 ? 'active' : ''}
      onClick={() => changePage(i + 1)}
    >
      {i + 1}
    </span>
  ))}
</div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Asus;
