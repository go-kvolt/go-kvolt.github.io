export const swagger = (
    <>
        <h1>API Documentation (OpenAPI) 📜</h1>
        <p>KVolt automates API documentation using the OpenAPI 3.0 standard. It supports multiple UI viewers, including the modern <strong>Scalar UI</strong>.</p>

        <h2>Quick Integration</h2>
        <div className="code-block">
            <pre><code>{`import "github.com/go-kvolt/kvolt/pkg/swagger"

func main() {
    app := kvolt.New()

    // 1. Generate Info
    swagger.Info(swagger.Config{
        Title:       "My API",
        Version:     "1.0.0",
        Description: "This is a sample server",
    })

    // 2. Serve Documentation (Scalar UI default)
    // Access at: http://localhost:8080/docs
    app.GET("/docs/*any", swagger.Handler(swagger.Config{
        Theme: "purple", // "purple", "moon", "solar"
    }))

    app.Run(":8080")
}`}</code></pre>
        </div>

        <h2>Using Scalar UI</h2>
        <p>KVolt recommends <strong>Scalar</strong> for its beautiful, modern interface and excellent performance. It is enabled by default when using `swagger.Handler`.</p>

        <h3>Configuration Options</h3>
        <div className="code-block">
            <pre><code>{`swagger.Config{
    URL:          "/openapi.json", // Path to spec file
    DeepLinking:  true,
    DocExpansion: "list",
    Theme:        "moon",          // Scalar Theme
}`}</code></pre>
        </div>

        <h2>Route Annotations</h2>
        <p>Use comments to generate operation details.</p>
        <div className="code-block">
            <pre><code>{`// @Summary Get User
// @Description Fetch a user by their unique ID
// @Tags users
// @Accept json
// @Produce json
// @Param id path int true "User ID"
// @Success 200 {object} User
// @Router /users/{id} [get]
func GetUser(c *kvolt.Context) error { ... }`}</code></pre>
        </div>
    </>
);
