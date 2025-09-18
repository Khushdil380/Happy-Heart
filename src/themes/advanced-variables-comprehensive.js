// Comprehensive Advanced Theme Variables with 20 UI Sections
// This file provides comprehensive color palettes and UI section management

// Base color palettes for different theme styles
export const colorPalettes = {
  // 4 Variants of Dark Theme
  dark1: {
    primary: '#00ff88',
    secondary: '#ff3366',
    accent: '#ffaa00',
    background: '#000000',
    surface: '#0a0a0a',
    text: '#ffffff'
  },
  
  dark2: {
    primary: '#ff6b35',
    secondary: '#00d4ff',
    accent: '#ffd700',
    background: '#0a0a0a',
    surface: '#1a1a1a',
    text: '#ffffff'
  },
  
  dark3: {
    primary: '#a855f7',
    secondary: '#ec4899',
    accent: '#06b6d4',
    background: '#0f0f0f',
    surface: '#1f1f1f',
    text: '#ffffff'
  },
  
  dark4: {
    primary: '#4ade80',
    secondary: '#22c55e',
    accent: '#84cc16',
    background: '#0a0a0a',
    surface: '#1a1a1a',
    text: '#ffffff'
  },
  
  // 3 Variants of Dark Blue
  darkBlue1: {
    primary: '#00d4ff',
    secondary: '#ff6b35',
    accent: '#ffd700',
    background: '#010610',
    surface: '#020a1a',
    text: '#e6f1ff'
  },
  
  darkBlue2: {
    primary: '#00b4d8',
    secondary: '#0077b6',
    accent: '#90e0ef',
    background: '#0a0e1a',
    surface: '#1a1f2e',
    text: '#e6f1ff'
  },
  
  darkBlue3: {
    primary: '#0066cc',
    secondary: '#004499',
    accent: '#3399ff',
    background: '#051537',
    surface: '#0a1a4a',
    text: '#e6f1ff'
  },
  
  // 2 Variants of Light Theme
  light1: {
    primary: '#0066cc',
    secondary: '#ff3366',
    accent: '#ffaa00',
    background: '#ffffff',
    surface: '#f8f9fa',
    text: '#333333'
  },
  
  light2: {
    primary: '#2563eb',
    secondary: '#7c3aed',
    accent: '#f59e0b',
    background: '#fafafa',
    surface: '#f5f5f5',
    text: '#1f2937'
  },
  
  // 2 Variants of Green Theme
  green1: {
    primary: '#4ade80',
    secondary: '#22c55e',
    accent: '#84cc16',
    background: '#0a1a0a',
    surface: '#0f1f0f',
    text: '#f0fff4'
  },
  
  green2: {
    primary: '#10b981',
    secondary: '#059669',
    accent: '#34d399',
    background: '#064e3b',
    surface: '#065f46',
    text: '#d1fae5'
  },
  
  // 2 Variants of Purple Theme
  purple1: {
    primary: '#a855f7',
    secondary: '#ec4899',
    accent: '#06b6d4',
    background: '#0f0b1a',
    surface: '#1a0f2e',
    text: '#e0e7ff'
  },
  
  purple2: {
    primary: '#8b5cf6',
    secondary: '#7c3aed',
    accent: '#a855f7',
    background: '#1a0f2e',
    surface: '#2d1b4a',
    text: '#e0e7ff'
  },
  
  // 1 Variant of Rose Gold
  roseGold: {
    primary: '#f43f5e',
    secondary: '#f59e0b',
    accent: '#8b5cf6',
    background: '#1f0f1a',
    surface: '#2d1b2e',
    text: '#fdf2f8'
  },
  
  // 1 Variant of Chilli Paper
  chilliPaper: {
    primary: '#dc2626',
    secondary: '#ef4444',
    accent: '#f59e0b',
    background: '#1a0a0a',
    surface: '#2a1a1a',
    text: '#fef2f2'
  },
  
  // 1 Variant of Grey
  grey: {
    primary: '#6b7280',
    secondary: '#9ca3af',
    accent: '#d1d5db',
    background: '#374151',
    surface: '#4b5563',
    text: '#f9fafb'
  },
  
  // 1 Variant of Yellow
  yellow: {
    primary: '#fbbf24',
    secondary: '#f59e0b',
    accent: '#fcd34d',
    background: '#1a1a0a',
    surface: '#2a2a1a',
    text: '#fff8dc'
  }
};

