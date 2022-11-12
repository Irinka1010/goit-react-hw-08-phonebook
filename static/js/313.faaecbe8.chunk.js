(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[313],{3313:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return pn}});var r,a=t(5984),o=t(2791),i=t(158),c=t(168),u=t(2430),s=u.Z.input(r||(r=(0,c.Z)(["\n  border-radius: 10px;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  margin-bottom: 90px;\n\n  margin-left: 15px;\n  &:hover,\n  &:focus {\n    border-color: blue;\n  }\n"]))),l=t(7205),d=t(9952),p=t(4162),m=t(184),f={name:"",number:""};function v(n){var e=n.onSubmit,t=(0,i.Z)({initialState:f,onSubmit:e}),r=t.state,c=t.handleChange,u=t.handleSubmit,v=(0,o.useMemo)((function(){return(0,a.x0)()}),[]),x=(0,o.useMemo)((function(){return(0,a.x0)()}),[]),h=r.name,g=r.number;return(0,m.jsxs)("form",{onSubmit:u,children:[(0,m.jsx)(d.Z,{sx:{color:"action.active",mr:1,my:.5}}),(0,m.jsx)(s,{id:v,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Name",value:h,onChange:c}),(0,m.jsx)(s,{id:x,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Phone",value:g,onChange:c}),(0,m.jsx)(p.Z,{direction:"row",spacing:2,children:(0,m.jsx)(l.Z,{variant:"contained",sx:{backgroundColor:"#778089"},type:"submit",children:"Add contact"})})]})}var x=t(5629),h=t(1048),g=t(2793),b=t(8182),Z=t(4419),w=t(8826),S=t(277),k=t(5513),j=t(5878),C=t(1217);function y(n){return(0,C.Z)("MuiListItemAvatar",n)}(0,j.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var M,W,N,z=["className"],I=(0,S.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,"flex-start"===t.alignItems&&e.alignItemsFlexStart]}})((function(n){var e=n.ownerState;return(0,g.Z)({minWidth:56,flexShrink:0},"flex-start"===e.alignItems&&{marginTop:8})})),P=o.forwardRef((function(n,e){var t=(0,k.Z)({props:n,name:"MuiListItemAvatar"}),r=t.className,a=(0,h.Z)(t,z),i=o.useContext(w.Z),c=(0,g.Z)({},t,{alignItems:i.alignItems}),u=function(n){var e=n.alignItems,t=n.classes,r={root:["root","flex-start"===e&&"alignItemsFlexStart"]};return(0,Z.Z)(r,y,t)}(c);return(0,m.jsx)(I,(0,g.Z)({className:(0,b.Z)(u.root,r),ownerState:c,ref:e},a))})),L=t(3811),_=t(7247),A=t(4565);function F(n){var e=n.items,t=n.removeContact,r=e.map((function(n){var e=n.name,r=n.number,a=n.id;return(0,m.jsxs)(P,{sx:{display:"flex",alignItems:"baseline",textAlign:"center"},children:[(0,m.jsx)(A.Z,{variant:"h6",component:"p",sx:{fontWeight:400},children:"".concat(e," : ").concat(r)}),(0,m.jsx)(L.Z,{edge:"end","aria-label":"delete",type:"button",onClick:function(){t(a)},children:(0,m.jsx)(_.Z,{})})]},a)}));return(0,m.jsx)(x.Z,{children:r})}var E=u.Z.div(M||(M=(0,c.Z)(["\n  /* text-align: center; */\n"]))),G=u.Z.label(W||(W=(0,c.Z)(["\n  font-weight: 400;\n"]))),R=u.Z.input(N||(N=(0,c.Z)(["\n  border-radius: 10px;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  margin-bottom: 60px;\n  width: 100%;\n\n  &:hover,\n  &:focus {\n    border-color: blue;\n  }\n"])));function T(n){var e=n.onChange,t=n.value,r=(0,a.x0)();return(0,m.jsxs)(E,{children:[(0,m.jsx)(G,{htmlFor:r,children:"Find contacts by name"}),(0,m.jsx)(R,{id:r,type:"text",name:"filter",value:t,onChange:e})]})}var O=t(2982),B=t(4942),$=t(1184),D=t(8519),q=t(4142);var V=o.createContext();function H(n){return(0,C.Z)("MuiGrid",n)}var Y=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],J=(0,j.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,O.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,O.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,O.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,O.Z)(Y.map((function(n){return"grid-xs-".concat(n)}))),(0,O.Z)(Y.map((function(n){return"grid-sm-".concat(n)}))),(0,O.Z)(Y.map((function(n){return"grid-md-".concat(n)}))),(0,O.Z)(Y.map((function(n){return"grid-lg-".concat(n)}))),(0,O.Z)(Y.map((function(n){return"grid-xl-".concat(n)}))))),K=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function U(n){var e=parseFloat(n);return"".concat(e).concat(String(n).replace(String(e),"")||"px")}function Q(n){var e=n.breakpoints,t=n.values,r="";Object.keys(t).forEach((function(n){""===r&&0!==t[n]&&(r=n)}));var a=Object.keys(e).sort((function(n,t){return e[n]-e[t]}));return a.slice(0,a.indexOf(r))}var X=(0,S.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState,r=t.container,a=t.direction,o=t.item,i=t.spacing,c=t.wrap,u=t.zeroMinWidth,s=t.breakpoints,l=[];r&&(l=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[t["spacing-xs-".concat(String(n))]];var r=[];return e.forEach((function(e){var a=n[e];Number(a)>0&&r.push(t["spacing-".concat(e,"-").concat(String(a))])})),r}(i,s,e));var d=[];return s.forEach((function(n){var r=t[n];r&&d.push(e["grid-".concat(n,"-").concat(String(r))])})),[e.root,r&&e.container,o&&e.item,u&&e.zeroMinWidth].concat((0,O.Z)(l),["row"!==a&&e["direction-xs-".concat(String(a))],"wrap"!==c&&e["wrap-xs-".concat(String(c))]],d)}})((function(n){var e=n.ownerState;return(0,g.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})}),(function(n){var e=n.theme,t=n.ownerState,r=(0,$.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,$.k9)({theme:e},r,(function(n){var e={flexDirection:n};return 0===n.indexOf("column")&&(e["& > .".concat(J.item)]={maxWidth:"none"}),e}))}),(function(n){var e=n.theme,t=n.ownerState,r=t.container,a=t.rowSpacing,o={};if(r&&0!==a){var i,c=(0,$.P$)({values:a,breakpoints:e.breakpoints.values});"object"===typeof c&&(i=Q({breakpoints:e.breakpoints.values,values:c})),o=(0,$.k9)({theme:e},c,(function(n,t){var r,a=e.spacing(n);return"0px"!==a?(0,B.Z)({marginTop:"-".concat(U(a))},"& > .".concat(J.item),{paddingTop:U(a)}):null!=(r=i)&&r.includes(t)?{}:(0,B.Z)({marginTop:0},"& > .".concat(J.item),{paddingTop:0})}))}return o}),(function(n){var e=n.theme,t=n.ownerState,r=t.container,a=t.columnSpacing,o={};if(r&&0!==a){var i,c=(0,$.P$)({values:a,breakpoints:e.breakpoints.values});"object"===typeof c&&(i=Q({breakpoints:e.breakpoints.values,values:c})),o=(0,$.k9)({theme:e},c,(function(n,t){var r,a=e.spacing(n);return"0px"!==a?(0,B.Z)({width:"calc(100% + ".concat(U(a),")"),marginLeft:"-".concat(U(a))},"& > .".concat(J.item),{paddingLeft:U(a)}):null!=(r=i)&&r.includes(t)?{}:(0,B.Z)({width:"100%",marginLeft:0},"& > .".concat(J.item),{paddingLeft:0})}))}return o}),(function(n){var e,t=n.theme,r=n.ownerState;return t.breakpoints.keys.reduce((function(n,a){var o={};if(r[a]&&(e=r[a]),!e)return n;if(!0===e)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var i=(0,$.P$)({values:r.columns,breakpoints:t.breakpoints.values}),c="object"===typeof i?i[a]:i;if(void 0===c||null===c)return n;var u="".concat(Math.round(e/c*1e8)/1e6,"%"),s={};if(r.container&&r.item&&0!==r.columnSpacing){var l=t.spacing(r.columnSpacing);if("0px"!==l){var d="calc(".concat(u," + ").concat(U(l),")");s={flexBasis:d,maxWidth:d}}}o=(0,g.Z)({flexBasis:u,flexGrow:0,maxWidth:u},s)}return 0===t.breakpoints.values[a]?Object.assign(n,o):n[t.breakpoints.up(a)]=o,n}),{})}));var nn=function(n){var e=n.classes,t=n.container,r=n.direction,a=n.item,o=n.spacing,i=n.wrap,c=n.zeroMinWidth,u=n.breakpoints,s=[];t&&(s=function(n,e){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var t=[];return e.forEach((function(e){var r=n[e];if(Number(r)>0){var a="spacing-".concat(e,"-").concat(String(r));t.push(a)}})),t}(o,u));var l=[];u.forEach((function(e){var t=n[e];t&&l.push("grid-".concat(e,"-").concat(String(t)))}));var d={root:["root",t&&"container",a&&"item",c&&"zeroMinWidth"].concat((0,O.Z)(s),["row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==i&&"wrap-xs-".concat(String(i))],l)};return(0,Z.Z)(d,H,e)},en=o.forwardRef((function(n,e){var t=(0,k.Z)({props:n,name:"MuiGrid"}),r=(0,q.Z)().breakpoints,a=(0,D.Z)(t),i=a.className,c=a.columns,u=a.columnSpacing,s=a.component,l=void 0===s?"div":s,d=a.container,p=void 0!==d&&d,f=a.direction,v=void 0===f?"row":f,x=a.item,Z=void 0!==x&&x,w=a.rowSpacing,S=a.spacing,j=void 0===S?0:S,C=a.wrap,y=void 0===C?"wrap":C,M=a.zeroMinWidth,W=void 0!==M&&M,N=(0,h.Z)(a,K),z=w||j,I=u||j,P=o.useContext(V),L=p?c||12:P,_={},A=(0,g.Z)({},N);r.keys.forEach((function(n){null!=N[n]&&(_[n]=N[n],delete A[n])}));var F=(0,g.Z)({},a,{columns:L,container:p,direction:v,item:Z,rowSpacing:z,columnSpacing:I,wrap:y,zeroMinWidth:W,spacing:j},_,{breakpoints:r.keys}),E=nn(F);return(0,m.jsx)(V.Provider,{value:L,children:(0,m.jsx)(X,(0,g.Z)({ownerState:F,className:(0,b.Z)(E.root,i),as:l,ref:e},A))})})),tn=en,rn=t(9434),an=function(n){return n.filter},on=function(n){var e=n.contacts;return{loading:e.loading,error:e.error}},cn=function(n){var e=n.filter,t=n.contacts;if(!e)return t.items;var r=e.toLocaleLowerCase();return t.items.filter((function(n){var e=n.name,t=n.number,a=e.toLocaleLowerCase(),o=t.toLocaleLowerCase();return a.includes(r)||o.includes(r)}))},un=t(9741),sn=t(96);function ln(){var n=(0,rn.v9)(cn),e=(0,rn.v9)(an),t=(0,rn.v9)(on),r=t.loading,a=t.error,i=(0,rn.I0)();(0,o.useEffect)((function(){i((0,un.yF)())}),[i]);return(0,m.jsxs)(tn,{container:!0,spacing:2,sx:{p:"60px",mt:"20px",borderColor:"primary.main",borderRadius:"16px",bgcolor:"info.main"},children:[(0,m.jsxs)(tn,{item:!0,xs:!0,children:[(0,m.jsx)(A.Z,{variant:"h4",component:"h2",sx:{mb:"40px",fontWeight:400},children:"Phonebook"}),(0,m.jsx)(v,{onSubmit:function(n){var e=(0,un.uK)(n);i(e)}})]}),(0,m.jsxs)(tn,{item:!0,xs:4,children:[(0,m.jsx)(A.Z,{variant:"h4",component:"h2",sx:{mb:"40px",fontWeight:400},children:"Contacts"}),(0,m.jsx)(T,{onChange:function(n){var e=n.target.value;i((0,sn.T)(e))},value:e}),(0,m.jsx)(A.Z,{variant:"h5",component:"h3",sx:{mb:"10px",fontWeight:400},children:"Phone book project:"}),n.length>0&&(0,m.jsx)(F,{items:n,removeContact:function(n){var e=(0,un.zY)(n);i(e)}}),r&&(0,m.jsx)("p",{children:"...loading"}),a&&(0,m.jsx)("p",{children:"oops, something went wrong"})]})]})}var dn=t(803);function pn(){return(0,m.jsx)(dn.Z,{sx:{mt:"1rem"},children:(0,m.jsx)(ln,{})})}},158:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});var r=t(4942),a=t(1413),o=t(885),i=t(2791);function c(n){var e=n.initialState,t=n.onSubmit,c=(0,i.useState)((0,a.Z)({},e)),u=(0,o.Z)(c,2),s=u[0],l=u[1];return{state:s,setState:l,handleChange:function(n){var e=n.target,t=e.value,o=e.name,i=e.type,c=e.checked,u="checkbox"===i?c:t;l((function(n){return(0,a.Z)((0,a.Z)({},n),{},(0,r.Z)({},o,u))}))},handleSubmit:function(n){n.preventDefault(),t((0,a.Z)({},s)),l((0,a.Z)({},e))}}}},9952:function(n,e,t){"use strict";var r=t(1941);e.Z=void 0;var a=r(t(5649)),o=t(184),i=(0,a.default)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");e.Z=i},7247:function(n,e,t){"use strict";var r=t(1941);e.Z=void 0;var a=r(t(5649)),o=t(184),i=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=i},5649:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(5741)},5741:function(n,e,t){"use strict";t.r(e),t.d(e,{capitalize:function(){return a.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return i.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return u},isMuiElement:function(){return s.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return m},unstable_ClassNameGenerator:function(){return w},unstable_useEnhancedEffect:function(){return f.Z},unstable_useId:function(){return v},unsupportedProp:function(){return x},useControlled:function(){return h.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return b.Z},useIsFocusVisible:function(){return Z.Z}});var r=t(5902),a=t(9853),o=t(8949).Z,i=t(1245),c=t(2977);var u=function(n,e){return function(){return null}},s=t(6258),l=t(5783),d=t(8195);t(1860);var p=function(n,e){return function(){return null}},m=t(2971).Z,f=t(3026),v=t(6248).Z;var x=function(n,e,t,r,a){return null},h=t(4938),g=t(9511),b=t(7933),Z=t(2763),w={configure:function(n){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(n)}}},1941:function(n){n.exports=function(n){return n&&n.__esModule?n:{default:n}},n.exports.__esModule=!0,n.exports.default=n.exports}}]);
//# sourceMappingURL=313.faaecbe8.chunk.js.map