import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { Routes, Route, Link } from "react-router-dom";

function Site() {
  return (
    <>
      <button className="scroll-top">
        <i className="fas fa-space-shuttle"></i>
      </button>
      <div className="preloader main-gradiant">
          <div className="loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>
      </div>
      <Home />
    </>
  );
}


function App(){
  return(
    <Routes>
        <Route path="/" element={<Site />} />
        <Route path="*" element={<NotFound />} />
     </Routes>
  )
}


export default App;
