(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{26:function(e,t,n){e.exports={enter:"PhonebookList_enter__1qdy3",enterActive:"PhonebookList_enterActive__4Txqp",exit:"PhonebookList_exit__3On2U",exitActive:"PhonebookList_exitActive__3vB50"}},35:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c,r=n(1),a=n(0),o=n.n(a),i=n(8),s=n.n(i),u=(n(34),n(35),n(15)),l=n(7),b=n(24),j=n.n(b),d=n(6),h=n(3),m="counter/Increment",O="counter/Decrement",f=Object(h.c)({value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case m:return e+c;case O:return e-c;default:return e}},step:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return e}}),p=n(11),x=n(69),v={addContact:Object(d.b)("contact/Add",(function(e,t){return{payload:{id:Object(x.a)(),name:e,number:t}}})),deleteContact:Object(d.b)("contact/Delete"),filterContacts:Object(d.b)("contact/ChangeFilter")},g=Object(d.c)([],(c={},Object(p.a)(c,v.addContact,(function(e,t){return[t.payload].concat(Object(u.a)(e))})),Object(p.a)(c,v.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),c)),C=Object(d.c)("",Object(p.a)({},v.filterContacts,(function(e,t){return t.payload}))),y=Object(h.c)({items:g,filter:C}),N={key:"contacts",storage:j.a,blacklist:["filter"]},w=Object(u.a)(Object(d.d)({serializableCheck:{ignoredActions:[l.a,l.f,l.b,l.c,l.d,l.e]}})),k=Object(h.c)({contacts:Object(l.g)(N,y),counter:f}),A=Object(d.a)({reducer:k,devTools:!1,middleware:w}),_={store:A,persistor:Object(l.h)(A)},D=n(9),S=n(25);n(43);var M=function(e){var t=e.title,n=e.children;return Object(r.jsxs)("section",{className:"section",children:[t&&Object(r.jsx)("h2",{children:t}),n]})},P=n(68),F=(n(44),function(){return Object(r.jsx)("h1",{className:"logo",children:"Phonebook"})}),L=(n(45),function(){return Object(r.jsx)("header",{className:"AppBar-wrapper",children:Object(r.jsx)(P.a,{in:!0,appear:!0,classNames:"AppBar-logo",timeout:500,unmountOnExit:!0,children:Object(r.jsx)(F,{})})})}),T=n(13),q=n(14),B=n(17),E=n(16),J=function(e){Object(B.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(T.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={errorMessage:e.props.message},e}return Object(q.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.onView;setTimeout((function(){return e("",!1)}),2e3)}},{key:"render",value:function(){var e=this.state.errorMessage;return Object(r.jsx)("div",{className:"alert",children:e})}}]),n}(a.Component),V=(n(46),function(e){Object(B.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(T.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:"",errorMessage:""},e.handleChange=function(t){var n=t.target,c=n.name,r=n.value;e.setState(Object(p.a)({},c,r))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,c=n.name,r=n.number,a=e.props,o=a.onAddContact,i=a.items;return c?r?i.some((function(e){return e.name===c}))?(e.setState({name:"",number:""}),e.showNotification("".concat(c," is already in contacts"))):(o(c,r),void e.setState({name:"",number:""})):e.showNotification("Please enter contact number"):e.showNotification("Please enter contact name")},e.showNotification=function(t){e.setState({errorMessage:t})},e}return Object(q.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,c=e.errorMessage,a=!!c;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"Notification-wrapper",children:Object(r.jsx)(P.a,{in:a,classNames:"Notification",timeout:250,unmountOnExit:!0,children:Object(r.jsx)(J,{onView:this.showNotification,message:c})})}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(r.jsxs)("label",{children:["Name",Object(r.jsx)("input",{className:"input",type:"text",name:"name",value:t,onChange:this.handleChange})]}),Object(r.jsxs)("label",{children:["Number",Object(r.jsx)("input",{className:"input",type:"text",name:"number",value:n,onChange:this.handleChange})]}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{className:"btn",type:"submit",disabled:!t&&!n||c,children:"Add contact"})]})]})}}]),n}(a.Component)),z=Object(D.b)((function(e){return e.contacts}),(function(e){return{onAddContact:function(t,n){return e(v.addContact(t,n))}}}))(V),I=n(70),U=Object(D.b)(null,(function(e){return{onFilterChange:function(t){return e(v.filterContacts(t.target.value))}}}))((function(e){var t=e.onFilterChange;return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Find contacts by name"}),Object(r.jsx)("input",{className:"input",type:"text",onChange:t})]})})),G=function(e){var t=e.name,n=e.number,c=e.id,a=e.onDelete;return Object(r.jsxs)("li",{className:"list-item",children:["".concat(t,": "),Object(r.jsx)("span",{children:n}),Object(r.jsx)("button",{type:"button",id:c,onClick:function(e){return a(e.target.id)},children:"Delete"})]})},H=n(26),K=n.n(H),Q=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},R=Object(D.b)((function(e){var t=e.contacts,n=t.items,c=t.filter;return{contacts:Q(n,c),filter:c}}),(function(e){return{onDelete:function(t){return e(v.deleteContact(t))}}}))((function(e){var t=e.contacts,n=e.filter,c=e.onDelete;return Object(r.jsxs)(r.Fragment,{children:[(t.length>1||n)&&Object(r.jsx)(U,{}),Object(r.jsx)(I.a,{component:"ul",className:"list",children:t.map((function(e){var t=e.name,n=e.id,a=e.number;return Object(r.jsx)(P.a,{timeout:250,classNames:K.a,children:Object(r.jsx)(G,{name:t,number:a,id:n,onDelete:c})},n)}))})]})})),W=function(){return Object(r.jsxs)(M,{children:[Object(r.jsx)(L,{}),Object(r.jsx)(z,{}),Object(r.jsx)(R,{})]})},X=n(27),Y=n.n(X),Z=(n(65),function(e){var t=e.type,n=void 0===t?"ThreeDots":t,c=e.color,a=void 0===c?"#000":c,o=e.className,i=void 0===o?"loader":o;return Object(r.jsx)(Y.a,{visible:"true",type:n,color:a,height:50,width:50,className:i})});s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(D.a,{store:_.store,children:Object(r.jsx)(S.a,{loading:Object(r.jsx)(Z,{}),persistor:_.persistor,children:Object(r.jsx)(W,{})})})}),document.querySelector("#root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.24ba217c.chunk.js.map