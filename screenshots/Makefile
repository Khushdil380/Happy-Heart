# Happy Heart Theme Collection - Demo Makefile
# 
# This Makefile demonstrates the beautiful syntax highlighting
# provided by the Happy Heart VS Code theme collection.
# 
# Features showcased:
# - Comments and documentation
# - Variable definitions and assignments
# - Target rules and dependencies
# - Command execution
# - Conditional compilation
# - Pattern rules and wildcards
# - Function calls and expansions
# 
# Install: Happy Heart Theme Collection by Khushdil380
# GitHub: https://github.com/Khushdil380/happy-heart-theme
# VS Code Marketplace: Search "Happy Heart"

# Compiler and flags
CC = gcc
CFLAGS = -Wall -Wextra -std=c99 -O2 -g
DEBUG_FLAGS = -DDEBUG -g3 -O0
RELEASE_FLAGS = -DNDEBUG -O3 -s

# Directories
SRC_DIR = .
BUILD_DIR = build
DOCS_DIR = docs
SCREENSHOTS_DIR = screenshots

# Source files
SOURCES = happy-heart-demo.c
HEADERS = happy-heart-demo.h
OBJECTS = $(SOURCES:%.c=$(BUILD_DIR)/%.o)
TARGET = happy-heart-demo
STATIC_LIB = libhappyheart.a
SHARED_LIB = libhappyheart.so

# Include paths
INCLUDES = -I$(SRC_DIR) -I/usr/local/include
LIBRARIES = -lm -lpthread

# Default target
.PHONY: all clean debug release install uninstall test help
.DEFAULT_GOAL := all

# Main targets
all: $(BUILD_DIR)/$(TARGET)

debug: CFLAGS += $(DEBUG_FLAGS)
debug: $(BUILD_DIR)/$(TARGET)

release: CFLAGS += $(RELEASE_FLAGS)
release: clean $(BUILD_DIR)/$(TARGET)

# Create build directory
$(BUILD_DIR):
	@echo "Creating build directory..."
	@mkdir -p $(BUILD_DIR)

# Compile source files
$(BUILD_DIR)/%.o: %.c | $(BUILD_DIR)
	@echo "Compiling $<..."
	$(CC) $(CFLAGS) $(INCLUDES) -c $< -o $@

# Link executable
$(BUILD_DIR)/$(TARGET): $(OBJECTS)
	@echo "Linking $(TARGET)..."
	$(CC) $(OBJECTS) -o $@ $(LIBRARIES)
	@echo "Build complete: $(BUILD_DIR)/$(TARGET)"

# Static library
$(BUILD_DIR)/$(STATIC_LIB): $(OBJECTS)
	@echo "Creating static library..."
	ar rcs $@ $(OBJECTS)
	@echo "Static library created: $@"

# Shared library
$(BUILD_DIR)/$(SHARED_LIB): $(OBJECTS)
	@echo "Creating shared library..."
	$(CC) -shared -fPIC $(OBJECTS) -o $@ $(LIBRARIES)
	@echo "Shared library created: $@"

# Run the program
run: $(BUILD_DIR)/$(TARGET)
	@echo "Running Happy Heart Demo..."
	@./$(BUILD_DIR)/$(TARGET)

# Test the program
test: $(BUILD_DIR)/$(TARGET)
	@echo "Running tests..."
	@./$(BUILD_DIR)/$(TARGET) --test

# Install the program
install: $(BUILD_DIR)/$(TARGET)
	@echo "Installing Happy Heart Demo..."
	@sudo cp $(BUILD_DIR)/$(TARGET) /usr/local/bin/
	@sudo chmod +x /usr/local/bin/$(TARGET)
	@echo "Installation complete!"

# Uninstall the program
uninstall:
	@echo "Uninstalling Happy Heart Demo..."
	@sudo rm -f /usr/local/bin/$(TARGET)
	@echo "Uninstallation complete!"

# Clean build files
clean:
	@echo "Cleaning build files..."
	@rm -rf $(BUILD_DIR)
	@echo "Clean complete!"

# Clean everything including generated files
distclean: clean
	@echo "Cleaning all generated files..."
	@rm -f *.o *.a *.so *.exe
	@rm -f happy_heart_demo.txt
	@echo "Distclean complete!"

# Create documentation
docs:
	@echo "Creating documentation..."
	@mkdir -p $(DOCS_DIR)
	@echo "# Happy Heart Theme Collection Documentation" > $(DOCS_DIR)/README.md
	@echo "Generated on: $$(date)" >> $(DOCS_DIR)/README.md
	@echo "Documentation created in $(DOCS_DIR)/"

# Create screenshots directory
screenshots:
	@echo "Creating screenshots directory..."
	@mkdir -p $(SCREENSHOTS_DIR)
	@echo "Screenshots directory created!"

