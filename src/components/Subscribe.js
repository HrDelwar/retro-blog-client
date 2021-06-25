import React from 'react';

const Subscribe = () => {
    return (
        <div className="container text-center mt-10">
            <div className="bg-white shadow p-20 rounded-2xl">
                <h3 className="text-3xl text-gray-800 mb-5">Subscribe to our newsletter!</h3>
                <p className="text-gray-500 mb-5">We'll send you the best of our blog just once a month. We promise.</p>
                <input type="search" placeholder="Email Address" className="bg-gray-200 p-2 rounded w-80" /> <br/> <br/>
                <a className="btn text-white px-2 py-1" href="/#">Subscribe</a>
            </div>
        </div>
    );
};

export default Subscribe;