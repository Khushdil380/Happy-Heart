#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Happy Heart Theme - Publishing Script');
console.log('=====================================\n');

// Check if we're in the right directory
if (!fs.existsSync('package.json')) {
    console.error('❌ Error: package.json not found. Run this script from the project root.');
    process.exit(1);
}

// Read package.json to get current version
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const currentVersion = packageJson.version;

console.log(`📦 Current version: ${currentVersion}`);
console.log(`📅 Publishing date: ${new Date().toISOString().split('T')[0]}\n`);

// Step 1: Build themes
console.log('🔨 Step 1: Building themes...');
try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Themes built successfully!\n');
} catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
}

// Step 2: Package extension
console.log('📦 Step 2: Packaging extension...');
try {
    execSync('npm run package', { stdio: 'inherit' });
    console.log('✅ Extension packaged successfully!\n');
} catch (error) {
    console.error('❌ Packaging failed:', error.message);
    process.exit(1);
}

// Step 3: Check if .vsix file exists
const vsixFile = `happy-heart-${currentVersion}.vsix`;
if (!fs.existsSync(vsixFile)) {
    console.error(`❌ Error: ${vsixFile} not found.`);
    process.exit(1);
}

console.log(`✅ Package file created: ${vsixFile}`);
console.log(`📊 File size: ${(fs.statSync(vsixFile).size / 1024).toFixed(2)} KB\n`);

// Step 4: Show next steps
console.log('🎯 Next Steps:');
console.log('==============');
console.log('1. Test the extension locally:');
console.log(`   code --install-extension ${vsixFile}`);
console.log('');
console.log('2. If everything works, publish to marketplace:');
console.log('   vsce publish');
console.log('');
console.log('3. Verify publication:');
console.log('   https://marketplace.visualstudio.com/items?itemName=Khushdil380.happy-heart');
console.log('');

// Step 5: Show what's new
console.log('🎉 What\'s New in This Version:');
console.log('==============================');
console.log('• 17 vibrant themes (vs 5 in v0.0.2)');
console.log('• Keyboard shortcuts for instant theme switching');
console.log('• Advanced UI theming for all VS Code sections');
console.log('• Enhanced syntax highlighting with 30+ token types');
console.log('• Modular architecture for easy customization');
console.log('• Comprehensive documentation suite');
console.log('• Professional font recommendations');
console.log('• Bracket pair colorization');
console.log('');

console.log('🚀 Ready to publish Happy Heart Theme v' + currentVersion + '!');
console.log('Happy Coding! 🎨✨');
