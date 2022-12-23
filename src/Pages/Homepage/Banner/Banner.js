import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import './Banner.css'
import { Typewriter } from 'react-simple-typewriter'
import Lottie from 'react-lottie';
import animationService from './banneranime.json';


const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')


const Banner = () => {
    const [open, toggle] = useState(false)
    const [{ freq, factor, scale, opacity }] = useSpring(
        () => ({
            reverse: open,
            from: { factor: 10, opacity: 0, scale: 0.9, freq: '0.0175, 0.0' },
            to: { factor: 150, opacity: 1, scale: 1, freq: '0.0, 0.0' },
            config: { duration: 3000 },
        }),
        [open]
    )
    const handleType = (number) => {
        // access word count number
        console.log(number)
    }

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationService,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className="w-full h-[500px]  backdrop-blur-lg  rounded-lg ">
            <div className="flex flex-col  lg:flex-row mt-5 ">

                <div className=' lg:ml-10 ml-5 my-5 w-2/3 mt-20 grid grid-rows-1 justify-start'>
                    <div className='grid grid-cols-1 gap-5 py-5'>
                        <div className='container' onClick={() => toggle(!open)}>
                            <animated.svg className='svg' style={{ scale, opacity }} viewBox="0 0 1278 446">
                                <defs>
                                    <filter id="water">
                                        <AnimFeTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="2" result="TURB" seed="8" />
                                        <AnimFeDisplacementMap
                                            xChannelSelector="R"
                                            yChannelSelector="G"
                                            in="SourceGraphic"
                                            in2="TURB"
                                            result="DISP"
                                            scale={factor}
                                        />
                                    </filter>
                                </defs>
                                <g filter="url(#water)">
                                    <path
                                        d="M179.53551,113.735463 C239.115435,113.735463 292.796357,157.388081 292.796357,245.873118 L292.796357,415.764388 L198.412318,415.764388 L198.412318,255.311521 C198.412318,208.119502 171.866807,198.681098 151.220299,198.681098 C131.753591,198.681098 94.5898754,211.658904 94.5898754,264.749925 L94.5898754,415.764388 L0.205836552,415.764388 L0.205836552,0.474616471 L94.5898754,0.474616471 L94.5898754,151.489079 C114.646484,127.893069 145.321296,113.735463 179.53551,113.735463 Z M627.269795,269.469127 C627.269795,275.95803 626.679895,285.396434 626.089994,293.065137 L424.344111,293.065137 C432.012815,320.790448 457.378525,340.257156 496.901841,340.257156 C520.497851,340.257156 554.712065,333.768254 582.437376,322.560149 L608.392987,397.47748 C608.392987,397.47748 567.09997,425.202792 494.54224,425.202792 C376.562192,425.202792 325.240871,354.414762 325.240871,269.469127 C325.240871,183.343692 377.152092,113.735463 480.974535,113.735463 C574.178773,113.735463 627.269795,171.545687 627.269795,269.469127 Z M424.344111,236.434714 L528.166554,236.434714 C528.166554,216.378105 511.649347,189.242694 476.255333,189.242694 C446.17042,189.242694 424.344111,216.378105 424.344111,236.434714 Z M659.714308,0.474616471 L754.098347,0.474616471 L754.098347,415.764388 L659.714308,415.764388 L659.714308,0.474616471 Z M810.13887,0.474616471 L904.522909,0.474616471 L904.522909,415.764388 L810.13887,415.764388 L810.13887,0.474616471 Z M1097.42029,113.735463 C1191.80433,113.735463 1257.87315,183.343692 1257.87315,269.469127 C1257.87315,355.594563 1192.98413,425.202792 1097.42029,425.202792 C997.727148,425.202792 936.967423,355.594563 936.967423,269.469127 C936.967423,183.343692 996.547347,113.735463 1097.42029,113.735463 Z M1097.42029,340.257156 C1133.9941,340.257156 1163.48912,308.402543 1163.48912,269.469127 C1163.48912,230.535711 1133.9941,198.681098 1097.42029,198.681098 C1060.84647,198.681098 1031.35146,230.535711 1031.35146,269.469127 C1031.35146,308.402543 1060.84647,340.257156 1097.42029,340.257156 Z"
                                        fill="lightblue"
                                    />
                                </g>
                            </animated.svg>
                        </div>
                        <div>

                            <h1 className='text-3xl text-white font-bold'>I’M <span className='text-blue-300'>SHA NEOYAJ ALAM</span></h1>
                        </div>
                    </div>

                    <div >


                        {/* style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'semibold', color: 'white' }} */}
                        <h1 className='py-2  font-semibold text-white lg:text-5xl text-xl '>
                            I'm a{' '}
                            <span style={{ color: 'tomato', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Web Developer', 'MERN Developer', 'React Developer', 'Full-stack Developer']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    onLoopDone={handleDone}
                                    onType={handleType}
                                />
                            </span>
                        </h1>
                    </div>
                </div>
                <div className='w-1/3 items-center lg:justify-end  '>
                    <Lottie
                        options={defaultOptions}
                        height={300}
                        width={350}
                    />
                </div>
            </div>

        </div >
    );
};

export default Banner;