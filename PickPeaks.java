import java.util.*;

public class PickPeaks {
    public static Map<String,List<Integer>> getPeaks(int[] arr) {
      List<Integer> pos = new ArrayList<Integer>();
      List<Integer> peaks = new ArrayList<Integer>();
      for(int i=1; i<arr.length-1; i++){
        if(arr[i-1]<arr[i] && Arrays.stream(arr, i, arr.length).distinct().count() > 1){
          if(arr[i] > Arrays.stream(arr, i, arr.length).distinct().skip(1).findFirst().getAsInt()){
            pos.add(i);
            peaks.add(arr[i]);
          }
        }
      }
      return Map.of("pos", pos, "peaks", peaks);
    }
}
