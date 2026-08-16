package patterns;

import java.util.Scanner;

public class pattern3 {
	public static void main( String[] arg) {
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		int i ,j;
		for(i=0;i<n;i++) {
			for(j=0;j<(i-1+1);j++) {
				System.out.print("  ");
			}
			for(j=1;j<=n-i;j++) {
				System.out.print("* ");
			}
			System.out.println("");
		}
	}

}
