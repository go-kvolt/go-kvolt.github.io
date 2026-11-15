import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Copy, Check, ShieldCheck, Zap, Award, Activity } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const [copied, setCopied] = useState(false);
    const installCmd = "go get github.com/go-kvolt/kvolt/v2@v2.4.0";

    const handleCopy = () => {
        navigator.clipboard.writeText(installCmd);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="hero">
            <div className="container hero-content">
                {/* Top release announcement banner */}
                <motion.div
                    className="release-pill-wrapper"
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <a
                        href="https://github.com/go-kvolt/kvolt/releases/tag/v2.4.0"
                        target="_blank"
                        rel="noreferrer"
                        className="release-banner"
                    >
                        <span className="badge-pulse"></span>
                        <span className="release-tag">v2.4.0 Released</span>
                        <span className="release-text">Production Ready &amp; Security Audited</span>
                        <ArrowRight size={14} className="banner-arrow" />
                    </a>
                </motion.div>

                {/* Hero Title */}
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    KVolt
                </motion.h1>

                {/* Main Hero Tagline */}
                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Build with <span className="gradient-text">Passion</span>. Scale with <span className="gradient-text">Power</span>.
                    <span className="hero-description-small">
                        The ultra-fast, zero-race Go web framework on standard <code>net/http</code>.
                        <br />
                        Featuring a custom Radix router, multi-tenancy, RBAC, idempotency, and automated security.
                    </span>
                </motion.p>

                {/* Quick Install Bar */}
                <motion.div
                    className="quick-install-box"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <span className="prompt-symbol">$</span>
                    <code className="install-command">{installCmd}</code>
                    <button
                        className="quick-copy-btn"
                        onClick={handleCopy}
                        aria-label="Copy install command"
                        title="Copy to clipboard"
                    >
                        {copied ? <Check size={16} className="copied-check" /> : <Copy size={16} />}
                        <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <Link to="/docs" className="btn btn-primary">
                        Get Started <ArrowRight size={18} />
                    </Link>
                    <a href="#demo" className="btn btn-secondary">
                        Interactive Demo
                    </a>
                    <a
                        href="https://github.com/go-kvolt/kvolt"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary github-cta"
                    >
                        GitHub (v2.4.0)
                    </a>
                </motion.div>

                {/* Key Metrics Proof Strip */}
                <motion.div
                    className="metrics-strip"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    <div className="metric-item">
                        <Zap size={18} className="metric-icon cyan" />
                        <span className="metric-val">~81,000</span>
                        <span className="metric-lbl">Req/Sec (net/http)</span>
                    </div>
                    <div className="metric-item">
                        <ShieldCheck size={18} className="metric-icon green" />
                        <span className="metric-val">Zero</span>
                        <span className="metric-lbl">Data Races</span>
                    </div>
                    <div className="metric-item">
                        <Award size={18} className="metric-icon purple" />
                        <span className="metric-val">100%</span>
                        <span className="metric-lbl">Test Coverage</span>
                    </div>
                    <div className="metric-item">
                        <Activity size={18} className="metric-icon yellow" />
                        <span className="metric-val">gosec &amp; vuln</span>
                        <span className="metric-lbl">0 Vulnerabilities</span>
                    </div>
                </motion.div>
            </div>

            {/* Mascot visual */}
            <motion.div
                className="mascot-container"
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, type: "spring" }}
            >
                <img src="/mascot-with-transparent-background.png" alt="KVolt Mascot" className="mascot-img" />
            </motion.div>
        </section>
    );
};

export default Hero;
