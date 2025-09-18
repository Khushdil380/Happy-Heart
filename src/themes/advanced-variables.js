 // Advanced Theme Variables with UI Section Management
// This file provides comprehensive color palettes for each UI section

// Base color palettes for different theme styles
export const colorPalettes = {
  // Smooth White Theme
  smoothWhite: {
    primary: '#2563eb',
    secondary: '#7c3aed',
    accent: '#f59e0b',
    background: '#fafafa',
    surface: '#f5f5f5',
    text: '#1f2937'
  },
  
  // Pure Black Theme
  black: {
    primary: '#00ff88',
    secondary: '#ff3366',
    accent: '#ffaa00',
    background: '#000000',
    surface: '#0a0a0a',
    text: '#ffffff'
  },
  
  // Bright Light Theme
  light: {
    primary: '#0066cc',
    secondary: '#ff3366',
    accent: '#ffaa00',
    background: '#ffffff',
    surface: '#f8f9fa',
    text: '#333333'
  },
  
  // Ocean Breeze Theme
  ocean: {
    primary: '#00d4ff',
    secondary: '#ff6b35',
    accent: '#ffd700',
    background: '#0a0e1a',
    surface: '#1a1f2e',
    text: '#e6f1ff'
  },
  
  // Sunset Glow Theme (Less Bright)
  sunset: {
    primary: '#d97706',
    secondary: '#ea580c',
    accent: '#fbbf24',
    background: '#0f0a05',
    surface: '#1a0f0a',
    text: '#fef3c7'
  },
  
  // Forest Dreams Theme
  forest: {
    primary: '#4ade80',
    secondary: '#22c55e',
    accent: '#84cc16',
    background: '#0a1a0a',
    surface: '#0f1f0f',
    text: '#f0fff4'
  },
  
  // Deep Blue Theme
  deepBlue: {
    primary: '#00d4ff',
    secondary: '#ff6b35',
    accent: '#ffd700',
    background: '#010610',
    surface: '#020a1a',
    text: '#e6f1ff'
  },
  
  // Midnight Purple Theme
  midnightPurple: {
    primary: '#a855f7',
    secondary: '#ec4899',
    accent: '#06b6d4',
    background: '#0f0b1a',
    surface: '#1a0f2e',
    text: '#e0e7ff'
  },
  
  // Emerald Green Theme
  emeraldGreen: {
    primary: '#10b981',
    secondary: '#f59e0b',
    accent: '#ef4444',
    background: '#064e3b',
    surface: '#065f46',
    text: '#d1fae5'
  },
  
  // Rose Gold Theme
  roseGold: {
    primary: '#f43f5e',
    secondary: '#f59e0b',
    accent: '#8b5cf6',
    background: '#1f0f1a',
    surface: '#2d1b2e',
    text: '#fdf2f8'
  }
};

