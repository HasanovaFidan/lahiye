import React, { useContext, useState } from 'react';
import { BiBasket } from 'react-icons/bi';
import { GiScales } from 'react-icons/gi';
import { HiOutlineHeart } from 'react-icons/hi2';
import { MdOutlineScore } from 'react-icons/md';
import { GiPocketRadio } from "react-icons/gi";
import { GiPentagramRose } from 'react-icons/gi';
import { HiColorSwatch } from 'react-icons/hi';
import { PiScreencastBold } from 'react-icons/pi';
import { CgWindows } from 'react-icons/cg';
import dataContexts from '../../../contexts/contexts';
import { Link } from 'react-router-dom';

const ITEMS_PER_PAGE = 12;

const Card = () => {
  const { data,setData,handleFav,AddtoBasket,handleMuq } = useContext(dataContexts);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = currentPage * ITEMS_PER_PAGE;
  const currentData = data.filter(item=>item.catagory[0]=="notebok").slice(startIndex, endIndex);
  

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="row">
      {currentData.map((item, index) => {
    if(item.catagory=="notebok"){
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
          <GiPocketRadio  className='ayc' />
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
            <p>{item.system}</p>
          </div>
        </div>
        <button className='baxs'><Link to={`/${item._id}`}>Ətraflı bax</Link></button>
      </div>
      )
    }
})}


      <div className="pagination">
        {Array.from({ length: 7 }, (_, i) => (
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
  );
};

export default Card;
