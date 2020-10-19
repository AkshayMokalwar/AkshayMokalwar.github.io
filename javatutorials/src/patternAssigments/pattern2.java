package patternAssigments;

import java.util.Scanner;

public class pattern2 {
	public static void main(String[] arg) {
		Scanner sc = new Scanner(System.in);
		int n=sc.nextInt();
		for(int i=1;i<=n;i++) {
			for(int j=2;j<=i;j++) {
				System.out.print("    ");
			}
			for(int j=1;j<=n-i+1;j++) {
				System.out.print("* ");
			}System.out.println("");
		}
	}
}
