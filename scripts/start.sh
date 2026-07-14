#!/bin/bash
# ============================================================
# start.sh — Ek command se pura project localhost pe chalao
# Usage: ./scripts/start.sh
# ============================================================

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m'

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo -e "${CYAN}"
echo "  ██████╗ ██╗██╗   ██╗███████╗██╗     ██╗     ███████╗"
echo "  ██╔══██╗██║██║   ██║██╔════╝██║     ██║     ██╔════╝"
echo "  ██████╔╝██║██║   ██║█████╗  ██║     ██║     █████╗  "
echo "  ██╔══██╗██║╚██╗ ██╔╝██╔══╝  ██║     ██║     ██╔══╝  "
echo "  ██║  ██║██║ ╚████╔╝ ███████╗███████╗███████╗███████╗"
echo "  ╚═╝  ╚═╝╚═╝  ╚═══╝  ╚══════╝╚══════╝╚══════╝╚══════╝"
echo -e "${NC}"
echo -e "${BLUE}           🏡 Rivelle Stays — Local Dev Server${NC}"
echo "============================================================"

# ─── Start Frontend ──────────────────────────────────────────
start_frontend() {
  echo ""
  echo -e "${BLUE}⚛️  Frontend (React) start ho raha hai...${NC}"
  cd "$PROJECT_ROOT/frontend"

  if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Dependencies install ho rahi hain...${NC}"
    npm install --legacy-peer-deps
  fi

  echo -e "${GREEN}✅ Frontend port 3000 pe shuru ho raha hai...${NC}"
  npm start &
  FRONTEND_PID=$!
  echo "$FRONTEND_PID" > "$PROJECT_ROOT/.frontend.pid"
  echo -e "${GREEN}   Frontend PID: $FRONTEND_PID${NC}"
}

# ─── Cleanup on Ctrl+C ───────────────────────────────────────
cleanup() {
  echo ""
  echo -e "${YELLOW}🛑 Server band ho raha hai...${NC}"
  if [ -f "$PROJECT_ROOT/.frontend.pid" ]; then
    kill $(cat "$PROJECT_ROOT/.frontend.pid") 2>/dev/null || true
    rm "$PROJECT_ROOT/.frontend.pid"
  fi
  echo -e "${GREEN}✅ Sab kuch band ho gaya.${NC}"
  exit 0
}

trap cleanup SIGINT SIGTERM

# ─── Main ────────────────────────────────────────────────────
start_frontend

echo ""
echo -e "${GREEN}============================================================${NC}"
echo -e "${GREEN}🎉 Rivelle Stays chal raha hai!${NC}"
echo -e "${GREEN}   🌐 Frontend:  http://localhost:3000${NC}"
echo -e "${GREEN}============================================================${NC}"
echo -e "${YELLOW}   Ctrl+C dabaao band karne ke liye${NC}"
echo ""

# Keep script running
wait
