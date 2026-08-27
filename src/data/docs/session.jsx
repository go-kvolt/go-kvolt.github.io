export const session = (
    <>
        <h1>Session Authentication 🍪</h1>
        <p>Stateful sessions on the memory cache. Cookie or header carries the session id. Use JWT when you want stateless tokens instead.</p>
        <div className="code-block">
            <pre><code>{`import (
    "time"
    "github.com/go-kvolt/kvolt/v2/pkg/cache"
    "github.com/go-kvolt/kvolt/v2/pkg/session"
)

store := cache.NewMemoryStore(10 * time.Minute)
sess := session.New(store, 24*time.Hour)

app.POST("/login", func(c *context.Context) error {
    token, err := sess.Create(map[string]string{"id": "123", "role": "admin"})
    if err != nil {
        return c.JSON(500, map[string]string{"error": "Session Error"})
    }
    c.SetCookie(&http.Cookie{
        Name:     "session_id",
        Value:    token,
        Path:     "/",
        HttpOnly: true,
        Secure:   true,
        Expires:  time.Now().Add(24 * time.Hour),
    })
    return c.JSON(200, map[string]string{"ok": "Logged In"})
})

api := app.Group("/api")
api.Use(middleware.Session(sess))`}</code></pre>
        </div>
    </>
);
