import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';
import landscaping_banner from './components/Assets/landscaping_banner.png'
import snowRemovalBanner from './components/Assets/snowJob.jpg'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/landscaping' element={<ShopCategory banner={landscaping_banner} category="landscaping"/>}/>
        <Route path='/snowRemoval' element={<ShopCategory  banner={snowRemovalBanner} category="snowRemoval"/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/product/:productId" element={<Product />}/>
        <Route />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>.
      </BrowserRouter>
    </div>
  );
}

export default App;
