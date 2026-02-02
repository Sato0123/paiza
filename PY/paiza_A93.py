import sys

lines = sys.stdin.read().split("\n")
# init
x, y, num = map(int, lines[0].split(" "))
field = [list(map(int, x.split(" "))) for x in lines[1 : x + 1]]
# print(x, y, num)
# print(field)
# search
