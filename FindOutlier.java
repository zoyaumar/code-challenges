import java.util.*;
public class FindOutlier {
  static int find(int[] integers) {
    int[] a = Arrays.stream(integers).filter(n -> n%2==0).toArray();
    int[] b = Arrays.stream(integers).filter(n -> n%2!=0).toArray();
    if(a.length==1) return a[0];
    else return b[0];
  }
}
