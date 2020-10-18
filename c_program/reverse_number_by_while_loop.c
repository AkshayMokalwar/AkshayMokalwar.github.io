#include<stdio.h>
#include<conio.h>
main()
{   int num,d,ori,rev,sum=0;
    printf("Hello World");
    printf("Enter the number  :");
    scanf("%d",&num);
    printf("the number is %d",num);
    ori=num;
    while(num>0)
    {   d=num%10;
        d=d*10;
        sum=sum+d;
        sum=sum*10;
        rev=sum/100;
        num=num/10;
    }
    printf("\n the reverse of number %d is %d",ori,rev);
    getch();
}
