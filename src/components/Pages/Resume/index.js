import React from 'react';
import resume from '../assets/liz-ditullio-resume.pdf'

export default function Resume() {
  return (
    <div className="bg-warning bg-gradient">
      <h1 className="py-3 text-center">My Resume</h1>
      <h2 className="text-center">
        Check out my resume by clicking the link below:
      </h2>
      <h1 className="text-center py-1">
        <a href={resume} download>Click to download</a>
      </h1>
    
    </div>
  );
}