export const quickstart = (
    <>
        <h1>Quick Start Guide ⚡</h1>
        <p>Build enterprise-ready HTTP microservices with production defaults out-of-the-box. KVolt gives you zero-allocation routing, built-in panic recovery, and production timeouts with zero external dependencies.</p>
        
        <h2>Minimal Production Service</h2>
        <div className="code-block">
            <pre><code>{`package main

import (
    "log"
    "net/http"

    "github.com/go-kvolt/kvolt/v2"
    "github.com/go-kvolt/kvolt/v2/context"
    "github.com/go-kvolt/kvolt/v2/middleware"
)

type CreateUserRequest struct {
    Name  string \`json:"name" validate:"required"\`
    Email string \`json:"email" validate:"required,email"\`
}

func main() {
    // kvolt.Default() includes Recovery, RequestID, and 1MB MaxBodyLimit
    app := kvolt.Default()

    // Production security & structured logging
    app.Use(middleware.Secure())
    app.Use(middleware.Logger())

    // Health check endpoint (~10.9ns static match)
    app.GET("/healthz", func(c *context.Context) error {
        return c.JSON(http.StatusOK, map[string]string{
            "status":  "healthy",
            "version": "v2.3.0",
        })
    })

    // Typed JSON body binding & validation
    app.POST("/api/v1/users", func(c *context.Context) error {
        var req CreateUserRequest
        if err := c.BindJSON(&req); err != nil {
            return c.JSON(http.StatusBadRequest, map[string]string{
                "error": err.Error(),
            })
        }

        return c.JSON(http.StatusCreated, map[string]any{
            "id":    "usr_01HKVZ...",
            "name":  req.Name,
            "email": req.Email,
        })
    })

    // app.Run sets Read/Write/Idle timeouts and intercepts SIGINT/SIGTERM for zero-drop shutdown
    log.Println("Starting KVolt service on :8080...")
    if err := app.Run(":8080"); err != nil {
        log.Fatalf("Server stopped: %v", err)
    }
}`}</code></pre>
        </div>

        <h2>Server Lifecycle & Timeouts</h2>
        <ul>
            <li><code>app.Run(addr)</code> — Production runner: sets defensive <code>ReadTimeout</code> (15s), <code>WriteTimeout</code> (15s), <code>IdleTimeout</code> (60s), and intercepts <code>os.Interrupt</code> / <code>SIGTERM</code> for graceful draining.</li>
            <li><code>app.RunTLS(addr, certFile, keyFile)</code> — Production TLS runner with HTTP/2 negotiation and modern cipher suites.</li>
            <li><code>app.ListenAndServe(addr)</code> — Standard library direct runner without forced timeouts (ideal for local development or behind managed reverse proxies like Envoy/Cloudflare).</li>
            <li><code>app.Shutdown(ctx)</code> — Manual graceful shutdown hook when managing custom lifecycle contexts.</li>
        </ul>

        <h2>Next Steps</h2>
        <div className="alert alert-tip">
            Explore <strong>Middleware</strong> for multi-tenancy and RBAC gates, or check out <strong>TestKit</strong> to write zero-race integration tests in 3 lines of Go code.
        </div>
    </>
);
