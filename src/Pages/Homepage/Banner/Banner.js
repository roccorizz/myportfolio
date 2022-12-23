import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="hero w-full h-[500px] bg-[url('https://i.ibb.co/GcZMVKT/mohammad-rahmani-1b-NQVGzuy0-U-unsplash.jpg')] backdrop-filter backdrop-blur-sm border border-orange-600 rounded-lg">
            <div className='mb-0 mr-72 w-1/2'>

                <h1 className="text-xl font-bold text-white">👋 HI THERE ? I’M <span className='text-blue-300'>SHA NEOYAJ ALAM</span></h1>
            </div>
            <div className='grid grid-cols-2 gap-20 '>

                <div>


                    <div className="ml-0 mt-80">


                        <div className='my-5'>
                            <h1 className='text-orange-500' aria-label="I'm a web developer">
                                I'm a&nbsp;<span className="typewriter"></span>
                            </h1>
                        </div>


                    </div>
                </div>
                <div className='justify-between'>
                    <img src="https://i.ibb.co/N9Hy8vt/avatar2.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Banner;