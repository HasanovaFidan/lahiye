import Add from "../pages/admin/Add/Add"
import AdminRoot from "../pages/admin/AdminRoot"
import Edit from "../pages/admin/Edit/Edit"
import Hom from "../pages/admin/Homes/Hom"
import Asus from "../pages/site/ASUS/Asus"
import Acer from "../pages/site/Acer/Acer"
import Alien from "../pages/site/Alien/Alien"
import Basket from "../pages/site/Basket/Basket"
import Order from "../pages/site/Basket/Order"
import AcerBrands from "../pages/site/Brand/AcerBrands"
import AsusBrands from "../pages/site/Brand/AsusBrands"
import Brends from "../pages/site/Brand/Brends"
import LenovoBrands from "../pages/site/Brand/LenovoBrands"
import MsiBrands from "../pages/site/Brand/MsiBrends"
import RazerBrands from "../pages/site/Brand/RazerBrands"
import Catdirilma from "../pages/site/Catdirilma/Catdirilma"
import Qaytarilms from "../pages/site/Catdirilma/Qaytarilms"
import Zemanet from "../pages/site/Catdirilma/Zemanet"
import Detail from "../pages/site/Detail/Detail"
import Fav from "../pages/site/Fav/Fav"
import Hp from "../pages/site/HP/Hp"
import Home from "../pages/site/Home/Home"
import Lenovo from "../pages/site/Lenovo/Lenovo"
import Msi from "../pages/site/MSI/Msi"
import Nvdia from "../pages/site/NVDIA/Nvdia"
import Razer from "../pages/site/Razer/Razer"
import SiteRoot from "../pages/site/SiteRoot"
import About from "../pages/site/about/About"
import Akseuar from "../pages/site/aksesuar/Akseuar"
import Klavis from "../pages/site/aksesuar/Klavis"
import Mause from "../pages/site/aksesuar/Mause"
import Mikro from "../pages/site/aksesuar/Mikro"
import Oturacaq from "../pages/site/aksesuar/Oturacaq"
import Oyun from "../pages/site/aksesuar/Oyun"
import Qulaqliq from "../pages/site/aksesuar/Qulaqliq"
import Ses from "../pages/site/aksesuar/Ses"
import Web from "../pages/site/aksesuar/Web"
import Contact from "../pages/site/contact/Contact"
import GameNote from "../pages/site/gamenote/GameNote"
import Komponents from "../pages/site/komponents/Komponents"
import Monitor from "../pages/site/komponents/Monitor"
import Video from "../pages/site/komponents/Video"
import Muq from "../pages/site/muq/Muq"
import News from "../pages/site/newa/News"
import Newone from "../pages/site/newsone/Newone"
import NewsThree from "../pages/site/newsthree/NewsThree"
import Newstwo from "../pages/site/newstwo/Newstwo"


const ROOT = [
   {
      path: "/",
      element: <SiteRoot/>,
      children: [
         {
            path: "",
            element: <GameNote/>,
         },
         {
            path: "home",
            element: <Home />,
         },
         {
            path: "/:id",
            element: <Detail />,
         },
         {
            path: "fav",
            element: <Fav/>,
         },
         {
            path: "basket",
            element: <Basket />,
         },
         {
            path: "komponents",
            element: <Komponents />,
         },
         {
            path: "aksesuar",
            element: <Akseuar />,
         },
         {
            path: "news",
            element: <News />,
         },
         {
            path: "nvdia",
            element: <Nvdia/>,
         },
         {
            path: "about",
            element: <About />,
         },
         {
            path: "muq",
            element: <Muq />,
         },
         {
            path: "newsone",
            element: <Newone />,
         },
         {
            path: "newstwo",
            element: <Newstwo/>,
         },
         {
            path: "newsthree",
            element: <NewsThree/>,
         },
         {
            path: "asus",
            element: <Asus/>,
         },
         {
            path: "msi",
            element: <Msi/>,
         },
         {
            path: "lenovo",
            element: <Lenovo/>,
         },
         {
            path: "hp",
            element: <Hp/>,
         },
         {
            path: "acer",
            element: <Acer/>,
         },
         {
            path: "alien",
            element: <Alien/>,
         },
         {
            path: "razer",
            element: <Razer/>,
         },
         {
            path: "oturacaq",
            element: <Oturacaq/>,
         },
         {
            path: "klavis",
            element: <Klavis/>,
         },
         {
            path: "oyun",
            element: <Oyun/>,
         },
      
         {
            path: "ses",
            element: <Ses/>,
         },
         {
            path: "mause",
            element: <Mause/>,
         },
         {
            path: "web",
            element: <Web/>,
         },
         {
            path: "mikrafon",
            element: <Mikro/>,
         },
         {
            path: "qulaqliq",
            element: <Qulaqliq/>,
         },
         {
            path: "monitor",
            element: <Monitor/>,
         },
         {
            path: "videokart",
            element: <Video/>,
         },
         {
            path: "elaqe",
            element: <Contact/>,
         },
         {
            path: "brend",
            element: <Brends/>,
         },
         {
            path: "asusbrand",
            element: <AsusBrands/>,
         },
         {
            path: "acerbrand",
            element: <AcerBrands/>,
         },
         {
            path: "msibrand",
            element: <MsiBrands/>,
         },
         {
            path: "razerbrand",
            element: <RazerBrands/>,
         },
         {
            path: "lenovobrand",
            element: <LenovoBrands/>,
         },
         {
            path: "catdirilma",
            element: <Catdirilma/>,
         },
         {
            path: "zemanet",
            element: <Zemanet/>,
         },
         {
            path: "qaytarilma",
            element: <Qaytarilms/>,
         },
         {
            path: "order",
            element: <Order/>,
         },
      ]
   },
   {
    path:"",
element:<AdminRoot/>,
children:[
    {
        path:"/admin",
        element:<Hom/>,
},
{
    path:"add",
    element:<Add/>,
},
{
   path: "edit/:id",
    element:<Edit/>,
},


]

   }

]
export default ROOT