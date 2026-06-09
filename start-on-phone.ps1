$ErrorActionPreference = "Stop"

$port = 8787
$appRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$localIp = Get-NetIPAddress -AddressFamily IPv4 |
    Where-Object {
        $_.IPAddress -notlike "127.*" -and
        $_.IPAddress -notlike "169.254.*" -and
        $_.InterfaceAlias -notmatch "Loopback|vEthernet|Bluetooth"
    } |
    Sort-Object InterfaceMetric |
    Select-Object -First 1 -ExpandProperty IPAddress

Write-Host ""
Write-Host "Sylvie + Elias Ideas is ready." -ForegroundColor Green
Write-Host "On this computer: http://localhost:$port"

if ($localIp) {
    Write-Host "On a phone using the same Wi-Fi: http://${localIp}:$port" -ForegroundColor Cyan
} else {
    Write-Host "A phone address could not be detected. Check that this computer is connected to Wi-Fi." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Keep this window open. Press Ctrl+C to stop the app."
Write-Host ""

python -m http.server $port --bind 0.0.0.0 --directory $appRoot
