package patterns;

import java.util.Scanner;

public class pattern1 {
	public static void main( String[] arg) {
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		int i ,j;
		for(i=0;i<n;i++) {
			for(j=0;j<n;j++) {
				System.out.print("* ");
			}
			System.out.println("");
		}
	}

}
