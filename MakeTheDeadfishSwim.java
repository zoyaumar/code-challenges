/* Write a simple parser that will parse and run Deadfish.
Deadfish has 4 commands, each 1 character long:
i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.
*/
import java.util.*;
public class DeadFish {
    public static int[] parse(String data) {
        ArrayList<Integer> parsed = new ArrayList<Integer>();
        int x = 0;
        for(char c : data.toCharArray()){
          switch(c){
              case 'i': x++;
              break;
              case 'd': x--;
              break;
              case 's': x=x*x;
              break;
              case 'o': parsed.add(x);
              break;
          }
        }
      return parsed.stream().mapToInt(Integer::intValue).toArray();
    }
}
