package input;

import java.util.Scanner;

public class string {
	public static void main(String[] args) {
		Scanner keyboardInput = new Scanner(System.in);
		System.out.print("Enter Your Name : ");
		String Name=keyboardInput.nextLine();
		System.out.println("Hi "+Name);
	}
}
