/*
 * Happy Heart Theme Collection - Demo Header File
 * 
 * This header file demonstrates the beautiful syntax highlighting
 * provided by the Happy Heart VS Code theme collection.
 * 
 * Features showcased:
 * - Header guards and preprocessor directives
 * - Function declarations and prototypes
 * - Structure and union definitions
 * - Enumeration declarations
 * - Macro definitions
 * - Type definitions
 * - Constants and global variables
 * 
 * Install: Happy Heart Theme Collection by Khushdil380
 * GitHub: https://github.com/Khushdil380/happy-heart-theme
 * VS Code Marketplace: Search "Happy Heart"
 */

#ifndef HAPPY_HEART_DEMO_H
#define HAPPY_HEART_DEMO_H

// Standard library includes
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <time.h>
#include <stdbool.h>
#include <stdint.h>

// Preprocessor definitions
#define MAX_THEMES 17
#define MAX_THEME_NAME_LENGTH 50
#define PI 3.14159265359
#define EULER_NUMBER 2.718281828
#define GOLDEN_RATIO 1.618033988

// Macro definitions
#define SQUARE(x) ((x) * (x))
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define MIN(a, b) ((a) < (b) ? (a) : (b))
#define ABS(x) ((x) < 0 ? -(x) : (x))

// Conditional compilation
#ifdef DEBUG
    #define DEBUG_PRINT(fmt, ...) printf("DEBUG: " fmt, ##__VA_ARGS__)
#else
    #define DEBUG_PRINT(fmt, ...)
#endif

// Type definitions
typedef unsigned int uint;
typedef unsigned char uchar;
typedef unsigned long ulong;
typedef double real;

// Enumeration declarations
enum ThemeCategory {
    THEME_DARK = 0,
    THEME_LIGHT,
    THEME_BLUE,
    THEME_GREEN,
    THEME_PURPLE,
    THEME_SPECIAL,
    THEME_COUNT
};

enum ColorType {
    COLOR_PRIMARY,
    COLOR_SECONDARY,
    COLOR_ACCENT,
    COLOR_BACKGROUND,
    COLOR_FOREGROUND,
    COLOR_COUNT
};

enum SyntaxToken {
    TOKEN_COMMENT,
    TOKEN_KEYWORD,
    TOKEN_STRING,
    TOKEN_NUMBER,
    TOKEN_FUNCTION,
    TOKEN_VARIABLE,
    TOKEN_OPERATOR,
    TOKEN_PUNCTUATION,
    TOKEN_TYPE,
    TOKEN_CONSTANT,
    TOKEN_COUNT
};

// Structure definitions
struct Theme {
    int id;
    char name[MAX_THEME_NAME_LENGTH];
    enum ThemeCategory category;
    char primary_color[10];
    char secondary_color[10];
    char accent_color[10];
    char background_color[10];
    char foreground_color[10];
    bool is_dark_theme;
    float brightness;
    float contrast;
};

struct ColorPalette {
    char hex_code[10];
    uint8_t red;
    uint8_t green;
    uint8_t blue;
    float hue;
    float saturation;
    float lightness;
};

struct SyntaxHighlighting {
    enum SyntaxToken token_type;
    char color[10];
    bool bold;
    bool italic;
    bool underline;
    int font_size;
};

struct ThemeSettings {
    struct Theme theme;
    struct ColorPalette palette[COLOR_COUNT];
    struct SyntaxHighlighting syntax[TOKEN_COUNT];
    char font_family[50];
    int font_size;
    bool enable_bracket_colorization;
    bool enable_indent_guides;
    bool enable_word_highlight;
};

// Union definitions
union ThemeData {
    struct Theme theme;
    char raw_data[sizeof(struct Theme)];
    uint32_t hash;
};

union ColorValue {
    uint32_t rgba;
    struct {
        uint8_t red;
        uint8_t green;
        uint8_t blue;
        uint8_t alpha;
    } components;
};

// Global variable declarations
extern struct Theme themes[MAX_THEMES];
extern struct ThemeSettings current_settings;
extern int theme_count;
extern char current_theme_name[MAX_THEME_NAME_LENGTH];

// Function prototypes
// Theme management functions
void initialize_themes(void);
void load_theme(int theme_id);
void save_theme_settings(const struct ThemeSettings* settings);
void reset_theme_settings(void);
void apply_theme(const struct Theme* theme);

