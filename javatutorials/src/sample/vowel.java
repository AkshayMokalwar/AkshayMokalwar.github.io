package sample;

import java.util.Scanner;

public class vowel {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		char a= sc.next().charAt(0);
		
//		System.out.println(a);
//		switch(a) {
//		case 'a':
//			System.out.println("vowel");
//			break;
//		case 'e':
//			System.out.println("vowel");
//			break;
//		case 'i':
//			System.out.println("vowel");
//			break;
//		case 'o':
//			System.out.println("vowel");
//			break;
//		case 'u':
//			System.out.println("vowel");
//			break;
//		default :
//			System.out.println("consonant");
//		}

		

System.out.println((a=='a' || a=='e'|| a=='i'|| a=='o'|| a=='u' ||a=='A' || a=='E'|| a=='I'|| a=='O'|| a=='U')?a+" is a vowel" :a+" is a consonant");

	}

}
