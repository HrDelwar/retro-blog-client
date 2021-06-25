import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = ({ setBannerTitle }) => {
  document.title = "About || Retro Blog";
  setBannerTitle("about");
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container mx-auto px-4">
      <div className="grid xl:grid-cols-2 mt-16 gap-8">
        <div className="px-2 md:px-8 xl:px-12">
          <h2 className="text-2xl pb-5 capitalize text-gray-700">Who we are</h2>
          <p className="text-justify text-gray-600">
            We delight our Clients through appealing design. Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
            massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
            vulputate eget, arcu. Phasellus viverra nulla ut metus varius
            laoreet. Quisque rutrum. In enim justo, rhoncus ut, imperdiet a,
            venenatis vitae, justo.
          </p>
        </div>
        <div className=" w-96 mx-auto xl:w-full">
          <Slider {...settings} >
            <div>
              <img className="w-full" src="https://www.livemeshthemes.com/extinct/wp-content/uploads/sites/8/2013/08/about-slide2.jpg" alt="" />
            </div>
            <div>
            <img className="w-full" src="https://www.livemeshthemes.com/extinct/wp-content/uploads/sites/8/2013/08/about-slide3.jpg" alt="" />
            </div>
            <div>
            <img className="w-full" src="https://www.livemeshthemes.com/extinct/wp-content/uploads/sites/8/2013/08/about-slide1.jpg" alt="" />
            </div>
            <div>
            <img className="w-full" src="https://www.livemeshthemes.com/extinct/wp-content/uploads/sites/8/2013/08/about-slide3.jpg" alt="" />
            </div>
            <div>
            <img className="w-full" src="https://www.livemeshthemes.com/extinct/wp-content/uploads/sites/8/2013/08/about-slide2.jpg" alt="" />
            </div>
          </Slider>
        </div>
      </div>

      <div className="flex justify-between bg-indigo-500 hover:bg-indigo-600 h-36 mt-36 items-center rounded px-2 md:px-10">
        <h2 className="text-3xl text-white uppercase">For any query </h2>
        <Link
          to="/contact"
          className="px-4 py-2 uppercase text-white bg-gray-800 hover:bg-gray-900"
        >
          contact us
        </Link>
      </div>
    </div>
  );
};

export default About;
