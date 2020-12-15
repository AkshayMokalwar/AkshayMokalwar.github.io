package array;

import java.util.Scanner;
public class Array_1d {
	public static void main(String[] args) {
		Scanner keyboardInput = new Scanner(System.in);
		
//		int intArray[];    declaring array
//		intArray = new int[20];   allocating memory to array
		
//		on dimensional array declaration ;
		
//		int array[];
//		array=new int[3];
//		int i;
//		for (i=0;i<3;i++) {
//			array[i]= keyboardInput.nextInt();
//		}
//		for(i=0;i<3;i++) {
//			System.out.print(array[i]+" ");	//print element in same line
//			
//		}
//		System.out.println("\n");
//		for(i=0;i<3;i++) {
//			System.out.println(array[i]+" ");	//print element in same line
//			
//		}
		
		

//		int array2[];
//		int size;
//		System.out.print("Enter the size of aray :");
//		size= keyboardInput.nextInt();
//		array2 = new int [size];
//		int i;
//		System.out.println("Enter the element of aray :");
//		for (i=0;i<size;i++) {
//			array2[i]= keyboardInput.nextInt();
//		}
//		System.out.print("Your aray is :\n");
//		for (i=0;i<size;i++) {
//			System.out.print("\t"+array2[i]);
//		}
//		
//		
		
		
		int[] array2= {1,9,80,7,6,5,4,3,2,1};
		System.out.println("max value in array : "+max_array(array2));
		System.out.println( "positiona of max :"+max_array_posi(array2));
		System.out.println( "min  value in array :"+min_array(array2));
		System.out.println("positiona of min :"+ min_array_posi(array2));
//		Math.min(array);
//		System.out.println(Math.min(array));
	}
	public static int max_array(int[] array) {
		int max=array[0];
//		int pos_max=0;
		int i;
		for(i=1;i<=array.length;i++) {
			if( array[i-1] > max ) {
				max=array[i-1];
//				pos_max=i;
			}
		}
		return (max);
	}
	public static int max_array_posi(int[] array) {
		int max=array[0];
		int pos_max=0;
		int i;
		for(i=1;i<=array.length;i++) {
			if( array[i-1] > max ) {
				max=array[i-1];
				pos_max=i;
			}
		}
		return (pos_max);
	}
	public static int min_array(int[] array) {
		int min=array[0];
//		int pos_max=0;
		int i;
		for(i=1;i<=array.length;i++) {
			if( array[i-1] < min ) {
				min=array[i-1];
//				pos_max=i;
			}
		}
		return (min);
	}
	public static int min_array_posi(int[] array) {
		int min=array[0];
		int pos_min=0;
		int i;
		for(i=1;i<=array.length;i++) {
			if( array[i-1] < min ) {
				min=array[i-1];
				pos_min=i;
			}
		}
		return (pos_min);
	}

}