// Comprehensive UI Section configurations with 5-color system
export const uiSections = {
  // 1. Window & Title Bar
  titleBar: {
    name: 'Window & Title Bar',
    properties: {
      activeBackground: 'titleBar.activeBackground',
      activeForeground: 'titleBar.activeForeground',
      inactiveBackground: 'titleBar.inactiveBackground',
      inactiveForeground: 'titleBar.inactiveForeground',
      border: 'titleBar.border'
    },
    colorVariants: {
      activeBackground: { base: 'primary', intensity: 1.0 },
      activeForeground: { base: 'background', intensity: 1.0 },
      inactiveBackground: { base: 'surface', intensity: 0.8 },
      inactiveForeground: { base: 'text', intensity: 0.7 },
      border: { base: 'secondary', intensity: 0.6 }
    }
  },

  // 2. Menu Bar
  menuBar: {
    name: 'Menu Bar',
    properties: {
      selectionBackground: 'menubar.selectionBackground',
      selectionForeground: 'menubar.selectionForeground',
      background: 'menu.background',
      foreground: 'menu.foreground',
      menuSelectionBackground: 'menu.selectionBackground',
      menuSelectionForeground: 'menu.selectionForeground',
      separatorBackground: 'menu.separatorBackground',
      border: 'menu.border'
    },
    colorVariants: {
      selectionBackground: { base: 'secondary', intensity: 1.0 },
      selectionForeground: { base: 'background', intensity: 1.0 },
      background: { base: 'surface', intensity: 0.9 },
      foreground: { base: 'text', intensity: 0.9 },
      menuSelectionBackground: { base: 'secondary', intensity: 1.0 },
      menuSelectionForeground: { base: 'background', intensity: 1.0 },
      separatorBackground: { base: 'text', intensity: 0.3 },
      border: { base: 'secondary', intensity: 0.6 }
    }
  },

  // 3. Activity Bar (Left vertical icons)
  activityBar: {
    name: 'Activity Bar',
    properties: {
      background: 'activityBar.background',
      foreground: 'activityBar.foreground',
      inactiveForeground: 'activityBar.inactiveForeground',
      activeBorder: 'activityBar.activeBorder',
      badgeBackground: 'activityBarBadge.background',
      badgeForeground: 'activityBarBadge.foreground',
      border: 'activityBar.border'
    },
    colorVariants: {
      background: { base: 'surface', intensity: 0.8 },
      foreground: { base: 'primary', intensity: 1.0 },
      inactiveForeground: { base: 'text', intensity: 0.6 },
      activeBorder: { base: 'primary', intensity: 1.0 },
      badgeBackground: { base: 'accent', intensity: 1.0 },
      badgeForeground: { base: 'background', intensity: 1.0 },
      border: { base: 'secondary', intensity: 0.7 }
    }
  },

  // 4. Side Bar
  sideBar: {
    name: 'Side Bar',
    properties: {
      background: 'sideBar.background',
      foreground: 'sideBar.foreground',
      border: 'sideBar.border',
      titleForeground: 'sideBarTitle.foreground',
      sectionHeaderBackground: 'sideBarSectionHeader.background',
      sectionHeaderForeground: 'sideBarSectionHeader.foreground'
    },
    colorVariants: {
      background: { base: 'surface', intensity: 0.9 },
      foreground: { base: 'text', intensity: 0.9 },
      border: { base: 'secondary', intensity: 0.7 },
      titleForeground: { base: 'primary', intensity: 1.0 },
      sectionHeaderBackground: { base: 'surface', intensity: 1.1 },
      sectionHeaderForeground: { base: 'primary', intensity: 1.0 }
    }
  },

  // 5. Explorer File/Folder List
  explorer: {
    name: 'Explorer File/Folder List',
    properties: {
      activeSelectionBackground: 'list.activeSelectionBackground',
      activeSelectionForeground: 'list.activeSelectionForeground',
      inactiveSelectionBackground: 'list.inactiveSelectionBackground',
      inactiveSelectionForeground: 'list.inactiveSelectionForeground',
      hoverBackground: 'list.hoverBackground',
      hoverForeground: 'list.hoverForeground',
      focusBackground: 'list.focusBackground',
      focusForeground: 'list.focusForeground'
    },
    colorVariants: {
      activeSelectionBackground: { base: 'primary', intensity: 0.3 },
      activeSelectionForeground: { base: 'background', intensity: 1.0 },
      inactiveSelectionBackground: { base: 'surface', intensity: 0.8 },
      inactiveSelectionForeground: { base: 'text', intensity: 0.8 },
      hoverBackground: { base: 'primary', intensity: 0.1 },
      hoverForeground: { base: 'text', intensity: 1.0 },
      focusBackground: { base: 'primary', intensity: 0.2 },
      focusForeground: { base: 'text', intensity: 1.0 }
    }
  },

  // 6. Editor Tabs
  editorTabs: {
    name: 'Editor Tabs',
    properties: {
      activeBackground: 'tab.activeBackground',
      activeForeground: 'tab.activeForeground',
      inactiveBackground: 'tab.inactiveBackground',
      inactiveForeground: 'tab.inactiveForeground',
      hoverBackground: 'tab.hoverBackground',
      hoverForeground: 'tab.hoverForeground',
      activeBorder: 'tab.activeBorder',
      unfocusedActiveBorder: 'tab.unfocusedActiveBorder',
      activeModifiedBorder: 'tab.activeModifiedBorder'
    },
    colorVariants: {
      activeBackground: { base: 'background', intensity: 1.0 },
      activeForeground: { base: 'primary', intensity: 1.0 },
      inactiveBackground: { base: 'surface', intensity: 0.7 },
      inactiveForeground: { base: 'text', intensity: 0.6 },
      hoverBackground: { base: 'surface', intensity: 0.9 },
      hoverForeground: { base: 'text', intensity: 0.9 },
      activeBorder: { base: 'primary', intensity: 1.0 },
      unfocusedActiveBorder: { base: 'primary', intensity: 0.7 },
      activeModifiedBorder: { base: 'accent', intensity: 1.0 }
    }
  },

  // 7. Editor Area
  editorArea: {
    name: 'Editor Area',
    properties: {
      background: 'editor.background',
      selectionBackground: 'editor.selectionBackground',
      selectionHighlightBackground: 'editor.selectionHighlightBackground',
      wordHighlightBackground: 'editor.wordHighlightBackground',
      lineHighlightBackground: 'editor.lineHighlightBackground',
      cursorForeground: 'editorCursor.foreground',
      bracketMatchBackground: 'editorBracketMatch.background',
      bracketMatchBorder: 'editorBracketMatch.border'
    },
    colorVariants: {
      background: { base: 'background', intensity: 1.0 },
      selectionBackground: { base: 'primary', intensity: 0.3 },
      selectionHighlightBackground: { base: 'secondary', intensity: 0.2 },
      wordHighlightBackground: { base: 'accent', intensity: 0.2 },
      lineHighlightBackground: { base: 'primary', intensity: 0.1 },
      cursorForeground: { base: 'primary', intensity: 1.0 },
      bracketMatchBackground: { base: 'primary', intensity: 0.1 },
      bracketMatchBorder: { base: 'primary', intensity: 1.0 }
    }
  },

  // 8. Editor Line Numbers & Gutter
  editorGutter: {
    name: 'Editor Line Numbers & Gutter',
    properties: {
      lineNumberForeground: 'editorLineNumber.foreground',
      lineNumberActiveForeground: 'editorLineNumber.activeForeground',
      gutterBackground: 'editorGutter.background',
      addedBackground: 'editorGutter.addedBackground',
      modifiedBackground: 'editorGutter.modifiedBackground',
      deletedBackground: 'editorGutter.deletedBackground'
    },
    colorVariants: {
      lineNumberForeground: { base: 'text', intensity: 0.6 },
      lineNumberActiveForeground: { base: 'primary', intensity: 1.0 },
      gutterBackground: { base: 'background', intensity: 1.0 },
      addedBackground: { base: 'accent', intensity: 0.8 },
      modifiedBackground: { base: 'secondary', intensity: 0.8 },
      deletedBackground: { base: 'accent', intensity: 0.6 }
    }
  },

  // 9. Editor Groups / Borders
  editorGroups: {
    name: 'Editor Groups / Borders',
    properties: {
      border: 'editorGroup.border',
      tabsBackground: 'editorGroupHeader.tabsBackground',
      noTabsBackground: 'editorGroupHeader.noTabsBackground'
    },
    colorVariants: {
      border: { base: 'secondary', intensity: 0.8 },
      tabsBackground: { base: 'surface', intensity: 0.7 },
      noTabsBackground: { base: 'surface', intensity: 0.5 }
    }
  },

  // 10. Breadcrumbs
  breadcrumbs: {
    name: 'Breadcrumbs',
    properties: {
      background: 'breadcrumb.background',
      foreground: 'breadcrumb.foreground',
      focusForeground: 'breadcrumb.focusForeground',
      activeSelectionForeground: 'breadcrumb.activeSelectionForeground'
    },
    colorVariants: {
      background: { base: 'surface', intensity: 0.8 },
      foreground: { base: 'primary', intensity: 1.0 },
      focusForeground: { base: 'primary', intensity: 1.0 },
      activeSelectionForeground: { base: 'accent', intensity: 1.0 }
    }
  },

  // 11. Panels (Bottom: Terminal, Output, Problems)
  panels: {
    name: 'Panels',
    properties: {
      background: 'panel.background',
      border: 'panel.border',
      titleActiveForeground: 'panelTitle.activeForeground',
      titleActiveBorder: 'panelTitle.activeBorder',
      titleInactiveForeground: 'panelTitle.inactiveForeground'
    },
    colorVariants: {
      background: { base: 'surface', intensity: 0.9 },
      border: { base: 'secondary', intensity: 0.7 },
      titleActiveForeground: { base: 'primary', intensity: 1.0 },
      titleActiveBorder: { base: 'primary', intensity: 1.0 },
      titleInactiveForeground: { base: 'text', intensity: 0.6 }
    }
  },

  // 12. Terminal
  terminal: {
    name: 'Terminal',
    properties: {
      background: 'terminal.background',
      foreground: 'terminal.foreground',
      ansiBlack: 'terminal.ansiBlack',
      ansiBlue: 'terminal.ansiBlue',
      ansiCyan: 'terminal.ansiCyan',
      ansiGreen: 'terminal.ansiGreen',
      ansiMagenta: 'terminal.ansiMagenta',
      ansiRed: 'terminal.ansiRed',
      ansiWhite: 'terminal.ansiWhite',
      ansiYellow: 'terminal.ansiYellow'
    },
    colorVariants: {
      background: { base: 'background', intensity: 1.0 },
      foreground: { base: 'text', intensity: 1.0 },
      ansiBlack: { base: 'text', intensity: 0.2 },
      ansiBlue: { base: 'primary', intensity: 1.0 },
      ansiCyan: { base: 'accent', intensity: 1.0 },
      ansiGreen: { base: 'accent', intensity: 0.8 },
      ansiMagenta: { base: 'secondary', intensity: 1.0 },
      ansiRed: { base: 'accent', intensity: 0.6 },
      ansiWhite: { base: 'text', intensity: 1.0 },
      ansiYellow: { base: 'accent', intensity: 1.0 }
    }
  },

  // 13. Status Bar
  statusBar: {
    name: 'Status Bar',
    properties: {
      background: 'statusBar.background',
      foreground: 'statusBar.foreground',
      noFolderBackground: 'statusBar.noFolderBackground',
      debuggingBackground: 'statusBar.debuggingBackground',
      itemHoverBackground: 'statusBarItem.hoverBackground'
    },
    colorVariants: {
      background: { base: 'primary', intensity: 1.0 },
      foreground: { base: 'background', intensity: 1.0 },
      noFolderBackground: { base: 'surface', intensity: 0.8 },
      debuggingBackground: { base: 'secondary', intensity: 1.0 },
      itemHoverBackground: { base: 'background', intensity: 0.2 }
    }
  },

  // 14. Scrollbar
  scrollbar: {
    name: 'Scrollbar',
    properties: {
      sliderBackground: 'scrollbarSlider.background',
      sliderHoverBackground: 'scrollbarSlider.hoverBackground',
      sliderActiveBackground: 'scrollbarSlider.activeBackground'
    },
    colorVariants: {
      sliderBackground: { base: 'primary', intensity: 0.6 },
      sliderHoverBackground: { base: 'primary', intensity: 0.8 },
      sliderActiveBackground: { base: 'primary', intensity: 1.0 }
    }
  },

  // 15. Notifications / Toasts
  notifications: {
    name: 'Notifications / Toasts',
    properties: {
      centerBorder: 'notificationCenter.border',
      centerHeaderBackground: 'notificationCenterHeader.background',
      toastBackground: 'notificationToast.background',
      background: 'notifications.background',
      foreground: 'notifications.foreground',
      linkForeground: 'notificationLink.foreground'
    },
    colorVariants: {
      centerBorder: { base: 'surface', intensity: 0.8 },
      centerHeaderBackground: { base: 'surface', intensity: 1.0 },
      toastBackground: { base: 'surface', intensity: 0.9 },
      background: { base: 'surface', intensity: 0.9 },
      foreground: { base: 'text', intensity: 1.0 },
      linkForeground: { base: 'primary', intensity: 1.0 }
    }
  },

  // 16. Quick Pick / Command Palette
  quickPick: {
    name: 'Quick Pick / Command Palette',
    properties: {
      groupForeground: 'pickerGroup.foreground',
      groupBorder: 'pickerGroup.border',
      background: 'quickInput.background',
      foreground: 'quickInput.foreground',
      focusBackground: 'quickInputList.focusBackground',
      focusForeground: 'quickInputList.focusForeground'
    },
    colorVariants: {
      groupForeground: { base: 'primary', intensity: 1.0 },
      groupBorder: { base: 'secondary', intensity: 0.7 },
      background: { base: 'surface', intensity: 0.9 },
      foreground: { base: 'text', intensity: 1.0 },
      focusBackground: { base: 'primary', intensity: 0.3 },
      focusForeground: { base: 'background', intensity: 1.0 }
    }
  },

  // 17. Diff Editor
  diffEditor: {
    name: 'Diff Editor',
    properties: {
      insertedTextBackground: 'diffEditor.insertedTextBackground',
      removedTextBackground: 'diffEditor.removedTextBackground',
      border: 'diffEditor.border'
    },
    colorVariants: {
      insertedTextBackground: { base: 'accent', intensity: 0.3 },
      removedTextBackground: { base: 'secondary', intensity: 0.3 },
      border: { base: 'secondary', intensity: 0.7 }
    }
  },

  // 18. Debug
  debug: {
    name: 'Debug',
    properties: {
      toolbarBackground: 'debugToolBar.background',
      breakpointForeground: 'debugIcon.breakpointForeground',
      breakpointDisabledForeground: 'debugIcon.breakpointDisabledForeground',
      breakpointUnverifiedForeground: 'debugIcon.breakpointUnverifiedForeground'
    },
    colorVariants: {
      toolbarBackground: { base: 'surface', intensity: 0.9 },
      breakpointForeground: { base: 'accent', intensity: 1.0 },
      breakpointDisabledForeground: { base: 'text', intensity: 0.4 },
      breakpointUnverifiedForeground: { base: 'text', intensity: 0.6 }
    }
  },

  // 19. Peek View (Find References, Go to Definition)
  peekView: {
    name: 'Peek View',
    properties: {
      editorBackground: 'peekViewEditor.background',
      editorMatchHighlightBackground: 'peekViewEditor.matchHighlightBackground',
      resultBackground: 'peekViewResult.background',
      resultSelectionBackground: 'peekViewResult.selectionBackground',
      titleBackground: 'peekViewTitle.background'
    },
    colorVariants: {
      editorBackground: { base: 'surface', intensity: 0.9 },
      editorMatchHighlightBackground: { base: 'primary', intensity: 0.2 },
      resultBackground: { base: 'surface', intensity: 0.8 },
      resultSelectionBackground: { base: 'primary', intensity: 0.3 },
      titleBackground: { base: 'primary', intensity: 1.0 }
    }
  },

  // 20. Git Decorations
  gitDecorations: {
    name: 'Git Decorations',
    properties: {
      addedResourceForeground: 'gitDecoration.addedResourceForeground',
      modifiedResourceForeground: 'gitDecoration.modifiedResourceForeground',
      deletedResourceForeground: 'gitDecoration.deletedResourceForeground',
      untrackedResourceForeground: 'gitDecoration.untrackedResourceForeground',
      ignoredResourceForeground: 'gitDecoration.ignoredResourceForeground'
    },
    colorVariants: {
      addedResourceForeground: { base: 'accent', intensity: 1.0 },
      modifiedResourceForeground: { base: 'secondary', intensity: 1.0 },
      deletedResourceForeground: { base: 'accent', intensity: 0.8 },
      untrackedResourceForeground: { base: 'primary', intensity: 1.0 },
      ignoredResourceForeground: { base: 'text', intensity: 0.4 }
    }
  }
};

