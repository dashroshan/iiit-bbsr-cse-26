import { Route, Routes, useLocation, Outlet } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';

import HomePage from './routes/homePage';
import Experimental from './routes/experimental';
import AboutPage from './routes/about';
import ProfilePage from './routes/profile';
import SocietiesPage from './routes/societies';

import TopBinary from './components/topBinary';
import NavBar from './components/navBar';

const PageLayout = ({ children }) => children;

const pageVariants = {
    initial: {
        opacity: 0
    },
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
};

const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.5
};

const AnimationLayout = () => {
    const { pathname } = useLocation();
    return (
        <PageLayout>
            <motion.div
                key={pathname}
                initial="initial"
                animate="in"
                variants={pageVariants}
                transition={pageTransition}
            >
                <Outlet />
            </motion.div>
        </PageLayout>
    );
};

export default function App() {
    useEffect(() => {
        const onPageLoad = () => {
            setTimeout(() => {
                document.getElementById("loader_block").style.opacity = 0;
                setTimeout(() => {
                    document.getElementById("loader_block").style.display = "none";
                }, 310);
            }, 200);
        };
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad, false);
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);

    return (
        <div className="App">
            <TopBinary />
            <NavBar />
            <Routes>
                <Route element={<AnimationLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/societies" element={<SocietiesPage />} />
                    <Route path="/experimental" element={<Experimental />} />
                </Route>
            </Routes>
        </div>
    );
}
