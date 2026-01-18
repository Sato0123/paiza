#!/bin/zsh

id=$1
cp paiza_prototype.ts paiza_${id}.ts
touch paiza_${id}.txt
echo "source exe.sh"
