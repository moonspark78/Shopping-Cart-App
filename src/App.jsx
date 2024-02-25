import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Home } from "./pages/Home"
import {Cart } from "./pages/Cart"

function App() {
  return (
    <div>
      <h1>Navbar</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
