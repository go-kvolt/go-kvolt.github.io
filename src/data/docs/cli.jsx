export const cli = (
    <>
        <h1>CLI Usage ⌨️</h1>
        <p>The <code>kvolt</code> CLI creates projects and runs them with hot reload. v2.0.0 prints <code>kvolt version 2.0.0</code>.</p>

        <h2>Install</h2>
        <div className="code-block">
            <pre><code>go install github.com/go-kvolt/kvolt/cmd/kvolt@main</code></pre>
        </div>

        <h2>Commands</h2>

        <h3><code>kvolt new &lt;project_name&gt;</code></h3>
        <p>Scaffolds a project: <code>cmd/api</code>, <code>internal</code>, <code>pkg</code>, <code>config.yaml</code>, <code>.env</code>.</p>
        <div className="code-block">
            <pre><code>kvolt new my-app</code></pre>
        </div>

        <h3><code>kvolt run [-e entry]</code></h3>
        <p>Dev server with hot reload. Watches <code>.go</code>, <code>.yaml</code>, <code>.env</code>, <code>.html</code>. Skips <code>.git</code>, <code>vendor</code>, <code>node_modules</code>. Restarts the full process tree so the port is released.</p>
        <div className="code-block">
            <pre><code>{`cd my-app
kvolt run
kvolt run -e cmd/server/main.go`}</code></pre>
        </div>

        <h3><code>kvolt build</code> / <code>test</code> / <code>fmt</code></h3>
        <div className="code-block">
            <pre><code>{`kvolt build -o bin/myapp
kvolt test -cover
kvolt fmt`}</code></pre>
        </div>

        <h3><code>kvolt key</code></h3>
        <p>Prints a random 32-byte hex secret (JWT, session keys).</p>

        <h3><code>kvolt generate handler|middleware &lt;name&gt;</code></h3>
        <div className="code-block">
            <pre><code>{`kvolt generate handler users
kvolt generate middleware auth`}</code></pre>
        </div>

        <h3><code>kvolt docker</code></h3>
        <p>Writes a multi-stage Dockerfile (builds <code>./cmd/api</code>, Alpine runtime).</p>

        <h3><code>kvolt version</code></h3>
        <div className="code-block">
            <pre><code>{`kvolt version
kvolt -v`}</code></pre>
        </div>
    </>
);
