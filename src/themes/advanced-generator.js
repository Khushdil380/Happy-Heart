import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { 
  colorPalettes, 
  uiSections, 
  bracketColors, 
  tokenColors, 
  fontRecommendations 
} from './advanced-variables-comprehensive.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Advanced Theme Generator Class
class AdvancedThemeGenerator {
  constructor() {
    this.themeConfigs = {};
    this.initializeThemeConfigs();
  }

  // Initialize theme configurations
  initializeThemeConfigs() {
    Object.keys(colorPalettes).forEach(paletteName => {
      this.themeConfigs[paletteName] = {
        name: this.getThemeName(paletteName),
        type: this.getThemeType(paletteName),
        palette: colorPalettes[paletteName],
        bracketColors: bracketColors[paletteName],
        tokenColors: tokenColors[paletteName],
        fonts: fontRecommendations[paletteName]
      };
    });
  }

  // Get theme display name
  getThemeName(paletteName) {
    const names = {
      // 4 Dark variants
      dark1: 'Happy Heart 1 - Dark Classic',
      dark2: 'Happy Heart 2 - Dark Orange',
      dark3: 'Happy Heart 3 - Dark Purple',
      dark4: 'Happy Heart 4 - Dark Green',
      
      // 3 Dark Blue variants
      darkBlue1: 'Happy Heart 5 - Deep Blue',
      darkBlue2: 'Happy Heart 6 - Ocean Blue',
      darkBlue3: 'Happy Heart 7 - Navy Blue',
      
      // 2 Light variants
      light1: 'Happy Heart 8 - Bright Light',
      light2: 'Happy Heart 9 - Smooth Light',
      
      // 2 Green variants
      green1: 'Happy Heart 10 - Forest Green',
      green2: 'Happy Heart 11 - Emerald Green',
      
      // 2 Purple variants
      purple1: 'Happy Heart 12 - Midnight Purple',
      purple2: 'Happy Heart 13 - Royal Purple',
      
      // Single variants
      roseGold: 'Happy Heart 14 - Rose Gold',
      chilliPaper: 'Happy Heart 15 - Chilli Paper',
      grey: 'Happy Heart 16 - Grey',
      yellow: 'Happy Heart 17 - Yellow'
    };
    return names[paletteName] || `Happy Heart - ${paletteName}`;
  }

  // Get theme type (dark/light)
  getThemeType(paletteName) {
    return (paletteName === 'light1' || paletteName === 'light2') ? 'light' : 'dark';
  }

  // Color manipulation utilities
  colorUtils = {
    // Adjust color intensity
    adjustIntensity: (color, intensity) => {
      if (intensity === 1.0) return color;
      if (!color || typeof color !== 'string') return color;
      
      // Convert hex to RGB
      const hex = color.replace('#', '');
      if (hex.length !== 6) return color;
      
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      
      // Apply intensity
      const newR = Math.round(r * intensity);
      const newG = Math.round(g * intensity);
      const newB = Math.round(b * intensity);
      
      // Convert back to hex
      return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
    },

    // Add alpha channel
    addAlpha: (color, alpha) => {
      const alphaHex = Math.round(alpha * 255).toString(16).padStart(2, '0');
      return `${color}${alphaHex}`;
    },

    // Darken color
    darken: (color, amount) => {
      const hex = color.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      
      const newR = Math.max(0, r - amount);
      const newG = Math.max(0, g - amount);
      const newB = Math.max(0, b - amount);
      
      return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
    },

    // Lighten color
    lighten: (color, amount) => {
      const hex = color.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      
      const newR = Math.min(255, r + amount);
      const newG = Math.min(255, g + amount);
      const newB = Math.min(255, b + amount);
      
      return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
    }
  };

  // Generate colors for a specific UI section
  generateSectionColors(sectionName, palette, variants) {
    const colors = {};
    const section = uiSections[sectionName];
    
    if (!section) return colors;

    Object.entries(section.properties).forEach(([property, vsCodeKey]) => {
      const variant = variants[property];
      if (variant) {
        const baseColor = palette[variant.base];
        let finalColor = baseColor;
        
        // Apply intensity adjustment
        if (variant.intensity !== 1.0) {
          finalColor = this.colorUtils.adjustIntensity(baseColor, variant.intensity);
        }
        
        // Add alpha if specified
        if (variant.alpha) {
          finalColor = this.colorUtils.addAlpha(finalColor, variant.alpha);
        }
        
        colors[vsCodeKey] = finalColor;
      }
    });

    return colors;
  }

