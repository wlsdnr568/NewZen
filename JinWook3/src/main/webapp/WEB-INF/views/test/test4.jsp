<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<script type="text/javascript" src="<c:url value="/resources/js/realgridjs-lic.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/realgridjs_eval.1.1.30.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/realgridjs-api.1.1.30.js" />"></script>       
<script type="text/javascript" src="<c:url value="/resources/js/jquery-1.12.4.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/jquery-ui.js"/>"></script>  

<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.base.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.office.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.material.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.arctic.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.light.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.web.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.energyblue.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.ui-overcast.css"/>"> 

<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxcore.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxbuttons.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxcheckbox.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxinput.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxlistbox.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxscrollbar.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxdropdownlist.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxradiobutton.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxpasswordinput.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxnumberinput.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxpanel.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxform.js" />"></script>     

     <script type="text/javascript">
        $(document).ready(function () {
            var template = [
                {
                    bind: 'textBoxValue',
                    type: 'text',
                    label: 'Text input',
                    labelPosition: 'left',
                    labelWidth: '30%',
                    align: 'left',
                    width: '250px',  
                    required: true,
                    info: '코드 입력',
                    infoPosiction: 'right'
                },
                {
                    bind: 'passwordBoxValue',
                    type: 'password',
                    label: 'Password input',
                    labelPosition: 'left',
                    labelWidth: '30%',
                    align: 'left',
                    width: '250px',
                    required: true
                },
                {
                    bind: 'nubmberBoxValue',
                    type: 'number',
                    label: 'Number input',
                    labelPosition: 'left',
                    labelWidth: '30%',
                    align: 'left',
                    width: '250px',
                    required: true
                },
                {
                    bind: 'dropdownValue',
                    type: 'option',
                    label: 'Drop down list',
                    labelPosition: 'left',
                    labelWidth: '30%',
                    align: 'left',
                    width: '250px',
                    required: true,
                    component: 'jqxDropDownList',
                    options: [
                        { label: 'Option 1', value: 'value1' },
                        { label: 'Option 2', value: 'value2' },
                        { label: 'Option 3', value: 'value3' }
                    ]
                },
                {
                    type: 'label',
                    label: 'Radio buttons:',
                    rowHeight: '40px',
                },
                {
                    bind: 'radiobuttonValue',
                    type: 'option',
                    label: 'Radio buttons',
                    labelPosition: 'right',
                    columnWidth: '150px',
                    align: 'left',
                    //width: '15px',
                    //required: true,
                    optionslayout: 'horizontal',
                    options: [
                        { label: 'Option 1', value: 'value1' },
                        { label: 'Option 2', value: 'value2' },
                        { label: 'Option 3', value: 'value3' }
                    ]
                },
                {
                    type: 'label',
                    bind: 'radiobuttonValue_out',
                    label: 'Boolean options / checkboxes:',
                    rowHeight: '40px',
                },
                {
                    columns: [
                        {
                            columnWidth: '140px',
                            bind: 'checkboxValue1',
                            type: 'boolean',
                            label: 'Checkbox 1',
                            labelPosition: 'right',
                            align: 'left',
                            labelPadding: {left: 0, top: 5, right: 0, bottom: 5}
                        },
                        {
                            columnWidth: '140px',
                            bind: 'checkboxValue2',
                            type: 'boolean',
                            label: 'Checkbox 2',
                            labelPosition: 'right',
                            align: 'left',
                            labelPadding: {left: 0, top: 5, right: 0, bottom: 5}
                        },
                        {
                            columnWidth: '140px',
                            bind: 'checkboxValue3',
                            type: 'boolean',
                            label: 'Checkbox 3',
                            labelPosition: 'right',
                            align: 'left',
                            labelPadding: {left: 0, top: 5, right: 0, bottom: 5}
                        }
                    ]
                },
                {
                    type: 'blank',
                    rowHeight: '20px',
                },
                {
                    name: 'submitButton',
                    type: 'button',
                    text: 'Submit Form Data',
                    align: 'right',
                    padding: {left: 0, top: 5, bottom: 5, right: 40}
                }
            ];
            var sampleValue = {
                'textBoxValue': 'text box value',
                'passwordBoxValue': 'password box',
                'nubmberBoxValue': 67.44,
                'dropdownValue': 'value3',
                'radiobuttonValue': 'value2',
                'checkboxValue1': false,
                'checkboxValue2': false,
                'checkboxValue3': true,
            };
            var sampleForm = $('#sampleForm1');
            sampleForm.jqxForm({
            	theme: 'web',
            	backgroundColor: '#dbdcea8a',
            	borderColor: 'black',
                template: template,
                value: sampleValue,
                padding: { left: 10, top: 10, right: 0, bottom: 10 }
            });
            var btn = sampleForm.jqxForm('getComponentByName', 'submitButton');
            btn.on('click', function () {
                // function: submit
                // arg1: url
                // arg2, optional: target, default is _blank
                // arg3, optional: submit method - GET or POST, default is POST
                sampleForm.jqxForm('submit', "https://www.jqwidgets.com/form_demo/", "_blank", 'POST');
            });
        });
    </script>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div id='sampleForm1' style="width: 420px;height: auto"></div>   
</body>
</html>