// Color manipulation functions
struct ColorPalette hex_to_rgb(const char* hex_color);
char* rgb_to_hex(const struct ColorPalette* palette);
struct ColorPalette adjust_brightness(const struct ColorPalette* color, float factor);
struct ColorPalette adjust_contrast(const struct ColorPalette* color, float factor);
struct ColorPalette blend_colors(const struct ColorPalette* color1, 
                                const struct ColorPalette* color2, 
                                float ratio);

// Syntax highlighting functions
void setup_syntax_highlighting(struct SyntaxHighlighting* syntax);
void apply_syntax_colors(const struct SyntaxHighlighting* syntax);
void update_token_colors(enum SyntaxToken token, const char* color);
void reset_syntax_colors(void);

// Utility functions
bool is_valid_hex_color(const char* hex_color);
bool is_dark_theme(const struct Theme* theme);
float calculate_contrast_ratio(const struct ColorPalette* color1, 
                              const struct ColorPalette* color2);
void generate_theme_preview(const struct Theme* theme, char* preview);
void export_theme_config(const struct Theme* theme, const char* filename);

// Advanced features
void create_theme_variant(const struct Theme* base_theme, 
                         const char* variant_name,
                         struct Theme* new_theme);
void merge_themes(const struct Theme* theme1, 
                 const struct Theme* theme2, 
                 struct Theme* result);
void analyze_theme_colors(const struct Theme* theme, 
                         struct ColorPalette* analysis);

// File I/O functions
int save_theme_to_file(const struct Theme* theme, const char* filename);
int load_theme_from_file(struct Theme* theme, const char* filename);
int export_all_themes(const char* directory);
int import_theme_collection(const char* directory);

// Validation functions
bool validate_theme(const struct Theme* theme);
bool validate_color_palette(const struct ColorPalette* palette);
bool validate_syntax_highlighting(const struct SyntaxHighlighting* syntax);
bool validate_theme_settings(const struct ThemeSettings* settings);

// Debug and testing functions
void print_theme_info(const struct Theme* theme);
void print_color_palette(const struct ColorPalette* palette);
void print_syntax_highlighting(const struct SyntaxHighlighting* syntax);
void run_theme_tests(void);
void benchmark_theme_switching(void);

// Callback function types
typedef void (*theme_change_callback)(const struct Theme* new_theme);
typedef void (*color_change_callback)(const struct ColorPalette* new_color);
typedef void (*syntax_change_callback)(const struct SyntaxHighlighting* new_syntax);

// Callback registration functions
void register_theme_change_callback(theme_change_callback callback);
void register_color_change_callback(color_change_callback callback);
void register_syntax_change_callback(syntax_change_callback callback);

// Event handling
void trigger_theme_change_event(const struct Theme* new_theme);
void trigger_color_change_event(const struct ColorPalette* new_color);
void trigger_syntax_change_event(const struct SyntaxHighlighting* new_syntax);

// Memory management
struct Theme* allocate_theme(void);
void deallocate_theme(struct Theme* theme);
struct ColorPalette* allocate_color_palette(void);
void deallocate_color_palette(struct ColorPalette* palette);
struct SyntaxHighlighting* allocate_syntax_highlighting(void);
void deallocate_syntax_highlighting(struct SyntaxHighlighting* syntax);

// Error handling
typedef enum {
    THEME_ERROR_NONE = 0,
    THEME_ERROR_INVALID_ID,
    THEME_ERROR_INVALID_COLOR,
    THEME_ERROR_MEMORY_ALLOCATION,
    THEME_ERROR_FILE_IO,
    THEME_ERROR_INVALID_FORMAT,
    THEME_ERROR_VALIDATION_FAILED,
    THEME_ERROR_COUNT
} ThemeError;

const char* get_error_message(ThemeError error);
void set_error_handler(void (*handler)(ThemeError error, const char* message));
void clear_errors(void);

// Constants for theme categories
static const char* THEME_CATEGORY_NAMES[THEME_COUNT] = {
    "Dark",
    "Light", 
    "Blue",
    "Green",
    "Purple",
    "Special"
};