// UI Section configurations with color intensity variants
export const uiSections = {
  activityBar: {
    name: 'Activity Bar',
    properties: {
      background: 'activityBar.background',
      foreground: 'activityBar.foreground',
      activeBorder: 'activityBar.activeBorder',
      inactiveForeground: 'activityBar.inactiveForeground',
      activeFocusBorder: 'activityBar.activeFocusBorder',
      border: 'activityBar.border'
    },
    colorVariants: {
      background: { base: 'surface', intensity: 0.8 },
      foreground: { base: 'primary', intensity: 1.0 },
      activeBorder: { base: 'primary', intensity: 1.0 },
      inactiveForeground: { base: 'text', intensity: 0.6 },
      activeFocusBorder: { base: 'secondary', intensity: 1.0 },
      border: { base: 'secondary', intensity: 0.8 }
    }
  },
  
  sideBar: {
    name: 'Side Bar',
    properties: {
      background: 'sideBar.background',
      foreground: 'sideBar.foreground',
      border: 'sideBar.border',
      sectionHeaderBackground: 'sideBarSectionHeader.background',
      sectionHeaderForeground: 'sideBarSectionHeader.foreground'
    },
    colorVariants: {
      background: { base: 'surface', intensity: 0.9 },
      foreground: { base: 'text', intensity: 0.9 },
      border: { base: 'secondary', intensity: 0.7 },
      sectionHeaderBackground: { base: 'surface', intensity: 1.2 },
      sectionHeaderForeground: { base: 'primary', intensity: 1.0 }
    }
  },
  
  editorGroup: {
    name: 'Editor Group/Editor Area',
    properties: {
      background: 'editor.background',
      foreground: 'editor.foreground',
      border: 'editorGroup.border',
      tabsBackground: 'editorGroupHeader.tabsBackground',
      lineHighlight: 'editor.lineHighlightBackground',
      lineHighlightBorder: 'editor.lineHighlightBorder',
      selection: 'editor.selectionBackground',
      selectionForeground: 'editor.selectionForeground',
      selectionHighlight: 'editor.selectionHighlightBackground',
      cursor: 'editorCursor.foreground',
      bracketMatch: 'editorBracketMatch.background',
      bracketMatchBorder: 'editorBracketMatch.border',
      gutter: 'editorGutter.background',
      lineNumber: 'editorLineNumber.foreground',
      lineNumberActive: 'editorLineNumber.activeForeground',
      whitespace: 'editorWhitespace.foreground',
      fold: 'editor.foldBackground'
    },
    colorVariants: {
      background: { base: 'background', intensity: 1.0 },
      // Remove foreground to let token colors show through
      // foreground: { base: 'text', intensity: 1.0 },
      border: { base: 'secondary', intensity: 0.8 },
      tabsBackground: { base: 'surface', intensity: 0.7 },
      lineHighlight: { base: 'primary', intensity: 0.1 },
      lineHighlightBorder: { base: 'primary', intensity: 0.2 },
      selection: { base: 'primary', intensity: 0.3 },
      selectionForeground: { base: 'text', intensity: 1.0 },
      selectionHighlight: { base: 'secondary', intensity: 0.3 },
      cursor: { base: 'primary', intensity: 1.0 },
      bracketMatch: { base: 'primary', intensity: 0.1 },
      bracketMatchBorder: { base: 'primary', intensity: 1.0 },
      gutter: { base: 'background', intensity: 1.0 },
      lineNumber: { base: 'text', intensity: 0.6 },
      lineNumberActive: { base: 'primary', intensity: 1.0 },
      whitespace: { base: 'text', intensity: 0.3 },
      fold: { base: 'surface', intensity: 0.4 }
    }
  },
  
  panel: {
    name: 'Panel',
    properties: {
      background: 'panel.background',
      border: 'panel.border',
      titleActiveBorder: 'panelTitle.activeBorder',
      titleInactiveForeground: 'panelTitle.inactiveForeground',
      titleActiveForeground: 'panelTitle.activeForeground',
      inputBorder: 'panelInput.border',
      sectionHeader: 'panelSectionHeader.background'
    },
    colorVariants: {
      background: { base: 'surface', intensity: 0.9 },
      border: { base: 'secondary', intensity: 0.8 },
      titleActiveBorder: { base: 'primary', intensity: 1.0 },
      titleInactiveForeground: { base: 'text', intensity: 0.6 },
      titleActiveForeground: { base: 'primary', intensity: 1.0 },
      inputBorder: { base: 'primary', intensity: 0.3 },
      sectionHeader: { base: 'secondary', intensity: 1.0 }
    }
  },
  
  statusBar: {
    name: 'Status Bar',
    properties: {
      background: 'statusBar.background',
      foreground: 'statusBar.foreground',
      border: 'statusBar.border'
    },
    colorVariants: {
      background: { base: 'surface', intensity: 1.1 },
      foreground: { base: 'text', intensity: 1.0 },
      border: { base: 'secondary', intensity: 0.8 }
    }
  },
  
  titleBar: {
    name: 'Title Bar',
    properties: {
      activeBackground: 'titleBar.activeBackground',
      activeForeground: 'titleBar.activeForeground',
      border: 'titleBar.border'
    },
    colorVariants: {
      activeBackground: { base: 'primary', intensity: 1.0 },
      activeForeground: { base: 'background', intensity: 1.0 },
      border: { base: 'secondary', intensity: 0.8 }
    }
  },
  
  menuBar: {
    name: 'Menu Bar',
    properties: {
      background: 'menu.background',
      foreground: 'menu.foreground',
      selectionBackground: 'menu.selectionBackground',
      separatorBackground: 'menu.separatorBackground',
      border: 'menu.border'
    },
    colorVariants: {
      background: { base: 'surface', intensity: 0.8 },
      foreground: { base: 'text', intensity: 0.9 },
      selectionBackground: { base: 'secondary', intensity: 1.0 },
      separatorBackground: { base: 'surface', intensity: 1.2 },
      border: { base: 'secondary', intensity: 0.7 }
    }
  },
  
  tabBar: {
    name: 'Tab Bar',
    properties: {
      activeBackground: 'tab.activeBackground',
      inactiveBackground: 'tab.inactiveBackground',
      activeForeground: 'tab.activeForeground',
      inactiveForeground: 'tab.inactiveForeground',
      border: 'tab.border'
    },
    colorVariants: {
      activeBackground: { base: 'surface', intensity: 1.1 },
      inactiveBackground: { base: 'surface', intensity: 0.8 },
      activeForeground: { base: 'primary', intensity: 1.0 },
      inactiveForeground: { base: 'text', intensity: 0.6 },
      border: { base: 'secondary', intensity: 0.8 }
    }
  },
  
  breadcrumbs: {
    name: 'Breadcrumbs',
    properties: {
      background: 'breadcrumb.background',
      foreground: 'breadcrumb.foreground'
    },
    colorVariants: {
      background: { base: 'surface', intensity: 1.0 },
      foreground: { base: 'primary', intensity: 1.0 }
    }
  },
  
  notification: {
    name: 'Notification',
    properties: {
      background: 'notificationCenter.border',
      foreground: 'notificationCenterHeader.foreground'
    },
    colorVariants: {
      background: { base: 'surface', intensity: 1.0 },
      foreground: { base: 'text', intensity: 1.0 }
    }
  }
};

