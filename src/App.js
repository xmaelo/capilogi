import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'

function App() {
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

export default App;
