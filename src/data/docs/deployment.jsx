export const deployment = (
    <>
        <h1>Deployment Guide 🚀</h1>
        <p>KVolt applications are compiled into a single binary, making deployment straightforward. This guide covers common deployment strategies.</p>

        <h2>Build for Production</h2>
        <div className="code-block">
            <pre><code># Build a compressed binary
                go build -ldflags="-s -w" -o app cmd/api/main.go

                # (Optional) Compress further with UPX
                upx --best app</code></pre>
        </div>

        <h2>Method 1: Docker (Recommended)</h2>
        <p>Create a multi-stage `Dockerfile` to keep the image small.</p>
        <div className="code-block">
            <pre><code>{`# Stage 1: Build
FROM golang:1.21-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -ldflags="-s -w" -o server cmd/api/main.go

# Stage 2: Run
FROM alpine:latest
WORKDIR /root/
COPY --from=builder /app/server .
COPY --from=builder /app/config.yaml .
COPY --from=builder /app/.env .

EXPOSE 8080
CMD ["./server"]`}</code></pre>
        </div>

        <h2>Method 2: Systemd (Linux)</h2>
        <p>Run KVolt as a background service.</p>
        <div className="code-block">
            <pre><code>{`# /etc/systemd/system/kvolt.service
[Unit]
Description=KVolt Application
After=network.target

[Service]
User=www-data
Group=www-data
ExecStart=/var/www/my-app/server
WorkingDirectory=/var/www/my-app
Restart=always
Environment="PORT=8080"
Environment="GIN_MODE=release"

[Install]
WantedBy=multi-user.target`}</code></pre>
        </div>

        <h2>Method 3: Nginx Reverse Proxy</h2>
        <p>It is best practice to put Nginx in front of KVolt for SSL termination and static file caching.</p>
        <div className="code-block">
            <pre><code>{`server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}`}</code></pre>
        </div>
    </>
);
