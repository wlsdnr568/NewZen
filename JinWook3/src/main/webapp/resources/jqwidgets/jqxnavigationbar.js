/*
jQWidgets v6.1.0 (2018-October)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxNavigationBar","",{});a.extend(a.jqx._jqxNavigationBar.prototype,{defineInstance:function(){var b={width:"auto",height:"auto",expandAnimationDuration:250,collapseAnimationDuration:250,animationType:"slide",toggleMode:"click",showArrow:true,arrowPosition:"right",disabled:false,initContent:null,rtl:false,easing:"easeInOutSine",expandMode:"singleFitHeight",expandedIndexes:[],_expandModes:["singleFitHeight","single","multiple","toggle","none"],aria:{"aria-disabled":{name:"disabled",type:"boolean"}},events:["expandingItem","expandedItem","collapsingItem","collapsedItem"]};if(this===a.jqx._jqxNavigationBar.prototype){return b}a.extend(true,this,b);return b},createInstance:function(){this._isTouchDevice=a.jqx.mobile.isTouchDevice();a.jqx.aria(this);this.render()},val:function(b){if(arguments.length===0||typeof(b)=="object"){return this.expandedIndexes}if(typeof b=="string"){this.expandedIndexes.push(parseInt(b,10));this._applyExpandedIndexes()}else{if(b instanceof Array){this.expandedIndexes=b}else{this.expandedIndexes=[b]}this._applyExpandedIndexes()}return this.expandedIndexes},expandAt:function(b){var f=this;if(this.expandMode=="single"||this.expandMode=="singleFitHeight"||this.expandMode=="toggle"){for(var c=0;c<f.items.length;c++){if(c!=b){f.collapseAt(c)}}}var g=this.items[b];if(g.disabled===false&&g.expanded===false&&g._expandChecker==1){g._expandChecker=0;this._raiseEvent("0",{item:b});g._headerHelper.removeClass(this.toThemeProperty("jqx-fill-state-normal"));g._headerHelper.addClass(this.toThemeProperty("jqx-fill-state-pressed jqx-expander-header-expanded"));g._arrowHelper.removeClass(this.toThemeProperty("jqx-icon-arrow-down jqx-icon-arrow-down-hover jqx-icon-arrow-up-hover jqx-icon-arrow-down-selected jqx-expander-arrow-top"));g._arrowHelper.addClass(this.toThemeProperty("jqx-icon-arrow-up jqx-icon-arrow-up-selected jqx-expander-arrow-bottom jqx-expander-arrow-expanded"));if(this.heightFlag===false){f.element.style.overflowX="hidden";f.element.style.overflowY="hidden"}this.eCFlag=1;switch(this.animationType){case"slide":var e=g._contentHelper,h=0,d=e.outerHeight();e.slideDown({duration:this.expandAnimationDuration,easing:this.easing,step:function(i,j){j.now=Math.round(i);if(j.prop!=="height"){h+=j.now}else{if(f._collapseContent){j.now=Math.round(d-f._collapseContent.outerHeight()-h);h=0}else{j.now=Math.round(i)}}},complete:function(){g.expanded=true;a.jqx.aria(g._header,"aria-expanded",true);a.jqx.aria(g._content,"aria-hidden",false);f._updateExpandedIndexes();f._raiseEvent("1",{item:b});f._checkHeight();if(f.heightFlag===true){f.element.style.overflowX="hidden";f.element.style.overflowY="auto"}if(f.initContent&&g._initialized===false){f.initContent(b);g._initialized=true}f.eCFlag=0}});break;case"fade":setTimeout(function(){g._contentHelper.fadeIn({duration:this.expandAnimationDuration,complete:function(){g.expanded=true;a.jqx.aria(g._header,"aria-expanded",true);a.jqx.aria(g._content,"aria-hidden",false);f._updateExpandedIndexes();f._raiseEvent("1",{item:b});f._checkHeight();if(f.heightFlag===true){f.element.style.overflowX="hidden";f.element.style.overflowY="auto"}if(f.initContent&&g._initialized===false){f.initContent(b);g._initialized=true}f.eCFlag=0}})},this.collapseAnimationDuration);break;case"none":g._content.style.display="";g.expanded=true;a.jqx.aria(g._header,"aria-expanded",true);a.jqx.aria(g._content,"aria-hidden",false);this._updateExpandedIndexes();this._raiseEvent("1",{item:b});this._checkHeight();if(this.heightFlag===true){f.element.style.overflowX="hidden";f.element.style.overflowY="auto"}if(this.initContent&&g._initialized===false){this.initContent(b);g._initialized=true}this.eCFlag=0;break}}},collapseAt:function(b){var e=this.items[b];if(e.disabled===false&&e.expanded===true&&e._expandChecker===0){var d=this;e._expandChecker=1;this._raiseEvent("2",{item:b});e._headerHelper.removeClass(this.toThemeProperty("jqx-fill-state-pressed jqx-expander-header-expanded"));e._headerHelper.addClass(this.toThemeProperty("jqx-fill-state-normal"));e._arrowHelper.removeClass(this.toThemeProperty("jqx-icon-arrow-up jqx-icon-arrow-up-selected jqx-icon-arrow-down-selected jqx-expander-arrow-bottom jqx-expander-arrow-expanded"));e._arrowHelper.addClass(this.toThemeProperty("jqx-icon-arrow-down jqx-expander-arrow-top"));if(this.heightFlag===false){d.element.style.overflowX="hidden";d.element.style.overflowY="hidden"}this.eCFlag=1;this._collapseContent=e._contentHelper;switch(this.animationType){case"slide":var c=e._contentHelper;c.slideUp({duration:this.collapseAnimationDuration,step:function(f,g){g.now=Math.round(f)},easing:this.easing,complete:function(){e.expanded=false;e._content.style.display="none";a.jqx.aria(e._header,"aria-expanded",false);a.jqx.aria(e._content,"aria-hidden",true);d._updateExpandedIndexes();d._raiseEvent("3",{item:b});d._checkHeight();if(d.heightFlag===true){d.element.style.overflowX="hidden";d.element.style.overflowY="auto"}d.eCFlag=0;d._collapseContent=null}});break;case"fade":e._contentHelper.fadeOut({duration:this.collapseAnimationDuration,complete:function(){e.expanded=false;a.jqx.aria(e._header,"aria-expanded",false);a.jqx.aria(e._content,"aria-hidden",true);d._updateExpandedIndexes();d._raiseEvent("3",{item:b});d._checkHeight();if(d.heightFlag===true){d.element.style.overflowX="hidden";d.element.style.overflowY="auto"}d.eCFlag=0}});break;case"none":e._content.style.display="none";e.expanded=false;a.jqx.aria(e._header,"aria-expanded",false);a.jqx.aria(e._content,"aria-hidden",true);this._updateExpandedIndexes();this._raiseEvent("3",{item:b});this._checkHeight();if(this.heightFlag===true){d.element.style.overflowX="hidden";d.element.style.overflowY="auto"}this.eCFlag=0;break}}},setHeaderContentAt:function(b,c){this.items[b]._headerText.innerHTML=c},getHeaderContentAt:function(b){return this.items[b]._headerText.innerHTML},setContentAt:function(b,c){this.items[b]._content.innerHTML=c;this._checkContent(b)},getContentAt:function(b){return this.items[b]._content.innerHTML},showArrowAt:function(b){this.items[b]._arrow.style.display="block"},hideArrowAt:function(b){this.items[b]._arrow.style.display="none"},enable:function(){this.disabled=false;this._enabledDisabledCheck();this.refresh();a.jqx.aria(this,"aria-disabled",false)},disable:function(){this.disabled=true;this._enabledDisabledCheck();this.refresh();a.jqx.aria(this,"aria-disabled",true)},enableAt:function(b){this.items[b].disabled=false;this.refresh()},disableAt:function(b){this.items[b].disabled=true;this.refresh()},invalidate:function(){this.refresh()},refresh:function(c){if(c===true){return}this._removeHandlers();for(var b=0;b<this.items.length;b++){this.items[b]._arrow.style.display=this.showArrow?"block":"none"}this._updateExpandedIndexes();this._setTheme();this._setSize();this._toggle();this._keyBoard()},render:function(){this.widgetID=this.element.id;var s=this;if(this._expandModes.indexOf(this.expandMode)==-1){this.expandMode="singleFitHeight"}a.jqx.utilities.resize(this.host,function(){s._setSize()});s.element.setAttribute("role","tablist");if(this.items){this._removeHandlers();a.each(this.items,function(){this._header.className="";this._header.setAttribute("tabindex",null);this._header.style.marginTop="0px";this._headerText.className="";this._header.innerHTML=this._headerText.innerHTML;this._content.setAttribute("tabindex",null)})}this.items=[];var t=s.host.children(),p=t.length;var w="Invalid jqxNavigationBar structure. Please add an even number of child div elements that will represent each item's header and content.";try{if(p%2!==0){throw w}}catch(d){throw new Error(d)}var g="Invalid jqxNavigationBar structure. Please make sure all the children elements of the navigationbar are divs.";try{for(var u=0;u<p;u++){if(t[u].tagName.toLowerCase()!="div"){throw g}}}catch(d){throw new Error(d)}for(var x=0;x<p;x+=2){var r=t[x];r.innerHTML="<div>"+r.innerHTML+"</div>"}var o=0;var h;for(var n=0;n<p/2;n++){h=o+1;var v={};v={};v._header=t[o];v._headerHelper=a(t[o]);t[o].setAttribute("role","tab");v._content=t[h];v._contentHelper=a(t[h]);if(v._contentHelper.initAnimate){v._contentHelper.initAnimate()}v.expandedFlag=false;v.expanded=false;v.focusedH=false;v.focusedC=false;this.items[n]=v;t[h].setAttribute("role","tabpanel");o+=2}var b=this.expandedIndexes.length;if(this.items&&this.items.length===0){return}if(this.expandMode=="single"||this.expandMode=="singleFitHeight"||this.expandMode=="toggle"||this.expandMode=="none"){if(b!==0){this.items[this.expandedIndexes[0]].expanded=true}else{if(b===0&&(this.expandMode=="single"||this.expandMode=="singleFitHeight")){this.items[0].expanded=true}}}else{if(this.expandMode=="multiple"){if(b!==0){for(var f=0;f<b;f++){s.items[this.expandedIndexes[f]].expanded=true}}}}this._enabledDisabledCheck();var q=0;a.each(this.items,function(c){var i=this;i._headerText=a(i._header).children()[0];if(!s.rtl){a(i._headerText).addClass(s.toThemeProperty("jqx-expander-header-content"))}else{a(i._headerText).addClass(s.toThemeProperty("jqx-expander-header-content-rtl"))}i._arrow=document.createElement("div");i._arrowHelper=a(i._arrow);i._header.appendChild(i._arrow);if(s.showArrow){i._arrow.style.display="block"}else{i._arrow.style.display="none"}if(i.expanded===true){i._arrowHelper.addClass(s.toThemeProperty("jqx-icon-arrow-up jqx-icon-arrow-up-selected jqx-expander-arrow-bottom jqx-expander-arrow-expanded"));if(s.initContent){setTimeout(function(){s.initContent(c);i._initialized=true},10)}else{i._initialized=true}i._expandChecker=0;a.jqx.aria(i._header,"aria-expanded",true);a.jqx.aria(i._content,"aria-hidden",false)}else{if(i.expanded===false){i._arrowHelper.addClass(s.toThemeProperty("jqx-icon-arrow-down jqx-expander-arrow-top"));i._initialized=false;i._expandChecker=1;i._content.style.display="none";a.jqx.aria(i._header,"aria-expanded",false);a.jqx.aria(i._content,"aria-hidden",true)}}if(i._header.getAttribute("tabindex")===null){q++;i._header.setAttribute("tabindex",q)}if(i._content.getAttribute("tabindex")===null){q++;i._content.setAttribute("tabindex",q)}});this._setTheme();this._setSize();for(var e=0;e<s.items.length;e++){s._checkContent(e)}this._toggle();this._keyBoard()},insert:function(b,g,e){var f=document.createElement("div"),c=document.createElement("div");f.innerHTML=g;c.innerHTML=e;if(b>=0&&b<=this.items.length){var d=this.items[b]._header;this.element.insertBefore(f,d);this.element.insertBefore(c,d)}else{this.element.appendChild(f);this.element.appendChild(c)}this.render()},add:function(c,b){this.insert(-1,c,b)},update:function(b,d,c){this.setHeaderContentAt(b,d);this.setContentAt(b,c)},remove:function(b){if(isNaN(b)){b=this.items.length-1}if(!this.items[b]){return}this.items[b]._header.remove();this.items[b]._content.remove();this.items.splice(b,1);var c=this.expandedIndexes.indexOf(b);if(c>-1){this.expandedIndexes.splice(c,1)}this.render()},destroy:function(){this._removeHandlers();this.host.remove()},focus:function(){try{for(var c=0;c<this.items.length;c++){var d=this.items[c];if(d.disabled===false){d._header.focus();return false}}}catch(b){}},_applyExpandedIndexes:function(){var g=this;var f=this.expandedIndexes.length;for(var d=0;d<f;d++){var h=g.expandedIndexes[d];for(var c=0;c<g.items.length;c++){var e=g.items[c];if(c==h){e.expandedFlag=true;if(e.expanded===false){g.expandAt(c)}if(g.expandMode=="single"||g.expandMode=="singleFitHeight"||g.expandMode=="toggle"||g.expandMode=="none"){return false}}else{if(c!=h&&e.expandedFlag===false){g.collapseAt(c)}}}}for(var b=0;b<g.items.length;b++){g.items[b].expandedFlag=false}},propertiesChangedHandler:function(b,c,d){if(d.width&&d.height&&Object.keys(d).length==2){b._setSize()}},propertyChangedHandler:function(b,c,e,d){if(b.batchUpdate&&b.batchUpdate.width&&b.batchUpdate.height&&Object.keys(b.batchUpdate).length==2){return}if(c=="width"||c=="height"){b._setSize();return}if(c==="theme"){b.render();return}if(c=="disabled"){b._enabledDisabledCheck()}else{if(c=="expandedIndexes"){b._applyExpandedIndexes()}else{b.refresh()}}},_raiseEvent:function(g,e){var c=this.events[g];var f=new a.Event(c);f.owner=this;f.args=e;f.item=f.args.item;var b;try{b=this.host.trigger(f)}catch(d){}return b},resize:function(c,b){this.width=c;this.height=b;this._setSize()},_setSize:function(){var k=this;this.headersHeight=0;var e=this.items&&this.items.length>0?parseInt(this.items[0]._headerHelper.css("padding-left"),10):0;var d=this.items&&this.items.length>0?parseInt(this.items[0]._headerHelper.css("padding-right"),10):0;var b=2;var c=e+d+b;if(isNaN(c)){c=12}if(this.width=="auto"){k.element.style.width="auto"}else{if(this.width!=null&&this.width.toString().indexOf("%")!=-1){k.element.style.width=k.width}else{k.element.style.width=(parseInt(this.width,10)+c)+"px"}}if(typeof k.height==="number"){k.element.style.height=k.height+"px"}else{k.element.style.height=k.height}for(var h=0;h<k.items.length;h++){var n=k.items[h];var f=k.arrowPosition;if(k.rtl){switch(f){case"left":f="right";break;case"right":f="left";break}}if(f=="right"){n._headerText.style["float"]="left";n._headerText.style.marginLeft="0px";n._arrow.style["float"]="right";n._arrow.style.position="relative"}else{if(f=="left"){if(k.width=="auto"){n._headerText.style["float"]="left";n._headerText.style.marginLeft="17px";n._arrow.style["float"]="left";n._arrow.style.position="absolute"}else{n._headerText.style["float"]="right";n._headerText.style.marginLeft="0px";n._arrow.style["float"]="left";n._arrow.style.position="relative"}}}n._header.style.height="auto";n._headerText.style.minHeight=n._arrow.offsetHeight;k.headersHeight+=a(n._header).outerHeight();n._arrow.style.marginTop=(n._headerText.offsetHeight/2-n._arrow.offsetHeight/2)+"px"}for(var g=0;g<k.items.length;g++){var m=k.items[g];if(k.height!="auto"){if(k.expandMode=="single"||k.expandMode=="toggle"||k.expandMode=="multiple"){k.element.style.overflowX="hidden";k.element.style.overflowY="auto"}else{if(k.expandMode=="singleFitHeight"){var l=parseInt(m._contentHelper.css("padding-top"),10)+parseInt(m._contentHelper.css("padding-bottom"),10);if(k.height&&k.height.toString().indexOf("%")>=0){m._content.style.height=Math.max(0,(k.element.offsetHeight-k.headersHeight-l+2))+"px"}else{m._content.style.height=Math.max(0,(k.element.offsetHeight-k.headersHeight-l))+"px"}}}}}k._checkHeight()},_toggle:function(){var b=this;if(this._isTouchDevice===false){switch(this.toggleMode){case"click":case"dblclick":a.each(this.items,function(c){var d=this;if(d.disabled===false){b.addHandler(d._header,b.toggleMode+".navigationbar"+b.widgetID,function(){b.focusedH=true;b._animate(c)})}});break;case"none":break}}else{if(this.toggleMode!="none"){a.each(this.items,function(c){var d=this;if(d.disabled===false){b.addHandler(d._header,a.jqx.mobile.getTouchEventName("touchstart")+"."+b.widgetID,function(){b._animate(c)})}})}else{return}}},_animate:function(c,b){var d=this;var e=this.items[c];if(this.expandMode!="none"&&this.eCFlag!=1){if(this.items[c].expanded===true){if(this.expandMode=="multiple"||this.expandMode=="toggle"){this.collapseAt(c)}}else{this.expandAt(c)}if(!d._isTouchDevice){if(b!==true){e._headerHelper.addClass(this.toThemeProperty("jqx-fill-state-hover jqx-expander-header-hover"));e._arrowHelper.addClass(this.toThemeProperty("jqx-expander-arrow-top-hover jqx-expander-arrow-down-hover"))}else{e._headerHelper.removeClass(this.toThemeProperty("jqx-fill-state-hover jqx-expander-header-hover"));e._arrowHelper.removeClass(this.toThemeProperty("jqx-expander-arrow-top-hover jqx-expander-arrow-down-hover"))}}}},_removeHandlers:function(){var d=this;this.removeHandler(this.host,"keydown.navigationbar"+this.widgetID);for(var b=0;b<d.items.length;b++){var c=d.items[b];d.removeHandler(c._header,"click.navigationbar"+d.widgetID);d.removeHandler(c._header,"dblclick.navigationbar"+d.widgetID);d.removeHandler(c._header,"mouseenter.navigationbar"+d.widgetID);d.removeHandler(c._header,"mouseleave.navigationbar"+d.widgetID);d.removeHandler(c._header,"focus.navigationbar"+d.widgetID);d.removeHandler(c._header,"blur.navigationbar"+d.widgetID);d.removeHandler(c._content,"focus.navigationbar"+d.widgetID);d.removeHandler(c._content,"blur.navigationbar"+d.widgetID);d.removeHandler(c._headerText,"focus.navigationbar"+d.widgetID);d.removeHandler(c._arrow,"focus.navigationbar"+d.widgetID)}},_setTheme:function(){var b=this;this.host.addClass(this.toThemeProperty("jqx-reset jqx-widget"));if(this.rtl===true){this.host.addClass(this.toThemeProperty("jqx-rtl"))}a.each(this.items,function(e){var g=this,h=g._headerHelper,i=g._arrowHelper,c=g._contentHelper,f="jqx-widget-header jqx-item jqx-expander-header",d="jqx-widget-content jqx-expander-content jqx-expander-content-bottom";g._header.style.position="relative";g._content.style.position="relative";if(g.disabled===false){h.removeClass(b.toThemeProperty("jqx-fill-state-disabled"));c.removeClass(b.toThemeProperty("jqx-fill-state-disabled"));if(g.expanded===true){f+=" jqx-fill-state-pressed jqx-expander-header-expanded"}else{f+=" jqx-fill-state-normal";h.removeClass(b.toThemeProperty("jqx-expander-header-expanded"))}if(!b._isTouchDevice){b.addHandler(g._header,"mouseenter.navigationbar"+b.widgetID,function(){if(g._expandChecker==1){if(!g.focusedH){g._header.style.zIndex=5}h.removeClass(b.toThemeProperty("jqx-fill-state-normal jqx-fill-state-pressed"));h.addClass(b.toThemeProperty("jqx-fill-state-hover jqx-expander-header-hover"));i.addClass(b.toThemeProperty("jqx-expander-arrow-top-hover jqx-expander-arrow-down-hover"));if(g.expanded){i.addClass(b.toThemeProperty("jqx-icon-arrow-up-hover"))}else{i.addClass(b.toThemeProperty("jqx-icon-arrow-down-hover"))}}});b.addHandler(g._header,"mouseleave.navigationbar"+b.widgetID,function(){if(!g.focusedH){g._header.style.zIndex=0}h.removeClass(b.toThemeProperty("jqx-fill-state-hover jqx-expander-header-hover"));i.removeClass(b.toThemeProperty("jqx-expander-arrow-top-hover jqx-expander-arrow-down-hover jqx-icon-arrow-up-hover jqx-icon-arrow-down-hover"));if(g._expandChecker==1){h.addClass(b.toThemeProperty("jqx-fill-state-normal"))}else{h.addClass(b.toThemeProperty("jqx-fill-state-pressed"))}})}}else{f+=" jqx-fill-state-disabled";d+=" jqx-fill-state-disabled"}b.host.addClass(b.toThemeProperty("jqx-navigationbar"));h.addClass(b.toThemeProperty(f));c.addClass(b.toThemeProperty(d));if(e!==0){g._header.style.marginTop="-1px"}i.addClass(b.toThemeProperty("jqx-expander-arrow"))})},_checkContent:function(b){var d=this.items[b];var c=d._content;this._cntntEmpty=/^\s*$/.test(this.items[b]._content.innerHTML);if(this._cntntEmpty===true){c.style.display="none";c.style.height="0px";d._contentHelper.addClass(this.toThemeProperty("jqx-expander-content-empty"))}else{if(d.expanded){c.style.display="block"}if(this.expandMode=="singleFitHeight"){var e=1;if(b!==0){}c.style.height=Math.max(0,(this.element.offsetHeight-this.headersHeight+this.items.length-2))+"px"}else{c.style.height="auto"}d._contentHelper.removeClass(this.toThemeProperty("jqx-expander-content-empty"))}},_checkHeight:function(){var h=this;if(typeof h.width==="string"&&h.width.indexOf("%")!==-1){return}var j=0;var e=this.items&&this.items.length>0?parseInt(this.items[0]._headerHelper.css("padding-left"),10):0;var d=this.items&&this.items.length>0?parseInt(this.items[0]._headerHelper.css("padding-right"),10):0;var b=2;var c=e+d+b;if(isNaN(c)){c=12}var g=17;for(var f=0;f<h.items.length;f++){var k=h.items[f];j+=(k.expanded?k._contentHelper.outerHeight():0)+k._headerHelper.outerHeight()}if(this.width!="auto"&&this.height!="auto"&&this.expandMode!="singleFitHeight"){if(j>h.element.offsetHeight){h.element.style.width=(parseInt(this.width,10)+c+g)+"px";this.heightFlag=true}else{h.element.style.width=(parseInt(this.width,10)+c)+"px";this.heightFlag=false}}},_enabledDisabledCheck:function(){for(var b=0;b<this.items.length;b++){this.items[b].disabled=this.disabled}},_updateExpandedIndexes:function(){var b=this;this.expandedIndexes=[];a.each(this.items,function(c){var d=this;if(d.expanded===true){b.expandedIndexes.push(c);if(b.expandMode=="single"||b.expandMode=="singleFitHeight"||b.expandMode=="toggle"||b.expandMode=="none"){return false}}})},_keyBoard:function(){var b=this;this._focus();this.addHandler(this.host,"keydown.navigationbar"+this.widgetID,function(d){var e=false,c=b.items.length;a.each(b.items,function(f){var g=this;if((g.focusedH===true||g.focusedC===true)&&g.disabled===false){switch(d.keyCode){case 13:case 32:if(b.toggleMode!="none"){if(g.focusedH===true){b._animate(f,true)}e=true}break;case 37:if(f!==0){b.items[f-1]._header.focus()}else{b.items[c-1]._header.focus()}e=true;break;case 38:if(d.ctrlKey===false){if(f!==0){b.items[f-1]._header.focus()}else{b.items[c-1]._header.focus()}}else{if(g.focusedC===true){g._header.focus()}}e=true;break;case 39:if(f!=c-1){b.items[f+1]._header.focus()}else{b.items[0]._header.focus()}e=true;break;case 40:if(d.ctrlKey===false){if(f!=c-1){b.items[f+1]._header.focus()}else{b.items[0]._header.focus()}}else{if(g.expanded===true){g._content.focus()}}e=true;break;case 35:if(f!=c-1){b.items[c-1]._header.focus()}e=true;break;case 36:if(f!==0){b.items[0]._header.focus()}e=true;break}return false}});if(e&&d.preventDefault){d.preventDefault()}return !e})},_focus:function(){var b=this;if(this.disabled){return}a.each(this.items,function(){var c=this;b.addHandler(c._header,"focus.navigationbar"+this.widgetID,function(){c.focusedH=true;a.jqx.aria(c._header,"aria-selected",true);c._headerHelper.addClass(b.toThemeProperty("jqx-fill-state-focus"));c._header.style.zIndex=10});b.addHandler(c._header,"blur.navigationbar"+this.widgetID,function(){c.focusedH=false;a.jqx.aria(c._header,"aria-selected",false);if(c._header.className.indexOf("jqx-expander-header-hover")!==-1){c._header.style.zIndex=5}else{c._header.style.zIndex=0}c._headerHelper.removeClass(b.toThemeProperty("jqx-fill-state-focus"))});b.addHandler(c._headerText,"focus.navigationbar"+this.widgetID,function(){c._header.focus()});b.addHandler(c._arrow,"focus.navigationbar"+this.widgetID,function(){c._header.focus()});b.addHandler(c._content,"focus.navigationbar"+this.widgetID,function(){c.focusedC=true;c._contentHelper.addClass(b.toThemeProperty("jqx-fill-state-focus"))});b.addHandler(c._content,"blur.navigationbar"+this.widgetID,function(){c.focusedC=false;c._contentHelper.removeClass(b.toThemeProperty("jqx-fill-state-focus"))})})}})})(jqxBaseFramework);

