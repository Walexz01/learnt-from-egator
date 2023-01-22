import "./App.css";
import Home from './Pages/home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Gallery from './Pages/gallery/Gallery'
import NotFound from './Pages/NotFound/NotFound'
import Plans from './Pages/Plans/Plans'
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from 'react-router-dom';
import Trainer from "./Pages/Trainers/Trainer";
import Footer from "./Components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="gallery" element={<Gallery/>}/>
        <Route path="plans" element={<Plans/>}/>
        <Route path="trainers" element={<Trainer/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes> 
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
