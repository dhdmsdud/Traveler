from django.db import models

# Create your models here.


#----------------------< 옵션값 >----------------------#
address_choice = {
    ('1', '서울'),
    ('2', '인천'),
    ('3', '대전'),
    ('4', '대구'),
    ('5', '광주'),
    ('6', '부산'),
    ('7', '울산'),
    ('8', '세종특별자치시'),
    ('31', '경기도'),
    ('32', '강원도'),
    ('33', '충청북도'),
    ('34', '충청남도'),
    ('35', '경상북도'),
    ('36', '경상남도'),
    ('37', '전라북도'),
    ('38', '전라남도'),
    ('39', '제주도'),
}

sex_choice = {
    ('S01', '남자'),
    ('S02', '여자'),
}

#----------------------< 설문조사 >----------------------#
class Survey(models.Model) :
    Mail    = models.CharField(max_length=10, verbose_name='아이디', null=True)
    Theme   = models.CharField(max_length=10, verbose_name='테마')

    def __str__(self):
        return self.Mail+" , " + self.Theme



#----------------------< 회원가입 >----------------------#
class User(models.Model) :
    Name    = models.CharField(max_length=10, verbose_name='이름')
    ID      = models.CharField(max_length=50, verbose_name='아이디', primary_key=True)
    PW      = models.CharField(max_length=50, verbose_name='비밀번호')
    Sex     = models.CharField(max_length=10, verbose_name='성별', choices=sex_choice)
    Age     = models.CharField(max_length=10, verbose_name='나이')
    Phone   = models.CharField(max_length=20, verbose_name='전화번호')
    Address = models.CharField(max_length=10, verbose_name='주소', choices=address_choice)

    def __str__(self):
        return self.Name+" , "+self.ID+" , "+self.PW+" , "+self.Sex+" , "+self.Age+" , "+self.Phone+" , "+self.Address