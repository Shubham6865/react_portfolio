
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App ">
      <Navbar />

      <Home />
      {/* <Parallax /> */}
      <Work />
      <Skills />
      <About />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
