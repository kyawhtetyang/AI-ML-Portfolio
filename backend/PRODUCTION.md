# Production Readiness

Before exposing the backend publicly, verify:

- provider API keys are stored only in server-side environment/secrets
- `CORS_ORIGINS` contains only the deployed frontend origin(s)
- development reload mode is disabled
- production dependencies are reproducible and reviewed
- rate limiting is enabled for public AI endpoints
- request/error logging is available without logging secrets
- provider failures have a safe fallback
- `/health` is monitored
- deployment configuration uses a production process rather than the development Docker Compose commands

The local `docker-compose.yml` is a development environment. It mounts source directories and runs the Vite development server; it is not the production deployment contract.
