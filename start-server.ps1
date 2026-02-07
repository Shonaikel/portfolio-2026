Write-Host "Iniciando servidor local..." -ForegroundColor Green
Write-Host ""
Write-Host "Abre tu navegador en: http://localhost:8000/src/index.html" -ForegroundColor Yellow
Write-Host ""
Write-Host "Presiona Ctrl+C para detener el servidor" -ForegroundColor Cyan
Write-Host ""

# Intentar con Python primero
try {
    python -m http.server 8000
} catch {
    # Si Python no funciona, intentar con Node.js
    Write-Host "Python no encontrado, intentando con Node.js..." -ForegroundColor Yellow
    try {
        npx http-server -p 8000
    } catch {
        Write-Host "Error: Necesitas Python o Node.js instalado" -ForegroundColor Red
        Write-Host "Instala Python desde: https://www.python.org/downloads/" -ForegroundColor Yellow
        Write-Host "O Node.js desde: https://nodejs.org/" -ForegroundColor Yellow
        pause
    }
}

