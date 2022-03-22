import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About/>
      <Projects />   
      <Skills />   
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
