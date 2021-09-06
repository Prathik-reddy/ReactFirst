(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(4),s=a.n(r),o=a(2),l=(a(9),a(0));function i(e){return Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(l.jsx)("li",{className:"nav-item active",children:Object(l.jsx)("a",{className:"nav-link",href:"#",children:"Home"})})})}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})}function d(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(l.jsx)("h1",{children:e.heading}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{className:"form-control",value:c,style:{backgroundColor:"light"===e.mode?"white":"grey",color:"dark"===e.mode?"white":"black"},onChange:function(e){r(e.target.value)},id:"myBox",rows:"8"})}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=c.toUpperCase();r(t),e.showAlert("Converted to UpperCase","success")},children:"Convert to Uppercase"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=c.toLowerCase();r(t),e.showAlert("Converted to LowerCase","success")},children:"Convert to Lowercase"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){r(""),e.showAlert("Cleared text","danger")},children:"Clear Text"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text Copied","success")},children:"Copy Text"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=c.split(/[ ]+/);r(t.join(" ")),e.showAlert("Removed Extra Space","warning")},children:"Remove Extra Spc"})]}),Object(l.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(l.jsx)("h2",{children:"Your text summary"}),Object(l.jsxs)("p",{children:[c.split(" ").length," words and ",c.length," characters"]}),Object(l.jsxs)("p",{children:[.008*c.split(" ").length," Minutes read"]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsx)("p",{children:c.length>0?c:"Enter something in the textbox above to preview it here..."})]})]})}function b(e){return e.alert&&Object(l.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})}i.defaultProps={title:"Set title here",About:"Set aboutText here"};var h=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),s=Object(o.a)(r,2),h=s[0],j=s[1],m=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),2e3)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{title:"TextUtils",About:"AboutUs",mode:a,toggleMode:function(){"dark"===a?(c("light"),document.body.style.backgroundColor="white",m("Light mode enabled","success"),document.title="TextUtils : Light mode "):(c("dark"),document.body.style.backgroundColor="#11033d",m("Dark mode enabled","success"),document.title="TextUtils : Dark mode ")}}),Object(l.jsx)(b,{alert:h}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsx)(d,{showAlert:m,heading:"Enter the text to analyze below",mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.bcbcf6d6.chunk.js.map