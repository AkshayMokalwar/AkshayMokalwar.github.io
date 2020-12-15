package if_else;
import java.util.Scanner;
public class calculator {

	public static void main(String[] args) {
		Scanner keyboardInput = new Scanner(System.in);
		System.out.print("Enter first Number:\n");
		double num1 = keyboardInput.nextDouble();
		System.out.print("Enter operation:\n");
		String op= keyboardInput.next();
		System.out.print("Enter second Number:\n");
		double num2 = keyboardInput.nextDouble();
		
		if (op.equals("+")) {
			System.out.println(num1+num2);
		}
		else if (op.equals("-")) {
			System.out.println(num1-num2);
		}
		else if (op.equals("/")) {
			System.out.println(num1/num2);
		}
		else if (op.equals("*")) {
			System.out.println(num1*num2);
		}
		else if (op.equals("%")) {
			System.out.println(num1%num2);
		}
		else {
			System.out.println("invalid");
		}
		
		
	}

}
