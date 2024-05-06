import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Items from './pages/Items';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Items />} path='/products/:id' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
