#include<stdio.h>
#include<conio.h>
main()
{
    int i,num,ori,sum=0,d;
    for(i=2;i<10;i=i+1)
    {
        num=i;
        ori=i;
        while(num>0)
        {   d=num%10;
            sum=sum+(d*d*d);
            if(sum==ori)
            {   printf("%d",ori);
                num=ori+1;
            }
            else{ num=num/10;}


        }
    }
    getch();
}
