export const install = (
    <>
        <h1>Installation</h1>
        <p className="lead">You can start a KVolt project in two ways: using our powerful CLI or the standard Go method.</p>

        <hr />

        <h2>Option 1: The KVolt Way (Recommended) ⚡</h2>
        <p>The CLI scaffolds a production-ready directory structure for you.</p>

        <h3>1. Install the CLI</h3>
        <div className="code-block">
            <pre><code>go install github.com/go-kvolt/kvolt/cmd/kvolt@latest</code></pre>
        </div>
        <p><em>Note: If the command is not found, add Go bin to your PATH.</em></p>

        <h3>2. Create & Run</h3>
        <div className="code-block">
            <pre><code>{`# Create a new project
kvolt new my-app

# Run it
cd my-app
go mod tidy
go run cmd/api/main.go`}</code></pre>
        </div>

        <h2>Option 2: The Standard Go Way 📦</h2>
        <div className="code-block">
            <pre><code>{`mkdir my-app && cd my-app
go mod init my-app
go get github.com/go-kvolt/kvolt@latest`}</code></pre>
        </div>
    </>
);
