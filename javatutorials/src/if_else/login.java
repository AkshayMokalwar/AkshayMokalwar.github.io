package if_else;
import java.util.Scanner;
public class login {

	public static void main(String[] args) {
		String name="akshay";
		String pass="12345";
		
		Scanner keyboardInput = new Scanner(System.in);
		System.out.print("Enter Username :");
		String username= keyboardInput.next();
		System.out.print("Enter Passwrod :");
		String password = keyboardInput.next();
		
		
		
		if(username.equals(name) && password.equals(pass)) {
			System.out.println("Login  Successfull !");
		}else {
			System.out.println(" wrong username or password or both !");
		}
		
		
	}

}
