def search_pivot(self, nums: List[int], target: int) -> int:
    start = 0 
    end = len(nums) - 1
    while start < end:
        mid = (end + start) // 2
        if nums[mid] < nums[end]:
            end = mid 
        else:
            start = mid + 1

    if target > nums[-1]:
        end = start - 1
        start = 0 
    else:
        end = len(nums) - 1
    while start <= end:
        mid = (end + start) // 2
        if nums[mid] < target:
            start = mid + 1
        elif nums[mid] > target:
            end = mid - 1
        else:
            return mid 
    return -1 
