// 懒人之家

function upMove(obj){	
    $(obj).next().find("ul").width($(obj).next().find("ul li").size()*193);
	var dom = $(obj).next();	
	dom.animate({
	 scrollLeft:193+dom.scrollLeft()	
	},500)
}
function downMove(obj){
	$(obj).prev().find("ul").width($(obj).prev().find("ul li").size()*193);
	var dom = $(obj).prev();	
	dom.animate({
	 scrollLeft:-193+dom.scrollLeft()	
	},500)
}
function changeTab(m,n){
    var menu=document.getElementById("tab"+m).getElementsByTagName("li");  
    var div=document.getElementById("tablist"+m).getElementsByTagName("div");
    var showdiv=[];
    for (i=0; j=div[i]; i++){		
      if ((" "+div[i].className+" ").indexOf(" m2yw_pic ")!=-1){
       showdiv.push(div[i]);
      }
    }
    for(i=0;i<menu.length;i++)
    {
        menu[i].className=i==(n-1)?"m2yw_cutli":"";
        showdiv[i].style.display=i==(n-1)?"block":"none";  
    }
}