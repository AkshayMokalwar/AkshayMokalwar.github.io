package input;
import java.util.Scanner;
public class number {
	public static void main(String[] args) {
		Scanner keyboardInput =new Scanner(System.in);
		
		System.out.print("Enter integer number:");
		int number= keyboardInput.nextInt();
		System.out.println("Your number is "+number);
		
//		---------Double Input-----------
		System.out.print("Enter double number:");
		double number1 = keyboardInput.nextDouble();
		System.out.println("Your number is "+number1);
	}

}
