package methods;

public class methods_return {
	public static void main(String[] args) {
		double a=3;
		System.out.println(cube(a));
		
	}
//	public static void ----> No return
//	public static int  -----> return type is int
//	public static double ----> return type is double
//	public static string ----> return type is string
//	public static boolean ----> return type is boolean
	public static double cube(double num) {
		System.out.println("top");
		return num*num*num; 
	}
}
