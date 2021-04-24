from django.urls import path, include
from signupApp import views


urlpatterns = [
    path('index/', views.index, name='index'),
    path('login/', views.login, name='login'),
    path('loginCheck/', views.loginCheck, name='loginCheck'),
    path('logout/', views.logout, name='logout'),
    path('signup/', views.signup, name='signup'),
    path('signupForm/', views.signupForm, name='signupForm'),
    path('survey/', views.survey, name='survey'),
    path('recommend/', views.recommend, name='recommend'),
    # path('index1/', views.index1, name='index1'),
    # path('n_map/', views.n_map, name='n_map'),
]