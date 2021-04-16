const facebookShare = document.querySelector('.facebook_share');
const kakaoShare = document.querySelector('.kakao_share');
const copyBtn = document.querySelector('.copy_btn');

$(function() {
    let url = window.location.href;
    let img = $('.result_img img').attr('src');

    $("meta[property='og\\:url']").attr("content", url);
    $("meta[property='og\\:image']").attr("content", img);

});

Kakao.init('376f7cf8300ecdc152f32bca6ebbcbca');
// Kakao.isInitialized();

function sendLink() {
  let result_url = window.location.href;
  Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '나의 개발 유형은?',
        description: '나에게 꼭 맞는 개발 유형을 알아보자!!',
        imageUrl:
          'https://mbit.weniv.co.kr/static/img/mbit_thumbnail.png',
        link: {
          mobileWebUrl: 'https://mbit.weniv.co.kr',
          webUrl: 'https://mbit.weniv.co.kr',
          },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: '결과보기',
          link: {
            webUrl: result_url,
            mobileWebUrl: result_url,
          },
        },
        {
          title: '테스트 하기',
          link: {
            webUrl: 'https://mbit.weniv.co.kr',
            mobileWebUrl: 'https://mbit.weniv.co.kr',
          },
        },
      ],
  });
}

function sharefacebook() {
    let url = window.location.href;
    let facebook = 'http://www.facebook.com/sharer/sharer.php?u=';
    let link = facebook + url;
    window.open(link);
}

function copyUrl() {
    let url = window.location.href;
    let tmp = document.createElement('input');


    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
	  document.execCommand("copy");
    document.body.removeChild(tmp);

	  alert("URL이 복사되었습니다");
}

facebookShare.addEventListener('click', sharefacebook);
kakaoShare.addEventListener('click', sendLink);
copyBtn.addEventListener('click', copyUrl);