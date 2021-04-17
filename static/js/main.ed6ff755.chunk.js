(this["webpackJsonprun-assignment-locally"]=this["webpackJsonprun-assignment-locally"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c(18),n=c.n(s),a=c(2),l=c(0),i=function(){return Object(l.jsx)("div",{className:"jumbotron jumbotron-fluid bg-warning",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"display-4",children:"Community Blog"}),Object(l.jsx)("p",{className:"lead",children:"Check out the posts of our community members."})]})})},o=c(11),j=c(4),b=function(e){var t=e.user,c=void 0===t?{posts:[]}:t;return Object(l.jsx)("article",{className:"col-12 col-md-6 col-xl-3 my-2 align-self-stretch",children:Object(l.jsxs)("div",{className:"border p-4 h-100 d-flex flex-column",children:[Object(l.jsx)("h2",{className:"font-weight-lighter flex-fill",children:Object(l.jsx)(j.b,{to:"/users/"+c.id,children:c.name})}),Object(l.jsxs)(j.b,{to:"/users/".concat(c.id,"/posts"),className:"mt-2",children:[c.posts.length," Posts \xbb"]})]})})},u=c(5),d=c.n(u),h=c(9),p=O((function(e,t){return f.apply(this,arguments)})),m=O((function(e){return N.apply(this,arguments)})),x=O((function(e,t){return v.apply(this,arguments)}));function O(e){return Object(h.a)(d.a.mark((function t(){var c,r,s,n=arguments;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(t.prev=0,c=n.length,r=new Array(c),s=0;s<c;s++)r[s]=n[s];return t.next=4,e.apply(null,r);case 4:return t.abrupt("return",t.sent);case 7:if(t.prev=7,t.t0=t.catch(0),"AbortError"===t.t0.name){t.next=11;break}throw t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))}function f(){return(f=Object(h.a)(d.a.mark((function e(t,c){var r,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://jsonplaceholder.typicode.com/posts/".concat(t),e.next=3,fetch(r,{method:"DELETE",signal:c});case 3:return s=e.sent,e.abrupt("return",s.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(h.a)(d.a.mark((function e(t,c){var r,s,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://jsonplaceholder.typicode.com/users/".concat(t),e.next=3,fetch(r,{signal:c});case 3:if(200===(s=e.sent).status){e.next=6;break}throw new Error("User not found with ID: ".concat(t));case 6:return e.next=8,s.json();case 8:return n=e.sent,e.next=11,g(t,c);case 11:return n.posts=e.sent,e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(h.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(t);case 3:return c=e.sent,e.next=6,Promise.all(c.map((function(e){return g(e.id,t).then((function(t){return e.posts=t,e}))})));case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=13;break}throw e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function w(e){return y.apply(this,arguments)}function y(){return(y=Object(h.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://jsonplaceholder.typicode.com/users",e.next=3,fetch("https://jsonplaceholder.typicode.com/users",{signal:t});case 3:return c=e.sent,e.abrupt("return",c.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return k.apply(this,arguments)}function k(){return(k=Object(h.a)(d.a.mark((function e(t,c){var r,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://jsonplaceholder.typicode.com/posts?userId=".concat(t),e.next=3,fetch(r,{signal:c});case 3:return s=e.sent,e.abrupt("return",s.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(e){var t=e.error,c=e.children;return Object(l.jsxs)("main",{className:"container",children:[Object(l.jsxs)("p",{style:{color:"red"},children:["ERROR: ",t.message]}),c]})},I=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(r.useState)(void 0),a=Object(o.a)(n,2),i=a[0],j=a[1];if(Object(r.useEffect)((function(){var e=new AbortController;return m(e.signal).then(s).catch(j),function(){return e.abort()}}),[]),i)return Object(l.jsx)(E,{error:i});var u=c.map((function(e){return Object(l.jsx)(b,{user:e},e.id)}));return Object(l.jsx)("main",{className:"container",children:Object(l.jsx)("section",{className:"row",children:u})})},A=function(e){var t=e.user;return Object(l.jsxs)("div",{className:"tab-pane active pt-2",role:"tabpanel","aria-labelledby":"profle-tab",children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-sm-3 col-md-2 col-5",children:Object(l.jsx)("label",{children:"User Name"})}),Object(l.jsx)("div",{className:"col-md-8 col-6",children:t.username})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-sm-3 col-md-2 col-5",children:Object(l.jsx)("label",{children:"EMail"})}),Object(l.jsx)("div",{className:"col-md-8 col-6",children:t.email})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-sm-3 col-md-2 col-5",children:Object(l.jsx)("label",{children:"Phone"})}),Object(l.jsx)("div",{className:"col-md-8 col-6",children:t.phone})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-sm-3 col-md-2 col-5",children:Object(l.jsx)("label",{children:"Company"})}),Object(l.jsx)("div",{className:"col-md-8 col-6",children:(t.company||{}).name})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-sm-3 col-md-2 col-5",children:Object(l.jsx)("label",{children:"Website"})}),Object(l.jsx)("div",{className:"col-md-8 col-6",children:t.website})]}),Object(l.jsx)("hr",{})]})},P=function(){return Object(l.jsx)("article",{className:"col-12 border p-4",children:Object(l.jsx)("p",{className:"mb-0",children:"No post selected..."})})},C=function(e){var t=e.posts,c=Object(a.h)().postId,r=t.find((function(e){return e.id===Number(c)})),s=Object(a.f)(),n=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this post?")){e.next=5;break}return e.next=4,p(t);case 4:s.push("/");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r?Object(l.jsxs)("article",{className:"col-12 p-4 border",children:[Object(l.jsx)("h3",{className:"display-4 mb-4",children:r.title}),Object(l.jsx)("p",{children:r.body}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:n,children:"Delete Post"})]}):Object(l.jsx)(P,{})},R=function(e){var t=e.post,c=Object(a.i)().url;return Object(l.jsx)("li",{className:"list-group-item text-truncate",children:Object(l.jsx)(j.b,{to:c+"/"+t.id,children:t.title})})},S=function(e){var t=e.posts,c=t.map((function(e){return Object(l.jsx)(R,{userId:e.userId,post:e},e.id)})),r=Object(a.i)().url;return Object(l.jsxs)("div",{className:"row pt-2",children:[Object(l.jsx)("div",{className:"col-3",children:Object(l.jsx)("ul",{className:"list-group",children:c})}),Object(l.jsx)("div",{className:"col-9",children:Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{path:r,exact:!0,children:Object(l.jsx)(P,{})}),Object(l.jsx)(a.a,{path:r+"/:postId",children:Object(l.jsx)(C,{posts:t})})]})})]})},D=function(){return Object(l.jsx)("nav",{"aria-label":"breadcrumb",children:Object(l.jsx)("ol",{className:"breadcrumb",children:Object(l.jsx)("li",{className:"breadcrumb-item",children:Object(l.jsx)(j.b,{to:"/",className:"btn btn-link",children:"Go Home"})})})})},H=function(){var e=Object(r.useState)({posts:[]}),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(r.useState)(void 0),i=Object(o.a)(n,2),b=i[0],u=i[1],d=Object(a.h)().userId,h=Object(a.i)(),p=(h.path,h.url);return Object(r.useEffect)((function(){var e=new AbortController;return x(d,e.signal).then(s).catch(u),function(){return e.abort()}}),[d]),b?Object(l.jsx)(E,{error:b,children:Object(l.jsx)("p",{children:Object(l.jsx)(j.b,{to:"/",children:"Return Home"})})}):Object(l.jsxs)("section",{className:"container",children:[Object(l.jsx)(D,{}),Object(l.jsxs)("div",{className:"border p-4 h-100 d-flex flex-column",children:[Object(l.jsx)("h2",{className:"mb-3",children:c.name}),Object(l.jsxs)("ul",{className:"nav nav-tabs",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(j.b,{to:p,className:"nav-link",children:"Profile"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(j.b,{to:p+"/posts",className:"nav-link",children:"Posts"})})]}),c.id?Object(l.jsx)("div",{className:"p-4 border border-top-0",children:Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{path:p,exact:!0,children:Object(l.jsx)(A,{user:c})}),Object(l.jsx)(a.a,{path:p+"/posts",children:Object(l.jsx)(S,{posts:c.posts})})]})}):Object(l.jsx)("div",{className:"p-4 border border-top-0",children:Object(l.jsx)("p",{children:"Loading..."})})]})]})},B=function(){return Object(l.jsxs)("main",{className:"container",children:[Object(l.jsx)("p",{children:"Page not found!"}),Object(l.jsx)("p",{children:Object(l.jsx)(j.b,{to:"/",children:"Return Home"})})]})};var J=function(){return console.log("render App"),Object(a.g)(),Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)(i,{}),Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{path:"/",exact:!0,children:Object(l.jsx)(I,{})}),Object(l.jsx)(a.a,{path:"/users/:userId",children:Object(l.jsx)(H,{})}),Object(l.jsx)(a.a,{children:Object(l.jsx)(B,{})})]})]})};c(31),c(32);n.a.render(Object(l.jsx)(j.a,{children:Object(l.jsx)(J,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.ed6ff755.chunk.js.map