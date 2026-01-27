#!/bin/zsh

id=$1
cp paiza_prototype.js paiza_${id}.js
touch paiza_${id}.txt
echo "source exe.sh"
