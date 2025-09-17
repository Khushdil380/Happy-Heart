import { baseColors, tokenMappings } from './base.js';

// Happy Heart Theme 2 - Enhanced Dark with Better Contrast
export const happyHeart2 = {
  name: 'Happy Heart 2',
  type: 'dark',
  
  // Color palette specific to this theme
  colors: {
    ...baseColors,
    
    // Theme-specific overrides
    primary: '#88ff00',
    secondary: '#e67308',
    accent: '#FFE212',
    
    // Background colors
    editorBackground: '#030303',
    editorForeground: '#ffffff',
    sidebarBackground: '#020508',
    activityBarBackground: '#160F30',
    statusBarBackground: '#1e002c',
    panelBackground: '#030108',
    
    // UI element colors
    titleBarBackground: '#88ff00',
    titleBarForeground: '#020008',
    quickInputBackground: '#010005',
    quickInputForeground: '#FFE212',
    menuBackground: '#03030c',
    menuSelectionBackground: '#ff0000',
    
    // Editor colors
    lineHighlightBackground: '#bb04f350',
    lineHighlightBorder: '#bb04f350',
    selectionBackground: '#bb04f350',
    selectionForeground: '#ffffff',
    selectionHighlightBackground: '#3d2608',
    
    // Tab colors
    tabActiveBackground: '#141601',
    tabInactiveBackground: '#26262b',
    tabActiveForeground: '#d0ff00',
    tabInactiveForeground: '#c5b32b',
    
    // Scrollbar colors
    scrollbarSliderBackground: '#74fd04f6',
    scrollbarSliderHoverBackground: '#fbff00',
    scrollbarSliderActiveBackground: '#d2f50e',
    
    // Minimap colors
    minimapBackground: '#040D12',
    minimapErrorHighlight: '#ff0000',
    minimapForegroundOpacity: '#ff0000',
    minimapSliderBackground: '#0ae41c',
    
    // Gutter colors
    editorGutterBackground: '#00030a',
    editorLineNumberForeground: '#5eff00',
    editorLineNumberActiveForeground: '#ffffff',
    
    // Bracket colors
    bracketMatchBackground: '#e9e9e92a',
    bracketMatchBorder: '#a9b0bd38',
    
    // Bracket highlight colors
    bracketHighlight1: '#ffea00fb',
    bracketHighlight2: '#87fd00',
    bracketHighlight3: '#3D3BF3',
    bracketHighlight4: '#ff04ff',
    bracketHighlight5: '#06d5fa',
    bracketHighlight6: '#ddf124',
    bracketHighlightUnexpected: '#ff0000',
    
    // Indent guide colors
    indentGuideActive1: '#ffea00fb',
    indentGuideActive2: '#87fd00',
    indentGuideActive3: '#3D3BF3',
    indentGuideActive4: '#ff04ff',
    indentGuideActive5: '#06d5fa',
    indentGuideActive6: '#ddf124',
    indentGuideBackground1: '#ff0000',
    indentGuideBackground2: '#06d5fa',
    indentGuideBackground3: '#ff04ff',
    indentGuideBackground4: '#3D3BF3',
    indentGuideBackground5: '#87fd00',
    indentGuideBackground6: '#ffea00fb',
    
    // Activity bar colors
    activityBarForeground: '#88ff00',
    activityBarActiveBorder: '#88ff00',
    activityBarInactiveForeground: '#c5b32b',
    activityBarActiveFocusBorder: '#ff0000',
    
    // Section header colors
    sideBarSectionHeaderBackground: '#6c9e1b',
    sideBarSectionHeaderForeground: '#ffffff',
    
    // Panel colors
    panelTitleActiveBorder: '#8bf304',
    panelTitleInactiveForeground: '#c5b32b',
    panelTitleActiveForeground: '#d0ff00',
    panelInputBorder: '#8cb8639d',
    
    // Terminal colors
    terminalForeground: '#fdbc0b',
    
    // Editor group colors
    editorGroupHeaderTabsBackground: '#1a0327',
    
    // Input colors
    inputBackground: '#160040',
    
    // Widget colors
    editorWidgetBackground: '#07000f',
    editorWidgetBorder: '#e67308',
    
    // Whitespace colors
    editorWhitespaceForeground: '#00556ec5',
    
    // List colors
    listFocusBackground: '#ff0000',
    listHoverBackground: '#02473c',
    listActiveSelectionBackground: '#573358',
    listInactiveSelectionBackground: '#00ff0d',
    listInactiveSelectionForeground: '#000000',
    
    // Comment range colors
    editorGutterCommentRangeForeground: '#dbdfac',
    
    // Fold colors
    foldBackground: '#46496380',
    
    // Settings colors
    settingsCheckboxBackground: '#5eff00',
    settingsCheckboxForeground: '#000000',
    settingsDropdownBackground: '#5eff00',
    settingsDropdownForeground: '#000000',
    settingsFocusedRowBorder: '#e67308',
    settingsHeaderForeground: '#ff0000',
    settingsRowHoverBackground: '#2c0131',
    settingsModifiedItemIndicator: '#ff0000',
    
    // Peek view colors
    peekViewEditorBackground: '#120f2e',
    peekViewResultBackground: '#160606',
    peekViewResultMatchHighlightBackground: '#fa0606ef',
    peekViewEditorMatchHighlightBackground: '#000000',
    
    // Breadcrumb colors
    breadcrumbBackground: '#6c9e1b',
    breadcrumbForeground: '#ffffff'
  },
  
  // Token colors specific to this theme
  tokenColors: {
    comment: {
      ...tokenMappings.comment
    },
    keyword: {
      ...tokenMappings.keyword,
      foreground: '#ffea00fb',
      fontStyle: 'bold'
    },
    storage: {
      ...tokenMappings.storage,
      foreground: '#FF2929',
      fontStyle: 'bold'
    },
    variable: {
      ...tokenMappings.variable,
      foreground: '#87fd00'
    },
    function: {
      ...tokenMappings.function,
      foreground: '#ff04ff'
    },
    type: {
      ...tokenMappings.type,
      foreground: '#ff00bf'
    }
  }
};
