package array;

import com.sun.tools.javac.code.Attribute.Array;

class student {
	String name;
	int roll;
	student( String name,int roll) 
    { 
        this.roll = roll; 
        this.name = name; 
    }
}
public class student_info {
	public static void main(String [] args ) {
		student[] arr;
		arr= new student[4];
		arr[0]=new student("Akshay",4);
		
		arr[1] = new student("vaibhav",2);
		arr[2] = new student("Mohit",3);
		arr[3] = new student("Mohan",1);
		int i;
		Array.sort()
		for (i=0;i<arr.length;i++) {
			System.out.println(arr[i].name+" "+arr[i].roll);
		}
		
		
		
	}

}
