#!/usr/bin/env node

import ThemeGenerator from './src/themes/generator.js';

console.log('🎨 Building Happy Heart themes...\n');

try {
  const generator = new ThemeGenerator();
  generator.generateAllThemes();
  
  console.log('\n✅ All themes generated successfully!');
  console.log('📁 Themes are available in the ./themes/ directory');
  console.log('🚀 Ready to publish to VS Code Marketplace!');
} catch (error) {
  console.error('❌ Error building themes:', error.message);
  process.exit(1);
}
