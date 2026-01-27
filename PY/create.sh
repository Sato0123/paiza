#!/bin/zsh

id=$1
cp paiza_prototype.py paiza_${id}.py
touch paiza_${id}.txt
echo "source exe.sh"
