export const install = (
    <>
        <h1>Installation</h1>
        <p className="lead">CLI or a plain Go module. Current production line is <strong>v2.0</strong>.</p>

        <div className="alert alert-warning">
            <strong>Go install tip:</strong> The GitHub tag is <code>v2.0.0</code>, but Go will reject <code>@v2.0.0</code> until the module path is <code>github.com/go-kvolt/kvolt/v2</code>. Use <code>@main</code> to get v2 code today. <code>@latest</code> may still resolve to v1.1.0.
        </div>

        <hr />

        <h2>Option 1: The KVolt Way (Recommended) ⚡</h2>
        <p>The CLI scaffolds a production-ready directory structure for you.</p>

        <h3>1. Install the CLI</h3>
        <div className="code-block">
            <pre><code>{`go install github.com/go-kvolt/kvolt/cmd/kvolt@main
kvolt version
# kvolt version 2.0.0`}</code></pre>
        </div>
        <p><em>If the command is not found, add <code>$(go env GOPATH)/bin</code> to your PATH.</em></p>

        <h3>2. Create &amp; Run</h3>
        <div className="code-block">
            <pre><code>{`kvolt new my-app
cd my-app
go mod tidy
kvolt run`}</code></pre>
        </div>

        <h2>Option 2: The Standard Go Way 📦</h2>
        <div className="code-block">
            <pre><code>{`mkdir my-app && cd my-app
go mod init my-app
go get github.com/go-kvolt/kvolt@main`}</code></pre>
        </div>
        <p>Then create <code>main.go</code> with <code>kvolt.Default()</code> — see Quick Start.</p>
    </>
);
