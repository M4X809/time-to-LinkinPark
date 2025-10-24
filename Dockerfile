# Use the official Bun image as base
FROM oven/bun:1 as builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN bun run build

# Use a lightweight nginx image for serving static files
FROM nginx:alpine

# Copy the built static assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration (optional - nginx default config works for SPA)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
