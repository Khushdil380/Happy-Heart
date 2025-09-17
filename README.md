# Happy Heart Theme Collection

A collection of vibrant VS Code themes with modular design and easy customization. Features multiple color schemes with a happy, energetic vibe.

## 🎨 Available Themes

### Happy Heart 1 - Vibrant Purple
- **Style**: Dark theme with vibrant purple and green accents
- **Best for**: General development, web development
- **Colors**: Purple backgrounds with bright green highlights

### Happy Heart 2 - Enhanced Dark
- **Style**: Enhanced dark theme with better contrast
- **Best for**: Long coding sessions, detailed work
- **Colors**: Deep dark backgrounds with colorful syntax highlighting

### Happy Heart 3 - Ocean Breeze
- **Style**: Cool ocean-inspired theme
- **Best for**: Frontend development, UI work
- **Colors**: Deep blue backgrounds with cyan and teal accents

### Happy Heart 4 - Sunset Glow
- **Style**: Warm sunset-inspired theme
- **Best for**: Backend development, data work
- **Colors**: Dark orange/red backgrounds with warm highlights

### Happy Heart 5 - Forest Dreams
- **Style**: Nature-inspired green theme
- **Best for**: Python, data science, documentation
- **Colors**: Dark green backgrounds with vibrant green accents

## 🚀 Installation

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Happy Heart"
4. Click Install

## 🛠️ Development & Customization

This theme collection is built with a modular architecture that makes it easy to customize and extend.

### Project Structure

```
src/
├── themes/
│   ├── variables/
│   │   ├── base.js              # Shared color variables and token mappings
│   │   ├── happy-heart-1.js     # Theme 1 configuration
│   │   ├── happy-heart-2.js     # Theme 2 configuration
│   │   ├── happy-heart-3.js     # Theme 3 configuration
│   │   ├── happy-heart-4.js     # Theme 4 configuration
│   │   └── happy-heart-5.js     # Theme 5 configuration
│   └── generator.js             # Theme generation logic
├── build.js                     # Build script
└── package.json                 # Extension configuration
```

### Building Themes

```bash
# Install dependencies
npm install

# Build all themes
npm run build

# Watch for changes during development
npm run dev

# Package for publishing
npm run package
```

### Creating Custom Themes

1. **Create a new theme file** in `src/themes/variables/`:

```javascript
import { baseColors, tokenMappings } from './base.js';

export const myCustomTheme = {
  name: 'My Custom Theme',
  type: 'dark',
  
  colors: {
    ...baseColors,
    // Override colors here
    editorBackground: '#1a1a1a',
    primary: '#ff6b35',
    // ... more colors
  },
  
  tokenColors: {
    ...tokenMappings,
    // Override token colors here
    keyword: {
      ...tokenMappings.keyword,
      foreground: '#ff6b35'
    }
  }
};
```

2. **Add to generator** in `src/themes/generator.js`:

```javascript
import { myCustomTheme } from '../variables/my-custom-theme.js';

// In constructor:
this.themes = {
  // ... existing themes
  'my-custom-theme': myCustomTheme
};
```

3. **Update package.json** to include the new theme in the `contributes.themes` array.

4. **Build and test**:

```bash
npm run build
```

### Color System

The theme system uses a structured color approach:

#### Base Colors
- `primary`: Main accent color
- `secondary`: Secondary accent color
- `accent`: Highlight color
- `backgroundDark/Medium/Light`: Background variations
- `textPrimary/Secondary/Muted`: Text color variations

#### UI Colors
- `editorBackground`: Main editor background
- `sidebarBackground`: Sidebar background
- `activityBarBackground`: Activity bar background
- `statusBarBackground`: Status bar background
- `panelBackground`: Panel background

#### Token Colors
- `comment`: Comment styling
- `keyword`: Keywords (if, for, function, etc.)
- `storage`: Storage types (var, let, const, etc.)
- `variable`: Variables and parameters
- `function`: Functions and methods
- `type`: Types, classes, and strings

### Customization Examples

#### Change Primary Color
```javascript
colors: {
  ...baseColors,
  primary: '#your-color-here',
  // This will automatically update:
  // - Cursor color
  // - Active tab color
  // - Selection color
  // - And more
}
```

#### Customize Syntax Highlighting
```javascript
tokenColors: {
  ...tokenMappings,
  keyword: {
    ...tokenMappings.keyword,
    foreground: '#your-keyword-color',
    fontStyle: 'bold italic'
  }
}
```

#### Add New UI Elements
```javascript
colors: {
  ...baseColors,
  // Add custom UI colors
  customElementBackground: '#1a1a1a',
  customElementForeground: '#ffffff'
}
```

Then update the generator's `colorMapping` object to include your new colors.

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `npm run build`
5. Submit a pull request

## 🐛 Issues & Feature Requests

Found a bug or have a feature request? Please open an issue on GitHub.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Inspired by the vibrant and energetic coding community
- Built with love for developers who appreciate colorful themes
- Thanks to all contributors and users for feedback and suggestions

---

**Happy Coding! 🎉**
