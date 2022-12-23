import React, { useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {
    useSpringRef,
    animated,
    useTransition,
    useSpring,
} from '@react-spring/web'

import styles from './styles.module.css'

const IMAGES = [
    'https://i.ibb.co/MVnxZcD/screencapture-wheelanes-2a34c-web-app-2022-12-11-20-38-26.png',
    'https://i.ibb.co/M6gr0CG/screencapture-wheelanes-2a34c-web-app-allcars-3-2022-12-11-23-51-39.png',
    'https://i.ibb.co/pLRj0Vd/screencapture-wheelanes-2a34c-web-app-featured-cars-6389ea8b5f0b17000d0c7839-2022-12-11-23-53-54.png',
]
const IMAGES2 = [
    'https://i.ibb.co/8Xg72CK/screencapture-property-homie-rocco-web-app-2022-12-23-23-06-40.png',
    'https://i.ibb.co/BgP9GZQ/screencapture-property-homie-rocco-web-app-singleservice-636bdd0a73e5dd1fb1f6319d-2022-12-23-23-23-1.png',
    'https://i.ibb.co/1JJfFnS/screencapture-property-homie-rocco-web-app-allservices-2022-12-23-23-22-07.png',


]
const IMAGES3 = [
    'https://i.ibb.co/sP53b2K/screencapture-boisterous-tarsier-583d27-netlify-app-2022-12-11-22-01-40.png',
    'https://i.ibb.co/Fzjynm2/screencapture-boisterous-tarsier-583d27-netlify-app-course-47f3c7ca-fd0a-4063-8f98-8ee0fcdeadce-2022.png',
    'https://i.ibb.co/vv3024T/screencapture-boisterous-tarsier-583d27-netlify-app-register-2022-12-11-23-31-27.png',


]



const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const springApi = useSpringRef()

    const transitions = useTransition(activeIndex, {
        from: {
            clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)',
        },
        enter: {
            clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
        },
        leave: {
            clipPath: 'polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)',
        },
        onRest: (_springs, _ctrl, item) => {
            if (activeIndex === item) {
                setActiveIndex(activeIndex === IMAGES.length - 1 ? 0 : activeIndex + 1)
            }
        },
        exitBeforeEnter: true,
        config: {
            duration: 2000,
        },
        delay: 1000,
        ref: springApi,
    })

    const springs = useSpring({
        from: {
            strokeDashoffset: 120,
        },
        to: {
            strokeDashoffset: 0,
        },
        config: {
            duration: 11000,
        },
        loop: true,
        ref: springApi,
    })

    useLayoutEffect(() => {
        springApi.start()
    }, [activeIndex])

    return (
        <div>

            <hr /><h1 className='py-5 text-5xl text-white font-bold text-center'>My Projects</h1><hr />
            <div className="hero  bg-slate-800 my-5">
                <div className="hero-content flex-col lg:flex-row">
                    <div className={styles.container}>
                        <div className={styles.container__inner}>
                            {transitions((springs, item) => (
                                <animated.div className={styles.img__container} style={springs}>
                                    <img src={IMAGES[item]} />
                                </animated.div>
                            ))}
                            <div className={styles.ticker}>
                                <div />
                                <animated.svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    style={springs}>
                                    <path d="M19.9999 38.5001C17.5704 38.5001 15.1648 38.0216 12.9203 37.0919C10.6758 36.1622 8.63633 34.7995 6.91845 33.0816C5.20058 31.3638 3.83788 29.3243 2.90817 27.0798C1.97846 24.8353 1.49995 22.4296 1.49995 20.0002C1.49995 17.5707 1.97846 15.1651 2.90817 12.9206C3.83788 10.6761 5.20058 8.63663 6.91846 6.91875C8.63634 5.20087 10.6758 3.83818 12.9203 2.90847C15.1648 1.97876 17.5705 1.50024 19.9999 1.50024C22.4293 1.50024 24.835 1.97876 27.0795 2.90847C29.324 3.83818 31.3635 5.20088 33.0813 6.91876C34.7992 8.63663 36.1619 10.6761 37.0916 12.9206C38.0213 15.1651 38.4998 17.5707 38.4998 20.0002C38.4998 22.4296 38.0213 24.8353 37.0916 27.0798C36.1619 29.3243 34.7992 31.3638 33.0813 33.0816C31.3635 34.7995 29.324 36.1622 27.0795 37.0919C24.835 38.0216 22.4293 38.5001 19.9999 38.5001L19.9999 38.5001Z" />
                                </animated.svg>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className="text-5xl font-bold text-blue-300">Wheelanes</h1>
                            <p className="py-2 text-xl text-white">1. This website is based on car resale.</p>
                            <p className="py-2 text-xl text-white">2. There are different cars filtered by different categories.</p>
                            <p className="py-2 text-xl text-white">3. Any car can be booked based on buyers request through booking.</p>
                            <Link to='/wheelanes'><button className="btn bg-orange-400 ml-20">Details</button></Link>

                        </div>
                    </div>
                    {/* <img src="https://i.ibb.co/MVnxZcD/screencapture-wheelanes-2a34c-web-app-2022-12-11-20-38-26.png" className="max-w-sm rounded-lg shadow-2xl" /> */}

                </div>
            </div>

            <div className="hero  bg-slate-800 my-5">
                <div className="hero-content flex-col lg:flex-row">
                    <div className={styles.container}>
                        <div className={styles.container__inner}>
                            {transitions((springs, item) => (
                                <animated.div className={styles.img__container} style={springs}>
                                    <img src={IMAGES2[item]} />
                                </animated.div>
                            ))}
                            <div className={styles.ticker}>
                                <div />
                                <animated.svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    style={springs}>
                                    <path d="M19.9999 38.5001C17.5704 38.5001 15.1648 38.0216 12.9203 37.0919C10.6758 36.1622 8.63633 34.7995 6.91845 33.0816C5.20058 31.3638 3.83788 29.3243 2.90817 27.0798C1.97846 24.8353 1.49995 22.4296 1.49995 20.0002C1.49995 17.5707 1.97846 15.1651 2.90817 12.9206C3.83788 10.6761 5.20058 8.63663 6.91846 6.91875C8.63634 5.20087 10.6758 3.83818 12.9203 2.90847C15.1648 1.97876 17.5705 1.50024 19.9999 1.50024C22.4293 1.50024 24.835 1.97876 27.0795 2.90847C29.324 3.83818 31.3635 5.20088 33.0813 6.91876C34.7992 8.63663 36.1619 10.6761 37.0916 12.9206C38.0213 15.1651 38.4998 17.5707 38.4998 20.0002C38.4998 22.4296 38.0213 24.8353 37.0916 27.0798C36.1619 29.3243 34.7992 31.3638 33.0813 33.0816C31.3635 34.7995 29.324 36.1622 27.0795 37.0919C24.835 38.0216 22.4293 38.5001 19.9999 38.5001L19.9999 38.5001Z" />
                                </animated.svg>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className="text-5xl font-bold text-blue-300">PropertyHomieRocco</h1>
                            <p className="py-2 text-xl text-white">1. A personal service website for a real estate agent</p>
                            <p className="py-2 text-xl text-white">2. Users can have a view on available property listings and for query of those,they can contact with him in the contact form.</p>
                            <p className="py-2 text-xl text-white">3. A user can give a review of any particular service through logging in from his email.</p>
                            <Link to='/propertyhomierocco'><button className="btn bg-orange-400 ml-20">Details</button></Link>

                        </div>
                    </div>
                    {/* <img src="https://i.ibb.co/MVnxZcD/screencapture-wheelanes-2a34c-web-app-2022-12-11-20-38-26.png" className="max-w-sm rounded-lg shadow-2xl" /> */}

                </div>
            </div>
            <div className="hero  bg-slate-800">
                <div className="hero-content flex-col lg:flex-row">
                    <div className={styles.container}>
                        <div className={styles.container__inner}>
                            {transitions((springs, item) => (
                                <animated.div className={styles.img__container} style={springs}>
                                    <img src={IMAGES3[item]} />
                                </animated.div>
                            ))}
                            <div className={styles.ticker}>
                                <div />
                                <animated.svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    style={springs}>
                                    <path d="M19.9999 38.5001C17.5704 38.5001 15.1648 38.0216 12.9203 37.0919C10.6758 36.1622 8.63633 34.7995 6.91845 33.0816C5.20058 31.3638 3.83788 29.3243 2.90817 27.0798C1.97846 24.8353 1.49995 22.4296 1.49995 20.0002C1.49995 17.5707 1.97846 15.1651 2.90817 12.9206C3.83788 10.6761 5.20058 8.63663 6.91846 6.91875C8.63634 5.20087 10.6758 3.83818 12.9203 2.90847C15.1648 1.97876 17.5705 1.50024 19.9999 1.50024C22.4293 1.50024 24.835 1.97876 27.0795 2.90847C29.324 3.83818 31.3635 5.20088 33.0813 6.91876C34.7992 8.63663 36.1619 10.6761 37.0916 12.9206C38.0213 15.1651 38.4998 17.5707 38.4998 20.0002C38.4998 22.4296 38.0213 24.8353 37.0916 27.0798C36.1619 29.3243 34.7992 31.3638 33.0813 33.0816C31.3635 34.7995 29.324 36.1622 27.0795 37.0919C24.835 38.0216 22.4293 38.5001 19.9999 38.5001L19.9999 38.5001Z" />
                                </animated.svg>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className="text-5xl font-bold text-blue-300">P-Learning</h1>
                            <p className="py-2 text-xl text-white">1. It is an e-learning website for students of any field</p>
                            <p className="py-2 text-xl text-white">2. A student can search for a course and get to know about its details.</p>
                            <p className="py-2 text-xl text-white">3. Anyone can enroll in any course</p>
                            <Link to='/plearning'><button className="btn bg-orange-400 ml-20">Details</button></Link>

                        </div>
                    </div>
                    {/* <img src="https://i.ibb.co/MVnxZcD/screencapture-wheelanes-2a34c-web-app-2022-12-11-20-38-26.png" className="max-w-sm rounded-lg shadow-2xl" /> */}

                </div>
            </div>
        </div>

    );
};

export default Projects;