package patternAssigments;

import java.util.Scanner;

public class pattern3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc= new Scanner( System.in);
		int n= sc.nextInt();
		int num=1;
		for(int i=1;i<=n;i++) {
			for(int j=0;j<=n-i-1;j++) {
				System.out.print("  ");
			}
			for(int j=1;j<=i;j++) {
//				System.out.print(num++ +"   ");
				System.out.print("*   ");
			}System.out.println("");
		}
	}

}
