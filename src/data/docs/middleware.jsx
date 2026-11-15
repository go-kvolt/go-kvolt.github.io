export const middleware = (
    <>
        <h1>Middleware Architecture 🛡️</h1>
        <p>KVolt middleware follows the clean, composable handler signature: <code>func(c *context.Context) error</code>. Execution is chained through an onion model with zero heap allocations in the critical path.</p>

        <div className="alert alert-tip">
            <code>kvolt.Default()</code> pre-configures <strong>Recovery</strong>, <strong>RequestID</strong>, and <strong>MaxBodySize (1MB)</strong>. All other middleware can be chained globally on the engine or selectively on Route Groups.
        </div>

        <h2>1. Multi-Tenant Isolation</h2>
        <p>Extract and isolate tenants per-request from headers, URL parameters, or verified JWT claims. Enforces strict 403 Forbidden rejection when the tenant is missing or unauthorized.</p>
        <div className="code-block">
            <pre><code>{`// Header-based tenant extraction (default: X-Tenant-ID)
app.Use(middleware.Tenant())

// Advanced config with path fallback or JWT claim lookup
app.Use(middleware.TenantWithConfig(middleware.TenantConfig{
    HeaderKey: "X-Org-ID",
    ParamKey:  "orgId",
    Enforce:   true,
}))

// In any handler:
tenantID := c.Get(middleware.TenantKey).(string)`}</code></pre>
        </div>

        <h2>2. Role-Based Access Control (RBAC)</h2>
        <p>Granular route gating with fine-grained role and permission checks.</p>
        <div className="code-block">
            <pre><code>{`adminGroup := app.Group("/api/admin")
adminGroup.Use(middleware.JWT(middleware.JWTConfig{
    SigningKey: "secret-key",
}))

// Require explicit role
adminGroup.GET("/metrics", middleware.RequireRole("superadmin"), handleMetrics)

// Require specific permissions
adminGroup.POST("/users", middleware.RequirePermission("users:write"), handleCreateUser)

// Require any matching role or all permissions
adminGroup.DELETE("/cache", middleware.RequireAny("admin", "operator"), handlePurge)
adminGroup.POST("/deploy", middleware.RequireAll("deploy:trigger", "deploy:prod"), handleDeploy)`}</code></pre>
        </div>

        <h2>3. Idempotency Replay Defense</h2>
        <p>Prevents duplicate execution of sensitive payment or financial transactions across network retries. Supports both in-memory concurrent maps and distributed Redis stores with single-flight locking.</p>
        <div className="code-block">
            <pre><code>{`// Protect payment routes with in-memory single-flight idempotency
app.POST("/api/charges", 
    middleware.Idempotency(middleware.DefaultIdempotencyConfig()), 
    handleCharge,
)`}</code></pre>
        </div>

        <h2>4. Compliance Audit Logging</h2>
        <p>Capture structured audit events for enterprise SOC2, HIPAA, or ISO 27001 compliance tracking. Records tenant, actor, route, IP, status code, and latency with customizable event sinks.</p>
        <div className="code-block">
            <pre><code>{`app.Use(middleware.AuditWithConfig(middleware.AuditConfig{
    Sink: func(event middleware.AuditEvent) {
        log.Printf("[AUDIT] tenant=%s actor=%s %s %s -> %d (%v)",
            event.TenantID, event.ActorID, event.Method, event.Path, event.StatusCode, event.Duration)
    },
}))`}</code></pre>
        </div>

        <h2>5. Secure Headers & CSRF Protection</h2>
        <p>HSTS, X-Frame-Options, X-Content-Type-Options, and cryptographic double-submit HMAC CSRF verification.</p>
        <div className="code-block">
            <pre><code>{`// Security headers
app.Use(middleware.Secure())

// Double-submit cookie CSRF with HMAC token secret verification
app.Use(middleware.CSRFWithConfig(middleware.CSRFConfig{
    Secret:     []byte("super-secret-hmac-32-byte-key!"),
    CookieName: "_csrf",
    HeaderName: "X-CSRF-Token",
}))`}</code></pre>
        </div>

        <h2>6. Rate Limiting</h2>
        <p>Token bucket algorithm keyed by remote IP host without port churn. Lock is held only for token acquisition, never across handler execution.</p>
        <div className="code-block">
            <pre><code>{`// 20 requests per second with burst of 40
app.Use(middleware.Limiter(20, 40))`}</code></pre>
        </div>

        <h2>7. JWT Authentication</h2>
        <p>Supports static signing keys or dynamic <code>KeyFunc</code> for RS256/JWKS key rotation.</p>
        <div className="code-block">
            <pre><code>{`app.Use(middleware.JWT(middleware.JWTConfig{
    SigningKey:  "my-strong-hmac-secret",
    TokenLookup: "header:Authorization",
    ContextKey:  "claims",
}))`}</code></pre>
        </div>

        <h2>8. Performance & Diagnostics</h2>
        <ul>
            <li><code>middleware.Gzip()</code> — Pooled gzip compression for text/HTML over 1KB (skips JSON by default for minimal CPU overhead).</li>
            <li><code>middleware.Timeout(10 * time.Second)</code> — Context deadline cancellation for downstream database operations.</li>
            <li><code>middleware.Logger()</code> — Async non-blocking buffered request logger reporting true response status codes.</li>
            <li><code>middleware.RequestID()</code> — Generates UUID4 or propagates incoming <code>X-Request-ID</code>.</li>
        </ul>
    </>
);
