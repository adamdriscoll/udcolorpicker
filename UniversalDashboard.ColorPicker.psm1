$IndexJs = Get-ChildItem "$PSScriptRoot\index.*.bundle.js"
$AssetId = [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset($IndexJs.FullName)

function New-UDColorPicker {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [ValidateSet('Alpha', 'Block', 'Chrome', 'Circle', 'Compact', 'Github', 'Hue', 'Material', 'Photoshop', 'Sketch', 'SliderPicker', 'Swatches', 'Twitter')]
        [string]$Variant = "Material",
        [Parameter()]
        [Endpoint]$OnChange,
        [Parameter()]
        [string]$Color,
        [Parameter()]
        [string]$Width
    )

    End {
        if ($OnChange) {
            $OnChange.Register($Id, $PSCmdlet)
        }

        @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-colorpicker"
            id       = $Id

            variant  = $Variant.ToLower()
            color    = $Color
            width    = $Width
        }
    }
}