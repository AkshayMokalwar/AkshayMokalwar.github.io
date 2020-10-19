package games;

class store{
	int num;
	int total;
	store(int number , int total_steps) {
		this.num=number;
		this.total=total_steps;
		
	}
}
public class CollatzConjecture {
	
	public static void main(String[] args) {
		store[] arr;
		int n=30;
		arr=new store[n];
		int i=1;
		
		for(i=1;i<=n;i++) {
			arr[i-1]= new store(i,collat(i,0));
			System.out.println(arr[i-1].num+" = "+arr[i-1].total);
		}
		System.out.println("Max : "+max_array(arr));
		System.out.println("Max : "+max_array_posi(arr));

	}
	
	public static int collat(int number,int step) {
		if(number==1) {
//			System.out.println(number);
			return step;
		}
		else {
			if(number%2==0) {
//				System.out.println(number);
				return (collat(number/2,step))+1;
			}
			else {
//				System.out.println(number);
				int temp= 3*number;
				return collat(temp+1,step)+1;
			}
		}
		
	}

	
//	For finding  max number 
	public static int max_array(store[] arr) {
		int max=arr[0].total;
		int i;
		for(i=1;i<=arr.length;i++) {
			if( arr[i-1].total > max ) {
				max= arr[i-1].total;
			}
		}
		return (max);
	}
//	For finding position of max number 
	public static int max_array_posi(store[] arr) {
		int max=arr[0].total;
		int i;
		int posi=0;
		for(i=1;i<=arr.length;i++) {
			if( arr[i-1].total > max ) {
				max= arr[i-1].total;
				posi=i;
			}
		}
		return (posi);
	}
	
	

}
