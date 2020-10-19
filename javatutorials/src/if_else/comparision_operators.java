package if_else;

public class comparision_operators {
	public static void main(String[] args) {
		
		System.out.println(max(8,5,2));
	}
	
	public static double max(double num1 ,double num2 ,double num3) {
		if (num1>num2){
			if (num1>num3) {
				return num1;
			}
			else {
				return num3;
			}
		}
		else {
			if (num2>num3) {
				return num2;
			}
			else {
				 return num3;
			}
		}
		
	}

}
