import './Header.css';
import { useState } from 'react';

const Header = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    }

    return (
        <div className='mobile-menu-wrapper'>
            <div className={`mobile-menu only-mobile ${showMobileMenu ? 'overlay' : ''}`}>
                <div className='mobile-navbar'>
                    <div className='mobile-nav-item'>credit score check</div>
                    <div className='mobile-nav-item'>CRED X IPL</div>
                </div>
            </div>
            <div className="flex max-width header">
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" alt="Cred Logo" className='header-logo' />
                <div className="only-mobile mobile-menu-button-wrapper">
                    <button className={`hamburger hamburger--spin ${showMobileMenu ? 'is-active' : ''}`} type="button" onClick={toggleMobileMenu}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            <div className='non-mobile flex'>
                <div className='header-nav-item'>credit score check</div>
                <div className='header-nav-item'>CRED X IPL</div>
            </div>
            </div>
        </div>
    )
}

export default Header;