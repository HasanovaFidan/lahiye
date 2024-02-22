import React, { useContext, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import "./cards.scss";
import Card from './Card';
import { TbPointFilled } from "react-icons/tb";
import dataContexts from '../../../contexts/contexts';
import { Link } from 'react-router-dom';

const Cads = () => {
  const  {data,setData}=useContext(dataContexts)
  const [cpuDropdownOpen, setCpuDropdownOpen] = useState(false);
  const [gpuDropdownOpen, setGpuDropdownOpen] = useState(false);
  const [spuDropdownOpen, setSpuDropdownOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(''); 
  const [maxPrice, setMaxPrice] = useState(''); 

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
      const target=data.sort((a,b)=>((a.satis) - (a.satis * a.endirim) / 100)-((b.satis) - (b.satis * b.endirim) / 100))
      setData([...target])
    }
    else if(sorting=="90"){
      const target=data.sort((a,b)=>(b.satis) - (b.satis * b.endirim) / 100-(a.satis) - (a.satis * a.endirim) / 100)
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
  const handlePriceFilter = () => {
    const filteredData = data.filter(item => {
      const price = parseFloat((item.satis) - (item.satis * item.endirim) / 100);
      return (price >= parseFloat(minPrice) && price <= parseFloat(maxPrice));
    });
    setData(filteredData);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handlePriceFilter();
    }
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
          <Link to={"/home"}> <button  onClick={() => window.location.reload()}>sıfırla</button></Link>
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
          <input
            type="number"
            name=""
            id=""
            placeholder='1'
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div className="drec">
          <p>Qiymətədək </p>
          <input
            type="number"
            name=""
            id=""
            placeholder='9000'
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            onKeyPress={handleKeyPress}
          />
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
          <label htmlFor="i5">
            <Link to={"/intelfive"}>i5:</Link>
          </label>
          <input type="checkbox" id="i5" name="i5" value="checked" />
        </div>
        <div className="wn">
          <label htmlFor="i7">
            <Link to={"/intelseven"}>i7:</Link>
          </label>
          <input type="checkbox" id="i7" name="i7" value="checked" />
        </div>
        <div className="wn">
          <label htmlFor="i9">
            <Link to={"/nine"}>i9:</Link>
          </label>
          <input type="checkbox" id="i9" name="i9" value="checked" />
        </div>
        <div className="wn">
          <label htmlFor="ryzen5">
            <Link to={"/ryzenfive"}>Ryzen 5:</Link>
          </label>
          <input type="checkbox" id="ryzen5" name="ryzen5" value="checked" />
        </div>
        <div className="wn">
          <label htmlFor="ryzen7">
            <Link to={"/ryzenseven"}>Ryzen 7:</Link>
          </label>
          <input type="checkbox" id="ryzen7" name="ryzen7" value="checked" />
        </div>
        <div className="wn">
          <label htmlFor="ryzen9">
            <Link to={"/ryzennine"}>Ryzen 9:</Link>
          </label>
          <input type="checkbox" id="ryzen9" name="ryzen9" value="checked" />
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
               <Link to={"/onalti"}> <label htmlFor="i5">16</label></Link>
                <input type="checkbox" id="i5" name="i5" value="checked"/>
              </div>
              <div className="wn">
           <Link to={"/onsekkiz"}> <label htmlFor="i7">18:</label></Link>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="wn">
            <Link to={"/onbes"}>    <label htmlFor="i9">15.6:</label></Link>
                <input type="checkbox" id="i9" name="i9" value="checked"/>
              </div>
              <div className="wn">
               <Link to={"/onyeddi"}> <label htmlFor="ryzen5">17.3</label></Link>
                <input type="checkbox" id="ryzen5" name="ryzen5" value="checked"/>
              </div>
              <div className="wn">
          <Link to={"/yeddi"}><label htmlFor="ryzen7"> 7:</label></Link>
                <input type="checkbox" id="ryzen7" name="ryzen7" value="checked"/>
              </div>
              <div className="wn">
              <Link to={"/sekkiz"}>  <label htmlFor="ryzen9">8.8</label></Link>
                <input type="checkbox" id="ryzen9" name="ryzen9" value="checked"/>
              </div>
              <div className="wn">
             <Link to={"/ondort"}>   <label htmlFor="ryzenZ1">14</label></Link>
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
          <Card/>
        </div>
      </div>
    </div>
  );
};

export default Cads;
