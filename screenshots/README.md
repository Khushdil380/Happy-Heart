# Screenshots for Happy Heart Theme Collection

This folder contains screenshots and demo materials for the Happy Heart VS Code theme extension.

## 📸 Required Screenshots

### Individual Theme Screenshots (17 total)
Take screenshots of VS Code with each theme applied, showing:
- **File Explorer** with various file types
- **Editor** with code (JavaScript/TypeScript recommended)
- **Terminal** open
- **Extensions panel** visible

**File naming convention:**
- `dark-classic.png` - Happy Heart 1 - Dark Classic
- `dark-orange.png` - Happy Heart 2 - Dark Orange
- `dark-purple.png` - Happy Heart 3 - Dark Purple
- `dark-green.png` - Happy Heart 4 - Dark Green
- `deep-blue.png` - Happy Heart 5 - Deep Blue
- `ocean-blue.png` - Happy Heart 6 - Ocean Blue
- `navy-blue.png` - Happy Heart 7 - Navy Blue
- `bright-light.png` - Happy Heart 8 - Bright Light
- `smooth-light.png` - Happy Heart 9 - Smooth Light
- `forest-green.png` - Happy Heart 10 - Forest Green
- `emerald-green.png` - Happy Heart 11 - Emerald Green
- `midnight-purple.png` - Happy Heart 12 - Midnight Purple
- `royal-purple.png` - Happy Heart 13 - Royal Purple
- `rose-gold.png` - Happy Heart 14 - Rose Gold
- `chilli-paper.png` - Happy Heart 15 - Chilli Paper
- `grey.png` - Happy Heart 16 - Grey
- `yellow.png` - Happy Heart 17 - Yellow

### Demo GIF
- `theme-showcase.gif` - Quick animation showing theme switching
- Duration: 10-15 seconds
- Show: Theme switching using `Ctrl+Shift+T` or theme picker
- Include: Multiple themes in sequence

### Syntax Highlighting
- `syntax-highlighting.png` - Close-up of syntax highlighting
- Show: JavaScript/TypeScript code with various syntax elements
- Highlight: Comments, keywords, strings, variables, functions, numbers

## 🎯 Screenshot Guidelines

### VS Code Layout
- **Window size:** 1920x1080 or similar high resolution
- **Panels visible:** Explorer, Editor, Terminal, Extensions
- **Code content:** Mix of JavaScript, TypeScript, CSS, JSON
- **File types:** .js, .ts, .tsx, .css, .json, .md

### Code Content for Screenshots
Use this sample code in the editor:

```javascript
// Happy Heart Theme Demo
import React, { useState, useEffect } from 'react';
import './styles.css';

const ThemeDemo = ({ theme, onThemeChange }) => {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Theme changed to:', theme);
  }, [theme]);
  
  const handleClick = () => {
    setIsActive(!isActive);
    setCount(prev => prev + 1);
  };
  
  return (
    <div className={`theme-demo ${isActive ? 'active' : ''}`}>
      <h1>Happy Heart {theme}</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>
        {isActive ? 'Deactivate' : 'Activate'}
      </button>
    </div>
  );
};

export default ThemeDemo;
```

### CSS Content
```css
.theme-demo {
  padding: 20px;
  background: var(--background);
  color: var(--foreground);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.theme-demo.active {
  background: var(--primary);
  color: var(--background);
}

button {
  background: var(--secondary);
  color: var(--background);
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}
```

## 📱 Screenshot Tools

### Recommended Tools
- **Windows:** Snipping Tool, Snagit, or built-in screenshot tools
- **Mac:** Screenshot app, Snagit
- **Cross-platform:** Lightshot, Greenshot

### GIF Creation
- **Windows:** ScreenToGif, LICEcap
- **Mac:** Kap, LICEcap
- **Cross-platform:** OBS Studio, ScreenToGif

## 🎨 Tips for Great Screenshots

1. **Clean workspace:** Close unnecessary tabs and panels
2. **Good lighting:** Ensure code is clearly visible
3. **Consistent layout:** Use same VS Code layout for all themes
4. **High contrast:** Make sure text is readable
5. **Show variety:** Include different file types and syntax
6. **Professional look:** Clean, organized interface

## 📁 File Structure
```
screenshots/
├── README.md (this file)
├── theme-showcase.gif
├── syntax-highlighting.png
├── dark-classic.png
├── dark-orange.png
├── dark-purple.png
├── dark-green.png
├── deep-blue.png
├── ocean-blue.png
├── navy-blue.png
├── bright-light.png
├── smooth-light.png
├── forest-green.png
├── emerald-green.png
├── midnight-purple.png
├── royal-purple.png
├── rose-gold.png
├── chilli-paper.png
├── grey.png
└── yellow.png
```

## 🚀 Publishing Notes

- **Image optimization:** Compress images for web (use tools like TinyPNG)
- **Alt text:** All images have descriptive alt text in README
- **Responsive:** Images work well on different screen sizes
- **Loading:** Consider lazy loading for better performance
