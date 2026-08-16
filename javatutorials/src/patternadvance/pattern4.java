package patternadvance;

import java.util.Scanner;

public class pattern4 {
	public static void main( String[] arg) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int i ,j;
		
		
		System.out.println("* ");
//		edge cases
		if(n>1) {
			for(i=2;i<=n-1;i++) {
				System.out.print("* ");
				for(j=1;j<=i-2;j++) {
					System.out.print("   ");
				}System.out.print("* ");
				System.out.println("");
			}
			for(i=1;i<=n;i++) {
				
					System.out.print("*  ");
				}
		}
		
			
			
		
	}

}