  // Generate bracket highlight colors
  generateBracketColors(bracketColorScheme) {
    const colors = {};
    
    // Bracket highlights
    for (let i = 1; i <= 6; i++) {
      if (bracketColorScheme && bracketColorScheme[i - 1]) {
        colors[`editorBracketHighlight.foreground${i}`] = bracketColorScheme[i - 1];
        colors[`editorIndentGuide.activeBackground${i}`] = bracketColorScheme[i - 1];
        colors[`editorIndentGuide.background${i}`] = this.colorUtils.addAlpha(bracketColorScheme[i - 1], 0.4);
      }
    }
    
    // Unexpected bracket
    colors['editorBracketHighlight.unexpectedBracket.foreground'] = '#ff0000';

    return colors;
  }

  // Generate comprehensive token colors
  generateTokenColors(tokenColorScheme) {
    if (!tokenColorScheme) return [];
    
    const tokenMappings = [
      // Comments
      {
        scopes: ['comment', 'comment.line', 'comment.block'],
        settings: {
          foreground: tokenColorScheme.comment || '#999999',
          fontStyle: 'italic'
        }
      },
      // Keywords
      {
        scopes: ['keyword', 'keyword.control', 'keyword.operator', 'keyword.control.directive'],
        settings: {
          foreground: tokenColorScheme.keyword || '#0066cc',
          fontStyle: 'bold'
        }
      },
      // Storage types
      {
        scopes: ['storage', 'storage.type', 'storage.modifier', 'storage.type.primitive'],
        settings: {
          foreground: tokenColorScheme.storage || '#ff3366',
          fontStyle: 'bold'
        }
      },
      // Variables
      {
        scopes: ['variable', 'variable.parameter', 'variable.language', 'variable.other.readwrite'],
        settings: {
          foreground: tokenColorScheme.variable || '#ffaa00'
        }
      },
      // Functions
      {
        scopes: ['entity.name.function', 'support.function', 'support.function.builtin'],
        settings: {
          foreground: tokenColorScheme.function || '#8844ff'
        }
      },
      // Function calls
      {
        scopes: ['meta.function-call', 'variable.function'],
        settings: {
          foreground: tokenColorScheme.functionCall || '#8844ff'
        }
      },
      // Strings
      {
        scopes: ['string', 'string.quoted.single', 'string.quoted.double', 'string.quoted.template'],
        settings: {
          foreground: tokenColorScheme.string || '#00aaff'
        }
      },
      // Numbers
      {
        scopes: ['constant.numeric', 'constant.numeric.integer', 'constant.numeric.float'],
        settings: {
          foreground: tokenColorScheme.number || '#ff3366'
        }
      },
      // Constants
      {
        scopes: ['constant', 'constant.language', 'constant.character'],
        settings: {
          foreground: tokenColorScheme.constant || '#7c3aed'
        }
      },
      // Booleans
      {
        scopes: ['constant.language.boolean'],
        settings: {
          foreground: tokenColorScheme.boolean || '#ef4444'
        }
      },
      // Operators
      {
        scopes: ['keyword.operator', 'punctuation.separator', 'punctuation.terminator'],
        settings: {
          foreground: tokenColorScheme.operator || '#ffaa00'
        }
      },
      // Punctuation
      {
        scopes: ['punctuation', 'punctuation.definition', 'punctuation.section'],
        settings: {
          foreground: tokenColorScheme.punctuation || '#999999'
        }
      },
      // HTML/JSX Tags
      {
        scopes: ['entity.name.tag', 'entity.name.tag.html', 'entity.name.tag.jsx'],
        settings: {
          foreground: tokenColorScheme.tag || '#8844ff'
        }
      },
      // Attributes
      {
        scopes: ['entity.other.attribute-name', 'entity.other.attribute-name.html'],
        settings: {
          foreground: tokenColorScheme.attribute || '#ffaa00'
        }
      },
      // CSS Classes
      {
        scopes: ['entity.other.attribute-name.class', 'entity.other.attribute-name.class.css'],
        settings: {
          foreground: tokenColorScheme.className || '#00aaff'
        }
      },
      // CSS IDs
      {
        scopes: ['entity.other.attribute-name.id', 'entity.other.attribute-name.id.css'],
        settings: {
          foreground: tokenColorScheme.id || '#ff3366'
        }
      },
      // CSS Properties
      {
        scopes: ['support.type.property-name', 'support.type.property-name.css'],
        settings: {
          foreground: tokenColorScheme.property || '#0066cc'
        }
      },
      // CSS Values
      {
        scopes: ['support.constant.property-value', 'support.constant.property-value.css'],
        settings: {
          foreground: tokenColorScheme.value || '#8844ff'
        }
      },
      // Types
      {
        scopes: ['entity.name.type', 'entity.other.inherited-class', 'entity.name.struct'],
        settings: {
          foreground: tokenColorScheme.type || '#00aaff'
        }
      },
      // Classes
      {
        scopes: ['entity.name.class', 'support.class'],
        settings: {
          foreground: tokenColorScheme.class || '#10b981'
        }
      },
      // Interfaces
      {
        scopes: ['entity.name.interface', 'entity.name.type.interface'],
        settings: {
          foreground: tokenColorScheme.interface || '#06b6d4'
        }
      },
      // Namespaces
      {
        scopes: ['entity.name.namespace', 'entity.name.scope-resolution'],
        settings: {
          foreground: tokenColorScheme.namespace || '#7c3aed'
        }
      },
      // Decorators
      {
        scopes: ['punctuation.definition.decorator', 'entity.name.function.decorator'],
        settings: {
          foreground: tokenColorScheme.decorator || '#f59e0b'
        }
      },
      // Meta tags
      {
        scopes: ['meta.tag', 'meta.tag.html', 'meta.tag.jsx'],
        settings: {
          foreground: tokenColorScheme.tag || '#8844ff'
        }
      },
      // Regex
      {
        scopes: ['string.regexp'],
        settings: {
          foreground: tokenColorScheme.string || '#00aaff'
        }
      },
      // Template literals
      {
        scopes: ['string.template', 'string.template.js', 'string.template.expression.js'],
        settings: {
          foreground: tokenColorScheme.string || '#00aaff'
        }
      },
      // JSON keys
      {
        scopes: ['support.type.property-name.json'],
        settings: {
          foreground: tokenColorScheme.property || '#0066cc'
        }
      },
      // JSON values
      {
        scopes: ['constant.language.json'],
        settings: {
          foreground: tokenColorScheme.value || '#8844ff'
        }
      },
      // Markdown headers
      {
        scopes: ['markup.heading', 'markup.heading.1', 'markup.heading.2'],
        settings: {
          foreground: tokenColorScheme.keyword || '#0066cc',
          fontStyle: 'bold'
        }
      },
      // Markdown links
      {
        scopes: ['markup.underline.link'],
        settings: {
          foreground: tokenColorScheme.primary || '#2563eb',
          fontStyle: 'underline'
        }
      },
      // Markdown bold
      {
        scopes: ['markup.bold'],
        settings: {
          fontStyle: 'bold'
        }
      },
      // Markdown italic
      {
        scopes: ['markup.italic'],
        settings: {
          fontStyle: 'italic'
        }
      }
    ];

    return tokenMappings;
  }

