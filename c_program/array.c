#include<conio.h>
#include<stdio.h>
main()
{
    int menu,c;
    float avg;
      c=1;
      while(c==1)
       {    int a[10],i,cp=0,cn=0,co=0,max,loc_max,low,loc_low,num,cnum=0,sum=0,j=0,k,p[10],ip,r;

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
                    k=j;
                    p[j]=i;
                    j=j+1;


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
            avg=sum/10;
            menu=1;
            while(menu==1)
            {
                printf("1)find the sum of the array         2)find the lagest number and position");
                printf("\n3)find the average of the array     4)find the smallest number and position");
                printf("\n5)findhow many times the given digit present in the array");
                printf("\n6)find the total positive ,negative and zeros present in the given array");
                printf("7)new aray ");
                scanf("%d",&ip);
                if(ip==1)
                {   printf("\n sum of the array is %d ",sum);

                }
                if(ip==2)
                {
                    printf("\nthe largest number is %d ",max);
                    printf("\nposition of lagest numbers is a[%d] ",loc_max);
                }
                if(ip==3)
                {
                    printf("\nthe average of the array is %f ",avg);
                }
                if(ip==4)
                {
                    printf("\nthe smallest number is %d ",low);
                    printf("\nposition of smallest numbers is a[%d] ",loc_low);

                }
                if(ip==5)
                {   printf("\ndigit %d is present %d times in the given number",num,cnum);
                    printf("\nposition of digit in numbers is");
                    for(j=0;j<=k;j++)
                    {
                        printf("\na[%d]",p[j]);
                    }

                }
                if(ip==6)
                {
                    printf("\nnumbers cantain %d positive number",cp);
                    printf("\nnumbers cantain %d negative number",cn);
                    printf("\nnumbers cantain %d zero number",co);
                }
                printf("\n1)main menu 0)exit");
                scanf("%d",&menu);
                if(menu==0)
                {
                    printf("\n1)new array 0)exit");
                    scanf("%d",&c);

                }
            }


        }
    getch();

}
