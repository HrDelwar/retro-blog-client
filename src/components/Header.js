import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';

const Header = ({bannerTitle}) => {
    return (
        <header className="bg-brand h-64 ">
           <Navbar /> 
           <Banner bannerTitle={bannerTitle} />
        </header>
    );
};

export default Header;