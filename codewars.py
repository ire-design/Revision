def OverlappingRanges(arr):
    # Unpack the array into respective variables
    a, b, c, d, x = arr
    
    # Create sets of the two ranges
    range1 = set(range(a, b + 1))
    range2 = set(range(c, d + 1))
    
    # Find the intersection of the two ranges
    overlap = range1.intersection(range2)
    
    # Check if the number of overlapping elements is at least x
    return "true" if len(overlap) >= x else "false"

# Example Usage
print(OverlappingRanges([4, 10, 2, 6, 3]))  # Output: "true
