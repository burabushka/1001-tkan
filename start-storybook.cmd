@echo off
setlocal
cd /d "%~dp0"
echo Storybook 1001 Tkani: http://127.0.0.1:6006/
echo Keep this window open while using Storybook.
echo.
npm.cmd run storybook -- --host 127.0.0.1 --no-open
endlocal
