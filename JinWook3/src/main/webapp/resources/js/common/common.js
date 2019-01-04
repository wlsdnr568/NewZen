$(function() {
	
	$("#datepicker").datepicker({
		changeMonth : true,
		changeYear : false,   
		showOn : "button",
		buttonImage : "/jinWook3/resources/img/calendar.gif",
		buttonImageOnly : true,
		buttonText : "Select date", 
		dateFormat : "yy년 mm월 dd일"
	});
	
	$(document).on("click","#change",function(){
		addEvent();
		$("#datepicker2").datepicker({
			changeMonth : true,
			changeYear : false,   
			showOn : "button",
			buttonImage : "/jinWook3/resources/img/calendar.gif",
			buttonImageOnly : true,
			buttonText : "Select date", 
			dateFormat : "yy년 mm월"
		});
		
		$("#datepicker3").datepicker({
			changeMonth : true,
			changeYear : false,   
			showOn : "button",
			buttonImage : "/jinWook3/resources/img/calendar.gif",
			buttonImageOnly : true,
			buttonText : "Select date", 
			dateFormat : "yy년 mm월"
		});
	})
	
	$(document).on("click","#change1",function(){
		addEvent2();
		$("#datepicker").datepicker({
			changeMonth : true,
			changeYear : false,   
			showOn : "button",
			buttonImage : "/jinWook3/resources/img/calendar.gif",
			buttonImageOnly : true,
			buttonText : "Select date", 
			dateFormat : "yy년 mm월 dd일"
		});
	})
	
});


function addEvent(){
		
	$("#box").empty();
	$("<input type='text' id='datepicker2' size='9' style='text-align: center;'>").appendTo($("#box"));
	$("<b style='font-weight:normal;margin-left:5px'>~</b>").appendTo($("#box"));
	$("<input type='text' id='datepicker3' size='9' style='text-align: center;margin-left: 5px'>").appendTo($("#box"));
	$("<input type='button' value='변경' id='change1' style='margin-left: 5px'>").appendTo($("#box"));
	$("<label for='exchage1' style='margin-left:5px;'>현금잔액:</label>"+"<input type='text' readonly='readonly' id='exchange1'>").appendTo($("#box"));
	$("<label for='asd1' style='margin-left:5px;'>대차차액:</label>"+"<input type='text' readonly='readonly' id='asd1'>").appendTo($("#box"));
	
	var column = {
		"name": "col0",
	"fieldName": "field0",
	"header" : { 
		text: "월"
	},
	"width": 30
	}
	
	gridView.addColumn(column,"",0);
	
}

function addEvent2(){
	
	$("#box").empty();
	$("<input type='text' id='datepicker' size='14' style='text-align: center;border: 1px solid black'>").appendTo($("#box"));
	$("<input type='button' value='변경' id='change' style='margin-left: 5px; border: 1px solid black'>").appendTo($("#box"));
	$("<label for='exchage' style='margin-left:5px;'>현금잔액:</label>"+"<input type='text' readonly='readonly' id='exchange'>").appendTo($("#box"));
	$("<label for='asd' style='margin-left:5px;'>대차차액:</label>"+"<input type='text' readonly='readonly' id='asd'>").appendTo($("#box"));
	
	gridView.removeColumn("col0");
}





