import './App.css';
import styled from "styled-components"
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

