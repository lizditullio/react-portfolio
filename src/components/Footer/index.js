import React from 'react';
import email from '../Pages/assets/email.png'
import github from '../Pages/assets/github.png'
import phone from '../Pages/assets/phone.png'
import './index.css';

function Footer () {
    return (
        <footer className='footer'>
            <div className='content mx-auto'>
                <a href="mailto:ehditulio@gmail.com">
                     <img src={email} alt="EmailIcon"className="d-inline"></img>
                </a>
                <a href="https://github.com/lizditullio">
                    <img src={github} alt="GitHub"className="d-inline"></img>
                </a>
                <a href="tel:(732)-610-6636">
                    <img src={phone} alt="PhoneIcon"className="d-inline px-2"></img>
                </a>
            </div>

        </footer>
    );
}

export default Footer;