export const routing = (
    <>
        <h1>Routing Guide 🛣️</h1>
        <p>KVolt uses a high-performance <strong>Radix Tree</strong> based router for constant-time matching. It supports groups, named parameters, wildcards, and static file serving.</p>

        <h2>Basic Routing</h2>
        <div className="code-block">
            <pre><code>{`app.GET("/hello", handler)
app.POST("/users", createHandler)
app.PUT("/users/:id", updateHandler)
app.DELETE("/users/:id", deleteHandler)`}</code></pre>
        </div>

        <h2>Named Parameters</h2>
        <p>Use <code>:name</code> to capture path segments. These are accessible via <code>c.Params.Get("name")</code>.</p>
        <div className="code-block">
            <pre><code>{`app.GET("/users/:id", func(c *kvolt.Context) error {
    id := c.Params.Get("id")
    return c.String(200, "User ID: " + id)
})`}</code></pre>
        </div>

        <h2>Wildcards</h2>
        <p>Use <code>*name</code> to catch everything after a path (e.g., file paths).</p>
        <div className="code-block">
            <pre><code>{`app.GET("/files/*filepath", func(c *kvolt.Context) error {
    path := c.Params.Get("filepath")
    return c.String(200, "File: " + path)
})`}</code></pre>
        </div>

        <h2>Route Groups</h2>
        <p>Groups allow you to organize routes with common prefixes and middleware. Groups can be nested.</p>
        <div className="code-block">
            <pre><code>{`v1 := app.Group("/v1")
v1.Use(AuthMiddleware) // Applies to all routes in v1

// /v1/profile
v1.GET("/profile", profileHandler) 

// Nested Group: /v1/admin
admin := v1.Group("/admin")
admin.Use(AdminOnlyMiddleware)
admin.GET("/stats", statsHandler)`}</code></pre>
        </div>

        <h2>Static Files</h2>
        <p>Serve static files efficiently from a directory.</p>
        <div className="code-block">
            <pre><code>{`// Serve files from "./public" directory at "/assets" URL
app.Static("/assets", "./public")

// Usage: /assets/style.css -> ./public/style.css`}</code></pre>
        </div>

        <h2>Route Documentation</h2>
        <p>Add descriptions to your routes for auto-generated documentation (like Swagger).</p>
        <div className="code-block">
            <pre><code>{`app.GET("/users", GetUsers).Desc("Returns a list of all users")`}</code></pre>
        </div>

        <h2>Debugging Routes</h2>
        <p>You can inspect all registered routes programmatically.</p>
        <div className="code-block">
            <pre><code>{`routes := app.Routes()
for _, r := range routes {
    fmt.Printf("%s %s - %s\\n", r.Method, r.Path, r.Summary)
}`}</code></pre>
        </div>
    </>
);
