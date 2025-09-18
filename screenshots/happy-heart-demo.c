/*
 * Happy Heart Theme Collection - Demo Program
 * 
 * This C program demonstrates the beautiful syntax highlighting
 * provided by the Happy Heart VS Code theme collection.
 * 
 * Features 17 unique themes with vibrant colors for:
 * - Comments (like this one)
 * - Keywords (if, else, for, while, return, etc.)
 * - Strings and character literals
 * - Numbers and constants
 * - Functions and variables
 * - Operators and punctuation
 * - Preprocessor directives
 * - Data types and structures
 * 
 * Install: Happy Heart Theme Collection by Khushdil380
 * GitHub: https://github.com/Khushdil380/happy-heart-theme
 * VS Code Marketplace: Search "Happy Heart"
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <time.h>

// Constants and macros
#define MAX_THEMES 17
#define PI 3.14159265359
#define THEME_NAME_LENGTH 50

// Global variables
static int theme_count = 0;
static char current_theme[THEME_NAME_LENGTH] = "Dark Classic";

// Function prototypes
void display_welcome_message(void);
void demonstrate_control_structures(void);
void show_data_types_and_structures(void);
void perform_calculations(void);
void handle_file_operations(void);
void demonstrate_memory_management(void);
void show_advanced_features(void);

// Theme information structure
typedef struct {
    int id;
    char name[THEME_NAME_LENGTH];
    char category[20];
    char primary_color[10];
    char secondary_color[10];
    char accent_color[10];
} Theme;

// Array of all Happy Heart themes
Theme themes[MAX_THEMES] = {
    {1, "Dark Classic", "Dark", "#00ff88", "#ff3366", "#ffaa00"},
    {2, "Dark Orange", "Dark", "#ff6b35", "#00d4ff", "#ffd700"},
    {3, "Dark Purple", "Dark", "#a855f7", "#ec4899", "#06b6d4"},
    {4, "Dark Green", "Dark", "#4ade80", "#22c55e", "#84cc16"},
    {5, "Deep Blue", "Blue", "#00d4ff", "#ff6b35", "#ffd700"},
    {6, "Ocean Blue", "Blue", "#00b4d8", "#0077b6", "#90e0ef"},
    {7, "Navy Blue", "Blue", "#0066cc", "#004499", "#3399ff"},
    {8, "Bright Light", "Light", "#0066cc", "#ff3366", "#ffaa00"},
    {9, "Smooth Light", "Light", "#2563eb", "#7c3aed", "#f59e0b"},
    {10, "Forest Green", "Green", "#4ade80", "#22c55e", "#84cc16"},
    {11, "Emerald Green", "Green", "#10b981", "#059669", "#34d399"},
    {12, "Midnight Purple", "Purple", "#a855f7", "#ec4899", "#06b6d4"},
    {13, "Royal Purple", "Purple", "#8b5cf6", "#7c3aed", "#a855f7"},
    {14, "Rose Gold", "Special", "#f43f5e", "#f59e0b", "#8b5cf6"},
    {15, "Chilli Paper", "Special", "#dc2626", "#ef4444", "#f59e0b"},
    {16, "Grey", "Special", "#6b7280", "#9ca3af", "#d1d5db"},
    {17, "Yellow", "Special", "#fbbf24", "#f59e0b", "#fcd34d"}
};

/**
 * Main function - Entry point of the program
 * Demonstrates various C language features with beautiful syntax highlighting
 */
int main(int argc, char *argv[]) {
    // Display welcome message
    display_welcome_message();
    
    // Demonstrate different programming concepts
    demonstrate_control_structures();
    show_data_types_and_structures();
    perform_calculations();
    handle_file_operations();
    demonstrate_memory_management();
    show_advanced_features();
    
    printf("\n🎨 Thank you for trying Happy Heart Theme Collection!\n");
    printf("📦 Install from VS Code Marketplace: 'Happy Heart'\n");
    printf("⭐ Star on GitHub: https://github.com/Khushdil380/happy-heart-theme\n");
    
    return EXIT_SUCCESS;
}

/**
 * Display welcome message and theme information
 */
