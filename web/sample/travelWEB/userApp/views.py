import json
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render , redirect
from .models import *


# Create your views here.

#------------<landing page>------------#
def index(request):
    request.session['ID'] = {}
    request.session['login'] = 'N'
    request.session.modified = True

    return render(request, 'index.html')


#------------<login>------------#
def login(request):
    if request.method =='POST':
        id       = request.POST['userid']
        password = request.POST['password']
        user     = User.objects.get(ID = id)
        if user.PW == password:
            return redirect('search.html')
        else :
            return render(request, 'index.html', {'error' : 'username or password is incorrect.'})
    else:
        return render(request, 'index.html')


#------------<login 확인>------------#
def loginCheck(request):
    print('loginCheck')
    template_name = 'index.html'
    request.session['loginOk'] = False
    try:
        data = request.POST
        inputId = data['userid']
        inputPassword = data['password']

    except (KeyError, inputId == "", inputPassword == "") :
        context = {
            "userid" : "empty",
            "password" : "empty",
        }
        return render(request, template_name, context)
    else :
        if User.objects.filter(ID= inputId).exists():
            getUser = User.objects.get(ID = inputId)
            if getUser.PW == inputPassword :
                request.session['login'] = 'Y'
                request.session['userid'] = inputId
                context = {
                    "login" : 'Y' ,
                    "result" : "로그인 성공"
                }
            else :
                request.session['login'] = 'N'
                request.session['userid'] = ""
                context = {
                    "login": 'N',
                    "result" : "비밀번호가 틀렸습니다"
                }
        else :
            request.session['loginOk'] = 'N'
            context = {
                "login": 'N',
                "result" : "존재하지 않는 id입니다"
            }
        print('context', context)
        return HttpResponse(json.dumps(context), content_type="application/json")


#------------<logout>------------#
def logout(request) :
    request.session['ID'] = {}
    request.session['login'] = 'N'
    request.session.modified = True
    return redirect('login.html')


#------------<회원가입페이지>------------#
def signupForm(request) :
    return render(request, 'signupForm.html')


#------------<회원가입>------------#
def signup(request) :
    if request.method == 'POST' :
        id = request.POST['new_id']
        mail = request.POST['mail']

        pwd = request.POST['new_pwd']
        name = request.POST['new_name']
        age = request.POST['new_age']
        sex = request.POST['new_sex']
        phone = request.POST['new_phone']
        address = request.POST['new_address']

        register = User(ID=id+mail, PW=pwd, Name=name, Age=age, Phone=phone, Address=address, Sex=sex)

        register.save()
    return render(request, 'survey1.html')


#------------<SNS 회원가입>------------#
def sns(request) :
    return render(request, 'index.html')


#------------<survey page>------------#
def survey(request) :
    if request.method == 'POST' :
        season = request.POST['season']
        partner = request.POST['partner']
        theme = request.POST['theme']

        surveys = Survey(Season=season, Partner=partner, Theme=theme)

        surveys.save()
    return render(request, 'survey1.html')


def survey2(request) :
    return render(request, 'survey2.html')

#------------<recommend page>------------#
def recommend(request) :
    return render(request, 'recommend.html')


#------------<MBTI page>------------#
def mbti(request) :
    developers = Developer.objects.all()
    context = {
        'developers' : developers
    }
    return render(request, 'mbti.html', context=context)

def form(request) :
    questions = Question.objects.all()
    context = {
        'questions' : questions
    }
    return render(request, 'form.html', context=context)