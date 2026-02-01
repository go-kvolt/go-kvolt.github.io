import { useState } from 'react';
import { motion } from 'framer-motion';
import { sections, docsContent } from '../data/docsContent.jsx';
import './Docs.css';

const Docs = () => {
    const [activeSection, setActiveSection] = useState('intro');
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="docs-page">
            {/* Mobile Menu Toggle */}
            <button
                className="mobile-menu-toggle"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
                {isMobileOpen ? '✕' : '☰ Menu'}
            </button>

            {/* Backdrop for Mobile */}
            {isMobileOpen && (
                <div
                    className="mobile-backdrop"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            <aside className={`docs-sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
                <div className="sidebar-header">
                    <h3>Documentation</h3>
                </div>
                <nav className="sidebar-nav">
                    {sections.map((category, idx) => (
                        <div key={idx} className="sidebar-category">
                            <h4 className="category-title">{category.category}</h4>
                            {category.items.map((item) => (
                                <button
                                    key={item.id}
                                    className={`sidebar-link ${activeSection === item.id ? 'active' : ''}`}
                                    onClick={() => {
                                        setActiveSection(item.id);
                                        setIsMobileOpen(false); // Close on click
                                    }}
                                >
                                    {item.icon}
                                    <span>{item.title}</span>
                                </button>
                            ))}
                        </div>
                    ))}
                </nav>
            </aside>

            <main className="docs-content">
                <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="content-wrapper"
                >
                    {docsContent[activeSection] || (
                        <div>
                            <h1>Content Not Found</h1>
                            <p>This section is currently under construction.</p>
                        </div>
                    )}
                </motion.div>
            </main>
        </div>
    );
};

export default Docs;
