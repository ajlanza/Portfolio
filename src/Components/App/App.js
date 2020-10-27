import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <nav>
        <Nav />
      </nav>
      <header className='App-header'>
        <Header />
      </header>
      <main>
        <About />
        <Projects />
      </main>
      <footer className='App-footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
