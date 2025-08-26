#!/usr/bin/env bash
set -euo pipefail

# Colors
GREEN="\033[0;32m"; RED="\033[0;31m"; NC="\033[0m"

say() { echo -e "${GREEN}$1${NC}"; }
warn() { echo -e "${RED}$1${NC}"; }

say "➡️  Cleaning node_modules and caches (macOS)…"

# Remove node_modules and lockfiles
rm -rf node_modules
rm -f package-lock.json pnpm-lock.yaml yarn.lock bun.lockb

# Next.js caches
rm -rf .next

# Vite/other caches
rm -rf dist build out

# pnpm store cleanup if available
if command -v pnpm >/dev/null 2>&1; then
  say "🧹 Cleaning pnpm store…"
  pnpm store prune || true
fi

# npm cache verify/clean
if command -v npm >/dev/null 2>&1; then
  say "🧹 Cleaning npm cache…"
  npm cache verify || true
  npm cache clean --force || true
fi

# Reinstall using detected package manager (pnpm preferred)
if command -v pnpm >/dev/null 2>&1; then
  say "📦 Installing with pnpm…"
  pnpm install
elif command -v yarn >/dev/null 2>&1; then
  say "📦 Installing with yarn…"
  yarn install --check-files
else
  say "📦 Installing with npm…"
  npm install
fi

say "✅ Reset complete."
