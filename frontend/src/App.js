import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/homePage';

import TopBinary from './components/topBinary';
import NavBar from './components/navBar';

import AngledLine from './components/angledLine';
import EqualLoading from './components/equalLoading';
import FuturisticLine from './components/futuristicLine';
import ScrollingText from './components/scrollingText';

function App() {
    return (
        <div className="App">
            <TopBinary />
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
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
