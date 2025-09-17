// Theme configuration and management
export const themeConfig = {
  // Theme metadata
  themes: {
    'happy-heart-1': {
      name: 'Happy Heart 1 - Vibrant Purple',
      description: 'Dark theme with vibrant purple and green accents',
      category: 'vibrant',
      tags: ['purple', 'green', 'vibrant', 'dark']
    },
    'happy-heart-2': {
      name: 'Happy Heart 2 - Enhanced Dark',
      description: 'Enhanced dark theme with better contrast',
      category: 'enhanced',
      tags: ['dark', 'enhanced', 'contrast', 'colorful']
    },
    'happy-heart-3': {
      name: 'Happy Heart 3 - Ocean Breeze',
      description: 'Cool ocean-inspired theme',
      category: 'cool',
      tags: ['blue', 'cyan', 'ocean', 'cool']
    },
    'happy-heart-4': {
      name: 'Happy Heart 4 - Sunset Glow',
      description: 'Warm sunset-inspired theme',
      category: 'warm',
      tags: ['orange', 'red', 'sunset', 'warm']
    },
    'happy-heart-5': {
      name: 'Happy Heart 5 - Forest Dreams',
      description: 'Nature-inspired green theme',
      category: 'nature',
      tags: ['green', 'forest', 'nature', 'organic']
    }
  },

  // Color palette definitions for easy reference
  colorPalettes: {
    vibrant: {
      primary: '#88ff00',
      secondary: '#e67308',
      accent: '#FFE212',
      background: '#03001C'
    },
    enhanced: {
      primary: '#88ff00',
      secondary: '#e67308',
      accent: '#FFE212',
      background: '#030303'
    },
    ocean: {
      primary: '#00d4ff',
      secondary: '#ff6b35',
      accent: '#ffd700',
      background: '#0a0e1a'
    },
    sunset: {
      primary: '#ff6b35',
      secondary: '#f7931e',
      accent: '#ffd700',
      background: '#1a0f0a'
    },
    forest: {
      primary: '#4ade80',
      secondary: '#22c55e',
      accent: '#84cc16',
      background: '#0a1a0a'
    }
  },

  // Token color schemes
  tokenSchemes: {
    vibrant: {
      keyword: '#f51d01',
      storage: '#88ff00',
      variable: '#f1f508',
      function: '#ff0fc3',
      type: '#18ff4a'
    },
    enhanced: {
      keyword: '#ffea00fb',
      storage: '#FF2929',
      variable: '#87fd00',
      function: '#ff04ff',
      type: '#ff00bf'
    },
    ocean: {
      keyword: '#00d4ff',
      storage: '#ff6b35',
      variable: '#ffd700',
      function: '#7c3aed',
      type: '#10b981'
    },
    sunset: {
      keyword: '#ff6b35',
      storage: '#f7931e',
      variable: '#ffd700',
      function: '#ff8c42',
      type: '#ffa726'
    },
    forest: {
      keyword: '#4ade80',
      storage: '#22c55e',
      variable: '#84cc16',
      function: '#65a30d',
      type: '#16a34a'
    }
  },

  // Build configuration
  build: {
    outputDir: './themes',
    sourceDir: './src/themes/variables',
    generatorFile: './src/themes/generator.js'
  },

  // Development configuration
  dev: {
    watchFiles: ['src/**/*.js'],
    buildCommand: 'npm run build',
    testCommand: 'npm test'
  }
};

// Helper functions for theme management
export const themeHelpers = {
  // Get theme by ID
  getTheme: (themeId) => themeConfig.themes[themeId],
  
  // Get all themes
  getAllThemes: () => Object.values(themeConfig.themes),
  
  // Get themes by category
  getThemesByCategory: (category) => 
    Object.values(themeConfig.themes).filter(theme => theme.category === category),
  
  // Get themes by tag
  getThemesByTag: (tag) => 
    Object.values(themeConfig.themes).filter(theme => theme.tags.includes(tag)),
  
  // Get color palette by name
  getColorPalette: (paletteName) => themeConfig.colorPalettes[paletteName],
  
  // Get token scheme by name
  getTokenScheme: (schemeName) => themeConfig.tokenSchemes[schemeName],
  
  // Validate theme configuration
  validateTheme: (themeConfig) => {
    const required = ['name', 'type', 'colors', 'tokenColors'];
    return required.every(prop => themeConfig.hasOwnProperty(prop));
  }
};

export default themeConfig;
