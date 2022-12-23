import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
            <div className="hero  bg-slate-800 my-5">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/MVnxZcD/screencapture-wheelanes-2a34c-web-app-2022-12-11-20-38-26.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-blue-300">Wheelanes</h1>
                        <p className="py-2 text-xl text-white">1. This website is based on car resale.</p>
                        <p className="py-2 text-xl text-white">2. There are different cars filtered by different categories.</p>
                        <p className="py-2 text-xl text-white">3. Any car can be booked based on buyers request through booking.</p>
                        <Link to='/wheelanes'><button className="btn bg-orange-400 ml-20">Details</button></Link>

                    </div>
                </div>
            </div>

            <div className="hero  bg-slate-800 my-5">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/bQ1p181/screencapture-sage-kataifi-6082cb-netlify-app-2022-12-11-20-57-15.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-blue-300">RestMedia</h1>
                        <p className="py-2 text-xl text-white">1. One stop room booking solution.</p>
                        <p className="py-2 text-xl text-white">2. Filtered with different places and prices</p>
                        <p className="py-2 text-xl text-white">3. Three types of roles set: Admin,host and user </p>
                        <Link to='/restmedia'><button className="btn bg-orange-400 ml-20">Details</button></Link>
                    </div>
                </div>
            </div>
            <div className="hero  bg-slate-800">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/sP53b2K/screencapture-boisterous-tarsier-583d27-netlify-app-2022-12-11-22-01-40.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-blue-300">P-Learning</h1>
                        <p className="py-2 text-xl text-white">1. It is an e-learning website for students of any field</p>
                        <p className="py-2 text-xl text-white">2. A student can search for a course and get to know about its details.</p>
                        <p className="py-2 text-xl text-white">3. Anyone can enroll in any course</p>
                        <Link to='/plearning'><button className="btn bg-orange-400 ml-20">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Projects;