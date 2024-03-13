import React, { useContext, useState, useEffect } from 'react';
import './footer.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataContext } from "../../context/DataContext";
import axios from 'axios';

function Footer() {
  const { content, theme } = useContext(DataContext);
  const [footerFetchData, setfooterFetchData] = useState(null);

  useEffect(() => {
    axios.get('https://65f0bacdda8c6584131c58e0.mockapi.io/footer')
      .then(response => {
        setfooterFetchData(response.data);
        toast.success('Footer data loaded successfully');
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        toast.error('Failed to fetch footer data');
      });
  }, []);

  if (!footerFetchData) {
    return null;
  }

  const footerValue = footerFetchData[0];

  return (
    <div className={`footer-container ${theme === 'dark' ? 'footer-container-dark' : ''}`}>
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Flip
      />
      <h2 className={`footer-title ${theme === 'dark' ? 'footer-title-dark' : ''}`}>{content.footerSection.main}</h2>
      <div className="contact-info">
        <div className={`email-footer ${theme === 'dark' ? 'email-footer-dark' : ''}`}>
          <a href="mailto:cuneytcagriyilmaz@gmail.com">{footerValue.email}</a>
        </div>
        <div className={`links ${theme === 'dark' ? 'links-dark' : ''}`}>
        {/* <div className="links"> */}
          <a href={footerValue.personalBlogLink}>Personal Blog</a>
          <a href={footerValue.githubLink}>Github</a>
          <a href={footerValue.linkedinLink}>Linkedin</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
