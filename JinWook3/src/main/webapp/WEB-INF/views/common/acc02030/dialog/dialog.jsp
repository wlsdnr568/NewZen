<!-- 분류등록 dialog -->
<div id="clsfDialog" style="display: none;" >
	<div id="layer_ification">
        <ul style="padding-left: 8px; margin-top: 2px">
            <li style="float: left;"></li>
        </ul>

		<!-- 내용 -->
        <div id="layer_cont">
        	<!--  그리드  -->
        	<div id="clsf_list" style="width: 100%; height:300px; margin-top: 10px; margin: auto; float: left;"></div>
        </div>
        <!-- 내용 -->
        
        <div id="layer_file">
        	<img src="<c:url value="/resources/img/btn_icon.png"/>" width="16" height="14" alt="" />
        	<span id="clsf_help" style="font-size: 12px;"></span>
        </div>

        <div id="layer_footer">
			<ul style="display: table; margin: auto; margin-top: 5px; padding:0; padding-left:2px;">
				<li id="clsf_delte" class="layer_btn_exit1" style="width:40px;">
					<a href="#" 
						onMouseOut="MM_swapImgRestore()" 
						onMouseOver="MM_swapImage('image9','','<c:url value="/resources/img/btn_delete_up.png"/>',1)">
						<img src="<c:url value="/resources/img/btn_delete.png"/>" name="image9" border="0">
					</a>
				</li>				
				<li id="clsf_confirm" class="layer_btn_confim1">
					<a href="#" 
						onMouseOut="MM_swapImgRestore()" 
						onMouseOver="MM_swapImage('image8','','<c:url value="/resources/img/btn_confirm_up.png"/>',1)">
						<img src="<c:url value="/resources/img/btn_confirm.png"/>" name="image8" border="0">
					</a>
				</li>
			</ul>				
		</div>
   	</div>
</div>
<!-- 분류등록 dialog -->