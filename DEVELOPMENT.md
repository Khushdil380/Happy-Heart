# Development Guide

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build themes**:
   ```bash
   npm run build
   ```

3. **Watch for changes** (development mode):
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── themes/
│   ├── variables/           # Theme variable files
│   │   ├── base.js         # Shared variables and mappings
│   │   ├── happy-heart-1.js # Theme 1 configuration
│   │   ├── happy-heart-2.js # Theme 2 configuration
│   │   ├── happy-heart-3.js # Theme 3 configuration
│   │   ├── happy-heart-4.js # Theme 4 configuration
│   │   └── happy-heart-5.js # Theme 5 configuration
│   ├── generator.js        # Theme generation logic
│   └── config.js          # Theme configuration and helpers
├── build.js               # Build script
└── package.json          # Extension configuration
```

## Adding a New Theme

1. **Create theme file** in `src/themes/variables/`:
   ```javascript
   import { baseColors, tokenMappings } from './base.js';
   
   export const myNewTheme = {
     name: 'My New Theme',
     type: 'dark',
     colors: {
       ...baseColors,
       // Your custom colors here
     },
     tokenColors: {
       ...tokenMappings,
       // Your custom token colors here
     }
   };
   ```

2. **Add to generator** in `src/themes/generator.js`:
   ```javascript
   import { myNewTheme } from './variables/my-new-theme.js';
   
   // In constructor:
   this.themes = {
     // ... existing themes
     'my-new-theme': myNewTheme
   };
   ```

3. **Update package.json** in the `contributes.themes` array.

4. **Build and test**:
   ```bash
   npm run build
   ```

## Color System

### Base Colors
- `primary`: Main accent color (cursor, active elements)
- `secondary`: Secondary accent color
- `accent`: Highlight color
- `backgroundDark/Medium/Light`: Background variations
- `textPrimary/Secondary/Muted`: Text color variations

### UI Colors
All UI colors follow the pattern: `element.property`
- `editorBackground`: Main editor background
- `sidebarBackground`: Sidebar background
- `activityBarBackground`: Activity bar background
- `statusBarBackground`: Status bar background
- `panelBackground`: Panel background

### Token Colors
- `comment`: Comment styling
- `keyword`: Keywords (if, for, function, etc.)
- `storage`: Storage types (var, let, const, etc.)
- `variable`: Variables and parameters
- `function`: Functions and methods
- `type`: Types, classes, and strings

## Publishing

1. **Package the extension**:
   ```bash
   npm run package
   ```

2. **Publish to marketplace**:
   ```bash
   npm run publish
   ```

## Testing

1. **Build themes**:
   ```bash
   npm run build
   ```

2. **Install in VS Code**:
   - Open VS Code
   - Go to Extensions
   - Click "Install from VSIX"
   - Select the generated `.vsix` file

3. **Test themes**:
   - Open Command Palette (Ctrl+Shift+P)
   - Type "Preferences: Color Theme"
   - Select your theme

## Troubleshooting

### Build Errors
- Check import paths in generator.js
- Ensure all theme files export the correct format
- Verify package.json syntax

### Theme Not Appearing
- Check package.json `contributes.themes` array
- Ensure theme file exists in themes/ directory
- Verify theme file is valid JSON

### Colors Not Working
- Check color mapping in generator.js
- Ensure color values are valid hex codes
- Verify VS Code color key names

## Best Practices

1. **Use base colors** when possible for consistency
2. **Test themes** in different file types (JS, Python, HTML, etc.)
3. **Maintain contrast** for accessibility
4. **Document changes** in theme descriptions
5. **Version control** all changes

## Resources

- [VS Code Theme Documentation](https://code.visualstudio.com/api/extension-guides/color-theme)
- [VS Code Color Reference](https://code.visualstudio.com/api/references/theme-color)
- [VS Code Token Scopes](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)
