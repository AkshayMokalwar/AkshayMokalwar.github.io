from django.shortcuts import render
import MySQLdb
from django.contrib import messages

# Create your views here.
def homeakview(request):
    return render(request,'qna/index.html')
def home_view(request):
    mydb=MySQLdb.connect(user="root",passwd="12345",db="justask")
    mycursor=mydb.cursor()
    mycursor.execute("select * from tbluser;")

    result=mycursor.fetchall()
    print("*********************")
    print(result)
    mycursor.execute("SELECT * FROM justask.tblques;")
    result2=mycursor.fetchall()
    print("*********************")
    print(result2)

    mydb.commit()
    mydb.close()
    return render(request,'qna/index.html',{'records':result,'ques':result2})
def registration_view(request):
    if (request.method=='GET'):
        return render(request,'qna/registration.html');
    elif(request.method=='POST'):
        userfname=request.POST['first_name']
        userlname=request.POST['last_name']
        usernumber=request.POST['number']
        useremail=request.POST['email']
        userpass=request.POST['password']
        useradd=request.POST['address']
        userdob=request.POST['dob']
        usergen=request.POST['radio']
        print("888888888888888888888")
        print(userdob)
        # try:
        mydb=MySQLdb.connect(user="root",passwd="12345",db="justask")
        mycursor=mydb.cursor()
        mycursor.execute("INSERT INTO `justask`.`tbluser` (`UserFirstName`, `UserLastName`, `UserNumber`, `UserEmail`, `UserPass`, `UserAdd`, `UserDOB`, `UserGender`) VALUES (%s,%s,%s,%s,%s,%s,%s,%s);",(userfname,userlname,usernumber,useremail,userpass,useradd,userdob,usergen))
        # messages.success(request,"Successfully  user Registration")
        mydb.commit()
        mydb.close()
        return render(request,'qna/index.html');
        # except:
            # messages.error('Failed to registration')
        # result=mycursor.fetchall()
        # return render(request,'qna/registration.html');


def ques_view(request,qid):
    if(request.method=='GET'):
        print("+++++++++++++++")
        print(qid)
        mydb=MySQLdb.connect(user="root",passwd="12345",db="justask")
        mycursor=mydb.cursor()
        mycursor.execute("SELECT * FROM justask.tblques WHERE QuesID=%s;",(qid,))
        result=mycursor.fetchall()
        print("+++++++++++++++")
        print(result[0])
        # mycursor.execute("SELECT * FROM justask.tblans where  AnsQID=%s;",(qid,))
        # result2=mycursor.fetchall()
        # print("+++++++++++++++")
        # print(result2)
        # return render(request,'qna/ques.html',{'ques':result,'ans':result2})
        return render(request,'qna/ques.html',{'ques':result})
