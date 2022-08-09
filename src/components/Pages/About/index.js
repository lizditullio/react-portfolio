import React from 'react';
import setCurrentPage from '../../PortfolioContainer'

export default function About() {
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="bg-warning bg-gradient">
        <h1 className="text-center container py-3">About me!</h1>
        <div className="row">
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
        </div>
        <h2 class="contact-info text-center"> Contact and Connect with Me! </h2>
        </section>
        <br></br>
        <div className="text-center">
            <ul className="text-center d-inline">
    
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