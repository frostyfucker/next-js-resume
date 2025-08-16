#!/usr/bin/env bash
# Usage: ./scripts/export-flowchart.sh
# Requires: rsvg-convert (librsvg) or inkscape

SVG="public/flowchart.svg"
PNG="public/flowchart.png"

if command -v rsvg-convert >/dev/null 2>&1; then
  echo "Using rsvg-convert to create PNG..."
  rsvg-convert -w 1200 -h 560 -o "$PNG" "$SVG"
  echo "Wrote $PNG"
elif command -v inkscape >/dev/null 2>&1; then
  echo "Using inkscape to create PNG..."
  inkscape "$SVG" --export-type=png --export-filename="$PNG" --export-width=1200
  echo "Wrote $PNG"
else
  echo "No supported SVG->PNG tool found. Install librsvg or inkscape."
  exit 1
fi
