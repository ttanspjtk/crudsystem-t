import React from 'react';
import './styles.css';

const Footer = () => {
    
    return (
        <div className="footer p-4">
            © 2021, ttanspjtk.
            <a href="https://line.me/ti/p/_Xxn0j13m2" target="_blank" class="footer__icon">
                <i style={{color: '#fff', float: 'right', marginRight: '1rem', fontSize: '20px', display: 'flex', alignItems: 'center'}} class="uil uil-line"></i>
            </a>
            <a href="mailto:wariyaspjtk@gmail.com" class="footer__icon">
                <i style={{color: '#fff', float: 'right', marginRight: '15px', fontSize: '20px', display: 'flex', alignItems: 'center'}} class="uil uil-envelope"></i>
            </a>
            <a href="https://github.com/ttanspjtk" target="_blank" class="footer__icon">
                <i style={{color: '#fff', float: 'right', marginRight: '15px', fontSize: '20px', display: 'flex', alignItems: 'center'}} class="uil uil-github-alt"></i>
            </a>
        </div>
        
    );  
};

export default Footer;