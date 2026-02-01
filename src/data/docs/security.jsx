export const security = (
    <>
        <h1>Security Guide 🛡️</h1>
        <p>Security is a shared responsibility. KVolt provides the tools, but you must use them correctly.</p>

        <h2>1. HTTPS / TLS</h2>
        <p>Never run a production app over HTTP. Use KVolt's built-in `RunTLS` or a reverse proxy like Nginx/Cloudflare to handle SSL.</p>
        <div className="code-block">
            <pre><code>{`// Enable HTTP/2 and TLS
app.RunTLS(":443", "cert.pem", "key.pem")`}</code></pre>
        </div>

        <h2>2. Security Headers</h2>
        <p>Use middleware to set security headers on every response.</p>
        <div className="code-block">
            <pre><code>{`func SecurityMiddleware(c *kvolt.Context) error {
    c.Writer.Header().Set("X-Content-Type-Options", "nosniff")
    c.Writer.Header().Set("X-Frame-Options", "DENY")
    c.Writer.Header().Set("X-XSS-Protection", "1; mode=block")
    c.Next()
    return nil
}`}</code></pre>
        </div>

        <h2>3. Input Validation</h2>
        <p>Always validate user input. KVolt's `Bind` method makes this easy with struct tags.</p>
        <ul>
            <li>Use <code>validate:"required"</code> to prevent nil pointers.</li>
            <li>Use <code>validate:"max=100"</code> to prevent buffer overflows or large payloads.</li>
            <li>Use <code>validate:"email"</code> or <code>uuid</code> to ensure format correctness.</li>
        </ul>

        <h2>4. CSRF Protection</h2>
        <p>If you are building a server-side rendered app (using Templates) with session cookies, you <strong>must</strong> implement CSRF protection. KVolt does not strictly enforce this for APIs (which typically use Bearer tokens), but for HTML forms, use a token approach.</p>

        <h2>5. SQL Injection</h2>
        <p>KVolt does not include an ORM by default. If using `database/sql`, <strong>always</strong> use parameterized queries.</p>
        <div className="code-block">
            <pre><code>{`// BAD
db.Query("SELECT * FROM users WHERE name = '" + name + "'")

// GOOD
db.Query("SELECT * FROM users WHERE name = ?", name)`}</code></pre>
        </div>
    </>
);
