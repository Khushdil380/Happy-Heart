import { baseColors, tokenMappings } from './base.js';

// Happy Heart Theme 4 - Sunset Glow (New Theme)
export const happyHeart4 = {
  name: 'Happy Heart 4',
  type: 'dark',
  
  // Color palette specific to this theme
  colors: {
    ...baseColors,
    
    // Theme-specific overrides - Sunset Glow theme
    primary: '#ff6b35',
    secondary: '#f7931e',
    accent: '#ffd700',
    
    // Background colors
    editorBackground: '#1a0f0a',
    editorForeground: '#fff5f0',
    sidebarBackground: '#2d1b0f',
    activityBarBackground: '#3d2414',
    statusBarBackground: '#4a2c1a',
    panelBackground: '#2d1b0f',
    
    // UI element colors
    titleBarBackground: '#ff6b35',
    titleBarForeground: '#1a0f0a',
    quickInputBackground: '#3d2414',
    quickInputForeground: '#fff5f0',
    menuBackground: '#3d2414',
    menuSelectionBackground: '#f7931e',
    
    // Editor colors
    lineHighlightBackground: '#ff6b3520',
    lineHighlightBorder: '#ff6b3540',
    selectionBackground: '#ff6b3540',
    selectionForeground: '#ffffff',
    selectionHighlightBackground: '#f7931e40',
    
    // Tab colors
    tabActiveBackground: '#4a2c1a',
    tabInactiveBackground: '#2d1b0f',
    tabActiveForeground: '#ff6b35',
    tabInactiveForeground: '#d4a574',
    
    // Scrollbar colors
    scrollbarSliderBackground: '#ff6b3560',
    scrollbarSliderHoverBackground: '#ff6b3580',
    scrollbarSliderActiveBackground: '#ff6b35',
    
    // Minimap colors
    minimapBackground: '#1a0f0a60',
    minimapErrorHighlight: '#ff6b35',
    minimapForegroundOpacity: '#ff6b35',
    minimapSliderBackground: '#ff6b35',
    
    // Gutter colors
    editorGutterBackground: '#1a0f0a',
    editorLineNumberForeground: '#d4a574',
    editorLineNumberActiveForeground: '#ff6b35',
    
    // Bracket colors
    bracketMatchBackground: '#ff6b3520',
    bracketMatchBorder: '#ff6b35',
    
    // Bracket highlight colors
    bracketHighlight1: '#ff6b35',
    bracketHighlight2: '#f7931e',
    bracketHighlight3: '#ffd700',
    bracketHighlight4: '#ff8c42',
    bracketHighlight5: '#ffa726',
    bracketHighlight6: '#ffcc02',
    bracketHighlightUnexpected: '#e53e3e',
    
    // Indent guide colors
    indentGuideActive1: '#ff6b35',
    indentGuideActive2: '#f7931e',
    indentGuideActive3: '#ffd700',
    indentGuideActive4: '#ff8c42',
    indentGuideActive5: '#ffa726',
    indentGuideActive6: '#ffcc02',
    indentGuideBackground1: '#ff6b3540',
    indentGuideBackground2: '#f7931e40',
    indentGuideBackground3: '#ffd70040',
    indentGuideBackground4: '#ff8c4240',
    indentGuideBackground5: '#ffa72640',
    indentGuideBackground6: '#ffcc0240',
    
    // Activity bar colors
    activityBarForeground: '#ff6b35',
    activityBarActiveBorder: '#ff6b35',
    activityBarInactiveForeground: '#d4a574',
    activityBarActiveFocusBorder: '#f7931e',
    
    // Section header colors
    sideBarSectionHeaderBackground: '#4a2c1a',
    sideBarSectionHeaderForeground: '#ff6b35',
    
    // Panel colors
    panelTitleActiveBorder: '#ff6b35',
    panelTitleInactiveForeground: '#d4a574',
    panelTitleActiveForeground: '#ff6b35',
    panelInputBorder: '#ff6b3540',
    
    // Terminal colors
    terminalForeground: '#fff5f0',
    
    // Editor group colors
    editorGroupHeaderTabsBackground: '#3d2414',
    
    // Input colors
    inputBackground: '#4a2c1a',
    
    // Widget colors
    editorWidgetBackground: '#3d2414',
    editorWidgetBorder: '#ff6b35',
    
    // Whitespace colors
    editorWhitespaceForeground: '#d4a57440',
    
    // List colors
    listFocusBackground: '#ff6b3540',
    listHoverBackground: '#4a2c1a',
    listActiveSelectionBackground: '#ff6b3520',
    listInactiveSelectionBackground: '#4a2c1a',
    listInactiveSelectionForeground: '#d4a574',
    
    // Comment range colors
    editorGutterCommentRangeForeground: '#d4a574',
    
    // Fold colors
    foldBackground: '#4a2c1a60',
    
    // Settings colors
    settingsCheckboxBackground: '#ff6b35',
    settingsCheckboxForeground: '#1a0f0a',
    settingsDropdownBackground: '#4a2c1a',
    settingsDropdownForeground: '#fff5f0',
    settingsFocusedRowBorder: '#ff6b35',
    settingsHeaderForeground: '#ff6b35',
    settingsRowHoverBackground: '#4a2c1a',
    settingsModifiedItemIndicator: '#f7931e',
    
    // Peek view colors
    peekViewEditorBackground: '#3d2414',
    peekViewResultBackground: '#2d1b0f',
    peekViewResultMatchHighlightBackground: '#f7931e40',
    peekViewEditorMatchHighlightBackground: '#ff6b3520',
    
    // Breadcrumb colors
    breadcrumbBackground: '#4a2c1a',
    breadcrumbForeground: '#ff6b35'
  },
  
  // Token colors specific to this theme
  tokenColors: {
    comment: {
      ...tokenMappings.comment,
      foreground: '#d4a574'
    },
    keyword: {
      ...tokenMappings.keyword,
      foreground: '#ff6b35',
      fontStyle: 'bold'
    },
    storage: {
      ...tokenMappings.storage,
      foreground: '#f7931e',
      fontStyle: 'bold'
    },
    variable: {
      ...tokenMappings.variable,
      foreground: '#ffd700'
    },
    function: {
      ...tokenMappings.function,
      foreground: '#ff8c42'
    },
    type: {
      ...tokenMappings.type,
      foreground: '#ffa726'
    }
  }
};
