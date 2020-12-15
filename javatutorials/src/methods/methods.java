package methods;

public class methods {
	public static void main(String[] args) {
		
//		-------------------------
//		System.out.println("Before Method Calls.");
//		sayHi();
//		System.out.println("After Method Calls.");
		
		
//		-------------methods with string parameter---------------

//		sayHito("Mohit");
//		sayHito("Jayant");
		

//		String myname="Akshay";
//		sayHito(myname);
		
//		---------------methods with two parameters parameter--------- 
		
		sayHito("akshay",19);
		sayHito("akshay");
		
	}
	
	
	public static void sayHi()
	{
		System.out.println("Hello ! User");
		System.out.println("How are you ?");
	}
	
	
	public static void sayHito( String name) {
		System.out.println("Hello ! "+name);
		
	}
	
	public static void sayHito( String name ,int age) {
		System.out.println("Hi ! "+name+" Your age is "+age);		
	}
}