// Constants for syntax tokens
static const char* SYNTAX_TOKEN_NAMES[TOKEN_COUNT] = {
    "Comment",
    "Keyword",
    "String",
    "Number",
    "Function",
    "Variable",
    "Operator",
    "Punctuation",
    "Type",
    "Constant"
};

// Default theme configurations
static const struct Theme DEFAULT_THEMES[MAX_THEMES] = {
    {1, "Dark Classic", THEME_DARK, "#00ff88", "#ff3366", "#ffaa00", "#000000", "#ffffff", true, 0.1f, 0.9f},
    {2, "Dark Orange", THEME_DARK, "#ff6b35", "#00d4ff", "#ffd700", "#0a0a0a", "#ffffff", true, 0.2f, 0.8f},
    {3, "Dark Purple", THEME_DARK, "#a855f7", "#ec4899", "#06b6d4", "#0f0f0f", "#ffffff", true, 0.15f, 0.85f},
    {4, "Dark Green", THEME_DARK, "#4ade80", "#22c55e", "#84cc16", "#0a0a0a", "#ffffff", true, 0.2f, 0.8f},
    {5, "Deep Blue", THEME_BLUE, "#00d4ff", "#ff6b35", "#ffd700", "#010610", "#e6f1ff", true, 0.1f, 0.9f},
    {6, "Ocean Blue", THEME_BLUE, "#00b4d8", "#0077b6", "#90e0ef", "#0a0e1a", "#e6f1ff", true, 0.15f, 0.85f},
    {7, "Navy Blue", THEME_BLUE, "#0066cc", "#004499", "#3399ff", "#051537", "#e6f1ff", true, 0.1f, 0.9f},
    {8, "Bright Light", THEME_LIGHT, "#0066cc", "#ff3366", "#ffaa00", "#ffffff", "#333333", false, 0.9f, 0.1f},
    {9, "Smooth Light", THEME_LIGHT, "#2563eb", "#7c3aed", "#f59e0b", "#fafafa", "#1f2937", false, 0.85f, 0.15f},
    {10, "Forest Green", THEME_GREEN, "#4ade80", "#22c55e", "#84cc16", "#0a1a0a", "#f0fff4", true, 0.2f, 0.8f},
    {11, "Emerald Green", THEME_GREEN, "#10b981", "#059669", "#34d399", "#064e3b", "#d1fae5", true, 0.15f, 0.85f},
    {12, "Midnight Purple", THEME_PURPLE, "#a855f7", "#ec4899", "#06b6d4", "#0f0b1a", "#e0e7ff", true, 0.1f, 0.9f},
    {13, "Royal Purple", THEME_PURPLE, "#8b5cf6", "#7c3aed", "#a855f7", "#1a0f2e", "#e0e7ff", true, 0.15f, 0.85f},
    {14, "Rose Gold", THEME_SPECIAL, "#f43f5e", "#f59e0b", "#8b5cf6", "#1f0f1a", "#fdf2f8", true, 0.2f, 0.8f},
    {15, "Chilli Paper", THEME_SPECIAL, "#dc2626", "#ef4444", "#f59e0b", "#1a0a0a", "#fef2f2", true, 0.1f, 0.9f},
    {16, "Grey", THEME_SPECIAL, "#6b7280", "#9ca3af", "#d1d5db", "#374151", "#f9fafb", true, 0.5f, 0.5f},
    {17, "Yellow", THEME_SPECIAL, "#fbbf24", "#f59e0b", "#fcd34d", "#1a1a0a", "#fff8dc", true, 0.3f, 0.7f}
};

#endif // HAPPY_HEART_DEMO_H

/*
 * End of Happy Heart Theme Collection Demo Header
 * 
 * This header file showcases advanced C language features
 * with beautiful syntax highlighting provided by the
 * Happy Heart VS Code theme collection.
 * 
 * Features demonstrated:
 * - Header guards and include statements
 * - Preprocessor directives and macros
 * - Type definitions and enumerations
 * - Structure and union definitions
 * - Function prototypes and declarations
 * - Global variable declarations
 * - Constants and static data
 * - Advanced C language constructs
 * 
 * Install the Happy Heart Theme Collection to see
 * these beautiful colors in your VS Code editor!
 * 
 * VS Code Marketplace: Search "Happy Heart"
 * GitHub: https://github.com/Khushdil380/happy-heart-theme
 */
