export const internals = (
    <>
        <h1>Framework Internals 🧠</h1>
        <p>Understanding how KVolt works under the hood can help you write better, more performant code. This section dives deep into the architecture.</p>

        <h2>Radix Tree Router</h2>
        <p>KVolt uses a custom <strong>Radix Tree (Trie)</strong> implementation for routing, optimized for zero-allocation path matching.</p>
        <ul>
            <li><strong>Priority Sorting:</strong> Nodes are automatically reordered based on usage frequency (priority) to keep the "hottest" paths at the top of the search tree.</li>
            <li><strong>Compressed Path Segments:</strong> Common prefixes are shared between routes (e.g., <code>/api/v1</code>), reducing memory usage and lookup depth.</li>
            <li><strong>Wildcards:</strong> Supports parameters (<code>:id</code>) and catch-alls (<code>*filepath</code>). Wildcards are stored as special node types (`param`, `catchAll`).</li>
        </ul>
        <div className="code-block">
            <pre><code>{`// Internal Node Structure
type Node struct {
    path      string
    indices   string
    children  []*Node
    handle    Handler
    priority  uint32 // Hot paths bubble up
    nType     nodeType // static, root, param, catchAll
}`}</code></pre>
        </div>

        <h2>Context Pooling</h2>
        <p>To achieve sub-microsecond latency, KVolt aggressively pools `Context` objects using <code>sync.Pool</code>.</p>
        <ol>
            <li><strong>Request Start:</strong> A `Context` is retrieved from the pool. If empty, a new one is allocated.</li>
            <li><strong>Reset:</strong> The context is `Reset()` with the new `http.ResponseWriter` and `*http.Request`. Headers and Keys are cleared.</li>
            <li><strong>Processing:</strong> Middleware and Handlers execute.</li>
            <li><strong>Request End:</strong> The context is returned to the pool for reuse.</li>
        </ol>
        <div className="alert alert-warning">
            <strong>Implication:</strong> You cannot pass the `*Context` pointer to a goroutine that outlives the request, as the underlying memory will be overwritten by a subsequent request.
        </div>

        <h2>Middleware Chaining</h2>
        <p>Middleware is implemented as a simple slice of functions <code>[]HandlerFunc</code>.</p>
        <ul>
            <li><strong>Chain Execution:</strong> The `c.Next()` method increments an index counter and calls the next handler in the slice.</li>
            <li><strong>Abortion:</strong> If a middleware wants to stop the chain (e.g., Auth failure), it simply <strong>does not call</strong> `c.Next()` and returns.</li>
        </ul>
    </>
);
