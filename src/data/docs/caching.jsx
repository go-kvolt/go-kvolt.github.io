export const caching = (
    <>
        <h1>Caching System ⚡</h1>
        <p>Sharded in-memory cache (64 shards, FNV-1a). v2 caps the store so it cannot grow without bound.</p>

        <h2>Architecture</h2>
        <ul>
            <li><strong>Shards:</strong> 64, to cut lock contention.</li>
            <li><strong>TTL:</strong> Janitor deletes expired keys. <code>Get</code> also drops expired entries.</li>
            <li><strong>LRU cap:</strong> <code>DefaultMaxKeys</code> = 50,000. Use <code>NewMemoryStoreSized</code> to set your own. <code>Len()</code> returns the live count.</li>
        </ul>

        <h2>Usage</h2>
        <div className="code-block">
            <pre><code>{`import (
    "time"
    "github.com/go-kvolt/kvolt/pkg/cache"
)

func main() {
    store := cache.NewMemoryStore(5 * time.Minute)
    // or: cache.NewMemoryStoreSized(5*time.Minute, 100_000)

    store.Set("user:123", userData, 10*time.Minute)

    if val, err := store.Get("user:123"); err == nil {
        fmt.Println("Cache Hit:", val)
    }

    store.Delete("user:123")
    store.Flush()
}`}</code></pre>
        </div>
    </>
);
