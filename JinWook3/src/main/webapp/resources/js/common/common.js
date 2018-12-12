$(function() {
		
		/////초기 데이트 픽커
		$("#datepicker").datepicker({
			changeMonth : true,
			changeYear : false,   
			showOn : "button",
			buttonImage : "/test/resources/img/calendar.gif",
			buttonImageOnly : true,
			buttonText : "Select date", 
			dateFormat : "yy년 mm월 dd일"
		});
		
		/////변경 이벤트
		$("#change").on("click",function(){
			
			$("#box").empty();
			$("<input type='text' id='datepicker2' size='9' style='text-align: center;'>").appendTo($("#box"));
			$("<b style='font-weight:normal;margin-left:5px'>~</b>").appendTo($("#box"));
			$("#datepicker2").datepicker({
				changeMonth : true,
				changeYear : false,   
				showOn : "button",
				buttonImage : "/test/resources/img/calendar.gif",
				buttonImageOnly : true,
				buttonText : "Select date", 
				dateFormat : "yy년 mm월"
			});
			$("<input type='text' id='datepicker3' size='9' style='text-align: center;margin-left: 5px'>").appendTo($("#box"));
			$("#datepicker3").datepicker({
				changeMonth : true,
				changeYear : false,   
				showOn : "button",
				buttonImage : "/test/resources/img/calendar.gif",
				buttonImageOnly : true,
				buttonText : "Select date", 
				dateFormat : "yy년 mm월"
			});
			
			$("<input type='button' value='변경' id='change1' style='margin-left: 5px'>").appendTo($("#box"));
			$("<label for='exchage1' style='margin-left:5px'>현금잔액:</label>"+"<input type='text' readonly='readonly' id='exchange1'>").appendTo($("#box"));
			$("<label for='asd1' style='margin-left:5px'>대차차액:</label>"+"<input type='text' readonly='readonly' id='asd1'>").appendTo($("#box"));
			
			var column1 = {
					"name": "col0",
	 				"fieldName": "field0",
	 				"header" : {
	 					text: "월"
	 				},
	 				"width": 30
			}
			
			gridView.addColumn(column1,"",0);
			
			$("#change1").on("click",function(){
				window.location.reload();
			});
			
		});
		
	});





