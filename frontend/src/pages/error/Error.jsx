import React from 'react';
import './error.scss'; // Stil dosyasını ekleyin (CSS dosyasını oluşturmalısınız)
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div className="bg-purple">
            <div className="stars">
                <div className="custom-navbar">
               
                    <div className="navbar-links">
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><a href="http://salehriaz.com/404Page/404.html" target="_blank" rel="noopener noreferrer">About</a></li>
                            <li><a href="http://salehriaz.com/404Page/404.html" target="_blank" rel="noopener noreferrer">Features</a></li>
                            <li><a href="http://salehriaz.com/404Page/404.html" className="btn-request" target="_blank" rel="noopener noreferrer">Request A Demo</a></li>
                        </ul>
                    </div>
                </div>
                <div className="central-body">
                    <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" alt="404"/>
                    <Link to={"/"} href="http://salehriaz.com/404Page/404.html" className="btn-go-home" target="_blank" rel="noopener noreferrer">GO BACK HOME</Link>
                </div> 
                <div className="objects">
                    <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" alt="rocket"/>
                    <div className="earth-moon">
                        <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" alt="earth"/>
                        <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" alt="moon"/>
                    </div>
                    <div className="box_astronaut">
                        <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" alt="astronaut"/>
                    </div>
                </div>
                <div className="glowing_stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;
