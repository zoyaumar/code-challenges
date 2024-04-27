public class Kata {
  public static String highAndLow(String numbers) {
    String[] nums = numbers.split(" ");
    int lowest = Integer.MAX_VALUE;
    int highest = Integer.MIN_VALUE;
    for(String n : nums){
      int temp = Integer.parseInt(n);
      if(temp>highest) highest = temp;
      if(temp<lowest) lowest = temp;
    }
    return highest +" "+ lowest;
  }
}
