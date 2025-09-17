import { baseColors, tokenMappings } from './base.js';

// Happy Heart Theme 3 - Ocean Breeze (New Theme)
export const happyHeart3 = {
  name: 'Happy Heart 3',
  type: 'dark',
  
  // Color palette specific to this theme
  colors: {
    ...baseColors,
    
    // Theme-specific overrides - Ocean Breeze theme
    primary: '#00d4ff',
    secondary: '#ff6b35',
    accent: '#ffd700',
    
    // Background colors
    editorBackground: '#0a0e1a',
    editorForeground: '#e6f1ff',
    sidebarBackground: '#0f1419',
    activityBarBackground: '#1a1f2e',
    statusBarBackground: '#1e2329',
    panelBackground: '#0f1419',
    
    // UI element colors
    titleBarBackground: '#00d4ff',
    titleBarForeground: '#0a0e1a',
    quickInputBackground: '#1a1f2e',
    quickInputForeground: '#e6f1ff',
    menuBackground: '#1a1f2e',
    menuSelectionBackground: '#ff6b35',
    
    // Editor colors
    lineHighlightBackground: '#1e232940',
    lineHighlightBorder: '#00d4ff40',
    selectionBackground: '#00d4ff40',
    selectionForeground: '#ffffff',
    selectionHighlightBackground: '#ff6b3540',
    
    // Tab colors
    tabActiveBackground: '#1e2329',
    tabInactiveBackground: '#0f1419',
    tabActiveForeground: '#00d4ff',
    tabInactiveForeground: '#8b949e',
    
    // Scrollbar colors
    scrollbarSliderBackground: '#00d4ff60',
    scrollbarSliderHoverBackground: '#00d4ff80',
    scrollbarSliderActiveBackground: '#00d4ff',
    
    // Minimap colors
    minimapBackground: '#0a0e1a60',
    minimapErrorHighlight: '#ff6b35',
    minimapForegroundOpacity: '#00d4ff',
    minimapSliderBackground: '#00d4ff',
    
    // Gutter colors
    editorGutterBackground: '#0a0e1a',
    editorLineNumberForeground: '#8b949e',
    editorLineNumberActiveForeground: '#00d4ff',
    
    // Bracket colors
    bracketMatchBackground: '#00d4ff20',
    bracketMatchBorder: '#00d4ff',
    
    // Bracket highlight colors
    bracketHighlight1: '#00d4ff',
    bracketHighlight2: '#ff6b35',
    bracketHighlight3: '#ffd700',
    bracketHighlight4: '#7c3aed',
    bracketHighlight5: '#10b981',
    bracketHighlight6: '#f59e0b',
    bracketHighlightUnexpected: '#ef4444',
    
    // Indent guide colors
    indentGuideActive1: '#00d4ff',
    indentGuideActive2: '#ff6b35',
    indentGuideActive3: '#ffd700',
    indentGuideActive4: '#7c3aed',
    indentGuideActive5: '#10b981',
    indentGuideActive6: '#f59e0b',
    indentGuideBackground1: '#00d4ff40',
    indentGuideBackground2: '#ff6b3540',
    indentGuideBackground3: '#ffd70040',
    indentGuideBackground4: '#7c3aed40',
    indentGuideBackground5: '#10b98140',
    indentGuideBackground6: '#f59e0b40',
    
    // Activity bar colors
    activityBarForeground: '#00d4ff',
    activityBarActiveBorder: '#00d4ff',
    activityBarInactiveForeground: '#8b949e',
    activityBarActiveFocusBorder: '#ff6b35',
    
    // Section header colors
    sideBarSectionHeaderBackground: '#1e2329',
    sideBarSectionHeaderForeground: '#00d4ff',
    
    // Panel colors
    panelTitleActiveBorder: '#00d4ff',
    panelTitleInactiveForeground: '#8b949e',
    panelTitleActiveForeground: '#00d4ff',
    panelInputBorder: '#00d4ff40',
    
    // Terminal colors
    terminalForeground: '#e6f1ff',
    
    // Editor group colors
    editorGroupHeaderTabsBackground: '#1a1f2e',
    
    // Input colors
    inputBackground: '#1e2329',
    
    // Widget colors
    editorWidgetBackground: '#1a1f2e',
    editorWidgetBorder: '#00d4ff',
    
    // Whitespace colors
    editorWhitespaceForeground: '#8b949e40',
    
    // List colors
    listFocusBackground: '#00d4ff40',
    listHoverBackground: '#1e2329',
    listActiveSelectionBackground: '#00d4ff20',
    listInactiveSelectionBackground: '#1e2329',
    listInactiveSelectionForeground: '#8b949e',
    
    // Comment range colors
    editorGutterCommentRangeForeground: '#8b949e',
    
    // Fold colors
    foldBackground: '#1e232960',
    
    // Settings colors
    settingsCheckboxBackground: '#00d4ff',
    settingsCheckboxForeground: '#0a0e1a',
    settingsDropdownBackground: '#1e2329',
    settingsDropdownForeground: '#e6f1ff',
    settingsFocusedRowBorder: '#00d4ff',
    settingsHeaderForeground: '#00d4ff',
    settingsRowHoverBackground: '#1e2329',
    settingsModifiedItemIndicator: '#ff6b35',
    
    // Peek view colors
    peekViewEditorBackground: '#1a1f2e',
    peekViewResultBackground: '#0f1419',
    peekViewResultMatchHighlightBackground: '#ff6b3540',
    peekViewEditorMatchHighlightBackground: '#00d4ff20',
    
    // Breadcrumb colors
    breadcrumbBackground: '#1e2329',
    breadcrumbForeground: '#00d4ff'
  },
  
  // Token colors specific to this theme
  tokenColors: {
    comment: {
      ...tokenMappings.comment,
      foreground: '#8b949e'
    },
    keyword: {
      ...tokenMappings.keyword,
      foreground: '#00d4ff',
      fontStyle: 'bold'
    },
    storage: {
      ...tokenMappings.storage,
      foreground: '#ff6b35',
      fontStyle: 'bold'
    },
    variable: {
      ...tokenMappings.variable,
      foreground: '#ffd700'
    },
    function: {
      ...tokenMappings.function,
      foreground: '#7c3aed'
    },
    type: {
      ...tokenMappings.type,
      foreground: '#10b981'
    }
  }
};
