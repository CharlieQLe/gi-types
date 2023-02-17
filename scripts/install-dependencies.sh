#!/bin/bash

if [ -f /etc/os-release ]; then
    . /etc/os-release
    DISTRO=$NAME
else
    DISTRO=$(uname -s)
fi

case $DISTRO in
    "Fedora Linux")
        sudo dnf install -y \
            at-spi2-atk-devel \
            at-spi2-core-devel \
            atk-devel \
            cairo-devel \
            cairo-gobject-devel \
            dbus-devel \
            gdk-pixbuf2-devel \
            glib2-devel \
            glibc-devel \
            gnome-autoar-devel \
            gobject-introspection-devel \
            gsettings-desktop-schemas-devel \
            graphene-devel \
            graphite2-devel \
            gstreamer1-devel \
            gtk3-devel \
            gtk4-devel \
            gtksourceview5-devel \
            harfbuzz-devel \
            javascriptcoregtk5.0-devel \
            json-glib-devel \
            libadwaita-devel \
            libarchive-devel \
            libical \
            libical-glib \
            libmanette-devel \
            libsoup3-devel \
            libxml2-devel \
            pango-devel \
            tracker-devel \
            webkit2gtk5.0-devel;
        ;;

    *)
        echo "Downloading dependencies for $DISTRO is currently unsupported!"
        ;;
esac