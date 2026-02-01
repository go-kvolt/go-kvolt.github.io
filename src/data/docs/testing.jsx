export const testing = (
    <>
        <h1>TestKit 🧪</h1>
        <p>KVolt ships with a `testkit` package to make unit testing your handlers a breeze. It wraps `net/http/httptest` with a fluent API.</p>

        <h2>Usage</h2>
        <div className="code-block">
            <pre><code>{`import (
    "testing"
    "github.com/go-kvolt/kvolt"
    "github.com/go-kvolt/kvolt/pkg/testkit"
)

func TestUserEndpoint(t *testing.T) {
    // 1. Setup App
    app := kvolt.New()
    app.GET("/hello", func(c *kvolt.Context) error {
        return c.String(200, "Hello World")
    })

    // 2. Create TestClient
    ts := testkit.New(app)

    // 3. Perform Requests & Assert
    res := ts.Get(t, "/hello")
    
    res.AssertStatus(t, 200)
    res.AssertBody(t, "Hello World")
}`}</code></pre>
        </div>

        <h2>API Reference</h2>
        <ul>
            <li><code>New(http.Handler)</code>: initialized the test kit.</li>
            <li><code>Get(t, path)</code>: Performs a GET request.</li>
            <li><code>Post(t, path, body)</code>: Performs a POST request (body is auto-marshaled to JSON).</li>
            <li><code>AssertStatus(t, code)</code>: Verifies HTTP status code.</li>
            <li><code>AssertBody(t, contains)</code>: Verifies response body contains string.</li>
        </ul>
    </>
);
