$ErrorActionPreference = 'Stop'

function Say([string]$msg) { Write-Host $msg -ForegroundColor Green }
function Warn([string]$msg) { Write-Host $msg -ForegroundColor Red }

Say "➡️  Cleaning node_modules and caches (Windows)…"

# Remove node_modules and lockfiles
if (Test-Path node_modules) { Remove-Item -Recurse -Force node_modules }
@('package-lock.json','pnpm-lock.yaml','yarn.lock','bun.lockb') | ForEach-Object { if (Test-Path $_) { Remove-Item -Force $_ } }

# Next.js caches
if (Test-Path '.next') { Remove-Item -Recurse -Force .next }

# Other caches
@('dist','build','out') | ForEach-Object { if (Test-Path $_) { Remove-Item -Recurse -Force $_ } }

# pnpm store cleanup if available
if (Get-Command pnpm -ErrorAction SilentlyContinue) {
  Say "🧹 Cleaning pnpm store…"
  try { pnpm store prune } catch { Warn $_ }
}

# npm cache verify/clean
if (Get-Command npm -ErrorAction SilentlyContinue) {
  Say "🧹 Cleaning npm cache…"
  try { npm cache verify } catch { Warn $_ }
  try { npm cache clean --force } catch { Warn $_ }
}

# Reinstall using detected package manager (pnpm preferred)
if (Get-Command pnpm -ErrorAction SilentlyContinue) {
  Say "📦 Installing with pnpm…"
  pnpm install
} elseif (Get-Command yarn -ErrorAction SilentlyContinue) {
  Say "📦 Installing with yarn…"
  yarn install --check-files
} else {
  Say "📦 Installing with npm…"
  npm install
}

Say "✅ Reset complete."
