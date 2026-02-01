export const scheduler = (
    <>
        <h1>Task Scheduler ⏰</h1>
        <p>KVolt wraps the robust <a href="https://github.com/robfig/cron" target="_blank">robfig/cron</a> library to provide easy task scheduling.</p>

        <h2>Usage</h2>
        <div className="code-block">
            <pre><code>{`import "github.com/go-kvolt/kvolt/pkg/scheduler"

func main() {
    s := scheduler.New()

    // Syntax: Cron Expression or @shorthand
    s.Add("0 0 * * *", func() {
        fmt.Println("Midnight task")
    })
    
    s.Add("@every 1h30m", func() {
        fmt.Println("Every 90 minutes")
    })

    s.Start()
}`}</code></pre>
        </div>

        <h2>Supported Formats</h2>
        <ul>
            <li>Standard Cron: <code>Minute Hour Dom Month Dow</code></li>
            <li><code>@yearly</code> (or @annually)</li>
            <li><code>@monthly</code></li>
            <li><code>@weekly</code></li>
            <li><code>@daily</code> (or @midnight)</li>
            <li><code>@hourly</code></li>
            <li><code>@every &lt;duration&gt;</code> (e.g. "@every 1h30m10s")</li>
        </ul>
    </>
);
