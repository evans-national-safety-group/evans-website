[build]
  command = "npm run build"
  publish = "out"
  
[build.environment]
  NODE_VERSION = "18"
  NPM_VERSION = "8"
  NEXT_TELEMETRY_DISABLED = "1"
  
# Redirects handled by Netlify (since Next.js static export can't handle them)
[[redirects]]
  from = "/home"
  to = "/"
  status = 301

[[redirects]]
  from = "/contact-us"
  to = "/#contact"
  status = 301
  
[[redirects]]
  from = "/about-us" 
  to = "/#platform"
  status = 301
  
[[redirects]]
  from = "/solutions"
  to = "/#ecosystem"
  status = 301
  
[[redirects]]
  from = "/demo"
  to = "/#contact"
  status = 301

# SPA fallback for client-side routing
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Basic security headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

# Cache static assets
[[headers]]
  for = "/_next/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
