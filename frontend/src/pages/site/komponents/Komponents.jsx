import React, { useContext, useEffect, useState } from 'react'


import "./com.scss"
import { GiScales } from 'react-icons/gi';
import { HiOutlineHeart } from 'react-icons/hi2';
import { BiBasket } from 'react-icons/bi';
import { TbPointFilled } from 'react-icons/tb';
import dataContexts from '../../../contexts/contexts';
const ITEMS_PER_PAGE = 12;

const Komponets = () => {
  const {datas,setDatas,handleFav,handleMuq,AddtoBasket}=useContext(dataContexts)
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(datas.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = currentPage * ITEMS_PER_PAGE;
  const currentData = datas.slice(startIndex, endIndex);
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  const HAndlerSorty=(e)=>{
    const sorting=e.target.value
    if(sorting=="df"){
      setDatas([...datas])
    }
    else if(sorting=="09"){
      const target=datas.sort((a,b)=>a.price-b.price)
      setDatas([...target])
    }
    else if(sorting=="90"){
      const target=datas.sort((a,b)=>b.price-a.price)
      setDatas([...target])
    }
    else if(sorting=="az"){
      const target=datas.sort((a,b)=>a.name.localeCompare(b.name))
      setDatas([...target])
    }
    else if(sorting=="za"){
      const target=datas.sort((a,b)=>b.name.localeCompare(a.name))
    }
  }

  return (
    <div className='lr' >
    <div className="noqte">
<span>GameNote</span>
<TbPointFilled className='field' />
<p>Aksesuarlar</p>
</div>
   <div className="cards-flex">
     <div className="left-bord">
       <div className="arounds">
         <h6>Filter</h6>
         <button>sıfırla</button>
       </div>
       <div className="borderone">
         <p>Gaming Oturacaqlar</p>
         <p>Klaviaturalar</p>
         <p>Oyun Qurğuları</p>
         <p>Qulaqlıqlar</p>
         <p>Səs qurğuları</p>
         <p>Siçan altlıqları</p>
         <p>Mikrofonlar</p>
         <p>Web kameralar</p>


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
 <select className='custom-select' name="" id="" onChange={(e)=>{
                        HAndlerSorty(e)
                }}>
<option value="09"><span>Sıralama:</span>Əvvəlcə ucuz</option>
<option value="90"><span>Sıralama:</span>Əvvəlcə baha</option>


                </select>
</div>
<div className="row">

{
datas.map((item,index)=>{
 if(item.catagory=="komponents"){
return(
<div key={index} className="car col-3 col-mb-3 col-lg-12">
<img style={{"height":"35%","width":"98%"}} src={item.image} alt="" />
<p style={{"color":"yellowgreen","fontWeight":"bold","fontSize":"15px","paddingLeft":"10px","paddingTop":"10px"}} >{item.name}</p>
<p  style={{"color":"red","fontSize":"20px","textAlign":"start"}}>₼{item.price}</p>
<div className="xett"></div>
<div className="flex">
<span onClick={()=>handleMuq(item)}><GiScales /></span>
     <span><HiOutlineHeart onClick={()=>handleFav(item)} /></span>
   <button onClick={()=>{ AddtoBasket(item) }}><BiBasket  /> Səbətə at</button>
 </div>
<button className='bax'>Ətraflı bax</button>
</div>
)
 }
})
}
 

</div>
<div className="pagination">
     {Array.from({ length: 1 }, (_, i) => (
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
  );
};

export default Komponets
