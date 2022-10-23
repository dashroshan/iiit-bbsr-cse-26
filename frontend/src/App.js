import { Route, Routes, useLocation, Outlet } from 'react-router-dom';
import { motion } from "framer-motion";

import HomePage from './routes/homePage';
import Experimental from './routes/experimental';
import CreditsPage from './routes/credits';

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
    return (
        <div className="App">
            <TopBinary />
            <NavBar />
            <Routes>
                <Route element={<AnimationLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/credits" element={<CreditsPage />} />
                    <Route path="/experimental" element={<Experimental />} />
                </Route>
            </Routes>
        </div>
    );
}
