export const best_practices = (
    <>
        <h1>Best Practices 🏆</h1>
        <p>Follow these guidelines to build scalable and maintainable KVolt applications.</p>

        <h2>Project Structure</h2>
        <p>KVolt adheres to the standard Go project layout.</p>
        <div className="code-block">
            <pre><code>{`.
├── cmd/
│   └── api/          # Main entry point (main.go)
├── internal/         # Private application code
│   ├── handler/      # HTTP Handlers
│   ├── middleware/   # Custom Middleware
│   ├── service/      # Business Logic
│   └── model/        # Database Models
├── pkg/              # Public/Shared libraries
├── config/           # Configuration files
├── go.mod
└── README.md`}</code></pre>
        </div>

        <h2>Error Handling</h2>
        <p>Don't return raw errors to the client. Use a standardized error response format.</p>
        <div className="code-block">
            <pre><code>{`// BAD
if err != nil {
    return c.String(500, err.Error())
}

// GOOD
if err != nil {
    // Log the actual error internally
    logger.Error("Database fail", err)
    
    // Return a safe message to user
    return c.Status(500).JSON(500, kvolt.Map{
        "error": "Internal Server Error",
        "code":  "DB_ERR",
    })
}`}</code></pre>
        </div>

        <h2>Configuration</h2>
        <p><strong>Do not</strong> hardcode secrets. Always use `config.yaml` or Environment Variables.</p>
        <ul>
            <li>Use <code>.env</code> for local development.</li>
            <li>Use Environment Variables (e.g., <code>DB_PASSWORD</code>) in production (Docker/Kubernetes).</li>
        </ul>

        <h2>Concurrency Safety</h2>
        <div className="alert alert-warning">
            <strong>Critical:</strong> The <code>*kvolt.Context</code> is <strong>NOT thread-safe</strong>.
        </div>
        <p>If you launch a goroutine from a handler, do not pass the context directly.</p>
        <div className="code-block">
            <pre><code>{`// WRONG (Race Condition)
go func() {
    c.JSON(200, ...) // unsafe
}()

// RIGHT
// 1. Copy data you need
userID := c.MustGet("userID").(string)

go func() {
    // use userID safely
    process(userID)
}()`}</code></pre>
        </div>
    </>
);
