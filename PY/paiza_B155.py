import sys

# init
lines = sys.stdin.read().split("\n")

# get var
x, y, piece = map(int, lines[0].split(" "))

# get stamps
stamps: list[list[str]] = list()
for i in range(0, piece):
    stamp: list[str] = list()
    for j in range(1, x + 1):
        stamp.append(lines[(i * x) + j])
    stamps.append(stamp)
# print(stamps)

# make result
start = x * piece + 1
height, width = map(int, lines[start].split(" "))
# print(height, width)

start += 1
for h in range(height):
    # stamp の高さ
    for s in range(x):
        line = ""
        # stampの種類
        for w in map(int, lines[start + h].split(" ")):
            line += stamps[w - 1][s]
        print(line)
