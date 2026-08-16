package if_else;
import java.util.Scanner;
public class turnary_operator 
{

	public static void main(String[] args) 
	{
		Scanner keyboardInput = new Scanner(System.in);
		System.out.println("Enter a b c :");
		int a= keyboardInput.nextInt();
		int b= keyboardInput.nextInt();
		int c= keyboardInput.nextInt();
		
//		if(a>=b) 
//		{
//			if(a>=c) {System.out.println("Largest Number is :"+a);}
//			else{System.out.println("Largest Number is :"+c);}
//		}
//		else 
//		{
//			if(b>=c) {System.out.println("Largest Number is :"+b);}
//			else {System.out.println("Largest Number is :"+c);}
//		}
		
//		-----------------or----------------
		
		System.out.println("Largest number is "+ ((b>c)?((b>a)?b:a):((c>a)?c:a)));
		
		
//		System.out.println("Largest number is "+ ((b>a)?b:a));
		
	}
}
