from django.urls import path, include
from userApp import views


urlpatterns = [
    path('index/',      views.index,      name='index'),
    path('login/',      views.login,      name='login'),
    path('logout/',     views.logout,     name='logout'),
    path('signupForm/', views.signupForm, name='signupForm'),
    path('signup/',     views.signup,     name='signup'),
    path('loginCheck/', views.loginCheck, name='loginCheck'),
    path('survey/',     views.survey,     name='survey'),
    path('survey2/',    views.survey2,    name='survey2'),
    path('recommend/',  views.recommend,  name='recommend'),
    path('sns/',        views.sns,        name='sns'),
    path('mbti/',       views.mbti,       name='mbti'),
    path('form/',       views.form,       name='form'),

]