export const context = (
    <>
        <h1>Context API 📦</h1>
        <p>The <code>context.Context</code> is the heart of KVolt. It wraps the <code>http.Request</code> and <code>http.ResponseWriter</code> and adds powerful helper methods.</p>

        <h2>Response Methods</h2>
        <p>KVolt provides easy ways to send responses in various formats.</p>
        <div className="code-block">
            <pre><code>{`// JSON
c.JSON(200, kvolt.Map{"message": "Success"})

// String
c.String(200, "Hello %s", "World")

// HTML (Raw)
c.HTML(200, "<h1>Hello</h1>")

// HTML (Template)
c.RenderHTML(200, "index.html", data)

// File (Efficient Stream)
c.File("./downloads/report.pdf")`}</code></pre>
        </div>

        <h2>Request Binding</h2>
        <p><strong>Strict Binding:</strong> Bind JSON body to struct automatically with validation.</p>
        <div className="code-block">
            <pre><code>{`type User struct {
    Name  string \`json:"name" validate:"required"\`
    Email string \`json:"email" validate:"required,email"\`
}
var u User
if err := c.Bind(&u); err != nil {
    return c.Status(400).String(400, err.Error())
}`}</code></pre>
        </div>

        <h2>Data Sharing (Keys)</h2>
        <p>Share data between middleware and handlers safely using Context Keys.</p>
        <div className="code-block">
            <pre><code>{`// In Middleware
func Auth(c *kvolt.Context) error {
    c.Set("user_id", "12345")
    c.Next()
    return nil
}

// In Handler
func Profile(c *kvolt.Context) error {
    userID := c.MustGet("user_id").(string) // Panics if missing
    // or
    if val, ok := c.Get("user_id"); ok {
        // ...
    }
}`}</code></pre>
        </div>

        <h2>File Uploads</h2>
        <p>Handle multipart form file uploads easily.</p>
        <div className="code-block">
            <pre><code>{`// Get file header
file, err := c.FormFile("profile_pic")
if err != nil {
    return c.Status(400).String(400, "Bad Request")
}

// Save to disk
c.SaveUploadedFile(file, "./uploads/" + file.Filename)`}</code></pre>
        </div>

        <h2>WebSockets</h2>
        <p>Upgrade HTTP connections to WebSocket <code>*websocket.Conn</code>.</p>
        <div className="code-block">
            <pre><code>{`conn, err := c.Upgrade()
if err != nil {
    // Handle error
}`}</code></pre>
        </div>

        <h2>Zero-Allocation</h2>
        <p>Context objects are pooled using <code>sync.Pool</code>. <br /><strong>Warning:</strong> The Context is <strong>not thread-safe</strong>. Do not pass the context pointer to background goroutines. If you need it, copy the data you need from it first.</p>
    </>
);
