# Example: Adding a New Theme

This example shows how to add a "Cyberpunk Neon" theme to your Happy Heart extension.

## Step 1: Add Color Palette

In `src/themes/advanced-variables-comprehensive.js`, add to the `colorPalettes` object:

```javascript
export const colorPalettes = {
  // ... existing themes ...
  
  cyberpunkNeon: {
    primary: '#00ffff',      // Cyan neon
    secondary: '#ff00ff',    // Magenta neon
    accent: '#ffff00',       // Yellow neon
    background: '#0a0a0a',   // Very dark background
    surface: '#1a1a1a',      // Slightly lighter surface
    text: '#ffffff'          // White text
  }
};
```

## Step 2: Add Bracket Colors

Add to the `bracketColors` object:

```javascript
export const bracketColors = {
  // ... existing themes ...
  
  cyberpunkNeon: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff']
};
```

## Step 3: Add Token Colors

Add to the `tokenColors` object:

```javascript
export const tokenColors = {
  // ... existing themes ...
  
  cyberpunkNeon: {
    comment: '#666666',        // Muted gray for comments
    keyword: '#00ffff',        // Cyan for keywords
    storage: '#ff00ff',        // Magenta for storage types
    variable: '#ffff00',       // Yellow for variables
    function: '#00ff00',       // Green for functions
    type: '#ff0080',           // Pink for types
    string: '#00ffff',         // Cyan for strings
    number: '#ffff00',         // Yellow for numbers
    operator: '#ff00ff',       // Magenta for operators
    punctuation: '#8000ff',    // Purple for punctuation
    tag: '#00ff00',           // Green for HTML tags
    attribute: '#ffff00',      // Yellow for attributes
    className: '#00ffff',      // Cyan for CSS classes
    id: '#ff00ff',            // Magenta for CSS IDs
    property: '#ffff00',       // Yellow for properties
    value: '#00ff00',         // Green for values
    constant: '#ff0080',      // Pink for constants
    boolean: '#8000ff',       // Purple for booleans
    functionCall: '#00ff00',  // Green for function calls
    class: '#00ffff',         // Cyan for classes
    interface: '#ff00ff',     // Magenta for interfaces
    namespace: '#ffff00',     // Yellow for namespaces
    decorator: '#ff0080'      // Pink for decorators
  }
};
```

## Step 4: Add Font Recommendations

Add to the `fontRecommendations` object:

```javascript
export const fontRecommendations = {
  // ... existing themes ...
  
  cyberpunkNeon: {
    primary: 'JetBrains Mono',    // Modern font with ligatures
    secondary: 'Fira Code',       // Alternative with great ligatures
    fallback: 'Consolas, Monaco, monospace'
  }
};
```

## Step 5: Update Theme Generator

In `src/themes/advanced-generator.js`, add to the `getThemeName` function:

```javascript
getThemeName(paletteName) {
  const names = {
    // ... existing themes ...
    cyberpunkNeon: 'Happy Heart 18 - Cyberpunk Neon'
  };
  return names[paletteName] || `Happy Heart - ${paletteName}`;
}
```

## Step 6: Update Package.json

Add to the `contributes.themes` array in `package.json`:

```json
{
  "label": "Happy Heart 18 - Cyberpunk Neon",
  "uiTheme": "vs-dark",
  "path": "./themes/happy-heart-cyberpunkNeon.json"
}
```

## Step 7: Build and Test

```bash
npm run build
```

## Step 8: Test the Theme

1. Package the extension: `npm run package`
2. Install the generated `.vsix` file in VS Code
3. Switch to "Happy Heart 18 - Cyberpunk Neon" theme
4. Test with different file types (JavaScript, Python, HTML, CSS)

## Expected Result

Your new theme will have:
- **Background**: Very dark (#0a0a0a) for that cyberpunk feel
- **Accents**: Bright neon colors (cyan, magenta, yellow)
- **Syntax**: High contrast neon colors for different token types
- **UI**: All interface elements styled with neon theme
- **Fonts**: Modern monospace fonts with ligature support

## Customization Tips

### Adjusting Brightness
If the theme is too bright, reduce intensity:
```javascript
// Make colors less intense
primary: '#00cccc',    // Instead of #00ffff
secondary: '#cc00cc',  // Instead of #ff00ff
```

### Adding More Colors
Add more bracket colors for complex nesting:
```javascript
cyberpunkNeon: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff', '#00ff80', '#ff8000']
```

### Testing Different File Types
Test your theme with:
- **JavaScript**: Functions, variables, objects
- **Python**: Classes, functions, strings
- **HTML**: Tags, attributes, content
- **CSS**: Properties, values, selectors
- **JSON**: Keys, values, structure

## Troubleshooting

### Theme Not Appearing
- Check `package.json` has correct entry
- Verify file path matches generated file
- Ensure theme name is consistent

### Colors Too Bright/Dark
- Adjust hex values (darker = lower values, brighter = higher values)
- Test with different backgrounds
- Check contrast ratios

### Syntax Highlighting Issues
- Verify all token colors are defined
- Check color contrast with background
- Test with different programming languages

---

*This example creates a vibrant cyberpunk theme perfect for late-night coding sessions! 🌃✨*
