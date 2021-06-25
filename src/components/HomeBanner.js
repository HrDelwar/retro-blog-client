import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeBanner = () => {
    const settings = {
        autoplaySpeed: 2000,
        autoplay: true,
        fade: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="container mt-10">
            <Slider {...settings}>
                <div>
                    <img className="w-100 rounded" src="https://flexiblog-beauty.netlify.app/static/e0c844791e42397951524105e4643eda/14912/image.webp" />
                </div>
                <div>
                    <img className="w-100 rounded" src="https://flexiblog-beauty.netlify.app/static/e0c844791e42397951524105e4643eda/14912/image.webp" />
                </div>
                <div>
                    <img className="w-100 rounded" src="https://flexiblog-beauty.netlify.app/static/ea4444a37846586d8adfa1d9fa6d75ec/14912/image.webp" />
                </div>
                
            </Slider>
        </div>
    );
};

export default HomeBanner;