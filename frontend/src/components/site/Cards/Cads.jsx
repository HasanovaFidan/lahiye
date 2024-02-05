import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import "./cards.scss";
import Card from './Card';
import { TbPointFilled } from "react-icons/tb";

const Cads = () => {
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
            <button>sıfırla</button>
          </div>
          <div className="borderone">
            <p>ASUS ROG / TUF</p>
            <p>MSI Gaming</p>
            <p>Acer Predator / Nitro</p>
            <p>Lenovo Legion / LOQ</p>
            <p>HP OMEN / Victus</p>
            <p>Alienware</p>
            <p>Razer</p>
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
                <label htmlFor="i5">i5:</label>
                <input type="checkbox" id="i5" name="i5" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i7">i7:</label>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i9">i9:</label>
                <input type="checkbox" id="i9" name="i9" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="ryzen5">Ryzen 5:</label>
                <input type="checkbox" id="ryzen5" name="ryzen5" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="ryzen7">Ryzen 7:</label>
                <input type="checkbox" id="ryzen7" name="ryzen7" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="ryzen9">Ryzen 9:</label>
                <input type="checkbox" id="ryzen9" name="ryzen9" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="ryzenZ1">Ryzen Z1:</label>
                <input type="checkbox" id="ryzenZ1" name="ryzenZ1" value="checked"/>
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
              <div className="wn">
                <label htmlFor="i5">NVIDIA GeForce RTX 4050 6GB</label>
                <input type="checkbox" id="i5" name="i5" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i7">NVIDIA GeForce RTX 4070 6GB</label>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i7">NVIDIA GeForce RTX 4080 6GB</label>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i7">NVIDIA GeForce RTX 4090 6GB</label>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i7">NVIDIA GeForce RTX 3050 6GB</label>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i7">NVIDIA GeForce RTX 3050 6GB</label>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i7">NVIDIA GeForce RTX 4050 6GB</label>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i7">NVIDIA GeForce RTX 4050 6GB</label>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i7">NVIDIA GeForce RTX 4050 6GB</label>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i7">NVIDIA GeForce RTX 4050 6GB</label>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i7">NVIDIA GeForce RTX 4050 6GB</label>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i7">NVIDIA GeForce RTX 4050 6GB</label>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i7">NVIDIA GeForce RTX 4050 6GB</label>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i7">NVIDIA GeForce RTX 4050 6GB</label>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i7">NVIDIA GeForce RTX 4050 6GB</label>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
                   <div className="wn">
                <label htmlFor="i7">NVIDIA GeForce RTX 4050 6GB</label>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i7">NVIDIA GeForce RTX 4050 6GB</label>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i7">NVIDIA GeForce RTX 4050 6GB</label>
                <input type="checkbox" id="i7" name="i7" value="checked"/>
              </div>
              <div className="wn">
                <label htmlFor="i7">NVIDIA GeForce RTX 4050 6GB</label>
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
    <select className="custom-select">
            <option className='op' value="option1"><span>Sıralama:</span> Əvvəlcə ucuz</option>
            <option className='op' value="option1"><span>Sıralama:</span> Əvvəlcə baha</option>
         
          </select>
   </div>
          <Card/>
        </div>
      </div>
    </div>
  );
};

export default Cads;
