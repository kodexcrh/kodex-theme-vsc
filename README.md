# KODEX Theme

A Visual Studio Code and VSCodium theme extension with **KODEX Dark** and **KODEX Light**. Version 1.2.0 updates the dark background and adds a personalized status bar identity.

## KODEX palette

- Dark main background: `#080F20`
- Panels and surfaces: `#101C30`
- Secondary surfaces: `#0A1427`
- Brand purple: `#7C3AED`
- Brand pink: `#FF3E81`
- Status bar identity: `Kodex-crh.dev · Crishtian RH`

The supplied `assets/kodex-monogram.svg` is preserved without changing its geometry, colors, or proportions.

## Build and install on Windows / PowerShell

```powershell
Set-Location E:\proyectos\kodex-theme
pnpm install
pnpm exec vsce package
code --install-extension .\kodex-theme-1.2.0.vsix --force
```

Then press `Ctrl+Shift+P`, run `Developer: Reload Window`, and select `Preferences: Color Theme` → `KODEX Dark` or `KODEX Light`.

## Validate

```powershell
node -e "for (const f of ['package.json','themes/kodex-dark-color-theme.json','themes/kodex-light-color-theme.json']) { JSON.parse(require('fs').readFileSync(f,'utf8')); console.log('JSON OK:', f) }"
pnpm exec vsce ls
pnpm exec vsce package
```

The `Kodex-crh.dev · Crishtian RH` identity is added by `extension.js` as a real status bar item. It cannot be added by the color-theme JSON alone, because VS Code themes define colors and styles rather than custom status bar text.

## Marketplace

The `publisher` is set to `kodex-dev` to match your existing local installation. Before publishing, verify that this ID belongs to your Visual Studio Marketplace publisher account and replace the example repository URLs in `package.json` with real URLs or remove those fields.

The 1.2.0 VSIX is not claimed to be packaged or tested yet. Run the validation commands locally and inspect their results.

## License

MIT. See `LICENSE`.


### Status bar identity

The status bar displays `Kodex-crh.dev` and `Crishtian RH` as adjacent items. Hovering either item shows a tooltip with the domain on the first line and the name on the second. VS Code status bar items occupy one horizontal row and cannot be stacked vertically.
