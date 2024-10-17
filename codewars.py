# def OverlappingRanges(arr):
#     # Unpack the array into respective variables
#     a, b, c, d, x = arr
    
#     # Create sets of the two ranges
#     range1 = set(range(a, b + 1))
#     range2 = set(range(c, d + 1))
    
#     # Find the intersection of the two ranges
#     overlap = range1.intersection(range2)
    
#     # Check if the number of overlapping elements is at least x
#     return "true" if len(overlap) >= x else "false"

# # Example Usage
# print(OverlappingRanges([4, 10, 2, 6, 3]))  # Output: "true


def OverlappingRanges(arr):
    # Extract the ranges and the minimum overlap count
    a, b, c, d, x = arr

    # Calculate the overlap range
    overlap_start = max(a, c)
    overlap_end = min(b, d)
    
    # Check if there's any overlap
    if overlap_start <= overlap_end:
        # Count how many numbers overlap
        overlap_count = overlap_end - overlap_start + 1
        
        # Return "true" if the overlap count is at least x, otherwise "false"
        if overlap_count >= x:
            return "true"

    # If no sufficient overlap, return "false"
    return "false"

    # Your original return statement
    return arr

# Test with input
print(OverlappingRanges([5, 11, 1, 5, 1]))  # Expected output: true
