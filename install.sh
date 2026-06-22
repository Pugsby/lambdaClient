if [ "$EUID" -ne 0 ]
    then echo "Please run as root"
    exit
fi
if [ ! "./package.json" ]; then
    echo "You are in the wrong directory."
    exit
fi
npm install electron-builder --save-dev
if [ ! -d "./dist" ]; then
    npm run dist
fi
if [ -d "/opt/ponytownlambdaclient" ]; then
    read -n 1 -p "Lambda Client already exists, update? (y/n) " answer
    [[ $answer =~ ^[Yy]$ ]] && echo "Proceeding." || exit
fi
rm -rf /opt/ponytownlambdaclient
rm -f /usr/local/bin/ponytown
cp -r ./dist/linux-unpacked /opt/ponytownlambdaclient
ln -s /opt/ponytownlambdaclient/ponytown /usr/local/bin/ponytown
chmod +x /usr/local/bin/ponytown
if [ ! -d "~/.local/share/applications/ponytown.desktop" ]; then
    mkdir -p ~/.local/share/applications
    mkdir -p /usr/share/pixmaps
    cp ./extra/ponytown.desktop ~/.local/share/applications/ponytown.desktop
    cp ./extra/logo.png /usr/share/pixmaps/logo.png
fi
echo Pony Town is now installed, it should be visible in your app menu if you have one.