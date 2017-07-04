//自执行函数
(function(){
	//定义标题、章节、链接数组
	var titleGroup = new Array(
		'第一章','第二章','第三章','第四章','第五章','第六章','第七章','第八章'
		);
	var gNameGroup = new Array(
		"初识JAVA，常用DOS，第三集，第四集，第五集，第六集",
		"初识JAVA，常用DOS，第三集，第四集，第五集，第六集"
		);
	var gLinkGroup = new Array(
		"http://player.youku.com/embed/XMjg0MjYxMDg3Mg==,http://player.youku.com/embed/XMjg0MjQwMTU3Ng==,http://player.youku.com/embed/XMjg0MjQwMTU3Ng==,http://player.youku.com/embed/XMjg0MjQwMTU3Ng==,right,right",
		"http://player.youku.com/embed/XMjg0MjYxMDg3Mg==,http://player.youku.com/embed/XMjg0MjQwMTU3Ng==,http://player.youku.com/embed/XMjg0MjQwMTU3Ng==,http://player.youku.com/embed/XMjg0MjQwMTU3Ng==,right,right"
		);

	//获取get传值，并将对应标题、章节、链接写入对应标签
	var id = GetQueryString('id');
	var title = titleGroup[id];
	var gName = gNameGroup[id].split('，');
	var gLink = gLinkGroup[id].split(',');
	var str = '';
	document.getElementById('title').innerHTML = title;
	var goods = document.getElementById('content');
	for (var i = 0 ; i < gName.length ; i++ ){
		str += "<li class='good' id='"+gLink[i]+"' onclick='video(this)'>"+gName[i]+"</li>";
	};
	goods.innerHTML = str;
})();

//正则表达获取GET传值
function GetQueryString(name) {  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");  
    var r = window.location.search.substr(1).match(reg);  
    if (r != null) return unescape(r[2]);  
    return null;  
} 

//获取对应标签，写入视频标签
function video(obj){
	document.getElementById('video').innerHTML = "<iframe  height=498 width=510 src='"+obj.id+"' frameborder=0 'allowfullscreen'></iframe>";
}
