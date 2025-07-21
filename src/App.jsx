import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Service from './components/Service';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import styled from 'styled-components';
import './App.css';

function App() {

  const StyledConteiner = styled.div`
      margin: 0;
      padding: 0;
      background-color: #333;                                  /* ciemne tło awaryjne */
      background-image: url('/tło.avif');                      /* AVIF z folderu public */
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
 
      position: relative; 
      z-index: 0;
      color: white;
  `;

  return (
    <StyledConteiner>
      <Header />
      <Hero />
      <About />
      <Service />
      <Gallery />
      <Footer />
    </StyledConteiner>
  );
}

export default App;
