export const queue = (
    <>
        <h1>Background Queue 📨</h1>
        <p>KVolt provides a high-performance, in-memory job queue built on buffered Go channels. It is ideal for offloading tasks like email sending or image resizing.</p>

        <div className="alert alert-warning">
            <strong>Note:</strong> This is an <strong>in-memory</strong> queue. Jobs will be lost if the application restarts. For persistence, consider integrating Redis or similar external brokers.
        </div>

        <h2>Architecture</h2>
        <ul>
            <li><strong>Concurrency:</strong> You define the number of concurrent worker goroutines.</li>
            <li><strong>Backpressure:</strong> Uses a buffered channel. If the queue is full, <code>Push()</code> will return an error immediately (Queue Full), preventing memory overflows.</li>
            <li><strong>No Dependencies:</strong> Pure Go standard library implementation.</li>
        </ul>

        <h2>API Reference</h2>
        <div className="code-block">
            <pre><code>{`import "github.com/go-kvolt/kvolt/pkg/queue"

// 1. Create Queue
// Buffer: 1000 jobs
// Workers: 10 concurrent processors
q := queue.NewMemoryQueue(1000, 10)

// 2. Register Handler
q.Register("send_email", func(job queue.Job) error {
    email := job.Payload.(string)
    fmt.Println("Sending email to:", email)
    return nil
})

// 3. Start Workers
q.Start()
defer q.Stop()

// 4. Dispatch Job
if err := q.Push("send_email", "user@example.com"); err != nil {
    log.Println("Queue full, dropping job:", err)
}`}</code></pre>
        </div>
    </>
);
