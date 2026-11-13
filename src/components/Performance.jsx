import { motion } from 'framer-motion';
import './Performance.css';

const benchmarks = [
    { name: 'Fiber (fasthttp)', requests: 87356, color: '#9c27b0' },
    { name: 'KVolt (net/http)', requests: 81052, color: '#00f0ff' },
    { name: 'Gin', requests: 70006, color: '#ffeb3b' },
    { name: 'Go stdlib', requests: 67881, color: '#00d084' },
    { name: 'Echo', requests: 67367, color: '#ff9800' },
    { name: 'Chi', requests: 65854, color: '#ff0055' }
];

const Performance = () => {
    const maxReqs = 100000;

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
                    <p className="section-desc">Real TCP load test on a 16-core laptop. KVolt is the #1 fastest among standard net/http Go web frameworks.</p>
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
                <p className="benchmark-note">* GET /ping, Bombardier, localhost, 125 connections, 10s duration, median of 10 rounds. Tested on Intel Core Ultra 7 155H, Go 1.27.4. Fiber uses fasthttp; KVolt leads all standard net/http engines.</p>
            </div>
        </section>
    );
};

export default Performance;
