// import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className="App">

      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

    </div>
  );
}

export default App;
