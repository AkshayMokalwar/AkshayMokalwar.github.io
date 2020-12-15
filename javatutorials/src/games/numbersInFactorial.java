package games;



public class numbersInFactorial {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		int temp=1;
		System.out.println(count(4));
		

	}

	public static int count(int number) {
		
		if(number==1 || number==0) 
		{	int k=1;
			return k;
		}
		if(number==2)
		{	int k=2;
			return k;
		}
		
		else {
			
			return number*count(number-1);
		}
		
		
			
		
	}
}
