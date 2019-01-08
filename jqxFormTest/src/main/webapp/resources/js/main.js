requirejs.config({
    baseUrl: '/jqxFormTest/resources/js',
    paths: {
    	 'jQuery': 'jquery/jquery-3.3.1.min',
         //'jQueryui': 'jquery/jquery-ui',
         'jqx-all': 'jqwidgets/jqx-all',
         'jqxcore': 'jqwidgets/jqxcore',
         'jqxbuttons': 'jqwidgets/jqxbuttons',
         'jqxcalendar': 'jqwidgets/jqxcalendar',
         'jqxcheckbox': 'jqwidgets/jqxcheckbox',
         'jqxcombobox': 'jqwidgets/jqxcombobox',
         'jqxdatetimeinput': 'jqwidgets/jqxdatetimeinput',
         'jqxdropdownlist' : 'jqwidgets/jqxdropdownlist',
         'jqxform': 'jqwidgets/jqxform',
         'jqxformattedinput': 'jqwidgets/jqxformattedinput',
         'jqxinput': 'jqwidgets/jqxinput',
         'jqxlistbox': 'jqwidgets/jqxlistbox',
         'jqxmaskedinput': 'jqwidgets/jqxmaskedinput',
         'jqxnumberinput': 'jqwidgets/jqxnumberinput',
         'jqxpanel': 'jqwidgets/jqxpanel',
         'jqxpasswordinput': 'jqwidgets/jqxpasswordinput',
         'jqxradiobutton': 'jqwidgets/jqxradiobutton',
         'jqxscrollbar': 'jqwidgets/jqxscrollbar',
         'jqxtabs': 'jqwidgets/jqxtabs',
         'tab_init': 'tab/tab_init',        
         //'RealGridJS': ['realgrid/realgridjs-lic', 'realgrid/realgridjs_eval.1.1.28.min', 'realgrid/realgridjs-api.1.1.28','realgrid/jzip.min']
         'RealGridJS': 'realgrid/realgridjs-api.1.1.28'
    },
    waitSeconds: 200,
    shim: {
    	'jQuery': {
            exports: 'jQuery'
        },
        'jqxcore': {
            export: '$',
            deps: ['jQuery']
        },
        'jqxbuttons': {
            export: '$',
            deps: ['jQuery', 'jqxcore']
        },
        'jqxcalendar': {
            export: '$',
            deps: ['jQuery', 'jqxcore']
        },
        'jqxcheckbox': {
            export: '$',
            deps: ['jQuery', 'jqxcore']
        },
        'jqxcombobox': { 
            export: '$',
            deps: ['jQuery', 'jqxcore']
        },
        'jqxdatetimeinput': {
            export: '$',
            deps: ['jQuery', 'jqxcore']
        },
        'jqxform': { 
            export: '$',
            deps: ['jQuery', 'jqxcore']
        },
        'jqxform_origin': { 
            export: '$',
            deps: ['jQuery', 'jqxcore']
        },
        'jqxformattedinput': {
            export: '$',
            deps: ['jQuery', 'jqxcore']
        },
        'jqxinput': {
            export: '$',
            deps: ['jQuery', 'jqxcore']
        },
        'jqxlistbox': {
            export: '$',
            deps: ['jQuery', 'jqxcore']
        },
        'jqxmaskedinput': {
            export: '$',
            deps: ['jQuery', 'jqxcore']
        },
        'jqxnumberinput': {
            export: '$',
            deps: ['jQuery', 'jqxcore']
        },
        'jqxpanel': {
            export: '$',
            deps: ['jQuery', 'jqxcore']
        },
        'jqxpasswordinput': {
            export: '$',
            deps: ['jQuery', 'jqxcore']
        },
        'jqxradiobutton': {
            export: '$',
            deps: ['jQuery', 'jqxcore']
        },
        'jqxscrollbar': {
            export: '$',
            deps: ['jQuery', 'jqxcore']
        },
        'jqxtabs': {
            export: '$',
            deps: ['jQuery', 'jqxcore']
        },      
        'jqx-all': {
            export: '$',
            deps: ['jQuery']
        },
        'jqxdropdownlist': {
        	export: '$',
        	deps: ['jQuery', 'jqxcore']
        }
        
    }
    
});

/** common */
require(["util/common"], function (common) {
	return {
		common: common
	};
});


