@echo off
setlocal enabledelayedexpansion
for /f "tokens=*" %%i in ('git remote') do (
    set "remote=%%i"
    echo Pushing to !remote!...
    git push !remote! main
    echo ---------------------------------------------------------------------------------------------------------
)
echo completed successfully.
pause
endlocal