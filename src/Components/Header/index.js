import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    
        <header>
        <div className="header">
        <div className="navimagewithname">
            <img className='footer-logo'src="https://image.similarpng.com/very-thumbnail/2022/01/Medical-health-logo-design-on-transparent-background-PNG.png"/>
        <Link to="/" className="heading">Salubify</Link>
       </div>
        <nav className="navigation">
            <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/diet">Diet</a>
            </li>
            <li>
                <a href="/yoga">Yoga Asanas</a>
            </li>
            <li>
                <a href="/bmi">BMI</a>
            </li>
            </ul>
        </nav>
        </div>
        </header>
    
  );
};

export default Header;
