export const templates = (
    <>
        <h1>HTML Templates 🎨</h1>
        <p>KVolt includes a built-in template engine wrapper around Go's <code>html/template</code>.</p>

        <h2>Setup</h2>
        <p>First, load your templates globally using <code>app.LoadHTMLGlob</code>.</p>
        <div className="code-block">
            <pre><code>{`func main() {
    app := kvolt.New()
    
    // Load all HTML files in the views directory
    app.LoadHTMLGlob("views/*.html")
    
    app.GET("/", func(c *context.Context) error {
        // Render "index.html" with data
        return c.RenderHTML(200, "index.html", map[string]interface{}{
            "title": "Welcome to KVolt",
        })
    })
    
    app.Run(":8080")
}`}</code></pre>
        </div>

        <h2>Real-World Example: Template Inheritance</h2>
        <p>Go templates don't support class-based inheritance, but you can achieve it using <code>define</code> and <code>template</code>.</p>

        <h3>Base Layout</h3>
        <p><code>views/layouts/base.html</code>:</p>
        <div className="code-block">
            <pre><code>{`{{ define "base" }}
<!DOCTYPE html>
<html>
<head>
    <title>MyApp - {{ .Title }}</title>
</head>
<body>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>
    
    <main>
        {{ template "content" . }}
    </main>
    
    <footer>&copy; 2024</footer>
</body>
</html>
{{ end }}`}</code></pre>
        </div>

        <h3>Page Content</h3>
        <p><code>views/home.html</code>:</p>
        <div className="code-block">
            <pre><code>{`{{ define "content" }}
    <h1>Welcome, {{ .Name }}!</h1>
    <p>This is the home page.</p>
{{ end }}`}</code></pre>
        </div>

        <h3>Usage</h3>
        <div className="code-block">
            <pre><code>{`// Load both files (they merge into one template set)
app.LoadHTMLGlob("views/**/*")

app.GET("/", func(c *context.Context) error {
    // Render "base" but valid because "content" is defined in home.html
    return c.RenderHTML(200, "base", map[string]interface{}{
        "Title": "Home",
        "Name": "Admin",
    })
})`}</code></pre>
        </div>

        <h2>Raw HTML method</h2>
        <p>If you just want to send a raw HTML string without templates:</p>
        <div className="code-block">
            <pre><code>{`app.GET("/raw", func(c *context.Context) error {
    return c.HTML(200, "<h1>Hello World</h1>")
})`}</code></pre>
        </div>
    </>
);
