import React from 'react'
import { GiReceiveMoney } from 'react-icons/gi'
import { GrMap } from 'react-icons/gr'
import { IoShieldCheckmark } from 'react-icons/io5'
import { TfiCup } from 'react-icons/tfi'
import "./tecno.scss"

const Tecno = () => {
  return (
    <div className='lr'>
        <div className="xetto"></div>
         <div className="abthe">
    <div className="cupa">
    <TfiCup className='cu' />

      <span>Texnologiya sahəsində 7 il</span>
      <p>2016-ci ildən bəri oyun cihazları bazarında  qüsursuz xidmət</p>
    </div>
    <div className="cupa">
    <GrMap  className='cu' />
      <span>Sürətli çatdırılma</span>
      <p>⁠Bakı və Bakı ətrafı sürətli və təhlükəsiz çatdırılma</p>
    </div>
    <div className="cupa">
    <GiReceiveMoney   className='cu' />
      <span>Rahat ödəniş</span>
      <p>Təhvil alma məntəqəsində nağd pul və ya kart ilə satın alma</p>
    </div>
    <div className="cupa">
    <IoShieldCheckmark  className='cu' />
      <span>Etibarlı zəmanət</span>
      <p>2 ilə qədər zəmanət, istifadə müddəti ərzində onlayn məsləhət</p>
    </div>

  
      </div> 
     
    </div>
  )
}

export default Tecno
