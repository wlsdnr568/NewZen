<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.base.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.office.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.arctic.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.light.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.web.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.energyblue.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.ui-overcast.css"/>">

<script src="<c:url value="/resources/js/jquery-1.12.4.min.js"/>"></script>

<script src="<c:url value="/resources/jqwidgets/jqxcore.js" />"></script>
<script src="<c:url value="/resources/jqwidgets/jqxbuttons.js" />"></script>
<script src="<c:url value="/resources/jqwidgets/jqxcheckbox.js" />"></script>
<script src="<c:url value="/resources/jqwidgets/jqxmenu.js" />"></script>
<script src="<c:url value="/resources/jqwidgets/jqxgrid.js" />"></script>
<script src="<c:url value="/resources/jqwidgets/jqxgrid.selection.js" />"></script>
<script src="<c:url value="/resources/jqwidgets/jqxgrid.columnsresize.js" />"></script>
<script src="<c:url value="/resources/jqwidgets/jqxgrid.pager.js" />"></script>
<script src="<c:url value="/resources/jqwidgets/jqxinput.js" />"></script>
<script src="<c:url value="/resources/jqwidgets/jqxlistbox.js" />"></script>
<script src="<c:url value="/resources/jqwidgets/jqxdata.js" />"></script>
<script src="<c:url value="/resources/jqwidgets/jqxscrollbar.js" />"></script>
<script src="<c:url value="/resources/jqwidgets/jqxdropdownlist.js" />"></script>
<script src="<c:url value="/resources/jqwidgets/jqxradiobutton.js" />"></script>
<script src="<c:url value="/resources/jqwidgets/jqxpasswordinput.js" />"></script>
<script src="<c:url value="/resources/jqwidgets/jqxnumberinput.js" />"></script>
<script src="<c:url value="/resources/jqwidgets/jqxpanel.js" />"></script>
<script src="<c:url value="/resources/jqwidgets/jqxform.js" />"></script>

