import { baseColors, tokenMappings } from './base.js';

// Happy Heart Theme 5 - Forest Dreams (New Theme)
export const happyHeart5 = {
  name: 'Happy Heart 5',
  type: 'dark',
  
  // Color palette specific to this theme
  colors: {
    ...baseColors,
    
    // Theme-specific overrides - Forest Dreams theme
    primary: '#4ade80',
    secondary: '#22c55e',
    accent: '#84cc16',
    
    // Background colors
    editorBackground: '#0a1a0a',
    editorForeground: '#f0fff4',
    sidebarBackground: '#0f1f0f',
    activityBarBackground: '#1a2e1a',
    statusBarBackground: '#1f3f1f',
    panelBackground: '#0f1f0f',
    
    // UI element colors
    titleBarBackground: '#4ade80',
    titleBarForeground: '#0a1a0a',
    quickInputBackground: '#1a2e1a',
    quickInputForeground: '#f0fff4',
    menuBackground: '#1a2e1a',
    menuSelectionBackground: '#22c55e',
    
    // Editor colors
    lineHighlightBackground: '#4ade8020',
    lineHighlightBorder: '#4ade8040',
    selectionBackground: '#4ade8040',
    selectionForeground: '#ffffff',
    selectionHighlightBackground: '#22c55e40',
    
    // Tab colors
    tabActiveBackground: '#1f3f1f',
    tabInactiveBackground: '#0f1f0f',
    tabActiveForeground: '#4ade80',
    tabInactiveForeground: '#86efac',
    
    // Scrollbar colors
    scrollbarSliderBackground: '#4ade8060',
    scrollbarSliderHoverBackground: '#4ade8080',
    scrollbarSliderActiveBackground: '#4ade80',
    
    // Minimap colors
    minimapBackground: '#0a1a0a60',
    minimapErrorHighlight: '#ef4444',
    minimapForegroundOpacity: '#4ade80',
    minimapSliderBackground: '#4ade80',
    
    // Gutter colors
    editorGutterBackground: '#0a1a0a',
    editorLineNumberForeground: '#86efac',
    editorLineNumberActiveForeground: '#4ade80',
    
    // Bracket colors
    bracketMatchBackground: '#4ade8020',
    bracketMatchBorder: '#4ade80',
    
    // Bracket highlight colors
    bracketHighlight1: '#4ade80',
    bracketHighlight2: '#22c55e',
    bracketHighlight3: '#84cc16',
    bracketHighlight4: '#65a30d',
    bracketHighlight5: '#16a34a',
    bracketHighlight6: '#15803d',
    bracketHighlightUnexpected: '#ef4444',
    
    // Indent guide colors
    indentGuideActive1: '#4ade80',
    indentGuideActive2: '#22c55e',
    indentGuideActive3: '#84cc16',
    indentGuideActive4: '#65a30d',
    indentGuideActive5: '#16a34a',
    indentGuideActive6: '#15803d',
    indentGuideBackground1: '#4ade8040',
    indentGuideBackground2: '#22c55e40',
    indentGuideBackground3: '#84cc1640',
    indentGuideBackground4: '#65a30d40',
    indentGuideBackground5: '#16a34a40',
    indentGuideBackground6: '#15803d40',
    
    // Activity bar colors
    activityBarForeground: '#4ade80',
    activityBarActiveBorder: '#4ade80',
    activityBarInactiveForeground: '#86efac',
    activityBarActiveFocusBorder: '#22c55e',
    
    // Section header colors
    sideBarSectionHeaderBackground: '#1f3f1f',
    sideBarSectionHeaderForeground: '#4ade80',
    
    // Panel colors
    panelTitleActiveBorder: '#4ade80',
    panelTitleInactiveForeground: '#86efac',
    panelTitleActiveForeground: '#4ade80',
    panelInputBorder: '#4ade8040',
    
    // Terminal colors
    terminalForeground: '#f0fff4',
    
    // Editor group colors
    editorGroupHeaderTabsBackground: '#1a2e1a',
    
    // Input colors
    inputBackground: '#1f3f1f',
    
    // Widget colors
    editorWidgetBackground: '#1a2e1a',
    editorWidgetBorder: '#4ade80',
    
    // Whitespace colors
    editorWhitespaceForeground: '#86efac40',
    
    // List colors
    listFocusBackground: '#4ade8040',
    listHoverBackground: '#1f3f1f',
    listActiveSelectionBackground: '#4ade8020',
    listInactiveSelectionBackground: '#1f3f1f',
    listInactiveSelectionForeground: '#86efac',
    
    // Comment range colors
    editorGutterCommentRangeForeground: '#86efac',
    
    // Fold colors
    foldBackground: '#1f3f1f60',
    
    // Settings colors
    settingsCheckboxBackground: '#4ade80',
    settingsCheckboxForeground: '#0a1a0a',
    settingsDropdownBackground: '#1f3f1f',
    settingsDropdownForeground: '#f0fff4',
    settingsFocusedRowBorder: '#4ade80',
    settingsHeaderForeground: '#4ade80',
    settingsRowHoverBackground: '#1f3f1f',
    settingsModifiedItemIndicator: '#22c55e',
    
    // Peek view colors
    peekViewEditorBackground: '#1a2e1a',
    peekViewResultBackground: '#0f1f0f',
    peekViewResultMatchHighlightBackground: '#22c55e40',
    peekViewEditorMatchHighlightBackground: '#4ade8020',
    
    // Breadcrumb colors
    breadcrumbBackground: '#1f3f1f',
    breadcrumbForeground: '#4ade80'
  },
  
  // Token colors specific to this theme
  tokenColors: {
    comment: {
      ...tokenMappings.comment,
      foreground: '#86efac'
    },
    keyword: {
      ...tokenMappings.keyword,
      foreground: '#4ade80',
      fontStyle: 'bold'
    },
    storage: {
      ...tokenMappings.storage,
      foreground: '#22c55e',
      fontStyle: 'bold'
    },
    variable: {
      ...tokenMappings.variable,
      foreground: '#84cc16'
    },
    function: {
      ...tokenMappings.function,
      foreground: '#65a30d'
    },
    type: {
      ...tokenMappings.type,
      foreground: '#16a34a'
    }
  }
};
