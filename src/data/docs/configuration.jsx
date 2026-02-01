export const configuration = (
    <>
        <h1>Configuration ⚙️</h1>
        <p>KVolt uses <a href="https://github.com/spf13/viper" target="_blank">Viper</a> under the hood for robust configuration management. It supports:</p>
        <ul>
            <li><strong>Environment Variables</strong> (Automatic matching)</li>
            <li><strong>Config Files</strong> (JSON, YAML, TOML, etc.)</li>
            <li><strong>.env Files</strong> (via godotenv)</li>
            <li><strong>Defaults</strong></li>
        </ul>

        <h2>Defining Configuration</h2>
        <p>Use struct tags to define your config. KVolt supports `mapstructure` (Viper standard), `env` (legacy), and `default`.</p>
        <div className="code-block">
            <pre><code>{`package config

type Config struct {
    App struct {
        Name string \`mapstructure:"name" default:"KVolt App"\`
        Port int    \`mapstructure:"port" env:"PORT" default:"8080"\`
        Mode string \`mapstructure:"mode" default:"debug"\`
    } \`mapstructure:"app"\`

    Database struct {
        Host string \`mapstructure:"host" default:"localhost"\`
        User string \`mapstructure:"user" default:"root"\`
    } \`mapstructure:"database"\`
}`}</code></pre>
        </div>

        <h2>Loading Configuration</h2>
        <p>The `config.Load` function automatically searches for `config.yaml` (or .json) in the root or `./config` directory, loads `.env` files, and overrides with environment variables.</p>
        <div className="code-block">
            <pre><code>{`import "github.com/go-kvolt/kvolt/pkg/config"

var AppConfig Config

func Init() {
    if err := config.Load(&AppConfig); err != nil {
        panic("Failed to load config: " + err.Error())
    }
}`}</code></pre>
        </div>

        <h2>Order of Precedence</h2>
        <ol>
            <li><strong>Environment Variables</strong> (Highest priority)</li>
            <li><strong>Config File</strong> (`config.yaml`, `config.json`)</li>
            <li><strong>.env File</strong></li>
            <li><strong>Struct Defaults</strong></li>
        </ol>
    </>
);
