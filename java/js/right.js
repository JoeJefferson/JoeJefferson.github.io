//自执行函数
(function(){
	//定义标题、章节、链接数组
	var titleGroup = new Array(
		'第一章','第二章','第三章','第四章','第五章','第六章','第七章'
		);
	var gNameGroup = new Array(
		"1.1常用DOS,1.2JAVA历史,1.3.Java语言的特点,1.4.Java跨平台的原理,1.5.第一个Java程序-开发和编译,1.6第一个Java程序-解释和总结",
		"2.1标识符数据类型常量变量,2.2浮点和布尔数据类型,2.3.final常量和Scanner输入",
		"3.1.IF单分支语句-抽奖,3.2.IF多分支语句-抽奖,3.4.复习IF多分支语句-分数等级,3.5.swtich多分支语句-分数等级,3.6.while循环语句-重复输出,3.7.while循环语句-求和,3.8.while循环语句再认识",
		"4.1引入和使用数组-存储多个分数并求和,4.2数组的内存分配-多个分数求和与平均分,4.3.数组的特性和基本语法,4.4.增强for循环-数组引用赋值-常见数组异常,4.5.数组应用-按照索引和内容查询数据,4.6.数组应用-获取最高分和最低分",
		"5.1.面向过程和面向对象的联系和区别,5.2.使用面向对象模拟计算器,5.3.局部变量和成员变量,5.4构造方法,5.5对象数组,5.6this关键字,5.7.static变量,5.8包,5.9引入和使用继承,5.10引入和使用方法重写,5.11Object类常用方法,5.12封装和继承练习-封装动物类",
		"6.1.finally语句,6.2.throw和throws-人数不能是负数,6.3.项目3-太阳系需求说明",
		"7.1.模拟实现包装类Integer,7.2.String的常用方法,7.3String的应用-表单验证,7.4.使用Calendar类制作可视化日历,7.5使用File模拟dir显示"
		);
	var gLinkGroup = new Array(
		"http://player.youku.com/embed/XMjg0MjQwMTU3Ng==,http://player.youku.com/embed/XMjg0MjYxMDg3Mg==,http://player.youku.com/embed/XMjg0NDkzNzA2NA==,http://player.youku.com/embed/XMjg0NDk4OTA5Mg==,http://player.youku.com/embed/XMjg0NTYxNTAyOA==,http://player.youku.com/embed/XMjg0NTYxNTAyOA==",
		"http://player.youku.com/embed/XMjg0NjA5MDYzNg==,http://player.youku.com/embed/XMjg0NjkxODEwMA==,http://player.youku.com/embed/XMjg0Nzk1MzM4NA==",
		"http://player.youku.com/embed/XMjg0ODAyNjA1Mg==,http://player.youku.com/embed/XMjg0ODA4NzYyOA==,http://player.youku.com/embed/XMjg0ODE4NTIwOA==,http://player.youku.com/embed/XMjg0ODIyNjg3Mg==,http://player.youku.com/embed/XMjg0ODI5NjkzMg==,http://player.youku.com/embed/XMjg0ODMzOTMxNg==,http://player.youku.com/embed/XMjg0ODM3NzQxMg==",
		"http://player.youku.com/embed/XMjg0ODQwMjQ4OA==,http://player.youku.com/embed/XMjg1MDAzMjQwOA==,http://player.youku.com/embed/XMjg1MDA0MTc5Ng==,http://player.youku.com/embed/XMjg1MDA3NjQ2NA==,http://player.youku.com/embed/XMjg1MDA5NTE4MA==,http://player.youku.com/embed/XMjg1MDEyMjY5Mg==",
		"http://player.youku.com/embed/XMjg1MDE1MTMyOA==,http://player.youku.com/embed/XMjg1MDE1OTgxNg==,http://player.youku.com/embed/XMjg1MDE2NTU0NA==,http://player.youku.com/embed/XMjg1MDI0NzU2NA==,http://player.youku.com/embed/XMjg1MDI1NzA3Mg==,http://player.youku.com/embed/XMjg1MDI3MTc1Mg==,http://player.youku.com/embed/XMjg1MDI5MTc4OA==,http://player.youku.com/embed/XMjg1MDQzMjcxNg==,http://player.youku.com/embed/XMjg1MDQ5NDMwNA==,http://player.youku.com/embed/XMjg1MDU2MDA0OA==,http://player.youku.com/embed/XMjg1MDYwNTM1Mg==,http://player.youku.com/embed/XMjg1MDYxNTA1Mg==",
		"http://player.youku.com/embed/XMjg1MDc3MTA4OA==,http://player.youku.com/embed/XMjg1MDc5Mjc4OA==,http://player.youku.com/embed/XMjg1MDgxNDI2OA==",
		"http://player.youku.com/embed/XMjg1MjEyMTQ2NA==,http://player.youku.com/embed/XMjg1MjE1NTU2OA==,http://player.youku.com/embed/XMjg1MjE3NjM3Ng==,http://player.youku.com/embed/XMjg1MjIwMjk0OA==,http://player.youku.com/embed/XMjg1MjIzMjc5Ng=="
		);

	//获取get传值，并将对应标题、章节、链接写入对应标签
	var id = GetQueryString('id');
	var title = titleGroup[id];
	var gName = gNameGroup[id].split(',');
	var gLink = gLinkGroup[id].split(',');
	var str = '';
	document.getElementById('title').innerHTML = title;
	var goods = document.getElementById('content');
	for (var i = 0 ; i < gName.length ; i++ ){
		str += "<li class='good' id='"+gLink[i]+"' onclick='video(this)' onmouseover='addcolor(this)' onmouseout='subcolor(this)'>"+gName[i]+"</li><hr/ style='width:95%;border-top:1px solid #f0f0f0;'>";
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

function addcolor(obj){
	obj.style.color = '#f49100';
}

function subcolor(obj){
	obj.style.color = '#525252';
}
