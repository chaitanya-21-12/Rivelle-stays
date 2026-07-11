#!/bin/bash
# ============================================================
# git-push.sh — Ek command se changes Git pe push karo
# Usage: ./scripts/git-push.sh "apna commit message"
# ============================================================

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🚀 Rivelle Stays — Git Auto Push${NC}"
echo "========================================"

# Commit message
if [ -z "$1" ]; then
  TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
  MSG="Update: $TIMESTAMP"
else
  MSG="$1"
fi

# Check if there's anything to commit
if git diff --quiet && git diff --staged --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
  echo -e "${YELLOW}⚠️  Koi changes nahi hain push karne ke liye.${NC}"
  exit 0
fi

echo -e "${YELLOW}📋 Changed files:${NC}"
git status --short

echo ""
echo -e "${YELLOW}📝 Commit message: ${NC}\"$MSG\""
echo ""

# Stage all changes
git add -A

# Commit
git commit -m "$MSG"

# Push
echo -e "${BLUE}⬆️  GitHub pe push ho raha hai...${NC}"
git push origin main

echo ""
echo -e "${GREEN}✅ Successfully pushed to GitHub!${NC}"
echo -e "${BLUE}🔗 Repo: $(git remote get-url origin)${NC}"
