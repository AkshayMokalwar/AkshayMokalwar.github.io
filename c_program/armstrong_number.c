#include<stdio.h>
#include<conio.h>
main()
{
    int num , sum=0,d,ori,a;
    printf("hello!");
    printf("Enter the number:");
    scanf("%d",&num);
    ori=num;
    while(num>0)
    {
        d=num%10;
       sum=sum+(d*d*d);
       if(sum==ori)
       {
           printf("the number is armstrong number");
       }
       num= num/10;
    }
    getch();
}
