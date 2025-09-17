import { baseColors, tokenMappings } from './base.js';

// Happy Heart Theme 1 - Vibrant Purple & Green
export const happyHeart1 = {
  name: 'Happy Heart 1',
  type: 'dark',
  
  // Color palette specific to this theme
  colors: {
    ...baseColors,
    
    // Theme-specific overrides
    primary: '#88ff00',
    secondary: '#e67308',
    accent: '#FFE212',
    
    // Background colors
    editorBackground: '#03001C',
    sidebarBackground: '#441752',
    activityBarBackground: '#160F30',
    statusBarBackground: '#6e11c5',
    panelBackground: '#01121ae3',
    
    // UI element colors
    titleBarBackground: '#88ff00',
    titleBarForeground: '#000000',
    quickInputBackground: '#09043f',
    quickInputForeground: '#FFE212',
    menuBackground: '#09043f',
    menuSelectionBackground: '#ff0000',
    
    // Editor colors
    lineHighlightBackground: '#18230F',
    lineHighlightBorder: '#253f10',
    selectionBackground: '#bb04f350',
    selectionForeground: '#ffffff',
    selectionHighlightBackground: '#fd0643f1',
    
    // Tab colors
    tabActiveBackground: '#130497',
    tabInactiveBackground: '#171757',
    tabActiveForeground: '#FFE212',
    
    // Scrollbar colors
    scrollbarSliderBackground: '#74fd04f6',
    scrollbarSliderHoverBackground: '#bdec11b9',
    scrollbarSliderActiveBackground: '#d2f50e',
    
    // Minimap colors
    minimapBackground: '#6200ff2f',
    minimapSliderBackground: '#5eff00',
    
    // Gutter colors
    editorGutterBackground: '#0b0c3a',
    editorLineNumberForeground: '#0004ff',
    
    // Bracket colors
    bracketMatchBackground: '#282C34',
    bracketMatchBorder: '#528BFF',
    
    // Indent guide colors
    indentGuideActiveBackground: '#650ff0e3',
    
    // Fold colors
    foldBackground: '#2A2D3E',
    
    // Breadcrumb colors
    breadcrumbBackground: '#9b11c5',
    breadcrumbForeground: '#caf509',
    
    // Section header colors
    sideBarSectionHeaderBackground: '#9b11c5',
    sideBarSectionHeaderForeground: '#FFE212',
    
    // Panel colors
    panelTitleActiveBorder: '#8bf304',
    panelTitleInactiveForeground: '#d0ff00',
    panelSectionHeaderBackground: '#ff0000',
    
    // Terminal colors
    terminalForeground: '#fdbc0b',
    
    // Editor group colors
    editorGroupHeaderTabsBackground: '#a913ee71',
    
    // Input colors
    inputBackground: '#160d77',
    
    // Widget colors
    editorWidgetBackground: '#07023b',
    editorWidgetBorder: '#e67308',
    
    // Comment range colors
    editorGutterCommentRangeForeground: '#dbdfac'
  },
  
  // Token colors specific to this theme
  tokenColors: {
    comment: {
      ...tokenMappings.comment
    },
    keyword: {
      ...tokenMappings.keyword,
      foreground: '#f51d01'
    },
    storage: {
      ...tokenMappings.storage,
      foreground: '#88ff00',
      fontStyle: 'bold'
    },
    variable: {
      ...tokenMappings.variable,
      foreground: '#f1f508'
    },
    function: {
      ...tokenMappings.function,
      foreground: '#ff0fc3'
    },
    type: {
      ...tokenMappings.type,
      foreground: '#18ff4a'
    }
  }
};
