dog = 'cuddly'

if dog == 'hungry':
    owner = 'refilling food bowl.'
    
elif dog == 'thirsty':
    owner = 'refill water bowl'
    
elif dog == 'cuddly':
    owner = 'play tug of war'
    
else:
    owner = 'reading newspaper'
    
print(owner)

# flasy/truthy values
def control_flow(value):
    if value:
        print("yep!")
    else:
        print("nope!")

control_flow(True)

# ternary operators / conditional expressions
age = 1

if age < 2:
    is_baby = 'baby'
else:
    is_baby = 'not a baby'
    
print(f'My baby is of age {age} hence is {is_baby}')
    
