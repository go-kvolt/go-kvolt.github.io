import { motion } from 'framer-motion';
import './Performance.css';

const benchmarks = [
    { name: 'KVolt', requests: 97197, color: '#00f0ff' },
    { name: 'Gin', requests: 81631, color: '#ffeb3b' },
    { name: 'Nest (Express)', requests: 16088, color: '#ff0055' }
];

const Performance = () => {
    const maxReqs = 110000;

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
                    <p className="section-desc">Empty GET /ping on a 16-core laptop. Invoice writes sit with Postgres, not the router.</p>
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
                <p className="benchmark-note">* GET /ping, bombardier, localhost, 50 connections, 10s. KVolt v2.0 vs Gin vs Nest Express. POST /invoice (1 TX + 2 journal lines) is ~11k/s for all three Go frameworks — Postgres is the wall.</p>
            </div>
        </section>
    );
};

export default Performance;
