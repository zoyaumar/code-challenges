// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
public class CreatePhoneNumber {
  public static String createPhoneNumber(int[] num) {
    // Your code here!
    return "(" + num[0] + num[1] + num[2] + ") " + num[3] + num[4] + num[5] + "-" + num[6] + num[7] + num[8] + num[9];
  }
}