// Bracket and indent guide color schemes
export const bracketColors = {
  smoothWhite: ['#2563eb', '#7c3aed', '#f59e0b', '#ef4444', '#10b981', '#06b6d4'],
  black: ['#00ff88', '#ff3366', '#ffaa00', '#8844ff', '#00aaff', '#ff44aa'],
  light: ['#0066cc', '#ff3366', '#ffaa00', '#8844ff', '#00aaff', '#ff44aa'],
  ocean: ['#00d4ff', '#ff6b35', '#ffd700', '#7c3aed', '#10b981', '#f59e0b'],
  sunset: ['#d97706', '#ea580c', '#fbbf24', '#dc2626', '#f59e0b', '#eab308'],
  forest: ['#4ade80', '#22c55e', '#84cc16', '#65a30d', '#16a34a', '#15803d'],
  deepBlue: ['#00d4ff', '#ff6b35', '#ffd700', '#7c3aed', '#10b981', '#f59e0b'],
  midnightPurple: ['#a855f7', '#ec4899', '#06b6d4', '#f59e0b', '#10b981', '#ef4444'],
  emeraldGreen: ['#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#f43f5e'],
  roseGold: ['#f43f5e', '#f59e0b', '#8b5cf6', '#06b6d4', '#10b981', '#ef4444']
};