<script type="text/javascript">
	$(document).ready(function() {
		// prepare the data  
		var source = {
			datafields : [ {
				name : 'CustomerID'
			}, {
				name : 'CompanyName'
			}, {
				name : 'ContactName'
			}, {
				name : 'ContactTitle'
			}, {
				name : 'Address'
			}, {
				name : 'City'
			}, {
				name : 'Country'
			} ],
			localdata : [{
				"CustomerID" : "ALFKI",
				"CompanyName" : "Alfreds Futterkiste",
				"ContactName" : "Maria Anders",
				"ContactTitle" : "Sales Representative",
				"Address" : "Obere Str. 57",
				"City" : "Berlin",
				"Region" : null,
				"PostalCode" : 12209,
				"Country" : "Germany",
				"Phone" : "030-0074321",
				"Fax" : "030-0076545"
			},{
				"CustomerID" : "ANATR",
				"CompanyName" : "Ana Trujillo Emparedados y helados",
				"ContactName" : "Ana Trujillo",
				"ContactTitle" : "Owner",
				"Address" : "Avda. de la Constitucin 2222",
				"City" : "Mxico D.F.",
				"Region" : null,
				"PostalCode" : 05021,
				"Country" : "Mexico",
				"Phone" : "(5) 555-4729",
				"Fax" : "(5) 555-3745"
			}]
		};
		var dataAdapter = new $.jqx.dataAdapter(source);
		$("#customersGrid").jqxGrid({
			theme: 'light',
			width : 1000,
			height : 250,
			source : dataAdapter,
			keyboardnavigation : false,
			columns : [ {
				text : 'Company Name',
				datafield : 'CompanyName',
				width : 250
			}, {
				text : 'Contact Name',
				datafield : 'ContactName',
				width : 150
			}, {
				text : 'Contact Title',
				datafield : 'ContactTitle',
				width : 180
			}, {
				text : 'City',
				datafield : 'City',
				width : 120
			}, {
				text : 'Country',
				datafield : 'Country'
			} ]
		});
		// Orders Grid
		// prepare the data
		var dataFields = [ {
			name : 'CustomerID'
		}, {
			name : 'OrderID'
		}, {
			name : 'OrderDate',
			type : 'date'
		}, {
			name : 'ShippedDate',
			type : 'date'
		}, {
			name : 'ShipName'
		}, {
			name : 'ShipCountry'
		} ];
		var source = {
			datafields : dataFields,
			localdata : [ {
				"OrderID" : 10248,
				"CustomerID" : "ALFKI",
				"EmployeeID" : 5,
				"OrderDate" : "1996-07-04 00:00:00",
				"RequiredDate" : "1996-08-01 00:00:00",
				"ShippedDate" : "1996-07-16 00:00:00",
				"ShipVia" : 3,
				"Freight" : 32.3800,
				"ShipName" : "Vins et alcools Chevalier",
				"ShipAddress" : "59 rue de l-Abbaye",
				"ShipCity" : "Reims",
				"ShipRegion" : null,
				"ShipPostalCode" : 51100,
				"ShipCountry" : "France"
			}, {
				"OrderID" : 10249,
				"CustomerID" : "ALFKI",
				"EmployeeID" : 5,
				"OrderDate" : "1996-09-05 00:00:00",
				"RequiredDate" : "1996-10-01 00:00:00",
				"ShippedDate" : "1996-09-16 00:00:00",
				"ShipVia" : 3,
				"Freight" : 32.3800,
				"ShipName" : "Vins et alcools Chevalier",
				"ShipAddress" : "59 rue de l-Abbaye",
				"ShipCity" : "Reims",
				"ShipRegion" : null,
				"ShipPostalCode" : 51100,
				"ShipCountry" : "France"
			}, {
				"OrderID" : 10250,
				"CustomerID" : "ALFKI",
				"EmployeeID" : 5,
				"OrderDate" : "1996-10-04 00:00:00",
				"RequiredDate" : "1996-11-01 00:00:00",
				"ShippedDate" : "1996-10-16 00:00:00",
				"ShipVia" : 3,
				"Freight" : 32.3800,
				"ShipName" : "Vins et alcools Chevalier",
				"ShipAddress" : "59 rue de l-Abbaye",
				"ShipCity" : "Reims",
				"ShipRegion" : null,
				"ShipPostalCode" : 51100,
				"ShipCountry" : "France"
			},{
				"OrderID" : 10251,
				"CustomerID" : "ANATR",
				"EmployeeID" : 5,
				"OrderDate" : "1997-07-04 00:00:00",
				"RequiredDate" : "1997-08-01 00:00:00",
				"ShippedDate" : "1997-07-16 00:00:00",
				"ShipVia" : 3,
				"Freight" : 32.3800,
				"ShipName" : "Vins et alcools Chevalier",
				"ShipAddress" : "59 rue de l-Abbaye",
				"ShipCity" : "Reims",
				"ShipRegion" : null,
				"ShipPostalCode" : 51100,
				"ShipCountry" : "France"
			}, {
				"OrderID" : 10252,
				"CustomerID" : "ANATR",
				"EmployeeID" : 5,
				"OrderDate" : "1997-09-05 00:00:00",
				"RequiredDate" : "1997-10-01 00:00:00",
				"ShippedDate" : "1997-09-16 00:00:00",
				"ShipVia" : 3,
				"Freight" : 32.3800,
				"ShipName" : "Vins et alcools Chevalier",
				"ShipAddress" : "59 rue de l-Abbaye",
				"ShipCity" : "Reims",
				"ShipRegion" : null,
				"ShipPostalCode" : 51100,
				"ShipCountry" : "France"
			}]  
		};
		var dataAdapter = new $.jqx.dataAdapter(source);
		dataAdapter.dataBind();
		$("#customersGrid").on('rowselect', function(event) {
			var customerID = event.args.row.CustomerID;
			var records = new Array();
			var length = dataAdapter.records.length;
			for (var i = 0; i < length; i++) {
				var record = dataAdapter.records[i];
				if (record.CustomerID == customerID) {
					records[records.length] = record;
				}
			}
			var dataSource = {
				datafields : dataFields,
				localdata : records
			}
			var adapter = new $.jqx.dataAdapter(dataSource);

			// update data source.
			$("#ordersGrid").jqxGrid({
				source : adapter
			});
		});
		$("#ordersGrid").jqxGrid({
			theme: 'light',
			width : 1000,
			height : 250,
			keyboardnavigation : false,
			columns : [ {
				text : 'OrderID',
				datafield : 'OrderID',
				width : 100
			}, {
				text : 'OrderDate',
				datafield : 'OrderDate',
				cellsformat : 'd',
				width : 150
			}, {
				text : 'Shipped Date',
				datafield : 'ShippedDate',
				cellsformat : 'd',
				width : 150
			}, {
				text : 'Ship Name',
				datafield : 'ShipName'
			} ]
		});
		$("#customersGrid").jqxGrid('selectrow', 0);
	});
</script>

<head>
<script>
		function openNav() {
		    document.getElementById("mySidebar").style.width = "250px";
		    document.getElementById("main").style.marginLeft = "250px";
		}
		
		function closeNav() {
		    document.getElementById("mySidebar").style.width = "0";
		    document.getElementById("main").style.marginLeft= "0";
		}
	</script>
	<style type="text/css">
	.sidebar {
	   height: 100%;
	   width: 0;
	   position: fixed;
	   z-index: 88;
	   top: 0;
	   left: 0;
	   background-color: #111;
	   overflow-x: hidden;
	   transition: 0.5s;
	   padding-top: 60px;
	}
	
	.sidebar a {
	    padding: 8px 8px 8px 32px;
	    text-decoration: none;
	    font-size: 25px;
	    color: #818181;
	    display: block;
	    transition: 0.3s;
	}
	
	.sidebar a:hover {
	    color: #f1f1f1;
	}
	
	.sidebar .closebtn {
	    position: absolute;
	    top: 0;
	    right: 25px;
	    font-size: 36px;
	    margin-left: 50px;
	}
	
	.openbtn {
	    font-size: 15px;
	    cursor: pointer;  
	    background-color: #111;
	    color: white;
	    padding: 10px 15px;
	    border: none;
	}
	
	.openbtn:hover {
	    background-color: #444;
	}
	
	#main {
	    transition: margin-left .5s;
	    padding: 16px;
	}
	
	</style>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

	<div id="main">
	  <button class="openbtn" onclick="openNav()">☰ 페이지</button>  
	</div>

	<div id='jqxWidget'
		style="font-size: 13px; font-family: Verdana; float: left;">
		<h3>Customers</h3>
		<div id="customersGrid"></div>
		<h3>Orders by Customer</h3>
		<div id="ordersGrid"></div>
	</div>

</body>
</html>


