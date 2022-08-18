# Python allows for mixed data types in lists

new_list = [1,2,3] 
result = new_list[0]
if 1 in new_list: print(True) #return can be put on same line
# the 1 is referring to value in list, not key

for n in new_list: 
    # n is referring to value in list
    if n== 1:
        print(True)
        break
    # 
