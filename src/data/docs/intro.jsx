export const intro = (
    <>
        <h1>Introduction to KVolt ⚡</h1>
        <p className="lead">
            KVolt is a high-performance Go web framework on <code>net/http</code>. <strong>v2.4.0</strong> is the production-ready release: 100% test coverage, zero data races, automated <code>gosec</code> security analysis in CI, and a formal SemVer 2.0.0 stability guarantee.
        </p>
        <div className="alert alert-note">
            <strong>v2.4.0</strong> — 15 Nov 2026. Module path <code>github.com/go-kvolt/kvolt/v2</code>. See the <a href="https://github.com/go-kvolt/kvolt/releases/tag/v2.4.0" target="_blank" rel="noreferrer">GitHub release</a> and the Changelog page.
        </div>
        <hr />
        <h2>Key Capabilities 🚀</h2>
        <ul>
            <li><strong>Production engine:</strong> <code>kvolt.Default()</code> includes Recovery, Request-ID, and a 1MB body limit. Logger and Gzip stay opt-in.</li>
            <li><strong>Safe JSON:</strong> <code>BindJSON</code> streams the body. <code>Bind</code> still decodes then validates. Responses use <code>charset=utf-8</code>.</li>
            <li><strong>HTTP/2 &amp; TLS:</strong> <code>RunTLS</code> for HTTPS. <code>Run()</code> adds production timeouts and graceful shutdown. <code>ListenAndServe</code> is stdlib listen (no extra timeouts).</li>
            <li><strong>Radix Tree Router:</strong> Params, wildcards, sibling suffixes after a param, isolated group middleware.</li>
            <li><strong>gRPC:</strong> Same process as HTTP — <code>RunAll</code> / <code>RunDual</code>.</li>
        </ul>

        <h2>Batteries Included 🔋</h2>
        <ul>
            <li><strong>Configuration:</strong> Viper (YAML, JSON, ENV).</li>
            <li><strong>Validation:</strong> Playground Validator v10 via <code>Bind()</code>.</li>
            <li><strong>Auth:</strong> JWT middleware + session store.</li>
            <li><strong>Cache:</strong> Sharded memory cache with LRU cap (50,000 keys).</li>
            <li><strong>Jobs:</strong> In-memory queue and scheduler.</li>
        </ul>

        <h2>New vs Default</h2>
        <ul>
            <li><code>kvolt.New()</code> — empty engine. You add every middleware yourself (tests, tiny examples).</li>
            <li><code>kvolt.Default()</code> — start here for a real API.</li>
        </ul>
    </>
);
