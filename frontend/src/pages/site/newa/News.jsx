import React from 'react'
import { LuCalendarHeart } from "react-icons/lu";
import { TbPointFilled } from 'react-icons/tb'
import "./news.scss"
import { Link } from 'react-router-dom';
const News = () => {
  return (
    <div className='lr'>
                              <div className="noqte">
 <span>GameNote</span>
 <TbPointFilled className='field' />

 <p>Xəbərlər</p>
 </div>
 <h2 className='haiki'>Aktual xəbərlər</h2>
<div className="row">
  <div className="news col-4 col-mb-4 col-lg-12">
<img src="https://gamenotebaku.az/_next/image?url=https%3A%2F%2Fcdn.gamenotebaku.az%2Fgrid%2F128%2F27%2Fgamenote_img_14_1702711281.jpg&w=3840&q=75" alt="" />
<p className='pes'>NVIDIA RTX 40 seriyalı noutbuklar barədə <br /> nələri bilməlisiniz: RTX 40 seriyalı noutbuklar</p>
<div className="xett"></div>
<div className="aro">
  <p> <LuCalendarHeart />2023-12-16 11:14:20</p>
<Link to={"/newsone"}>  <button className='etraf'>Ətraflı bax</button></Link>
</div>
  </div>
  <div className="news col-4 col-mb-4 col-lg-12">
<img src="https://gamenotebaku.az/_next/image?url=https%3A%2F%2Fcdn.gamenotebaku.az%2Fgrid%2F128%2F28%2Fgamenote_img_89_1705871245.jpg&w=3840&q=75" alt="" />
<p className='pes'>NVIDIA yeni RTX 40 SUPER seriyalı qrafik <br /> kartlarını təqdim edib!</p>
<div className="xett"></div>
<div className="aro">
  <p> <LuCalendarHeart />2024-01-09 01:02:09</p>
  <Link to={"/newstwo"}>  <button className='etraf'>Ətraflı bax</button></Link>
</div>
  </div>
  <div className="news col-4 col-mb-4 col-lg-12">
<img src="https://gamenotebaku.az/_next/image?url=https%3A%2F%2Fcdn.gamenotebaku.az%2Fgrid%2F128%2F29%2Fgamenote_img_40_1705874880.jpg&w=3840&q=75" alt="" />
<p className='pes'>NVIDIA daha kəskin və aydın təsvirlər üçün G- <br />SYNC Pulsar texnologiyasını təqdim edib!</p>
<div className="xett"></div>
<div className="aro">
  <p> <LuCalendarHeart />2024-01-11 02:04:21</p>
  <Link to={"/newsthree"}>  <button className='etraf'>Ətraflı bax</button></Link>
</div>
  </div>
</div>
    </div>

  )
}

export default News