  // Generate additional UI colors
  generateAdditionalColors(palette) {
    return {
      // Quick input
      'quickInput.foreground': palette.text,
      'quickInput.background': this.colorUtils.darken(palette.surface, 20),
      'quickInputList.focusBackground': palette.secondary,
      'quickInputList.focusForeground': palette.text,
      
      // Input
      'input.background': this.colorUtils.lighten(palette.surface, 10),
      
      // Widget
      'editorWidget.background': this.colorUtils.darken(palette.surface, 10),
      'editorWidget.border': palette.secondary,
      
      // Scrollbar
      'scrollbar.shadow': '#000000',
      'scrollbarSlider.background': this.colorUtils.addAlpha(palette.primary, 0.6),
      'scrollbarSlider.hoverBackground': this.colorUtils.addAlpha(palette.primary, 0.8),
      'scrollbarSlider.activeBackground': palette.primary,
      
      // Minimap
      'minimap.background': this.colorUtils.addAlpha(palette.background, 0.6),
      'minimap.errorHighlight': palette.secondary,
      'minimap.foregroundOpacity': palette.primary,
      'minimapSlider.background': palette.primary,
      
      // List
      'list.focusBackground': this.colorUtils.addAlpha(palette.primary, 0.4),
      'list.hoverBackground': this.colorUtils.lighten(palette.surface, 5),
      'list.activeSelectionBackground': this.colorUtils.addAlpha(palette.primary, 0.2),
      'list.inactiveSelectionBackground': this.colorUtils.lighten(palette.surface, 5),
      'list.inactiveSelectionForeground': this.colorUtils.adjustIntensity(palette.text, 0.6),
      
      // Settings
      'settings.checkboxBackground': palette.primary,
      'settings.checkboxForeground': palette.background,
      'settings.dropdownBackground': this.colorUtils.lighten(palette.surface, 10),
      'settings.dropdownForeground': palette.text,
      'settings.focusedRowBorder': palette.primary,
      'settings.headerForeground': palette.primary,
      'settings.rowHoverBackground': this.colorUtils.lighten(palette.surface, 5),
      'settings.modifiedItemIndicator': palette.secondary,
      
      // Peek view
      'peekViewEditor.background': this.colorUtils.darken(palette.surface, 10),
      'peekViewResult.background': palette.surface,
      'peekViewResult.matchHighlightBackground': this.colorUtils.addAlpha(palette.secondary, 0.4),
      'peekViewEditor.matchHighlightBackground': this.colorUtils.addAlpha(palette.primary, 0.2),
      
      // Terminal
      'terminal.foreground': palette.text,
      'terminal.ansiBlack': '#000000',
      'terminal.ansiRed': '#ff0000',
      'terminal.ansiGreen': '#00ff00',
      'terminal.ansiBlue': '#0000ff',
      'terminal.ansiWhite': '#ffffff'
    };
  }

