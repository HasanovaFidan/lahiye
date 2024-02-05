import React from 'react'


import "./com.scss"
import { GiScales } from 'react-icons/gi';
import { HiOutlineHeart } from 'react-icons/hi2';
import { BiBasket } from 'react-icons/bi';
import { TbPointFilled } from 'react-icons/tb';
const Komponets = () => {

  return (
    <div className='lr' >
             <div className="noqte">
 <span>GameNote</span>
 <TbPointFilled className='field' />
 <p>Monitorlar</p>
 </div>
      <div className="cards-flex">
        <div className="left-bord">
          <div className="arounds">
            <h6>Filter</h6>
            <button>sıfırla</button>
          </div>
          <div className="borderone">
            <p>Monitorlar</p>
            <p>Videokartlar</p>

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
      
        </div>
        <div className="right-cards">
        <div className="araund">
    <h1>Axtarış nəticələri</h1>
    <select className="custom-select">
            <option className='op' value="option1"><span>Sıralama:</span> Əvvəlcə ucuz</option>
            <option className='op' value="option1"><span>Sıralama:</span> Əvvəlcə baha</option>
         
          </select>
   </div>
   <div className="all">
 
    <div className="car">
        <img src="https://cdn.gamenotebaku.az/productimg/107/373/gamenote_img_74_1706904500.png.webp" alt="" />
        <p style={{"color":"yellowgreen","fontWeight":"bold","fontSize":"15px","paddingLeft":"10px","paddingTop":"10px"}} >ASUS ROG Strix G18 (G814JV-N6035) Gaming Laptop</p>
        <p  style={{"color":"red","fontSize":"20px","textAlign":"start"}}>120</p>
        <div className="xett"></div>
        <div className="flex">
         <span><GiScales /></span>
           <span><HiOutlineHeart /></span>
         <button><BiBasket /> Səbətə at</button>
          </div>
<button className='bax'>Ətraflı bax</button>
    </div>

  </div>
         

          </div>
      </div>
    </div>
  );
};

export default Komponets
