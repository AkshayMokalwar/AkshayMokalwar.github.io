package patternadvance;

import java.util.Scanner;

public class pattern1 {
	public static void main(String[] arg) {
		Scanner sc = new Scanner(System.in);
		int n= sc.nextInt();
		int i,j;
		for(i=0;i<n;i++) {
//			System.out.println("  ");
			for(j=0;j<n-i-1;j++) {
				System.out.print("  ");
			}
			for(j=0;j<=i;j++) {
				System.out.print("*  ");
			}
			System.out.println("");
		}
	}
}