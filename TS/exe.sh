tsc paiza_${id}.ts
echo "node paiza_${id}.js < paiza_${id}.txt >output.txt 2>&1"
node paiza_${id}.js < paiza_${id}.txt >output.txt 2>&1
