import sys

lines = sys.stdin.read().split("\n")
h_num = int(lines[0])
p_num = int(lines[h_num + 1])
balls = list(map(int, lines[1 : h_num + 1]))
passes = lines[h_num + 2 : h_num + 2 + p_num]
# print(balls)
# print(passes)

for p in passes:
    f, t, b = map(int, p.split(" "))
    f -= 1  # to index
    t -= 1  # to index
    b = min(b, balls[f])
    # print(f, t, b)
    balls[f] -= b
    balls[t] += b
print(*balls, sep="\n")
