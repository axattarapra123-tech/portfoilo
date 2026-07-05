@echo off
title Uploading Portfolio to GitHub...
cd /d "D:\axat"

echo ===================================================
echo   AUTOMATED GITHUB UPLOADER FOR AKSHAT PORTFOLIO
echo ===================================================
echo.

echo [1/5] Initializing Git repository...
git init
echo.

echo [2/5] Selecting files (git add)...
git add .
echo.

echo [3/5] Configuring Git user details locally...
git config user.email "axattarapra123@gmail.com"
git config user.name "Akshat Tarapra"
echo.

echo [3.5/5] Creating first commit...
git commit -m "first commit"
echo.

echo [4/5] Creating main branch...
git branch -M main
echo.

echo [5/5] Linking to GitHub repository...
git remote remove origin 2>nul
git remote add origin https://github.com/axattarapra123-tech/portfoilo.git
echo.

echo ===================================================
echo   [FINAL STEP] Pushing code to GitHub...
echo   (Note: If GitHub prompts for login, please complete it)
echo ===================================================
git push -f origin main
echo.

echo ===================================================
echo   Upload process finished! Check above for messages.
echo ===================================================
echo.
pause
