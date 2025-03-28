# Happy Heart

Happy Heart is a vibrant dark theme for Visual Studio Code that brings a refreshing burst of color to your coding experience. Designed with a unique palette of bright accents and deep backgrounds, it not only enhances readability but also adds a joyful vibe to your development environment.

## Features

- **Vibrant Colors:** A lively mix of bright accents against dark backgrounds.
- **Enhanced Readability:** Thoughtfully chosen colors for clear syntax highlighting.
- **Custom Token Colors:** Distinguishes code elements like keywords, strings, and functions.
- **Comprehensive UI Styling:** Customizations for editor background, title bar, activity bar, sidebar, status bar, and more.

## Installation

### Via VSIX Package

1. Download the `happy-heart-0.0.1.vsix` file from the release section
2. Open VS Code and press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the Command Palette.
3. Type **Extensions: Install from VSIX...** and select the command.
4. Locate and select the downloaded `.vsix` file to install the theme.

### Via Visual Studio Code Marketplace (if published)

1. Open VS Code.
2. Go to the Extensions view by pressing `Ctrl+Shift+X` (or `Cmd+Shift+X` on macOS).
3. Search for **Happy Heart**.
4. Click **Install**.

## Usage

1. After installation, open the Command Palette with `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS).
2. Type **Preferences: Color Theme**.
3. Select **Happy Heart** from the list.
4. Enjoy your new theme immediately!

## Advanced Customization

### Overriding Color Settings

If you wish to tweak certain colors to better suit your workflow, you can override the default settings. Open your user `settings.json` and add your customizations under `workbench.colorCustomizations`:

```json
"workbench.colorCustomizations": {
  "editor.background": "#000000",
  "editor.foreground": "#FFFFFF"
}




Adjusting Syntax Highlighting
To further personalize your coding experience, you can modify token colors in your settings.json by extending editor.tokenColorCustomizations:

"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "scope": "comment",
      "settings": {
        "foreground": "#AAAAAA",
        "fontStyle": "italic"
      }
    }
  ]
}






Developer Tools for UI Inspection

For advanced troubleshooting or to understand how each color setting applies:
Open Developer Tools via Help > Toggle Developer Tools.
Use the inspector to see which UI elements are styled by which settings.
Make real-time adjustments in your settings.json before finalizing your changes.








Troubleshooting
Theme Not Showing:
Make sure you have selected Happy Heart from the Command Palette. If it still doesn’t appear, try restarting VS Code.

Display or Customization Issues:
Verify that your VS Code version meets the required version (as specified in the package.json). Also, check your custom settings for any typos.




Unexpected Behavior:
Use the Developer Tools to inspect and debug UI issues. Report any persistent bugs on the project's GitHub issues page.


Contributing
Your feedback and contributions are welcome! To contribute:
Fork the Repository: Create a fork of the project on GitHub.
Make Changes: Improve the theme, fix issues, or add new features.
Submit a Pull Request: Once your changes are ready, submit a pull request for review.
Please refer to the Contribution Guidelines for more details.



Enjoy coding with Happy Heart! For more information, visit the Visual Studio Code Documentation.