import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import theme configurations
import { happyHeart1 } from './variables/happy-heart-1.js';
import { happyHeart2 } from './variables/happy-heart-2.js';
import { happyHeart3 } from './variables/happy-heart-3.js';
import { happyHeart4 } from './variables/happy-heart-4.js';
import { happyHeart5 } from './variables/happy-heart-5.js';

// Theme generator class
class ThemeGenerator {
  constructor() {
    this.themes = {
      'happy-heart-1': happyHeart1,
      'happy-heart-2': happyHeart2,
      'happy-heart-3': happyHeart3,
      'happy-heart-4': happyHeart4,
      'happy-heart-5': happyHeart5
    };
  }

  // Convert theme configuration to VS Code theme format
  generateTheme(themeConfig) {
    const theme = {
      name: themeConfig.name,
      type: themeConfig.type,
      colors: this.generateColors(themeConfig.colors),
      tokenColors: this.generateTokenColors(themeConfig.tokenColors)
    };

    return theme;
  }

  // Generate colors object for VS Code
  generateColors(colors) {
    const vsCodeColors = {};

    // Map our color variables to VS Code color keys
    const colorMapping = {
      // Editor colors
      'editor.background': colors.editorBackground,
      'editor.foreground': colors.editorForeground,
      'editorCursor.foreground': colors.primary,
      'editor.lineHighlightBackground': colors.lineHighlightBackground,
      'editor.lineHighlightBorder': colors.lineHighlightBorder,
      'editor.selectionBackground': colors.selectionBackground,
      'editor.selectionForeground': colors.selectionForeground,
      'editor.selectionHighlightBackground': colors.selectionHighlightBackground,
      'editorBracketMatch.background': colors.bracketMatchBackground,
      'editorBracketMatch.border': colors.bracketMatchBorder,
      'editorBracketHighlight.foreground1': colors.bracketHighlight1,
      'editorBracketHighlight.foreground2': colors.bracketHighlight2,
      'editorBracketHighlight.foreground3': colors.bracketHighlight3,
      'editorBracketHighlight.foreground4': colors.bracketHighlight4,
      'editorBracketHighlight.foreground5': colors.bracketHighlight5,
      'editorBracketHighlight.foreground6': colors.bracketHighlight6,
      'editorBracketHighlight.unexpectedBracket.foreground': colors.bracketHighlightUnexpected,
      'editorIndentGuide.activeBackground1': colors.indentGuideActive1,
      'editorIndentGuide.activeBackground2': colors.indentGuideActive2,
      'editorIndentGuide.activeBackground3': colors.indentGuideActive3,
      'editorIndentGuide.activeBackground4': colors.indentGuideActive4,
      'editorIndentGuide.activeBackground5': colors.indentGuideActive5,
      'editorIndentGuide.activeBackground6': colors.indentGuideActive6,
      'editorIndentGuide.background1': colors.indentGuideBackground1,
      'editorIndentGuide.background2': colors.indentGuideBackground2,
      'editorIndentGuide.background3': colors.indentGuideBackground3,
      'editorIndentGuide.background4': colors.indentGuideBackground4,
      'editorIndentGuide.background5': colors.indentGuideBackground5,
      'editorIndentGuide.background6': colors.indentGuideBackground6,
      'editorGutter.background': colors.editorGutterBackground,
      'editorGutter.commentRangeForeground': colors.editorGutterCommentRangeForeground,
      'editorLineNumber.foreground': colors.editorLineNumberForeground,
      'editorLineNumber.activeForeground': colors.editorLineNumberActiveForeground,
      'editor.foldBackground': colors.foldBackground,
      'editorWhitespace.foreground': colors.editorWhitespaceForeground,

      // Title bar colors
      'titleBar.activeBackground': colors.titleBarBackground,
      'titleBar.activeForeground': colors.titleBarForeground,
      'titleBar.border': colors.border,

      // Quick input colors
      'quickInput.foreground': colors.quickInputForeground,
      'quickInput.background': colors.quickInputBackground,
      'quickInputList.focusBackground': colors.menuSelectionBackground,
      'quickInputList.focusForeground': colors.quickInputForeground,

      // Input colors
      'input.background': colors.inputBackground,

      // Widget colors
      'editorWidget.background': colors.editorWidgetBackground,
      'editorWidget.border': colors.editorWidgetBorder,

      // Menu colors
      'menu.background': colors.menuBackground,
      'menu.selectionBackground': colors.menuSelectionBackground,
      'menu.foreground': colors.menuForeground,
      'menu.separatorBackground': colors.inputBackground,
      'menu.border': colors.border,

      // Scrollbar colors
      'scrollbar.shadow': colors.shadow,
      'scrollbarSlider.background': colors.scrollbarSliderBackground,
      'scrollbarSlider.hoverBackground': colors.scrollbarSliderHoverBackground,
      'scrollbarSlider.activeBackground': colors.scrollbarSliderActiveBackground,

      // Activity bar colors
      'activityBar.background': colors.activityBarBackground,
      'activityBar.foreground': colors.activityBarForeground,
      'activityBar.activeBorder': colors.activityBarActiveBorder,
      'activityBar.inactiveForeground': colors.activityBarInactiveForeground,
      'activityBar.activeFocusBorder': colors.activityBarActiveFocusBorder,
      'activityBar.border': colors.border,

      // Sidebar colors
      'sideBar.background': colors.sidebarBackground,
      'sideBar.foreground': colors.sidebarForeground,
      'sideBar.border': colors.border,
      'sideBarSectionHeader.background': colors.sideBarSectionHeaderBackground,
      'sideBarSectionHeader.foreground': colors.sideBarSectionHeaderForeground,

      // Status bar colors
      'statusBar.background': colors.statusBarBackground,
      'statusBar.foreground': colors.textPrimary,
      'statusBar.border': colors.border,

      // Panel colors
      'panel.background': colors.panelBackground,
      'panel.border': colors.border,
      'panelTitle.activeBorder': colors.panelTitleActiveBorder,
      'panelTitle.inactiveForeground': colors.panelTitleInactiveForeground,
      'panelTitle.activeForeground': colors.panelTitleActiveForeground,
      'panelInput.border': colors.panelInputBorder,
      'panelSectionHeader.background': colors.panelSectionHeaderBackground,

      // Terminal colors
      'terminal.foreground': colors.terminalForeground,
      'terminal.ansiBlack': colors.terminalBlack,
      'terminal.ansiRed': colors.terminalRed,
      'terminal.ansiGreen': colors.terminalGreen,
      'terminal.ansiBlue': colors.terminalBlue,
      'terminal.ansiWhite': colors.terminalWhite,

      // Editor group colors
      'editorGroup.border': colors.border,
      'editorGroupHeader.tabsBackground': colors.editorGroupHeaderTabsBackground,

      // Tab colors
      'tab.activeBackground': colors.tabActiveBackground,
      'tab.inactiveBackground': colors.tabInactiveBackground,
      'tab.activeForeground': colors.tabActiveForeground,
      'tab.inactiveForeground': colors.tabInactiveForeground,
      'tab.border': colors.border,

      // Breadcrumb colors
      'breadcrumb.background': colors.breadcrumbBackground,
      'breadcrumb.foreground': colors.breadcrumbForeground,

      // Minimap colors
      'minimap.background': colors.minimapBackground,
      'minimap.errorHighlight': colors.minimapErrorHighlight,
      'minimap.foregroundOpacity': colors.minimapForegroundOpacity,
      'minimapSlider.background': colors.minimapSliderBackground,

      // List colors
      'list.focusBackground': colors.listFocusBackground,
      'list.hoverBackground': colors.listHoverBackground,
      'list.activeSelectionBackground': colors.listActiveSelectionBackground,
      'list.inactiveSelectionBackground': colors.listInactiveSelectionBackground,
      'list.inactiveSelectionForeground': colors.listInactiveSelectionForeground,

      // Settings colors
      'settings.checkboxBackground': colors.settingsCheckboxBackground,
      'settings.checkboxForeground': colors.settingsCheckboxForeground,
      'settings.dropdownBackground': colors.settingsDropdownBackground,
      'settings.dropdownForeground': colors.settingsDropdownForeground,
      'settings.focusedRowBorder': colors.settingsFocusedRowBorder,
      'settings.headerForeground': colors.settingsHeaderForeground,
      'settings.rowHoverBackground': colors.settingsRowHoverBackground,
      'settings.modifiedItemIndicator': colors.settingsModifiedItemIndicator,

      // Peek view colors
      'peekViewEditor.background': colors.peekViewEditorBackground,
      'peekViewResult.background': colors.peekViewResultBackground,
      'peekViewResult.matchHighlightBackground': colors.peekViewResultMatchHighlightBackground,
      'peekViewEditor.matchHighlightBackground': colors.peekViewEditorMatchHighlightBackground
    };

    // Add colors to the result, filtering out undefined values
    Object.entries(colorMapping).forEach(([key, value]) => {
      if (value !== undefined) {
        vsCodeColors[key] = value;
      }
    });

    return vsCodeColors;
  }

