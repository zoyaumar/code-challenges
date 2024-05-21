public class BitCounting {
	public static int countBits(int n){
		// return Integer.toBinaryString(n).replace("0","").length();
    		// OR
    		return Integer.bitCount(n);
	}
}
