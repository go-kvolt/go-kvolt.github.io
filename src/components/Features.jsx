import { motion } from 'framer-motion';
import { Zap, Code, Shield, Layers, Cpu, Globe, Radio, Database, BookOpen } from 'lucide-react';
import './Features.css';

const features = [
    {
        title: "Zero Allocation",
        description: "Optimized for speed. KVolt minimizes memory usage to keep your applications running smooth and fast.",
        icon: <Zap size={40} className="icon-zap" />
    },
    {
        title: "Developer First",
        description: "Built-in hot reloading, structured logging, and intuitive APIs make development a breeze.",
        icon: <Code size={40} className="icon-code" />
    },
    {
        title: "Type Safe",
        description: "Leverage Go's strong typing system with a framework designed to catch errors at compile time.",
        icon: <Shield size={40} className="icon-shield" />
    },
    {
        title: "Middleware Ecosystem",
        description: "Recovery, Request-ID, body limit, JWT, CORS, gzip (opt-in). Plug in what you need.",
        icon: <Layers size={40} className="icon-layers" />
    },
    {
        title: "Concurrent & Scalable",
        description: "Built on Go's goroutines to handle thousands of requests per second efficiently without blocking.",
        icon: <Cpu size={40} className="icon-cpu" />
    },
    {
        title: "Powerful Routing",
        description: "Fast, tree-based HTTP router with support for parameters, wildcards, and grouping.",
        icon: <Globe size={40} className="icon-globe" />
    },
    {
        title: "Real-time Ready",
        description: "Native WebSocket support for building chat apps, game servers, and real-time streams.",
        icon: <Radio size={40} className="icon-radio" />
    },
    {
        title: "Smart Caching",
        description: "Sharded in-memory cache with TTL and a 50k LRU cap so it cannot grow forever.",
        icon: <Cpu size={40} className="icon-db" />
    },
    {
        title: "Auto Documentation",
        description: "Automatically generate Swagger/OpenAPI documentation from your route definitions.",
        icon: <BookOpen size={40} className="icon-docs" />
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

const Features = () => {
    return (
        <section id="features" className="features">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Why <span className="gradient-text">KVolt</span>?
                </motion.h2>

                <motion.div
                    className="features-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        >
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
