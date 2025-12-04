@echo off
echo Creating .env.local file...

(
echo NEXT_PUBLIC_API_URL=http://localhost:5000
) > .env.local

echo .env.local file created successfully!
echo.
pause


