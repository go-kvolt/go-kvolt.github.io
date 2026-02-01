import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">
          <img src="/logo.webp" alt="KVolt Logo" className="logo-img" />
          <span className="logo-text">KVolt</span>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links desktop-only">
          <a href="/#features">Features</a>
          <Link to="/docs">Docs</Link>

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a href="https://github.com/go-kvolt/kvolt" target="_blank" rel="noreferrer" className="github-btn">
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-actions">
          {/* Theme Toggle Visible on Mobile too, outside menu for easy access */}
          <button className="theme-toggle mobile-theme-btn" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          <a href="/#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <Link to="/docs" onClick={() => setIsMobileMenuOpen(false)}>Docs</Link>
          <a href="https://github.com/go-kvolt/kvolt" target="_blank" rel="noreferrer" className="mobile-github-link">
            <Github size={18} />
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
