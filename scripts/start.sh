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

# ─── Check MongoDB ───────────────────────────────────────────
check_mongodb() {
  if command -v mongod &>/dev/null; then
    echo -e "${GREEN}✅ MongoDB found${NC}"
    # Start MongoDB if not running
    if ! pgrep -x "mongod" > /dev/null; then
      echo -e "${YELLOW}🔄 MongoDB start ho raha hai...${NC}"
      mkdir -p "$HOME/data/db"
      mongod --dbpath "$HOME/data/db" --fork --logpath "$HOME/data/mongod.log" 2>/dev/null || true
      sleep 2
    else
      echo -e "${GREEN}✅ MongoDB already running${NC}"
    fi
  else
    echo -e "${YELLOW}⚠️  MongoDB locally nahi mila.${NC}"
    echo -e "${YELLOW}   Atlas ya local MongoDB install karo.${NC}"
    echo -e "${YELLOW}   Backend .env mein MONGO_URL update karo.${NC}"
  fi
}

# ─── Start Backend ───────────────────────────────────────────
start_backend() {
  echo ""
  echo -e "${BLUE}🐍 Backend (FastAPI) start ho raha hai...${NC}"
  cd "$PROJECT_ROOT/backend"

  if [ ! -f ".env" ]; then
    echo -e "${RED}❌ backend/.env file nahi mili! Pehle banao.${NC}"
    exit 1
  fi

  # Activate virtual environment
  if [ -d "venv" ]; then
    source venv/bin/activate
  else
    echo -e "${YELLOW}⚠️  venv nahi mili, global python use ho raha hai${NC}"
  fi

  # Install dependencies if needed (use .local version without private packages)
  REQ_FILE="requirements.local.txt"
  if [ ! -f "$REQ_FILE" ]; then REQ_FILE="requirements.txt"; fi
  pip install -r "$REQ_FILE" -q

  echo -e "${GREEN}✅ Backend port 8001 pe shuru ho raha hai...${NC}"
  uvicorn server:app --host 0.0.0.0 --port 8001 --reload &
  BACKEND_PID=$!
  echo "$BACKEND_PID" > "$PROJECT_ROOT/.backend.pid"
  echo -e "${GREEN}   Backend PID: $BACKEND_PID${NC}"
}

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
  echo -e "${YELLOW}🛑 Servers band ho rahe hain...${NC}"
  if [ -f "$PROJECT_ROOT/.backend.pid" ]; then
    kill $(cat "$PROJECT_ROOT/.backend.pid") 2>/dev/null || true
    rm "$PROJECT_ROOT/.backend.pid"
  fi
  if [ -f "$PROJECT_ROOT/.frontend.pid" ]; then
    kill $(cat "$PROJECT_ROOT/.frontend.pid") 2>/dev/null || true
    rm "$PROJECT_ROOT/.frontend.pid"
  fi
  echo -e "${GREEN}✅ Sab kuch band ho gaya.${NC}"
  exit 0
}

trap cleanup SIGINT SIGTERM

# ─── Main ────────────────────────────────────────────────────
check_mongodb
start_backend
sleep 2
start_frontend

echo ""
echo -e "${GREEN}============================================================${NC}"
echo -e "${GREEN}🎉 Rivelle Stays chal raha hai!${NC}"
echo -e "${GREEN}   🌐 Frontend:  http://localhost:3000${NC}"
echo -e "${GREEN}   🔧 Backend:   http://localhost:8001${NC}"
echo -e "${GREEN}   📚 API Docs:  http://localhost:8001/docs${NC}"
echo -e "${GREEN}============================================================${NC}"
echo -e "${YELLOW}   Ctrl+C dabaao band karne ke liye${NC}"
echo ""

# Keep script running
wait
