function setAppCookie(c_name,value,exdays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value + ";" + "domain=" + location.host + ";path=/";
}
function getAppCookie(c_name)
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
	  if (x==c_name)
		{
		return unescape(y);
		}
	  }
}

// move external page
function moveExternalPage(url, isOpen){
	if(getAppCookie("isMobileApp") == "Y"){
		if(agentId.indexOf("android") < 0)	// iOS
			document.location = "movePage?" + url;
		else	// android
			window.htmlEventHandler.movePage(url);
	}else{
		if(isOpen == "Y"){
			var win = window.open(url);
			if(!win)
				alert("팝업이 차단되어 있습니다!\r\n브라우저 설정에서 팝업 허용 후 다시 작업해 주세요.");
		}else{
			location.href = url;
		}
	}
}

var isIPHONE = (navigator.userAgent.match('iPhone') != null || navigator.userAgent.match('iPod') != null);
var isIPAD = (navigator.userAgent.match('iPad') != null);
var isANDROID = (navigator.userAgent.match('Android') != null);

//웹투어 앱 다운로드 팝업 hide
function hideAppDownPopup() {
    setAppCookie("topDimAppN", "Y", 1);
	$('.wt_appDown_wrap').fadeOut();
}
//웹투어 앱 다운로드 팝업 hide
function hideAppDownPopupHanaTour() {
    setAppCookie("topDimAppHanaTour", "Y", 1);
    $('.wt_appDown_wrap').fadeOut();
}
//var isApp = (navigator.userAgent.match('nApp=Webtour') != null);


// move subPage
function moveApp(AppIds){

	var _APP_INSTALL_CONFIRM = "앱이 설치되어 있지않습니다.\n설치화면으로 이동하시겠습니까?";
	var openAt = new Date, uagentLow = navigator.userAgent.toLocaleLowerCase();

	// 모바일 웹투어 앱
	if(AppIds == "Webtour"){

		if(isIPHONE || isIPAD){	// iOS
			var appStoreUrl = "http://itunes.apple.com/kr/app/webtueo/id405192342?l=en&mt=8";
			var appurl = "mobilewebtour://";
			var clickedAt = new Date();

			setTimeout(function () {
			    if (new Date() - clickedAt < 2000) {
			        moveExternalPage(appStoreUrl, "N");
			    } else {
			        location.href = appurl;
                }
			}, 1500);

		}else{		// android
			var appurl = "intent://mobilewebtour/#Intent;scheme=mobilewebtour://;package=com.Webtour;end";
				setTimeout(function(){
						location.href = appurl;
				}, 1000);
		}

	}
	// 모바일 웹투어 앱 AA
	if(AppIds == "WebtourAA"){

		if(isIPHONE || isIPAD){	// iOS

		}else{		// android
			var appurl = "intent://mobilewebtouraa/#Intent;scheme=mobilewebtouraa://;package=com.MobileWebTourAA;end";
				setTimeout(function(){
						location.href = appurl;
				}, 1000);
		}

	}
	// 모바일 웹투어 앱 AH
	if(AppIds == "WebtourAH"){

		if(isIPHONE || isIPAD){	// iOS

		}else{		// android
			var appurl = "intent://mobilewebtourah/#Intent;scheme=mobilewebtourah://;package=com.MobileWebTourAH;end";
				setTimeout(function(){
						location.href = appurl;
				}, 1000);
		}

	}
	// 모바일 웹투어 앱 DA
	if(AppIds == "WebtourDA"){

		if(isIPHONE || isIPAD){	// iOS

		}else{		// android
			var appurl = "intent://mobilewebtourda/#Intent;scheme=mobilewebtourda://;package=com.MobileWebTourDA;end";
				setTimeout(function(){
						location.href = appurl;
				}, 1000);
		}

	}
	// 모바일 웹투어 앱 DH
	if(AppIds == "WebtourDH"){

		if(isIPHONE || isIPAD){	// iOS
		    var appStoreUrl = "http://itunes.apple.com/kr/app/webtueo-gugnaesugbag-webtunais/id1024491132?l=en&mt=8";
			var appurl = "mobilewebtour://";
			var clickedAt = new Date();

			setTimeout(function(){
				if(new Date() - clickedAt < 2000){
					moveExternalPage(appStoreUrl,"N");
				}
			}, 1500);
			location.href = appurl;
		}else{		// android
			var appurl = "intent://mobilewebtourdh/#Intent;scheme=mobilewebtourdh://;package=com.MobileWebTourDH;end";
				setTimeout(function(){
						location.href = appurl;
				}, 1000);
		}

	}
	// 모바일 웹투어 앱 DR
	if(AppIds == "WebtourDR"){

		if(isIPHONE || isIPAD){	// iOS

		}else{		// android
			var appurl = "intent://mobilewebtourdr/#Intent;scheme=mobilewebtourdr://;package=com.MobileWebTourDR;end";
				setTimeout(function(){
						location.href = appurl;
				}, 1000);
		}

	}
	// 모바일 웹투어 앱 TK
	if(AppIds == "WebtourTK"){

		if(isIPHONE || isIPAD){	// iOS

		}else{		// android
			var appurl = "intent://mobilewebtourtk/#Intent;scheme=mobilewebtourtk://;package=com.MobileWebtourTK;end";
				setTimeout(function(){
						location.href = appurl;
				}, 1000);
		}

	}
	// 모바일 하나프리 앱
	if(AppIds == "hanafreedh"){

		if(isIPHONE || isIPAD){	// iOS
			var appStoreUrl = "http://itunes.apple.com/kr/app/hanapeuli-gugnaesugbag/id888595740?mt=8";
			var appurl = "hanaiphonedh1://";
			var clickedAt = new Date();

			setTimeout(function(){
				if(new Date() - clickedAt < 2000){
					moveExternalPage(appStoreUrl,"N");
				}
			}, 1500);
			location.href = appurl;
		}else{		// android
			var appurl = "intent://hanaiphonedh1/#Intent;scheme=hanaiphonedh1://;package=com.MobileHanaFreeDH;end";
                /*
				setTimeout(function(){
					if(getAppCookie("isMobileApp") == "Y")
						moveExternalPage(appurl, "Y");
					else
						location.href = appurl;
				}, 1000);
                */
	            setTimeout(function () {
	                location.href = appurl;
	            }, 1000);
		}

	}

}