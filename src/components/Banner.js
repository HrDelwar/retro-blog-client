import React from 'react';


const Banner = ({bannerTitle}) => {

    return (
        <div  className="pt-32 text-4xl text-center uppercase text-white">
            {bannerTitle}
        </div>
    );
};

export default Banner;