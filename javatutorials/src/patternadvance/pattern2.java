package patternadvance;

import java.util.Scanner;

public class pattern2 {
	public static void main(String[] arg) {
		Scanner sc = new Scanner(System.in);
		int n= sc.nextInt();
		int i,j;
		int num=1;
		for(i=0;i<n;i++) {
//			System.out.println("  ");
			for(j=0;j<n-i-1;j++) {
				System.out.print("  ");
			}
			for(j=0;j<=i;j++) {
				System.out.print(num++ +"  ");
			}
			System.out.println("");
		}
	}
}