// Token color schemes for syntax highlighting
export const tokenColors = {
  smoothWhite: {
    comment: '#6b7280',
    keyword: '#2563eb',
    storage: '#7c3aed',
    variable: '#f59e0b',
    function: '#ef4444',
    type: '#10b981',
    string: '#059669',
    number: '#dc2626',
    operator: '#7c2d12',
    punctuation: '#374151',
    tag: '#7c3aed',
    attribute: '#f59e0b',
    className: '#10b981',
    id: '#ef4444',
    property: '#2563eb',
    value: '#059669'
  },
  black: {
    comment: '#666666',
    keyword: '#00ff88',
    storage: '#ff3366',
    variable: '#ffaa00',
    function: '#8844ff',
    type: '#00aaff',
    string: '#00ff88',
    number: '#ff3366',
    operator: '#ffaa00',
    punctuation: '#888888',
    tag: '#8844ff',
    attribute: '#ffaa00',
    className: '#00aaff',
    id: '#ff3366',
    property: '#00ff88',
    value: '#8844ff'
  },
  light: {
    comment: '#999999',
    keyword: '#0066cc',
    storage: '#ff3366',
    variable: '#ffaa00',
    function: '#8844ff',
    type: '#00aaff',
    string: '#0066cc',
    number: '#ff3366',
    operator: '#ffaa00',
    punctuation: '#666666',
    tag: '#8844ff',
    attribute: '#ffaa00',
    className: '#00aaff',
    id: '#ff3366',
    property: '#0066cc',
    value: '#8844ff'
  },
  ocean: {
    comment: '#8b949e',
    keyword: '#00d4ff',
    storage: '#ff6b35',
    variable: '#ffd700',
    function: '#7c3aed',
    type: '#10b981',
    string: '#00d4ff',
    number: '#ff6b35',
    operator: '#ffd700',
    punctuation: '#8b949e',
    tag: '#7c3aed',
    attribute: '#ffd700',
    className: '#10b981',
    id: '#ff6b35',
    property: '#00d4ff',
    value: '#7c3aed'
  },
  sunset: {
    comment: '#a78bfa',
    keyword: '#d97706',
    storage: '#ea580c',
    variable: '#fbbf24',
    function: '#dc2626',
    type: '#f59e0b',
    string: '#d97706',
    number: '#ea580c',
    operator: '#fbbf24',
    punctuation: '#a78bfa',
    tag: '#dc2626',
    attribute: '#fbbf24',
    className: '#f59e0b',
    id: '#ea580c',
    property: '#d97706',
    value: '#dc2626'
  },
  forest: {
    comment: '#86efac',
    keyword: '#4ade80',
    storage: '#22c55e',
    variable: '#84cc16',
    function: '#65a30d',
    type: '#16a34a',
    string: '#4ade80',
    number: '#22c55e',
    operator: '#84cc16',
    punctuation: '#86efac',
    tag: '#65a30d',
    attribute: '#84cc16',
    className: '#16a34a',
    id: '#22c55e',
    property: '#4ade80',
    value: '#65a30d'
  },
  deepBlue: {
    comment: '#8b949e',
    keyword: '#00d4ff',
    storage: '#ff6b35',
    variable: '#ffd700',
    function: '#7c3aed',
    type: '#10b981',
    string: '#00d4ff',
    number: '#ff6b35',
    operator: '#ffd700',
    punctuation: '#8b949e',
    tag: '#7c3aed',
    attribute: '#ffd700',
    className: '#10b981',
    id: '#ff6b35',
    property: '#00d4ff',
    value: '#7c3aed'
  },
  midnightPurple: {
    comment: '#a78bfa',
    keyword: '#a855f7',
    storage: '#ec4899',
    variable: '#06b6d4',
    function: '#f59e0b',
    type: '#10b981',
    string: '#a855f7',
    number: '#ec4899',
    operator: '#06b6d4',
    punctuation: '#a78bfa',
    tag: '#f59e0b',
    attribute: '#06b6d4',
    className: '#10b981',
    id: '#ec4899',
    property: '#a855f7',
    value: '#f59e0b'
  },
  emeraldGreen: {
    comment: '#86efac',
    keyword: '#10b981',
    storage: '#f59e0b',
    variable: '#ef4444',
    function: '#8b5cf6',
    type: '#06b6d4',
    string: '#10b981',
    number: '#f59e0b',
    operator: '#ef4444',
    punctuation: '#86efac',
    tag: '#8b5cf6',
    attribute: '#ef4444',
    className: '#06b6d4',
    id: '#f59e0b',
    property: '#10b981',
    value: '#8b5cf6'
  },
  roseGold: {
    comment: '#fbb6ce',
    keyword: '#f43f5e',
    storage: '#f59e0b',
    variable: '#8b5cf6',
    function: '#06b6d4',
    type: '#10b981',
    string: '#f43f5e',
    number: '#f59e0b',
    operator: '#8b5cf6',
    punctuation: '#fbb6ce',
    tag: '#06b6d4',
    attribute: '#8b5cf6',
    className: '#10b981',
    id: '#f59e0b',
    property: '#f43f5e',
    value: '#06b6d4'
  }
};

// Font recommendations for each theme style
export const fontRecommendations = {
  smoothWhite: {
    primary: 'SF Mono',
    secondary: 'Monaco',
    fallback: 'Consolas, Monaco, monospace'
  },
  black: {
    primary: 'Source Code Pro',
    secondary: 'Cascadia Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  light: {
    primary: 'SF Mono',
    secondary: 'Monaco',
    fallback: 'Consolas, Monaco, monospace'
  },
  ocean: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  sunset: {
    primary: 'Source Code Pro',
    secondary: 'Cascadia Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  forest: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  deepBlue: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  midnightPurple: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  emeraldGreen: {
    primary: 'Source Code Pro',
    secondary: 'Cascadia Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  roseGold: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  }
};
