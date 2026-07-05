@echo off
title Akshat Tarapra Portfolio Runner
cd /d "D:\axat"
echo ===================================================
echo   Starting Akshat Tarapra Portfolio Dev Server...
echo ===================================================
echo.

:: Start Vite dev server in the background
start /b cmd /c "npm run dev"

echo Waiting 3 seconds for server to start...
timeout /t 3 >nul

:: Open browser
start "" "http://localhost:5173/"

echo.
echo Server is running! 
echo Keep this window open while you view the portfolio.
echo Press Ctrl+C or close this window to stop the server.
echo.
pause
