// Virtual Keys - TODO : 분리
const VK = Object.freeze({
    LBUTTON : 0x01,
    RBUTTON : 0x02,
    CANCEL : 0x03,
    MBUTTON : 0x04,
    BACK : 0x08,
    TAB : 0x09,
    CLEAR : 0x0C,
    RETURN : 0x0D,
    SHIFT : 0x10,
    CONTROL : 0x11,
    MENU : 0x12,
    PAUSE : 0x13,
    CAPITAL : 0x14,
    ESCAPE : 0x1B,
    SPACE : 0x20,
    PRIOR : 0x21,
    NEXT : 0x22,
    END : 0x23,
    HOME : 0x24,
    LEFT : 0x25,
    UP : 0x26,
    RIGHT : 0x27,
    DOWN : 0x28,
    SELECT : 0x29,
    PRINT : 0x2A,
    EXECUTE : 0x2B,
    SNAPSHOT : 0x2C,
    INSERT : 0x2D,
    DELETE : 0x2E,
    HELP : 0x2F,
    
    /*
     * VK.0 - VK.9 are the same as ASCII '0' - '9' (0x30 - 0x39)
     * 0x40 : unassigned
     * VK.A - VK.Z are the same as ASCII 'A' - 'Z' (0x41 - 0x5A)
     */
    
    NUMPAD0 : 0x60,
    NUMPAD1 : 0x61,
    NUMPAD2 : 0x62,
    NUMPAD3 : 0x63,
    NUMPAD4 : 0x64,
    NUMPAD5 : 0x65,
    NUMPAD6 : 0x66,
    NUMPAD7 : 0x67,
    NUMPAD8 : 0x68,
    NUMPAD9 : 0x69,
    
    SEPARATOR : 0x6C,
    SUBTRACT : 0x6D,
    DECIMAL : 0x6E,
    DIVIDE : 0x6F,
    
    F1 : 0x70,
    F2 : 0x71,
    F3 : 0x72,
    F4 : 0x73,
    F5 : 0x74,
    F6 : 0x75,
    F7 : 0x76,
    F8 : 0x77,
    F9 : 0x78,
    F10 : 0x79,
    F11 : 0x7A,
    F12 : 0x7B,
    F13 : 0x7C,
    F14 : 0x7D,
    F15 : 0x7E,
    F16 : 0x7F,
    F17 : 0x80,
    F18 : 0x81,
    F19 : 0x82,
    F20 : 0x83,
    F21 : 0x84,
    F22 : 0x85,
    F23 : 0x86,
    F24 : 0x87,
    
    NUMLOCK : 0x90,
    SCROLL : 0x91,
    LSHIFT : 0xA0,
    RSHIFT : 0xA1,
    LCONTROL : 0xA2,
    RCONTROL : 0xA3,
    LMENU : 0xA4,
    RMENU : 0xA5,
    PLAY : 0xFA,
    ZOOM : 0xFB
});


/**
 * jqxForm Wrapping 파일입니다.  
 * 
 * 
 * Process
 *  
 * 1. 인스턴스 생성 
 *      createInstance() 호출
 *          -> iife 기반 jqxForm prototype 확장처리
 *          -> 확장된 prototype instance 반환
 *      
 *      
 * 2. form 초기화
 *      createForm() 호출
 *          -> 사용할 form에 대한 포인터설정
 *          -> form에 template 적용
 *          -> form prototype 반환 (npForm)
 *      
 *      
 *      ex) 
 *          let myForm = npForm.createInstance();
 *          myForm.createForm($("#formDiv"), myTemplate);
 *          
 */

