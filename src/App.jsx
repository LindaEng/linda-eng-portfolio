import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import { site } from './constants/portfolioData';

function App() {
  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', ui-monospace, Menlo, monospace",
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Navbar />
      <Hero />
      <Work />
      {site.showBlog && <Blog />}
      <About />
      <Contact />
    </div>
  );
}

export default App;
