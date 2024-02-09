import React, { useEffect } from 'react'

const Zemanet = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
  return (
    <div className="lr" >
        <h5>Zəmanət şərtləri</h5>
      <div className="white-footer">
 <ul className="ul">
    <li>Avadanlığa uyğun olaraq, həmin avadanlığın zəmanətində ödənişsiz təmiri bərpa edin.</li>
    <li>Avadanlıq yalnız tam komplektində, orijinal xarici görünüşünə və daxili parametrlərinə uyğun olmalıdır.</li>
    <li>Avadanlıqda fiziki immunitet və təmir izləri aşkar olunduqda, avadanlıq qoruyucu təmirə qəbul edilir.</li>
    <li>Elektrik siçrayışı və bərpası dəyişdirilən hissələrə zəmanət verilmir.</li>
    <li>Home nəticəsində həyata keçirilir.</li>
    <li>Avadanlığın təmiri bir müddət ərzində mümkün olmadıqda, analoji olaraq yenisi ilə əvəzlənir.</li>
    <li>Proqram təminatına zəmanət verilir. (Yalnız bizdən alınmış lisenziyalı proqramlar istisna olmaqla), Grafik renderi zamani gizma nəticəsində yanan parcalara zamanet verilmir.</li>
    <li>Alınan hər hansı bir detalda defekt, alış günündən 14 gün ərzində göstərilməmişsə, avadanlıq dəyişdirilə bilməz.</li>
    <li>Notebook və monitorların ekranındakı ölü pixellərin sayı 7-dən az olduğu halda zəmanətə daxil edilir.</li>
    <li>Heç bir səbəb olmadan alınan hər hansı bir mal geri qaytarılarsa, istifadə etmək üçün 30% tutulur.</li>
 </ul>
      </div>
    </div>
  )
}

export default Zemanet
