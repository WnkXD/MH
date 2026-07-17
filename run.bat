@echo off
title Vercel Local Dev (Port 3000)
echo 正在啟動 Vercel 本地模擬環境，請勿關閉此視窗...
echo 網址：http://localhost:3000
echo.

npx vercel dev --listen 3000

pause