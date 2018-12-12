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
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxwindow.js" />"></script>
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
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxdockinglayout.js" />"></script>  
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxtree.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxcombobox.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxlayout.js" />"></script>
<script type="text/javascript">
    $(document).ready(function () {
        // the 'layout' JSON array defines the internal structure of the docking layout
        var layout = [{
            type: 'layoutGroup',
            orientation: 'horizontal',
            items: [{
                type: 'layoutGroup',
                orientation: 'vertical',
                width: '60%',
                items: [{
                    type: 'documentGroup',
                    height: '50%',
                    minHeight: '20%',
                    items: [{
                        type: 'documentPanel',
                        title: 'Document 1',
                        contentContainer: 'Document1Panel'
                    }, {
                        type: 'documentPanel',
                        title: 'Document 2',
                        contentContainer: 'Document2Panel'
                    }]
                }, {
                    type: 'tabbedGroup',
                    height: '50%',
                    pinnedHeight: '10%',
                    items: [{
                        type: 'layoutPanel',
                        title: 'Error List',
                        contentContainer: 'ErrorListPanel'
                    }, {
                        type: 'layoutPanel',
                        title: 'Output',
                        contentContainer: 'OutputPanel',
                        selected: true
                    }]
                }]
            }, {
                type: 'tabbedGroup',
                width: '40%',
                items: [{
                    type: 'layoutPanel', 
                    title: 'Solution Explorer',
                    contentContainer: 'SolutionExplorerPanel'
                }]   
            }]
        }];
        $('#dockingLayout').jqxDockingLayout({
        	theme: 'energyblue',  
        	width: 1000, 
        	height: 800, 
        	layout: layout });
    });
</script>
<style type="text/css">
        .jqx-layout-group-auto-hide-content-vertical
        {
            width: 200px;
        }
    </style>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

	  <div id="dockingLayout">
        <!--The panel content divs can have a flat structure-->
        <!--autoHideGroup-->
        <div data-container="ToolboxPanel">
            List of tools</div>
        <div data-container="HelpPanel">
            Help topics</div>
        <!--documentGroup-->
        <div data-container="Document1Panel">
            Document 1 content</div>
        <div data-container="Document2Panel">
            Document 2 content</div>
        <!--bottom tabbedGroup-->
        <div data-container="ErrorListPanel">
            List of errors</div>
        <!--right tabbedGroup-->
        <div data-container="SolutionExplorerPanel">
            <div id="solutionExplorerTree" style="border: none;">
            </div>
        </div>
        <div data-container="PropertiesPanel">
            List of properties</div>
        <!--floatGroup-->
        <div data-container="OutputPanel">
            <div style="font-family: Consolas;">
                <p>
                    Themes installation complete.</p>
                <p>
                    List of installed stylesheet files. Include at least one stylesheet Theme file and
                    the images folder:</p>
                <ul>
                    <li>styles/jqx.base.css: Stylesheet for the base Theme. The jqx.base.css file should
                        be always included in your project.</li>
                    <li>styles/jqx.arctic.css: Stylesheet for the Arctic Theme</li>
                    <li>styles/jqx.web.css: Stylesheet for the Web Theme</li>
                    <li>styles/jqx.bootstrap.css: Stylesheet for the Bootstrap Theme</li>
                    <li>styles/jqx.classic.css: Stylesheet for the Classic Theme</li>
                    <li>styles/jqx.darkblue.css: Stylesheet for the DarkBlue Theme</li>
                    <li>styles/jqx.energyblue.css: Stylesheet for the EnergyBlue Theme</li>
                    <li>styles/jqx.shinyblack.css: Stylesheet for the ShinyBlack Theme</li>
                    <li>styles/jqx.office.css: Stylesheet for the Office Theme</li>
                    <li>styles/jqx.metro.css: Stylesheet for the Metro Theme</li>
                    <li>styles/jqx.metrodark.css: Stylesheet for the Metro Dark Theme</li>
                    <li>styles/jqx.orange.css: Stylesheet for the Orange Theme</li>
                    <li>styles/jqx.summer.css: Stylesheet for the Summer Theme</li>
                    <li>styles/jqx.black.css: Stylesheet for the Black Theme</li>
                    <li>styles/jqx.fresh.css: Stylesheet for the Fresh Theme</li>
                    <li>styles/jqx.highcontrast.css: Stylesheet for the HighContrast Theme</li>
                    <li>styles/jqx.blackberry.css: Stylesheet for the Blackberry Theme</li>
                    <li>styles/jqx.android.css: Stylesheet for the Android Theme</li>
                    <li>styles/jqx.mobile.css: Stylesheet for the Mobile Theme</li>
                    <li>styles/jqx.windowsphone.css: Stylesheet for the Windows Phone Theme</li>
                    <li>styles/jqx.ui-darkness.css: Stylesheet for the UI Darkness Theme</li>
                    <li>styles/jqx.ui-lightness.css: Stylesheet for the UI Lightness Theme</li>
                    <li>styles/jqx.ui-le-frog.css: Stylesheet for the UI Le Frog Theme</li>
                    <li>styles/jqx.ui-overcast.css: Stylesheet for the UI Overcast Theme</li>
                    <li>styles/jqx.ui-redmond.css: Stylesheet for the UI Redmond Theme</li>
                    <li>styles/jqx.ui-smoothness.css: Stylesheet for the UI Smoothness Theme</li>
                    <li>styles/jqx.ui-start.css: Stylesheet for the UI Start Theme</li>
                    <li>styles/jqx.ui-sunny.css: Stylesheet for the UI Sunny Theme</li>
                    <li>styles/images: contains images referenced in the stylesheet files</li>
                </ul>
            </div>
        </div>
    </div>
    
    
</body>
</html>


