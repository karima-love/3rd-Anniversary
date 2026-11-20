@echo off
setlocal
cd /d "%~dp0"
where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js / npm was not found. Install Node.js LTS first.
  pause
  exit /b 1
)
call npm install
if errorlevel 1 goto :fail
call npm run verify:source
if errorlevel 1 goto :fail
call npm run typecheck
if errorlevel 1 goto :fail
call npm run build
if errorlevel 1 goto :fail
echo.
echo Production build completed. Your dist folder is ready.
pause
exit /b 0
:fail
echo.
echo A check failed. Please read the error above.
pause
exit /b 1
