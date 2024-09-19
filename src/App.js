import logo from './logo.svg';
import './App.css';
import Navbar from './Files/Navbar';
import Footer from './Files/Footer';
import Home from './Files/Home';
import About from './Files/About';
import Services from './Files/Services';
import {  BrowserRouter as Router, Routes,Route,} from "react-router-dom";

import Contact from './Files/Contact';
import Complated from './Files/Complated';
import Testimonial from './Files/Testimonial';

function App() {
  return (
  <>
  <Router>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
</Routes>

<Routes>
  <Route path='/about' element={<About/>}></Route>
</Routes>

<Routes>
  <Route path='/services' element={<Services/>}></Route>
</Routes>

<Routes>
  <Route path='/contact' element={<Contact/>}></Route>
</Routes>

<Routes>
  <Route path='/complate' element={<Complated/>}></Route>
</Routes>

<Routes>
  <Route path='/testimonial' element={<Testimonial/>}></Route>
</Routes>
<Footer/>
  </Router>
  </>
  );
}

export default App;
