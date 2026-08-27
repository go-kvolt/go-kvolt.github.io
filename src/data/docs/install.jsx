export const install = (
    <>
        <h1>Installation</h1>
        <p className="lead">CLI or a plain Go module. Current production line is <strong>v2.0.1</strong>.</p>

        <div className="alert alert-warning">
            <strong>Use <code>v2.0.1</code>.</strong> The older GitHub tag <code>v2.0.0</code> is not a valid Go module (path was not <code>/v2</code>). Do not <code>go get @v2.0.0</code>. For the old v1 line, <code>github.com/go-kvolt/kvolt@latest</code> still resolves to v1.1.0.
        </div>

        <hr />

        <h2>Option 1: The KVolt Way (Recommended) ⚡</h2>
        <p>The CLI scaffolds a production-ready directory structure for you.</p>

        <h3>1. Install the CLI</h3>
        <div className="code-block">
            <pre><code>{`go install github.com/go-kvolt/kvolt/v2/cmd/kvolt@v2.0.1
kvolt version
# kvolt version 2.0.1`}</code></pre>
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
go get github.com/go-kvolt/kvolt/v2@v2.0.1`}</code></pre>
        </div>
        <p>Then create <code>main.go</code> with <code>kvolt.Default()</code> — see Quick Start.</p>
    </>
);
