package patternAssigments;

import java.util.Scanner;

public class pattern8 {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		int n= sc.nextInt();
		for(int i=1;i<=n+1;i++) {
					int num=1;
					for(int j=1;j<=n-i+1;j++) {
						System.out.print("  ");
						num++;
					}
//					System.out.print(n-i+1+"");
					for(int j=1;j<i;j++) {
						System.out.print(num+++" ");
					}System.out.print("0 ");
					for(int j=1;j<i;j++) {
						System.out.print(n-j+1+" ");
					}
					System.out.println("");
		
				}

	}

}
