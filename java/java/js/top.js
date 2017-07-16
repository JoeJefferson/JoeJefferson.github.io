
//自执行函数，获取系统时间，将其写入id为time的标签中
(function(){
	today=new Date();
	function initArray(){
	this.length=initArray.arguments.length
	for(var i=0;i<this.length;i++)
	this[i+1]=initArray.arguments[i]  }
	var d=new initArray(
	"星期日",
	"星期一",
	"星期二",
	"星期三",
	"星期四",
	"星期五",
	"星期六");
	document.getElementById("time").innerHTML = "<span style='font-color:blue;font-family: 宋体'>今天是："+
	 today.getFullYear()+"年"+
	 (today.getMonth()+1)+"月"+
	 today.getDate()+"日   "+
	 d[today.getDay()+1]+
	 "</apsn>";
})();


