# ---------------------------------------------
# Build .aab from Natively.dev export using EAS
# ---------------------------------------------

param (
    [string]$ProjectPath = "C:\SRN\NativelyExport",
    [string]$KeystorePath = "C:\SRN\release\my-release-key.jks",
    [string]$KeystorePassword = "ahvnmt",
    [string]$KeyAlias = "my-key-alias",
    [string]$KeyPassword = "ahvnmt"
)

# 1. Go to project folder
cd $ProjectPath

# 2. Install Expo/EAS CLI if not already installed
Write-Host "Installing expo-cli and eas-cli globally..."
npm install -g expo-cli eas-cli

# 3. Initialize EAS (if eas.json doesn't exist)
if (-Not (Test-Path "./eas.json")) {
    Write-Host "Configuring EAS for Android..."
    eas build:configure --platform android --non-interactive
}

# 4. Add keystore if exists
if (Test-Path $KeystorePath) {
    Write-Host "Uploading existing keystore..."
    eas credentials -p android --non-interactive `
        --keystore-path $KeystorePath `
        --keystore-password $KeystorePassword `
        --key-alias $KeyAlias `
        --key-password $KeyPassword
} else {
    Write-Host "No keystore provided, Expo will generate one automatically."
}

# 5. Start Android .aab build
Write-Host "Starting Android build (.aab)..."
eas build --platform android --profile production --non-interactive

Write-Host "Build started. After completion, download link will appear in the output."
