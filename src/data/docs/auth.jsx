export const authentication = (
    <>
        <h1>Authentication & JWT 🔐</h1>
        <p>KVolt provides lightweight JSON Web Token authentication in <code>pkg/auth</code> and enterprise-grade authorization middleware in <code>middleware</code>.</p>

        <h2>1. Generating JWT Tokens</h2>
        <p>Generate signed HMAC or RSA tokens with custom claims:</p>
        <div className="code-block">
            <pre><code>{`package main

import (
    "time"
    "github.com/go-kvolt/kvolt/v2/context"
    "github.com/go-kvolt/kvolt/v2/pkg/auth"
)

func LoginHandler(c *context.Context) error {
    // Authenticate user credentials...

    claims := auth.Claims{
        "sub":    "usr_991823",
        "org_id": "org_enterprise_1",
        "role":   "admin",
        "perms":  []string{"users:read", "users:write"},
    }

    // Sign token valid for 24 hours
    token, err := auth.GenerateToken(claims, 24*time.Hour)
    if err != nil {
        return c.JSON(500, map[string]string{"error": "Failed to issue token"})
    }

    return c.JSON(200, map[string]string{"access_token": token})
}`}</code></pre>
        </div>

        <h2>2. Protecting Routes with JWT Middleware</h2>
        <p>Protect route groups by enforcing valid bearer tokens:</p>
        <div className="code-block">
            <pre><code>{`api := app.Group("/api/v1")

// Enforces valid Authorization: Bearer <token>
api.Use(middleware.JWT(middleware.JWTConfig{
    SigningKey:  "your-secure-production-secret-key",
    TokenLookup: "header:Authorization",
    ContextKey:  "user_claims",
}))

api.GET("/profile", func(c *context.Context) error {
    claims := c.Get("user_claims").(auth.Claims)
    return c.JSON(200, map[string]any{
        "user_id": claims["sub"],
        "role":    claims["role"],
    })
})`}</code></pre>
        </div>

        <h2>3. RBAC & Permissions Enforcement</h2>
        <p>Chain RBAC gates directly on sensitive routes:</p>
        <div className="code-block">
            <pre><code>{`// Only users with "admin" role
api.DELETE("/users/:id", middleware.RequireRole("admin"), handleDeleteUser)

// Only users with "billing:write" permission
api.POST("/invoices", middleware.RequirePermission("billing:write"), handleInvoice)`}</code></pre>
        </div>
    </>
);
