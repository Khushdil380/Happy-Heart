# Happy Heart Theme - Troubleshooting Guide

## 🚨 Common Issues & Solutions

### 1. Theme Not Appearing in VS Code

#### Symptoms
- Theme doesn't show up in VS Code theme selector
- Extension installs but no themes are available

#### Solutions
1. **Check package.json**
   ```json
   {
     "contributes": {
       "themes": [
         {
           "label": "Happy Heart X - Theme Name",
           "uiTheme": "vs-dark",
           "path": "./themes/happy-heart-themeName.json"
         }
       ]
   }
   ```

2. **Verify file paths**
   - Ensure path matches generated file name
   - Check file exists in `themes/` directory

3. **Check theme name in generator**
   ```javascript
   // In advanced-generator.js
   getThemeName(paletteName) {
     const names = {
       themeName: 'Happy Heart X - Theme Name'
     };
   }
   ```

4. **Rebuild and reinstall**
   ```bash
   npm run build
   npm run package
   # Install the new .vsix file
   ```

---

### 2. Colors Not Applying Correctly

#### Symptoms
- Theme loads but colors look wrong
- Some colors are missing or incorrect

#### Solutions
1. **Check color format**
   ```javascript
   // ✅ Correct
   primary: '#ff6b35'
   
   // ❌ Wrong
   primary: 'ff6b35'        // Missing #
   primary: '#ff6b35ff'     // Extra characters
   primary: 'red'           // Use hex instead
   ```

2. **Verify all required properties**
   ```javascript
   themeName: {
     primary: '#ff6b35',      // Required
     secondary: '#00d4ff',    // Required
     accent: '#ffd700',       // Required
     background: '#0a0a0a',   // Required
     surface: '#1a1a1a',      // Required
     text: '#ffffff'         // Required
   }
   ```

3. **Check for typos**
   - `primay` instead of `primary`
   - `backgound` instead of `background`
   - Missing commas

---

### 3. Build Errors

#### Symptoms
- `npm run build` fails
- JavaScript syntax errors
- Missing properties errors

#### Solutions
1. **Check JavaScript syntax**
   ```javascript
   // ✅ Correct
   export const colorPalettes = {
     themeName: {
       primary: '#ff6b35',
       secondary: '#00d4ff'
     }
   };
   
   // ❌ Wrong - missing comma
   export const colorPalettes = {
     themeName: {
       primary: '#ff6b35'
       secondary: '#00d4ff'  // Missing comma
     }
   };
   ```

2. **Verify all themes have required properties**
   - Every theme needs: primary, secondary, accent, background, surface, text
   - Check bracketColors has matching entries
   - Check tokenColors has matching entries
   - Check fontRecommendations has matching entries

3. **Check for missing imports**
   ```javascript
   // Ensure all imports are correct
   import { 
     colorPalettes, 
     uiSections, 
     bracketColors, 
     tokenColors, 
     fontRecommendations 
   } from './advanced-variables-comprehensive.js';
   ```

---

### 4. Syntax Highlighting Issues

#### Symptoms
- Code appears in single color
- No syntax highlighting
- Wrong colors for different tokens

#### Solutions
1. **Check token colors are defined**
   ```javascript
   themeName: {
     comment: '#8b949e',     // Comments
     keyword: '#ff6b35',      // Keywords
     string: '#00d4ff',       // Strings
     number: '#ffd700',       // Numbers
     function: '#7c3aed',     // Functions
     variable: '#ffaa00',     // Variables
     // ... more tokens
   }
   ```

2. **Verify color contrast**
   - Dark backgrounds need light text
   - Light backgrounds need dark text
   - Test with different file types

3. **Check token scope names**
   ```javascript
   // ✅ Correct scope names
   comment: '#8b949e',
   keyword: '#ff6b35',
   string: '#00d4ff'
   
   // ❌ Wrong scope names
   comments: '#8b949e',      // Should be 'comment'
   keywords: '#ff6b35',      // Should be 'keyword'
   strings: '#00d4ff'        // Should be 'string'
   ```

---

### 5. UI Section Styling Issues

#### Symptoms
- Some UI elements not styled
- Inconsistent colors across interface
- Missing hover/active states

