@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found. Install Node.js LTS from https://nodejs.org/ and try again.
  pause
  exit /b 1
)
echo.
echo ================================================
echo  22:11 - A Story Called Us - Local Preview
echo ================================================
echo.
echo Installing project dependencies...
call npm install
if errorlevel 1 (
  echo npm install failed. Please check your internet connection.
  pause
  exit /b 1
)
echo.
echo Starting local website. Open the URL shown below.
call npm run dev
pause
