# if we sort numbers, they will be sorted in ascending order
my_list = [3, 6, 4, 2, 1, 5]
my_list.sort()
print(my_list)

# If we sort strings, they will be sorted in alphanumeric order
my_list = ['Cabbage', 'Apple', 'Banana', 'Potato']
my_list.sort()
print(my_list)



my_list = ['This is a long sentence', 'Word', 'z']
# What if we want to sort by the length of the string?
# We can use the key attribute to tell the sort function to sort using the len function.
my_list.sort(key = len)
print(my_list)

# If we want to sort in descending order we can pass in the reverse parameter into sort.
my_list = ['This is a long sentence', 'Word', 'z']
my_list.sort(key = len, reverse=True)
print(my_list)
