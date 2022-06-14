
import './App.css';

import { Navbar } from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Home/Footer';
import { Route, Routes } from 'react-router-dom';
import Bedding from './components/Categories/Bedding/Bedding';
import Furniture from './components/Categories/Furniture/Furniture';
import Kitchen from './components/Categories/Kitchen/Kitchen';
import Lighting from './components/Categories/Lighting/Lighting';
import Outdoor from './components/Categories/Outdoor/Outdoor';
import Rugs from './components/Categories/Rugs/Rugs';
import More from './components/Categories/More/More';
import Decor from './components/Categories/Decor/Decor';
import KidsBaby from './components/Categories/Kids & Baby/KidsBaby';
import HomeImprovement from './components/Categories/Home Improvement/HomeImprovement';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bedding" element={<Bedding/>}/>
        <Route path="/decor" element={<Decor/>}/>
        <Route path="/furniture" element={<Furniture/>}/>
        <Route path="/homeimprovement" element={<HomeImprovement/>}/>
        <Route path="/kidsbaby" element={<KidsBaby/>}/>
        <Route path="/kitchen" element={<Kitchen/>}/>
        <Route path="/lighting" element={<Lighting/>}/>
        <Route path="/outdoor" element={<Outdoor/>}/>
        <Route path="/rugs" element={<Rugs/>}/>
        <Route path="/more" element={<More/>}/>
      </Routes>
      <Home/>
      
    <Footer/> 
   
    </div>
  );
}

export default App;
