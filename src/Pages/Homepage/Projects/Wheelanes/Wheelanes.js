import React from 'react';

const Wheelanes = () => {
    return (
        <div  >

            <h1 className="text-5xl font-bold text-center my-5 text-blue-300">Wheelanes</h1>
            <div className="hero bg-slate-800 " >
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/MVnxZcD/screencapture-wheelanes-2a34c-web-app-2022-12-11-20-38-26.png" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <p className="py-2 text-xl text-white">1. This website is based on car resale.</p>
                    </div>
                </div>

            </div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/M6gr0CG/screencapture-wheelanes-2a34c-web-app-allcars-3-2022-12-11-23-51-39.png" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <p className="py-2 text-xl text-white">2. Filtered with different places and prices</p>
                </div>
            </div>
            <div className="hero  bg-slate-800">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/pLRj0Vd/screencapture-wheelanes-2a34c-web-app-featured-cars-6389ea8b5f0b17000d0c7839-2022-12-11-23-53-54.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <p className="py-2 text-xl text-white">3. Any car can be booked based on buyers request through booking.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wheelanes;