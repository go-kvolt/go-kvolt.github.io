export const quickstart = (
    <>
        <h1>Quick Start</h1>
        <p>Here is a simple example to get your server running.</p>
        <div className="code-block">
            <pre><code>{`package main

import (
    "github.com/go-kvolt/kvolt"
    "github.com/go-kvolt/kvolt/middleware"
)

func main() {
    // 1. Initialize Engine
    app := kvolt.New()

    // 2. Global Middleware
    app.Use(middleware.Logger())
    app.Use(middleware.Recovery())

    // 3. Define a simple route
    app.GET("/", func(c *kvolt.Context) error {
        return c.JSON(200, kvolt.Map{
            "message": "Welcome to KVolt",
            "status": "Running",
        })
    })

    // 4. Start Server
    app.Run(":8080")
}`}</code></pre>
        </div>
    </>
);
