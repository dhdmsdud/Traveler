1. 로그인 --> 가운데에 화면배치(아이디(이메일), 비밀번호, sns연동, 비밀번호찾기)

2. 성향분석(선택가능) --> 스텝표시

3. 이진분류로  테마 5개 고르기, 좋으면 1 아니면0

4. 샘플데이터

   | index           | format                                                       | fields                                                       |
   | --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | 이름(Name)      |                                                              | CharField(max_length = 10, verbose_name = '이름')            |
   | 성별(Sex)       | 여성, 남성                                                   | CharField(max_length = 10, verbose_name = '성별')            |
   | 나이(Age)       | 20, 30, 40, 50 ,60+                                          | IntegerField(max_length = 10, verbose_name='나이')           |
   | 이메일(ID)      | xxxx@xxxxx.xxx                                               | CharField(max_length = 50, verbose_name = '사용자')          |
   | 비밀번호(PW)    |                                                              | CharField(max_length = 50, verbose_name = '비밀번호')        |
   | 전화번호(Phone) | 010-xxxx-xxxx                                                | CharField(max_length = 20, verbose_name = '전화번호')        |
   | 주소(Adress)    | 경기도, 서울특별시, 부산광역시, 경상남도, 인천광역시, 경상북도, 대구광역시, 충청남도, 전라남도, 전라북도, 충청북도, 강원도, 대전광역시, 광주광역시, 울산광역시, 제주특별자치도, 세종특별자치시 | CharField(choices = [('R10', '경기도'), ('R20', '서울특별시'), ('R30', '부산광역시') ... ], max_length = 10, verbose_name = '주소') |

   | index        | format                                                       | fields                                                       |
   | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | 계절(Season) | 어떤 계절을 좋아하나요 ? <br>--> 봄, 여름, 가을, 겨울        | CharField(max_length = 10, verbose_name = '계절')            |
   | (Who)        | 주로 누구와 함께 여행을 가나요?<br> --> 혼자, 가족, 연인     | CharField(max_length = 10, verbose_name = '')                |
   | 테마(Thema)  | 관심있는 테마 3개를 선택하세요.<br>--> 트레킹, 캠핑, 레포츠, 액티비티, 드라이브, 맛집탐방, 풍경감상, 전시관람, 시장구경, 체험, 축제, 휴양, 물놀이, 문화탐방, 쇼핑, 바다, 산, 강, 섬, 공원, 종교유적, 테마파크, 문화마을, 랜드마크, 전통시장, 역사유적 | CharField(choices = [('T10', '트레킹'), ('T20', '캠핑'), ('T30', '레포츠') ... ], max_length = 10, verbose_name = '테마') |
   | 분위기(Mood) | 평소 분위기 2개를 선택하세요.<br>편안, 핫플, 낭만, 열정, 고요,  생기넘치는, 희망적인, 단조로움, 정적, 평화, 따뜻, 유쾌 | CharField(choices = [('M10', '편안'), ('M20', '핫플'), ('M30', '낭만') ... ], max_length = 10, verbose_name = '분위기') |

   

5. settings, static, templates(index.html)

6. oauth공부(sns로그인)

7. 데이터 샘플링(금오전)