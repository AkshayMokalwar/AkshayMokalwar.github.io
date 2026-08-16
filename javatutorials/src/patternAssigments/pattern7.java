package patternAssigments;

import java.util.Scanner;

public class pattern7 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc= new Scanner( System.in);
		int n= sc.nextInt();
		for(int i=1;i<=n;i++) {
			
			for(int j=1;j<=n-i;j++) {
				System.out.print("  ");
			}System.out.print(i+" ");
			for(int j=2;j<i;j++) {
				System.out.print("0 ");
			}
			for(int j=1;j<i;j++) {
				System.out.print("0 ");
			}
			if(i>1)
				{System.out.print(i+" ");}
			System.out.println("");
			

		}
	}

}
