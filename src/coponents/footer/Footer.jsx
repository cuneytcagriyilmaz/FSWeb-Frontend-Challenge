import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <h2 className="footer-title">Let’s work together on your next product.</h2>
      <div className="contact-info">
        <div className="email-footer">
          <span>👉cuneytcagriyilmaz@gmail.com</span>
        </div>
        <div className="links">
          <a href="#">Personal Blog</a>
          <a href="#">Github</a>
          <a href="#">Linkedin</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
