import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