define(["https://jqwidgets.com/public/jqwidgets/jqx-all.js"], function(jq){
    let createInstance = (function(base) {
        alert("들어왔다")
        function createInstance() {
            // 해당 IIFE 엄격한 검사처리
            "use strict";

            // npForm은 jqxForm의 prototype을 기반으로 확장됩니다.
            // Form Create시 초기화 (_createTemplateHtml)
            let _npForm;    // init return value (prototype)
            
            // jqxForm prototype 확장
            base.extend(base.jqx._jqxForm.prototype, {
                /***************************************************
                 * Functions
                 ***************************************************/
                
                
                /* createForm
                 * 
                 * npForm을 생성합니다. 
                 * 
                 * - param  
                 *    
                 *    form : form을 나타낼 div영역
                 *    
                 *    prop : form에 적용할 프로퍼티 object
                 *      - padding           : padding을 설정합니다
                 *      - backgroundColor   : backGroundColor를 설정합니다. 기본값은 #F5F5F5로 설정됩니다.
                 *      - borderColor       : borderColor를 설정합니다. 기본값은 #E5E5E5로 설정됩니다.      TODO: 적용확인 필요
                 *      - value             : Component들의 기본 값을 설정합니다.
                 *      - template          : 템플릿을 설정합니다. 템플릿은 form의 내용을 구성하는데 사용됩니다. 
                 *          
                 *          template options
                 *          - bind : 템플릿 멤버 이름을 설정합니다.
                 *          - type : 템플릿 멤버의 종류를 설정합니다. 'text', 'option', 'button'.. 등등 설정할 수있습니다.
                 *          - label : 화면에 나타낼 field의 label을 설정합니다.
                 *          - labelWidth : label의 너비를 설정합니다.
                 *          - required : field의 선택여부를 설정합니다.
                 *          - info : field의 정보 icon의 tooltip 메시지를 설정합니다.
                 *          - infoPosition : info icon의 위치를 설정합니다.
                 *          - component : 컴포넌트의 종류를 설정합니다. option사용시 jqxDropDownList, RadioButton을 식별시에 사용됩니다.
                 *          - options : option 내용을 설정합니다.
                 *          - init : custom type인 경우 초기화설정을 하는 콜백함수를 설정합니다.
                 *          - rowHeight : 행들의 높이를 설정합니다.
                 *          - width : 행들의 너비를 설정합니다.
                 *          - align : field의 좌우 정렬상태를 설정합니다. ('right', 'center', 'left')
                 *          - valign : field의 상하 정렬상태를 설정합니다. ('top', 'center', 'bottom')
                 *          - columnWidth : column의 너비를 설정합니다.
                 *          
                 *          
                 * - return : npForm prototype
                 */
                createForm : function(form, prop) {
                    // form 초기값 설정
                    this._host = form;
                    this._formId = form.attr("id");
                    this._template = prop.template;
                    
                    // form 생성
                    form.jqxForm(prop);
                    
                    // form prototype 반환
                    return _npForm;
                },
                
                
                // template를 기반으로 html을 생성합니다.
                _createTemplateHtml: function () {
                    let groups = this.groups;
                    let paddingAttr = "padding-left: " + parseFloat(this.padding.left) + "px;padding-right: " + parseFloat(this.padding.right) + "px;padding-top: " + parseFloat(this.padding.top) + "px;padding-bottom: " + parseFloat(this.padding.bottom) + "px;";
                    let formWrapTbl = "<table id='formWrap' style='background-color: " + this.backgroundColor + "; width: 100%; white-space: nowrap; border: 0px;" + paddingAttr + "' cellpadding='0' cellspacing='0'><div id='formSubmit' style='display:hidden;'><div>";

                    //_this = this;
                    this._template = this.template;
                    this._host = this.host;
                    this._formId = this._host.attr("id");   
                    
                    for (let i = 0; i < this._template.length; i++) {
                        let id = this._formId + "_el_" + i;   // 181113_kmh el_0 -> formId_el_01 
                        var templateElem = this._template[i];
                        var toolTemplate = this._getToolTemplate(templateElem, id);
                        formWrapTbl += toolTemplate;
                    }
                    formWrapTbl += "</table>";
                    return formWrapTbl;
                },
                // Component별 template을 가져옵니다.
                _getToolTemplate: function (h, s, j, q) {
                    var g = {};
                    
                    for (let p in h) {
                        g[p.toLowerCase()] = h[p];
                    }
                    if (base.isArray(g.columns) && isNaN(j)) {
                        var v = this._beginRow(s, g.rowheight || "auto");
                        for (var A = 0; A < g.columns.length; A++) {
                            var y = this._getToolTemplate(g.columns[A], (s + "_" + A), undefined, true);
                            var t = "auto";
                            if (g.columns[A].columnWidth !== undefined) {
                                t = g.columns[A].columnWidth
                            } else {
                                if (g.columns[A].width !== undefined) {
                                    t = g.columns[A].width
                                }
                            }
                            v += this._beginColumn(t);
                            v += "<table cellspacing='0' cellpadding='0' style='width: 100%; white-space: nowrap; border: 0px;'>" + y + "</table>";
                            v += this._endColumn()
                        }
                        v += this._endRow();
                        return v
                    }
                    
                    if (g.type == "option" && g.component != "jqxDropDownList") {
                        if (isNaN(j)) {
                            var B = this._beginRow(s, g.rowheight || "auto", g.valign);
                            for (var A = 0; A < g.options.length; A++) {
                                var y = this._getToolTemplate(g, (s + "_option_" + A), A, true);
                                if (g.optionslayout == "horizontal") {
                                    var t = 100 / Math.max(1, g.options.length) + "%";
                                    if (g.columnwidth) {
                                        t = g.columnwidth
                                    }
                                    B += this._beginColumn(t);
                                    B += "<table cellspacing='0' cellpadding='0' style='width: 100%; white-space: nowrap; border: 0px;'>" + y + "</table>";
                                    B += this._endColumn()
                                } else {
                                    B += y
                                }
                            }
                            B += this._endRow();
                            return B
                        }
                    }
                    var d = g.labelposition;
                    var m = g.label;
                    var k = "";
                    if (g.type == "option" && g.component != "jqxDropDownList" && !isNaN(j)) {
                        var k = g.options[j].label;
                        m = k
                    }
                    if (m === undefined) {
                        m = ""
                    }
                    var B = "";
                    var b = this._getToolLabelStyle(g) + this._getPaddingAndMarginStyle(g, true);
                    var r = this._getToolStyle(g) + this._getPaddingAndMarginStyle(g, false);
                    var e = "";
                    var x = this._getAlignMargin(g, "align");
                    var C = "text-align: left;";
                    if (g.labelalign == "center" || g.labelalign == "middle") {
                        C = "text-align: center"
                    } else {
                        if (g.labelalign == "right") {
                            C = "text-align: right"
                        }
                    }
                    var D = "text-align: left;";
                    if (g.align == "center" || g.align == "middle") {
                        D = "text-align: center"
                    } else {
                        if (g.align == "right") {
                            D = "text-align: right"
                        }
                    }
                    var o = this._splitLabelToolWidth(g, q);
                    var f = m;
                    if (g.required) {
                        var n = "<span class='" + e + "' style='color:red;'>*</span>";
                        if (g.requiredposition) {
                            if (g.requiredposition.toLowerCase() == "left") {
                                f = n + " " + m
                            } else {
                                f = m + " " + n
                            }
                        } else {
                            f = m + " " + n
                        }
                    }
                    var w = "";
                    if (g.type == "boolean" || (g.type == "option" && !isNaN(j))) {
                        w += "; cursor: pointer;"
                    }
                    var l = "<div class='" + e + "' style='" + b + "'><div style='" + C + w + ";' id='label_" + s + "'>" + f + "</div></div>";
                    var z = (g.info !== undefined && g.infoposition != "left") ? "margin-left: -3px;" : "margin-right: -3px;";
                    var c = "<div style='" + z + "' class='" + this.toThemeProperty("jqx-info-icon") + "' title='" + g.info + "'></div>";
                    var u = "<div style='background: transparent;" + r + "'><div style='width: auto; height: auto; " + x + "' id='" + s + "'></div></div>";
                    if (g.type == "text" || g.type == "button") {
                        u = "<div style='background: transparent;" + r + D + "'><input style='width: auto; height: auto; " + x + "' id='" + s + "' type='" + g.type + "'/></div>"
                    } else {
                        if (g.type == "password") {
                            u = "<div style='background: transparent;" + r + D + "'><input type='password' style='width: auto; height: auto; " + x + "' id='" + s + "'/></div>"
                        } else if (g.type === "formattedinput") {   
                            // 181120_kmh formattedinput element 추가
                            u = "<div style='background: transparent;" + r + D + "'>" +
                                    "<div style='width: auto; height: auto; " + x + "' id='" + s + "'>" + 
                                        "<input type='text' />" +
                                        "<div></div>" +
                                        "<div></div>" +
                                    "</div>" + 
                                "</div>";
                        } else if (g.type === "complexinput") {
                            // 181121_kmh complexinput element 추가
                            u = "<div style='background: transparent;" + r + D + "'>" +
                                    "<div style='width: auto; height: auto; " + x + "' id='" + s + "'>" + 
                                        "<input type='text' />" +
                                        "<div></div>" +
                                    "</div>" + 
                                "</div>";
                        } else if (g.type === "titleArrow") {
                            // 190213_kmh titleArrow 추가
                            u = "<div style='background: transparent;" + r + D + "'>" +
                                    "<div style='width: auto; height: auto; " + x + "'>" + 
                                        "<img src='/kclepEn/resources/img/title_arrow.png'/>" +
                                    "</div>" + 
                                "</div>";
                        }
                    } 
                    if (g.type == "option" && g.component != "jqxDropDownList" && !isNaN(j)) {
                        var t = g.width;
                        if (t === undefined) {
                            t = "15px"
                        }
                        o = [g.labelwidth || "auto", t];
                        if (g.labelposition && (g.labelposition == "top" || g.labelposition == "bottom")) {
                            o = ["100%", "100%"]
                        }
                        u = "<div style='background: transparent;" + r + x + D + "'><div style='width: " + t + "; height: 100%; " + x + D + ";' id='" + s + "'></div></div>"
                    }
                    if (g.info !== undefined && g.info !== "") {
                        if (g.infoposition == "left") {
                            u = "<table cellspacing='0' cellpadding='0' style='border: 0px; white-space: nowrap;" + x + "'><tr><td>" + c + "</td><td>" + u + "</td></tr></table>"
                        } else {
                            u = "<table cellspacing='0' cellpadding='0' style='border: 0px; white-space: nowrap;" + x + "'><tr><td>" + u + "</td><td>" + c + "</td></tr></table>"
                        }
                    }
                    if (d == "right") {
                        B += this._beginRow(s, g.rowheight || "auto", g.valign);
                        B += this._beginColumn(o[1]);
                        B += u;
                        if (m != "") {
                            B += this._endColumn();
                            B += this._beginColumn(o[0]);
                            B += l
                        }
                        B += this._endColumn();
                        B += this._endRow()
                    } else {
                        if (d == "top") {
                            B += this._beginRow(s, g.rowheight || "auto", g.valign);
                            B += this._beginColumn(g.columnwidth);
                            if (m != "") {
                                B += l
                            }
                            B += u;
                            B += this._endColumn();
                            B += this._endRow()
                        } else {
                            if (d == "bottom") {
                                B += this._beginRow(s, g.rowheight || "auto", g.valign);
                                B += this._beginColumn(g.columnwidth);
                                B += u;
                                if (m != "") {
                                    B += l
                                }
                                B += this._endColumn();
                                B += this._endRow()
                            } else {
                                B += this._beginRow(s, g.rowheight || "auto", g.valign);
                                if (m != "") {
                                    B += this._beginColumn(o[0]);
                                    B += l;
                                    B += this._endColumn()
                                }
                                B += this._beginColumn(o[1]);
                                B += u;
                                B += this._endColumn();
                                B += this._endRow()
                            }
                        }
                    }
                    
                    return B
                },
                // Component를 초기화합니다.
                _initTools: function (f, e) {
                    var d = f || this._template;
                    if (undefined == e) {
                        e = ""
                    }
                    for (var c = 0; c < d.length; c++) {
                        var b = d[c];
                        if (base.isArray(b.columns)) {
                            this._initTools(b.columns, c + "_");
                            continue
                        }
                        var g = e + c;
                        
                        switch (b.type.toLowerCase()) {
                        case "color":
                            this._initColorTool(g);
                            break;
                        // radio button
                        case "option":
                            if (b.component == "jqxDropDownList") {
                                this._initOptionToolDropDownList(g)
                            } else {
                                this._initOptionTool(g);
                            }
                            break;
                        case "dropdownlist":
                            this._initOptionToolDropDownList(g);
                            break;
                        case "number":
                        case "numberinput":
                            this._initNumberTool(g);
                            break;
                        case "boolean":
                        case "checkbox":
                            this._initBooleanTool(g);
                            break;
                        case "text":
                            this._initTextTool(g);
                            break;
                        case "password":
                            this._initPasswordTool(g);
                            break;
                        case "label":
                            this._initLabelTool(g);
                            break;
                        case "date":
                        case "time":
                        case "datetime":
                            this._initDateTimeTool(g);
                            break;
                        case "maskedinput":
                            this._initMaskedInputTool(g);
                            break;
                        case "formattedinput":
                            this._initFormattedInputTool(g);
                            break;
                        case "complexinput":
                            this._initComplexInputTool(g);
                            break;
                        case "button":
                            this._initButtonTool(g);
                            break;
                        case "repeatbutton":
                            this._initRepeatButtonTool(g);
                            break;
                        case "togglebutton":
                            this._initToggleButtonTool(g);
                            break;
                        case "linkbutton":
                            this._initLinkButtonTool(g);
                            break;
                        case "switchbutton":
                            this._initSwitchButtonTool(g);
                            break;
                        case "dropdownbutton":
                            this._initDropDownButtonTool(g);
                            break;
                            
                        case "custom":
                            this._initCustomTool(g);
                            break;
                        }
                        if (b.visible === false) {
                            this._showhideComponent(undefined, g, false)
                        }
                        if (b.theme) {
                            this._setToolTheme(b, g)
                        }
                        
                        // 전체 EventHandler 등록 
                        let _this = this;   // prototype의 this pointer 가져옴
                        _this._addNpEventHandlers(g);
                    }
                },
                
                /* _addNpEventHandlers
                 * 
                 * template생성시 해당 element에 전체 eventHandler를 추가합니다.
                 * 이 후 추가,삭제는 type별 생성시에 처리합니다.
                 * 
                 * - param  
                 *    seq     : template에 따라 자동생성되는 seq
                 *          
                 */
                _addNpEventHandlers : function(seq) {
                    let _this = this;
                    
                    let id = this._formId + "_el_" + seq;
                    let elem = this._host.find("#" + id);
                
                    elem.on("keydown", function(event) {
                        _this._onNpKeyDownHandler(event, id);
                    });
                    elem.on("keyup", function(event) {
                        _this._onNpKeyUpHandler(event, id);
                    });
                    elem.on("keypress", function(event) {
                        _this._onNpKeyPressHandler(event, id);
                    });

                    elem.on("click", function(event) {
                        _this._onNpClickHandler(event, id);
                    });
                    elem.on("dblclick", function(event) {
                        _this._onNpDblClickHandler(event, id);
                    });
                    elem.on("mousedown", function(event) {
                        _this._onNpMouseDownHandler(event, id);
                    });
                    elem.on("mousemove", function(event) {
                        _this._onNpMouseMoveHandler(event, id);
                    });
                    elem.on("mouseout", function(event) {
                        _this._onNpMouseOutHandler(event, id);
                    });
                    elem.on("mouseup", function(event) {
                        _this._onNpMouseUpHandler(event, id);
                    });
                    elem.on("wheel", function(event) {
                        _this._onNpWheelHandler(event, id);
                    });
                    
                    elem.on("change", function(event) {
                        _this._onNpFormDataChangeHandler(event, id);
                    })
                },
                
                // Label 영역을 초기화합니다.
                _initLabelTool: function (seq) {
                    let id = this._formId + "_el_" + seq;
                    let obj = this._getTool(seq);
                    let elem = this.host.find("#" + id);
                    
                    if (obj.render && base.isFunction(obj.render)) {    
                        let render = obj.render();
                        elem.html(render || "")
                    }
                },
                
                // Input 영역을 초기화합니다.
                _initTextTool: function (seq) {
                    let _this = this;
                    
                    let id = this._formId + "_el_" + seq;
                    let obj = this._getTool(seq);
                    let elem = this._host.find("#" + id);
                    
                    if (obj.init) {
                        obj.init(elem);
                    } else {
                        
                        let width = isNaN(parseFloat(obj.width)) ? "auto" : obj.width;
                        let height = typeof obj.height === "undefined" ? 22 : obj.height;   // TODO : 기본 height 공통설정방법?
                        let placeHolder = typeof obj.placeHolder === "undefined" ? "" : obj.placeHolder;
                        let disabled = obj.disabled;
                        let source = typeof obj.source === "undefined" ? [] : obj.source;
                        let minLength = isNaN(parseInt(obj.minLength)) ? 1 : obj.minLength;
                        let dropDownWidth = isNaN(parseFloat(obj.dropDownWidth)) ? null : obj.dropDownWidth;
                        let displayMember = typeof obj.displayMember === "undefined" ? "" : obj.displayMember;
                        let valueMember = typeof obj.valueMember === "undefined" ? "" : obj.valueMember;
                        let items = typeof obj.items === "undefined" ? 8 : obj.items;
                        let maxLength = typeof obj.maxLength === "undefined" ? null : obj.maxLength;
                        let opened = typeof obj.opened === "undefined" ? false : obj.opened;
                        let popupZIndex = typeof obj.popupZIndex === "undefined" ? 2000 : obj.popupZIndex;
                        //let renderer = typeof obj.renderer === "undefined" ? b => {return b} : obj.renderer; // this._renderer 미호출된다?
                        let renderer = typeof obj.renderer === "undefined" ? function(b) {return b} : obj.renderer; // this._renderer 미호출된다?
                        let rtl = typeof obj.rtl === "undefined" ? false : obj.rtl;
                        let theme = typeof obj.theme === "undefined" ? "" : obj.theme;
                        
                        // Properties
                        elem.jqxInput({
                            "theme" : theme,
                            "width" : width,
                            "height" : height,
                            "placeHolder" : placeHolder,
                            "disabled" : disabled,
                            "source" : source,
                            "minLength" : minLength,
                            "dropDownWidth" : dropDownWidth,
                            "displayMember" : displayMember,
                            "valueMember" : valueMember,
                            "items" : items,
                            "maxLength" : maxLength,
                            "opened" : opened,
                            "popupZIndex" : popupZIndex,
                            "renderer" : renderer,
                            "rtl" : rtl,
                        });
                    }
                    
                    /*
                    _host.find("#" + id).on("keydown", function (event) {
                        // 'F2' 키 입력시 codeHelper EventHandler 추가
                        if(event.which === 113) {
                            _this._setCodeHelper(id);
                        } else {
                            _this._onKeyDown(event.which, id);
                        }                
                    });
                    */

                    /*
                    elem.on("change", function (event) {
                        //_this._onChangeHandler(event);
                        _this._onNpFormDataChange(event, id);
                    });
                    */
                },
                
                // NumberInput 영역을 초기화합니다.
                _initNumberTool: function (seq) {
                    let id = this._formId + "_el_" + seq;
                    let obj = this._getTool(seq);
                    let elem = this._host.find("#" + id);
                    
                    if (obj.init) {
                        obj.init(elem);
                    } else {
                        let width = isNaN(parseFloat(obj.width)) ? 200 : obj.width;
                        let height = typeof obj.height === "undefined" ? 22 : obj.height;   // TODO : 기본 height 공통설정방법?
                        let allowNull = typeof obj.allowNull === "undefined" ? true : obj.allowNull;
                        let decimal = typeof obj.decimal === "undefined" ? 0 : obj.decimal;
                        let disabled = typeof obj.disabled === "undefined" ? false : obj.disabled;
                        let decimalDigits = typeof obj.decimalDigits === "undefined" ? 2 : obj.decimalDigits;
                        let decimalSeparator = typeof obj.decimalSeparator === "undefined" ? "." : obj.decimalSeparator;
                        let digits = typeof obj.digits === "undefined" ? 8 : obj.digits;
                        let groupSeparator = typeof obj.groupSeparator === "undefined" ? "," : obj.groupSeparator;
                        let groupSize = typeof obj.groupSize === "undefined" ? 3 : obj.groupSize;
                        let inputMode = typeof obj.inputMode === "undefined" ? "advanced" : obj.inputMode;
                        let min = typeof obj.min === "undefined" ? -99999999 : obj.min;
                        let max = typeof obj.max == "undefined" ? 99999999 : obj.max;
                        let negativeSymbol = typeof obj.negativeSymbol === "undefined" ? "-" : obj.negativeSymbol;
                        let placeHolder = typeof obj.placeHolder === "undefined" ? "" : obj.placeHolder;
                        let promptChar = typeof obj.promptChar === "undefined" ? "_" : obj.promptChar;
                        let rtl = typeof obj.rtl === "undefined" ? false : obj.rtl;
                        let spinButtons = typeof obj.spinButtons === "undefined" ? false : obj.spinButtons;
                        let readOnly = typeof obj.readOnly === "undefined" ? false : obj.readOnly;
                        let spinMode = typeof obj.spinMode === "undefined" ? "advanced" : obj.spinMode;
                        let spinButtonsWidth = typeof obj.spinButtonsWidth === "undefined" ? 18 : obj.spinButtonsWidth;
                        let spinButtonsStep = typeof obj.spinButtonsStep === "undefined" ? 1 : obj.spinButtonsStep;
                        let symbol = typeof obj.symbol === "undefined" ? "" : obj.symbol;
                        let symbolPosition = typeof obj.symbolPosition === "undefined" ? "left" : obj.symbolPosition;
                        let textAlign = typeof obj.textAlign === "undefined" ? "right" : obj.textAlign;
                        let template = typeof obj.template === "undefined" ? "default" : obj.template;
                        let theme = typeof obj.theme === "undefined" ? "" : obj.theme;
                        
                        elem.jqxNumberInput({
                            "allowNull" : allowNull,
                            "decimal" : decimal,
                            "disabled" : disabled,
                            "decimalDigits" : decimalDigits,
                            "decimalSeparator" : decimalSeparator,
                            "digits" : digits,
                            "groupSeparator" : groupSeparator,
                            "groupSize" : groupSize,
                            "height" : height,
                            "inputMode" : inputMode,
                            "min" : min,
                            "max" : max,
                            "negativeSymbol" : negativeSymbol,
                            "placeHolder" : placeHolder,
                            "promptChar" : promptChar,
                            "rtl" : rtl,
                            "readOnly" : readOnly,
                            "spinMode" : spinMode,
                            "spinButtons" : spinButtons,
                            "spinButtonsWidth": spinButtonsWidth,
                            "spinButtonsStep" : spinButtonsStep,
                            "symbol" : symbol,
                            "symbolPosition" : symbolPosition,
                            "textAlign" : textAlign,
                            "template" : template,
                            "theme" : theme,
                            "width" : width,
                        })
                    }
                    
                    /*
                    elem.on("change", function (i) {
                        _this._onChangeHandler(i)
                    });
                    
                    _host.find("#" + id).on("keydown", function (event) {
                        _this._onKeyDown(event.which, id);
                    });
                    */
                },
                
                // PasswordInput 영역을 초기화합니다.
                _initPasswordTool: function (seq) {
                    let id = this._formId + "_el_" + seq;
                    let obj = this._getTool(seq);
                    let elem = this._host.find("#" + id);
                    
                    if (obj.init) {
                        obj.init(elem);
                    } else {
                        let width = isNaN(parseFloat(obj.width)) ? "auto" : obj.width;
                        let height = typeof obj.height === "undefined" ? 22 : obj.height;   // TODO : 기본 height 공통설정방법?
                        let disabled = obj.disabled;
                        let showStrength = typeof obj.showStrength === "undefined" ? false : obj.showStrength;
                        let localization = typeof obj.localization === "undefined" ? 
                                {
                                    "passwordStrengthString" : "Password strength",
                                    "tooShort": "Too short",
                                    "weak" : "Weak",
                                    "fair" : "Fair",
                                    "good" : "Good",
                                    "strong" : "Strong",
                                    "showPasswordString" : "Show Password"
                                } : obj.localization;
                        let maxLength = typeof obj.maxLength === "undefined" ? null : obj.maxLength;
                        let placeHolder = typeof obj.placeHolder === "undefined" ? null : obj.placeHolder
                        let passwordStrength = typeof obj.passwordStrength === "undefined" ? null : obj.passwordStrength;
                        let rtl = typeof obj.rtl === "undefined" ? false : obj.rtl;
                        let strengthColors = typeof obj.strenghColors === "undefined" ?
                                {
                                    tooShort: "rgb(170, 0, 51)",
                                    weak: "rgb(170, 0, 51)",
                                    fair: "rgb(255, 204, 51)",
                                    good: "rgb(45, 152, 243)",
                                    strong: "rgb(118, 194, 97)"
                                } : obj.strengthColors;
                        let showStrengthPosition = typeof obj.showStrengthPosition === "undefined" ?
                                "right" : obj.showStrengthPosition;
                        
                        let strengthTypeRenderer = typeof obj.strengthTypeRenderer === "undefined" ?
                                null : obj.strengthTypeRenderer;
                        
                        let showPasswordIcon = typeof obj.showPasswordIcon === "undefined" ? true : obj.showPasswordIcon;
                        let theme = typeof obj.theme === "undefined" ? "" : obj.theme;
                        
                        // Properties
                        elem.jqxPasswordInput({
                            "theme" : theme,
                            "width" : width,
                            "height" : height,
                            "disabled" : disabled,
                            "showStrength" : showStrength,
                            "localization" : localization,
                            "maxLength" : maxLength,
                            "placeHolder" : placeHolder,
                            "passwordStrength" : passwordStrength,
                            "rtl" : rtl,
                            "strengthColors" : strengthColors,
                            "showStrengthPosition" : showStrengthPosition,
                            "strengthTypeRenderer" : strengthTypeRenderer,
                            "showPasswordIcon" : showPasswordIcon,
                            
                            minLength: null,
                            changeType: null,
                            hint: true,
                        });
                    }

                    /*
                    elem.on("change", function (event) {
                        _this._onChangeHandler(event);
                    });
                    
                    _host.find("#" + id).on("keydown", function (event) {
                        _this._onKeyDown(event.which, id);
                    });
                    */
                },
                
                // DatetimeInput 영역을 초기화합니다.
                _initDateTimeTool: function (seq) {
                    let id = this._formId + "_el_" + seq;
                    let obj = this._getTool(seq);
                    let elem = this._host.find("#" + id);
                    
                    if (obj.init) {
                        obj.init(elem);
                    } else {
                        let width = isNaN(parseFloat(obj.width)) ? "auto" : obj.width;
                        let height = typeof obj.height === "undefined" ? 22 : obj.height;   // TODO : 기본 height 공통설정방법?
                        let formatString = obj.formatString;
                        
                        if (!formatString) {
                            if (obj.type == "time") {
                                formatString = "hh mm ss tt";
                            } else {
                                if (obj.type == "date") {
                                    formatString = "MM/dd/yyyy";
                                } else {
                                    formatString = "MM/dd/yyyy hh:mm:ss tt";
                                }
                            }
                        }
                        
                        let animationType = typeof obj.animationType === "undefined" ? "slide" : obj.animationType;
                        let allowNullDate = typeof obj.allowNullDate === "undefined" ? true : obj.allowNullDate;
                        let allowKeyboardDelete = typeof obj.allowKeyboardDelete === "undefined" ? true : obj.allowKeyboardDelete;
                        let showFooter = typeof obj.showFooter === "undefined" ? false : obj.showFooter;
                        let clearString = typeof obj.clearString === "undefined" ? "Clear" : obj.clearString; 
                        let culture = typeof obj.culture === "undefined" ? "default" : obj.culture;
                        let closeDelay = typeof obj.closeDelay === "undefined" ? 400 : obj.closeDelay;
                        let closeCalendarAfterSelection = typeof obj.closeCalendarAfterSelection === "undefined" ? true : obj.closeCalendarAfterSelection;
                        let dropDownHorizontalAlignment = typeof obj.dropDownHorizontalAlignment === "undefined" ? "left" : obj.dropDownHorizontalAlignment;
                        let dropDownVerticalAlignment = typeof obj.dropDownVerticalAlignment === "undefined" ? "bottom" : obj.dropDownVerticalAlignment;
                        let disabled = typeof obj.disabled === "undefined" ? false : obj.disabled;
                        let enableBrowserBoundsDetection = typeof obj.enableBrowserBoundsDetection === "undefined" ? false : obj.enableBrowserBoundsDetection;
                        let enableAbsoluteSelection = typeof obj.enableAbsoluteSelection === "undefined" ? false : obj.enableAbsoluteSelection;
                        let firstDayOfWeek = typeof obj.firstDayOfWeek === "undefined" ? 0 : obj.firstDayOfWeek;
                        let min = typeof obj.min === "undefined" ? new Date(1900, 0, 1) : obj.min;
                        let max = typeof obj.max === "undefined" ? new Date(2100, 0, 1) : obj.max;
                        let openDelay = typeof obj.openDelay === "undefined" ? 250 : obj.openDelay;
                        let placeHolder = typeof obj.placeHolder === "undefined" ? "" : obj.placeHolder;
                        let popupZIndex = typeof obj.popupZIndex === "undefined" ? 2000 : obj.popupZIndex;
                        let rtl = typeof obj.rtl === "undefined" ? false : obj.rtl;
                        let readonly = typeof obj.readonly === "undefined" ? false : obj.readonly;
                        let selectionMode = typeof obj.selectionMode === "undefined" ? "default" : obj.selectionMode;
                        let showWeekNumbers = typeof obj.showWeekNumbers === "undefined" ? false : obj.showWeekNumbers;
                        let showTimeButton = typeof obj.showTimeButton === "undefined" ? false : obj.showTimeButton;
                        let showCalendarButton = typeof obj.showCalendarButton === "undefined" ? true : obj.showCalendarButton;
                        let theme = typeof obj.theme === "undefined" ? "" : obj.theme;
                        let template = typeof obj.template === "undefined" ? "default" : obj.template;
                        let textAlign = typeof obj.textAlign === "undefined" ? "left" : obj.textAlign;
                        let todayString = typeof obj.todayString === "undefined" ? "Today" : obj.todayString;
                        let value = typeof obj.value === "undefined" ? new Date() : obj.value; 
                                
                        // Properties
                        elem.jqxDateTimeInput({
                            "theme": theme,
                            "width": width,
                            "height": height,
                            "formatString": formatString,
                            "animationType" : animationType,
                            "allowNullDate" : allowNullDate,
                            "allowKeyboardDelete" : allowKeyboardDelete,
                            "showFooter" : showFooter,
                            "clearString" : clearString,
                            "culture" : culture,
                            "closeDelay" : closeDelay,
                            "closeCalendarAfterSelection" : closeCalendarAfterSelection,
                            "dropDownVerticalAlignment" : dropDownVerticalAlignment,
                            "dropDownHorizontalAlignment" : dropDownHorizontalAlignment,
                            "disabled" : disabled,
                            "enableBrowserBoundsDetection" : enableBrowserBoundsDetection,
                            "enableAbsoluteSelection" : enableAbsoluteSelection,
                            "firstDayOfWeek" : firstDayOfWeek,
                            "min" : min,
                            "max" : max,
                            "openDelay" : openDelay,
                            "placeHolder" : placeHolder,
                            "popupZIndex" : popupZIndex,
                            "rtl" : rtl,
                            "readonly" : readonly,
                            "selectionMode" : selectionMode,
                            "showWeekNumbers" : showWeekNumbers,
                            //"showTimeButton": obj.type != "date",         // TODO : date, time 분리해서 처리할건지?
                            //"showCalendarButton": obj.type != "time",
                            "showTimeButton" : showTimeButton,
                            "showCalendarButton" : showCalendarButton,
                            "template" : template,
                            "textAlign" : textAlign,
                            "todayString" : todayString,
                            "value" : value
                        });
                    }

                    /*
                    elem.on("valueChanged", function (event) {
                        _this._onChangeHandler(event);
                    });
                    
                    _host.find("#" + id).on("keydown", function (event) {
                        _this._onKeyDown(event.which, id);
                    });
                    */
                },
                
                // MaskedInput 영역을 초기화합니다.
                _initMaskedInputTool: function(seq) {
                    let id = this._formId + "_el_" + seq;
                    let obj = this._getTool(seq);
                    let elem = this._host.find("#" + id);
                    
                    if (obj.init) {
                        obj.init(elem);
                    } else {
                        let disabled = typeof obj.disabled === "undefined" ? false : obj.disabled;
                        let placeHolder = typeof obj.placeHolder === "undefined" ? "" : obj.placeHolder;
                        let width = isNaN(parseFloat(obj.width)) ? "200px" : obj.width;
                        let height = typeof obj.height === "undefined" ? 22 : obj.height;   // TODO : 기본 height 공통설정방법?
                        let mask = typeof obj.mask === "undefined" ? "99999" : obj.mask;
                        let promptChar = typeof obj.promptChar === "undefined" ? "_" : obj.promptChar;
                        let readOnly = typeof obj.readOnly === "undefined" ? false : obj.readOnly;
                        let rtl = typeof obj.rtl === "undefined" ? false : obj.rtl;
                        let theme = typeof obj.theme === "undefined" ? "" : obj.theme;
                        let textAlign = typeof obj.textAlign === "undefined" ? "left" : obj.textAlign;
                        let value = typeof obj.value === "undefined" ? null : obj.value;
                        
                        elem.jqxMaskedInput({
                            "disabled" : disabled,
                            "placeHolder" : placeHolder, 
                            "width" : width,
                            "height" : height,
                            "mask" : mask,
                            "promptChar" : promptChar,
                            "readOnly" : readOnly,
                            "rtl" : rtl,
                            "theme" : theme,
                            "textAlign" : textAlign,
                            "value" : value
                        });
                    }

                    /*
                    _host.find("#" + id).on("keydown", function (event) {
                        _this._onKeyDown(event.which, id);
                    });
                    */
                },
                
                // FormattedInput 영역을 초기화합니다.
                _initFormattedInputTool: function(seq) {
                    let id = this._formId + "_el_" + seq;
                    let obj = this._getTool(seq);
                    let elem = this._host.find("#" + id);
                    
                    if (obj.init) {
                        obj.init(elem);
                    } else {
                        let disabled = typeof obj.disabled === "undefined" ? false : obj.disabled; 
                        let decimalNotation = typeof obj.decimalNotation === "undefined" ? "default" : obj.decimalNotation;        
                        let dropDown = typeof obj.dropDown === "undefined" ? false : obj.dropDown;
                        let dropDownWidth = typeof obj.dropDownWidth === "undefined" ? null : obj.dropDownWidth; 
                        let width = isNaN(parseFloat(obj.width)) ? 200 : obj.width;
                        let height = typeof obj.height === "undefined" ? 22 : obj.height;   // TODO : 기본 height 공통설정방법?
                        let min = typeof obj.min === "undefined" ? "-9223372036854775808" : obj.min; 
                        let max = typeof obj.max === "undefined" ? "9223372036854775807" : obj.max;
                        let placeHolder = typeof obj.placeHolder === "undefined" ? "" : obj.placeHolder;
                        let popupZIndex = typeof obj.popupZIndex === "undefined" ? 20000 : obj.popupZIndex;
                        let roundedCorners = typeof obj.roundedCorners === "undefined" ? true : obj.roundedCorners;
                        let rtl = typeof obj.rtl === "undefined" ? false : obj.rtl; 
                        let radix = typeof obj.radix === "undefined" ? 10 : obj.radix;
                        let spinButtons = typeof obj.spinButtons === "undefined" ? true : obj.spinButtons;
                        let spinButtonsStep = typeof obj.spinButtonsStep === "undefined" ? 1 : obj.spinButtonsStep;
                        let template = typeof obj.template === "undefined" ? "" : obj.template;
                        let theme = typeof obj.theme === "undefined" ? "" : obj.theme; 
                        let upperCase = typeof obj.upperCase === "undefined" ? "" : obj.upperCase;
                        let value = typeof obj.value === "undefined" ? "0" : obj.value;
                        
                        elem.jqxFormattedInput({
                            "disabled" : disabled,
                            "decimalNotation" : decimalNotation,
                            "dropDown" : dropDown,
                            "dropDownWidth" : dropDownWidth,
                            "height" : height,
                            "min" : min,
                            "max" : max,
                            "placeHolder" : placeHolder,
                            "popupZIndex" : popupZIndex,
                            "roundedCorners" : roundedCorners,
                            "rtl" : rtl,
                            "radix" : radix,
                            "spinButtons" : spinButtons,
                            "spinButtonsStep" : spinButtonsStep,
                            "template" : template,
                            "theme" : theme,
                            "upperCase" : upperCase,
                            "value" : value,
                            "width" : width,

                            "changeType" : null,
                            "hint" : true,
                            "_opened" : false,
                            "$popup" : base("<ul></ul>"),
                            "item" : '<li><a href="#"></a></li>',
                        });
                    }

                    /*
                    _host.find("#" + id).on("keydown", function (event) {
                        _this._onKeyDown(event.which, id);
                    });
                    */
                },
                
                // ComplexInput 영역을 초기화합니다.
                _initComplexInputTool: function(seq) {
                    let id = this._formId + "_el_" + seq;
                    let obj = this._getTool(seq);
                    let elem = this._host.find("#" + id);
                    
                    if (obj.init) {
                        obj.init(elem);
                    } else {
                        let decimalNotation = typeof obj.decimalNotation === "undefined" ? "default" : obj.decimalNotation;
                        let disabled = typeof obj.disabled === "undefined" ? false : obj.disabled;
                        let height = typeof obj.height === "undefined" ? 22 : obj.height;   // TODO : 기본 height 공통설정방법?
                        let placeHolder = typeof obj.placeHolder === "undefined" ? "" : obj.placeHolder;
                        let roundedCorners = typeof obj.roundedCorners === "undefined" ? true : obj.roundedCorners;
                        let rtl = typeof obj.rtl === "undefined" ? false : obj.rtl;
                        let spinButtons = typeof obj.spinButtons === "undefined" ? false : obj.spinButtons;
                        let spinButtonsStep = typeof obj.spinButtonsStep === "undefined" ? 1 : obj.spinButtonsStep;
                        let template = typeof obj.template === "undefined" ? "default" : obj.template;
                        let theme = typeof obj.theme === "undefined" ? "" : obj.theme;
                        let value = typeof obj.value === "undefined" ? "" : obj.value;
                        let width = isNaN(parseFloat(obj.width)) ? 200 : obj.width;
                        
                        elem.jqxComplexInput({
                            "decimalNotation" : decimalNotation,
                            "disabled" : disabled,
                            "height" : height,
                            "placeHolder" : placeHolder,
                            "roundedCorners" : roundedCorners,
                            "rtl" : rtl, 
                            "spinButtons" : spinButtons,
                            "spinButtonsStep" : spinButtonsStep,
                            "template" : template,
                            "theme" : theme,
                            "value" : value,
                            
                            
                            "width" : width,
                            "changeType" : null,
                            "hint" : true,
                        });
                    }

                    /*
                    _host.find("#" + id).on("keydown", function (event) {
                        _this._onKeyDown(event.which, id);
                    });
                    */
                },
                
                // Button 영역을 초기화합니다.
                _initButtonTool: function (seq) {
                    let id = this._formId + "_el_" + seq;
                    let obj = this._getTool(seq);
                    let elem = this._host.find("#" + id);
                    
                    if (obj.init) {
                        obj.init(elem);
                    } else {
                        let disabled = typeof obj.disabled === "undefined" ? false : obj.disabled;
                        let height = typeof obj.height === "undefined" ? 22 : obj.height;   // TODO : 기본 height 공통설정방법?
                        let imgSrc = typeof obj.imgSrc === "undefined" ? "" : obj.imgSrc;
                        let imgWidth = typeof obj.imgWidth === "undefined" ? 16 : obj.imgWidth;
                        let imgHeight = typeof obj.imgHeight === "undefined" ? 16 : obj.imgHeight;
                        let imgPosition = typeof obj.imgPosition === "undefined" ? "center" : obj.imgPosition;
                        let roundedCorners = typeof obj.roundedCorners === "undefined" ? "all" : obj.roundedCorners;
                        let rtl = typeof obj.rtl === "undefined" ? false : obj.rtl;
                        let textPosition = typeof obj.textPosition === "undefined" ? "" : obj.textPosition;
                        let textImageRelation = typeof obj.textImageRelation === "undefined" ? "overlay" : obj.textImageRelation; 
                        let theme = typeof obj.theme === "undefined" ? "" : obj.theme;
                        let template = typeof obj.template === "undefined" ? "default" : obj.template;
                        let width = isNaN(parseFloat(obj.width)) ? null : obj.width;
                        let value = typeof obj.value === "undefined" ? null : obj.value;
                        let text = typeof obj.text === "undefined" ? "Button" : obj.text;
                        
                        elem.jqxButton({
                            "disabled" : disabled,
                            "height" : height,
                            "imgSrc" : imgSrc,
                            "imgWidth" : imgWidth,
                            "imgHeight" : imgHeight,
                            "imgPosition" : imgPosition,
                            "roundedCorners" : roundedCorners,
                            "rtl" : rtl,
                            "textPosition" : textPosition,
                            "textImageRelation" : textImageRelation,
                            "theme" : theme,
                            "template" : template,
                            "width" : width,
                            "value" : value
                        });
                        
                        elem.val(obj.text === undefined ? "Button" : value);
                    }
                    
                    /*this._host.find("#" + id).on("click", function (event) {
                        // codeHelper EventHandler 추가
                        this._setCodeHelper(id);
                    });*/
  
                },
                
                // RepeatButton 영역을 초기화합니다.
                _initRepeatButtonTool: function(seq) {
                    let id = this._formId + "_el_" + seq;
                    let obj = this._getTool(seq);
                    let elem = this._host.find("#" + id);
                    
                    if (obj.init) {
                        obj.init(elem);
                    } else {
                        let delay = typeof obj.delay === "undefined" ? 50 : obj.delay;
                        
                        let disabled = typeof obj.disabled === "undefined" ? false : obj.disabled;
                        let height = typeof obj.height === "undefined" ? 22 : obj.height;   // TODO : 기본 height 공통설정방법?
                        let imgSrc = typeof obj.imgSrc === "undefined" ? "" : obj.imgSrc;
                        let imgWidth = typeof obj.imgWidth === "undefined" ? 16 : obj.imgWidth;
                        let imgHeight = typeof obj.imgHeight === "undefined" ? 16 : obj.imgHeight;
                        let imgPosition = typeof obj.imgPosition === "undefined" ? "center" : obj.imgPosition;
                        let roundedCorners = typeof obj.roundedCorners === "undefined" ? "all" : obj.roundedCorners;
                        let rtl = typeof obj.rtl === "undefined" ? false : obj.rtl;
                        let textPosition = typeof obj.textPosition === "undefined" ? "" : obj.textPosition;
                        let textImageRelation = typeof obj.textImageRelation === "undefined" ? "overlay" : obj.textImageRelation; 
                        let theme = typeof obj.theme === "undefined" ? "" : obj.theme;
                        let template = typeof obj.template === "undefined" ? "default" : obj.template;
                        let width = isNaN(parseFloat(obj.width)) ? null : obj.width;
                        let value = typeof obj.value === "undefined" ? null : obj.value;
                        let text = typeof obj.text === "undefined" ? "Button" : obj.text;
                        
                        elem.jqxRepeatButton({
                            "delay" : delay,
                            
                            "disabled" : disabled,
                            "height" : height,
                            "imgSrc" : imgSrc,
                            "imgWidth" : imgWidth,
                            "imgHeight" : imgHeight,
                            "imgPosition" : imgPosition,
                            "roundedCorners" : roundedCorners,
                            "rtl" : rtl,
                            "textPosition" : textPosition,
                            "textImageRelation" : textImageRelation,
                            "theme" : theme,
                            "template" : template,
                            "width" : width,
                            "value" : value
                        });
                        
                        elem.val(obj.text === undefined ? "Button" : value);
                    }
                },
                // ToggleButton 영역을 초기화합니다.
                _initToggleButtonTool: function(seq) {
                    let id = this._formId + "_el_" + seq;
                    let obj = this._getTool(seq);
                    let elem = this._host.find("#" + id);
                    
                    if (obj.init) {
                        obj.init(elem);
                    } else {
                        let toggled = typeof obj.toggled === "undefined" ? false : obj.toggled;
                        
                        let disabled = typeof obj.disabled === "undefined" ? false : obj.disabled;
                        let height = typeof obj.height === "undefined" ? 22 : obj.height;   // TODO : 기본 height 공통설정방법?
                        let imgSrc = typeof obj.imgSrc === "undefined" ? "" : obj.imgSrc;
                        let imgWidth = typeof obj.imgWidth === "undefined" ? 16 : obj.imgWidth;
                        let imgHeight = typeof obj.imgHeight === "undefined" ? 16 : obj.imgHeight;
                        let imgPosition = typeof obj.imgPosition === "undefined" ? "center" : obj.imgPosition;
                        let roundedCorners = typeof obj.roundedCorners === "undefined" ? "all" : obj.roundedCorners;
                        let rtl = typeof obj.rtl === "undefined" ? false : obj.rtl;
                        let textPosition = typeof obj.textPosition === "undefined" ? "" : obj.textPosition;
                        let textImageRelation = typeof obj.textImageRelation === "undefined" ? "overlay" : obj.textImageRelation; 
                        let theme = typeof obj.theme === "undefined" ? "" : obj.theme;
                        let template = typeof obj.template === "undefined" ? "default" : obj.template;
                        let width = isNaN(parseFloat(obj.width)) ? null : obj.width;
                        let value = typeof obj.value === "undefined" ? null : obj.value;
                        let text = typeof obj.text === "undefined" ? "Button" : obj.text;
                        
                        elem.jqxToggleButton({
                            "toggled" : toggled,
                            
                            "disabled" : disabled,
                            "height" : height,
                            "imgSrc" : imgSrc,
                            "imgWidth" : imgWidth,
                            "imgHeight" : imgHeight,
                            "imgPosition" : imgPosition,
                            "roundedCorners" : roundedCorners,
                            "rtl" : rtl,
                            "textPosition" : textPosition,
                            "textImageRelation" : textImageRelation,
                            "theme" : theme,
                            "template" : template,
                            "width" : width,
                            "value" : value
                        });
                        
                        elem.val(obj.text === undefined ? "Button" : value);
                    }
                },
                // LinkButton 영역을 초기화합니다.
                // LinkButton은 기본Button 사용. (default click event 정의)
                // - href 속성 값 없는 경우 일반버튼 click event 적용
                _initLinkButtonTool: function(seq) {
                    let id = this._formId + "_el_" + seq;
                    let obj = this._getTool(seq);
                    let elem = this._host.find("#" + id);
                    
                    if (obj.init) {
                        obj.init(elem);
                    } else {
                        let href = typeof obj.href === "undefined" ? null : obj.href;
                        let target = typeof obj.target === "undefined" ? "_blank" : obj.target;
                        
                        let disabled = typeof obj.disabled === "undefined" ? false : obj.disabled;
                        let height = typeof obj.height === "undefined" ? 22 : obj.height;   // TODO : 기본 height 공통설정방법?
                        let imgSrc = typeof obj.imgSrc === "undefined" ? "" : obj.imgSrc;
                        let imgWidth = typeof obj.imgWidth === "undefined" ? 16 : obj.imgWidth;
                        let imgHeight = typeof obj.imgHeight === "undefined" ? 16 : obj.imgHeight;
                        let imgPosition = typeof obj.imgPosition === "undefined" ? "center" : obj.imgPosition;
                        let roundedCorners = typeof obj.roundedCorners === "undefined" ? "all" : obj.roundedCorners;
                        let rtl = typeof obj.rtl === "undefined" ? false : obj.rtl;
                        let textPosition = typeof obj.textPosition === "undefined" ? "" : obj.textPosition;
                        let textImageRelation = typeof obj.textImageRelation === "undefined" ? "overlay" : obj.textImageRelation; 
                        let theme = typeof obj.theme === "undefined" ? "" : obj.theme;
                        let template = typeof obj.template === "undefined" ? "default" : obj.template;
                        let width = isNaN(parseFloat(obj.width)) ? null : obj.width;
                        let value = typeof obj.value === "undefined" ? null : obj.value;
                        let text = typeof obj.text === "undefined" ? "Button" : obj.text;
                        
                        elem.jqxButton({
                            "disabled" : disabled,
                            "height" : height,
                            "imgSrc" : imgSrc,
                            "imgWidth" : imgWidth,
                            "imgHeight" : imgHeight,
                            "imgPosition" : imgPosition,
                            "roundedCorners" : roundedCorners,
                            "rtl" : rtl,
                            "textPosition" : textPosition,
                            "textImageRelation" : textImageRelation,
                            "theme" : theme,
                            "template" : template,
                            "width" : width,
                            "value" : value
                        });
                        
                        elem.val(obj.text === undefined ? "Button" : value);
                        
                        // click event
                        this._host.find("#" + id).on("click", function (event) {
                            if(href === "") {
                                this._onButtonClick(elem, obj);
                            } 
                            else {
                                window.open(href, target);
                                return;
                            }
                        });
                    }
                },
                // SwitchButton 영역을 초기화합니다.
                _initSwitchButtonTool: function(seq) {
                    let id = this._formId + "_el_" + seq;
                    let obj = this._getTool(seq);
                    let elem = this._host.find("#" + id);
                    
                    if (obj.init) {
                        obj.init(elem);
                    } else {
                        let checked = typeof obj.checked === "undefined" ? false : obj.checked;
                        let disabled = typeof obj.disabled === "undefined" ? false : obj.disabled;
                        let height = typeof obj.height === "undefined" ? 22 : obj.height;   // TODO : 기본 height 공통설정방법?
                        let orientation = typeof obj.orientation === "undefined" ? "horizontal" : obj.orientation;
                        let onLabel = typeof obj.onLabel === "undefined" ? "On" : obj.onLabel;
                        let offLabel = typeof obj.offLabel === "undefined" ? "Off" : obj.offLabel;
                        let thumbSize = typeof obj.thumbSize === "undefined" ? "40%" : obj.thumbSize;
                        let width = typeof obj.width === "undefined" ? 90 : obj.width;
                        
                        elem.jqxSwitchButton({
                            "checked" : checked,
                            "disabled" : disabled,
                            "height" : height,
                            "orientation" : orientation,
                            "onLabel" : onLabel,
                            "offLabel" : offLabel,
                            "thumbSize" : thumbSize,
                            "width" : width,
                        });
                    }
                },
                // DropDownButton 영역을 초기화합니다.
                _initDropDownButtonTool: function(seq) {
                    let id = this._formId + "_el_" + seq;
                    let obj = this._getTool(seq);
                    let elem = this._host.find("#" + id);
                    
                    if (obj.init) {
                        obj.init(elem);
                    } else {
                        let disabled = typeof obj.disabled === "undefined" ? false : obj.disabled;
                        let animationType = typeof obj.animationType === "undefined" ? "default" : obj.animationType;
                        
                        elem.jqxDropDownButton({
                            "animationType" : animationType,
                            "disabled" : disabled,
                        });
                    }
                },
                // CheckBox 영역을 초기화합니다. (기존 jqxform.js작명 그대로 사용)
                _initBooleanTool: function (seq) {
                    let _this = this;
                    let id = _formId + "_el_" + seq;
                    let obj = this._getTool(seq);
                    let elem = _host.find("#" + id);
                    
                    if (obj.init) {
                        obj.init(elem);
                    } else {
                        let animationShowDelay = typeof obj.animationShowDelay === "undefined" ? 300 : obj.animationShowDelay;
                        let animationHideDelay = typeof obj.animationHideDelay === "undefined" ? 300 : obj.animationHideDelay;
                        let boxSize = typeof obj.boxSize === "undefined" ? 16 : obj.boxSize;
                        let checked = typeof obj.checked === "undefined" ? false : obj.checked;
                        let disabled = typeof obj.disabled === "undefined" ? false : obj.disabled;
                        let enableContainerClick = typeof obj.enableContainerClick === "undefined" ? true : obj.enableContainerClick;
                        let groupName = typeof obj.groupName === "undefined" ? "" : obj.groupName;
                        let height = typeof obj.height === "undefined" ? 22 : obj.height;   // TODO : 기본 height 공통설정방법?
                        let hasThreeStates = typeof obj.hasThreeStates === "undefined" ? false : obj.hasThreeStates; 
                        let locked = typeof obj.locked === "undefined" ? false : obj.locked;
                        let rtl = typeof obj.rtl === "undefined" ? false : obj.rtl;
                        let theme = typeof obj.theme === "undefined" ? "" : obj.theme;
                        
                        let width = isNaN(parseFloat(obj.width)) ? 50 : obj.width;
                        
                        if (obj.component === undefined || obj.component == "jqxCheckBox") {
                            elem.jqxCheckBox({
                                "animationShowDelay" : animationShowDelay,
                                "animationHideDelay" : animationHideDelay,
                                "boxSize" : boxSize,
                                "checked" : checked,
                                "disabled" : disabled,
                                "enableContainerClick" : enableContainerClick,
                                "groupName" : groupName,
                                "height" : height,
                                "hasThreeStates" : hasThreeStates,
                                "locked" : locked,
                                "rtl" : rtl,
                                "theme" : theme,
                                "width" : width,
                            });
                        } else {
                            return;
                        }
                    }
                    
                    elem.on("change", function (event) {
                        this._onChangeHandler(event);
                    });
                    
                    let labelElem = _host.find("#label_" + id);
                    
                    // label 선택시 check 처리
                    labelElem.on("mousedown", function (evnet) {
                        let enableContainerClick = typeof obj.enableContainerClick === "undefined" ? true : obj.enableContainerClick;
                        
                        if(enableContainerClick) {
                            let hasValue = this.host.find("#" + id).val();
                            this.host.find("#" + id).val(!hasValue);
                        }
                    })
                },
                // RadioButton 영역을 초기화합니다. (기존 jqxform.js작명 그대로 사용)
                _initOptionTool: function (seq) {
                    let id = this._formId + "_el_" + seq;
                    let obj = this._getTool(seq);
                    
                    
                    for(let i = 0; i < obj.options.length; i++) {
                        let optionId = id + "_option_" + i;
                        let elem = this._host.find("#" + optionId);
                        
                        if(elem.length > 0) {
                            let animationShowDelay = typeof obj.animationShowDelay === "undefined" ? 300 : obj.animationShowDelay;
                            let animationHideDelay = typeof obj.animationHideDelay === "undefined" ? 300 : obj.animationHideDelay;
                            let boxSize = typeof obj.boxSize === "undefined" ? "16px" : obj.boxSize;
                            let checked = typeof obj.checked === "undefined" ? false : obj.checked;
                            let disabled = typeof obj.disabled === "undefined" ? false : obj.disabled;
                            let enableContainerClick = typeof obj.enableContainerClick === "undefined" ? true : obj.enableContainerClick;
                            let groupName = typeof obj.groupName === "undefined" ? "" : obj.groupName;
                            let hasThreeStates = typeof obj.hasThreeStates === "undefined" ? false : obj.hasThreeStates;
                            let height = typeof obj.height === "undefined" ? 22 : obj.height;   // TODO : 기본 height 공통설정방법?
                            let rtl = typeof obj.rtl === "undefined" ? false : obj.rtl;
                            let theme = typeof obj.theme === "undefined" ? "" : obj.theme;
                            let width = typeof obj.width === "undefined" ? 25 : obj.width;
                            
                            elem.jqxRadioButton({
                                "animationShowDelay" : animationShowDelay,
                                "animationHideDelay" : animationHideDelay,
                                "boxSize" : boxSize,
                                "checked" : checked,
                                "disabled" : disabled,
                                "enableContainerClick" : enableContainerClick,
                                "groupName" : groupName,
                                //"groupName" : "group_" + seq
                                "hasThreeStates" : hasThreeStates,
                                "height" : height,
                                "rtl" : rtl,
                                "theme" : theme,
                                "width" : width,
                                
                                "events" : ["checked", "unchecked", "indeterminate", "change"]
                            });
                            
                            elem.on("change", function(event) {
                                this._onChangeHandler(event);
                            });
                            
                            _host.find("#" + optionId).on("keydown", function (event) {
                                this._onKeyDown(event.which, optionId);
                            });
                        }
                        
                        let labelElem = _host.find("#label_" + optionId);
                        labelElem.data("el", elem);
                        labelElem.on("mousedown", function(e) {
                            let radioElem = a(this).data("el");
                            radioElem.jqxRadioButton("toggle");
                        });
                    }
                },
                // DropDownList 영역을 초기화합니다.
                _initOptionToolDropDownList: function (seq) {
                    let id = this. _formId + "_el_" + seq;
                    let obj = this._getTool(seq);
                    let elem = this._host.find("#" + id);
                    
                    var divHeight = '<div style="height: 20px;"></div>';
                    var source = [];
                    
                    if (obj.options && base.isArray(obj.options)) {     
                        for (let i = 0; i < obj.options.length; i++) {
                            source.push(obj.options[i]);
                        }
                    }
                    
                    if (obj.init) {
                        obj.init(elem);
                    } else {
                        let autoOpen = typeof obj.autoOpen === "undefined" ? false : obj.autoOpen;
                        let autoItemsHeight = typeof obj.autoItemsHeight === "undefined" ? false : obj.autoItemsHeight;
                        let autoDropDownHeight = typeof obj.autoDropDownHeight === "undefined" ? false : obj.autoDropDownHeight;
                        let animationType = typeof obj.animationType === "undefined" ? "default" : obj.animationType;
                        let checkboxes = typeof obj.checkboxes === "undefined" ? false : obj.checkboxes;
                        let closeDelay = typeof obj.closeDelay === "undefined" ? 300 : obj.closeDelay;
                        let disabled = typeof obj.disabled === "undefined" ? false : obj.disabled;
                        let displayMember = typeof obj.displayMember === "undefined" ? "" : obj.displayMember;
                        let dropDownHorizontalAlignment = typeof obj.dropDownHorizontalAlignment === "undefined" ? "left" : obj.dropDownHorizontalAlignment;
                        let dropDownVerticalAlignment = typeof obj.dropDownVerticalAlignment === "undefined" ? "bottom" : obj.dropDownVerticalAlignment;
                        let dropDownHeight = typeof obj.dropDownHeight === "undefined" ? 200 : obj.dropDownHeight; 
                        let dropDownWidth = typeof obj.dropDownWidth === "undefined" ? "auto" : obj.dropDownWidth;
                        let enableSelection = typeof obj.enableSelection === "undefined" ? true : obj.enableSelection;
                        let enableBrowserBoundsDetection = typeof obj.enableBrowserBoundsDetection === "undefined" ? false : obj.enableBrowserBoundsDetection;
                        let enableHover = typeof obj.enableHover === "undefined" ? true : obj.enableHover;
                        let filterable = typeof obj.filterable === "undefined" ? false : obj.filterable;
                        let filterHeight = typeof obj.filterHeight === "undefined" ? 27 : obj.filterHeight;
                        let filterDelay = typeof obj.filterDelay === "undefined" ? 100 : obj.filterDelay;
                        let filterPlaceHolder = typeof obj.filterPlaceHolder === "undefined" ? "Looking for" : obj.filterPlaceHolder;
                        let height = typeof obj.height === "undefined" ? 22 : obj.height;   // TODO : 기본 height 공통설정방법?
                        let incrementalSearch = typeof obj.incrementalSearch === "undefined" ? true : obj.incrementalSearch;
                        let incrementalSearchDelay = typeof obj.incrementalSearchDelay === "undefined" ? 700 : obj.incrementalSearchDelay;
                        let itemHeight = typeof obj.itemHeight === "undefined" ? -1 : obj.itemHeight;
                        let openDelay = typeof obj.openDelay === "undefined" ? 250 : obj.openDelay;
                        let placeHolder = typeof obj.placeHolder === "undefined" ? "" : obj.placeHolder;
                        let popupZIndex = typeof obj.popupZIndex === "undefined" ? 2000 : obj.popupZIndex;
                        let rtl = typeof obj.rtl === "undefined" ? false : obj.rtl;
                        let renderer = typeof obj.renderer === "undefined" ? null : obj.renderer;
                        let selectionRenderer = typeof obj.selectionRenderer === "undefined" ? null : obj.selectionRenderer;
                        let searchMode = typeof obj.searchMode === "undefined" ? "startswithignorecase" : obj.searchMode;
                        let scrollBarSize = typeof obj.scrollBarSize === "undefined" ? 15 : obj.scrollBarSize;
                        let selectedIndex = typeof obj.selectedIndex === "undefined" ? -1 : obj.selectedIndex;
                        let template = typeof obj.template === "undefined" ? "default" : obj.template;
                        let theme = typeof obj.theme === "undefined" ? "" : obj.theme;
                        let valueMember = typeof obj.valueMember === "undefined" ? "" : obj.valueMember;
                        var width = typeof obj.width === "undefined" ? "auto" : obj.width;
                        
                        if (obj.width && obj.width.toString().indexOf("%") != -1 && obj.columnwidth === undefined) {
                            width = "100%";
                        }
                        
                        elem.jqxDropDownList({
                            "autoOpen" : autoOpen,
                            "autoItemsHeight" : autoItemsHeight,
                            "autoDropDownHeight" : autoDropDownHeight,
                            "animationType" : animationType,
                            "checkboxes" : checkboxes,
                            "closeDelay" : closeDelay,
                            "disabled" : disabled,
                            "displayMember" : displayMember,
                            "dropDownHorizontalAlignment" : dropDownHorizontalAlignment,
                            "dropDownVerticalAlignment" : dropDownVerticalAlignment,
                            "dropDownHeight" : dropDownHeight,
                            "dropDownWidth" : dropDownWidth,
                            "enableSelection" : enableSelection,
                            "enableBrowserBoundsDetection" : enableBrowserBoundsDetection,
                            "enableHover" : enableHover,
                            "filterable" : filterable,
                            "filterHeight" : filterHeight,
                            "filterDelay" : filterDelay,
                            "filterPlaceHolder" : filterPlaceHolder,
                            "height" : height,
                            "incrementalSearch" : incrementalSearch,
                            "incrementalSearchDelay" : incrementalSearchDelay,
                            "itemHeight" : itemHeight,
                            "openDelay" : openDelay,
                            "placeHolder" : placeHolder,
                            "popupZIndex" : popupZIndex,
                            "rtl" : rtl,
                            "renderer" : renderer,
                            "selectionRenderer" : selectionRenderer,
                            "searchMode" : searchMode,
                            "scrollBarSize" : scrollBarSize,
                            "selectedIndex" : selectedIndex,
                            "source" : source,
                            "template" : template,
                            "theme" : theme,
                            "valueMember" : valueMember,
                            "width" : width,
                            
                            "events" : ["open", "close", "select", "unselect", "change", "checkChange", "bindingComplete", "itemAdd", "itemRemove", "itemUpdate"]
                        });
                    }
                    /*
                    elem.on("change", function (event) {
                        this._onChangeHandler(event);
                    });
                    
                    this._host.find("#" + id).on("keydown", function (event) {
                        this._onKeyDown(event.which, id);
                    });
                    */
                },
                
                // template bind명에 해당하는 element를 가져옵니다.
                getComponentByName: function (name) {
                    if (!base.isArray(this._template)) {
                        return undefined;
                    }
                    for (var i = 0; i < this._template.length; i++) {
                        
                        if (this._template[i].bind === name) {
                            return this._getComponentById(i);
                        }
                        if (base.isArray(this._template[i].columns)) {
                            for (var j = 0; j < this._template[i].columns.length; j++) {
                                if (this._template[i].columns[j].bind === name) {
                                    return this._getComponentById(i + "_" + j);
                                }
                            }
                        }
                    }
                    
                    return undefined;
                },
                
                // compnent id를 통해 template에서 bind명을 가져옵니다.  
                getComponentNameById: function (id) {
                    if (!base.isArray(this._template)) {
                        return undefined
                    }
                    for (var i = 0; i < this._template.length; i++) {
                        if (this._getComponentById(i).attr("id") === id) {
                            return _template[i].bind;
                        }
                        if (base.isArray(this._template[i].columns)) {
                            for (var j = 0; j < this._template[i].columns.length; j++) {
                                if (this._getComponentById(i + "_" + j).attr("id") === id) {
                                    return this._template[i].columns[j].bind;
                                }
                            }
                        }
                    }
                    
                    return undefined;
                },
                _getComponentById: function (id) {
                    var elem = this._host.find("#" + this._formId + "_el_" + id);

                    // 181206_kmh radioButton 객체 식별시 사용
                    if(!elem.attr("id")) {
                        elem = this._host.find("#rowWrap_" + this._formId + "_el_" + id);
                    }
                    
                    return elem;
                },

                
                // template에서 bind한 이름에 해당하는 label element를 가져옵니다.
                getComponentLabelByName: function (name) {
                    if (!base.isArray(this._template)) {
                        return undefined
                    }
                    
                    for (var i = 0; i < this._template.length; i++) {
                        if (this._template[i].name == name) {
                            return this._getComponentLabelById(i);
                        }
                        if (base.isArray(this._template[i].columns)) {
                            for (var j = 0; j < this._template[i].columns.length; j++) {
                                if (this._template[i].columns[j].name == name) {
                                    return this._getComponentLabelById(i + "_" + j);
                                }
                            }
                        }
                    }
                    
                    return undefined;
                },
                _getComponentLabelById: function (c) {
                    var b = this._host.find("#label_" + _formId + "_el_" + c);
                    
                    return b
                },
                
                
                /***************************************************
                 * Event Callback
                 ***************************************************/
                onNpKeyDown : function(callback) {
                    this._host.on("npKeyDown", callback);
                    return; 
                },
                onNpKeyUp : function(callback) {
                    this._host.on("npKeyUp", callback);
                    return; 
                },
                onNpKeyPress : function(callback) {
                    this._host.on("npKeyPress", callback);
                    return;
                },
                
                onNpClick : function(callback) {
                    this._host.on("npClick", callback);
                    return;
                },
                onNpDblClick : function(callback) {
                    this._host.on("npDblClick", callback);
                    return;
                },
                onNpMouseDown : function(callback) {
                    this._host.on("npMouseDown", callback);
                    return;
                },
                onNpMouseMove : function(callback) {
                    this._host.on("npMouseMove", callback);
                    return;
                },
                onNpMouseOut : function(callback) {
                    this._host.on("npMouseOut", callback);
                    return;
                },
                onNpMouseUp : function(callback) {
                    this._host.on("npMouseUp", callback);
                    return;
                },
                onNpWheel : function(callback) {
                    this._host.on("npWheel", callback);
                    return;
                },
                
                onNpFormDataChange : function(callback) {
                    this._host.on("npFormDataChange", callback);
                    return;
                },
                
                /***************************************************
                 * Event Handlers
                 ***************************************************/
                
                /* _createEventHandler
                 * 
                 * Event Handler 생성함수입니다.
                 * 
                 * - param  
                 *    eventName     : 추가 될 event명입니다. 주로 'np'접두어를 붙입니다.
                 *    wrappedEvent  : 이벤트 래핑에 참조되는 원본 이벤트입니다. (jqxWidget event 객체)
                 *    args          : 이벤트 처리시 사용될 내용들을 정의합니다.          
                 *          
                 * - return : trigger 객체
                 */
                _createEventHandler : function(eventName, wrappedEvent, args) {
                    // 데이터 검증
                    if(!this.isInitialized || this._suppressEvents || typeof args === "undefined") {
                        return;
                    }
                    
                    // EventHandler 생성
                    let npEvent = new base.Event(eventName);
                    
                    npEvent.args = args;
                    
                    //console.log(eventName + " : " + JSON.stringify(npEvent.args));
                    
                    npEvent.wrappedEvent = wrappedEvent;   // 원본 이벤트
                    
                    npEvent.owner = this;
                    
                    let trigger = this._host.trigger(npEvent);
                    
                    return trigger;
                },
                
                // Keyboard Events
                _onNpKeyDownHandler : function(event, id) {
                    let args = {
                        "id" : id,
                        "name" : this.getComponentNameById(id),
                        "key" : event.which    
                    }
                    
                    return this._createEventHandler("npKeyDown", event, args);
                },
                _onNpKeyUpHandler : function(event, id) {
                    let args = {
                        "id" : id,
                        "name" : this.getComponentNameById(id),
                        "key" : event.which
                    };
                    
                    return this._createEventHandler("npKeyUp", event, args);
                },
                _onNpKeyPressHandler : function(event, id) {
                    let args = {
                        "id" : id,
                        "name" : this.getComponentNameById(id),
                        "key" : event.which,
                        "altKey" : event.artKey,
                        "ctrlKey" : event.ctrlKey,
                        "shiftKey" : event.shiftKey
                    };

                    return this._createEventHandler("npKeyPress", event, args);
                },
                
                // Mouse Events
                _onNpClickHandler : function(event, id) {
                    let args = {
                        "id" : id,
                        "name" : this.getComponentNameById(id),
                    };
                    
                    return this._createEventHandler("npClick", event, args);
                },
                _onNpDblClickHandler : function(event, id) {
                    let args = {
                        "id" : id,
                        "name" : this.getComponentNameById(id),
                    };
                    
                    return this._createEventHandler("npDblClick", event, args);
                },
                _onNpMouseDownHandler : function(event, id) {
                    let args = {
                        "id" : id,
                        "name" : this.getComponentNameById(id),
                    };

                    return this._createEventHandler("npMouseDown", event, args);
                },
                _onNpMouseMoveHandler : function(event, id) {
                    let args = {
                        "id" : id,
                        "name" : this.getComponentNameById(id),
                    };
                    return this._createEventHandler("npMouseMove", event, args);
                },
                _onNpMouseOutHandler : function(event, id) {
                    let args = {
                        "id" : id,
                        "name" : this.getComponentNameById(id),
                    };
                    return this._createEventHandler("npMouseOut", event, args);
                },
                _onNpMouseUpHandler : function(event, id) {
                    let args = {
                        "id" : id,
                        "name" : this.getComponentNameById(id),
                    };
                    return this._createEventHandler("npMouseUp", event, args);
                },
                _onNpWheelHandler : function(event, id) {
                    let args = {
                        "id" : id,
                        "name" : this.getComponentNameById(id),
                    };
                    return this._createEventHandler("npWheel", event, args);
                },
                
                // Form Events
                _onNpFormDataChangeHandler : function(event, id) {
                    let args = {
                        "value" : this._getValue(),
                        "prevValue" : this._prevValue,
                        "id" : id,
                        "name" : this.getComponentNameById(id),
                    };
                    
                    return this._createEventHandler("npFormDataChange", event, args);
                }
            });
                
            _npForm = $.extend({}, base.jqx._jqxForm.prototype);
            
            return _npForm;
        }

        return createInstance;
        
    })(jqxBaseFramework);
    
    
    return {
        createInstance : createInstance
    }
});
