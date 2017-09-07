webpackJsonp(["app/js/settings/security-questions/index"],{0:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var a=n("f9ff574815af2ac7731d"),i=s(a);new i.default({element:"#settings-security-questions-form",saveBtn:"#password-save-btn"})},f9ff574815af2ac7731d:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),r=n("b334fd7e4c5a19234db2"),o=s(r),l=function(){function e(t){a(this,e),this.element=t.element,this.saveBtn=t.saveBtn,this.$q1=$("[name=question-1]"),this.$q2=$("[name=question-2]"),this.$q3=$("[name=question-3]"),this.init()}return i(e,[{key:"init",value:function(){this.validator(),this.initEvent()}},{key:"initEvent",value:function(){var e=($(this.element),this);$("option[value=parents]").css("display","none"),$("option[value=teacher]").css("display","none"),$("option[value=lover]").css("display","none"),this.$q1.on("change",function(t){var n=$(this);e.reflesh_option_display(n)}),this.$q2.on("change",function(t){var n=$(this);e.reflesh_option_display(n)}),this.$q3.on("change",function(t){var n=$(this);e.reflesh_option_display(n)})}},{key:"validator",value:function(){var e=this.saveBtn;$(this.element).validate({currentDom:e,ajax:!0,rules:{"answer-1":{required:!0,maxlength:20},"answer-2":{required:!0,maxlength:20},"answer-3":{required:!0,maxlength:20},userLoginPassword:"required"},submitSuccess:function(e){(0,o.default)("success",Translator.trans(e.message)),$(".modal").modal("hide"),window.location.reload()},submitError:function(e){(0,o.default)("danger",Translator.trans(e.responseJSON.message))}})}},{key:"reflesh_option_display",value:function(e){this.$q1.val()===this.$q2.val()||this.$q3.val()===this.$q2.val()||this.$q1.val()===this.$q3.val()?((0,o.default)("danger",Translator.trans("user.settings.security.security_questions.type_duplicate_hint")),this.$q1.val("parents"),this.$q2.val("teacher"),this.$q3.val("lover")):$("option[value="+e.val()+"]").css("display","none");var t=["parents","teacher","lover","schoolName","firstTeacher","hobby","notSelected"];for(var n in t)t[n]!==this.$q1.val()&&t[n]!==this.$q2.val()&&t[n]!==this.$q3.val()&&$("option[value="+t[n]+"]").css("display","block")}}]),e}();t.default=l}});