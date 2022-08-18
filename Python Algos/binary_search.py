# Python uses underscores for naming
def binary_search(list,target):
    first=0
    last=len(list) - 1 #same as array.length -1
    while first <= last:
        midpoint = (first + last)//2 
        #//2 is equivalent to Math.floor(/2)
        if list[midpoint] == target:
            return midpoint
        elif list[midpoint] < target:
        #else if has been changed to elif 
            first = midpoint + 1
        else:
            last = midpoint - 1
    return None

def verify(index):
    if index is not None: #equivalent to !=
        print("Target found at index:", index) #print is equivalent to console.log
    else:
        print("Target was not found in list")

numbers=[1,2,3,4,5,6,7,8,9]

result = binary_search(numbers,8)
verify(result)