# Happy Heart Theme - Quick Reference Card

## 🚀 Quick Actions

### Add New Theme
1. **Add to `colorPalettes`** in `advanced-variables-comprehensive.js`:
```javascript
myTheme: {
  primary: '#ff6b35',
  secondary: '#00d4ff', 
  accent: '#ffd700',
  background: '#0a0a0a',
  surface: '#1a1a1a',
  text: '#ffffff'
}
```

2. **Add to `bracketColors`**:
```javascript
myTheme: ['#ff6b35', '#00d4ff', '#ffd700', '#7c3aed', '#10b981', '#f59e0b']
```

3. **Add to `tokenColors`**:
```javascript
myTheme: {
  comment: '#8b949e',
  keyword: '#ff6b35',
  string: '#00d4ff',
  // ... (copy from existing theme and modify)
}
```

4. **Add to `fontRecommendations`**:
```javascript
myTheme: {
  primary: 'JetBrains Mono',
  secondary: 'Fira Code',
  fallback: 'Consolas, Monaco, monospace'
}
```

5. **Update `getThemeName()` in `advanced-generator.js`**:
```javascript
myTheme: 'Happy Heart X - My Theme Name'
```

6. **Add to `package.json`**:
```json
{
  "label": "Happy Heart X - My Theme Name",
  "uiTheme": "vs-dark",
  "path": "./themes/happy-heart-myTheme.json"
}
```

7. **Build**: `npm run build`

---

### Modify Existing Theme
1. **Find theme in `colorPalettes`**
2. **Change colors** (hex format: `#ff6b35`)
3. **Update `tokenColors`** if needed
4. **Build**: `npm run build`

---

### Change Syntax Highlighting
Edit `tokenColors` in `advanced-variables-comprehensive.js`:

```javascript
themeName: {
  comment: '#999999',    // Comments
  keyword: '#ff6b35',    // Keywords (if, else, return)
  string: '#00d4ff',     // Strings
  number: '#ffd700',     // Numbers
  function: '#7c3aed',   // Function names
  variable: '#ffaa00',   // Variables
  // ... more tokens
}
```

---

### Change UI Colors
UI colors are auto-generated from your `colorPalettes`. To change:
1. **Modify `colorPalettes`** - affects all UI sections
2. **Build**: `npm run build`

---

## 🎨 Color Quick Reference

### Color Formats
- **Hex**: `#ff6b35`
- **RGB**: `rgb(255, 107, 53)`
- **HSL**: `hsl(15, 100%, 60%)`

### Theme Types
- **Dark themes**: Use `"uiTheme": "vs-dark"`
- **Light themes**: Use `"uiTheme": "vs"`

### Required Properties
```javascript
{
  primary: '#color',      // Main accent
  secondary: '#color',    // Secondary accent
  accent: '#color',       // Highlight
  background: '#color',   // Main background
  surface: '#color',      // Panel background
  text: '#color'          // Text color
}
```

---

## 🔧 Build Commands

```bash
npm run build          # Build all themes
npm run build:watch    # Auto-rebuild on changes
npm run package        # Create .vsix file
npm run publish        # Publish to marketplace
```

---

## 📁 Key Files

- **`advanced-variables-comprehensive.js`** - Main config file
- **`advanced-generator.js`** - Theme generation logic
- **`package.json`** - Extension manifest
- **`build.js`** - Build script

---

## 🎯 Common Token Colors

| Token | Purpose | Example Color |
|-------|---------|---------------|
| `comment` | Comments | `#8b949e` |
| `keyword` | Keywords | `#ff6b35` |
| `string` | Strings | `#00d4ff` |
| `number` | Numbers | `#ffd700` |
| `function` | Functions | `#7c3aed` |
| `variable` | Variables | `#ffaa00` |
| `operator` | Operators | `#ffd700` |
| `tag` | HTML tags | `#7c3aed` |
| `attribute` | HTML attributes | `#ffaa00` |

---

## 🚨 Troubleshooting

### Theme not showing?
- Check `package.json` entry
- Verify file path
- Check theme name in generator

### Colors not working?
- Use hex format: `#ff6b35`
- Check all required properties
- Look for typos

### Build errors?
- Check JavaScript syntax
- Verify all themes have required properties
- Check for missing commas

---

## 🎨 Color Harmony Tips

### Complementary Colors
- Red ↔ Green
- Blue ↔ Orange  
- Purple ↔ Yellow

### Triadic Colors
- Red, Blue, Yellow
- Orange, Green, Purple

### Analogous Colors
- Red, Orange, Yellow
- Blue, Purple, Pink

---

*Quick reference for Happy Heart Theme customization! 🎨*
