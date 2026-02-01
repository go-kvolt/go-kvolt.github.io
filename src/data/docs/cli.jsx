export const cli = (
    <>
        <h1>CLI Usage ⌨️</h1>
        <p>The `kvolt` CLI tool is your companion for creating and running KVolt applications.</p>

        <h2>Commands</h2>

        <h3><code>new &lt;project_name&gt;</code></h3>
        <p>Scaffolds a new project with the standard KVolt directory layout.</p>
        <div className="code-block">
            <pre><code>kvolt new my-app</code></pre>
        </div>
        <p><strong>Created Structure:</strong></p>
        <ul>
            <li><code>cmd/api/main.go</code>: Entry point</li>
            <li><code>internal/handler</code>: Handlers</li>
            <li><code>internal/model</code>: Business logic/DB models</li>
            <li><code>pkg/</code>: Shared utilities</li>
            <li><code>config.yaml</code> & <code>.env</code>: Configuration</li>
        </ul>

        <h3><code>run</code></h3>
        <p>Starts the development server with <strong>Hot Reloading</strong>.</p>
        <div className="code-block">
            <pre><code>cd my-app
                kvolt run</code></pre>
        </div>
        <p><strong>Hot Reload Features:</strong></p>
        <ul>
            <li>Automatically restarts the server when files change.</li>
            <li>Watches extensions: <code>.go</code>, <code>.yaml</code>, <code>.env</code>, <code>.html</code>.</li>
            <li>Debounces rapid changes (500ms delay).</li>
            <li>Gracefully kills and restarts the process.</li>
        </ul>
    </>
);
