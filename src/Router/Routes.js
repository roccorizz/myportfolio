import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Homepage/Home/Home'
import Main from '../Layout/Main'
import Resume from './../Pages/Homepage/Resume/Resume';
import Projects from '../Pages/Homepage/Projects/Projects';
import Contact from '../Pages/Homepage/Contact/Contact';
import Services from '../Pages/Homepage/Services/Services';
import About from '../Pages/Homepage/About/About';
import Wheelanes from '../Pages/Homepage/Projects/Wheelanes/Wheelanes';
import PLearning from '../Pages/Homepage/Projects/PLearning/PLearning';
import PropertyHomieRocco from './../Pages/Homepage/Projects/PropertyHomieRocco/PropertyHomieRocco';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/resume',
                element: <Resume></Resume>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },

            {
                path: '/services',
                element: <Services></Services>
            },

            {
                path: '/about',
                element: <About></About>
            },

            {
                path: '/wheelanes',
                element: <Wheelanes></Wheelanes>
            },
            {
                path: '/propertyhomierocco',
                element: <PropertyHomieRocco></PropertyHomieRocco>
            },
            {
                path: '/plearning',
                element: <PLearning></PLearning>
            },
        ]
    },

]);
export default router