import './App.css';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Impressum from './Components/Impressum';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
//basename='/in-resonance.net'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/impressum' element={<Impressum />}></Route>
          <Route path='/about-me' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        <Footer/>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
