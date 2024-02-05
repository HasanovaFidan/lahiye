import Add from "../pages/admin/Add/Add"
import AdminRoot from "../pages/admin/AdminRoot"
import Edit from "../pages/admin/Edit/Edit"
import Hom from "../pages/admin/Homes/Hom"
import Basket from "../pages/site/Basket/Basket"
import Detail from "../pages/site/Detail/Detail"
import Fav from "../pages/site/Fav/Fav"
import Home from "../pages/site/Home/Home"
import Nvdia from "../pages/site/NVDIA/Nvdia"
import SiteRoot from "../pages/site/SiteRoot"
import About from "../pages/site/about/About"
import Akseuar from "../pages/site/aksesuar/Akseuar"
import Komponents from "../pages/site/komponents/Komponents"
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
    path:"edit",
    element:<Edit/>,
},

]

   }

]
export default ROOT