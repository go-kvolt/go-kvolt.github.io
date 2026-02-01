import { motion } from 'framer-motion';
import { Copy, Terminal } from 'lucide-react';
import './CodeDemo.css';

const codeSnippet = `package main

import "github.com/go-kvolt/kvolt"

func main() {
    // fast & scale
    app := kvolt.New()

    app.GET("/", func(c *kvolt.Context) error {
        return c.JSON(200, kvolt.Map{
            "message": "Hello, KVolt!",
        })
    })

    app.Run(":8080")
}`;

const CodeDemo = () => {
    return (
        <section className="code-demo">
            <div className="container">
                <motion.div
                    className="code-window"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="code-header">
                        <div className="window-actions">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>
                        <div className="window-title-wrapper">
                            <Terminal size={14} className="terminal-icon" />
                            <span className="window-title">main.go</span>
                        </div>
                        <div className="copy-btn">
                            <Copy size={14} />
                        </div>
                    </div>
                    <pre className="code-content">
                        <code>{codeSnippet}</code>
                    </pre>

                    {/* Decorative glow beneath the window */}
                    <div className="code-glow"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default CodeDemo;
