export const middleware = (
    <>
        <h1>Middleware Guide 🛡️</h1>
        <p>Signature: <code>func(c *context.Context) error</code>. <code>kvolt.Default()</code> already mounts Recovery, RequestID, and MaxBodySize (1MB). Logger and Gzip are opt-in (CPU on every request).</p>

        <h2>Logger</h2>
        <p>Async logger (buffered channel). v2 logs the <strong>real</strong> status code (it used to always print 200).</p>
        <div className="code-block">
            <pre><code>app.Use(middleware.Logger())
# [KVolt] ... | 200 | 45µs | 127.0.0.1 | GET /ping</code></pre>
        </div>

        <h2>Recovery</h2>
        <div className="code-block">
            <pre><code>{`app.Use(middleware.Recovery())
app.Use(middleware.RecoveryWithConfig(middleware.RecoveryConfig{
    LogStackTrace: false, // production
}))`}</code></pre>
        </div>

        <h2>Gzip</h2>
        <p>Compresses <strong>large non-JSON</strong> bodies. JSON APIs and bodies under 1KB are skipped. Writers are pooled.</p>
        <div className="code-block">
            <pre><code>{`app.Use(middleware.Gzip())
app.Use(middleware.GzipWithConfig(middleware.GzipConfig{
    MinSize:          2048,
    SkipContentTypes: nil, // compress JSON too
}))`}</code></pre>
        </div>

        <h2>CORS</h2>
        <div className="code-block">
            <pre><code>app.Use(middleware.CORS())</code></pre>
        </div>

        <h2>Rate limiter</h2>
        <p>Token bucket keyed by <strong>IP host</strong> (not <code>ip:ephemeral-port</code>). Mutex is not held during <code>Next()</code>.</p>
        <div className="code-block">
            <pre><code>app.Use(middleware.Limiter(20, 40))</code></pre>
        </div>

        <h2>Secure headers</h2>
        <div className="code-block">
            <pre><code>{`app.Use(middleware.Secure())
app.Use(middleware.SecureWithConfig(middleware.SecureConfig{
    XFrameOptions: "SAMEORIGIN",
    HSTSMaxAge:    31536000,
}))`}</code></pre>
        </div>

        <h2>Max body size</h2>
        <div className="code-block">
            <pre><code>app.Use(middleware.MaxBodySize(1 &lt;&lt; 20)) // already in Default()</code></pre>
        </div>

        <h2>Request ID</h2>
        <div className="code-block">
            <pre><code>{`app.Use(middleware.RequestID())
id, _ := c.Get(middleware.RequestIDKey)`}</code></pre>
        </div>

        <h2>Timeout</h2>
        <p>Deadline on <code>c.Request.Context()</code>. Handlers that hit Postgres should honor cancel.</p>
        <div className="code-block">
            <pre><code>{`app.Use(middleware.Timeout(15 * time.Second))`}</code></pre>
        </div>

        <h2>JWT</h2>
        <div className="code-block">
            <pre><code>{`app.Use(middleware.JWT(middleware.JWTConfig{
    SigningKey:  "my-secret",
    TokenLookup: "header:Authorization",
    ContextKey:  "user_claims",
}))`}</code></pre>
        </div>
    </>
);
