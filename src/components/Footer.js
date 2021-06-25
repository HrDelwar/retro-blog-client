import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="bg-brand text-white shadow-2xl mt-36 p-16">
        <div className="container px-4 mx-auto">
            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="">
                    <h1 className="text-3xl font-bold text-purple-500  mb-5">Retro-Blog</h1>
                    <p className="text-gray-400">© 2021, All Rights Reserved.</p>
                    <h6 className="text-gray-400">Design & Develop By</h6>
                    <a className="footer-des  medium" href="https://hrdelwar.netlify.app/" target="_blank" rel="noreferrer">Hr Delwar</a>
                </div>

                <div className="">
                    <h3 className="footer-title">Quick Links</h3>
                    <a href="/#" className="footer-des ">Advertise with us</a>
                    <a href="/#" className="footer-des ">About us</a>
                    <a href="/#" className="footer-des ">Contact us</a>
                </div>

                <div className="">
                    <h3 className="footer-title">Legal Stuff</h3>
                    <a href="/#" className="footer-des ">Privacy Notice</a>
                    <a href="/#" className="footer-des ">Cookie Policy</a>
                    <a href="/#" className="footer-des ">Terms Of Use</a>
                </div>

                <div className="">
                    <h3 className="footer-title">Social Media</h3>
                    <a href="/#" className="footer-des "><FontAwesomeIcon className="aboutIcon" icon={faGithub} /> Github</a>
                    <a href="/#" className="footer-des "><FontAwesomeIcon className="aboutIcon" icon={faTwitter} /> Twitter</a>
                    <a href="/#" className="footer-des "><FontAwesomeIcon className="aboutIcon" icon={faInstagram} /> instagram</a>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Footer;