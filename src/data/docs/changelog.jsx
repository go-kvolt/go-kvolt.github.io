export const changelog = (
    <>
        <h1>Changelog</h1>
        <p className="lead">Production line. Full notes: <a href="https://github.com/go-kvolt/kvolt/blob/main/CHANGELOG.md" target="_blank" rel="noreferrer">CHANGELOG.md</a>.</p>

        <h2>v2.3.0 — 2026-11-13</h2>
        <p>Production-grade release: 100% test coverage, zero race conditions, automated <code>gosec</code> static analysis in CI, SemVer 2.0.0 stability guarantee, and security hardening.</p>
        <div className="code-block">
            <pre><code>{`go get github.com/go-kvolt/kvolt/v2@v2.3.0
go install github.com/go-kvolt/kvolt/v2/cmd/kvolt@v2.3.0`}</code></pre>
        </div>
        <h3>Security &amp; Hardening</h3>
        <ul>
            <li>Automated <code>gosec</code> static analysis in CI (0 issues across 72 files)</li>
            <li>Toolchain updated to Go 1.27.4 (clean <code>govulncheck</code>)</li>
            <li>HMAC-signed CSRF tokens with process secret verification</li>
            <li>JWT: mandatory <code>exp</code> enforcement, <code>KeyFunc</code> validation, claims-based tenant isolation</li>
            <li>Static file serving traversal defense (no directory listing, dotfile block)</li>
        </ul>
        <h3>Stability &amp; Concurrency</h3>
        <ul>
            <li>All data races eliminated under Linux &amp; Windows multi-threaded <code>-race</code> testing</li>
            <li>100% test coverage across library and CLI</li>
            <li>SemVer 2.0.0 stability contract committed in README</li>
        </ul>
        <p><a href="https://github.com/go-kvolt/kvolt/releases/tag/v2.3.0" target="_blank" rel="noreferrer">GitHub release v2.3.0</a></p>

        <h2>v2.2.0 — 2026-11-07</h2>
        <p>Multi-tenant platform release: Tenant, RBAC, Idempotency, Audit, OpenTelemetry, Redis stores.</p>
        <p><a href="https://github.com/go-kvolt/kvolt/releases/tag/v2.2.0" target="_blank" rel="noreferrer">GitHub release v2.2.0</a></p>

        <h2>v2.0.1 — 2026-08-27</h2>
        <p>Valid Go v2 module. Use this tag, not <code>v2.0.0</code>.</p>
        <div className="code-block">
            <pre><code>{`go get github.com/go-kvolt/kvolt/v2@v2.0.1
go install github.com/go-kvolt/kvolt/v2/cmd/kvolt@v2.0.1`}</code></pre>
        </div>
        <h3>Added</h3>
        <ul>
            <li>Module path <code>github.com/go-kvolt/kvolt/v2</code></li>
            <li>Concurrent JSON tests, fuzz (BindJSON, Query, router), soak harness</li>
            <li><code>scripts/local10.ps1</code> for local race + soak + fuzz</li>
        </ul>
        <h3>Fixed</h3>
        <ul>
            <li>Logger emit is injectable so tests can assert the real status line</li>
        </ul>
        <p><a href="https://github.com/go-kvolt/kvolt/releases/tag/v2.0.1" target="_blank" rel="noreferrer">GitHub release</a></p>

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
