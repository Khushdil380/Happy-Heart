import * as vscode from 'vscode';

// Happy Heart theme names in order
const happyHeartThemes = [
    'Happy Heart 1 - Dark Classic',
    'Happy Heart 2 - Dark Orange', 
    'Happy Heart 3 - Dark Purple',
    'Happy Heart 4 - Dark Green',
    'Happy Heart 5 - Deep Blue',
    'Happy Heart 6 - Ocean Blue',
    'Happy Heart 7 - Navy Blue',
    'Happy Heart 8 - Bright Light',
    'Happy Heart 9 - Smooth Light',
    'Happy Heart 10 - Forest Green',
    'Happy Heart 11 - Emerald Green',
    'Happy Heart 12 - Midnight Purple',
    'Happy Heart 13 - Royal Purple',
    'Happy Heart 14 - Rose Gold',
    'Happy Heart 15 - Chilli Paper',
    'Happy Heart 16 - Grey',
    'Happy Heart 17 - Yellow'
];

function activate(context) {
    console.log('Happy Heart Theme Extension is now active!');

    // Quick Theme Switch - Show picker
    let quickThemeSwitch = vscode.commands.registerCommand('happyHeart.quickThemeSwitch', () => {
        vscode.window.showQuickPick(happyHeartThemes, {
            placeHolder: 'Choose a Happy Heart theme',
            matchOnDescription: true,
            matchOnDetail: true
        }).then(selectedTheme => {
            if (selectedTheme) {
                vscode.workspace.getConfiguration().update(
                    'workbench.colorTheme',
                    selectedTheme,
                    vscode.ConfigurationTarget.Global
                );
                vscode.window.showInformationMessage(`Switched to ${selectedTheme}! 🎨`);
            }
        });
    });

    // Next Theme
    let nextTheme = vscode.commands.registerCommand('happyHeart.nextTheme', () => {
        const currentTheme = vscode.workspace.getConfiguration().get('workbench.colorTheme');
        const currentIndex = happyHeartThemes.indexOf(currentTheme);
        
        let nextIndex = currentIndex + 1;
        if (nextIndex >= happyHeartThemes.length) {
            nextIndex = 0; // Loop back to first theme
        }
        
        const nextTheme = happyHeartThemes[nextIndex];
        vscode.workspace.getConfiguration().update(
            'workbench.colorTheme',
            nextTheme,
            vscode.ConfigurationTarget.Global
        );
        vscode.window.showInformationMessage(`Switched to ${nextTheme}! 🎨`);
    });

    // Previous Theme
    let previousTheme = vscode.commands.registerCommand('happyHeart.previousTheme', () => {
        const currentTheme = vscode.workspace.getConfiguration().get('workbench.colorTheme');
        const currentIndex = happyHeartThemes.indexOf(currentTheme);
        
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = happyHeartThemes.length - 1; // Loop to last theme
        }
        
        const prevTheme = happyHeartThemes[prevIndex];
        vscode.workspace.getConfiguration().update(
            'workbench.colorTheme',
            prevTheme,
            vscode.ConfigurationTarget.Global
        );
        vscode.window.showInformationMessage(`Switched to ${prevTheme}! 🎨`);
    });

    // Random Theme
    let randomTheme = vscode.commands.registerCommand('happyHeart.randomTheme', () => {
        const currentTheme = vscode.workspace.getConfiguration().get('workbench.colorTheme');
        let randomIndex = Math.floor(Math.random() * happyHeartThemes.length);
        
        // Make sure we don't select the same theme
        while (happyHeartThemes[randomIndex] === currentTheme && happyHeartThemes.length > 1) {
            randomIndex = Math.floor(Math.random() * happyHeartThemes.length);
        }
        
        const randomTheme = happyHeartThemes[randomIndex];
        vscode.workspace.getConfiguration().update(
            'workbench.colorTheme',
            randomTheme,
            vscode.ConfigurationTarget.Global
        );
        vscode.window.showInformationMessage(`Random theme: ${randomTheme}! 🎲🎨`);
    });

    // Register all commands
    context.subscriptions.push(quickThemeSwitch);
    context.subscriptions.push(nextTheme);
    context.subscriptions.push(previousTheme);
    context.subscriptions.push(randomTheme);
}

function deactivate() {
    console.log('Happy Heart Theme Extension is now deactivated!');
}

export {
    activate,
    deactivate
};
