@echo off
REM ===================================
REM TROUBLESHOOTING SCRIPT - Windows
REM Projekt: Makler Michal Novotny
REM ===================================

echo.
echo ========================================
echo  TROUBLESHOOTING SCRIPT
echo  Projekt: Makler Michal Novotny
echo ========================================
echo.

REM Check Node.js
echo [1/5] Kontrola Node.js verze...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js neni nainstalovan!
    echo Stahněte z: https://nodejs.org/
    pause
    exit /b 1
) else (
    echo [OK] Node.js je nainstalovan
    node --version
)
echo.

REM Check npm
echo [2/5] Kontrola npm...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] npm neni dostupny!
    pause
    exit /b 1
) else (
    echo [OK] npm je dostupny
    npm --version
)
echo.

REM Check if in correct directory
echo [3/5] Kontrola adresare...
if not exist "package.json" (
    echo [ERROR] Nejste ve spravnem adresari!
    echo Prejdete do: makler-projekt
    echo Pouzijte: cd C:\path\to\makler-projekt
    pause
    exit /b 1
) else (
    echo [OK] Spravny adresar
)
echo.

REM Check node_modules
echo [4/5] Kontrola node_modules...
if not exist "node_modules" (
    echo [WARNING] node_modules neexistuji
    echo Spoustim: npm install
    echo.
    npm install
    if %errorlevel% neq 0 (
        echo [ERROR] npm install selhalo!
        pause
        exit /b 1
    )
) else (
    echo [OK] node_modules existuji
)
echo.

REM Check port 3000
echo [5/5] Kontrola portu 3000...
netstat -ano | findstr :3000 >nul 2>&1
if %errorlevel% equ 0 (
    echo [WARNING] Port 3000 je jiz obsazen!
    echo Muzete pouzit jiny port: npm run dev -- -p 3001
    echo Nebo ukoncete proces, ktery port pouziva.
) else (
    echo [OK] Port 3000 je volny
)
echo.

REM Final summary
echo ========================================
echo  KONTROLA DOKONCENA
echo ========================================
echo.
echo Pokud vse [OK], spustte:
echo   npm run dev
echo.
echo Pak otevrte: http://localhost:3000
echo.

pause
