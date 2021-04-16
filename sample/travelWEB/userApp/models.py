from django.db import models

# Create your models here.

#----------------------< 옵션값 >----------------------#
address_choice = {
    ('R01', '경기도'),
    ('R02', '서울특별시'),
    ('R03', '인천광역시'),
    ('R04', '부산광역시'),
    ('R05', '울산광역시'),
    ('R06', '광주광역시'),
    ('R07', '대전광역시'),
    ('R08', '대구광역시'),
    ('R09', '경상북도'),
    ('R10', '경상남도'),
    ('R11', '충청북도'),
    ('R12', '충청남도'),
    ('R13', '전라북도'),
    ('R14', '전라남도'),
    ('R15', '강원도'),
    ('R16', '제주특별자치도'),
    ('R17', '세종특별자치시'),
}


age_choice = {
    ('A01', '10대'),
    ('A02', '20대'),
    ('A03', '30대'),
    ('A04', '40대'),
    ('A05', '50대'),
    ('A06', '60대+'),
}


sex_choice = {
    ('S01', '남자'),
    ('S02', '여자'),
}


theme_choice = {
    ('T01', '자연관광지'),
    ('T02', '역사관광지'),
    ('T03', '휴양관광지'),
    ('T04', '체험관광지'),
    ('T05', '문화시설'),
    ('T06', '축제'),
    ('T07', '공연/행사'),
    ('T08', '레포츠'),
    ('T09', '쇼핑'),
    ('T10', '맛집'),
    ('T11', '숙박'),
}


#----------------------< User >----------------------#
class User(models.Model) :
    Name    = models.CharField(max_length=10, verbose_name='이름')
    ID      = models.CharField(max_length=50, verbose_name='아이디', primary_key=True)
    PW      = models.CharField(max_length=50, verbose_name='비밀번호')
    Sex     = models.CharField(max_length=10, verbose_name='성별', choices=sex_choice)
    Age     = models.CharField(max_length=10, verbose_name='나이', choices=age_choice)
    Phone   = models.CharField(max_length=20, verbose_name='전화번호')
    Address = models.CharField(max_length=10, verbose_name='주소', choices=address_choice)

    def __str__(self):
        return self.Name+" , "+self.ID+" , "+self.PW+" , "+self.Sex+" , "+self.Age+" , "+self.Phone+" , "+self.Address


#----------------------< 설문조사 >----------------------#
class Survey(models.Model) :
    Season  = models.CharField(max_length=10, verbose_name='계절')
    Partner = models.CharField(max_length=10, verbose_name='파트너')
    Theme   = models.CharField(max_length=10, verbose_name='테마', choices=theme_choice)

    def __str__(self):
        return self.Season + " , " + self.Partner + " , " + self.Theme


#----------------------< MBTI >----------------------#
class Developer(models.Model) :
    name = models.CharField(max_length=50)
    count = models.IntegerField(default=0)

class Question(models.Model) :
    number = models.IntegerField(unique=True)
    content = models.CharField(max_length=100)

class Choice(models.Model) :
    content = models.CharField(max_length=100)
    question = models.ForeignKey(to='userApp.Question', on_delete=models.CASCADE)
    developer = models.ForeignKey(to='userApp.Developer', on_delete=models.CASCADE, null=True)