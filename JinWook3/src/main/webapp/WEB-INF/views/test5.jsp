<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script type="text/javascript" src="<c:url value="/resources/js/realgridjs-lic.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/realgridjs_eval.1.1.30.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/realgridjs-api.1.1.30.js" />"></script>       
<script type="text/javascript" src="<c:url value="/resources/js/jquery-3.3.1.min.js"/>"></script>
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
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxtabs.js" />"></script>
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
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxribbon.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxlayout.js" />"></script>  
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxtree.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxcombobox.js" />"></script>     

<script type="text/javascript">
    $(document).ready(function () {
        // the 'layout' JSON array defines the internal structure of the layout
        var layout = [{
            type: 'layoutGroup',
            orientation: 'horizontal',
            items: [{
                type: 'autoHideGroup',
                alignment: 'left',
                width: '20%',
                unpinnedWidth: '20%',
                items: [{
                    type: 'layoutPanel',
                    title: '도구',
                    contentContainer: 'ToolboxPanel'
                }, {
                    type: 'layoutPanel',
                    title: '도움말',
                    contentContainer: 'HelpPanel'
                }]
            }, {
                type: 'layoutGroup',
                orientation: 'vertical',
                width: '50%',
                items: [{
                    type: 'documentGroup',
                    height: '50%',
                    minHeight: 200,
                    items: [{
                        type: 'documentPanel',
                        title: '문서1',
                        contentContainer: 'Document1Panel'
                    }, {
                        type: 'documentPanel',
                        title: '문서2',
                        contentContainer: 'Document2Panel'
                    }]
                }, {
                    type: 'tabbedGroup',
                    height: '50%',
                    pinnedHeight: 30,
                    items: [{
                        type: 'layoutPanel',
                        title: '오류 목록',
                        contentContainer: 'ErrorListPanel'
                    }, {
                        type: 'layoutPanel',
                        title: '결과',
                        contentContainer: 'OutputPanel',
                        selected: true
                    }]
                }]
            }, {
                type: 'tabbedGroup',
                width: '30%',
                minWidth: 200,
                items: [{
                    type: 'layoutPanel',
                    title: '탐색',
                    contentContainer: 'SolutionExplorerPanel',
                    initContent: function () {
                        // initialize a jqxTree inside the Solution Explorer Panel
                        var source = [{
                            icon: '/test/resources/jqwidgets/styles/images/earth.png',
                            label: '프로젝트',
                            expanded: true,
                            items: [{
                                icon: '/test/resources/jqwidgets/styles/images/folder.png',
                                label: 'css',
//                                 expanded: true,
                                items: [{
                                    icon: '/test/resources/jqwidgets/styles/images/nav1.png',
                                    label: 'jqx.base.css'
                                }, {
                                    icon: '/test/resources/jqwidgets/styles/images/nav1.png',
                                    label: 'jqx.energyblue.css'
                                }, {
                                    icon: '/test/resources/jqwidgets/styles/images/nav1.png',
                                    label: 'jqx.orange.css'
                                }]
                            }, {
                                icon: '/test/resources/jqwidgets/styles/images/folder.png',
                                label: 'scripts',
                                items: [{
                                    icon: '/test/resources/jqwidgets/styles/images/nav1.png',
                                    label: 'jqxcore.js'
                                }, {
                                    icon: '/test/resources/jqwidgets/styles/images/nav1.png',
                                    label: 'jqxdata.js'
                                }, {
                                    icon: '/test/resources/jqwidgets/styles/images/nav1.png',
                                    label: 'jqxgrid.js'
                                }]
                            }, {
                                icon: '/test/resources/jqwidgets/styles/images/nav1.png',
                                label: 'index.htm'
                            }]
                        }];
                        $('#solutionExplorerTree').jqxTree({ source: source, width: 250, height: 300});
                    }
                }, {
                    type: 'layoutPanel',
                    title: '속성',
                    contentContainer: 'PropertiesPanel'
                }]
            }]
        }];
        $('#jqxLayout').jqxLayout({ 
        	theme: 'web',
        	width: 1000,
        	height: 600,
        	layout: layout
        });
    });
</script>

<style type="text/css">
	.jqx-layout-group-auto-hide-content-vertical{
	    width: 200px;
	}
</style>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

	<div id="jqxLayout">
        <!--The panel content divs can have a flat structure-->
        <!--autoHideGroup-->
        <div data-container="ToolboxPanel">도구 목록</div>
        <div data-container="HelpPanel">도움말 주제</div>
        <!--documentGroup-->
        <div data-container="Document1Panel">문서1 내용</div>
        <div data-container="Document2Panel">문서2 내용</div>
        <!--bottom tabbedGroup-->
        <div data-container="ErrorListPanel">오류 목록</div>
        <div data-container="OutputPanel">결과</div>
        <!--right tabbedGroup-->
        <div data-container="SolutionExplorerPanel">
            <div id="solutionExplorerTree" style="border: none;"></div>
        </div>
        <div data-container="PropertiesPanel">속성 목록</div>
    </div>

</body>
</html>


