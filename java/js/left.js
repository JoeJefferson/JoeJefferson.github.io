//自执行函数，显示栏目信息
(function(){
	var cName = '第一章，第二章，第三章，第四章，第五章，第六章，第七章';
	var cLink = '';
	for(var i = 0; i <= 6;i++){
		cLink += 'right.html?id='+i+",";
	}
	var cate3 = document.getElementById('cate3');
	var cateName = cName.split('，');
	var cateLink = cLink.split(',');
	var str = '';
	for (var i = 0 ; i < cateName.length ; i++) {
		 str += "<li id='cate4' ><a href='"+cateLink[i]+"' target='right-frame'>"+cateName[i]+"</a></li>";
	}
	cate3.innerHTML = str;
})();
