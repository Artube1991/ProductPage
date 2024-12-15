import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import New from './components/New';
import Classics from './components/Classics';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <nav>
    <p className="website-logo">KEYS / КЛЮЧИ </p>
    <ul>
      <li><Link to="/">NEW!</Link></li>
      <li><Link to="/classic">Our Classics</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    </nav>
    <Routes>      
      <Route exact path="/" element={<New />}/>
      <Route path="/classic" element={<Classics />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <div className="main">
      <h1>something</h1>
    </div>
    </>
  );
}

export default App;
