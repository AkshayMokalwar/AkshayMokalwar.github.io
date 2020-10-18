#include<conio.h>
#include<stdio.h>
main()
{   int a[10],i,cp=0,cn=0,co=0,max,loc_max,low,loc_low,num,cnum=0,sum=0;
    for(i=0;i<=9;i++)
    {
        printf("Enter the value:");
        scanf("%d",&a[i]);
    }
    printf("Enter the digit:");
    scanf("%d",&num);
    for(i=0;i<=9;i++)
    {
        if(a[i]>0)
        {
            cp=cp+1;
        }
        if(a[i]==num)
        {
            cnum=cnum+1;
        }
        if(a[i]<0)
        {   cn=cn+1;

        }
         if(a[i]==0)
            {co=co+1;}
    }
    max=a[0];
    loc_max=0;
    low=a[0];
    loc_low=0;
    for(i=0;i<=9;i++)
    {    sum=a[i]+sum;
         if(a[i]>max)
            {
                max=a[i];
                loc_max=i;
            }
        if(a[i]<low)
            {
                low=a[i];
                loc_low=i;
            }

    }
    printf("\n sum of the array is %d ",sum);
    printf("\ndigit %d is present %d times in the given number",num,cnum);
    printf("\nthe largest number is %d ",max);
    printf("\nposition of lagest numbers is a[%d] ",loc_max);
    printf("\nthe smallest number is %d ",low);
    printf("\nposition of smallest numbers is a[%d] ",loc_low);
    printf("\nnumbers cantain %d positive number",cp);
    printf("\nnumbers cantain %d negative number",cn);
    printf("\nnumbers cantain %d zero number",co);
    getch();

}
