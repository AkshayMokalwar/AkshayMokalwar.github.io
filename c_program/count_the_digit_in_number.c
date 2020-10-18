#include<stdio.h>
#include<conio.h>
main()
{
    int num , count=0,d,ori;
    printf("hello!");
    printf("Enter the number:");
    scanf("%d",&num);
    ori=num;
    while(num>0)
    {
        d=num%10;
        count=count+1;
        num=num/10;
    }
    printf("%d is a %d digit number.",ori,count);
    getch();
}