// Bracket and indent guide color schemes
export const bracketColors = {
  // 4 Dark variants
  dark1: ['#00ff88', '#ff3366', '#ffaa00', '#8844ff', '#00aaff', '#ff44aa'],
  dark2: ['#ff6b35', '#00d4ff', '#ffd700', '#a855f7', '#ec4899', '#06b6d4'],
  dark3: ['#a855f7', '#ec4899', '#06b6d4', '#f59e0b', '#10b981', '#ef4444'],
  dark4: ['#4ade80', '#22c55e', '#84cc16', '#65a30d', '#16a34a', '#15803d'],
  
  // 3 Dark Blue variants
  darkBlue1: ['#00d4ff', '#ff6b35', '#ffd700', '#7c3aed', '#10b981', '#f59e0b'],
  darkBlue2: ['#00b4d8', '#0077b6', '#90e0ef', '#ff6b35', '#ffd700', '#7c3aed'],
  darkBlue3: ['#0066cc', '#004499', '#3399ff', '#ff6b35', '#ffd700', '#7c3aed'],
  
  // 2 Light variants
  light1: ['#0066cc', '#ff3366', '#ffaa00', '#8844ff', '#00aaff', '#ff44aa'],
  light2: ['#2563eb', '#7c3aed', '#f59e0b', '#ef4444', '#10b981', '#06b6d4'],
  
  // 2 Green variants
  green1: ['#4ade80', '#22c55e', '#84cc16', '#65a30d', '#16a34a', '#15803d'],
  green2: ['#10b981', '#059669', '#34d399', '#22c55e', '#84cc16', '#65a30d'],
  
  // 2 Purple variants
  purple1: ['#a855f7', '#ec4899', '#06b6d4', '#f59e0b', '#10b981', '#ef4444'],
  purple2: ['#8b5cf6', '#7c3aed', '#a855f7', '#ec4899', '#06b6d4', '#f59e0b'],
  
  // Single variants
  roseGold: ['#f43f5e', '#f59e0b', '#8b5cf6', '#06b6d4', '#10b981', '#ef4444'],
  chilliPaper: ['#dc2626', '#ef4444', '#f59e0b', '#ff6b35', '#ffd700', '#7c3aed'],
  grey: ['#6b7280', '#9ca3af', '#d1d5db', '#6b7280', '#9ca3af', '#d1d5db'],
  yellow: ['#fbbf24', '#f59e0b', '#fcd34d', '#ff6b35', '#ffd700', '#7c3aed']
};

