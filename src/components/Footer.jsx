import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-left">
                    <span className="footer-logo">KVolt</span>
                    <p className="footer-text">
                        &copy; {new Date().getFullYear()} KVolt Framework. All rights reserved.
                    </p>
                </div>
                <div className="footer-right">
                    <Link to="/docs">Documentation</Link>
                    <a href="https://github.com/go-kvolt/kvolt" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://wa.me/917904612266" target="_blank" rel="noreferrer">WhatsApp (+91 7904612266)</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
