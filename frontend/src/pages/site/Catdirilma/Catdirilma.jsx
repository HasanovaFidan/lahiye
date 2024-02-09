import React, { useEffect } from 'react'
import "./Full.scss"
const Catdirilma = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
  return (
    <div className="lr" >
        <h5>Çatdırılma və ödəniş</h5>
      <div className="white-footer">
   <div className="white-write">
   <h6>Bakı və Sumqayıt şəhərlərinə:</h6>
        <h5>KURYER VASİTƏSİ İLƏ</h5>
    <h4>Pulsuz çatdırılma sifariş qəbul olunduqdan sonra, səhər saat 10:00-dan axşam 20:00-dək yerinə yetirilir. Sifarişin dəyəri 100 azn yuxarıdan pulsuz çatdırılma edilir.</h4>
    <ul>
        <li>Ödənişli çatdırılma sifariş qəbul olunaraq yeni gün səhər saat 10:00-dan axşam 20:00-dək yerinə yetirilir.</li>
        <li>Sifarişin qiyməti 30 AZN-ə qədər olarsa, xidmətin qiyməti 15 AZN olacaq.</li>
        <li>Sifarişin dəyəri 30 M-dan 100 M -dək olarsa, xidmətin təxminən 10 M qurulması olacaq.</li>
    </ul>
    <h5>MƏHSULU ÖZÜNÜZ GÖTÜRDÜKDƏ</h5>
    <p>Məhsulun çatdırılmasına sərf etmək olar, şəxsən zaman sizə münasib olan mağazamızdan əldə edə bilərsiniz. Bu zaman online mağazanın meneceri ilə mağazaya gəlişinizin vaxtını  dəqiqləşdirməniz xahiş olunur.</p>
   </div>
      </div>
    </div>
  )
}

export default Catdirilma