void display_welcome_message(void) {
    printf("╔══════════════════════════════════════════════════════════════╗\n");
    printf("║                    Happy Heart Theme Collection             ║\n");
    printf("║                    C Language Demo Program                   ║\n");
    printf("╠══════════════════════════════════════════════════════════════╣\n");
    printf("║  🎨 17 Beautiful VS Code Themes                            ║\n");
    printf("║  🌈 Rich Syntax Highlighting                                ║\n");
    printf("║  ⌨️  Keyboard Shortcuts (Ctrl+Shift+T)                      ║\n");
    printf("║  🎯 Advanced UI Theming                                     ║\n");
    printf("║  📱 Responsive Design                                        ║\n");
    printf("╚══════════════════════════════════════════════════════════════╝\n");
    
    printf("\nCurrent Theme: %s\n", current_theme);
    printf("Total Themes Available: %d\n", MAX_THEMES);
}

/**
 * Demonstrate control structures (if, else, for, while, switch)
 */
void demonstrate_control_structures(void) {
    printf("\n=== Control Structures Demo ===\n");
    
    // If-else statements
    int temperature = 25;
    if (temperature > 30) {
        printf("It's hot! Temperature: %d°C\n", temperature);
    } else if (temperature > 20) {
        printf("Nice weather! Temperature: %d°C\n", temperature);
    } else {
        printf("It's cool! Temperature: %d°C\n", temperature);
    }
    
    // For loop
    printf("\nCounting from 1 to 5:\n");
    for (int i = 1; i <= 5; i++) {
        printf("  Count: %d\n", i);
    }
    
    // While loop
    printf("\nWhile loop demonstration:\n");
    int counter = 0;
    while (counter < 3) {
        printf("  While iteration: %d\n", counter + 1);
        counter++;
    }
    
    // Switch statement
    printf("\nSwitch statement demo:\n");
    char grade = 'A';
    switch (grade) {
        case 'A':
            printf("  Excellent! Grade: %c\n", grade);
            break;
        case 'B':
            printf("  Good! Grade: %c\n", grade);
            break;
        case 'C':
            printf("  Average! Grade: %c\n", grade);
            break;
        default:
            printf("  Unknown grade: %c\n", grade);
            break;
    }
}

/**
 * Show data types and structures
 */
void show_data_types_and_structures(void) {
    printf("\n=== Data Types and Structures Demo ===\n");
    
    // Basic data types
    int integer_var = 42;
    float float_var = 3.14f;
    double double_var = 2.718281828;
    char char_var = 'H';
    char string_var[] = "Hello, Happy Heart!";
    
    printf("Integer: %d\n", integer_var);
    printf("Float: %.2f\n", float_var);
    printf("Double: %.6f\n", double_var);
    printf("Character: %c\n", char_var);
    printf("String: %s\n", string_var);
    
    // Array demonstration
    int numbers[] = {1, 2, 3, 4, 5};
    printf("\nArray elements: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\n");
    
    // Structure definition
    struct Point {
        int x;
        int y;
    };
    
    struct Point point = {10, 20};
    printf("Point coordinates: (%d, %d)\n", point.x, point.y);
}

/**
 * Perform mathematical calculations
 */
void perform_calculations(void) {
    printf("\n=== Mathematical Calculations Demo ===\n");
    
    // Basic arithmetic
    int a = 15, b = 7;
    printf("Arithmetic operations:\n");
    printf("  %d + %d = %d\n", a, b, a + b);
    printf("  %d - %d = %d\n", a, b, a - b);
    printf("  %d * %d = %d\n", a, b, a * b);
    printf("  %d / %d = %d\n", a, b, a / b);
    printf("  %d %% %d = %d\n", a, b, a % b);
    
    // Mathematical functions
    double angle = PI / 4;
    printf("\nMathematical functions:\n");
    printf("  sin(π/4) = %.6f\n", sin(angle));
    printf("  cos(π/4) = %.6f\n", cos(angle));
    printf("  sqrt(16) = %.2f\n", sqrt(16.0));
    printf("  pow(2, 3) = %.2f\n", pow(2.0, 3.0));
    
    // Bitwise operations
    unsigned int x = 0b1010;  // Binary 10
    unsigned int y = 0b1100;  // Binary 12
    printf("\nBitwise operations:\n");
    printf("  %d & %d = %d\n", x, y, x & y);
    printf("  %d | %d = %d\n", x, y, x | y);
    printf("  %d ^ %d = %d\n", x, y, x ^ y);
    printf("  ~%d = %d\n", x, ~x);
}

/**
 * Handle file operations
 */
