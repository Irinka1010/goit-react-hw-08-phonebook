"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[759],{7759:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var a=n(5984),r="ContactForm_button__eSwX9",i=n(2791),o=n(158),s=n(184),c={name:"",number:""};function u(e){var t=e.onSubmit,n=(0,o.Z)({initialState:c,onSubmit:t}),u=n.state,d=n.handleChange,l=n.handleSubmit,m=(0,i.useMemo)((function(){return(0,a.x0)()}),[]),h=(0,i.useMemo)((function(){return(0,a.x0)()}),[]),x=u.name,f=u.number;return(0,s.jsxs)("form",{onSubmit:l,children:[(0,s.jsx)("label",{htmlFor:m,children:"Name"}),(0,s.jsx)("input",{id:m,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Name",value:x,onChange:d}),(0,s.jsx)("label",{htmlFor:h,children:"Number"}),(0,s.jsx)("input",{id:h,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Phone",value:f,onChange:d}),(0,s.jsx)("button",{className:r,type:"submit",children:"Add contact"})]})}var d="ContactsList_list__mmE3Y",l="ContactsList_item__6gc1x",m="ContactsList_marker__vknt1",h="ContactsList_button__EDc5e";function x(e){var t=e.items,n=e.removeContact,a=t.map((function(e){var t=e.name,a=e.number,r=e.id;return(0,s.jsxs)("li",{className:l,children:[(0,s.jsx)("span",{className:m}),(0,s.jsx)("p",{children:"".concat(t," : ").concat(a)}),(0,s.jsx)("button",{className:h,type:"button",onClick:function(){n(r)},children:"Delete"})]},r)}));return(0,s.jsx)("ol",{className:d,children:a})}var f="Filter_filter__vxThR";function p(e){var t=e.onChange,n=e.value,r=(0,a.x0)();return(0,s.jsxs)("div",{className:f,children:[(0,s.jsx)("label",{htmlFor:r,children:"Find contacts by name"}),(0,s.jsx)("input",{id:r,type:"text",name:"filter",value:n,onChange:t})]})}var v="Phonebook_formContact__GGDdR",b="Phonebook_contacts__FMhKp",g="Phonebook_title__ipARL",Z=n(9434),C=function(e){return e.filter},_=function(e){var t=e.contacts;return{loading:t.loading,error:t.error}},j=function(e){var t=e.filter,n=e.contacts;if(!t)return n.items;var a=t.toLocaleLowerCase();return n.items.filter((function(e){var t=e.name,n=e.number,r=t.toLocaleLowerCase(),i=n.toLocaleLowerCase();return r.includes(a)||i.includes(a)}))},k=n(9741),S=n(96);function w(){var e=(0,Z.v9)(j),t=(0,Z.v9)(C),n=(0,Z.v9)(_),a=n.loading,r=n.error,o=(0,Z.I0)();(0,i.useEffect)((function(){o((0,k.yF)())}),[o]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:v,children:[(0,s.jsx)("h2",{className:g,children:"Phonebook"}),(0,s.jsx)(u,{onSubmit:function(e){var t=(0,k.uK)(e);o(t)}})]}),(0,s.jsxs)("div",{className:b,children:[(0,s.jsx)("h2",{className:g,children:"Contacts"}),(0,s.jsx)(p,{onChange:function(e){var t=e.target.value;o((0,S.T)(t))},value:t}),e.length>0&&(0,s.jsx)(x,{items:e,removeContact:function(e){var t=(0,k.zY)(e);o(t)}}),a&&(0,s.jsx)("p",{children:"...loading"}),r&&(0,s.jsx)("p",{children:"oops, something went wrong"})]})]})}var N=n(803);function W(){return(0,s.jsxs)(N.Z,{sx:{mt:"1rem"},children:[(0,s.jsx)("h1",{children:"RegisterPege"}),(0,s.jsx)(w,{})]})}},158:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(4942),r=n(1413),i=n(885),o=n(2791);function s(e){var t=e.initialState,n=e.onSubmit,s=(0,o.useState)((0,r.Z)({},t)),c=(0,i.Z)(s,2),u=c[0],d=c[1];return{state:u,setState:d,handleChange:function(e){var t=e.target,n=t.value,i=t.name,o=t.type,s=t.checked,c="checkbox"===o?s:n;d((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},i,c))}))},handleSubmit:function(e){e.preventDefault(),n((0,r.Z)({},u)),d((0,r.Z)({},t))}}}},803:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(4942),r=n(916),i=n(4695),o=n(2791),s=n(8182),c=n(7312),u=n(1217),d=n(4419),l=n(7078),m=(0,n(4046).ZP)(),h=n(5080),x=n(184),f=["className","component","disableGutters","fixed","maxWidth","classes"],p=(0,h.Z)(),v=m("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,c.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),b=function(e){return(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:p})},g=function(e,t){var n=e.classes,a=e.fixed,r=e.disableGutters,i=e.maxWidth,o={root:["root",i&&"maxWidth".concat((0,c.Z)(String(i))),a&&"fixed",r&&"disableGutters"]};return(0,d.Z)(o,(function(e){return(0,u.Z)(t,e)}),n)};var Z=n(9853),C=n(277),_=n(5513),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?v:t,c=e.useThemeProps,u=void 0===c?b:c,d=e.componentName,l=void 0===d?"MuiContainer":d,m=n((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,a.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var a=n,r=t.breakpoints.values[a];return 0!==r&&(e[t.breakpoints.up(a)]={maxWidth:"".concat(r).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({},"xs"===n.maxWidth&&(0,a.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,a.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),h=o.forwardRef((function(e,t){var n=u(e),a=n.className,o=n.component,c=void 0===o?"div":o,d=n.disableGutters,h=void 0!==d&&d,p=n.fixed,v=void 0!==p&&p,b=n.maxWidth,Z=void 0===b?"lg":b,C=(0,r.Z)(n,f),_=(0,i.Z)({},n,{component:c,disableGutters:h,fixed:v,maxWidth:Z}),j=g(_,l);return(0,x.jsx)(m,(0,i.Z)({as:c,ownerState:_,className:(0,s.Z)(j.root,a),ref:t},C))}));return h}({createStyledComponent:(0,C.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,Z.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,_.Z)({props:e,name:"MuiContainer"})}}),k=j}}]);
//# sourceMappingURL=759.a28b6dff.chunk.js.map