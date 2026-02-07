@echo off
echo Iniciando servidor local...
echo.
echo Abre tu navegador en: http://localhost:8000/src/index.html
echo.
echo Presiona Ctrl+C para detener el servidor
echo.
python -m http.server 8000
pause

