(this["webpackJsonpss-architecture"]=this["webpackJsonpss-architecture"]||[]).push([[0],{34:function(e,t,c){e.exports={main:"lab1_main__7avGT",drawLab:"lab1_drawLab__2bLZu",buttonContainer:"lab1_buttonContainer__uyrPu"}},37:function(e,t,c){e.exports={Description:"MainPage_Description__1TRue"}},46:function(e,t,c){},47:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(16),i=c.n(a),o=(c(46),c(47),c(39)),s=c(3),j=c(8),b=c(34),l=c.n(b),u=c(57),h=c(24),d=c(23),O=c(11),x=c(17),p={"#fff":{self:"\u0431\u0435\u043b\u0430\u044f",bg:"\u0431\u0435\u043b\u043e\u043c"},"#000":{self:"\u0447\u0451\u0440\u043d\u0430\u044f",bg:"\u0447\u0451\u0440\u043d\u043e\u043c"}},f=function(){function e(){Object(O.a)(this,e)}return Object(x.a)(e,[{key:"getBackground",value:function(){return"#000"}}]),e}(),g=function(){function e(){Object(O.a)(this,e)}return Object(x.a)(e,[{key:"getBackground",value:function(){return"#fff"}}]),e}(),v=function(){function e(){Object(O.a)(this,e),this.selfColor=void 0}return Object(x.a)(e,[{key:"getCaption",value:function(e){return"\u042f ".concat(p[this.selfColor].self," \u043e\u0431\u0435\u0437\u044c\u044f\u043d\u0430 \u043d\u0430 ").concat(p[e].bg," \u0444\u043e\u043d\u0435")}}]),e}(),k=function(e){Object(h.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(O.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).selfColor="#000",e}return c}(v),y=function(e){Object(h.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(O.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).selfColor="#fff",e}return c}(v),C=function(){function e(){Object(O.a)(this,e),this.caption=void 0,this.bg=void 0}return Object(x.a)(e,[{key:"getBackground",value:function(){return this.bg.getBackground()}},{key:"getCaption",value:function(){return this.caption.getCaption(this.bg.getBackground())}},{key:"getColor",value:function(){return this.caption.selfColor}}]),e}(),m=function(e){Object(h.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(O.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).caption=new y,e.bg=new f,e}return c}(C),w=function(e){Object(h.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(O.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).caption=new k,e.bg=new g,e}return c}(C);var M=c(1);function B(){var e=Object(n.useState)(true),t=Object(j.a)(e,2),c=t[0],r=t[1];return Object(M.jsxs)("div",{className:l.a.main,children:[Object(M.jsx)("h2",{children:"\u041b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430 1"}),Object(M.jsxs)("p",{children:['\u041f\u0430\u0442\u0442\u0435\u0440\u043d "\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0430\u044f \u0444\u0430\u0431\u0440\u0438\u043a\u0430" \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c \u0434\u043b\u044f \u043f\u0430\u0440\u0441\u0438\u043d\u0433\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 url \u0438 \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u0443\u0436\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 (React.Context) \u0432 \u0440\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u0438\u043b\u0438 \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0434\u0435\u043b\u0430\u0442\u044c \u0440\u0430\u0437\u043d\u043e\u0435 \u043c\u0435\u043d\u044e \u0438\u043b\u0438 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0440\u0430\u0437\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430, \u043d\u043e \u044d\u0442\u043e \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043e\u043b\u0433\u043e.',Object(M.jsx)("br",{}),"\u0422\u0430\u043a \u043a\u0430\u043a \u0443 \u043c\u0435\u043d\u044f \u043a\u0440\u0438\u0437\u0438\u0441 \u0438\u0434\u0435\u0439 - \u0431\u0443\u0434\u0443 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u0431\u0435\u043b\u0443\u044e / \u0447\u0435\u0440\u043d\u0443\u044e \u043e\u0431\u0435\u0437\u044c\u044f\u043d\u0443. ",Object(M.jsx)("br",{}),"\u041f\u043e \u043d\u0430\u0436\u0430\u0442\u0438\u044e \u043a\u043d\u043e\u043f\u043a\u0438 \u043e\u043d\u0430 \u0431\u0443\u0434\u0435\u0442 \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c \u043e \u0441\u0432\u043e\u0451\u043c \u0446\u0432\u0435\u0442\u0435 \u0438 \u0446\u0432\u0435\u0442\u0435 \u0444\u043e\u043d\u0430."]}),Object(M.jsx)("h3",{children:"\u041f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u044f \u043a \u043a\u043e\u0434\u0443"}),Object(M.jsxs)("p",{children:["\u041f\u043e \u043d\u0430\u0436\u0430\u0442\u0438\u044e \u043a\u043d\u043e\u043f\u043a\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0434\u0440\u0443\u0433\u0430\u044f \u0444\u0430\u0431\u0440\u0438\u043a\u0430. ",Object(M.jsx)("br",{}),"\u041d\u0430\u0441\u043b\u0435\u0434\u043d\u0438\u043a Monkey \u0438\u043c\u0435\u0435\u0442 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u044b Caption \u0438 IBackground, \u0436\u0451\u0441\u0442\u043a\u043e \u043f\u0440\u043e\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0435 \u0432 \u043d\u0451\u043c. ",Object(M.jsx)("br",{}),Object(M.jsx)("code",{children:"abstract class"})," - \u044d\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f, \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c\u0430\u044f \u043d\u0430\u0441\u043b\u0435\u0434\u043d\u0438\u043a\u043e\u043c \u043a\u0430\u043a ",Object(M.jsx)("code",{children:"this.prototype.call(this)"}),". \u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0430\u043d\u0430\u043b\u0438\u0437\u0435 \u0442\u0438\u043f\u043e\u0432 ",Object(M.jsx)("code",{children:"typescrypt"}),", \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044f\u0441\u044c \u0438\u0437 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430 \u043d\u0430\u0441\u043b\u0435\u0434\u043d\u0438\u043a\u0430. ",Object(M.jsx)("br",{}),"\u0422.\u043e. ",Object(M.jsx)("code",{children:"monkey.getBackground = (monkey as WhiteMonkey).(caption as WhiteCaption).prototype.getCaption"}),". \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",Object(M.jsx)("code",{children:"selfColor"})," \u0431\u0435\u0440\u0435\u0442\u0441\u044f \u0438\u0437 ",Object(M.jsx)("code",{children:"monkey.caption as WhiteCaption"})]}),Object(M.jsxs)("p",{children:["\u042f \u043e\u0442\u0434\u0435\u043b\u0438\u043b \u043b\u043e\u0433\u0438\u043a\u0443 \u0432 \u0444\u0430\u0439\u043b ",Object(M.jsx)("code",{children:"./fabrics.ts"}),". \u0424\u0443\u043d\u043a\u0446\u0438\u044f ",Object(M.jsx)("code",{children:"getMonkey"})," \u0434\u0435\u043b\u0430\u0435\u0442 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 ",Object(M.jsx)("code",{children:"Monkey"})," \u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0435\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430. ",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),"\u042f \u043d\u0435 \u0441\u0442\u0430\u043b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0443 \u043e\u0431\u0435\u0437\u044c\u044f\u043d\u044b \u0432 \u0444\u0430\u0431\u0440\u0438\u043a\u0430\u0445, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0441\u043c\u0435\u0448\u0438\u0432\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0434\u0435\u0441\u044c \u0438 \u043b\u043e\u0433\u0438\u0443 \u0442\u0430\u043c. \u041d\u043e \u0432 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0435, \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0431\u044b \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u044b\u0432\u0430\u0442\u044c (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440) \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 \u0436\u0438\u0432\u043e\u0442\u043d\u043e\u0433\u043e \u043e\u0434\u043d\u0438\u043c \u043a\u043b\u0430\u0441\u0441\u043e\u043c, \u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 (\u0435\u0433\u043e \u0432\u0438\u0434 \u0438 \u0446\u0432\u0435\u0442) - \u0434\u0440\u0443\u0433\u0438\u043c."]}),Object(M.jsx)("h6",{children:"\u041e\u0431 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044f\u0445 JS"}),Object(M.jsxs)("p",{children:[Object(M.jsx)("code",{children:"WhiteMonkey"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043c\u0435\u0442\u043e\u0434\u044b ",Object(M.jsx)("code",{children:"Monkey"})," \u0447\u0435\u0440\u0435\u0437 ",Object(M.jsx)("code",{children:"WhiteMonkey.prototype = Monkey"})," (\u043f\u0440\u043e\u0442\u043e\u0442\u0438\u043f\u043d\u043e\u0435 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435). \u042d\u0442\u043e \u043b\u0435\u0433\u043a\u043e \u0443\u0432\u0438\u0434\u0435\u0442\u044c, \u0435\u0441\u043b\u0438 \u043f\u043e\u043c\u0435\u043d\u044f\u0442\u044c ",Object(M.jsx)("code",{children:"WhiteMonkey.prototype"})," \u043d\u0430 ",Object(M.jsx)("code",{children:"BlackMonkey"}),". \u0422\u043e\u0433\u0434\u0430 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u043f\u043e\u043b\u043e\u0436\u043d\u043e."]}),Object(M.jsx)("h3",{children:"\u0412\u044b\u0432\u043e\u0434"}),Object(M.jsx)("p",{children:"\u0421\u0430\u043c \u043f\u0430\u0442\u0442\u0435\u0440\u043d \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u044f \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0435 \u0441\u043e\u0431\u0438\u0440\u0430\u044e\u0441\u044c. \u042d\u0442\u043e \u043e\u0441\u043d\u043e\u0432\u0430 \u0434\u043b\u044f \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u0430\u0442\u0442\u0435\u0440\u043d\u043e\u0432 - \u0432 \u0442.\u0447. \u0434\u043b\u044f \u0444\u0430\u0431\u0440\u0438\u0447\u043d\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0430 \u0438 \u043e\u0434\u0438\u043d\u043e\u0447\u043a\u0438."}),Object(M.jsx)("p",{children:"\u0412\u0430\u0440\u0438\u0430\u0446\u0438\u044f \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0430\u0442\u0442\u0435\u0440\u043d\u0430 - \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 Caption \u0438 Background \u0432 Monkey - \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c \u043e \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438 - \u0431\u043e\u043b\u0435\u0435 \u0433\u0438\u0431\u043a\u043e\u043c \u043f\u043e\u0434\u0445\u043e\u0434\u0435. \u0412 \u0442\u0430\u043a\u043e\u043c \u0432\u0438\u0434\u0435 \u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b \u0435\u0433\u043e \u0432 \u0440\u0430\u0431\u043e\u0442\u0435."}),Object(M.jsx)("div",{className:l.a.buttonContainer,children:Object(M.jsx)(u.a,{onClick:function(){r(!c)},children:"\u0420\u0438\u0441\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u0435\u0437\u044c\u044f\u043d\u0443!"})}),_(c)]})}function _(e){var t=function(e){var t=e?new m:new w;return{background:t.getBackground(),caption:t.getCaption(),color:t.getColor()}}(!!e),c=t.background,n=t.caption,r=t.color;return Object(M.jsx)("div",{style:{background:c,color:r},className:l.a.drawLab,children:n})}function N(){return null}var W=c(37),L=c.n(W),A=function(){return Object(M.jsxs)("div",{className:L.a.Description,children:[Object(M.jsx)("p",{children:'\u041b\u0430\u0431\u044b \u0440\u0430\u0437\u043b\u043e\u0436\u0435\u043d\u044b \u043f\u043e \u043c\u0435\u043d\u044e. \u0412\u0441\u0451 \u0434\u0435\u043b\u0430\u043b\u043e\u0441\u044c \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0441 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u0438\u0437 \u043a\u043d\u0438\u0433\u0438 "\u041f\u0440\u0438\u0435\u043c\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u041f\u0430\u0442\u0442\u0435\u0440\u043d\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f (2016)", \u0410\u0432\u0442\u043e\u0440\u044b: \u042d\u0440\u0438\u0445 \u0413\u0430\u043c\u043c\u0430, \u0420\u0438\u0447\u0430\u0440\u0434 \u0425\u0435\u043b\u043c, \u0420\u0430\u043b\u044c\u0444 \u0414\u0436\u043e\u043d\u0441\u043e\u043d, \u0414\u0436\u043e\u043d \u0412\u043b\u0438\u0441\u0441\u0438\u0434\u0435\u0441.'}),Object(M.jsx)("p",{children:"\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f \u043f\u043e \u043c\u0435\u043d\u044e."}),Object(M.jsx)("p",{children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u043e \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043b\u0430\u0431\u0443 \u043c\u043e\u0436\u043d\u043e \u0432 IDE Phpstorm \u0438\u043b\u0438 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0439 - VSCode"}),Object(M.jsx)("p",{children:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043b\u0430\u0431\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u043c\u043e\u0436\u043d\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439"}),Object(M.jsx)("p",{children:Object(M.jsx)("code",{children:"git clone https://github.com/4t4nner/ss-architecture.git"})})]})},D=c(58),S=c(59),I=c(60),J=[{to:"/lab1",content:"\u041b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430 1"}],P=function(){return Object(M.jsx)("div",{className:"bg-light",children:Object(M.jsx)(D.a,{children:Object(M.jsxs)(S.a,{bg:"light",expand:"lg",children:[Object(M.jsx)(S.a.Brand,{href:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(M.jsx)(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(M.jsx)(S.a.Collapse,{id:"basic-navbar-nav",children:Object(M.jsx)(I.a,{className:"me-auto",children:J.map((function(e){var t=e.to,c=e.content;return Object(M.jsx)(I.a.Link,{href:t,children:c})}))})})]})})})},T=function(){return Object(M.jsx)(P,{})},E=(c(54),function(e){var t=e.children;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(T,{}),t]})}),R=function(){return Object(M.jsx)(o.a,{children:Object(M.jsx)(E,{children:Object(M.jsxs)(s.c,{children:[Object(M.jsx)(s.a,{path:"/",element:Object(M.jsx)(A,{})}),Object(M.jsx)(s.a,{path:"/lab1",element:Object(M.jsx)(B,{})}),Object(M.jsx)(s.a,{path:"/lab2",element:Object(M.jsx)(N,{})})]})})})};i.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(R,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.b4f2e473.chunk.js.map