#!/bin/sh
sudo mkdir /usr/share/lightdm-webkit/themes/min
sudo cp * /usr/share/lightdm-webkit/themes/min
echo " "
echo "Theme installed, please add 'webkit_theme = min' to /etc/lightdm/lightdm-webkit2-greeter.conf to enable"
echo " "
