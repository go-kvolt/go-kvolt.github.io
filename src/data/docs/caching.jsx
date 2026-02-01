export const caching = (
    <>
        <h1>Caching System ⚡</h1>
        <p>KVolt includes a custom-built, sharded in-memory cache designed for high concurrency and low lock contention.</p>

        <h2>Architecture</h2>
        <ul>
            <li><strong>Sharding:</strong> Data is split across <strong>64 internal shards</strong> to minimize mutex contention.</li>
            <li><strong>Hashing:</strong> Keys are routed to shards using the <strong>FNV-1a 32-bit</strong> hashing algorithm.</li>
            <li><strong>Janitor:</strong> A background goroutine runs at your specified interval to sweep and delete expired items.</li>
        </ul>

        <h2>Usage</h2>
        <div className="code-block">
            <pre><code>{`import (
    "time"
    "github.com/go-kvolt/kvolt/pkg/cache"
)

func main() {
    // Initialize with a cleanup interval of 5 minutes
    store := cache.NewMemoryStore(5 * time.Minute)

    // Set: Key, Value, TTL
    store.Set("user:123", userData, 10*time.Minute)

    // Get
    if val, err := store.Get("user:123"); err == nil {
        fmt.Println("Cache Hit:", val)
    }

    // Delete
    store.Delete("user:123")
    
    // Flush All
    store.Flush()
}`}</code></pre>
        </div>
    </>
);
