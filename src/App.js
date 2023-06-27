import { Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
