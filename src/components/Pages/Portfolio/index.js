import React from 'react';
import BR from '../assets/BR.png'
import SP from '../assets/SP.png'
import TB from '../assets/TB.png'
import RG from '../assets/RG.png'
import WD from '../assets/WD.png'
import ET from '../assets/ET.png'

export default function Portfolio() {
  return (
    <div className="bg-warning bg-gradient">
      <h1 className="text-center py-3">Portfolio Page</h1>
      <br></br>
      <div className="text-center container">
        <ul class="row">
          <li className="list-unstyled col">
              <h3>Better Reads</h3>
              <br></br>
              <a href="https://github.com/tmenture/Better-Reads">
                  <img className="col-sm-12" src={BR} alt="Better Reads" 
                    width="800"
                    height="400"></img>
                </a>
          </li>
          <li className="list-unstyled col">
              <h3>Search Party </h3>
              <br></br>
              <a href="https://github.com/tmenture/Front-End-Project">
                  <img className="col-sm-12" src={SP} alt="Search Party"
                     width="800"
                    height="400"></img>
                </a>
          </li>
          <li className="list-unstyled col">
              <h3> Tech Blog </h3>
              <br></br>
              <a href="https://github.com/lizditullio/mvc-tech-blog">
                  <img className="col-sm-12" src={TB} alt="Tech Blog"
                    width="800"
                    height="400"></img>
                </a>
          </li>
          <li className="list-unstyled col">
              <h3> READMe Generator </h3>
              <br></br>
              <a href="https://github.com/lizditullio/README-Generator">
                  <img className="col-sm-12" src={RG} alt="README Generator"
                  width="800"
                  height="400"></img>
                </a>
          </li>
          <li className="list-unstyled col">
              <h3> Weather Dashboard </h3>
              <br></br>
              <a href="https://github.com/lizditullio/Challenge-6">
                  <img className="col-sm-12" src={WD} alt="Weather Dashboard"
                   width="800"
                   height="400"></img>
                </a>
          </li>
          <li className="list-unstyled col">
              <h3> Employee Tracker </h3>
              <br></br>
              <a href="https://github.com/lizditullio/employee-tracker-">
                  <img className="col-sm-12" src={ET} alt="Employee Tracker"
                   width="800"
                   height="400"></img>
                </a>
          </li>
          <br></br>
        </ul>
      </div>
    </div>
  );
}