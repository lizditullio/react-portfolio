import React from 'react';
import setCurrentPage from '../PortfolioContainer'
import contact from './images/contact.png'
import email from './images/email.png'
import linkedin from './images/linkedin.png'
import phone from './images/phone.png'
import pfp from './images/pfp.png'

export default function About() {
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="bg-warning bg-gradient">
        <h1 className="text-center container py-3">About me!</h1>
        <div className="row">
            <img src={pfp} alt="profile picture" className="px-5 float-left col-sm-3 "></img>
            <div className="col-sm-6">
                <p className="float-right">
                    Bio
                </p>
                <br></br>
                <p className="float-right">
                    Bio
                </p>
                <br></br>
                <p className="float-right">
                    Bio
                </p>
            </div>
        </div>
        <br>
        </br>
        <section id="contact-me" class="contact-me">
        <div class="text-center">
            <img src={contact} alt="Contact Stock Photo"
            width="100px"
            height="100px"></img>
        </div>
        <h2 class="contact-info text-center"> Contact and Connect with Me! </h2>
        </section>
        <br></br>
        <div className="text-center">
            <ul className="text-center d-inline">
                <li className="text-center d-inline">
                    <img src={email} alt="EmailIcon"
                    width="110"
                    height="110"
                    className="d-inline"></img>
                </li>
                <li className="text-center d-inline">
                    <img src={linkedin} alt="LinkedInIcon"
                    width="100"
                    height="100"
                    className="d-inline"></img>
                </li>
                <li className="text-center d-inline">
                    <img src={phone} alt="PhoneIcon"
                    width="100"
                    height="100"
                    className="d-inline px-2"></img>
                </li>
            </ul>
        </div>
        <ul className="text-center d-inline">
           <li>
               Email: <a href="mailto:ehditullio@gmail.com">ehditullio@gmail.com</a>
           </li>
           <li>
                GitHub: <a href= "https://github.com/lizditullio" >My Git Hub</a>
            </li>
           <li>
                Phone: <a href="tel:(856 203-4507">(856)-203-4507</a>
           </li>
        </ul>
    </div>

  );
  
}