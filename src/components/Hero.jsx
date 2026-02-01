import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    KVolt
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Build with <span className="gradient-text">Passion</span>. Scale with <span className="gradient-text">Power</span>.
                    <br />
                    <span className="hero-description-small">
                        Crafting high-performance backends shouldn't be painful. Rediscover the joy of coding with a framework designed for the extraordinary.
                    </span>
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a href="#features" className="btn btn-primary">
                        Get Started <ArrowRight size={18} />
                    </a>
                    <Link to="/docs" className="btn btn-secondary">
                        Documentation
                    </Link>
                    <a href="https://github.com/go-kvolt/kvolt" target="_blank" rel="noreferrer" className="btn btn-secondary">
                        GitHub
                    </a>
                </motion.div>
            </div>

            <motion.div
                className="mascot-container"
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.5, type: "spring" }}
            >
                <img src="/mascot-with-transparent-background.png" alt="KVolt Mascot" className="mascot-img" />
            </motion.div>
        </section >
    );
};

export default Hero;
