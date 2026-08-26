export const context = (
    <>
        <h1>Context API 📦</h1>
        <p>The <code>context.Context</code> wraps <code>http.Request</code> and <code>http.ResponseWriter</code> with helpers. Import <code>github.com/go-kvolt/kvolt/context</code> — it is not <code>*kvolt.Context</code>.</p>

        <h2>JSON, text, HTML</h2>
        <div className="code-block">
            <pre><code>{`c.JSON(200, map[string]string{"message": "Success"})
c.String(200, "Hello %s", "World")
c.HTML(200, "<h1>Hello</h1>")
c.RenderHTML(200, "index.html", data)
c.File("./downloads/report.pdf")`}</code></pre>
        </div>
        <p>JSON, text, and HTML responses set <code>charset=utf-8</code>.</p>

        <h2>Status</h2>
        <p><code>Status(code)</code> records the code. It does <strong>not</strong> write headers immediately, so <code>Status(201).JSON(...)</code> can still set <code>Content-Type</code>. Prefer <code>c.JSON(code, body)</code>.</p>
        <div className="code-block">
            <pre><code>{`return c.JSON(404, map[string]string{"error": "Not Found"})`}</code></pre>
        </div>

        <h2>Params and query</h2>
        <div className="code-block">
            <pre><code>{`id := c.Params.Get("id")     // /users/:id
q := c.Query("q")            // /search?q=foo`}</code></pre>
        </div>

        <h2>Request binding</h2>
        <ul>
            <li><code>BindJSON</code> — decode only (fast path: invoices, checkout).</li>
            <li><code>Bind</code> — decode then validate (<code>validate</code> tags).</li>
        </ul>
        <div className="code-block">
            <pre><code>{`type User struct {
    Name  string \`json:"name" validate:"required"\`
    Email string \`json:"email" validate:"required,email"\`
}
var u User
if err := c.BindJSON(&u); err != nil {
    return c.JSON(400, map[string]string{"error": err.Error()})
}
if err := c.Bind(&u); err != nil {
    return c.JSON(400, map[string]string{"error": err.Error()})
}`}</code></pre>
        </div>
        <p>v2 streams the body for <code>BindJSON</code>. Do not reuse a pooled request buffer for JSON strings — that aliased memory under high concurrency.</p>

        <h2>Data sharing</h2>
        <div className="code-block">
            <pre><code>{`c.Set("user_id", "12345")
if val, ok := c.Get("user_id"); ok {
    // ...
}`}</code></pre>
        </div>

        <h2>Uploads and WebSockets</h2>
        <div className="code-block">
            <pre><code>{`file, err := c.FormFile("profile_pic")
c.SaveUploadedFile(file, "./uploads/"+file.Filename)

conn, err := c.Upgrade() // same-origin check by default`}</code></pre>
        </div>

        <h2>Zero-allocation</h2>
        <p>Contexts come from <code>sync.Pool</code>. <strong>Not thread-safe.</strong> Do not pass <code>*Context</code> to a background goroutine — copy the values you need first.</p>
    </>
);
