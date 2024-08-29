// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Welcome from './components/Welcome';
import Bacdive from './components/Bacdive';
import BacteryPage from './pages/BacteryPage';

function App() {
  return (
    <div className="App Container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Welcome />} />
            <Route path="/bacdive" element={<Bacdive />} />
            <Route path="/bacdive/:bacteryName" element={<BacteryPage />} />
          </Route>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