// Comprehensive token color schemes for syntax highlighting
export const tokenColors = {
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
    value: '#8844ff',
    constant: '#ff3366',
    boolean: '#ffaa00',
    functionCall: '#8844ff',
    class: '#00aaff',
    interface: '#00d4ff',
    namespace: '#ff3366',
    decorator: '#ffaa00'
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
    value: '#8844ff',
    constant: '#ff3366',
    boolean: '#ffaa00',
    functionCall: '#8844ff',
    class: '#00aaff',
    interface: '#0066cc',
    namespace: '#ff3366',
    decorator: '#ffaa00'
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
    value: '#7c3aed',
    constant: '#ff6b35',
    boolean: '#ffd700',
    functionCall: '#7c3aed',
    class: '#10b981',
    interface: '#00d4ff',
    namespace: '#ff6b35',
    decorator: '#ffd700'
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
    value: '#dc2626',
    constant: '#ea580c',
    boolean: '#fbbf24',
    functionCall: '#dc2626',
    class: '#f59e0b',
    interface: '#d97706',
    namespace: '#ea580c',
    decorator: '#fbbf24'
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
    value: '#65a30d',
    constant: '#22c55e',
    boolean: '#84cc16',
    functionCall: '#65a30d',
    class: '#16a34a',
    interface: '#4ade80',
    namespace: '#22c55e',
    decorator: '#84cc16'
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
    value: '#7c3aed',
    constant: '#ff6b35',
    boolean: '#ffd700',
    functionCall: '#7c3aed',
    class: '#10b981',
    interface: '#00d4ff',
    namespace: '#ff6b35',
    decorator: '#ffd700'
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
    value: '#f59e0b',
    constant: '#ec4899',
    boolean: '#06b6d4',
    functionCall: '#f59e0b',
    class: '#10b981',
    interface: '#a855f7',
    namespace: '#ec4899',
    decorator: '#06b6d4'
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
    value: '#06b6d4',
    constant: '#f59e0b',
    boolean: '#8b5cf6',
    functionCall: '#06b6d4',
    class: '#10b981',
    interface: '#f43f5e',
    namespace: '#f59e0b',
    decorator: '#8b5cf6'
  },
  
  // New theme token colors
  darkGray: {
    comment: '#888888',
    keyword: '#00ff88',
    storage: '#ff3366',
    variable: '#ffaa00',
    function: '#8844ff',
    type: '#00aaff',
    string: '#00ff88',
    number: '#ff3366',
    operator: '#ffaa00',
    punctuation: '#aaaaaa',
    tag: '#8844ff',
    attribute: '#ffaa00',
    className: '#00aaff',
    id: '#ff3366',
    property: '#00ff88',
    value: '#8844ff',
    constant: '#ff3366',
    boolean: '#ffaa00',
    functionCall: '#8844ff',
    class: '#00aaff',
    interface: '#00ff88',
    namespace: '#ff3366',
    decorator: '#ffaa00'
  },
  
  forestGreen: {
    comment: '#86efac',
    keyword: '#84cc16',
    storage: '#22c55e',
    variable: '#f59e0b',
    function: '#65a30d',
    type: '#16a34a',
    string: '#84cc16',
    number: '#22c55e',
    operator: '#f59e0b',
    punctuation: '#86efac',
    tag: '#65a30d',
    attribute: '#f59e0b',
    className: '#16a34a',
    id: '#22c55e',
    property: '#84cc16',
    value: '#65a30d',
    constant: '#22c55e',
    boolean: '#f59e0b',
    functionCall: '#65a30d',
    class: '#16a34a',
    interface: '#84cc16',
    namespace: '#22c55e',
    decorator: '#f59e0b'
  },
  
  deepNavy: {
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
    value: '#7c3aed',
    constant: '#ff6b35',
    boolean: '#ffd700',
    functionCall: '#7c3aed',
    class: '#10b981',
    interface: '#00d4ff',
    namespace: '#ff6b35',
    decorator: '#ffd700'
  },
  
  darkForest: {
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
    value: '#65a30d',
    constant: '#22c55e',
    boolean: '#84cc16',
    functionCall: '#65a30d',
    class: '#16a34a',
    interface: '#4ade80',
    namespace: '#22c55e',
    decorator: '#84cc16'
  },
  
  pureBlack: {
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
    value: '#8844ff',
    constant: '#ff3366',
    boolean: '#ffaa00',
    functionCall: '#8844ff',
    class: '#00aaff',
    interface: '#00ff88',
    namespace: '#ff3366',
    decorator: '#ffaa00'
  },
  
  purpleAccent: {
    comment: '#a78bfa',
    keyword: '#B19FF9',
    storage: '#8b5cf6',
    variable: '#f59e0b',
    function: '#06b6d4',
    type: '#10b981',
    string: '#B19FF9',
    number: '#8b5cf6',
    operator: '#f59e0b',
    punctuation: '#a78bfa',
    tag: '#06b6d4',
    attribute: '#f59e0b',
    className: '#10b981',
    id: '#8b5cf6',
    property: '#B19FF9',
    value: '#06b6d4',
    constant: '#8b5cf6',
    boolean: '#f59e0b',
    functionCall: '#06b6d4',
    class: '#10b981',
    interface: '#B19FF9',
    namespace: '#8b5cf6',
    decorator: '#f59e0b'
  },
  
  coral: {
    comment: '#fbb6ce',
    keyword: '#FF5765',
    storage: '#f59e0b',
    variable: '#ffd700',
    function: '#8b5cf6',
    type: '#06b6d4',
    string: '#FF5765',
    number: '#f59e0b',
    operator: '#ffd700',
    punctuation: '#fbb6ce',
    tag: '#8b5cf6',
    attribute: '#ffd700',
    className: '#06b6d4',
    id: '#f59e0b',
    property: '#FF5765',
    value: '#8b5cf6',
    constant: '#f59e0b',
    boolean: '#ffd700',
    functionCall: '#8b5cf6',
    class: '#06b6d4',
    interface: '#FF5765',
    namespace: '#f59e0b',
    decorator: '#ffd700'
  },
  
  golden: {
    comment: '#fbb6ce',
    keyword: '#FFDB15',
    storage: '#f59e0b',
    variable: '#ff6b35',
    function: '#8b5cf6',
    type: '#06b6d4',
    string: '#FFDB15',
    number: '#f59e0b',
    operator: '#ff6b35',
    punctuation: '#fbb6ce',
    tag: '#8b5cf6',
    attribute: '#ff6b35',
    className: '#06b6d4',
    id: '#f59e0b',
    property: '#FFDB15',
    value: '#8b5cf6',
    constant: '#f59e0b',
    boolean: '#ff6b35',
    functionCall: '#8b5cf6',
    class: '#06b6d4',
    interface: '#FFDB15',
    namespace: '#f59e0b',
    decorator: '#ff6b35'
  },
  
  deepBlueEnhanced: {
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
    value: '#7c3aed',
    constant: '#ff6b35',
    boolean: '#ffd700',
    functionCall: '#7c3aed',
    class: '#10b981',
    interface: '#00d4ff',
    namespace: '#ff6b35',
    decorator: '#ffd700'
  },
  
  // New theme token colors
  dark1: {
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
    value: '#8844ff',
    constant: '#ff3366',
    boolean: '#ffaa00',
    functionCall: '#8844ff',
    class: '#00aaff',
    interface: '#00ff88',
    namespace: '#ff3366',
    decorator: '#ffaa00'
  },
  
  dark2: {
    comment: '#888888',
    keyword: '#ff6b35',
    storage: '#00d4ff',
    variable: '#ffd700',
    function: '#a855f7',
    type: '#ec4899',
    string: '#ff6b35',
    number: '#00d4ff',
    operator: '#ffd700',
    punctuation: '#aaaaaa',
    tag: '#a855f7',
    attribute: '#ffd700',
    className: '#ec4899',
    id: '#00d4ff',
    property: '#ff6b35',
    value: '#a855f7',
    constant: '#00d4ff',
    boolean: '#ffd700',
    functionCall: '#a855f7',
    class: '#ec4899',
    interface: '#ff6b35',
    namespace: '#00d4ff',
    decorator: '#ffd700'
  },
  
  dark3: {
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
    value: '#f59e0b',
    constant: '#ec4899',
    boolean: '#06b6d4',
    functionCall: '#f59e0b',
    class: '#10b981',
    interface: '#a855f7',
    namespace: '#ec4899',
    decorator: '#06b6d4'
  },
  
  dark4: {
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
    value: '#65a30d',
    constant: '#22c55e',
    boolean: '#84cc16',
    functionCall: '#65a30d',
    class: '#16a34a',
    interface: '#4ade80',
    namespace: '#22c55e',
    decorator: '#84cc16'
  },
  
  darkBlue1: {
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
    value: '#7c3aed',
    constant: '#ff6b35',
    boolean: '#ffd700',
    functionCall: '#7c3aed',
    class: '#10b981',
    interface: '#00d4ff',
    namespace: '#ff6b35',
    decorator: '#ffd700'
  },
  
  darkBlue2: {
    comment: '#8b949e',
    keyword: '#00b4d8',
    storage: '#0077b6',
    variable: '#90e0ef',
    function: '#ff6b35',
    type: '#ffd700',
    string: '#00b4d8',
    number: '#0077b6',
    operator: '#90e0ef',
    punctuation: '#8b949e',
    tag: '#ff6b35',
    attribute: '#90e0ef',
    className: '#ffd700',
    id: '#0077b6',
    property: '#00b4d8',
    value: '#ff6b35',
    constant: '#0077b6',
    boolean: '#90e0ef',
    functionCall: '#ff6b35',
    class: '#ffd700',
    interface: '#00b4d8',
    namespace: '#0077b6',
    decorator: '#90e0ef'
  },
  
  darkBlue3: {
    comment: '#8b949e',
    keyword: '#0066cc',
    storage: '#004499',
    variable: '#3399ff',
    function: '#ff6b35',
    type: '#ffd700',
    string: '#0066cc',
    number: '#004499',
    operator: '#3399ff',
    punctuation: '#8b949e',
    tag: '#ff6b35',
    attribute: '#3399ff',
    className: '#ffd700',
    id: '#004499',
    property: '#0066cc',
    value: '#ff6b35',
    constant: '#004499',
    boolean: '#3399ff',
    functionCall: '#ff6b35',
    class: '#ffd700',
    interface: '#0066cc',
    namespace: '#004499',
    decorator: '#3399ff'
  },
  
  light1: {
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
    value: '#8844ff',
    constant: '#ff3366',
    boolean: '#ffaa00',
    functionCall: '#8844ff',
    class: '#00aaff',
    interface: '#0066cc',
    namespace: '#ff3366',
    decorator: '#ffaa00'
  },
  
  light2: {
    comment: '#6b7280',
    keyword: '#2563eb',
    storage: '#7c3aed',
    variable: '#f59e0b',
    function: '#ef4444',
    type: '#10b981',
    string: '#2563eb',
    number: '#7c3aed',
    operator: '#f59e0b',
    punctuation: '#374151',
    tag: '#ef4444',
    attribute: '#f59e0b',
    className: '#10b981',
    id: '#7c3aed',
    property: '#2563eb',
    value: '#ef4444',
    constant: '#7c3aed',
    boolean: '#f59e0b',
    functionCall: '#ef4444',
    class: '#10b981',
    interface: '#2563eb',
    namespace: '#7c3aed',
    decorator: '#f59e0b'
  },
  
  green1: {
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
    value: '#65a30d',
    constant: '#22c55e',
    boolean: '#84cc16',
    functionCall: '#65a30d',
    class: '#16a34a',
    interface: '#4ade80',
    namespace: '#22c55e',
    decorator: '#84cc16'
  },
  
  green2: {
    comment: '#86efac',
    keyword: '#10b981',
    storage: '#059669',
    variable: '#34d399',
    function: '#22c55e',
    type: '#84cc16',
    string: '#10b981',
    number: '#059669',
    operator: '#34d399',
    punctuation: '#86efac',
    tag: '#22c55e',
    attribute: '#34d399',
    className: '#84cc16',
    id: '#059669',
    property: '#10b981',
    value: '#22c55e',
    constant: '#059669',
    boolean: '#34d399',
    functionCall: '#22c55e',
    class: '#84cc16',
    interface: '#10b981',
    namespace: '#059669',
    decorator: '#34d399'
  },
  
  purple1: {
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
    value: '#f59e0b',
    constant: '#ec4899',
    boolean: '#06b6d4',
    functionCall: '#f59e0b',
    class: '#10b981',
    interface: '#a855f7',
    namespace: '#ec4899',
    decorator: '#06b6d4'
  },
  
  purple2: {
    comment: '#a78bfa',
    keyword: '#8b5cf6',
    storage: '#7c3aed',
    variable: '#a855f7',
    function: '#ec4899',
    type: '#06b6d4',
    string: '#8b5cf6',
    number: '#7c3aed',
    operator: '#a855f7',
    punctuation: '#a78bfa',
    tag: '#ec4899',
    attribute: '#a855f7',
    className: '#06b6d4',
    id: '#7c3aed',
    property: '#8b5cf6',
    value: '#ec4899',
    constant: '#7c3aed',
    boolean: '#a855f7',
    functionCall: '#ec4899',
    class: '#06b6d4',
    interface: '#8b5cf6',
    namespace: '#7c3aed',
    decorator: '#a855f7'
  },
  
  chilliPaper: {
    comment: '#fbb6ce',
    keyword: '#dc2626',
    storage: '#ef4444',
    variable: '#f59e0b',
    function: '#ff6b35',
    type: '#ffd700',
    string: '#dc2626',
    number: '#ef4444',
    operator: '#f59e0b',
    punctuation: '#fbb6ce',
    tag: '#ff6b35',
    attribute: '#f59e0b',
    className: '#ffd700',
    id: '#ef4444',
    property: '#dc2626',
    value: '#ff6b35',
    constant: '#ef4444',
    boolean: '#f59e0b',
    functionCall: '#ff6b35',
    class: '#ffd700',
    interface: '#dc2626',
    namespace: '#ef4444',
    decorator: '#f59e0b'
  },
  
  grey: {
    comment: '#9ca3af',
    keyword: '#6b7280',
    storage: '#9ca3af',
    variable: '#d1d5db',
    function: '#6b7280',
    type: '#9ca3af',
    string: '#6b7280',
    number: '#9ca3af',
    operator: '#d1d5db',
    punctuation: '#9ca3af',
    tag: '#6b7280',
    attribute: '#d1d5db',
    className: '#9ca3af',
    id: '#9ca3af',
    property: '#6b7280',
    value: '#6b7280',
    constant: '#9ca3af',
    boolean: '#d1d5db',
    functionCall: '#6b7280',
    class: '#9ca3af',
    interface: '#6b7280',
    namespace: '#9ca3af',
    decorator: '#d1d5db'
  },
  
  yellow: {
    comment: '#fbb6ce',
    keyword: '#fbbf24',
    storage: '#f59e0b',
    variable: '#fcd34d',
    function: '#ff6b35',
    type: '#ffd700',
    string: '#fbbf24',
    number: '#f59e0b',
    operator: '#fcd34d',
    punctuation: '#fbb6ce',
    tag: '#ff6b35',
    attribute: '#fcd34d',
    className: '#ffd700',
    id: '#f59e0b',
    property: '#fbbf24',
    value: '#ff6b35',
    constant: '#f59e0b',
    boolean: '#fcd34d',
    functionCall: '#ff6b35',
    class: '#ffd700',
    interface: '#fbbf24',
    namespace: '#f59e0b',
    decorator: '#fcd34d'
  }
};

