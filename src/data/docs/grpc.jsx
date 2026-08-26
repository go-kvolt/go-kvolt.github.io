export const grpc = (
    <>
        <h1>gRPC</h1>
        <p>HTTP and gRPC in one process. Added in v1.1.0. Use <code>app.GRPCServer()</code> then <code>RunAll</code> / <code>RunDual</code>.</p>
        <div className="code-block">
            <pre><code>{`import (
    "github.com/go-kvolt/kvolt"
    kvctx "github.com/go-kvolt/kvolt/context"
    kvgrpc "github.com/go-kvolt/kvolt/grpc"
    pb "your-app/proto/gen"
)

func main() {
    app := kvolt.Default()

    app.GET("/health", func(c *kvctx.Context) error {
        return c.JSON(200, map[string]string{"status": "ok"})
    })

    grpcSrv := app.GRPCServer(
        kvgrpc.WithReflection(true),
        kvgrpc.WithHealthCheck(true),
        kvgrpc.WithUnaryInterceptors(
            kvgrpc.LoggingInterceptor(),
            kvgrpc.RecoveryInterceptor(),
        ),
    )
    pb.RegisterMyServiceServer(grpcSrv.Raw(), &myServiceImpl{})

    app.RunAll(":8080", ":9090")
}`}</code></pre>
        </div>
        <p>Options: <code>WithReflection</code>, <code>WithHealthCheck</code>, unary/stream interceptors, native <code>grpc.ServerOption</code>. Full guide: <a href="https://github.com/go-kvolt/kvolt/blob/main/docs/grpc.md" target="_blank" rel="noreferrer">docs/grpc.md</a>.</p>
    </>
);
