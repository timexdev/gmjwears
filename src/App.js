import logo from './logo.svg';
import './App.css';
import Banner from './Component/Banner';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import NotFound from './Component/NotFound';

function App() {
  return (
    <>
      <Banner/>
      <NavBar/>
      {/* <Home/>
      <Cart/> */}
      {/* <Checkout/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Navigate to="/"/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
