import React from 'react'
import "./about.scss"
import { TfiCup } from "react-icons/tfi";
import { GrMap } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";
import { IoShieldCheckmark } from "react-icons/io5";
import { TbPointFilled } from 'react-icons/tb';
const About = () => {
  return (

          <div className='lr'>
                         <div className="noqte">
 <span>GameNote</span>
 <TbPointFilled className='field' />

 <p>Şirkət haqqında</p>
 </div>
      <div className="about">
<div className="con">
<div className="abone">
<img src="https://cdn1.sgliteasset.com/onedirec/images/brand/brand-7738/kNbA2IeB6538c0f928ff1_1698218233.png" alt="" />
<p>Notebooklar haqqında fikirlərin dəyişəcək</p>
</div>
<div className="abtwo">
        <p>Şirkət haqqında</p>
        <p>2018-ci ildə yaradılan Gamenote Azerbaycanin aparıcı İT şirkətlərindən biridir. Beynəlxalq qabaqcıl şirkətlərlə yaxından əməkdaşlıq edərək, Gamenote geniş çeşiddə məhsul təklif edir. Uzun illərə dayanan peşəkar biznes yanaşmamız şirkətimizin yüksək səviyyədə müştəri məmnuniyyəti qazanmasına səbəb olmuş və nəticə etibarilə onu bu gün ön sıralarda gedən İT şirkətlərdən birinə çevirmişdir. Gamenote Acer, Asus, MSI, Dell, Lenovo, HP, Logitech kimi qabaqcıl istehsalçıların rəsmi tərəfdaşıdır.</p>
      </div>
      <div className="xettopen"></div>
      <div className="abthree">
    <div className="cup">
    <TfiCup className='cu' />
      <span>Texnologiya sahəsində 7 il</span>
      <p>2016-ci ildən bəri oyun cihazları bazarında  qüsursuz xidmət</p>
    </div>
    <div className="cup">
    <GrMap  className='cu' />
      <span>Sürətli çatdırılma</span>
      <p>⁠Bakı və Bakı ətrafı sürətli və təhlükəsiz çatdırılma</p>
    </div>
    <div className="cup">
    <GiReceiveMoney   className='cu' />
      <span>Rahat ödəniş</span>
      <p>Təhvil alma məntəqəsində nağd pul və ya kart ilə satın alma</p>
    </div>
    <div className="cup">
    <IoShieldCheckmark  className='cu' />
      <span>Etibarlı zəmanət</span>
      <p>2 ilə qədər zəmanət, istifadə müddəti ərzində onlayn məsləhət</p>
    </div>

  
      </div>
</div>
      </div>

      
    </div>

  )
}

export default About
