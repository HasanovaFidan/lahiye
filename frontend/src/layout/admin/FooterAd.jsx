import React from 'react'
import { FaFacebookSquare, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiThunderball } from "react-icons/gi";
import "./footer.css"

function FooterAd() {
  return (
    <div>
      <footer>
        <div className="footer__div">
          <div className="icon__div">
            <div className='divs'> <FaGithub /></div>
            <div className='divs'> <FaLinkedin /></div>
            <div className='divs'> <FaInstagram /> </div>
            <div className='divs'> <FaFacebookSquare /></div>
            <div className='divs'><FaTwitter /></div>
            <div className='divs'> <GiThunderball /></div>
          </div>
          <div className="h__div">
            <p>Designed&Built by</p>
            <p>Fidan Hasanova</p>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default FooterAd