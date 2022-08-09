import React from 'react';

function NavBarTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
    <h3 className="px-5 py-2">
        Liz DiTullio
    </h3>
      <li className="nav-item ">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link text-secondary'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link text-secondary'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link text-secondary'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link text-secondary'}
        >
          Resume
        </a>
      </li>


    </ul>
  );
}

export default NavBarTabs;