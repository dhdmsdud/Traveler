git clone https://github.com/Travler-kipilGO/Recomendation-System -b hyunsoo



pip install django

pip install django-allauth

pip install lxml

pip install beautifulsoup4

pip install django-seed

pip install numpy

pip install pandas

pip install scipy

pip install sklearn



'NAME': str(os.path.join(BASE_DIR, "db.sqlite3")),



python manage.py makemigrations

python manage.py migrate

python manage.py createsuperuser

python manage.py userdata --number 100



python manage.py runserver

admin 가서 User ID 복사

 vhampton@gmail.com



python manage.py shell

1. from User.models import User
2. from users.models import User

2. user = User.objects.get(username='vhampton@gmail.com')

3. user.set_password('1234')

4. user.save()

python manage.py userdata --number 100 
python manage.py codedata
python manage.py classcodedata
python manage.py themedata
python manage.py travelspotdata
python manage.py mytravel --number 200
python manage.py userlogdata --number 200 
python manage.py hoteldata --keyword 제주도
python manage.py hoteldata --keyword 부산
python manage.py reviewdata





####  





