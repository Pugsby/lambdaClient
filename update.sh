#!/usr/bin/env bash
if [ "$(uname -s)" = "Darwin" ]; then
    echo "macOS is not supported."
    exit 1
fi
if [ ! "./package.json" ]; then
    echo "You are in the wrong directory."
    exit
fi
if [ "$EUID" -ne 0 ]
    then echo "Please run as root"
    exit
fi
rm -rf ./lambdaClient
find . -mindepth 1 ! -name "update.sh" -exec rm -rf {} +
git clone https://github.com/pugsby/lambdaClient.git
chmod -R 777 ./lambdaClient
rm ./lambdaClient/update.sh
mv ./lambdaClient/{*,.*} .
rmdir ./lambdaClient
read -n 1 -p "Do you also want to immediately build and install the new version? " answer
[[ $answer =~ ^[Yy]$ ]] && echo "Proceeding." || exit
chmod +x ./install.sh
sudo ./install.sh