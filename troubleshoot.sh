#!/bin/bash

# ===================================
# TROUBLESHOOTING SCRIPT - macOS/Linux
# Projekt: Makler Michal Novotny
# ===================================

echo ""
echo "========================================"
echo " TROUBLESHOOTING SCRIPT"
echo " Projekt: Makler Michal Novotny"
echo "========================================"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node.js
echo "[1/5] Kontrola Node.js verze..."
if command -v node &> /dev/null; then
    echo -e "${GREEN}[OK]${NC} Node.js je nainstalován"
    node --version
else
    echo -e "${RED}[ERROR]${NC} Node.js není nainstalován!"
    echo "Stáhněte z: https://nodejs.org/"
    exit 1
fi
echo ""

# Check npm
echo "[2/5] Kontrola npm..."
if command -v npm &> /dev/null; then
    echo -e "${GREEN}[OK]${NC} npm je dostupný"
    npm --version
else
    echo -e "${RED}[ERROR]${NC} npm není dostupný!"
    exit 1
fi
echo ""

# Check if in correct directory
echo "[3/5] Kontrola adresáře..."
if [ ! -f "package.json" ]; then
    echo -e "${RED}[ERROR]${NC} Nejste ve správném adresáři!"
    echo "Přejděte do: makler-projekt"
    echo "Použijte: cd ~/Projects/makler-projekt"
    exit 1
else
    echo -e "${GREEN}[OK]${NC} Správný adresář"
fi
echo ""

# Check node_modules
echo "[4/5] Kontrola node_modules..."
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}[WARNING]${NC} node_modules neexistují"
    echo "Spouštím: npm install"
    echo ""
    npm install
    if [ $? -ne 0 ]; then
        echo -e "${RED}[ERROR]${NC} npm install selhalo!"
        exit 1
    fi
else
    echo -e "${GREEN}[OK]${NC} node_modules existují"
fi
echo ""

# Check port 3000
echo "[5/5] Kontrola portu 3000..."
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo -e "${YELLOW}[WARNING]${NC} Port 3000 je již obsazen!"
    echo "Můžete použít jiný port: npm run dev -- -p 3001"
    echo "Nebo ukončete proces:"
    lsof -i :3000
else
    echo -e "${GREEN}[OK]${NC} Port 3000 je volný"
fi
echo ""

# Final summary
echo "========================================"
echo " KONTROLA DOKONČENA"
echo "========================================"
echo ""
echo "Pokud vše [OK], spusťte:"
echo "  npm run dev"
echo ""
echo "Pak otevřete: http://localhost:3000"
echo ""
