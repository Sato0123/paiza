line = [input() for _ in range(int(input()))]

res = int(line[0]) - 1

for i in range(1, len(line)):
    cu = int(line[i])
    prev = int(line[i - 1])
    if cu >= prev:
        res += cu - prev
    else:
        res += prev - cu

print(res)
