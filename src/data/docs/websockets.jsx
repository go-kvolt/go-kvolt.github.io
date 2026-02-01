export const websockets = (
    <>
        <h1>WebSockets 🔌</h1>
        <p>Native support via `c.Upgrade()`.</p>
        <div className="code-block">
            <pre><code>{`app.GET("/ws", func(c *context.Context) error {
    conn, err := c.Upgrade()
    // Handle connection...
    return nil
})`}</code></pre>
        </div>
    </>
);
