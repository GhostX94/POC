function initSparkline(){$(".sparkline").each(function(){var a=$(this);a.sparkline("html",a.data())})}function initCounters(){$(".count-to").countTo()}function skinChanger(){$(".right-sidebar .choose-skin li").on("click",function(){var a=$("body"),b=$(this),c=$(".right-sidebar .choose-skin li.active").data("theme");$(".right-sidebar .choose-skin li").removeClass("active"),a.removeClass("theme-"+c),b.addClass("active"),a.addClass("theme-"+b.data("theme"))})}function CustomScrollbar(){$(".sidebar .menu .list").slimscroll({height:"calc(100vh - 20px)",color:"rgba(0,0,0,0.1)",position:"left",size:"2px",alwaysVisible:!1,borderRadius:"3px",railBorderRadius:"0"}),$(".right_menu .slim_scroll").slimscroll({height:"calc(100vh - 30px)",color:"rgba(0,0,0,0.1)",position:"right",size:"2px",alwaysVisible:!1,borderRadius:"3px",railBorderRadius:"0"}),$(".cwidget-scroll").slimscroll({height:"306px",color:"rgba(0,0,0,0.4)",size:"2px",alwaysVisible:!1,borderRadius:"3px",railBorderRadius:"2px"}),$(".right-sidebar .slim_scroll").slimscroll({height:"calc(100vh - 100px)",color:"rgba(0,0,0,0.4)",size:"2px",alwaysVisible:!1,borderRadius:"3px",railBorderRadius:"0"})}function CustomPageJS(){$(".boxs-close").on("click",function(){$(this).parents(".card").addClass("closed").fadeOut()}),$(".theme-light-dark .t-dark").on("click",function(){$("body").toggleClass("menu_dark")}),$(".js-right-sidebar").on("click",function(){$(".right_menu #rightsidebar").toggleClass("open stretchRight").siblings().removeClass("open stretchRight"),$(".right_menu #rightsidebar").hasClass("open")?$(".overlay").fadeIn():$(".overlay").fadeOut()}),$(".overlay").on("click",function(){$(".open.stretchRight").removeClass("open stretchRight"),$(this).fadeOut()}),$(".btn_overlay").on("click",function(){$(".overlay_menu").fadeToggle(200),$(this).toggleClass("btn-open").toggleClass("btn-close")}),$(".overlay_menu .btn").on("click",function(){$(".overlay_menu").fadeToggle(200),$(".overlay_menu button.btn").toggleClass("btn-open").toggleClass("btn-close"),open=!1}),$(".form-control").on("focus",function(){$(this).parent(".input-group").addClass("input-group-focus")}).on("blur",function(){$(this).parent(".input-group").removeClass("input-group-focus")})}if("undefined"==typeof jQuery)throw new Error("jQuery plugins need to be before this file");$(function(){"use strict";$.AdminAlpino.browser.activate(),$.AdminAlpino.select.activate(),setTimeout(function(){$(".page-loader-wrapper").fadeOut()},50)}),$.AdminAlpino={},$.AdminAlpino.options={colors:{red:"#ec3b57",pink:"#E91E63",purple:"#ba3bd0",deepPurple:"#673AB7",indigo:"#3F51B5",blue:"#2196f3",lightBlue:"#03A9F4",cyan:"#00bcd4",green:"#4CAF50",lightGreen:"#8BC34A",yellow:"#ffe821",orange:"#FF9800",deepOrange:"#f83600",grey:"#9E9E9E",blueGrey:"#607D8B",black:"#000000",blush:"#dd5e89",white:"#ffffff"},leftSideBar:{scrollColor:"rgba(0,0,0,0.5)",scrollWidth:"4px",scrollAlwaysVisible:!1,scrollBorderRadius:"0",scrollRailBorderRadius:"0"}},$.AdminAlpino.select={activate:function(){$.fn.selectpicker&&$("select:not(.ms)").selectpicker()}};var edge="Microsoft Edge",ie10="Internet Explorer 10",ie11="Internet Explorer 11",opera="Opera",firefox="Mozilla Firefox",chrome="Google Chrome",safari="Safari";$.AdminAlpino.browser={activate:function(){var a=this;""!==a.getClassName()&&$("html").addClass(a.getClassName())},getBrowser:function(){var a=navigator.userAgent.toLowerCase();return/edge/i.test(a)?edge:/rv:11/i.test(a)?ie11:/msie 10/i.test(a)?ie10:/opr/i.test(a)?opera:/chrome/i.test(a)?chrome:/firefox/i.test(a)?firefox:navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)?safari:void 0},getClassName:function(){var a=this.getBrowser();return a===edge?"edge":a===ie11?"ie11":a===ie10?"ie10":a===opera?"opera":a===chrome?"chrome":a===firefox?"firefox":a===safari?"safari":""}},$(function(){"use strict";skinChanger(),CustomScrollbar(),initSparkline(),initCounters(),CustomPageJS()}),$(document).ready(function(){$(".h-menu  > li").hover(function(a){$(window).width()>943&&($(this).children("ul").stop(!0,!1).fadeToggle(150),a.preventDefault())}),$(".h-menu  > li").on("click",function(){$(window).width()<=943&&$(this).children("ul").fadeToggle(150)}),$(".h-bars").on("click",function(a){$(".h-menu").toggleClass("show-on-mobile"),a.preventDefault()})}),$(function(){"use strict";function a(){var a=screenfull.element;$("#status").text("Is fullscreen: "+screenfull.isFullscreen),a&&$("#element").text("Element: "+a.localName+(a.id?"#"+a.id:"")),screenfull.isFullscreen||($("#external-iframe").remove(),document.body.style.overflow="auto")}if($("#supported").text("Supported/allowed: "+!!screenfull.enabled),!screenfull.enabled)return!1;$("#request").on("click",function(){screenfull.request($("#container")[0])}),$("#exit").on("click",function(){screenfull.exit()}),$('[data-provide~="boxfull"]').on("click",function(){screenfull.toggle($(".box")[0])}),$('[data-provide~="fullscreen"]').on("click",function(){screenfull.toggle($("#container")[0])});var b='[data-provide~="boxfull"]',b='[data-provide~="fullscreen"]';$(b).each(function(){$(this).data("fullscreen-default-html",$(this).html())}),document.addEventListener(screenfull.raw.fullscreenchange,function(){screenfull.isFullscreen?$(b).each(function(){$(this).addClass("is-fullscreen")}):$(b).each(function(){$(this).removeClass("is-fullscreen")})}),screenfull.on("change",a),a()});