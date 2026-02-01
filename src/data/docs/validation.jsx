export const validation = (
    <>
        <h1>Validation ✅</h1>
        <p>KVolt uses the industry-standard <a href="https://github.com/go-playground/validator" target="_blank">go-playground/validator/v10</a> library for powerful struct validation.</p>

        <h2>Usage</h2>
        <p>Validation is automatically triggered when you call `c.Bind()`. Simply add tags to your struct fields.</p>
        <div className="code-block">
            <pre><code>{`type RegisterRequest struct {
    Username string \`json:"username" validate:"required,alphanum,min=3,max=30"\`
    Email    string \`json:"email"    validate:"required,email"\`
    Age      int    \`json:"age"      validate:"gte=18,lte=130"\`
    Password string \`json:"password" validate:"required,min=8"\`
}

func Register(c *kvolt.Context) error {
    var req RegisterRequest
    if err := c.Bind(&req); err != nil {
        // Returns 400 with a detailed validation error message
        return c.Status(400).String(400, "Validation Failed: " + err.Error())
    }
    
    return c.String(200, "User Registered: " + req.Username)
}`}</code></pre>
        </div>

        <h2>Common Tags</h2>
        <table className="docs-table">
            <thead>
                <tr>
                    <th>Tag</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr><td><code>required</code></td><td>Field cannot be empty/nil.</td></tr>
                <tr><td><code>email</code></td><td>Must be a valid email address.</td></tr>
                <tr><td><code>min=x</code></td><td>Min length (string) or value (number).</td></tr>
                <tr><td><code>max=x</code></td><td>Max length (string) or value (number).</td></tr>
                <tr><td><code>alphanum</code></td><td>Alpha-numeric characters only.</td></tr>
                <tr><td><code>uuid</code></td><td>Must be a valid UUID.</td></tr>
                <tr><td><code>url</code></td><td>Must be a valid URL.</td></tr>
                <tr><td><code>oneof=r b g</code></td><td>Must be one of the specified values.</td></tr>
            </tbody>
        </table>
    </>
);
