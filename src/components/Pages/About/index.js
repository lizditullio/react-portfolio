import React from 'react';
import setCurrentPage from '../../PortfolioContainer';
import pic from '../assets/ProfilePicture.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="bg-secondar bg-gradient">
            <h1 className="text-center container py-3">About Me</h1>
        <div className="row">
            <img src={pic} alt="profile picture"
             className="px-5 float-left col-sm-3 "></img>
            <div className="col-sm-6">
                <p className="float-right">
                   My name is Liz DiTullio. In May 2018, I graduded from Cabrini University with my Bachelors in Mathematics. I have spent the last 4 years working as High School Math Teacher, but I am looking to change careers. 
                </p>
                <br></br>
                <p className="float-right">
                    In my free time, I enjoy traveling, lifting weights, reading, and spending time with my dog.
                </p>
                <br></br>
                <p className="float-right">
                    I enjoy problem solving and learning new things.
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