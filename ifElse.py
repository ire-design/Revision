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