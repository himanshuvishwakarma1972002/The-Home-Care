@echo off
echo ====================================
echo  The Home Care - Next.js Project
echo ====================================
echo.
echo Installing dependencies...
echo.

REM Try npm first
echo Trying npm install...
call npm install --legacy-peer-deps

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo npm install failed. Trying with yarn...
    call yarn install
    
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo Installation failed!
        echo Please check INSTALLATION.md for solutions
        pause
        exit /b 1
    )
)

echo.
echo ====================================
echo Installation successful!
echo Starting development server...
echo ====================================
echo.
echo Open http://localhost:3000 in your browser
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

