public class Vowels {

  public static int getCount(String str) {
    char[] letters = str.toCharArray();
    int count = 0;
    for(char c : letters){
      if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u')
        count++;
    }
    return count;
  }

}
