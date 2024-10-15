class Solution {
    public static int removeDuplicates(int[] nums) {
        int k = (int)(Arrays.stream(nums).distinct().count());
        int[] arr = Arrays.copyOf(Arrays.stream(nums).distinct().toArray(), nums.length);
        
        for(int i = 0; i < nums.length; i++)
            nums[i] = arr[i];
        
        return k;
    }
}
