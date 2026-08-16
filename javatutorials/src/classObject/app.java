package classObject;

import java.util.Scanner;

public class app {
	public static void main(String[] args )
	{
		Scanner sc=new Scanner(System.in);
		
		System.out.println("Hello world");
		int numberofstudent=3;
		student [] mystudent = new student[numberofstudent];
		int i;
		for(i=0;i<numberofstudent;i++) {
			System.out.println("Enter First name :");
			String fname= sc.next();
			System.out.println("Enter Last name :");
			String lname= sc.next();
			System.out.println("Enter Marks :");
			Double mark= sc.nextDouble();
			
			mystudent[i]= new student(i,fname,lname,mark);
		}
		for (i=0;i<numberofstudent;i++){
			System.out.println(mystudent[i].firstName);
		}
		
	}
	
}
