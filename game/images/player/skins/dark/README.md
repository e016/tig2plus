Convert all to darken

# install
nix-shell -p imagemagick

# batch replace
mogrify -fill black -colorize 35% *.png

# individual
convert alien.png -fill black -colorize 35% alien-dark.png
