export const testing = (
    <>
        <h1>TestKit: Zero-Race Testing 🧪</h1>
        <p>KVolt includes <code>pkg/testkit</code> — a high-performance fluent testing harness wrapping <code>net/http/httptest</code>. Test your HTTP handlers, middleware, and full app lifecycles with zero boilerplate.</p>

        <h2>Basic Unit & Integration Test</h2>
        <div className="code-block">
            <pre><code>{`package main_test

import (
    "net/http"
    "testing"

    "github.com/go-kvolt/kvolt/v2"
    "github.com/go-kvolt/kvolt/v2/context"
    "github.com/go-kvolt/kvolt/v2/pkg/testkit"
)

func TestUserEndpoint(t *testing.T) {
    // 1. Setup isolated test app
    app := kvolt.New()
    app.GET("/users/:id", func(c *context.Context) error {
        return c.JSON(http.StatusOK, map[string]string{
            "id":   c.Param("id"),
            "role": "admin",
        })
    })

    // 2. Initialize TestKit runner
    client := testkit.New(app)

    // 3. Perform request and fluent assertions
    res := client.Get(t, "/users/42")
    res.AssertStatus(t, http.StatusOK)
    res.AssertHeader(t, "Content-Type", "application/json; charset=utf-8")
    res.AssertBodyContains(t, \`"id":"42"\`)
}`}</code></pre>
        </div>

        <h2>POST JSON Payload Testing</h2>
        <div className="code-block">
            <pre><code>{`func TestCreateUser(t *testing.T) {
    app := kvolt.New()
    app.POST("/users", func(c *context.Context) error {
        var body map[string]string
        if err := c.BindJSON(&body); err != nil {
            return c.JSON(http.StatusBadRequest, err.Error())
        }
        return c.JSON(http.StatusCreated, body)
    })

    client := testkit.New(app)
    
    payload := map[string]string{"name": "Alice", "email": "alice@example.com"}
    res := client.PostJSON(t, "/users", payload)
    
    res.AssertStatus(t, http.StatusCreated)
    res.AssertBodyContains(t, "alice@example.com")
}`}</code></pre>
        </div>

        <h2>Concurrent Test Safety</h2>
        <div className="code-block">
            <pre><code>{`// Safe to run with -race flag enabled in CI
func TestConcurrentRequests(t *testing.T) {
    app := kvolt.Default()
    app.GET("/ping", func(c *context.Context) error {
        return c.String(http.StatusOK, "pong")
    })

    client := testkit.New(app)

    t.Run("parallel workers", func(t *testing.T) {
        for i := 0; i < 50; i++ {
            t.Run("worker", func(t *testing.T) {
                t.Parallel()
                res := client.Get(t, "/ping")
                res.AssertStatus(t, http.StatusOK)
            })
        }
    })
}`}</code></pre>
        </div>
    </>
);
