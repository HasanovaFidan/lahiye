import React, { useState, useEffect } from 'react';
import './game.scss';
import { MdOutlineScore } from 'react-icons/md';
import { FcVideoCall } from 'react-icons/fc';
import { GiPentagramRose } from 'react-icons/gi';
import { HiColorSwatch } from 'react-icons/hi';
import { PiScreencastBold } from 'react-icons/pi';
import { CgWindows } from 'react-icons/cg';
import { GiMouthWatering } from "react-icons/gi";
import { BiBasket } from 'react-icons/bi';
import Slider from './Slider';
import { TbPointFilled } from 'react-icons/tb';

const Gamer = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 16);

  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = timeRemaining
    ? `${timeRemaining.days} Gün ${timeRemaining.hours} : ${timeRemaining.minutes} : ${timeRemaining.seconds} `
    : '';

  return (
    <div className='lr'>
         <div className="noqte">
 <span>GameNote</span>
 <TbPointFilled className='field' />

 </div>
  <div className="cards-flex">
  <div className="gameLeft">
        <div className="headergame">
          <p>Ayın xüsusi təklifi</p>
          <p>{formattedTime}</p>
        </div>
        <div className="yanyan">
          <div className="sekil">
            <img src="https://cdn.gamenotebaku.az/productimg/107/190/gamenote_img_83_1700653652.png.webp" alt="" />
          </div>
          <div className="obiri">
            <h3>ASUS TUF Gaming F17 (FX707ZV4-HX018) Gaming Laptop</h3>
            <div className="az">
              <p>2499 ₼</p> <span>2740₼</span>
            </div>
          </div>
        </div>
        <div className="xett"></div>
<div className="start">
<div className="salk">
<div className="duzulus">
          <div className="aycon">
            <MdOutlineScore className='ayc' />
          </div>
          <div className="yazs">
            <p style={{"color":"gray","fontSize":"13px"}}>Prosessor</p>
            <p>Intel Core i7-13650HX</p>
          </div>
        </div>
        <div className="duzulus">
          <div className="aycon">
            <FcVideoCall  className='ayc' />
          </div>
          <div className="yazs">
            <p style={{"color":"gray","fontSize":"13px"}}>Videokart (GPU)</p>
            <p>NVIDIA  RTX 4060 8GB</p>
          </div>
        </div>
        <div className="duzulus">
          <div className="aycon">
            <GiPentagramRose  className='ayc' />
          </div>
          <div className="yazs">
            <p style={{"color":"gray","fontSize":"13px"}}>Operativ yaddaş (RAM)</p>
            <p>16GB DDR5 4800MHz</p>
          </div>
        </div>
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
            <p>18" WQXGA IPS 240Hz</p>
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
<div className="slk">
<GiMouthWatering />
<p> Stokda mövcuddur</p>
</div>

</div>
<div className="xett"></div>
<div className="birid">
    <p>Səbətə at</p>
    <BiBasket />
   </div>
      </div>

      <div className="gameright">
   <Slider/>
      </div>
  </div>
    </div>
  );
};

export default Gamer;