  // Generate token colors for VS Code
  generateTokenColors(tokenColors) {
    const vsCodeTokenColors = [];

    // Comment tokens
    if (tokenColors.comment) {
      vsCodeTokenColors.push({
        scope: ['comment'],
        settings: tokenColors.comment
      });
    }

    // Keyword tokens
    if (tokenColors.keyword) {
      vsCodeTokenColors.push({
        scope: tokenColors.keyword.scopes,
        settings: {
          foreground: tokenColors.keyword.foreground,
          fontStyle: tokenColors.keyword.fontStyle || 'normal'
        }
      });
    }

    // Storage tokens
    if (tokenColors.storage) {
      vsCodeTokenColors.push({
        scope: tokenColors.storage.scopes,
        settings: {
          foreground: tokenColors.storage.foreground,
          fontStyle: tokenColors.storage.fontStyle || 'normal'
        }
      });
    }

    // Variable tokens
    if (tokenColors.variable) {
      vsCodeTokenColors.push({
        scope: tokenColors.variable.scopes,
        settings: {
          foreground: tokenColors.variable.foreground,
          fontStyle: tokenColors.variable.fontStyle || 'normal'
        }
      });
    }

    // Function tokens
    if (tokenColors.function) {
      vsCodeTokenColors.push({
        scope: tokenColors.function.scopes,
        settings: {
          foreground: tokenColors.function.foreground,
          fontStyle: tokenColors.function.fontStyle || 'normal'
        }
      });
    }

    // Type tokens
    if (tokenColors.type) {
      vsCodeTokenColors.push({
        scope: tokenColors.type.scopes,
        settings: {
          foreground: tokenColors.type.foreground,
          fontStyle: tokenColors.type.fontStyle || 'normal'
        }
      });
    }

    return vsCodeTokenColors;
  }

  // Generate all themes
  generateAllThemes() {
    const outputDir = path.join(__dirname, '../../themes');
    
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    Object.entries(this.themes).forEach(([themeKey, themeConfig]) => {
      const theme = this.generateTheme(themeConfig);
      const outputPath = path.join(outputDir, `${themeKey}.json`);
      
      fs.writeFileSync(outputPath, JSON.stringify(theme, null, 2));
      console.log(`Generated theme: ${outputPath}`);
    });
  }

  // Generate a specific theme
  generateSingleTheme(themeKey) {
    if (!this.themes[themeKey]) {
      throw new Error(`Theme '${themeKey}' not found`);
    }

    const theme = this.generateTheme(this.themes[themeKey]);
    const outputDir = path.join(__dirname, '../../themes');
    const outputPath = path.join(outputDir, `${themeKey}.json`);
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, JSON.stringify(theme, null, 2));
    console.log(`Generated theme: ${outputPath}`);
  }
}

export default ThemeGenerator;
