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
        <h2 class="contact-info text-center"> Where to Reach Me </h2>
        </section>
    </div>

  );
  
}