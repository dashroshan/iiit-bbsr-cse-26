import { Route, Routes, useLocation, Outlet } from 'react-router-dom';
import { motion } from "framer-motion";

import HomePage from './routes/homePage';

import TopBinary from './components/topBinary';
import NavBar from './components/navBar';

import AngledLine from './components/angledLine';
import EqualLoading from './components/equalLoading';
import FuturisticLine from './components/futuristicLine';
import ScrollingText from './components/scrollingText';

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
            <motion.div layout
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

function App() {
    return (
        <div className="App">
            <TopBinary />
            <NavBar />
            <Routes>
                <Route element={<AnimationLayout />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
            <EqualLoading />
            <AngledLine />
            <FuturisticLine />
            <ScrollingText text={["text line number 1", "text line number 2"]} forward={false} />
            <ScrollingText text={["text line number 3", "text line number 4"]} forward={true} />
        </div>
    );
}

export default App;
