#!/usr/bin/env bash
set -euo pipefail

# build dir for flatpak-builder
BUILD_DIR=flatpak-build
MANIFEST=flatpak/town.pony.electron.json

# clean + build
rm -rf "$BUILD_DIR"
flatpak-builder --force-clean --install-deps-from=flathub "$BUILD_DIR" "$MANIFEST"
# install to user so you can run it
flatpak-builder --user --install --force-clean "$BUILD_DIR" "$MANIFEST"
# run
flatpak run town.pony.electron