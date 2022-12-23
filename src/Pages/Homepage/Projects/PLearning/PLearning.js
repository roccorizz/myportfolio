import React from 'react';

const PLearning = () => {
    return (
        <div  >

            <h1 className="text-5xl font-bold text-center my-5 text-blue-300">P-Learning</h1>
            <div className="hero bg-slate-800 " >
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/sP53b2K/screencapture-boisterous-tarsier-583d27-netlify-app-2022-12-11-22-01-40.png" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <p className="py-2 text-xl text-white">1. It is an e-learning website for students of any field</p>
                    </div>
                </div>

            </div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/Fzjynm2/screencapture-boisterous-tarsier-583d27-netlify-app-course-47f3c7ca-fd0a-4063-8f98-8ee0fcdeadce-2022.png" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <p className="py-2 text-xl text-white">2. A student can search for a course and get to know about its details.</p>
                </div>
            </div>
            <div className="hero  bg-slate-800">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/vv3024T/screencapture-boisterous-tarsier-583d27-netlify-app-register-2022-12-11-23-31-27.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <p className="py-2 text-xl text-white">3. Anyone can enroll in any course</p>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default PLearning;