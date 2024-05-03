import java.util.*;

public class FindOdd {
	public static int findIt(int[] a) {
    for(int n : a)
      {
        if(Arrays.stream(a).filter(d -> d == n).count()%2==1)
          return n;
      }
    return 0;
  }
}
