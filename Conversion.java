public class Conversion {
  //Convert 1-4 digit integers into Roman Numerals
    public String solution(int n) {
      String answer = "";
      int[] arr = {(n/1000)%10, (n/100)%10, (n/10)%10, n%10};
      answer += replaceFST(FST(arr[0]), "M", "", "");
      answer += replaceFST(FST(arr[1]), "C", "D", "M");
      answer += replaceFST(FST(arr[2]), "X", "L", "C");
      answer += replaceFST(FST(arr[3]), "I", "V", "X");
      return answer;
    }
  
    //First, Second, Third values
    public String FST(int n){
      switch(n){
          case 1: return "F";
          case 2: return "FF";
          case 3: return "FFF";
          case 4: return "FS";
          case 5: return "S";
          case 6: return "SF";
          case 7: return "SFF";
          case 8: return "SFFF";
          case 9: return "FT";
          default: return "";
      }
    }

    //replace FST with roman numerals
    public String replaceFST(String FST, String F, String S, String T){
        FST = FST.replaceAll("F", F);
        FST = FST.replaceAll("S", S);
        FST = FST.replaceAll("T", T);
        return FST;    
    }
}
