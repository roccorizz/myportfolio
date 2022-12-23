import React from 'react';

const RestMedia = () => {
    return (
        <div  >

            <h1 className="text-5xl font-bold text-center my-5 text-blue-300">RestMedia</h1>
            <div className="hero bg-slate-800 " >
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/bQ1p181/screencapture-sage-kataifi-6082cb-netlify-app-2022-12-11-20-57-15.png" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <p className="py-2 text-xl text-white">1. One stop room booking solution.</p>
                    </div>
                </div>

            </div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/98j7pt2/screencapture-localhost-3001-search-result-2022-12-11-23-43-12.png" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <p className="py-2 text-xl text-white">2. Filtered with different places and prices</p>
                </div>
            </div>
            <div className="hero  bg-slate-800">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/0Zx2YQv/screencapture-localhost-3001-dashboard-manage-homes-2022-12-11-23-47-44.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <p className="py-2 text-xl text-white">3. Three types of roles set: Admin,host and user </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestMedia;