public class SquareDigit {
  public int squareDigits(int n) {
    String squared = "";
    for(int i = 0; i < String.valueOf(n).length(); i++){
        String digit = String.valueOf(n).substring(i, i+1);
        squared+= (int)Math.pow(Integer.parseInt(digit), 2)+"";
    }
    return Integer.parseInt(squared);
  }
}
