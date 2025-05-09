import './App.css';
import Navbar from './components/Navbar';
import { ReactLenis, useLenis } from 'lenis/react'

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  return (
    <ReactLenis root>
      {
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
      }
    </ReactLenis>
  )
}
export default App;
