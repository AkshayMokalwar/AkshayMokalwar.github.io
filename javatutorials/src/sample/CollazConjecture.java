package sample;

import java.util.Scanner;

class store{
	int num;
	int total;
	
	store(int number , int total_steps){//this is constructor
		this.num=number;
		this.total=total_steps;
		
	}
}

public class CollazConjecture { 

	public static void main(String[] args) {
		
//		System.out.println("Total step : "+collaz(7,0,0));
		
		Scanner sc= new Scanner(System.in);
		
		store [] arr;
		
		int n;
		System.out.println("Enter the number :");
		n = sc.nextInt();
		
		arr=new store[n];
		
		int i;
		for(i=1;i<=n;i++) {
			arr[i-1]=new store(i,collaz(i,0,0));
			System.out.println(arr[i-1].num+" : "+arr[i-1].total);
		}
		
		System.out.println("Max at "+max_array_position(arr)+" : "+max_array(arr));
//		System.out.println("Max Position: "+);
		
		
	}
	public static int collaz(int number , int step , int stepnumber) {
		if(number==1) {
//			System.out.println("Final Step :"+number);
			return step;
		}
		else {
			if(number%2==0) {
//				System.out.println("Step No "+stepnumber+" : "+number);
				stepnumber++;
				return collaz(number/2,step,stepnumber)+1;
			}
			else {
//				System.out.println("Step No "+stepnumber+" : "+number);
				stepnumber++;
				return collaz((3*number)+1,step,stepnumber)+1;
			}
		}
	}
	
//	for findind maximum
	public static int max_array(store [] array) {
		int max= array[0].total;
		int j;
		for(j=1;j<array.length;j++) {
			if( array[j-1].total>max) {
				max=array[j-1].total;
			}
		}
		return max;
	}

//	for finding max position
	public static int max_array_position(store [] array) {
		int max= array[0].total;
		int j;
		int position=0;
		for(j=1;j<array.length;j++) {
			if( array[j-1].total>max) {
				max=array[j-1].total;
				position=j;
			}
		}
		return position;
	}
	
	
	 
	

}
