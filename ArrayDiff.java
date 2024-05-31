import java.util.*;
import java.util.stream.Collectors;

public class ArrayDiff {
  public static int[] arrayDiff(int[] a, int[] b) {
    List<Integer> list = Arrays.stream(b).boxed().collect(Collectors.toList());
    return Arrays.stream(a).filter(n -> !list.contains(n)).toArray();
  }
}
