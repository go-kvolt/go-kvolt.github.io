export const changelog = (
    <>
        <h1>Changelog</h1>
        <p className="lead">Production line. Full notes: <a href="https://github.com/go-kvolt/kvolt/blob/main/CHANGELOG.md" target="_blank" rel="noreferrer">CHANGELOG.md</a>.</p>

        <h2>v2.0.0 — 2026-08-27</h2>
        <p>Production release. Safe JSON under load, <code>Default()</code> engine, middleware and cache fixes.</p>
        <h3>Added</h3>
        <ul>
            <li><code>kvolt.Default()</code>, <code>BindJSON</code>, <code>ListenAndServe</code></li>
            <li><code>Query</code>, <code>StatusCode</code>, <code>FlushHeaders</code>, <code>NoRoute</code></li>
            <li><code>middleware.RequestID</code>, <code>Timeout</code>, <code>GzipWithConfig</code></li>
            <li>Cache LRU cap (50,000). WebSocket same-origin check.</li>
        </ul>
        <h3>Fixed</h3>
        <ul>
            <li><code>Status()</code> no longer writes headers too early</li>
            <li>Listen banner, 404 chain, &gt;4 path params, limiter IP key, logger status, cache expiry</li>
        </ul>
        <h3>Changed</h3>
        <ul>
            <li>JSON/text/HTML use <code>charset=utf-8</code></li>
            <li>Gzip skips JSON and tiny bodies</li>
            <li><code>BindJSON</code> streams; encode uses a pooled sonic buffer</li>
        </ul>
        <p><a href="https://github.com/go-kvolt/kvolt/releases/tag/v2.0.0" target="_blank" rel="noreferrer">GitHub release</a></p>

        <h2>v1.1.0 — 2026-05-17</h2>
        <p>gRPC server, router group isolation, param sibling routes, <code>kvolt run</code> hot-reload process tree fix.</p>
    </>
);
