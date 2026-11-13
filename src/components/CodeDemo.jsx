import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Terminal, Code2, Users, ShieldCheck, TestTube } from 'lucide-react';
import './CodeDemo.css';

const snippets = [
    {
        id: 'quickstart',
        title: 'main.go',
        tabLabel: 'Fast API & Routing',
        icon: <Code2 size={16} />,
        code: `package main

import (
    "log"

    "github.com/go-kvolt/kvolt/v2"
    "github.com/go-kvolt/kvolt/v2/context"
    "github.com/go-kvolt/kvolt/v2/middleware"
)

func main() {
    // Default includes Recovery, RequestID, and 1MB MaxBodySize
    app := kvolt.Default()
    app.Use(middleware.Logger())
    app.Use(middleware.CORS(middleware.CORSConfig{
        AllowOrigins: []string{"https://myapp.com"},
        AllowMethods: []string{"GET", "POST", "PUT", "DELETE"},
    }))

    app.GET("/users/:id", func(c *context.Context) error {
        id := c.Param("id")
        return c.JSON(200, map[string]any{
            "id":     id,
            "status": "active",
        })
    })

    log.Fatal(app.Run(":8080")) // Graceful shutdown & slowloris timeouts
}`
    },
    {
        id: 'multitenant',
        title: 'tenant.go',
        tabLabel: 'Multi-Tenant & RBAC',
        icon: <Users size={16} />,
        code: `package main

import (
    "github.com/go-kvolt/kvolt/v2"
    "github.com/go-kvolt/kvolt/v2/context"
    "github.com/go-kvolt/kvolt/v2/middleware"
)

func RegisterTenantRoutes(app *kvolt.Engine) {
    // Isolated tenant group with RBAC permission gate
    v1 := app.Group("/api/v1")
    v1.Use(middleware.Tenant(middleware.TenantConfig{
        Header:   "X-Tenant-ID",
        Claim:    "tenant_id", // Validates JWT claim against header
        Required: true,
    }))
    v1.Use(middleware.RequirePermission("invoices:read"))

    v1.GET("/invoices", func(c *context.Context) error {
        tenant := middleware.TenantID(c)
        return c.JSON(200, map[string]any{
            "tenant_id": tenant,
            "data":      []string{"inv_101", "inv_102"},
        })
    })
}`
    },
    {
        id: 'idempotency',
        title: 'orders.go',
        tabLabel: 'Idempotency & Audit',
        icon: <ShieldCheck size={16} />,
        code: `package main

import (
    "github.com/go-kvolt/kvolt/v2"
    "github.com/go-kvolt/kvolt/v2/context"
    "github.com/go-kvolt/kvolt/v2/middleware"
)

func RegisterOrders(app *kvolt.Engine) {
    // Automatic replay defense for POST/PUT payments
    app.Use(middleware.Idempotency(middleware.IdempotencyConfig{
        Header: "Idempotency-Key",
        TTL:    300, // 5 minute cached replay
    }))

    app.Use(middleware.Audit(func(e middleware.AuditEvent) {
        log.Printf("[AUDIT] tenant=%s user=%s path=%s duration=%s",
            e.TenantID, e.Actor, e.Path, e.Duration)
    }))

    app.POST("/checkout", func(c *context.Context) error {
        return c.JSON(201, map[string]string{"status": "charged"})
    })
}`
    },
    {
        id: 'testing',
        title: 'api_test.go',
        tabLabel: 'Zero-Race TestKit',
        icon: <TestTube size={16} />,
        code: `package main

import (
    "testing"

    "github.com/go-kvolt/kvolt/v2"
    "github.com/go-kvolt/kvolt/v2/context"
    "github.com/go-kvolt/kvolt/v2/pkg/testkit"
)

func TestGetUser(t *testing.T) {
    app := kvolt.New()
    app.GET("/users/:id", func(c *context.Context) error {
        return c.JSON(200, map[string]string{"id": c.Param("id")})
    })

    client := testkit.New(app)
    res := client.Get("/users/42").Send()

    res.AssertStatus(t, 200)
    res.AssertJSON(t, map[string]string{"id": "42"})
}`
    }
];

const CodeDemo = () => {
    const [activeTab, setActiveTab] = useState(snippets[0].id);
    const [copied, setCopied] = useState(false);

    const currentSnippet = snippets.find(s => s.id === activeTab) || snippets[0];

    const handleCopy = () => {
        navigator.clipboard.writeText(currentSnippet.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="code-demo" id="demo">
            <div className="container">
                <div className="demo-header-section">
                    <span className="demo-badge">Developer Ergonomics</span>
                    <h2 className="demo-title">
                        Engineered for <span className="gradient-text">Clean Code</span> &amp; Zero Friction
                    </h2>
                    <p className="demo-subtitle">
                        From basic microservices to multi-tenant fintech platforms — discover how expressive KVolt is.
                    </p>
                </div>

                {/* Tab selector bar */}
                <div className="demo-tabs-bar">
                    {snippets.map((tab) => (
                        <button
                            key={tab.id}
                            className={`demo-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.icon}
                            <span>{tab.tabLabel}</span>
                        </button>
                    ))}
                </div>

                <motion.div
                    className="code-window"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="code-header">
                        <div className="window-actions">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>
                        <div className="window-title-wrapper">
                            <Terminal size={14} className="terminal-icon" />
                            <span className="window-title">{currentSnippet.title}</span>
                        </div>
                        <button
                            className="copy-btn"
                            onClick={handleCopy}
                            aria-label="Copy Code"
                            title="Copy code"
                        >
                            {copied ? <Check size={14} className="check-icon" /> : <Copy size={14} />}
                            <span className="copy-text">{copied ? 'Copied!' : 'Copy'}</span>
                        </button>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.pre
                            key={currentSnippet.id}
                            className="code-content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <code>{currentSnippet.code}</code>
                        </motion.pre>
                    </AnimatePresence>

                    {/* Decorative glow beneath the window */}
                    <div className="code-glow"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default CodeDemo;
