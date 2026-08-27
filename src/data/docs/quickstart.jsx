export const quickstart = (
    <>
        <h1>Quick Start</h1>
        <p>Production defaults first. Add Logger (and Gzip) only if you want them.</p>
        <div className="code-block">
            <pre><code>{`package main

import (
    "github.com/go-kvolt/kvolt/v2"
    "github.com/go-kvolt/kvolt/v2/context"
    "github.com/go-kvolt/kvolt/v2/middleware"
)

func main() {
    // Recovery + Request-ID + 1MB body limit
    app := kvolt.Default()
    app.Use(middleware.Logger())
    app.Use(middleware.Secure())

    app.GET("/", func(c *context.Context) error {
        return c.JSON(200, map[string]string{
            "message": "Welcome to KVolt",
            "status":  "Running",
        })
    })

    app.POST("/users", func(c *context.Context) error {
        type CreateUser struct {
            Name  string \`json:"name" validate:"required"\`
            Email string \`json:"email" validate:"required,email"\`
        }
        var u CreateUser
        if err := c.Bind(&u); err != nil {
            return c.JSON(400, map[string]string{"error": err.Error()})
        }
        return c.JSON(201, u)
    })

    // Production timeouts + graceful shutdown
    app.Run(":8080")
}`}</code></pre>
        </div>

        <h2>Run vs ListenAndServe</h2>
        <ul>
            <li><code>Run()</code> — production: read/write/idle timeouts and SIGINT/SIGTERM shutdown.</li>
            <li><code>ListenAndServe()</code> — stdlib listen, no extra timeouts (handy for benches or when a proxy already times out).</li>
        </ul>
    </>
);