#### Solutions
1. **Check UI section configuration**
   - All 20 UI sections are auto-generated
   - Colors are based on your colorPalettes
   - Intensity adjustments are automatic

2. **Verify color relationships**
   ```javascript
   // Good color relationships
   primary: '#ff6b35',      // Main accent
   secondary: '#00d4ff',    // Complementary
   accent: '#ffd700',       // Highlight
   background: '#0a0a0a',   // Dark background
   surface: '#1a1a1a',      // Slightly lighter
   text: '#ffffff'          // Light text
   ```

3. **Test different UI sections**
   - Activity bar
   - Side bar
   - Editor area
   - Status bar
   - Tabs
   - Panels

---

### 6. Performance Issues

#### Symptoms
- Slow theme switching
- VS Code becomes sluggish
- High memory usage

#### Solutions
1. **Limit theme count**
   - Keep under 30 themes
   - Remove unused themes
   - Optimize color calculations

2. **Check for inefficient patterns**
   ```javascript
   // ✅ Efficient
   primary: '#ff6b35'
   
   // ❌ Inefficient - complex calculations
   primary: calculateColor(baseColor, intensity, hue)
   ```

3. **Test with different VS Code versions**
   - Some versions handle themes differently
   - Check compatibility

---

### 7. Font Issues

#### Symptoms
- Fonts not applying
- Fallback fonts showing
- Inconsistent font rendering

#### Solutions
1. **Check font recommendations**
   ```javascript
   themeName: {
     primary: 'JetBrains Mono',    // Primary font
     secondary: 'Fira Code',       // Secondary font
     fallback: 'Consolas, Monaco, monospace'  // Fallback
   }
   ```

2. **Verify font availability**
   - Check if fonts are installed
   - Use system fonts for better compatibility
   - Test fallback fonts

3. **Font selection guidelines**
   - Dark themes: Modern fonts (JetBrains Mono, Fira Code)
   - Light themes: Clean fonts (SF Mono, Monaco)
   - Professional: Corporate fonts (Source Code Pro)

---

### 8. Bracket Color Issues

#### Symptoms
- Bracket matching not working
- Wrong colors for brackets
- Missing bracket colors

#### Solutions
1. **Check bracket color array**
   ```javascript
   themeName: ['#ff6b35', '#00d4ff', '#ffd700', '#7c3aed', '#10b981', '#f59e0b']
   ```

2. **Verify color count**
   - Use 6 colors for good variety
   - Ensure distinct colors
   - Test with nested brackets

3. **Check color contrast**
   - Bracket colors should be visible
   - Good contrast with background
   - Distinct from each other

---

## 🔍 Debugging Steps

### 1. Check Build Output
```bash
npm run build
```
Look for error messages and warnings.

### 2. Validate Generated Files
Check generated theme files in `themes/` directory:
- File exists
- Valid JSON format
- Contains expected properties

### 3. Test in VS Code
1. Install theme
2. Switch to theme
3. Test with different file types
4. Check all UI sections

### 4. Compare with Working Themes
- Look at existing themes for reference
- Copy working patterns
- Test incremental changes

---

## 🛠️ Advanced Debugging

### Enable Debug Logging
Add to `advanced-generator.js`:
```javascript
console.log('Debug: Generating theme for', paletteName);
console.log('Debug: Color palette', palette);
console.log('Debug: Token colors', tokenColors);
```

### Check VS Code Developer Tools
1. Open VS Code
2. Help → Toggle Developer Tools
3. Check Console for errors
4. Look for theme-related messages

### Validate JSON
Use online JSON validators to check generated theme files.

---

## 📞 Getting Help

### Before Asking for Help
1. Check this troubleshooting guide
2. Look at existing themes for examples
3. Test with simple changes first
4. Verify all required properties are set

### When Reporting Issues
Include:
- Error messages
- Steps to reproduce
- Expected vs actual behavior
- VS Code version
- Theme configuration

### Common Solutions
- Start with working theme and modify gradually
- Test each change individually
- Keep backups of working configurations
- Use version control for changes

---

*Happy debugging! 🐛✨*
