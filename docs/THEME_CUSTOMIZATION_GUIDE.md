# Happy Heart Theme Customization Guide

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [Adding New Themes](#adding-new-themes)
3. [Modifying Existing Themes](#modifying-existing-themes)
4. [Color Palette Structure](#color-palette-structure)
5. [UI Section Configuration](#ui-section-configuration)
6. [Token Colors & Syntax Highlighting](#token-colors--syntax-highlighting)
7. [Bracket Colors](#bracket-colors)
8. [Font Recommendations](#font-recommendations)
9. [Building & Testing](#building--testing)
10. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### Prerequisites
- Node.js installed
- VS Code extension development environment
- Basic understanding of JSON and JavaScript

### File Structure
```
src/themes/
├── advanced-variables-comprehensive.js  # Main configuration file
├── advanced-generator.js                # Theme generation logic
└── build.js                            # Build script

themes/                                  # Generated theme files
├── happy-heart-dark1.json
├── happy-heart-light1.json
└── ...
```

---

## 🎨 Adding New Themes

### Step 1: Add Color Palette
Open `src/themes/advanced-variables-comprehensive.js` and add your new theme to the `colorPalettes` object:

```javascript
export const colorPalettes = {
  // ... existing themes ...
  
  // Your new theme
  myNewTheme: {
    primary: '#ff6b35',      // Main accent color
    secondary: '#00d4ff',    // Secondary accent color
    accent: '#ffd700',       // Highlight color
    background: '#0a0a0a',   // Main background
    surface: '#1a1a1a',      // Surface/panel background
    text: '#ffffff'          // Main text color
  }
};
```

### Step 2: Add Bracket Colors
Add bracket colors for your theme in the `bracketColors` object:

```javascript
export const bracketColors = {
  // ... existing themes ...
  
  myNewTheme: ['#ff6b35', '#00d4ff', '#ffd700', '#7c3aed', '#10b981', '#f59e0b']
};
```

### Step 3: Add Token Colors
Add syntax highlighting colors in the `tokenColors` object:

```javascript
export const tokenColors = {
  // ... existing themes ...
  
  myNewTheme: {
    comment: '#8b949e',        // Comments
    keyword: '#ff6b35',       // Keywords (if, else, return, etc.)
    storage: '#00d4ff',        // Variable declarations
    variable: '#ffd700',      // Variables
    function: '#7c3aed',      // Function names
    type: '#10b981',          // Types/classes
    string: '#ff6b35',        // Strings
    number: '#00d4ff',        // Numbers
    operator: '#ffd700',      // Operators (+, -, *, /)
    punctuation: '#8b949e',   // Punctuation
    tag: '#7c3aed',          // HTML/JSX tags
    attribute: '#ffd700',     // HTML attributes
    className: '#10b981',     // CSS classes
    id: '#00d4ff',           // CSS IDs
    property: '#ff6b35',     // Object properties
    value: '#7c3aed',        // CSS values
    constant: '#00d4ff',     // Constants
    boolean: '#ffd700',      // Booleans (true/false)
    functionCall: '#7c3aed', // Function calls
    class: '#10b981',        // Class names
    interface: '#ff6b35',     // Interface names
    namespace: '#00d4ff',    // Namespaces
    decorator: '#ffd700'     // Decorators (@something)
  }
};
```

### Step 4: Add Font Recommendations
Add font recommendations in the `fontRecommendations` object:

```javascript
export const fontRecommendations = {
  // ... existing themes ...
  
  myNewTheme: {
    primary: 'JetBrains Mono',    // Primary font
    secondary: 'Fira Code',       // Secondary font
    fallback: 'Consolas, Monaco, monospace'  // Fallback fonts
  }
};
```

### Step 5: Update Theme Generator
Open `src/themes/advanced-generator.js` and add your theme name to the `getThemeName` function:

```javascript
getThemeName(paletteName) {
  const names = {
    // ... existing themes ...
    myNewTheme: 'Happy Heart 18 - My New Theme'
  };
  return names[paletteName] || `Happy Heart - ${paletteName}`;
}
```

### Step 6: Update Package.json
Add your theme to `package.json` in the `contributes.themes` section:

```json
{
  "label": "Happy Heart 18 - My New Theme",
  "uiTheme": "vs-dark",  // or "vs" for light themes
  "path": "./themes/happy-heart-myNewTheme.json"
}
```

### Step 7: Build and Test
```bash
npm run build
```

---

## 🔧 Modifying Existing Themes

### Changing Color Palettes
To modify an existing theme's colors, edit the `colorPalettes` object:

```javascript
// Example: Making Dark Classic more vibrant
dark1: {
  primary: '#00ff88',      // Changed from original
  secondary: '#ff3366',    // Changed from original
  accent: '#ffaa00',       // Changed from original
  background: '#000000',  // Keep or change
  surface: '#0a0a0a',     // Keep or change
  text: '#ffffff'         // Keep or change
}
```

### Adjusting UI Section Colors
The UI sections are automatically generated based on your color palette. The system uses intensity adjustments:

- **High intensity (1.0)**: Full color strength
- **Medium intensity (0.8)**: Slightly muted
- **Low intensity (0.6)**: More muted
- **Very low intensity (0.4)**: Very subtle

### Modifying Syntax Highlighting
Update token colors in the `tokenColors` object:

```javascript
// Example: Making comments more visible
dark1: {
  comment: '#999999',  // Changed from '#666666'
  // ... other tokens
}
```

---

## 🎨 Color Palette Structure

### Required Properties
Each theme must have these 6 properties:

```javascript
{
  primary: '#color',      // Main accent color
  secondary: '#color',    // Secondary accent color  
  accent: '#color',       // Highlight color
  background: '#color',   // Main background
  surface: '#color',     // Surface/panel background
  text: '#color'         // Main text color
}
```

### Color Format
- Use hex colors: `#ff6b35`
- Use RGB: `rgb(255, 107, 53)`
- Use HSL: `hsl(15, 100%, 60%)`

### Color Harmony Tips
1. **Complementary**: Use colors opposite on color wheel
2. **Triadic**: Use colors 120° apart
3. **Analogous**: Use adjacent colors on color wheel
4. **Monochromatic**: Use different shades of same color

---

## 🖥️ UI Section Configuration

The system automatically generates colors for 20 UI sections:

### Core Sections
- **Title Bar**: Window title and controls
- **Menu Bar**: Top menu bar
- **Activity Bar**: Left sidebar with icons
- **Side Bar**: File explorer and panels
- **Editor Group**: Main editor area
- **Panel**: Bottom panels (terminal, output)
- **Status Bar**: Bottom status bar
- **Tab Bar**: Editor tabs
- **Breadcrumbs**: Navigation breadcrumbs
- **Notifications**: Toast notifications

### Advanced Sections
- **Explorer**: File/folder lists
- **Editor Tabs**: Tab styling
- **Editor Area**: Code editor
- **Line Numbers**: Gutter and line numbers
- **Editor Groups**: Multiple editor borders
- **Terminal**: Integrated terminal
- **Scrollbar**: Scrollbar styling
- **Quick Pick**: Command palette
- **Diff Editor**: Git diff view
- **Debug**: Debug toolbar
- **Peek View**: Go to definition
- **Git Decorations**: Git status colors

### Color Intensity System
Each UI section uses a 5-color system with different intensities:

```javascript
colorVariants: {
  background: { base: 'background', intensity: 1.0 },
  foreground: { base: 'text', intensity: 1.0 },
  border: { base: 'secondary', intensity: 0.8 },
  hover: { base: 'primary', intensity: 0.6 },
  active: { base: 'accent', intensity: 0.8 }
}
```

---

## 🎯 Token Colors & Syntax Highlighting

### Available Token Types
The system supports 30+ token types for comprehensive syntax highlighting:

#### Basic Tokens
- `comment`: Comments and documentation
- `keyword`: Language keywords (if, else, return, etc.)
- `string`: String literals
- `number`: Numeric literals
- `boolean`: Boolean values (true/false)

#### Advanced Tokens
- `variable`: Variables
- `variable.parameter`: Function parameters
- `function`: Function names
- `function.call`: Function calls
- `class`: Class names
- `interface`: Interface names
- `type`: Type definitions
- `operator`: Operators (+, -, *, /, =)
- `punctuation`: Punctuation marks

#### HTML/JSX Tokens
- `tag`: HTML/JSX tags
- `attribute`: HTML attributes
- `className`: CSS class names
- `id`: CSS IDs
- `property`: CSS properties
- `value`: CSS values

#### Language-Specific Tokens
- `storage`: Variable declarations (var, let, const)
- `constant`: Constants and enums
- `namespace`: Namespaces and modules
- `decorator`: Decorators and annotations

### Color Guidelines
1. **Comments**: Muted colors (grays, low saturation)
2. **Keywords**: Bold, high contrast colors
3. **Strings**: Warm colors (orange, yellow, green)
4. **Numbers**: Cool colors (blue, cyan)
5. **Functions**: Distinct colors (purple, magenta)
6. **Variables**: Medium contrast colors
7. **Operators**: Subtle but visible colors

---

## 🎨 Bracket Colors

Bracket colors are used for:
- Matching brackets `()`, `[]`, `{}`
- Indent guides
- Bracket pair colorization

### Format
```javascript
bracketColors: {
  themeName: ['#color1', '#color2', '#color3', '#color4', '#color5', '#color6']
}
```

### Best Practices
1. Use 6 distinct colors
2. Ensure good contrast with background
3. Use colors that complement your theme
4. Test with nested brackets

---

## 🔤 Font Recommendations

### Available Fonts
- **JetBrains Mono**: Modern, ligature support
- **Fira Code**: Popular, great ligatures
- **Source Code Pro**: Adobe's monospace font
- **Cascadia Code**: Microsoft's monospace font
- **SF Mono**: Apple's system font
- **Monaco**: Classic Mac font

### Font Selection Guidelines
1. **Dark themes**: Use modern fonts (JetBrains Mono, Fira Code)
2. **Light themes**: Use clean fonts (SF Mono, Monaco)
3. **Professional themes**: Use corporate fonts (Source Code Pro)
4. **Creative themes**: Use distinctive fonts (Cascadia Code)

---

## 🔨 Building & Testing

### Build Commands
```bash
# Build all themes
npm run build

# Watch mode (auto-rebuild on changes)
npm run build:watch

# Package for distribution
npm run package

# Publish to marketplace
npm run publish
```

### Testing Your Changes
1. **Build themes**: `npm run build`
2. **Install locally**: `npm run package`
3. **Install in VS Code**: 
   - Open VS Code
   - Go to Extensions
   - Click "..." → "Install from VSIX"
   - Select the generated `.vsix` file
4. **Test theme**: Switch to your theme in VS Code

### Development Workflow
1. Make changes to `advanced-variables-comprehensive.js`
2. Run `npm run build`
3. Test in VS Code
4. Repeat until satisfied
5. Package and publish

---

## 🐛 Troubleshooting

### Common Issues

#### Theme Not Appearing
- Check `package.json` has correct theme entry
- Verify file path in `package.json`
- Ensure theme name matches in generator

#### Colors Not Applying
- Check color format (use hex: `#ff6b35`)
- Verify all required properties are set
- Check for typos in property names

#### Build Errors
- Check JavaScript syntax
- Verify all themes have required properties
- Check for missing commas or brackets

#### Syntax Highlighting Issues
- Ensure token colors are defined
- Check token scope names
- Verify color contrast with background

### Debug Tips
1. **Check console output** during build
2. **Validate JSON** in generated theme files
3. **Test in VS Code** with different file types
4. **Compare with working themes**

### Performance Considerations
- Keep theme count reasonable (20-30 max)
- Use efficient color calculations
- Avoid overly complex color schemes
- Test on different VS Code versions

---

## 📚 Advanced Customization

### Custom UI Sections
To add new UI sections, modify the `uiSections` object in `advanced-variables-comprehensive.js`:

```javascript
export const uiSections = {
  // ... existing sections ...
  
  myCustomSection: {
    name: 'My Custom Section',
    properties: {
      background: 'myCustomSection.background',
      foreground: 'myCustomSection.foreground',
      border: 'myCustomSection.border'
    },
    colorVariants: {
      background: { base: 'background', intensity: 1.0 },
      foreground: { base: 'text', intensity: 1.0 },
      border: { base: 'secondary', intensity: 0.8 }
    }
  }
};
```

### Custom Token Scopes
Add new token scopes for specific languages:

```javascript
// In tokenColors object
myNewTheme: {
  // ... existing tokens ...
  
  // Custom scopes
  'entity.name.tag.custom': '#ff6b35',
  'support.function.custom': '#00d4ff',
  'variable.custom': '#ffd700'
}
```

### Dynamic Color Generation
For advanced users, you can create dynamic color schemes:

```javascript
// Example: Generate colors based on input
function generateThemeColors(baseColor) {
  return {
    primary: baseColor,
    secondary: adjustHue(baseColor, 120),
    accent: adjustHue(baseColor, 240),
    background: darken(baseColor, 0.9),
    surface: darken(baseColor, 0.8),
    text: lighten(baseColor, 0.9)
  };
}
```

---

## 🎉 Best Practices

### Design Principles
1. **Consistency**: Use consistent color relationships
2. **Contrast**: Ensure good readability
3. **Harmony**: Use color theory principles
4. **Accessibility**: Consider colorblind users
5. **Performance**: Keep themes efficient

### Testing Checklist
- [ ] Test with different file types (JS, Python, HTML, CSS)
- [ ] Check light and dark variants
- [ ] Verify all UI sections are styled
- [ ] Test bracket matching
- [ ] Check syntax highlighting
- [ ] Verify font recommendations
- [ ] Test in different VS Code themes

### Maintenance
- Keep themes up to date with VS Code changes
- Monitor user feedback
- Update documentation
- Test with new VS Code versions
- Maintain consistent naming

---

## 📞 Support

If you encounter issues:
1. Check this guide first
2. Look at existing themes for examples
3. Test with simple color changes
4. Verify all required properties are set
5. Check VS Code extension documentation

Remember: Start simple, test frequently, and build complexity gradually!

---

*Happy theming! 🎨✨*
