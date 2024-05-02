import java.util.stream.IntStream;

public class Sum {
  public int GetSum(int a, int b) {
    return IntStream.rangeClosed(Math.min(a, b), Math.max(a, b)).sum();
  }
}
