import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/homePage';

import TopBinary from './components/topBinary';
import NavBar from './components/navBar';

import AngledLine from './components/angledLine';
import EqualLoading from './components/equalLoading';
import FuturisticLine from './components/futuristicLine';

function App() {
    return (
        <div className="App">
            <TopBinary />
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            <AngledLine />
            <FuturisticLine />
            <EqualLoading />
        </div>
    );
}

export default App;
