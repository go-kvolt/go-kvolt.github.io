import { motion } from 'framer-motion';
import {
    Zap,
    Users,
    KeyRound,
    ShieldCheck,
    Cpu,
    Lock,
    ClipboardList,
    Activity,
    Boxes
} from 'lucide-react';
import './Features.css';

const features = [
    {
        title: "~81k Req/s Radix Router",
        description: "10.9ns static lookups with zero heap allocations. Beating Gin, Echo, and Chi on real TCP benchmarks.",
        badge: "Performance",
        icon: <Zap size={32} className="feat-icon cyan" />
    },
    {
        title: "Multi-Tenant Architecture",
        description: "Built-in tenant isolation via headers, route parameters, or verified JWT claims with automatic 403 enforcement.",
        badge: "Architecture",
        icon: <Users size={32} className="feat-icon purple" />
    },
    {
        title: "Enterprise RBAC & Auth",
        description: "Granular access control gates: RequirePermission, RequireAny, RequireAll, with case-insensitive Bearer & KeyFunc.",
        badge: "Security",
        icon: <KeyRound size={32} className="feat-icon yellow" />
    },
    {
        title: "Idempotency Replay Defense",
        description: "Safe transaction replays for POST/PUT payments via in-memory or Redis-backed stores with single-flight locking.",
        badge: "Fintech",
        icon: <Lock size={32} className="feat-icon green" />
    },
    {
        title: "Zero Data Races",
        description: "Concurrently audited on Linux and Windows. All test seams, channels, and globals protected by design.",
        badge: "Reliability",
        icon: <ShieldCheck size={32} className="feat-icon cyan" />
    },
    {
        title: "Audited & CVE-Free",
        description: "Continuous gosec static analysis in CI with 0 issues. Running Go 1.27.4 toolchain with clean govulncheck.",
        badge: "Compliance",
        icon: <ShieldCheck size={32} className="feat-icon green" />
    },
    {
        title: "Compliance Audit Logging",
        description: "Capture tenant, actor, route, status code, and latency in structured audit events for SOX/SOC2 compliance.",
        badge: "Enterprise",
        icon: <ClipboardList size={32} className="feat-icon purple" />
    },
    {
        title: "Native Observability",
        description: "Drop-in OpenTelemetry HTTP tracing and Prometheus metrics without bloating the lean core framework.",
        badge: "DevOps",
        icon: <Activity size={32} className="feat-icon yellow" />
    },
    {
        title: "Dual HTTP & gRPC",
        description: "Run REST endpoints and high-throughput gRPC services side-by-side with coordinated graceful shutdown.",
        badge: "Hybrid",
        icon: <Boxes size={32} className="feat-icon cyan" />
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
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
        <section className="features-section" id="features">
            <div className="container">
                <div className="features-header">
                    <span className="feat-section-badge">Production Architecture</span>
                    <h2 className="section-title">
                        Engineered for <span className="gradient-text">Mission-Critical</span> Scale
                    </h2>
                    <p className="section-desc">
                        Everything required to run modern, secure, multi-tenant services in production without pulling in dozens of unvetted packages.
                    </p>
                </div>

                <motion.div
                    className="features-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div className="card-top">
                                <div className="icon-wrapper">
                                    {feature.icon}
                                </div>
                                <span className="card-badge">{feature.badge}</span>
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                            <div className="card-glow"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
