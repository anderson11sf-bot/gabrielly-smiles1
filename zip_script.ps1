$source = "c:\Users\ander\OneDrive\Desktop\prototipo G\gabrielly-smiles-main\gabrielly-smiles-main"
$vercelZip = "$source\vercel_source.zip"
$hostingerZip = "$source\hostinger_build.zip"

if (Test-Path $vercelZip) { Remove-Item $vercelZip }
if (Test-Path $hostingerZip) { Remove-Item $hostingerZip }

Add-Type -AssemblyName System.IO.Compression.FileSystem

# Build Hostinger ZIP (dist folder)
if (Test-Path "$source\dist") {
    $zip1 = [System.IO.Compression.ZipFile]::Open($hostingerZip, [System.IO.Compression.ZipArchiveMode]::Create)
    Get-ChildItem -Path "$source\dist" -Recurse | Where-Object { -not $_.PSIsContainer } | ForEach-Object {
        $relativePath = $_.FullName.Substring("$source\dist\".Length)
        [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip1, $_.FullName, $relativePath)
    }
    $zip1.Dispose()
}

# Build Vercel ZIP (source without node_modules/dist/.git)
$zip2 = [System.IO.Compression.ZipFile]::Open($vercelZip, [System.IO.Compression.ZipArchiveMode]::Create)
Get-ChildItem -Path $source -Recurse | Where-Object {
    $_.FullName -notmatch '\\node_modules\\' -and
    $_.FullName -notmatch '\\dist\\' -and
    $_.FullName -notmatch '\\\.git\\' -and
    $_.Name -ne 'vercel_source.zip' -and
    $_.Name -ne 'hostinger_build.zip' -and
    $_.Name -ne 'zip_script.ps1'
} | Where-Object { -not $_.PSIsContainer } | ForEach-Object {
    $relativePath = $_.FullName.Substring($source.Length + 1)
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip2, $_.FullName, $relativePath)
}
$zip2.Dispose()

Write-Output "Zip creation complete."