# Package the project
package: clean release
	@echo "Creating package..."
	@mkdir -p package
	@cp $(BUILD_DIR)/$(TARGET) package/
	@cp *.c *.h package/
	@cp Makefile package/
	@tar -czf happy-heart-demo.tar.gz package/
	@rm -rf package/
	@echo "Package created: happy-heart-demo.tar.gz"

# Show help information
help:
	@echo "Happy Heart Theme Collection - Demo Makefile"
	@echo "============================================="
	@echo ""
	@echo "Available targets:"
	@echo "  all        - Build the project (default)"
	@echo "  debug      - Build with debug flags"
	@echo "  release    - Build with release flags"
	@echo "  run        - Build and run the program"
	@echo "  test       - Run tests"
	@echo "  install    - Install the program"
	@echo "  uninstall  - Remove the program"
	@echo "  clean      - Remove build files"
	@echo "  distclean  - Remove all generated files"
	@echo "  docs       - Create documentation"
	@echo "  screenshots- Create screenshots directory"
	@echo "  package    - Create distribution package"
	@echo "  help       - Show this help message"
	@echo ""
	@echo "Variables:"
	@echo "  CC         - C compiler (default: gcc)"
	@echo "  CFLAGS     - Compiler flags"
	@echo "  BUILD_DIR  - Build directory (default: build)"
	@echo "  TARGET     - Executable name (default: happy-heart-demo)"
	@echo ""
	@echo "Examples:"
	@echo "  make debug     - Build with debug information"
	@echo "  make release   - Build optimized version"
	@echo "  make run       - Build and run the program"
	@echo "  make clean     - Clean build files"

# Dependencies
$(BUILD_DIR)/happy-heart-demo.o: happy-heart-demo.c happy-heart-demo.h

# Pattern rules
%.o: %.c
	$(CC) $(CFLAGS) $(INCLUDES) -c $< -o $@

# Conditional compilation
ifeq ($(OS),Windows_NT)
    RM = del /Q
    MKDIR = mkdir
    TARGET_EXT = .exe
else
    RM = rm -f
    MKDIR = mkdir -p
    TARGET_EXT =
endif

# Windows-specific targets
ifeq ($(OS),Windows_NT)
windows: $(BUILD_DIR)/$(TARGET)$(TARGET_EXT)
	@echo "Windows build complete!"
endif

# Linux-specific targets
linux: $(BUILD_DIR)/$(TARGET)
	@echo "Linux build complete!"

# macOS-specific targets
macos: $(BUILD_DIR)/$(TARGET)
	@echo "macOS build complete!"

# Cross-compilation example
cross-compile:
	@echo "Cross-compilation example:"
	@echo "  make CC=arm-linux-gnueabihf-gcc"
	@echo "  make CC=x86_64-w64-mingw32-gcc"

# Memory check with Valgrind (Linux only)
memcheck: $(BUILD_DIR)/$(TARGET)
	@echo "Running memory check..."
	@valgrind --leak-check=full --show-leak-kinds=all ./$(BUILD_DIR)/$(TARGET)

# Performance profiling
profile: $(BUILD_DIR)/$(TARGET)
	@echo "Running performance profiling..."
	@gprof ./$(BUILD_DIR)/$(TARGET) gmon.out > profile.txt
	@echo "Profile results saved to profile.txt"

# Code coverage
coverage: CFLAGS += --coverage
coverage: $(BUILD_DIR)/$(TARGET)
	@echo "Running code coverage..."
	@gcov $(SOURCES)
	@echo "Coverage reports generated"

# Static analysis
analyze:
	@echo "Running static analysis..."
	@cppcheck --enable=all --std=c99 $(SOURCES)
	@echo "Static analysis complete"

# Format code
format:
	@echo "Formatting code..."
	@clang-format -i $(SOURCES) $(HEADERS)
	@echo "Code formatting complete"

# Show build information
info:
	@echo "Build Information:"
	@echo "  Compiler: $(CC)"
	@echo "  Flags: $(CFLAGS)"
	@echo "  Includes: $(INCLUDES)"
	@echo "  Libraries: $(LIBRARIES)"
	@echo "  Target: $(TARGET)"
	@echo "  Build Directory: $(BUILD_DIR)"
	@echo "  Source Files: $(SOURCES)"
	@echo "  Header Files: $(HEADERS)"

# End of Makefile
# 
# This Makefile demonstrates advanced Make features
# with beautiful syntax highlighting provided by the
# Happy Heart VS Code theme collection.
# 
# Features demonstrated:
# - Comments and documentation
# - Variable definitions and assignments
# - Target rules and dependencies
# - Command execution and echo statements
# - Conditional compilation and platform detection
# - Pattern rules and wildcards
# - Function calls and expansions
# - Advanced Make constructs
# 
# Install the Happy Heart Theme Collection to see
# these beautiful colors in your VS Code editor!
# 
# VS Code Marketplace: Search "Happy Heart"
# GitHub: https://github.com/Khushdil380/happy-heart-theme
