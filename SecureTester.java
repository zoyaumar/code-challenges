public class SecureTester{
  public static boolean alphanumeric(String s){
    if(s.equals("")) return false;
    for(char c : s.toUpperCase().toCharArray()){
     if(!((c > 64 && c < 91) || (c > 47 && c < 58)))
       return false;
    }
    return true;
  }
}
