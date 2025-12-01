@echo off
echo ====================================
echo  Quick Fix for npm Install Issue
echo ====================================
echo.

echo Step 1: Installing Yarn globally...
call npm install -g yarn

echo.
echo Step 2: Removing problematic node_modules...
if exist node_modules (
    echo Removing node_modules folder...
    timeout /t 2 /nobreak >nul
    rd /s /q node_modules 2>nul
)

echo.
echo Step 3: Installing dependencies with Yarn...
call yarn install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ====================================
    echo   SUCCESS! Dependencies Installed
    echo ====================================
    echo.
    echo Starting development server...
    echo Open http://localhost:3000 in browser
    echo.
    call yarn dev
) else (
    echo.
    echo Installation failed. Trying alternative method...
    echo.
    call npm install --legacy-peer-deps --force
    if %ERRORLEVEL% EQU 0 (
        echo Success with npm!
        call npm run dev
    ) else (
        echo.
        echo Please run manually:
        echo 1. npm install -g pnpm
        echo 2. pnpm install
        echo 3. pnpm dev
        pause
    )
)

