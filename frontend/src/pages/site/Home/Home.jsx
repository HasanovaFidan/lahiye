import React, { useEffect } from 'react'
import Cads from '../../../components/site/Cards/Cads'

const Home = () => {
  useEffect(() => {
  
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
         <Cads/>
    </div>
  )
}

export default Home
