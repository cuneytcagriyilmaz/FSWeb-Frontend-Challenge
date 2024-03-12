import React, { useContext } from 'react';
import './footer.css';
import footerData from '../../data/FooterData';
import { DataContext } from "../../context/DataContext";



function Footer() {
  const { content } = useContext(DataContext);

  return (
    <div className="footer-container">
      <h2 className="footer-title">{content.footerSection.main}
      </h2>
      <div className="contact-info">
        <div className="email-footer">
          <a href="mailto:cuneytcagriyilmaz@gmail.com">{footerData.email}</a>
        </div>
        <div className="links">
          <a href={footerData.personalBlogLink}>Personal Blog</a>
          <a href={footerData.githubLink}>Github</a>
          <a href={footerData.linkedinLink}>Linkedin</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
