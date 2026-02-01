import { motion } from 'framer-motion';
import './Performance.css';

const benchmarks = [
    { name: 'KVolt', requests: 250000, color: '#00f0ff' }, // Cyan
    { name: 'Fiber', requests: 145000, color: '#00ff9d' }, // Neon Green
    { name: 'Gin', requests: 55000, color: '#ffeb3b' },    // Yellow
    { name: 'Express', requests: 15000, color: '#ff0055' } // Pink
];

const Performance = () => {
    const maxReqs = 300000;

    return (
        <section className="performance">
            <div className="container">
                <motion.div
                    className="perf-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Unmatched <span className="gradient-text">Performance</span></h2>
                    <p className="section-desc">Capable of handling over 180k requests per second.</p>
                </motion.div>

                <div className="chart-container">
                    {benchmarks.map((item, index) => (
                        <div key={item.name} className="chart-row">
                            <span className="chart-label">{item.name}</span>
                            <div className="chart-bar-bg">
                                <motion.div
                                    className="chart-bar-fill"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${(item.requests / maxReqs) * 100}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                                    style={{ backgroundColor: item.color }}
                                >
                                    <span className="chart-value">{item.requests.toLocaleString()} req/s</span>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="benchmark-note">* Benchmark: "Hello World" plain text, 6-core CPU, 100 concurrent connections.</p>
            </div>
        </section>
    );
};

export default Performance;
