export const security = (
    <>
        <h1>Security & Hardening Guide 🛡️</h1>
        <p>KVolt is engineered from the ground up for high-security enterprise environments. Every release is continuously audited with <code>gosec</code> static analysis (0 findings) and vetted against CVE vulnerabilities.</p>

        <h2>1. HTTPS & HTTP/2 Enforcement</h2>
        <p>Always terminate TLS in production. KVolt provides <code>RunTLS</code> with automatic HTTP/2 negotiation, modern TLS cipher suites, and defensive TCP timeouts.</p>
        <div className="code-block">
            <pre><code>{`// Production TLS with HTTP/2 and defensive timeouts
if err := app.RunTLS(":443", "/etc/ssl/cert.pem", "/etc/ssl/key.pem"); err != nil {
    log.Fatalf("TLS server failed: %v", err)
}`}</code></pre>
        </div>

        <h2>2. Cryptographic CSRF Defense</h2>
        <p>KVolt includes built-in CSRF middleware implementing double-submit cookie patterns with HMAC cryptographic token verification.</p>
        <div className="code-block">
            <pre><code>{`app.Use(middleware.CSRFWithConfig(middleware.CSRFConfig{
    Secret:     []byte("32-byte-long-cryptographic-secret!"),
    CookieName: "_csrf_token",
    HeaderName: "X-CSRF-Token",
    CookieSameSite: http.SameSiteStrictMode,
    CookieSecure:   true,
}))`}</code></pre>
        </div>

        <h2>3. Security Headers Suite</h2>
        <p>Add defense-in-depth headers with zero configuration: HSTS, X-Frame-Options, X-Content-Type-Options, and Referrer-Policy.</p>
        <div className="code-block">
            <pre><code>{`// Enables HSTS (1 year), DENY frame options, and nosniff content-type
app.Use(middleware.Secure())`}</code></pre>
        </div>

        <h2>4. Path Traversal & Static Sanitization</h2>
        <p>KVolt's static file handler strictly sanitizes relative paths (<code>filepath.Clean</code>) and validates that requested files cannot escape the configured root directory, preventing directory traversal attacks (<code>../../etc/passwd</code>).</p>
        <div className="code-block">
            <pre><code>{`// Safe static file serving with directory breakout protection
app.Static("/assets", "./public")`}</code></pre>
        </div>

        <h2>5. JWT Key Rotation & Verification</h2>
        <p>Supports static signing keys or dynamic <code>KeyFunc</code> for RS256/ES256 JWKS key rotation, preventing key-confusion attacks.</p>
        <div className="code-block">
            <pre><code>{`app.Use(middleware.JWT(middleware.JWTConfig{
    SigningKey:  os.Getenv("JWT_SIGNING_KEY"),
    TokenLookup: "header:Authorization",
    ContextKey:  "user_claims",
}))`}</code></pre>
        </div>

        <h2>6. Automated CI Security Verification</h2>
        <ul>
            <li><strong>gosec AST scanner:</strong> 0 findings across all 72 framework source files.</li>
            <li><strong>Race detector:</strong> Ran across the entire test suite on Linux and Windows with <code>go test -race ./...</code> (0 race conditions).</li>
            <li><strong>Memory safety:</strong> Request bodies are bound with explicit byte limits (<code>MaxBodySize</code>) to protect against memory exhaustion (DoS).</li>
        </ul>
    </>
);
