export const websockets = (
    <>
        <h1>WebSockets 🔌</h1>
        <p>Native upgrade via <code>c.Upgrade()</code> (gorilla/websocket). v2 defaults to a <strong>same-origin</strong> check. Override with <code>SetWebsocketCheckOrigin</code> if you must allow other origins.</p>
        <div className="code-block">
            <pre><code>{`app.GET("/ws", func(c *context.Context) error {
    conn, err := c.Upgrade()
    if err != nil {
        return err
    }
    defer conn.Close()
    for {
        _, msg, err := conn.ReadMessage()
        if err != nil {
            return nil
        }
        _ = conn.WriteMessage(websocket.TextMessage, msg)
    }
})`}</code></pre>
        </div>
        <p>Do not hold <code>*context.Context</code> on the connection loop after you have the <code>*websocket.Conn</code> — copy what you need, then use the conn.</p>
    </>
);
