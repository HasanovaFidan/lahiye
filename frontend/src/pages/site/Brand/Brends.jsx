import React from 'react'
import "./Brends.scss"
import { Link } from 'react-router-dom'

const Brends = () => {
  return (
    <div  className="lr" >
      <div className="brends">
      <div className="one-divs">
      <div className="brends-div">
          <Link to={"/asusbrand"}>  <img src="https://gamenotebaku.az/_next/image?url=https%3A%2F%2Fcdn.gamenotebaku.az%2Flogos_img%2F130%2F19%2Fgamenote_img_32_1703264377.png.webp&w=3840&q=75" alt="" /></Link>
        </div>
        <div className="brends-div">
        <Link to={"/asusbrand"}>    <img src="https://gamenotebaku.az/_next/image?url=https%3A%2F%2Fcdn.gamenotebaku.az%2Flogos_img%2F130%2F20%2Fgamenote_img_53_1703264249.png.webp&w=3840&q=75" alt="" /></Link>
        </div>
        <div className="brends-div">
          <Link to={"/msibrand"}>  <img src="https://gamenotebaku.az/_next/image?url=https%3A%2F%2Fcdn.gamenotebaku.az%2Flogos_img%2F130%2F14%2FERA_CMS_IMG_39_1695703917.png&w=3840&q=75" alt="" /></Link>
        </div>
        <div className="brends-div">
           <Link to={"/acerbrand"}> <img src="https://gamenotebaku.az/_next/image?url=https%3A%2F%2Fcdn.gamenotebaku.az%2Flogos_img%2F130%2F15%2FERA_CMS_IMG_77_1695703942.png&w=3840&q=75" alt="" /></Link>
        </div>
      </div>
      <div className="two-divs">
      <div className="brends-div-two">
           <Link to={"/razerbrand"}> <img src="https://gamenotebaku.az/_next/image?url=https%3A%2F%2Fcdn.gamenotebaku.az%2Flogos_img%2F130%2F16%2FERA_CMS_IMG_63_1695704142.png&w=3840&q=75" alt="" /></Link>
        </div>
        <div className="brends-div-two">
          <Link to={"/lenovobrand"}>  <img src="https://gamenotebaku.az/_next/image?url=https%3A%2F%2Fcdn.gamenotebaku.az%2Flogos_img%2F130%2F17%2FERA_CMS_IMG_95_1695704156.png&w=3840&q=75" alt="" /></Link>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Brends
