let createInstance = (function(base) {
        function createInstance() {
            // 해당 IIFE 엄격한 검사처리
            "use strict";
            
            // npTabs는 jqxTabs prototype을 기반으로 확장됩니다.
            let _npTabs;    // init return value (prototype)
            
            let _this;
            
            // jqxTabs prototype 확장
            base.extend(base.jqx._jqxTabs.prototype, {
                /***************************************************
                 * Functions
                 ***************************************************/
                
                /* createTabs
                 * 
                 * npTabs를 생성합니다.
                 * 
                 * - param
                 *      
                 *      tabs : tab을 나타낼 div 영역
                 *      
                 *      props : tab에 적용할 프로퍼티 object
                 *          - animationType : 탭 이동간의 애니메이션을 설정하거나 가져옵니다.
                 *              Type : String       Default : none      Possible values : 'none', 'fade'
                 *               
                 *          - autoHeight : 탭의 헤더 높이를 가장 높은 높이의 item 높이와 동일하게 설정합니다. 
                 *              Type : Boolean      Default : true
                 *               
                 *          - closeButtonSize : 닫기버튼의 크기를 설정하거나 가져옵니다.
                 *              Type : Number       Default : 16
                 *              
                 *          - collapsible : 접기 속성을 설정하거나 가져옵니다.
                 *              Type : Boolean      Default : false
                 *              
                 *          - contentTransitionDuration : 내용이 나타나는 애니메이션의 시간을 설정하거나 가져옵니다. animationType이 'fade'인 경우 적용됩니다. (ms)
                 *              Type : Number       Default : 450
                 *              
                 *          - disbled : 위젯을 활성화하거나 비활성화합니다.
                 *              Type : Boolean      Default : false
                 *              
                 *          - enabledHover : hover 효과를 활성화하거나 비활성화합니다.
                 *              Type : Boolean      Default : true
                 *              
                 *          - enableScrollAnimation : 좌우 스크롤 애니메이션을 활성화하거나 비활성화합니다.
                 *              Type : Boolean      Default : true
                 *          
                 *          - height : 위젯의 높이를 설정하거나 가져옵니다.
                 *              Type : Number/String    Default : 'auto'
                 *              
                 *          - initTabContent : 내용영역을 초기화하는 콜백함수를 설정합니다. 
                 *              Type : Function     Default : null
                 *              
                 *          - keyboardNavigation : 탭 헤더에 포커스있는 경우 키보드로 탭을 이동할 수 있도록 설정합니다.
                 *              Type : Boolean      Default : true
                 *              
                 *          - position : 탭 헤더의 위치를 설정합니다.
                 *              Type : String       Default : 'top'     Possible values : 'top', 'bottom'
                 *              
                 *          - reorder : 탭 헤더의 순서를 드래그앤드랍으로 변경할 수 있도록 설정합니다.
                 *              Type : Boolean      Default : false
                 *               
                 *          - rtl : 위젯의 정렬을 우측기준으로 변경합니다.
                 *              Type : Boolean      Default : false
                 *          
                 *          - scrollAnimationDuration : 좌우 스크롤 애니메이션 속도를 설정합니다. (ms)
                 *              Type : Number       Default : 200 
                 *          
                 *          - selectedItem : 탭 헤더를 선택하거나 가져옵니다. (0-based)
                 *              Type : Number       Default : 0
                 *          
                 *          - sectionTracker : 탭 선택 추적 애니메이션을 설정합니다.
                 *              Type : Boolean      Default : false
                 *          
                 *          - scrollable : 탭 헤더의 좌우스크롤을 활성화하거나 비활성화합니다.
                 *              Type : Boolean      Default : true
                 *          
                 *          - scrollPosition : 탭 헤더의 좌우스크롤 화살표 위치를 설정하거나 가져옵니다.
                 *              Type : String       Default : 'right'   Possible values : 'left', 'right', 'both'
                 *              
                 *          - scrollStep : 탭 헤더의 스크롤 이동범위를 설정합니다.
                 *              Type : Number       Default : 70
                 *          
                 *          - showCloseButtons : 탭의 종료버튼을 표시합니다.
                 *              Type : Boolean      Default : false
                 *          
                 *          - toggleMode : 탭 이동관련 사용자 입력을 설정합니다.
                 *              Type : String       Default : 'click'   Possible values : 'click', 'dblclick', 'mouseenter', 'none'
                 *              
                 *          - theme : 위젯의 테마를 설정합니다.
                 *              Type : String       Default : ''
                 *              
                 *          - width : 위젯의 너비를 설정합니다.
                 *              Type : Number/String    Default : 'auto'
                 *              
                 * - return 
                 *      npTabs Prototype
                 */
                createTabs : function(tabs, prop) {
                    if(typeof prop === "undefined") {
                        tabs.jqxTabs();
                    } else {
                        tabs.jqxTabs(prop);
                    }
            
                    // form prototype 반환
                    return _npTabs;
                },
                
                /* defineInstance
                 * 
                 * npTabs 기본 properties를 설정합니다.
                 * 
                 * - param : none
                 * - return 
                 *      npTabs properties
                 */
                defineInstance: function () {
                    var prop = {
                        scrollAnimationDuration: 200,
                        enabledHover: true,
                        disabled: false,
                        collapsible: false,
                        animationType: "none",
                        enableScrollAnimation: true,
                        contentTransitionDuration: 450,
                        toggleMode: "click",
                        selectedItem: 0,
                        height: "auto",
                        width: "auto",
                        position: "top",
                        selectionTracker: false,
                        scrollable: true,
                        scrollPosition: "right",
                        scrollStep: 70,
                        autoHeight: true,
                        headerHeight: null,
                        showCloseButtons: false,
                        canCloseAllTabs: true,
                        closeButtonSize: 16,
                        arrowButtonSize: 16,
                        keyboardNavigation: true,
                        reorder: false,
                        selectionTrackerAnimationDuration: 300,
                        _isTouchDevice: false,
                        roundedCorners: true,
                        _headerExpandingBalance: 0,
                        _dragStarted: false,
                        _tabCaptured: false,
                        _lastUnorderedListPosition: 0,
                        _selectedItem: 0,
                        _titleList: [],
                        _contentList: [],
                        _contentWrapper: null,
                        _unorderedList: null,
                        _scrollTimeout: null,
                        isCollapsed: false,
                        touchMode: false,
                        initTabContent: null,
                        enableDropAnimation: false,
                        _currentEvent: null,
                        _needScroll: true,
                        _isAnimated: {},
                        _events: ["created", "selected", "add", "removed", "enabled", "disabled", "selecting", "unselecting", "unselected", "dragStart", "dragEnd", "locked", "unlocked", "collapsed", "expanded", "tabclick"],
                        _initTabContentList: [],
                        _invalidArgumentExceptions: {
                            invalidScrollAnimationDuration: "The scroll animation duration is not valid!",
                            invalidWidth: "Width you've entered is invalid!",
                            invalidHeight: "Height you've entered is invalid!",
                            invalidAnimationType: "You've entered invalid animation type!",
                            invalidcontentTransitionDuration: "You've entered invalid value for contentTransitionDuration!",
                            invalidToggleMode: "You've entered invalid value for toggleMode!",
                            invalidPosition: "You've entered invalid position!",
                            invalidScrollPosition: "You've entered invalid scroll position!",
                            invalidScrollStep: "You've entered invalid scroll step!",
                            invalidStructure: "Invalid structure!",
                            invalidArrowSize: "Invalid scroll button size!",
                            invalidCloseSize: "Invalid close button size!"
                        },
                        aria: {
                            "aria-disabled": {
                                name: "disabled",
                                type: "boolean"
                            }
                        },
                        rtl: false
                    };
                    if (this === base.jqx._jqxTabs.prototype) {
                        return prop
                    }
                    base.extend(true, this, prop);
                    return prop
                },
                
                /* defineInstance
                 * 
                 * npTabs instance를 생성합니다. (this pointer 재설정)
                 * 
                 * - param : none
                 * - return : none
                 */
                createInstance: function () {
                    _this = this;
                    
                    _this._IE8 = base.jqx.browser.msie && base.jqx.browser.version < 9;
                    base.jqx.aria(_this);
                    _this.element.className += " " + _this.toThemeProperty("jqx-tabs jqx-widget jqx-widget-content");
                    _this.element.setAttribute("role", "tablist");
                    var e = _this.host.children();
                    for (var b = 0; b < e.length; b++) {
                        var d = e[b];
                        if (d.nodeName.toLowerCase() === "ul") {
                            _this._unorderedList = d
                        } else {
                            if (d.nodeName.toLowerCase() === "div") {
                                _this._contentList.push(d)
                            }
                        }
                    }
                    _this._unorderedListHelper = base(_this._unorderedList);
                    if (_this._unorderedListHelper.initAnimate) {
                        _this._unorderedListHelper.initAnimate()
                    }
                    _this._closeButtonList = [];
                    _this._selectedItem = _this.selectedItem;
                    _this._isTouchDevice = base.jqx.mobile.isTouchDevice();
                    _this._needScroll = _this.scrollable;
                    if (_this.selectionTracker) {
                        _this.selectionTracker = _this._seletionTrackerBrowserCheck()
                    }
                    if (_this._isTouchDevice) {
                        _this.reorder = false;
                        _this.keyboardNavigation = false
                    }
                    _this._titleList = _this._unorderedListHelper.children();
                    var c = _this._titleList.length;
                    while (c) {
                        c--;
                        _this._titleList[c].setAttribute("role", "tab");
                        if (!_this._titleList[c].getAttribute("id")) {
                            _this._titleList[c].setAttribute("id", _this.element.id + "Tab" + c)
                        }
                        _this._contentList[c].setAttribute("role", "tabpanel")
                    }
                    _this._validateProperties();
                    _this._refresh();
                    _this._moveSelectionTrack(_this._selectedItem, 0);
                    if (_this.disabled) {
                        _this.disable()
                    }
                    _this.element.tabIndex = 0;
                    _this._raiseEvent(0);
                    _this._enableWindowResize();
                    
                    _this._addNpEventHandlers();
                },
                
                /* addAt 
                 * 
                 * tab을 설정한 위치에 추가합니다.
                 * 
                 * - param : 
                 *      - index : 추가할 index (0-based)
                 *              Type : Number
                 *              
                 *      - title : 추가할 tab의 이름
                 *              Type : String
                 *              
                 *      - content : 추가할 tab의 내용
                 *              Type : String
                 *              
                 * - return : none
                 */
                addAt: function (index, title, content) {
                    if (index >= 0 && index <= _this.length()) {
                        _this._removeHoverStates();
                        
                        let titleElem = document.createElement("li");
                        titleElem.innerHTML = title;
                        titleElem.className = _this.toThemeProperty("jqx-tabs-title jqx-item");
                        
                        let contentElem = document.createElement("div");
                        contentElem.innerHTML = content;
                        contentElem.className = _this.toThemeProperty("jqx-tabs-content-element");
                        
                        if (_this.position === "bottom") {
                            titleElem.className += " " + _this.toThemeProperty("jqx-tabs-title-bottom");
                        }
                        
                        var uiRefresh = false;
                        if (_this._titleList.length === 0) {
                            _this._unorderedList.appendChild(titleElem);
                        } else {
                            if (index < _this.length() && index >= 0) {
                                _this._unorderedList.insertBefore(titleElem, _this._titleList[index]);
                            } else {
                                _this._unorderedList.appendChild(titleElem);
                            }
                        }
                        _this._contentWrapper.appendChild(contentElem);
                        _this._addItemTo(_this._titleList, index, titleElem);
                        _this._addItemTo(_this._contentList, index, contentElem);
                        _this._addCloseButton(index);
                        
                        if (_this._selectedItem > index) {
                            _this._selectedItem++;
                        }
                        
                        _this._switchTabs(index, _this._selectedItem);
                        _this._selectedItem = index;
                        _this._uiRefresh(uiRefresh);
                        _this._raiseEvent(2, {
                            item: index
                        });
                        _this._moveSelectionTrack(_this._selectedItem, 0)
                    }
                },
                
                /* addFirst 
                 * 
                 * tab을 처음 위치에 추가합니다.
                 * 
                 * - param : 
                 *      - title : 추가할 tab의 이름
                 *              Type : String
                 *              
                 *      - content : 추가할 tab의 내용
                 *              Type : String
                 *              
                 * - return : none
                 */
                addFirst: function (title, content) {
                    _this.addAt(0, title, content)
                },
                
                /* addLast 
                 * 
                 * tab을 마지막 위치에 추가합니다.
                 * 
                 * - param : 
                 *      - title : 추가할 tab의 이름
                 *              Type : String
                 *              
                 *      - content : 추가할 tab의 내용
                 *              Type : String
                 *              
                 * - return : none
                 */
                addLast: function (title, content) {
                    _this.addAt(_this.length(), title, content)
                },
                
                /* collapse 
                 * 
                 * 현재 tab을 접습니다.
                 * 
                 * - param : none
                 * - return : none
                 */
                collapse: function () {
                    var selectedItem = _this._selectedItem;
                    
                    _this.isCollapsed = true;
                    if (_this.height !== "auto") {
                        _this._contentWrapper.style.visibility = "hidden"
                    } else {
                        _this._contentWrapper.style.display = "none"
                    }
                    _this._raiseEvent(13, {
                        item: selectedItem
                    });
                    if (_this.position === "top") {
                        _this._headerWrapper.className += " " + _this.toThemeProperty("jqx-tabs-header-collapsed");
                        _this.element.className += " " + _this.toThemeProperty("jqx-tabs-collapsed")
                    } else {
                        _this._headerWrapper.className += " " + _this.toThemeProperty("jqx-tabs-header-collapsed-bottom");
                        _this.element.className += " " + _this.toThemeProperty("jqx-tabs-collapsed-bottom")
                    }
                },
                
                /* disable 
                 * 
                 * tab을 비활성화합니다.
                 * 
                 * - param : none 
                 * - return : none
                 */
                disable: function(){
                    let tabLength = _this.length();
                    while (tabLength) {
                        tabLength--;
                        _this.disableAt(tabLength);
                    }
                },
                
                /* disableAt
                 * 
                 * 선택한 index의 tab을 비활성화합니다.
                 * 
                 * - param
                 *      - index : 비활성화 할 tab index (0-based)
                 *              Type : Number
                 *              
                 * - return : none
                 */
                disableAt: function(index){
                    var title = _this._titleList[index];
                    if (!title.disabled || title.disabled === undefined) {
                        if (_this.selectedItem === index) {
                            var selectedIndex = _this.next();
                            if (!selectedIndex) {
                                selectedIndex = _this.previous()
                            }
                        }
                        
                        title.disabled = true;
                        _this.removeHandler(title, _this.toggleMode);
                        
                        if (_this.enabledHover) {
                            base(title).off("mouseenter").off("mouseleave")
                        }
                        
                        _this._removeEventListenerAt(index);
                        title.className += " " + _this.toThemeProperty("jqx-tabs-title-disable jqx-fill-state-disabled");
                        _this._raiseEvent(5, {
                            item: index
                        })
                    }
                },
                
                /* destroy
                 * 
                 * 위젯을 제거합니다.
                 * 
                 * - param : none 
                 * - return : none
                 */
                destroy: function () {
                    base.jqx.utilities.resize(_this.host, null, true);
                    if (document.referrer != "" || window.frameElement) {
                        if (window.top != null && window.top != window.self) {
                            _this.removeHandler(a(window.top.document), "mouseup.tabs" + _this.element.id)
                        }
                    }
                    
                    _this.host.remove();
                },
                
                /* ensureVisible 
                 * 
                 * 설정한 index에 해당하는 tab이 나타나도록 스크롤위치를 이동합니다.
                 * 
                 * - param : 
                 *      - index : 보이고자 하는 탭 index (0-based)
                 *              Type : Number
                 *          
                 * - return : none
                 */
                ensureVisible: function (index) {
                    var d = this;
                    if (index === undefined || index === -1 || index === null) {
                        index = _this.selectedItem;
                    }
                    if (!_this._isValidIndex(index)) {
                        return false;
                    }
                    
                    let j = _this._titleList[index];
                    let l = parseInt(base(j).position().left, 10) + parseInt(_this._unorderedListHelper.css("margin-left"), 10);
                    let g = parseInt(_this._unorderedListHelper.css("left"), 10);
                    let k = _this._outerWidth(_this._headerWrapper, true);
                    let f = _this._outerWidth(j, true);
                    let i = g - _this._getArrowsDisplacement();
                    let b = k - _this._getArrowsDisplacement() - i;
                    let h;
                    let c;
                    
                    if (l < -i) {
                        h = -l + _this._getArrowsDisplacement();
                        c = _this._getArrowsDisplacement()
                    } else {
                        if (l + f > b - _this._getArrowsDisplacement()) {
                            h = -l + k - f - ((_this.scrollable) ? (2 * _this.arrowButtonSize - _this._getArrowsDisplacement()) : 0);
                            c = k - f - _this._getArrowsDisplacement()
                        } else {
                            _this._moveSelectionTrack(index, _this.selectionTrackerAnimationDuration);
                            return true;
                        }
                    }
                    _this._lockAnimation("unorderedList");
                    _this._unorderedListHelper.animate({
                        left: h
                    }, _this.scrollAnimationDuration, function () {
                        _this._unlockAnimation("unorderedList");
                        _this._moveSelectionTrack(d._selectedItem, 0);
                        return true;
                    });
                    _this._moveSelectionTrack(index, _this.selectionTrackerAnimationDuration, c);
                    return true;
                },
                
                /* enableAt
                 * 
                 * index에 해당하는 탭을 활성화합니다.
                 * 
                 * - param : 
                 *      - index : 활성화 할 탭 index
                 *              Type : Number
                 *              
                 * - return : none
                 */
                enableAt: function (index) {
                    var title = _this._titleList[index];
                    if (title.disabled) {
                        title.disabled = false;
                        _this._addEventListenerAt(index);
                        _this._removeClass(title, _this.toThemeProperty("jqx-tabs-title-disable jqx-fill-state-disabled"));
                        _this._raiseEvent(4, {
                            item: index
                        })
                    }
                },
                
                /* expand
                 * 
                 * 현재 tab을 폅니다.
                 * 
                 * - param : none 
                 * - return : none
                 */
                expand: function () {
                    let selectedItem = _this._selectedItem;
                    
                    _this.isCollapsed = false;
                    _this._select(selectedItem, _this.contentTransitionDuration, null, false, true);
                    
                    if (_this.height !== "auto") {
                        _this._contentWrapper.style.visibility = "visible";
                    } else {
                        _this._contentWrapper.style.display = "block";
                    }
                    
                    _this._raiseEvent(14, {
                        item: selectedItem
                    });
                    
                    if (_this.position === "top") {
                        _this._removeClass(_this._headerWrapper, _this.toThemeProperty("jqx-tabs-header-collapsed"));
                        _this._removeClass(_this.element, _this.toThemeProperty("jqx-tabs-collapsed"))
                    } else {
                        _this._removeClass(_this._headerWrapper, _this.toThemeProperty("jqx-tabs-header-collapsed-bottom"));
                        _this._removeClass(_this.element, _this.toThemeProperty("jqx-tabs-collapsed-bottom"))
                    }
                },
                
                /* enable 
                 * 
                 * tab을 활성화합니다.
                 * 
                 * - param : none 
                 * - return : none
                 */
                enable: function () {
                    var tabLength = _this.length();
                    
                    while (tabLength) {
                        tabLength--;
                        _this.enableAt(tabLength);
                    }
                },
                
                /* focus 
                 * 
                 * 위젯에 포커스를 설정합니다.
                 * 
                 * - param : none 
                 * - return : none
                 */
                focus: function () {
                    try {
                        _this.host.focus();
                        
                        setTimeout(function () {
                            _this.host.focus()
                        }, 25)
                    } catch (err) {}
                },
                
                /* getTitleAt
                 * 
                 * index에 해당하는 tab의 title을 반환합니다.
                 * 
                 * - param : 
                 *      index : tab index
                 *              Type : Number
                 *              
                 * - return : String
                 */
                getTitleAt: function (index) {
                    if (_this._titleList[index]) {
                        return base(_this._titleList[index]).text();
                    }
                    return null;
                },
                
                /* getContentAt
                 * 
                 * index에 해당하는 tab의 내용을 반환합니다.
                 * 
                 * - param : 
                 *      index : tab index
                 *              Type : Number
                 *              
                 * - return : HTML element
                 */
                getContentAt: function (index) {
                    if (_this._contentList[index]) {
                        return _this._contentList[index];
                    }
                    return null;
                },
                
                /* hideCloseButtonAt
                 * 
                 * index에 해당하는 tab 종료버튼을 숨깁니다.
                 * 
                 * - param : 
                 *      - index : tab index
                 *              Type : Number
                 *              
                 * - return : none
                 */
                hideCloseButtonAt: function (index) {
                    if (_this._isValidIndex(index)) {
                        _this._closeButtonList[index].style.display = "none";
                        
                        if (!_this.hiddenCloseButtons) {
                            _this.hiddenCloseButtons = []
                        }
                        
                        _this.hiddenCloseButtons[index] = 1
                    }
                },
                
                /* hideAllCloseButtons
                 * 
                 * 모든 tab 종료버튼을 숨깁니다.
                 * 
                 * - param : none 
                 * - return : none
                 */
                hideAllCloseButtons: function () {
                    let tabLength = _this.length();
                    
                    while (tabLength) {
                        tabLength--;
                        _this.hideCloseButtonAt(tabLength)
                    }
                },
                
                /* length
                 * 
                 * tab의 개수를 반환합니다.
                 * 
                 * - param : none 
                 * 
                 * - return : Number
                 */
                length: function () {
                    return _this._titleList.length
                },
                
                /* removeAt 
                 * 
                 * index에 해당하는 tab을 제거합니다.
                 * 
                 * - param : 
                 *      - index : tab index
                 *              Type : Number
                 *              
                 * - return : none
                 */
                removeAt: function (index) {
                    if (_this._isValidIndex(index) && (_this.canCloseAllTabs || _this.length() > 1)) {
                        _this._removeHoverStates();
                        
                        let titleWidth = _this._outerWidth(_this._titleList[index], true);
                        let title = _this.getTitleAt(index);
                        
                        _this._unorderedList.style.width = _this._toPx(_this._width(_this._unorderedList) - titleWidth);
                        base(_this._titleList[index]).remove();
                        base(_this._contentList[index]).remove();
                        _this._titleList.splice(index, 1);
                        _this._contentList.splice(index, 1);
                        _this._closeButtonList.splice(index, 1);
                        _this._addStyles();
                        _this._performHeaderLayout();
                        _this._removeEventHandlers();
                        _this._addEventHandlers();
                        _this._raiseEvent(3, {
                            "item": index,
                            "title": title
                        });
                        _this._isAnimated = {};
                        
                        let selectedIndex;
                        
                        if (_this.selectedItem > 0) {
                            _this._selectedItem = -1;
                            if (_this.selectedItem >= index) {
                                selectedIndex = _this._getPreviousIndex(_this.selectedItem);
                                _this.select(selectedIndex);
                            } else {
                                _this.select(_this.selectedItem);
                            }
                        } else {
                            _this._selectedItem = -1;
                            selectedIndex = _this._getNextIndex(_this.selectedItem);
                            _this.select(selectedIndex);
                        }
                        if (parseInt(_this._unorderedListHelper.css("left"), 10) > _this._getArrowsDisplacement()) {
                            _this._unorderedList.style.left = _this._toPx(_this._getArrowsDisplacement());
                        }
                        if (_this._width(_this._unorderedList) <= _this._width(_this._headerWrapper)) {
                            var duration = (_this.enableScrollAnimation) ? _this.scrollAnimationDuration : 0;
                            _this._lockAnimation("unorderedList");
                            _this._unorderedListHelper.animate({
                                left: 0
                            }, duration, function () {
                                _this._unlockAnimation("unorderedList");
                            })
                        }
                    }
                },
                
                /* removeFirst
                 * 
                 * 첫번째 tab을 제거합니다.
                 * 
                 * - param : none 
                 * - return : none
                 */
                removeFirst: function () {
                    _this.removeAt(0)
                },
                
                /* removeLast
                 * 
                 * 마지막 tab을 제거합니다.
                 * 
                 * - param : none 
                 * - return : none
                 */
                removeLast: function () {
                    _this.removeAt(_this.length() - 1)
                },
                
                /* select
                 * 
                 * index에 해당하는 tab을 선택합니다.
                 * 
                 * - param : 
                 *      - index : tab index (0-based)
                 *              Type : Number
                 *              
                 * - return : none
                 */
                select: function (index) {
                    if (typeof(index) === "object") {
                        index = _this._indexOf(index);
                    }
                    
                    let canSelect = index >= 0 && index < _this._titleList.length ? _this._titleList[index].getAttribute("canselect") : true;
                    
                    if (canSelect === undefined || canSelect === null || canSelect === "true" || canSelect === true) {
                        if (index !== _this._selectedItem && _this._isValidIndex(index)) {
                            if (!_this._activeAnimation() && !_this._titleList[index].disabled) {
                                
                                let switchTabs = _this._switchTabs(index, _this._selectedItem);
                                
                                if (switchTabs) {
                                    _this.ensureVisible(index);
                                }
                            }
                        }
                    }
                },
                
                /* setContentAt 
                 * 
                 * index에 해당하는 tab의 내용을 설정합니다.
                 * 
                 * - param : 
                 *      - index : tab index (0-based)
                 *              Type : Number
                 *      
                 *      - content : tab의 내용 (html tag 사용가능)
                 *              Type : String
                 *      
                 *          
                 * - return : none
                 */
                setContentAt: function (index, content) {
                    if (_this._contentList[index]) {
                        base(_this._contentList[index]).html(content)
                    }
                },
                
                /* setTitleAt
                 * 
                 * index에 해당하는 tab의 제목을 설정합니다.
                 * 
                 * - param : 
                 *      - index : tab index (0-based)
                 *              Type : Number
                 *
                 *      - title : tab 제목
                 *              Type : String
                 * 
                 * - return : none
                 */
                setTitleAt: function (index, title) {
                    if (_this._titleList[index]) {
                        base(_this._titleList[index]).text(title);
                        if (_this.showCloseButtons) {
                            _this._addCloseButton(index);
                            _this._removeEventHandlers();
                            _this._addEventHandlers();
                        }
                        _this.render();
                        _this.refresh();
                    }
                },
                
                /* showCloseButtonAt    TODO : 기능수정 필요
                 * 
                 * index에 해당하는 tab의 닫기버튼을 활성화합니다.   
                 * 
                 * - param : 
                 *      - index : tab index (0-based)
                 *       
                 * - return : none
                 */
                showCloseButtonAt: function (index) {
                    if (_this._isValidIndex(index)) {
                        if (!_this.showCloseButtons) {
                            _this.showCloseButtons = true;
                            _this.updatetabsheader();
                        }
                        
                        _this._closeButtonList[index].style.display = "block";
                        
                        if (!_this.hiddenCloseButtons) {
                            _this.hiddenCloseButtons = [];
                        }
                        
                        _this.hiddenCloseButtons[index] = 0
                        
                        console.log(JSON.stringify(_this.hiddenCloseButtons));
                    }
                },
                
                /* showAllCloseButtons
                 * 
                 * 모든 tab의 닫기버튼을 활성화합니다.
                 * 
                 * - param : none 
                 * - return : none
                 */
                showAllCloseButtons: function () {
                    let tabLength = _this.length();
                    console.log(tabLength);
                    while (tabLength) {
                        tabLength--;
                        _this.showCloseButtonAt(tabLength);
                    }
                },
                
                /* val
                 * 
                 * tab의 값을 설정하거나 가져옵니다.
                 * parameter가 없는 경우 현재 선택된 탭의 index를 가져옵니다.
                 * 
                 * - param : 
                 *      - index : tab index (0-based) 
                 *              Type : Number
                 *              
                 * - return : Number
                 */
                val: function (index) {
                    if (arguments.length === 0 || typeof(index) === "object") {
                        return _this._selectedItem;
                    }
                    
                    _this.select(index);
                    
                    return _this._selectedItem;
                },
                
   
                /* _addNpEventHandlers
                 * 
                 * tab element에 전체 eventHandler를 추가합니다.
                 * 
                 * - param : none  
                 *          
                 */
                _addNpEventHandlers: function(){
                    let elem = _this.host;
                    elem.on("add", function(event) {
                        _this._onNpAddHandler(event);
                    });
                    
                    elem.on("created", function(event) {
                        _this._onNpCreatedHandler(event);
                    });
                    
                    elem.on("collapsed", function(event) {
                        _this._onNpCollapsedHandler(event);
                    });
                    
                    elem.on("dragStart", function(event) {
                        _this._onNpDragStartHandler(event);
                    });
                    
                    elem.on("dragEnd", function(event) {
                        _this._onNpDragEndHandler(event);
                    });
                    
                    elem.on("expanded", function(event) {
                        _this._onNpExpandedHandler(event);
                    });
                    
                    elem.on("removed", function(event) {
                        _this._onNpRemovedHandler(event);
                    });
                    
                    elem.on("selecting", function(event) {
                        _this._onNpSelectingHandler(event);
                    });
                    
                    elem.on("selected", function(event) {
                        _this._onNpSelectedHandler(event);
                    });
                    
                    elem.on("tabclick", function(event) {
                        _this._onNpTabClickHandler(event);
                    });
                    
                    elem.on("unselecting", function(event) {
                        _this._onNpUnselectingHandler(event);
                    });
                    
                    elem.on("unselected", function(event) {
                        _this._onNpUnselectedHandler(event);
                    });
                },
                
                
                /***************************************************
                 * Event Callback
                 ***************************************************/
                onNpAdd : function(callback) {
                    _this.host.on("npAdd", callback);
                    return;
                },
                
                onNpCreated : function(callback) {
                    _this.host.on("npCreated", callback);
                    return;
                },
                
                onNpCollapsed : function(callback) {
                    _this.host.on("npCollapsed", callback);
                    return;
                },
                
                onNpDragStart : function(callback) {
                    _this.host.on("npDragStart", callback);
                    return;
                },
                
                onNpDragEnd : function(callback) {
                    _this.host.on("npDragEnd", callback);
                    return;
                },
                
                onNpExpanded : function(callback) {
                    _this.host.on("npExpanded", callback);
                    return;
                },
                
                onNpRemoved : function(callback) {
                    _this.host.on("npRemoved", callback);
                    return;
                },
                
                onNpSelecting : function(callback) {
                    _this.host.on("npSelecting", callback);
                    return;
                },
                
                onNpSelected : function(callback) {
                    _this.host.on("npSelected", callback);
                    return;
                },
                
                onNpTabClick : function(callback) {
                    _this.host.on("npTabClick", callback);
                    return;
                },
                
                onNpUnselecting : function(callback) {
                    _this.host.on("npUnselecting", callback);
                    return;
                },
                
                onNpUnselected : function(callback) {
                    _this.host.on("npUnselected", callback);
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
                    if(!_this.isInitialized || _this._suppressEvents || typeof args === "undefined") {
                        return;
                    }
                    
                    // EventHandler 생성
                    let npEvent = new base.Event(eventName);

                    //console.log(eventName + " : " +JSON.stringify(args));
                    
                    npEvent.args = args;
                    npEvent.wrappedEvent = wrappedEvent;   // 원본 이벤트
                    npEvent.owner = _this;
                    
                    let trigger = _this.host.trigger(npEvent);
                    
                    return trigger;
                },
                
                /* _onNpAddHandler
                 * 
                 * tab을 추가할 때 trigger 됩니다.
                 * 
                 * - event.args : 
                 *      - item : 추가된 tab의 index
                 *    
                 * - return : trigger 객체
                 */
                _onNpAddHandler : function(event) {
                    return _this._createEventHandler("npAdd", event, event.args);
                },
                
                /* _onNpCreatedHandler
                 * 
                 * 위젯을 생성할 때 trigger 됩니다.
                 * 
                 * - event.args : none
                 *    
                 * - return : trigger 객체
                 */
                _onNpCreatedHandler : function(event) {
                    return _this._createEventHandler("npCreated", event, event.args);
                },
                
                /* _onNpCollapsedHandler
                 * 
                 * tab이 접히는 경우 trigger됩니다.
                 * 
                 * - event.args : 
                 *      - item : 현재 선택된 tab의 index
                 *    
                 * - return : trigger 객체
                 */
                _onNpCollapsedHandler : function(event) {
                    return _this._createEventHandler("npCollapsed", event, event.args);
                },
                
                /* _onNpDragStartHandler
                 * 
                 * tab title을 Drag한 경우 trigger 됩니다.
                 * reorder property가 true인 경우에만 사용 가능합니다.
                 * 
                 * - event.args : 
                 *      - item : 현재 선택된 tab의 index
                 *    
                 * - return : trigger 객체
                 */
                _onNpDragStartHandler : function(event) {
                    return _this._createEventHandler("npDragStart", event, event.args);
                },
                
                /* _onNpDragEndHandler
                 * 
                 * tab title을 Drag Drop한 경우 trigger 됩니다.
                 * reorder property가 true인 경우에만 사용 가능합니다.
                 * 
                 * - event.args : 
                 *      - item : 현재 선택된 tab의 index
                 *    
                 * - return : trigger 객체
                 */
                _onNpDragEndHandler : function(event) {
                    return _this._createEventHandler("npDragEnd", event, event.args);
                },
                
                /* _onNpExpandedHandler
                 * 
                 * tab이 펴진경우 trigger 됩니다. 
                 * 
                 * - event.args : 
                 *      - item : 현재 선택된 tab의 index
                 *    
                 * - return : trigger 객체
                 */
                _onNpExpandedHandler : function(event) {
                    return _this._createEventHandler("npExpanded", event, event.args);
                },
                
                /* _onNpRemovedHandler
                 * 
                 * tab이 제거된 경우 trigger 됩니다. 
                 * 
                 * - event.args : 
                 *      - item : 제거된 tab의 index
                 *    
                 * - return : trigger 객체
                 */
                _onNpRemovedHandler : function(event) {
                    return _this._createEventHandler("npRemoved", event, event.args);
                },
                
                /* _onNpSelectingHandler
                 * 
                 * tab이 선택상태인 경우 trigger 됩니다. 
                 * 
                 * - event.args : 
                 *      - item : 선택중인 tab의 index
                 *    
                 * - return : trigger 객체
                 */
                _onNpSelectingHandler : function(event) {
                    return _this._createEventHandler("npSelecting", event, event.args);
                },
                
                /* _onNpSelectedHandler
                 * 
                 * tab이 선택된 후 trigger 됩니다. 
                 * 
                 * - event.args : 
                 *      - item : 선택된 tab의 index
                 *    
                 * - return : trigger 객체
                 */
                _onNpSelectedHandler : function(event) {
                    return _this._createEventHandler("npSelected", event, event.args);
                },
                
                /* _onNpTabClickHandler
                 * 
                 * tab이 클릭된 경우 trigger 됩니다. 
                 * 
                 * - event.args : 
                 *      - item : 선택된 tab의 index
                 *    
                 * - return : trigger 객체
                 */
                _onNpTabClickHandler : function(event) {
                    return _this._createEventHandler("npTabClick", event, event.args);
                },
                
                /* _onNpUnselectingHandler
                 * 
                 * tab이 선택 해제중인 경우 trigger 됩니다. 
                 * 
                 * - event.args : 
                 *      - item : 선택해제 중인 tab의 index
                 *    
                 * - return : trigger 객체
                 */
                _onNpUnselectingHandler : function(event) {
                    return _this._createEventHandler("npUnselecting", event, event.args);
                },
                
                /* _onNpUnselectedHandler
                 * 
                 * tab이 선택 해제 후 trigger 됩니다. 
                 * 
                 * - event.args : 
                 *      - item : 선택해제된 tab의 index
                 *    
                 * - return : trigger 객체
                 */
                _onNpUnselectedHandler : function(event) {
                    return _this._createEventHandler("npUnselected", event, event.args);
                },
            });
   
            _npTabs = $.extend({}, base.jqx._jqxTabs.prototype);
            
            return _npTabs;
        }
        
        return createInstance;
    
    })(jqxBaseFramework);
