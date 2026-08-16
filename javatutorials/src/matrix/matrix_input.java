package matrix;

import java.util.Scanner;
public class matrix_input {
	public static void main(String[] args) {


		Scanner keyboardInput = new Scanner(System.in);
		
		
//		
		
		int matrix[][];
		matrix=new int[3][3];
		int i;
		int j;
		for (i=0;i<3;i++) {
			for (j=0;j<3;j++) {
				matrix[i][j]= keyboardInput.nextInt();
			}
		}
		
		for (i=0;i<3;i++) {
			for (j=0;j<3;j++) {
				System.out.print("\t"+matrix[i][j]);
			}
			System.out.print("\n");
		}
		
		
	}
}
