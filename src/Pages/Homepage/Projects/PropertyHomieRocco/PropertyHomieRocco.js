import React from 'react';


const PropertyHomieRocco = () => {
    return (
        <div  >

            <h1 className="text-5xl font-bold text-center my-5 text-blue-300">Property Homie Rocco</h1>
            <div className="hero bg-slate-800 " >
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/8Xg72CK/screencapture-property-homie-rocco-web-app-2022-12-23-23-06-40.png" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <p className="py-2 text-xl text-white">1. A personal service website for a real estate agent</p>
                    </div>
                </div>

            </div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/BgP9GZQ/screencapture-property-homie-rocco-web-app-singleservice-636bdd0a73e5dd1fb1f6319d-2022-12-23-23-23-1.png" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <p className="py-2 text-xl text-white">2. Users can have a view on available property listings and for query of those,they can contact with him in the contact form.</p>
                </div>
            </div>
            <div className="hero  bg-slate-800">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/1JJfFnS/screencapture-property-homie-rocco-web-app-allservices-2022-12-23-23-22-07.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <p className="py-2 text-xl text-white">3. A user can give a review of any particular service through logging in from his email.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyHomieRocco;