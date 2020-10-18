#include<stdio.h>
#include<conio.h>
void main()
{
    int i,num,d,sum=0,ori;
    printf("hello!");
    while(i<=100000)
    {   num=i;
        ori=i;
        d=num%10;
        sum=sum+(d*d*d);
            if(sum==ori)
            {
                printf("\%d",sum);
            }
        num=num/10;
    }
    getch();
}
