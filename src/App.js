import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div class="header">Itsdeusi06</div>
      <Navbar />
      <div class="container">
        <div class="left">
          <h1 class="button">Videogames</h1>
        </div>
        <div class="right">
          <h1 class="button">Coding</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
