// Base color variables that are shared across all themes
export const baseColors = {
  // Primary brand colors
  primary: '#88ff00',
  secondary: '#e67308',
  accent: '#FFE212',
  
  // Neutral colors
  white: '#ffffff',
  black: '#000000',
  
  // Status colors
  success: '#00ff00',
  warning: '#ffea00',
  error: '#ff0000',
  info: '#0000ff',
  
  // Common UI colors
  border: '#e67308',
  shadow: '#000000',
  
  // Text colors
  textPrimary: '#ffffff',
  textSecondary: '#FFE212',
  textMuted: '#c5b32b',
  
  // Background variations
  backgroundDark: '#030303',
  backgroundMedium: '#160F30',
  backgroundLight: '#441752',
  
  // Selection and highlight
  selection: '#bb04f350',
  highlight: '#fd0643f1',
  
  // Terminal colors
  terminalBlack: '#000000',
  terminalRed: '#ff0000',
  terminalGreen: '#00ff00',
  terminalBlue: '#0000ff',
  terminalWhite: '#ffffff'
};

// Common token color mappings
export const tokenMappings = {
  comment: {
    foreground: '#a6e4f3a2',
    fontStyle: 'italic'
  },
  keyword: {
    scopes: [
      'keyword', 'keyword.control', 'keyword.operator', 'keyword.control.directive',
      'keyword.control.import', 'keyword.control.export', 'keyword.control.at-rule',
      'entity.other.attribute-name.html', 'meta.tag.attributes.html', 'meta.selector.css',
      'keyword.controlsql', 'entity.other.attribute-name.class.css', 'support.function.sql',
      'entity.name.table.sql'
    ]
  },
  storage: {
    scopes: [
      'storage', 'storage.type', 'storage.modifier', 'storage.type.primitive',
      'storage.modifier.import', 'storage.modifier.package', 'storage.type.annotation',
      'storage.type.generic', 'keyword.directive.angular', 'meta.template.expression.vue',
      'meta.jsx.children'
    ]
  },
  variable: {
    scopes: [
      'variable', 'variable.parameter', 'variable.language', 'variable.other.readwrite',
      'variable.other.member', 'variable.other.property', 'entity.other.attribute-name',
      'entity.other.attribute-name.id.css', 'support.constant.property.js',
      'support.type.property-name.json', 'entity.name.tag.html', 'metataghtml',
      'entity.name.tag.jsx', 'entity.name.tag.vue', 'support.type.property-name.css'
    ]
  },
  function: {
    scopes: [
      'constant.numeric', 'entity.name.function', 'support.function', 'support.function.builtin',
      'entity.name.function.js', 'meta.object-literal.key.js', 'variable.other.readwrite.js'
    ]
  },
  type: {
    scopes: [
      'entity.name.type', 'entity.other.inherited-class', 'entity.name.struct',
      'entity.name.enum', 'support.class.js', 'entity.name.type.module.js',
      'entity.name.type.class.js', 'entity.name.tag', 'string',
      'string.quoted.single', 'string.quoted.double', 'string.quoted.template',
      'string.regexp', 'string.interpolated', 'string.interpolated.fstring',
      'string.template.js', 'string.template.expression.js',
      'constant.language.boolean', 'support.constant.property-value.css',
      'constant.numeric.json', 'constant.language.json'
    ]
  }
};
