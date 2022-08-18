# Practicing algos in python via FreeCodeCamp

# functions use "def" to initialize
#note that py uses indentations and ":" in place of "{"
def linear_search(list,target):
        # range is inclusive of the first param, exclusive of second param
    for i in range(0,len(list)):
        # the second param is a built-in len(list) which gives the length of list/array
        if list[i] == target:
            # 
            return i
    return None

def verify(index):
    if index is not None: #equivalent to !=
        print("Target found at index:", index) #print is equivalent to console.log
    else:
        print("Target was not found in list")

numbers=[1,2,3,4,5,6,7,8,9]
# lists are arrays and are declared without const or let

result = linear_search(numbers, 12)
# function can be called via declaring a variable
verify (result)
# function can be called by just calling function name