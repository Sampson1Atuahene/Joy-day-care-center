# Joy Day Care Center — Logo Assets

Files in this folder:

- `joy-day-logo.svg` — Full-color primary logo (vector, responsive).
- `joy-day-logo-icon.svg` — Square icon (balloon-only) for favicons/profile images.
- `joy-day-logo-mono.svg` — Monochrome black version for single-color use.

Guidelines

- Colors used:
  - Primary red (balloon): #f05454
  - Accent green (ground): #64c061 — #98e08a gradient
  - Text: #0f1724

- Fonts (suggested): `Poppins` (bold for "JOY DAY", semi-bold for "CARE CENTER"). Fallbacks: Arial, sans-serif.

Exporting PNGs & favicon

- To export PNG versions at various sizes (512, 256, 128): open the `joy-day-logo.svg` in a vector editor (Inkscape, Illustrator) and export as PNG; or use a command-line tool like `rsvg-convert` or `inkscape`.

Example (Inkscape CLI):

```bash
inkscape assets/logo/joy-day-logo.svg --export-type=png --export-width=512 -o assets/logo/joy-day-logo-512.png
```

Creating a favicon (ICO)

- Use a tool like `convert` from ImageMagick:

```bash
convert assets/logo/joy-day-logo-128.png -define icon:auto-resize=64,48,32,16 favicon.ico
```

Accessibility & usage

- Maintain clear space around the logo equal to the height of the "JOY DAY" text.
- Use the monochrome version when printing in a single color or over dark backgrounds.
- Use the icon for social avatars and favicons.

If you’d like, I can export PNGs and an ICO and add them to the repo (tell me desired sizes).