import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import CodeDemo from './components/CodeDemo.jsx';
import Performance from './components/Performance.jsx';
import Footer from './components/Footer.jsx';
import Docs from './pages/Docs.jsx';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <CodeDemo />
                <Performance />
              </>
            } />
            <Route path="/docs" element={<Docs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
