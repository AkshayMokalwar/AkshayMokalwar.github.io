package linkedlist;
import java.util.Scanner;
class createnode 
{
}
public class linkedlist {

	public static void main(String[] args) {
		Scanner sc= new Scanner(System.in);
		int n= sc.nextInt();
		int r=Isprime(n);
		if(r<1) {
			System.out.println("Number not is prime ");
		}
		else {
			System.out.println("Number is  prime ");
		}
		

	}
	public static int Isprime(int n) {
		int count=0;
		for(int i=1;i*i<=n;i=i+2) {
			if(n%i==0) {
				count=count+1;
			}
		}
		return count;
	}
	
	

}
