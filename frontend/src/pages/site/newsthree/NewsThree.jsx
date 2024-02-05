import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { LuCalendarHeart } from 'react-icons/lu';
import { TbPointFilled } from 'react-icons/tb';
import YouTube from 'react-youtube';

const NewsThree = () => {
  return (
    <div className="lr">
      <div className="noqte">
        <span>GameNote</span>
        <TbPointFilled className='field' />
        <p>Xəbərlər</p>
        <TbPointFilled className='field' />
        Lenovo 16" Legion Pro 7 16IRX8H Gaming Laptop (Onyx Gray)
      </div>

      <div className="whiteone">
        <div className="wo">
          <img src="https://gamenotebaku.az/_next/image?url=https%3A%2F%2Fcdn.gamenotebaku.az%2Fgrid%2F128%2F29%2Fgamenote_img_40_1705874880.jpg&w=3840&q=75" alt="" />
          <span>NVIDIA daha kəskin və aydın təsvirlər üçün G-SYNC Pulsar texnologiyasını təqdim edib!</span>
          <p>Ötən günlərdən Nvidia brendinin yeni RTX 40 Super seriyalı qrafik kartlarını təqdim etdiyi barədə məlumat vermişdi. O cümlədən Nvidia şirkəti CES 2024 sərgisi çərçivəsində daha kəskin və aydın təsvirlər üçün G-SYNC Pulsar texnologiyasını təqdim edib. Nvidia qrafik kartlarında və uyğun monitorlarda yer alan G-SYNC texnologiyası uzun müddətdir ki, istifadə olunur. Lakin texnologiya nəhəngi daha kəskin və daha aydın təsvirlərlə oyun təcrübəsi yaşamaq istəyənlər üçün indi yeni G-SYNC Pulsar adlı texnologiyanı elan edib.</p>
        </div>

        <div className="wfi">
          <img src="https://gamenotebaku.az/_next/image?url=https%3A%2F%2Fcdn.gamenotebaku.az%2Fgrid%2F128%2F29%2Fgamenote_img_40_1705874880.jpg&w=3840&q=75" alt="" />
          <p>Aşağıdakı videoda gördüyünüz kimi, Nvidia şirkətinin G-SYNC Pulsar texnologiyası oyunlarda sürətli hərəkətlər zamanı yaranan bulanıqlığı əhəmiyyətli dərəcədə azaldır və beləliklə, daha hamar və aydın oyun təcrübəsi təmin edir. O cümlədən texnologiya nəhənginin açıqlamasına görə, Pulsar iki fərqli mühüm texnologiyanı birləşdirir, bunlar Adaptive Overdrive və Pulse Modulation texnologiyalarıdır. Nvidia-ya görə, Adaptive Overdrive piksellərin bir rəngdən digərinə keçid sürətini dinamik şəkildə tənzimləyir. Bu texnologiya monitorun parlaqlığını və yenilənmə tezliyini elektrik cərəyanını birbaşa idarə edən Pulse Modulyasiyası ilə birləşdirilir.</p>
        </div>

        <div className="wfi">
       
          <YouTube  className='youtube' videoId="EhxY1zxdjrM" />
          <p>Yeni elan edilən texnologiya kağız üzərində möhtəşəm və inanılmaz görünsə də, ilk mərhələdə bu texnologiyanı sadəcə ASUS ROG Swift PG27 Series G-SYNC monitorlarında sınamaq mümkündür. CES 2024-də yeni “SUPER” seriyalı qrafik kartlarını elan edən Nvidia, GeForce Now üçün də iki fərqli yenilik elan etdi. Görünən odur ki, Nvidia sadəcə qrafik kartları ilə deyil, həm də təklif etdiyi texnologiyalar ilə istifadəçilərinə innovativ oyun təcrübəsi təmin edir</p>
        </div>

        <div className="araund">
          <div className="div">
            <span><FaWhatsapp /></span>
            <span><FaInstagram /></span>
            <span><FaFacebookF /></span>
            <p>Paylaş</p>
          </div>
          <div className="dat">
            <p><LuCalendarHeart />2023-12-16 11:14:20</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsThree;