  // Generate complete theme
  generateTheme(paletteName) {
    const config = this.themeConfigs[paletteName];
    if (!config) {
      throw new Error(`Theme palette '${paletteName}' not found`);
    }

    const { palette, bracketColors: bracketColorScheme, tokenColors: tokenColorScheme } = config;
    let allColors = {};

    // Generate colors for each UI section
    Object.keys(uiSections).forEach(sectionName => {
      const sectionColors = this.generateSectionColors(
        sectionName, 
        palette, 
        uiSections[sectionName].colorVariants
      );
      allColors = { ...allColors, ...sectionColors };
    });

    // Add bracket colors
    const bracketColors = this.generateBracketColors(bracketColorScheme);
    allColors = { ...allColors, ...bracketColors };

    // Add additional colors
    const additionalColors = this.generateAdditionalColors(palette);
    allColors = { ...allColors, ...additionalColors };

    // Generate token colors
    const tokenColors = this.generateTokenColors(tokenColorScheme);

    return {
      name: config.name,
      type: config.type,
      colors: allColors,
      tokenColors: tokenColors,
      fonts: config.fonts
    };
  }

  // Generate all themes
  generateAllThemes() {
    const outputDir = path.join(__dirname, '../../themes');
    
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    Object.keys(this.themeConfigs).forEach(paletteName => {
      const theme = this.generateTheme(paletteName);
      const outputPath = path.join(outputDir, `happy-heart-${paletteName}.json`);
      
      // Remove fonts from the theme object (VS Code doesn't support font settings in themes)
      const { fonts, ...themeForOutput } = theme;
      
      fs.writeFileSync(outputPath, JSON.stringify(themeForOutput, null, 2));
      console.log(`Generated advanced theme: ${outputPath}`);
      console.log(`  - Font recommendation: ${fonts.primary} / ${fonts.secondary}`);
    });
  }

  // Generate a specific theme
  generateSingleTheme(paletteName) {
    const theme = this.generateTheme(paletteName);
    const outputDir = path.join(__dirname, '../../themes');
    const outputPath = path.join(outputDir, `happy-heart-${paletteName}.json`);
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Remove fonts from the theme object
    const { fonts, ...themeForOutput } = theme;
    
    fs.writeFileSync(outputPath, JSON.stringify(themeForOutput, null, 2));
    console.log(`Generated advanced theme: ${outputPath}`);
    console.log(`  - Font recommendation: ${fonts.primary} / ${fonts.secondary}`);
  }

  // Get theme information
  getThemeInfo(paletteName) {
    const config = this.themeConfigs[paletteName];
    if (!config) return null;

    return {
      name: config.name,
      type: config.type,
      palette: config.palette,
      fonts: config.fonts,
      sections: Object.keys(uiSections).map(sectionName => ({
        name: uiSections[sectionName].name,
        properties: Object.keys(uiSections[sectionName].properties)
      }))
    };
  }

  // List all available themes
  listThemes() {
    return Object.keys(this.themeConfigs).map(paletteName => ({
      id: paletteName,
      ...this.getThemeInfo(paletteName)
    }));
  }
}

export default AdvancedThemeGenerator;
