$licensesJson = "tools/licenses.json"
$output = "public/licenses.txt"

Write-Host "Generating license json..."
npx license-checker --out $licensesJson --production -json
$json = Get-Content $licensesJson -Raw | ConvertFrom-Json

"" | Set-Content $output

foreach ($package in $json.PSObject.Properties) {
    $name = $package.name
    $licenses = $package.value.licenses
    $licenseFile = $package.value.licenseFile
    $repo = $package.value.repository

    Add-Content $output ("=" * 60)
    Add-Content $output "$name"
    Add-Content $output "License: $licenses"
    if ($repo) {
        Add-Content $output "Repository: $repo"
    }
    Add-Content $output ""

    if($licenseFile -and (Test-Path $licenseFile)) {
        Get-Content $licenseFile | Add-Content $output
    }

    Add-Content $output "`n"
}

Remove-Item $licensesJson
Write-Host "licenses output to $output"