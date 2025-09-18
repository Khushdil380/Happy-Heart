#!/usr/bin/env node

import AdvancedThemeGenerator from './src/themes/advanced-generator.js';

console.log('🎨 Building Advanced Happy Heart themes...\n');

try {
  const generator = new AdvancedThemeGenerator();
  
  // Show available themes
  console.log('📋 Available theme palettes:');
  const themes = generator.listThemes();
  themes.forEach(theme => {
    console.log(`  - ${theme.id}: ${theme.name} (${theme.type})`);
    console.log(`    Font: ${theme.fonts.primary} / ${theme.fonts.secondary}`);
  });
  
  console.log('\n🔧 Generating themes...\n');
  
  // Generate all themes
  generator.generateAllThemes();
  
  console.log('\n✅ All advanced themes generated successfully!');
  console.log('📁 Themes are available in the ./themes/ directory');
  console.log('🎯 Each theme has optimized colors for all UI sections:');
  console.log('   - Activity Bar');
  console.log('   - Side Bar');
  console.log('   - Editor Group/Editor Area');
  console.log('   - Panel');
  console.log('   - Status Bar');
  console.log('   - Title Bar');
  console.log('   - Menu Bar');
  console.log('   - Tab Bar');
  console.log('   - Breadcrumbs');
  console.log('   - Notifications');
  console.log('\n🚀 Ready to publish to VS Code Marketplace!');
} catch (error) {
  console.error('❌ Error building advanced themes:', error.message);
  process.exit(1);
}
