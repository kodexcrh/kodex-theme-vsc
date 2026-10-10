# KODEX Theme

Extensión de tema para Visual Studio Code y VSCodium con dos variantes: **KODEX Dark** y **KODEX Light**. La versión 1.2.0 incorpora el fondo oscuro actualizado y una identidad personal en la barra de estado.

## Paleta KODEX

- Fondo principal oscuro: `#080F20`
- Paneles y superficies: `#101C30`
- Superficies secundarias: `#0A1427`
- Morado de marca: `#7C3AED`
- Rosa de marca: `#FF3E81`
- Identidad en la barra de estado: `Kodex-crh.dev · Crishtian RH`

El archivo `assets/kodex-monogram.svg` conserva el SVG original proporcionado, sin modificar su geometría, colores ni proporciones.

## Instalar desde el código fuente (Windows / PowerShell)

```powershell
Set-Location E:\proyectos\kodex-theme
pnpm install
pnpm exec vsce package
code --install-extension .\kodex-theme-1.2.0.vsix --force
```

Después, en VS Code pulsa `Ctrl+Shift+P`, ejecuta `Developer: Reload Window` y selecciona `Preferences: Color Theme` → `KODEX Dark` o `KODEX Light`.

## Validar

```powershell
node -e "for (const f of ['package.json','themes/kodex-dark-color-theme.json','themes/kodex-light-color-theme.json']) { JSON.parse(require('fs').readFileSync(f,'utf8')); console.log('JSON OK:', f) }"
pnpm exec vsce ls
pnpm exec vsce package
```

La identidad `Kodex-crh.dev · Crishtian RH` se añade mediante `extension.js` como un elemento real de la barra de estado. El texto no forma parte del archivo JSON de colores porque los temas de VS Code solo definen colores y estilos.

## Marketplace

El `publisher` se ha establecido en `kodex-dev` para coincidir con la instalación local que ya realizaste. Antes de publicar, confirma que ese identificador pertenece a tu cuenta de Visual Studio Marketplace y reemplaza las URL de ejemplo del repositorio en `package.json` por URL reales o elimina esos campos.

No se afirma que el VSIX 1.2.0 haya sido empaquetado o probado todavía: ejecuta los comandos de validación en tu equipo y revisa el resultado.

## Licencia

MIT. Consulta `LICENSE`.


### Identidad de la barra de estado

La barra muestra primero `Kodex-crh.dev` y después `Crishtian RH`, con los colores de marca sólidos `#FF3E81` y `#7C3AED`. Al pasar el cursor, el tooltip muestra el dominio en la primera línea y el nombre en la segunda. El tema Dark usa superficies opacas; los colores hexadecimales de ocho dígitos con canal alfa se reemplazaron por colores sólidos. La barra de estado de VS Code es horizontal y no permite apilar dos elementos en líneas separadas.
