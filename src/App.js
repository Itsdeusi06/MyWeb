import './App.css';
// import Navbar from './components/Navbar';
import { ReactLenis, useLenis } from 'lenis/react';
import HeroScroll from './components/HeroScroll';

function App() {
  useLenis(() => {
    // Optional scroll callback
  });

  return (
    <ReactLenis root>
      <div className="App">
        <HeroScroll />

        {/*<div className="header">Itsdeusi06</div>*/}

        {/* <Navbar /> */}

        <div className="container">
          <div className="left">
            <h1 className="button">Videogames</h1>
          </div>
          <div className="right">
            <h1 className="button">Coding</h1>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;
