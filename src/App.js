import logo from './logo.svg';
import './App.css';
import Header from './header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <header className="App-header">
      <div class="container">
        <div class="left">Videojuegos</div>
        <div class="right">Programación</div>
      </div>
      </header>
    </div>
  );
}

export default App;
