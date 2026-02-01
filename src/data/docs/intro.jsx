export const intro = (
    <>
        <h1>Introduction to KVolt ⚡</h1>
        <p className="lead">
            KVolt is a high-performance, developer-friendly Go web framework built for speed and ease of use. It combines the raw power of <code>net/http</code> with a modern API, zero-allocation routing, and a suite of "Batteries Included" utilities.
        </p>
        <hr />
        <h2>Key Capabilities 🚀</h2>
        <ul>
            <li><strong>HTTP/2 & TLS:</strong> Built-in support for secure, modern web serving via <code>RunTLS</code>.</li>
            <li><strong>Graceful Shutdown:</strong> Automatic handling of OS signals (SIGINT, SIGTERM) to ensure zero-downtime deployments.</li>
            <li><strong>Radix Tree Router:</strong> Constant-time routing matching with Groups, Wildcards, and Regex.</li>
            <li><strong>Performance:</strong> Uses <code>sync.Pool</code> for zero-allocation context handling (~40ns/op).</li>
        </ul>

        <h2>Batteries Included 🔋</h2>
        <p>Everything you need for production is built-in:</p>
        <ul>
            <li><strong>Configuration:</strong> Powered by Viper (YAML, JSON, ENV).</li>
            <li><strong>Validation:</strong> Powered by Playground Validator v10.</li>
            <li><strong>Authentication:</strong> Lightweight JWT implementation.</li>
            <li><strong>Background Jobs:</strong> In-memory Queue & Scheduler.</li>
        </ul>
    </>
);
