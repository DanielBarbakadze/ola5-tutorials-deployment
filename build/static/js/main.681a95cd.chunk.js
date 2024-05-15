(this["webpackJsonpreact-firebase-database-crud"]=this["webpackJsonpreact-firebase-database-crud"]||[]).push([[0],{27:function(e,t,a){e.exports=a(45)},32:function(e,t,a){},34:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(23),r=a.n(c),u=a(8),i=(a(32),a(11)),o=a(12),s=a(26),m=a(25),d=a(1),b=(a(33),a(34),a(4)),f=a(15),p=a.n(f);a(35);p.a.initializeApp({apiKey:"AIzaSyANUoDR6P4bDV18Bx2BZ81J-_r3Zh_NF5E",authDomain:"ol5-16-firebase.firebaseapp.com",projectId:"ol5-16-firebase",storageBucket:"ol5-16-firebase.appspot.com",messagingSenderId:"797289347829",appId:"1:797289347829:web:72e621b3fd187fef66a3bc",databaseURL:"https://ol5-16-firebase-default-rtdb.europe-west1.firebasedatabase.app/"});var v=p.a.database().ref("/tutorials"),E=new(function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,[{key:"getAll",value:function(){return v}},{key:"create",value:function(e){return v.push(e)}},{key:"update",value:function(e,t){return v.child(e).update(t)}},{key:"delete",value:function(e){return v.child(e).remove()}},{key:"deleteAll",value:function(){return v.remove()}}]),e}()),h=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),u=Object(b.a)(r,2),i=u[0],o=u[1],s=Object(n.useState)(""),m=Object(b.a)(s,2),d=m[0],f=m[1];return l.a.createElement("div",{className:"submit-form"},a?l.a.createElement("div",null,l.a.createElement("h4",null,"You submitted successfully!"),l.a.createElement("button",{className:"btn btn-success",onClick:function(){o(""),f(""),c(!1)}},"Add")):l.a.createElement("div",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",className:"form-control",id:"title",required:!0,value:i,onChange:function(e){return o(e.target.value)},name:"title"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"description"},"Description"),l.a.createElement("input",{type:"text",className:"form-control",id:"description",required:!0,value:d,onChange:function(e){return f(e.target.value)},name:"description"})),l.a.createElement("button",{onClick:function(){var e={title:i,description:d,published:!1};E.create(e).then((function(){return c(!0)})).catch((function(e){return console.log(e)}))},className:"btn btn-success"},"Submit")))},g=function(e){var t=e.tutorial,a=e.refreshList,c=Object(n.useState)(t.title),r=Object(b.a)(c,2),u=r[0],i=r[1],o=Object(n.useState)(t.description),s=Object(b.a)(o,2),m=s[0],d=s[1],f=Object(n.useState)(t.published),p=Object(b.a)(f,2),v=p[0],h=p[1],g=Object(n.useState)(""),N=Object(b.a)(g,2),j=N[0],k=N[1];return Object(n.useEffect)((function(){i(t.title),h(t.published),d(t.description)}),[t]),l.a.createElement("div",null,l.a.createElement("h4",null,"Tutorial"),t?l.a.createElement("div",{className:"edit-form"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",className:"form-control",id:"title",value:u,onChange:function(e){return i(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"description"},"Description"),l.a.createElement("input",{type:"text",className:"form-control",id:"description",value:m,onChange:function(e){return d(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,l.a.createElement("strong",null,"Status: ")),v?"Published":"Pending")),l.a.createElement("button",{className:"badge badge-primary mr-2 btn",onClick:function(){return function(e){var a={published:e};E.update(t.key,a).then((function(){h(e),k("The status was updated successfully!")})).catch((function(e){return console.log(e)}))}(!v)}},v?"UnPublish":"Publish"),l.a.createElement("button",{className:"badge badge-danger mr-2 btn",onClick:function(){E.delete(t.key).then((function(){return a()})).catch((function(e){return console.log(e)}))}},"Delete"),l.a.createElement("button",{type:"submit",className:"badge badge-success btn",onClick:function(){var e={title:u,description:m};E.update(t.key,e).then((function(){return k("The tutorial was updated successfully!")})).catch((function(e){return console.log(e)}))}},"Update"),l.a.createElement("p",null,j)):l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("p",null,"Please click on a Tutorial...")))},N=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),u=Object(b.a)(r,2),i=u[0],o=u[1],s=Object(n.useState)(-1),m=Object(b.a)(s,2),d=m[0],f=m[1],p=function(e){var t=[];e.forEach((function(e){var a=e.key,n=e.val();t.push({key:a,title:n.title,description:n.description,published:n.published})})),c(t)},v=function(){o(null),f(-1)};return Object(n.useEffect)((function(){return E.getAll().on("value",p),function(){E.getAll().off("value",p)}}),[]),l.a.createElement("div",{className:"list row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("h4",null,"Tutorials List"),l.a.createElement("ul",{className:"list-group"},null===a||void 0===a?void 0:a.map((function(e,t){return l.a.createElement("li",{className:"list-group-item "+(t===d?"active":""),onClick:function(){return function(e,t){o(e),f(t)}(e,t)},key:t},e.title)}))),l.a.createElement("button",{className:"m-3 btn btn-sm btn-danger",onClick:function(){E.deleteAll().then((function(){return v()})).catch((function(e){return console.log(e)}))}},"Remove All")),l.a.createElement("div",{className:"col-md-6"},i?l.a.createElement(g,{tutorial:i,refreshList:v}):l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("p",null,"Please click on a Tutorial..."))))},j=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},l.a.createElement(u.b,{to:"/tutorials",className:"navbar-brand"},"olAcademy"),l.a.createElement("div",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/tutorials",className:"nav-link"},"Tutorials")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/add",className:"nav-link"},"Add")))),l.a.createElement("div",{className:"container mt-3"},l.a.createElement("h2",null,"React Firebase Database CRUD"),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:["/","/tutorials"],component:N}),l.a.createElement(d.a,{exact:!0,path:"/add",component:h}))))}}]),a}(n.Component);r.a.render(l.a.createElement(u.a,null,l.a.createElement(j,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.681a95cd.chunk.js.map