void handle_file_operations(void) {
    printf("\n=== File Operations Demo ===\n");
    
    // File writing
    FILE *file = fopen("happy_heart_demo.txt", "w");
    if (file != NULL) {
        fprintf(file, "Happy Heart Theme Collection Demo\n");
        fprintf(file, "Created by: Khushdil380\n");
        fprintf(file, "VS Code Extension: Happy Heart\n");
        fprintf(file, "GitHub: https://github.com/Khushdil380/happy-heart-theme\n");
        fclose(file);
        printf("File 'happy_heart_demo.txt' created successfully!\n");
    } else {
        printf("Error: Could not create file\n");
    }
    
    // File reading
    file = fopen("happy_heart_demo.txt", "r");
    if (file != NULL) {
        char line[100];
        printf("\nFile contents:\n");
        while (fgets(line, sizeof(line), file) != NULL) {
            printf("  %s", line);
        }
        fclose(file);
    }
}

/**
 * Demonstrate memory management
 */
void demonstrate_memory_management(void) {
    printf("\n=== Memory Management Demo ===\n");
    
    // Dynamic memory allocation
    int *dynamic_array = (int*)malloc(5 * sizeof(int));
    if (dynamic_array != NULL) {
        printf("Dynamic array allocated successfully!\n");
        
        // Initialize array
        for (int i = 0; i < 5; i++) {
            dynamic_array[i] = (i + 1) * 10;
        }
        
        // Display array
        printf("Dynamic array values: ");
        for (int i = 0; i < 5; i++) {
            printf("%d ", dynamic_array[i]);
        }
        printf("\n");
        
        // Free memory
        free(dynamic_array);
        printf("Memory freed successfully!\n");
    } else {
        printf("Error: Memory allocation failed\n");
    }
}

/**
 * Show advanced features
 */
void show_advanced_features(void) {
    printf("\n=== Advanced Features Demo ===\n");
    
    // Function pointers
    int (*operation)(int, int) = NULL;
    operation = &add_numbers;
    
    if (operation != NULL) {
        int result = operation(10, 20);
        printf("Function pointer result: %d\n", result);
    }
    
    // Preprocessor directives
    #ifdef DEBUG
        printf("Debug mode enabled\n");
    #else
        printf("Release mode\n");
    #endif
    
    // Enumeration
    enum ThemeCategory { DARK, LIGHT, BLUE, GREEN, PURPLE, SPECIAL };
    enum ThemeCategory category = DARK;
    printf("Theme category: %d\n", category);
    
    // Union
    union Data {
        int integer;
        float floating;
        char character;
    };
    
    union Data data;
    data.integer = 65;
    printf("Union as integer: %d\n", data.integer);
    printf("Union as character: %c\n", data.character);
}

/**
 * Helper function for function pointer demonstration
 */
int add_numbers(int a, int b) {
    return a + b;
}

/**
 * Display theme information
 */
void display_theme_info(int theme_id) {
    if (theme_id >= 1 && theme_id <= MAX_THEMES) {
        Theme *theme = &themes[theme_id - 1];
        printf("\nTheme Information:\n");
        printf("  ID: %d\n", theme->id);
        printf("  Name: %s\n", theme->name);
        printf("  Category: %s\n", theme->category);
        printf("  Primary Color: %s\n", theme->primary_color);
        printf("  Secondary Color: %s\n", theme->secondary_color);
        printf("  Accent Color: %s\n", theme->accent_color);
    }
}

/**
 * List all available themes
 */
void list_all_themes(void) {
    printf("\n=== All Happy Heart Themes ===\n");
    for (int i = 0; i < MAX_THEMES; i++) {
        printf("%2d. %s (%s)\n", 
               themes[i].id, 
               themes[i].name, 
               themes[i].category);
    }
}

/*
 * End of Happy Heart Theme Collection Demo Program
 * 
 * This program showcases the beautiful syntax highlighting
 * provided by the Happy Heart VS Code theme collection.
 * 
 * Features demonstrated:
 * - Comments and documentation
 * - Keywords and control structures
 * - Data types and variables
 * - Functions and function pointers
 * - Structures and unions
 * - Memory management
 * - File operations
 * - Mathematical calculations
 * - Preprocessor directives
 * - Enumerations and constants
 * 
 * Install the Happy Heart Theme Collection to see
 * these beautiful colors in your VS Code editor!
 * 
 * VS Code Marketplace: Search "Happy Heart"
 * GitHub: https://github.com/Khushdil380/happy-heart-theme
 */
