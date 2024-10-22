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
    
# try/except statements
def divide(num1, num2):
    try:
        quotient = num1 / num2
        print(quotient)
    except ZeroDivisionError:
        print("Error: num2 cannot be equal to 0")
    except TypeError:
        print("Error: input must be of type int or float")
    # finally:
    #     print("Isn't division fun?")
        
divide(16, 0)
divide(10, 2)
divide(15.2, 2)