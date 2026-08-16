package games;

import java.util.Scanner;
public class guessWorld {

	public static void main(String[] args) {
		Scanner keyboardInput =new Scanner(System.in);
		String SecretWord="Hi";
		String guessWord="";
		int guessCount=0;
		int guessLimit=3;
		boolean outOfGuess=false;
		
		while(!guessWord.equals(SecretWord) && !outOfGuess) {
			if(guessCount<guessLimit) {
				System.out.println("Enter the guess :");
				guessWord=keyboardInput.nextLine();
				guessCount++;
			}
			else {
				outOfGuess=true;
			}
			
		}
		if (outOfGuess) {
			System.out.println("You Loose ! Limit ends.");
		}else {
			System.out.println("You win !");
		}
		
		
		
	}

}
