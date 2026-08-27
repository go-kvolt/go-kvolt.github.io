export const dependency_injection = (
    <>
        <h1>Dependency Injection 💉</h1>
        <p>KVolt provides a simple, reflection-based DI container in `pkg/di`. It is designed for <strong>Singleton</strong> service registration.</p>

        <h2>Capabilities</h2>
        <ul>
            <li><strong>Register:</strong> Map an interface or struct type to a specific instance.</li>
            <li><strong>Resolve:</strong> Inject that instance into any compatible variable.</li>
            <li><strong>Thread-Safe:</strong> Safe for concurrent access during startup.</li>
        </ul>

        <h2>Example</h2>
        <div className="code-block">
            <pre><code>{`import "github.com/go-kvolt/kvolt/v2/pkg/di"

type Database interface {
    Query()
}

type Postgres struct{}
func (p *Postgres) Query() { fmt.Println("SQL...") }

func main() {
    c := di.NewContainer()

    // 1. Provide (Service Registration)
    // Registers *Postgres as the singleton for *Postgres type
    c.Provide(&Postgres{})

    // 2. Invoke (Service Resolution)
    var db *Postgres
    if found := c.Invoke(&db); found {
        db.Query()
    }
}
`}</code></pre>
        </div>

        <div className="alert alert-note">
            <strong>Note:</strong> Type-to-instance mapping only. Constructor graphs are not built in v2.
        </div>
    </>
);
