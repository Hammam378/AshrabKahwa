const vscode = require('vscode');

function activate(context) {
    // Show an initial notification when VS Code is launched
    vscode.window.showInformationMessage('اشرب قهوه يا بصمجي');

    // Set up a repeating notification every 30 minutes
    const interval = setInterval(() => {
        vscode.window.showInformationMessage('اشرب قهوه يا بصمجي');

        // Display LinkedIn link after the main message
        vscode.window.showInformationMessage('Join us on LinkedIn: [Click here to connect](https://www.linkedin.com/in/devhammam1/)');
    }, 30 * 60 * 1000); // 30 minutes in milliseconds

    // Clear the interval when the extension is deactivated
    context.subscriptions.push({
        dispose: () => clearInterval(interval)
    });
}

function deactivate() {
    // Cleanup logic if needed
}

module.exports = {
    activate,
    deactivate
};


