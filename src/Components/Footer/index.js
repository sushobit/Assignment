import './index.css'


import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src="https://image.similarpng.com/very-thumbnail/2022/01/Medical-health-logo-design-on-transparent-background-PNG.png" alt="Logo" />
        </div>
        
        <div className="footer-socials">
          <ul>
            <li><a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://twitter.com/i/flow/login"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Salubify, Inc. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
