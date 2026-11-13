export const routing = (
    <>
        <h1>Radix Routing Engine 🛣️</h1>
        <p>KVolt features a custom zero-allocation <strong>Adaptive Radix Tree</strong> router designed for ultra-low latency microservices. Static routes resolve in ~10.9 nanoseconds with 0 heap allocations.</p>

        <h2>Basic HTTP Routes</h2>
        <div className="code-block">
            <pre><code>{`package main

import (
    "github.com/go-kvolt/kvolt/v2"
    "github.com/go-kvolt/kvolt/v2/context"
)

func main() {
    app := kvolt.New()

    app.GET("/health", func(c *context.Context) error {
        return c.String(200, "OK")
    })
    app.POST("/users", handleCreateUser)
    app.PUT("/users/:id", handleUpdateUser)
    app.DELETE("/users/:id", handleDeleteUser)
}`}</code></pre>
        </div>

        <h2>Route Parameters</h2>
        <p>Capture dynamic URL segments using <code>:name</code> syntax. Access values with <code>c.Param("name")</code>.</p>
        <div className="code-block">
            <pre><code>{`app.GET("/orgs/:orgId/users/:userId", func(c *context.Context) error {
    orgID  := c.Param("orgId")
    userID := c.Param("userId")

    return c.JSON(200, map[string]string{
        "org_id":  orgID,
        "user_id": userID,
    })
})`}</code></pre>
        </div>

        <h2>Static Precedence & Catch-All Wildcards</h2>
        <p>Static segments take strict precedence over parameterized routes, ensuring predictable matching. Use <code>*filepath</code> to capture remaining path segments.</p>
        <div className="code-block">
            <pre><code>{`// Static route wins over /users/:id
app.GET("/users/me", handleCurrentUser)
app.GET("/users/:id", handleUserByID)

// Wildcard catch-all for downloads
app.GET("/downloads/*filepath", func(c *context.Context) error {
    relPath := c.Param("filepath")
    return c.String(200, "Requested file: " + relPath)
})`}</code></pre>
        </div>

        <h2>Route Groups & Scoped Middleware</h2>
        <p>Organize APIs logically with nested route groups. Middleware applied to a group only runs for routes within that group.</p>
        <div className="code-block">
            <pre><code>{`api := app.Group("/api/v1")
api.Use(middleware.Tenant())

// Nested group: /api/v1/billing
billing := api.Group("/billing")
billing.Use(middleware.RequireRole("billing_admin"))
{
    billing.GET("/invoices", handleInvoices)
    billing.POST("/charges", handleCharge)
}`}</code></pre>
        </div>

        <h2>Static File Serving</h2>
        <p>Serve assets safely with built-in path sanitization that blocks directory traversal.</p>
        <div className="code-block">
            <pre><code>{`// Serve ./public assets under /static prefix
app.Static("/static", "./public")`}</code></pre>
        </div>

        <h2>Route Inspection</h2>
        <p>Inspect registered routes at startup for debugging, logging, or OpenAPI generation:</p>
        <div className="code-block">
            <pre><code>{`for _, route := range app.Routes() {
    log.Printf("[%s] %s -> %s", route.Method, route.Path, route.Summary)
}`}</code></pre>
        </div>
    </>
);
