export const logging = (
    <>
        <h1>Structured Logging 📝</h1>
        <p>KVolt includes a built-in structured logger that outputs JSON logs, suitable for ingestion by tools like Datadog, ELK, or CloudWatch.</p>

        <h2>Features</h2>
        <ul>
            <li><strong>Thread-Safe:</strong> Protected by Mutex.</li>
            <li><strong>Levels:</strong> DEBUG, INFO, WARN, ERROR.</li>
            <li><strong>Structure:</strong> Outputs consistent JSON with timestamp, level, message, and fields.</li>
        </ul>

        <h2>Usage</h2>
        <div className="code-block">
            <pre><code>{`import (
    "os"
    "github.com/go-kvolt/kvolt/pkg/logger"
)

// Create Logger
log := logger.New(os.Stdout, logger.INFO)
// Or use default
// log := logger.Default()

// Log Information
log.Info("Server started", map[string]interface{}{
    "port": 8080,
    "env":  "production",
})

// Log Error
if err != nil {
    log.Error("Database connection failed", err)
}`}</code></pre>
        </div>

        <h2>Log Format</h2>
        <p>The output is strictly JSON:</p>
        <div className="code-block">
            <pre><code>{`{
  "level": "INFO",
  "time": "2024-02-01T12:00:00Z",
  "message": "Server started",
  "fields": {
    "port": 8080,
    "env": "production"
  }
}`}</code></pre>
        </div>
    </>
);
