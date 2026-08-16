package sample;

class student{
	int student_rollnumber;
	String student_fname;
	String student_lname;
	double student_per;
	student(int rollnumber, String fname,String lname, double percentage){
		this.student_rollnumber=rollnumber;
		this.student_fname=fname;
		this.student_lname=lname;
		this.student_per=percentage;
	}
	
}
public class school {
	public static void main(String[] args) {

		student [] std;
		std=new student[2];
		std[0]=new student(1901,"vikas","dube",70.53);
		std[1]=new student(1902,"neha","dubpia",60);
		for(int i=0;i<std.length;i++) {
		System.out.println(std[i].student_rollnumber+"	"+std[i].student_fname+
				"	"+std[i].student_lname+"	"+std[i].student_per+"%");
	}
	}
}
