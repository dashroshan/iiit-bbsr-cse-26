import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/homePage';

import TopBinary from './components/topBinary';
import NavBar from './components/navBar';

function App() {
    return (
        <div className="App">
            <TopBinary />
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    );
}

export default App;
