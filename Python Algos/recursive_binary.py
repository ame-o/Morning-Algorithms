# Python has recursion limits and prefers iterative code
def recursive_binary_search(list,target):
    if len(list) ==0:
        return False #false is capitalized
        # since recursion returns modified list, it will also stop the function if target is not found in list
    else:
        midpoint = len(list)//2 #Math.floor(array.length/2)

        if list[midpoint] == target:
            return True
        else:
            if list[midpoint] < target:
                return recursive_binary_search(list[midpoint+1:],target)
                # slice operation to create new list, 1st param is midpoint, 
                # and no 2nd param after":" means it goes to the end of the list
            else:
                return recursive_binary_search(list[:midpoint],target)
                #no 1st param before ":" means new list is created from the first index
                # to the 2nd param, midpoint

def verify(result):
    print("Target found: ", result)

numbers = [1,2,3,4,5,6,7,8.9,10]
result = recursive_binary_search(numbers,12)
verify(result)
