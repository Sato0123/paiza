import sys

lines = sys.stdin.read().split("\n")
# init
num = int(lines[0])
result = list(map(int, lines[1 : num + 1]))
# print(num)
# print(result)

# sort by score
list_res = [[i, result[i]] for i in range(num)]
list_res.sort(key=lambda x: x[1], reverse=True)
# ranking
rank = 0
rank_dup = 0
score = -1
for i in range(num):
    current = list_res[i][1]
    if current == score:
        rank_dup += 1
    else:
        rank += 1 + rank_dup
        rank_dup = 0
    list_res[i][1] = rank
    score = current
# sort by index
list_res.sort()
print(*[x[1] for x in list_res], sep="\n")
