def is_palindrome(s):
    return s == s[::-1]

def PalindromeCreator(strParam):
    # Step 1: Check if the string is already a palindrome
    if is_palindrome(strParam):
        return "palindrome"
    
    # Step 2: Try removing one character at a time
    for i in range(len(strParam)):
        modified_str = strParam[:i] + strParam[i+1:]
        if is_palindrome(modified_str):
            return strParam[i]
    
    # Step 3: Try removing two characters
    for i in range(len(strParam)):
        for j in range(i+1, len(strParam)):
            modified_str = strParam[:i] + strParam[i+1:j] + strParam[j+1:]
            if is_palindrome(modified_str):
                return strParam[i] + strParam[j]
    
    # Step 4: If no palindrome can be created, return "not possible"
    return "not possible"

# Keep this function call here
print(PalindromeCreator(input("nmop")))
