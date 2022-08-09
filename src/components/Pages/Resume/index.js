import React from 'react';
import resume from '../assets/liz-ditullio-resume.pdf'

export default function Resume() {
  return (
    <div className="bg-warning bg-gradient">
      <h1 className="py-3 text-center">My Resume</h1>
      <h2 className="text-center">
        Check out my resume by clicking the link below:
      </h2>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-center py-1">
        <a href={resume} download>Click to download</a>
      </h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
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
    </div>
  );
}