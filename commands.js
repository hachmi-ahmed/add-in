!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=389)}({389:function(e,t,n){(function(e){var t,n,o,i=0;function c(e){o.completed({allowEvent:!1})}function u(e){n.close();var t=e.message;"valid"===t&&o.completed({allowEvent:!0}),"cancel"===t&&o.completed({allowEvent:!1})}function f(e){for(var t=0;t<e.value.length;t++)i+=1}Office.initialize=function(){$(document).ready((function(){}))},Office.onReady((function(){t=Office.context.mailbox.item,function(){var e,n,o;t.itemType==Office.MailboxEnums.ItemType.Appointment?(e=t.requiredAttendees,n=t.optionalAttendees):(e=t.to,n=t.cc,o=t.bcc);e.getAsync((function(e){e.status==Office.AsyncResultStatus.Failed||f(e)})),n.getAsync((function(e){e.status==Office.AsyncResultStatus.Failed||f(e)})),o&&o.getAsync((function(e){e.status==Office.AsyncResultStatus.Failed||f(e)}))}()})),("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:void 0).onSendEvent=function(e){o=e,i>=0?Office.context.ui.displayDialogAsync("https://raw.githubusercontent.com/hachmi-ahmed/add-in/main/taskpane.html",{height:40,width:30,displayInIframe: true},(function(e){(n=e.value).addEventHandler(Office.EventType.DialogMessageReceived,u),n.addEventHandler(Office.EventType.DialogEventReceived,c)})):o.completed({allowEvent:!0})}}).call(this,n(84))},84:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}});
//# sourceMappingURL=commands.js.map
