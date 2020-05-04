import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='content-title'>HATS</h1>
                    <span className='content-subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='content-title'>JACKETS</h1>
                    <span className='content-subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='content-title'>WOMENS</h1>
                    <span className='content-subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='content-title'>MENS</h1>
                    <span className='content-subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='content-title'>SHOES</h1>
                    <span className='content-subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;