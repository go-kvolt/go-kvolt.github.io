export const authentication = (
    <>
        <h1>Authentication 🔐</h1>
        <p>KVolt includes a lightweight JWT (JSON Web Token) implementation in <code>pkg/auth</code>.</p>

        <div className="alert alert-warning">
            <strong>Warning:</strong> The default JWT implementation uses a hardcoded secret ("kvolt-default-secret"). You <strong>MUST</strong> change this in production by modifying <code>pkg/auth/jwt.go</code> or using a custom middleware config.
        </div>

        <h2>Generating Tokens</h2>
        <p>Use `auth.GenerateToken` to create signed tokens with custom claims.</p>
        <div className="code-block">
            <pre><code>{`import (
    "time"
    "github.com/go-kvolt/kvolt/pkg/auth"
)

func Login(c *kvolt.Context) error {
    // ... verify credentials ...

    // Generate Token (valid for 72 hours)
    token, err := auth.GenerateToken(auth.Claims{
        "user_id": 123,
        "role":    "admin",
    }, 72*time.Hour)

    if err != nil {
        return c.Status(500).String(500, "Could not generate token")
    }

    return c.JSON(200, kvolt.Map{"token": token})
}`}</code></pre>
        </div>

        <h2>Protecting Routes</h2>
        <p>Use the built-in JWT middleware to protect routes. It automatically verifies the token signature and expiration.</p>
        <div className="code-block">
            <pre><code>{`// Protect a group
api := app.Group("/api")
api.Use(middleware.JWT(middleware.JWTConfig{
    // If empty, uses auth.Secret ("kvolt-default-secret")
    SigningKey: "my-production-secret", 
    TokenLookup: "header:Authorization",
}))

api.GET("/dashboard", func(c *kvolt.Context) error {
    return c.String(200, "Welcome, authorized user!")
})`}</code></pre>
        </div>
    </>
);
