(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{18:function(e,t,n){e.exports={enter:"PhonebookList_enter__1qdy3",enterActive:"PhonebookList_enterActive__4Txqp",exit:"PhonebookList_exit__3On2U",exitActive:"PhonebookList_exitActive__3vB50"}},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),o=n(9),i=n.n(o),s=(n(26),n(27),n(13)),u=n.n(s),l=n(15),d=n(14),h=n(3),b=n(4),j=n(8),m=n(7),f=n(56);n(29);var p=function(e){var t=e.title,n=e.children;return Object(a.jsxs)("section",{className:"section",children:[t&&Object(a.jsx)("h2",{children:t}),n]})},v=n(55),O=(n(30),function(e){var t=e.nodeRef;return Object(a.jsx)("h1",{className:"logo",ref:t,children:"Phonebook"})}),x=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={nodeRef:e.props.nodeRef,errorMessage:e.props.message},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.onView;setTimeout((function(){return e("",!1)}),2e3)}},{key:"render",value:function(){var e=this.state,t=e.nodeRef,n=e.errorMessage;return Object(a.jsx)("div",{className:"alert",ref:t,children:n})}}]),n}(r.Component),g=(n(31),function(e){var t=e.message,n=e.onView,r=e.isShow,o=c.a.useRef(null);return Object(a.jsxs)("header",{className:"AppBar-wrapper",children:[Object(a.jsx)(v.a,{nodeRef:o,in:!0,appear:!0,classNames:"AppBar-logo",timeout:500,unmountOnExit:!0,children:Object(a.jsx)(O,{nodeRef:o})}),Object(a.jsx)(v.a,{nodeRef:o,in:r,classNames:"AppBar-notification",timeout:250,unmountOnExit:!0,children:Object(a.jsx)(x,{onView:n,message:t,nodeRef:o})})]})}),w=n(16),y=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(w.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;(0,e.props.onAddContact)(a,r),e.setState({name:"",number:""})},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:["Name",Object(a.jsx)("input",{className:"input",type:"text",name:"name",value:t,onChange:this.handleChange})]}),Object(a.jsxs)("label",{children:["Number",Object(a.jsx)("input",{className:"input",type:"text",name:"number",value:n,onChange:this.handleChange})]}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"btn",type:"submit",disabled:!t&&!n,children:"Add contact"})]})}}]),n}(r.Component),N=function(e){var t=e.value,n=e.onFilterChange;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Find contacts by name"}),Object(a.jsx)("input",{className:"input",type:"text",value:t,onChange:function(e){return n(e.target.value)}})]})},C=n(17),S=n.n(C),k=(n(52),function(e){var t=e.type,n=void 0===t?"ThreeDots":t,r=e.color,c=void 0===r?"#000":r,o=e.className,i=void 0===o?"loader":o;return Object(a.jsx)(S.a,{visible:"true",type:n,color:c,height:50,width:50,className:i})}),A=n(57),D=function(e){var t=e.name,n=e.number,r=e.id,c=e.onDelete;return Object(a.jsxs)("li",{className:"list-item",children:["".concat(t,": "),Object(a.jsx)("span",{children:n}),Object(a.jsx)("button",{type:"button",id:r,onClick:function(e){return c(e.target.id)},children:"Delete"})]})},_=n(18),L=n.n(_),R=function(e){var t=e.contacts,n=e.onDelete;return Object(a.jsx)(A.a,{component:"ul",className:"list",children:t.map((function(e){var t=e.name,r=e.id,c=e.number;return Object(a.jsx)(v.a,{timeout:250,classNames:L.a,children:Object(a.jsx)(D,{name:t,number:c,id:r,onDelete:n})},r)}))})},M=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],isLoading:!1,filter:"",isShow:!1,errorMessage:""},e.handleAddContact=function(t,n){if(!t)return e.showNotification("Please enter contact name",!0);if(!n)return e.showNotification("Please enter contact number",!0);var a={id:Object(f.a)(),name:t,number:n};e.state.contacts.some((function(e){return e.name===t}))?e.showNotification("".concat(t," is already in contacts"),!0):e.setState((function(e){return{contacts:[a].concat(Object(d.a)(e.contacts))}}))},e.showNotification=function(t,n){e.setState({errorMessage:t,isShow:n})},e.handleFilter=function(t){e.setState({filter:t})},e.getFilteredContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e.handleDeleteContact=function(t){var n=e.state.contacts;e.setState({contacts:Object(d.a)(n.filter((function(e){return e.id!==t})))})},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,localStorage.getItem("contacts");case 3:return t=e.sent,e.next=6,JSON.parse(t);case 6:if(!(n=e.sent)){e.next=10;break}return e.next=10,this.setState({contacts:n});case 10:this.setState({isLoading:!1});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){var t=this.state.contacts;t!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(t))}},{key:"render",value:function(){var e=this.state,t=e.isShow,n=e.errorMessage,r=e.contacts,c=e.filter,o=e.isLoading,i=this.getFilteredContacts();return Object(a.jsxs)(p,{children:[Object(a.jsx)(g,{isShow:t,onView:this.showNotification,message:n}),Object(a.jsx)(y,{onAddContact:this.handleAddContact}),r.length>1&&Object(a.jsx)(N,{value:c,onFilterChange:this.handleFilter}),o?Object(a.jsx)(k,{className:"loader"}):i.length>0&&Object(a.jsx)(R,{contacts:i,onDelete:this.handleDeleteContact})]})}}]),n}(r.Component);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.querySelector("#root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.c4a11562.chunk.js.map