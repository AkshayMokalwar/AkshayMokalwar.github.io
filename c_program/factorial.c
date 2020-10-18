#include<stdio.h>
#include<conio.h>
main()
{
    int num,fact=1,i=1;
    printf("Enter the number:");
    scanf("%d",&num);
    printf("the number is %d",num);
    while(i<=num)
    {   fact=fact*i;
        i=i+1;
    }
    printf("\n the factorial of %d! = %d",num,fact);
    getch();
}
