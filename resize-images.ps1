Add-Type -AssemblyName System.Drawing

$srcRoot = Resolve-Path "src/img/products"
$dstRoot = "src/img/products/_thumbs"
if (!(Test-Path $dstRoot)) { New-Item -ItemType Directory -Path $dstRoot | Out-Null }

# Imagens usadas no index (cards + carousel), ignorando os do carrossel que já repetem
$files = @(
    "CLASSIC SERIES/IC10B.jpg",
    "CACAU SANTOS/CS10LB.jpeg",
    "IRONFLEX SERIES/IF10LB.jpg",
    "IRONFLEX SERIES/IF10LTX.jpg",
    "IRONFLEX SERIES/IF10LAZT.jpg",
    "VINTAGE SERIES/ESP30LB.jpg",
    "ACOUSTIC SERIES/AS10LB.jpg",
    "KEYBOARD SERIES/Keyboard Series Teclado.jpeg",
    "KING SERIES/KL10LB.jpg",
    "BASS JUMBO/KING BASS JUMBO.jpg",
    "PEDAL SERIES/PIM15B.jpg",
    "SPEAKER SERIES/SSC103.jpg",
    "EXTENDER SERIES/EX10B.jpg",
    "DJ SERIES/SG01N.jpg",
    "CABOS EM METRO/FIO MULTICANAL - MEDUSA/FMC20.jpg",
    "CABOS EM METRO/FIO INSTRUMENTO/FI030BE.jpg",
    "PLUGS/P10 MACHO/P10MST.jpg"
)

$maxW = 420
$log = @()

# Codificador JPEG com qualidade
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq "image/jpeg" }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 80L)

foreach ($rel in $files) {
    $src = Join-Path $srcRoot $rel
    if (!(Test-Path $src)) {
        $log += "MISSING: $rel"
        continue
    }
    try {
        $img = [System.Drawing.Image]::FromFile($src)
        $origW = $img.Width
        $origH = $img.Height
        $ratio = [double]$origH / [double]$origW
        $newW = $maxW
        $newH = [int]($newW * $ratio)
        $thumb = $img.GetThumbnailImage($newW, $newH, $null, [IntPtr]::Zero)

        # nome unico baseado no caminho
        $safe = ($rel -replace '[\\/]', '_') -replace '\.\w+$',''
        $dst = Join-Path $dstRoot ($safe + ".jpg")

        $thumb.Save($dst, $jpegCodec, $encoderParams)
        $img.Dispose()
        $thumb.Dispose()

        $dstSize = (Get-Item $dst).Length
        $srcSize = (Get-Item $src).Length
        $log += "OK: $rel ($srcSize bytes) -> $dst ($dstSize bytes) [$newW x $newH]"
    } catch {
        $log += "ERROR: $rel -> $($_.Exception.Message)"
    }
}

$log | Out-File -FilePath "resize-log.txt" -Encoding UTF8
Write-Output "Done"
