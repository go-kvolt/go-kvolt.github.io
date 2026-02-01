export const middleware = (
    <>
        <h1>Middleware Guide 🛡️</h1>
        <p>KVolt includes a suite of high-performance, battle-tested middleware.</p>

        <h2>Logger (Async)</h2>
        <p>A non-blocking logger that uses a buffered channel (size 10,000) and a background goroutine to write logs. It prioritizes server stability, dropping logs if the buffer overflows under extreme load.</p>
        <div className="code-block">
            <pre><code>app.Use(middleware.Logger())
// Output: [KVolt] 2024/02/01 - 12:00:00 | 200 | 45µs | 127.0.0.1 | GET /ping</code></pre>
        </div>

        <h2>Recovery</h2>
        <p>Catches panics, logs the stack trace, and returns a <code>500 Internal Server Error</code> to the client.</p>
        <div className="code-block">
            <pre><code>app.Use(middleware.Recovery())</code></pre>
        </div>

        <h2>Gzip Compression</h2>
        <p>Compresses responses using Gzip if the client supports it via the <code>Accept-Encoding</code> header. Automatically sets the <code>Vary</code> header.</p>
        <div className="code-block">
            <pre><code>app.Use(middleware.Gzip())</code></pre>
        </div>

        <h2>CORS</h2>
        <p>Standard Cross-Origin Resource Sharing support with sensible defaults.</p>
        <ul>
            <li><strong>Origins:</strong> * (All)</li>
            <li><strong>Methods:</strong> GET, POST, PUT, DELETE, OPTIONS</li>
            <li><strong>Headers:</strong> Origin, Content-Type, Accept, Authorization</li>
        </ul>
        <div className="code-block">
            <pre><code>app.Use(middleware.CORS())</code></pre>
        </div>

        <h2>Rate Limiter</h2>
        <p>A <strong>Token Bucket</strong> based rate limiter keyed by IP address. Includes automatic cleanup for old IP entries to prevent memory leaks.</p>
        <div className="code-block">
            <pre><code>// 20 requests per second, with a burst of 40
                app.Use(middleware.Limiter(20, 40))</code></pre>
        </div>

        <h2>JWT Auth</h2>
        <p>Protects routes with JSON Web Token verification. Supports extracting tokens from Headers, Query params, or Cookies.</p>

        <h3>Configuration</h3>
        <table className="docs-table">
            <thead>
                <tr>
                    <th>Field</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr><td><code>SigningKey</code></td><td>Secret key used to verify tokens (Required).</td></tr>
                <tr><td><code>ContextKey</code></td><td>Key to store claims in context (Default: "user").</td></tr>
                <tr><td><code>TokenLookup</code></td><td>Where to find the token. Examples:<br /><code>"header:Authorization"</code><br /><code>"query:token"</code><br /><code>"cookie:session_id"</code></td></tr>
                <tr><td><code>AuthScheme</code></td><td>Prefix for header tokens (Default: "Bearer").</td></tr>
            </tbody>
        </table>

        <div className="code-block">
            <pre><code>{`app.Use(middleware.JWT(middleware.JWTConfig{
    SigningKey:  "my-secret",
    TokenLookup: "header:Authorization",
    ContextKey:  "user_claims",
}))`}</code></pre>
        </div>
    </>
);
