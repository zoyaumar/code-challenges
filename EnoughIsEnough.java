import java.util.*;
public class EnoughIsEnough {
	public static int[] deleteNth(int[] elements, int max) {
		ArrayList<Integer> list = new ArrayList<>();
    for(int e : elements){
      int temp = (int) list.stream().filter(i -> i == e).count();
      if(temp < max)
        list.add(e);
    }
		return list.stream().mapToInt(Integer::intValue).toArray();
	}
}
