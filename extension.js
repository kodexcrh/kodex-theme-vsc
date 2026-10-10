const vscode = require("vscode");

function activate(context) {
  // VS Code's status bar is a single horizontal row. The domain is shown first;
  // hovering it reveals the creator's name on the line below.
  const brand = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    1000
  );
  brand.text = "$(globe) Kodex-crh.dev";
  brand.tooltip = "Kodex-crh.dev\nCrishtian RH";
  brand.backgroundColor = "#FF3E81";
  brand.color = "#FFFFFF";
  brand.show();

  const creator = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    999
  );
  creator.text = "Crishtian RH";
  creator.tooltip = "Kodex-crh.dev\nCrishtian RH";
  creator.backgroundColor = "#7C3AED";
  creator.color = "#FFFFFF";
  creator.show();

  context.subscriptions.push(brand, creator);
}

function deactivate() {}

module.exports = { activate, deactivate };
