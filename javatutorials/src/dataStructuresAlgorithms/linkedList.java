package dataStructuresAlgorithms;
class linkedlist {
	int data;
	int nextnode;
	void creartelinkedlist( int data , int next){
		if(next==0) {
			this.data=data;
			this.nextnode=(Integer) null;
		}
		else {
			this.data=data;
			this.nextnode=next;
			
		}
		
	}
}
public class linkedList {
	public static void main(String[] args) {
		System.out.println("Enter linked list!");
		linkedlist list = new linkedlist();
		list.creartelinkedlist(5,0);
		System.out.println(list);
		
		
	}

}
