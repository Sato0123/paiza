import sys

lines = sys.stdin.read().split("\n")

# get station table
x, y = list(map(int, lines[0].split(" ")))
station = [list(map(int, line.split(" "))) for line in lines[1 : x + 1]]
# print(x, y)
# print(station)

# get routes
start = x + 1
num = int(lines[start])
routes: list[str] = lines[start + 1 : start + 1 + int(lines[start])]
# print(start, num)
# print(routes)

current = [0, 0]
sum_price = 0
# exe routes
for route in routes:
    row, col = map(int, route.split(" "))
    row -= 1  # to index
    col -= 1  # to index
    # vertical move
    cu = station[row][current[1]]
    # horizontal move
    to = station[row][col]
    sum_price += abs(cu - to)
    current = [row, col]

print(sum_price)
