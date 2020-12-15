package area;

class rectangle {
	int length;
	int width;
	

	public void area(){
		int a;
		a=length*width;
		System.out.println("Area of rectangle is :"+a);
	}
	
	public  void  perimeter() {
		System.out.println("Perimeter of rectangle is :"+2*(length+width));
	}
	
}

class square{
	int length;
	public void area() {
		System.out.println("Area of square is :"+(length*length));
	}
	public void perimeter() {
		System.out.println("Perimeter of square is :"+4*length);
	}
}

class circle{
	int radius;
	int diameter;
	public void area() {
		System.out.println("Area of circle is :"+(Math.PI*radius*radius));
	}
	public void circumference() {
		System.out.println("Circumference Of Cercle is :"+(Math.PI*2*radius));
		
		System.out.println("Diameter is "+(diameter=2*radius));
	}
}

public class Shapes {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
//		Now "shape" is a "object" of class "rectangle"
		
//		rectangle shape1= new rectangle ();
//		shape1.length=5;
//		shape1.width=4;
//		shape1.area();
//		shape1.perimeter();
		
		
//		Now "shape2" is a "object" of class "square"
		
		
//		square shape2= new square();
//		shape2.length=5;
//		shape2.area();
//		shape2.perimeter();
		
		
		
//		Now "shape3" is a "object" of class "circle"
		
//		circle shape3 = new circle();
//		shape3.radius=10;
//		shape3.area();
//		shape3.circumference();
		

	}

}
