(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c,i,r,s,a,o,l,j,b,d,u,p,O,x,h,m=n(1),f=n(22),g=n.n(f),v=n(4),y=n(5),N=n(10),S=n(2),w=Object(m.createContext)(null),k="token",_=function(e){localStorage.setItem(k,e)},q=function(){return localStorage.getItem(k)},z="https://student-json-api.lidemy.me",C=function(e){return fetch("".concat(z,"/posts?_sort=createdAt&_order=desc&_page=").concat(e,"&_limit=5")).then((function(e){return{totalPosts:e.headers.get("x-total-count"),posts:e.json()}}))},L=function(){var e=q();return fetch("".concat(z,"/me"),{headers:{authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()}))},P=n(3),U=Object(P.b)(c||(c=Object(y.a)(["\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  box-sizing: border-box;\n}\naddress, caption, cite, code, dfn, em, strong, th, var, b {\n  font-weight: normal;\n  font-style: normal;\n}\nabbr, acronym {\n  border: 0;\n}\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block;\n}\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\nhtml {\n  text-size-adjust: 100%;\n  box-sizing: border-box;\n}\nbody {\n    line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote {\n  &:before,   &:after {\n    content: '';\n    content: none;\n  }\n}\nq {\n  &:before,   &:after {\n    content: '';\n    content: none;\n  }\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ncaption, th {\n  text-align: left;\n}\ntextarea {\n  resize: none;\n}\na {\n  text-decoration: none;\n  cursor: pointer;\n}\nbutton {\n  padding: 0;\n  border: none;\n  background: none;\n}\n"]))),T=Object(P.b)(i||(i=Object(y.a)(["\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%; \n  font-family: 'HelveticaNeue', Helvetica, Arial, 'Lucida Grande', sans-serif;\n}\n"]))),A=n(0),E=P.c.div(r||(r=Object(y.a)(["\n  letter-spacing: 1px;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  background-color: white;\n  justify-content: space-evenly;\n  z-index: 2;\n  border-bottom: 1px solid black;\n"]))),I=Object(P.c)(N.b)(s||(s=Object(y.a)(["\n  font-size: 50px;\n  text-decoration: none;\n  color: #010101;\n"]))),B=P.c.div(a||(a=Object(y.a)(["\n  display: flex;\n  color: #010101;\n"]))),D=Object(P.c)(N.b)(o||(o=Object(y.a)(["\n  border-left: 1px solid black;\n  box-sizing: border-box;\n  padding: 35px 40px 35px 40px;\n  font-size: 20px;\n  text-align: center;\n  color: #010101;\n  display: flex;\n  transition: all 0.2s ease-in;\n  cursor: pointer;\n  text-decoration: none;\n\n  ",";\n"])),(function(e){return e.$active&&"\n    background: rgba(36, 35, 35, 0.9);\n    color: white;\n    "}));function G(){var e=Object(S.g)(),t=Object(S.f)(),n=Object(m.useContext)(w),c=n.user,i=n.setUser;return Object(A.jsxs)(E,{children:[Object(A.jsx)(U,{}),Object(A.jsx)(T,{}),Object(A.jsx)(I,{to:"/",$active:"/"===e.pathname,children:"BLOG"}),Object(A.jsxs)(B,{className:"tags",children:[Object(A.jsx)(D,{to:"/about",$active:"/about"===e.pathname,children:"ABOUT"}),c&&Object(A.jsx)(D,{to:"/new-post",$active:"/new-post"===e.pathname,children:"POST"}),!c&&Object(A.jsx)(D,{to:"/login",$active:"/login"===e.pathname,children:"LOG IN"}),c&&Object(A.jsx)(D,{onClick:function(){_(""),i(null),alert("\u767b\u51fa\u6210\u529f\uff01"),"/"!==e.pathname&&t.push("/")},children:"LOG OUT"}),!c&&Object(A.jsx)(D,{to:"/register",$active:"/register"===e.pathname,children:"SIGN UP"})]})]})}var M=P.c.div(l||(l=Object(y.a)(["\n  width: 80%;\n  margin: 0 auto;\n  padding-top: 100px;\n  position: relative;\n"]))),$=P.c.div(j||(j=Object(y.a)(["\n  border-bottom: 1px solid rgba(0, 12, 34, 0.2);\n  padding: 40px 10px;\n  border: 1px solid black;\n  margin: 20px;\n"]))),J=P.c.div(b||(b=Object(y.a)(["\n  padding-bottom: 30px;\n  margin: 0px 18px 15px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),R=Object(P.c)(N.b)(d||(d=Object(y.a)(["\n  font-weight: 600;\n  line-height: 4rem;\n  font-size: 24px;\n  color: #333;\n  text-decoration: none;\n"]))),H=P.c.div(u||(u=Object(y.a)(["\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.8);\n"]))),W=P.c.div(p||(p=Object(y.a)(["\n  color: rgba(0, 0, 0, 0.8);\n  margin: 0 18px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  white-space: pre-line;\n  font-size: 19px;\n  line-height: 4rem;\n"]))),F=P.c.div(O||(O=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n"]))),K=Object(P.c)(N.b)(x||(x=Object(y.a)(["\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.7);\n  text-decoration: none;\n  margin: 10px 5px;\n  font-size: 28px;\n  padding: 10px 18px;\n"]))),V=P.c.div(h||(h=Object(y.a)(["\n  font-size: 16px;\n  color: grey;\n  text-align: center;\n  padding: 0 0 50px;\n"])));function Q(e){var t=e.post,n=Object(S.g)();return Object(A.jsxs)($,{children:[Object(A.jsxs)(J,{children:[Object(A.jsx)(R,{to:"/posts/".concat(t.id),$active:"/article"===n.pathname,children:t.title}),Object(A.jsx)(H,{children:new Date(t.createdAt).toLocaleString()})]}),Object(A.jsx)(W,{children:t.body})]})}function X(){var e=Object(m.useState)([]),t=Object(v.a)(e,2),n=t[0],c=t[1],i=Object(m.useState)(0),r=Object(v.a)(i,2),s=r[0],a=r[1],o=Object(m.useState)(0),l=Object(v.a)(o,2),j=l[0],b=l[1],d=Object(m.useState)(!1),u=Object(v.a)(d,2),p=u[0],O=u[1];Object(m.useEffect)((function(){p||(O(!0),C().then((function(e){return O(!1),a(e.totalPosts),b(1),e.posts})).then((function(e){c(e)})))}),[]);var x=s;function h(e){var t=Number(e.target.innerText);b(t),C(t).then((function(e){return a(e.totalPosts),e.posts})).then((function(e){c(e)}))}function f(){for(var e=Math.ceil(x/5),t=[],n=1;n<=e;n++)t.push(n);return Object(A.jsxs)("div",{children:[Object(A.jsx)(F,{children:t.map((function(e,t){return Object(A.jsx)(K,{onClick:h,children:e},e)}))}),Object(A.jsxs)(V,{children:["\u7b2c ",j," \u9801 / \u5171 ",e," \u9801"]})]})}return Object(A.jsxs)("div",{children:[Object(A.jsx)(U,{}),Object(A.jsx)(T,{}),p&&Object(A.jsx)(oe,{children:"Loading..."}),Object(A.jsxs)(M,{children:[n.map((function(e){return Object(A.jsx)(Q,{post:e},e.id)})),Object(A.jsx)(f,{})]})]})}n(41);function Y(){return Object(A.jsxs)("div",{children:[Object(A.jsx)(U,{}),Object(A.jsx)(T,{}),Object(A.jsx)("div",{className:"about-container",children:Object(A.jsxs)("div",{class:"profile",children:[Object(A.jsx)("div",{class:"profile_info",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum velit, pharetra sit amet hendrerit quis, ultricies non purus. Ut consequat varius eros, sit amet posuere erat sodales eu. Phasellus leo nisl, consectetur vel efficitur a, convallis sed lectus. Nunc rutrum, est nec malesuada dictum, tellus lorem tincidunt ligula, at consectetur felis purus non eros. Vivamus tempor nisi lacus, sed commodo tellus ultricies vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sollicitudin, metus in tempus condimentum, lorem sapien interdum dolor, ut posuere dolor lectus at diam. Suspendisse fermentum turpis quis aliquam dignissim. Morbi eu hendrerit erat, vitae imperdiet nisl. Praesent a aliquet urna, a ultrices sem. Sed in consectetur augue."}),Object(A.jsx)("div",{class:"profile_pic"})]})})]})}var Z=n(12),ee=n(11);n(42);function te(){var e=Object(m.useState)({title:"",content:""}),t=Object(v.a)(e,2),n=t[0],c=t[1],i=n.title,r=n.content,s=Object(m.useState)(""),a=Object(v.a)(s,2),o=a[0],l=a[1],j=Object(m.useState)(!1),b=Object(v.a)(j,2),d=b[0],u=b[1],p=Object(S.f)(),O=function(e){c(Object(ee.a)(Object(ee.a)({},n),{},Object(Z.a)({},e.target.name,e.target.value)))};return Object(A.jsxs)("div",{className:"post-wrapper",children:[d&&Object(A.jsx)(oe,{children:"Loading..."}),Object(A.jsx)(U,{}),Object(A.jsx)(T,{}),Object(A.jsx)("div",{className:"post-container",children:Object(A.jsxs)("form",{className:"post-form",onSubmit:function(e){e.preventDefault(),d||(u(!0),function(e,t){var n=q();return console.log(n),fetch("".concat(z,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(n)},body:JSON.stringify({title:e,body:t})}).then((function(e){return e.json()}))}(i,r).then((function(e){if(u(!1),e.code)return l(e.message);e.title&&(alert("\u767c\u4f48\u6587\u7ae0\u6210\u529f\uff01"),p.push("/"))})))},children:[Object(A.jsxs)("div",{className:"post-form__editor",children:[Object(A.jsx)("div",{className:"post-form__title input-group mb-3",children:Object(A.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter the title here...",name:"title",value:i,onChange:O,required:!0})}),Object(A.jsxs)("div",{className:"post-form__content form-floating",children:[Object(A.jsx)("textarea",{className:"form-control",placeholder:"Leave a comment...",name:"content",value:r,onChange:O,required:!0}),Object(A.jsx)("label",{htmlFor:"floatingTextarea2",children:"Leave a comment here..."})]}),Object(A.jsx)("div",{className:"post-form__error",children:o})]}),Object(A.jsx)("div",{className:"post-form__submit",children:Object(A.jsx)("input",{type:"submit",value:"SUBMIT",class:"post-form__submit-btn"})})]})})]})}n(43);function ne(){var e=Object(m.useContext)(w).setUser,t=Object(m.useState)({username:"",password:""}),n=Object(v.a)(t,2),c=n[0],i=n[1],r=c.username,s=c.password,a=function(e){i(Object(ee.a)(Object(ee.a)({},c),{},Object(Z.a)({},e.target.name,e.target.value)))},o=Object(m.useState)(""),l=Object(v.a)(o,2),j=l[0],b=l[1],d=Object(m.useState)(!1),u=Object(v.a)(d,2),p=u[0],O=u[1],x=Object(S.f)();return Object(A.jsxs)("div",{className:"login-wrapper",children:[Object(A.jsx)(U,{}),Object(A.jsx)(T,{}),p&&Object(A.jsx)(oe,{children:"Loading..."}),Object(A.jsx)("div",{className:"login-container",children:Object(A.jsxs)("form",{onSubmit:function(t){t.preventDefault(),p||(O(!0),function(e,t){return fetch("".concat(z,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()}))}(r,s).then((function(t){if(O(!1),0===t.ok)return b(t.message);_(t.token),L().then((function(t){if(1!==t.ok)return _(null),b(t.toString());alert("\u767b\u5165\u6210\u529f\uff01"),e(t.data),x.push("/")}))})))},children:[Object(A.jsxs)("div",{className:"login-form",children:["USERNAME",Object(A.jsx)("br",{}),Object(A.jsx)("input",{className:"login-input",type:"text",name:"username",value:r,onChange:function(e){return a(e)},required:!0}),Object(A.jsx)("br",{})]}),Object(A.jsxs)("div",{className:"login-form",children:["PASSWORD",Object(A.jsx)("br",{}),Object(A.jsx)("input",{className:"login-input",type:"password",name:"password",value:s,onChange:function(e){return a(e)},required:!0}),Object(A.jsx)("br",{}),Object(A.jsx)("span",{children:j})]}),Object(A.jsx)("div",{children:Object(A.jsx)("input",{className:"login-submit",type:"submit",value:"SIGN IN"})})]})})]})}n(44);function ce(){var e=Object(m.useContext)(w).setUser,t=Object(m.useState)({nickname:"",username:"",password:""}),n=Object(v.a)(t,2),c=n[0],i=n[1],r=c.nickname,s=c.username,a=c.password,o=function(e){i(Object(ee.a)(Object(ee.a)({},c),{},Object(Z.a)({},e.target.name,e.target.value)))},l=Object(m.useState)(""),j=Object(v.a)(l,2),b=j[0],d=j[1],u=Object(m.useState)(!1),p=Object(v.a)(u,2),O=p[0],x=p[1],h=Object(S.f)();return Object(A.jsxs)("div",{className:"register-wrapper",children:[Object(A.jsx)(U,{}),Object(A.jsx)(T,{}),O&&Object(A.jsx)(oe,{children:"Loading..."}),Object(A.jsx)("div",{className:"register-container",children:Object(A.jsxs)("form",{onSubmit:function(t){t.preventDefault(),O||(x(!0),function(e,t,n){return fetch("".concat(z,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:e,username:t,password:n})}).then((function(e){return e.json()}))}(r,s,a).then((function(t){if(x(!1),t.code)return d(t.message);1===t.ok&&_(t.token),L().then((function(t){if(1!==t.ok)return _(null),d(t.toString());alert("\u8a3b\u518a\u6210\u529f\uff01"),e(t.data),h.push("/")}))})))},children:[Object(A.jsxs)("div",{className:"register-form",children:["NICKNAME",Object(A.jsx)("br",{}),Object(A.jsx)("input",{className:"register-input",type:"text",name:"nickname",placeholder:"\u60a8\u7684\u66b1\u7a31",value:r,onChange:function(e){return o(e)},required:!0}),Object(A.jsx)("br",{})]}),Object(A.jsxs)("div",{className:"register-form",children:["USERNAME",Object(A.jsx)("br",{}),Object(A.jsx)("input",{className:"register-input",type:"text",name:"username",placeholder:"\u60a8\u7684\u4f7f\u7528\u8005\u540d\u7a31",value:s,onChange:function(e){return o(e)},required:!0}),Object(A.jsx)("br",{})]}),Object(A.jsxs)("div",{className:"register-form",children:["PASSWORD",Object(A.jsx)("br",{}),Object(A.jsx)("input",{className:"register-input",type:"password",name:"password",placeholder:"\u60a8\u7684\u5bc6\u78bc",value:a,onChange:function(e){return o(e)},required:!0}),Object(A.jsx)("br",{}),Object(A.jsx)("span",{children:b})]}),Object(A.jsx)("div",{children:Object(A.jsx)("input",{className:"register-submit",type:"submit",value:"SUBMIT"})})]})})]})}var ie,re;n(45);function se(){var e=Object(S.h)(),t=Object(m.useState)([]),n=Object(v.a)(t,2),c=n[0],i=n[1],r=Object(m.useState)(!1),s=Object(v.a)(r,2),a=s[0],o=s[1],l=Object(S.f)();Object(m.useEffect)((function(){var t;a||(o(!0),(t=e.id,fetch("".concat(z,"/posts/").concat(t)).then((function(e){return e.json()}))).then((function(e){o(!1),i(e)})))}),[]);return Object(A.jsxs)("div",{children:[Object(A.jsx)(U,{}),Object(A.jsx)(T,{}),Object(A.jsx)("div",{children:Object(A.jsxs)("div",{className:"article",children:[a&&Object(A.jsx)(oe,{children:"Loading..."}),Object(A.jsx)("h1",{children:c.title}),Object(A.jsx)("p",{children:new Date(c.createdAt).toLocaleString()}),Object(A.jsx)("div",{className:"article__content",children:c.body}),Object(A.jsx)("button",{type:"button",className:"article__content-btn btn btn-dark",onClick:function(){l.push("/")},children:"\u56de\u6587\u7ae0\u5217\u8868"})]})})]})}var ae=P.c.div(ie||(ie=Object(y.a)(["\n  letter-spacing: 1px;\n  max-width: 100vw;\n  font-family: Baskerville, Georgia, 'Times New Roman', Times, serif;\n"]))),oe=P.c.div(re||(re=Object(y.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: white;\n  font-size: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  z-index: 1;\n"])));var le=function(){var e=Object(m.useState)(null),t=Object(v.a)(e,2),n=t[0],c=t[1];return Object(m.useEffect)((function(){q()&&L().then((function(e){e.ok&&c(e.data)}))}),[]),Object(A.jsx)(w.Provider,{value:{user:n,setUser:c},children:Object(A.jsx)(ae,{children:Object(A.jsxs)(N.a,{children:[Object(A.jsx)(G,{}),Object(A.jsxs)(S.c,{children:[Object(A.jsx)(S.a,{exact:!0,path:"/",children:Object(A.jsx)(X,{})}),Object(A.jsx)(S.a,{path:"/about",children:Object(A.jsx)(Y,{})}),Object(A.jsx)(S.a,{path:"/new-post",children:Object(A.jsx)(te,{})}),Object(A.jsx)(S.a,{path:"/login",children:Object(A.jsx)(ne,{})}),Object(A.jsx)(S.a,{path:"/register",children:Object(A.jsx)(ce,{})}),Object(A.jsx)(S.a,{path:"/posts/:id",children:Object(A.jsx)(se,{})})]})]})})})};g.a.render(Object(A.jsx)(P.a,{theme:{colors:{primary_300:"#3333dd",primary_400:"#e33e3e",primary_500:"#af0505"}},children:Object(A.jsx)(le,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.5eaac1ea.chunk.js.map