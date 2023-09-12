import './App.css';
import Navbar from '../src/Components/Navbar'
import Home from '../src/Components/Home'
import About from '../src/Components/About'
import Skill from '../src/Components/Skill'
import Portfolio from './Components/Portfolio';
import Cv from '../src/Components/Cv'
import Footer from '../src/Components/Footer'
import NavbarResponsi from '../src/Components/NavbarResponsi';

function App() {
  return (
    <div className="App">
        <Navbar />
        <NavbarResponsi />
        <Home />
        <About />
        <Skill />
        <Portfolio />
        {/* <Cv/> */}
        <Footer />
    </div>
  );
}

export default App;