// Font recommendations for each theme style
export const fontRecommendations = {
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
  roseGold: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  
  // New theme font recommendations
  darkGray: {
    primary: 'Source Code Pro',
    secondary: 'Cascadia Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  forestGreen: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  deepNavy: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  darkForest: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  pureBlack: {
    primary: 'Source Code Pro',
    secondary: 'Cascadia Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  purpleAccent: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  coral: {
    primary: 'Source Code Pro',
    secondary: 'Cascadia Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  golden: {
    primary: 'Source Code Pro',
    secondary: 'Cascadia Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  deepBlueEnhanced: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  
  // New theme font recommendations
  dark1: {
    primary: 'Source Code Pro',
    secondary: 'Cascadia Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  dark2: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  dark3: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  dark4: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  darkBlue1: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  darkBlue2: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  darkBlue3: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  light1: {
    primary: 'SF Mono',
    secondary: 'Monaco',
    fallback: 'Consolas, Monaco, monospace'
  },
  light2: {
    primary: 'SF Mono',
    secondary: 'Monaco',
    fallback: 'Consolas, Monaco, monospace'
  },
  green1: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  green2: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  purple1: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  purple2: {
    primary: 'JetBrains Mono',
    secondary: 'Fira Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  chilliPaper: {
    primary: 'Source Code Pro',
    secondary: 'Cascadia Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  grey: {
    primary: 'Source Code Pro',
    secondary: 'Cascadia Code',
    fallback: 'Consolas, Monaco, monospace'
  },
  yellow: {
    primary: 'Source Code Pro',
    secondary: 'Cascadia Code',
    fallback: 'Consolas, Monaco, monospace'
  }
};
