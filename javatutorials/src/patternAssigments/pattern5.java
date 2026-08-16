package patternAssigments;

import java.util.Scanner;

public class pattern5 {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
//		for(int i=0;i<2*n+1;i++) {
//			for(int j=0;j<2*n+1;j++) {
//				if(i==3 || j==3 ||) {
//					System.out.print("  ");
//				}
//				else {
//				System.out.print("* ");
//				}
//			}System.out.println();
//		}
		
		for(int i=1;i<=2*n+1;i++) {
			if(i<=n) {
				for(int j=1;j<=n-i+1;j++) {
					System.out.print("*");
				}
				for(int j=1;j<=i;j++) {
					System.out.print(" ");
				}
				for(int j=1;j<=i;j++) {
					System.out.print(" ");
				}
				for(int j=1;j<=n-i+1;j++) {
					System.out.print("*");
				}
				System.out.println("");
				
			}
			else {
				for(int j=1;j<i-n;j++) {
					System.out.print("*");
				}
				for(int j=1;j<=2*n-i+2;j++) {
					System.out.print(" ");
				}
				for(int j=1;j<=2*n-i+2;j++) {
					System.out.print(" ");
				}
//				
				for(int j=1;j<i-n;j++) {
					System.out.print("*");
				}System.out.println("");
			}
		}
	}

}
