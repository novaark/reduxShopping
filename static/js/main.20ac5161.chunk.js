(this.webpackJsonpreduxshopping=this.webpackJsonpreduxshopping||[]).push([[0],{44:function(n,e,t){},55:function(n,e,t){"use strict";t.r(e);var i,a,c,r,o,d,A,s,g,l,j,h,b,x,u,p,m,f,O=t(2),w=t.n(O),y=t(20),C=t.n(y),B=(t(44),t(14)),Q=[{Img:t.p+"static/media/Slide1.6f9abf34.png"},{Img:t.p+"static/media/Slide2.b2ce7da2.png"},{Img:t.p+"static/media/Slide3.d44e20d0.png"},{Img:t.p+"static/media/Slide4.613a1802.png"},{Img:t.p+"static/media/Slide5.46e54f32.png"}],D=t(28),v=t(16),E=t.n(v),I=t(3),M=t(4),F=t(8),k=M.a.div(i||(i=Object(I.a)(["\n    height:calc(100vh - 100px);\n    width:100vw;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n"]))),T=M.a.div(a||(a=Object(I.a)(["\n    height:100%;\n    width:100%;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]))),N=M.a.div(c||(c=Object(I.a)(["\n    height: auto;\n    width:100%;\n    display:flex;\n    align-items: center;\n    justify-content: center;\n"]))),H=M.a.div(r||(r=Object(I.a)(["\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    height:100%;\n    font-size: 1.5rem;\n    padding-top: 100px;\n    transition: font-size 0.5s, margin 0.5s;\n    cursor:pointer;\n\n    @media (max-width:992px){\n        font-size:22px;\n        margin: 0 -10px;\n    }\n\n    @media screen and (max-width:768px){\n        font-size:18px;\n        margin: 0 -20px;\n    }\n"]))),S=M.a.img(o||(o=Object(I.a)(["\n    height:500px;\n    width:auto;\n    transition: height 0.5s;\n\n    &.active{\n        @media (max-width:992px){\n            height:400px;\n        }\n        @media screen and (max-width:768px){\n            height:300px;\n        }\n\n    }\n    &.hidden{\n        display:none;\n    }\n"]))),P=Object(M.a)(F.b)(d||(d=Object(I.a)(["\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    text-decoration:none;\n"]))),L=M.a.p(A||(A=Object(I.a)(["\n    color: black;\n    font-weight:400;\n    border: 1px solid black;\n    padding:5px 10px;\n    transition: background-color 0.2s;\n\n    &:hover{\n        background-color:#f8f8f8\n    }\n\n"]))),Y=t(1),K=function(){var n=Object(O.useState)(0),e=Object(B.a)(n,2),t=e[0],i=e[1],a=function(){i(4===t?0:t+1)},c=w.a.useRef(null);function r(){c.current&&clearTimeout(c.current)}return Object(O.useEffect)((function(){return r(),c.current=setTimeout((function(){a()}),2500),function(){r()}}),[t]),Object(Y.jsx)(k,{children:Object(Y.jsxs)(T,{children:[Object(Y.jsxs)(N,{children:[Object(Y.jsx)(H,{children:Object(Y.jsx)(D.a,{onClick:function(){i(0===t?4:t-1)}})}),Q.map((function(n,e){return Object(Y.jsx)(S,{className:e===t?"active":"hidden",src:n.Img},E()())})),Object(Y.jsx)(H,{children:Object(Y.jsx)(D.b,{onClick:a})})]}),Object(Y.jsx)(P,{to:"/shop",children:Object(Y.jsx)(L,{children:"View Catalog"})})]})})},G=function(){return Object(Y.jsx)(K,{})},z=M.a.div(s||(s=Object(I.a)(["\n    height:auto;\n    width:100%;\n    position:absolute;\n    bottom:-402px;\n    overflow:auto;\n    display:flex;\n    border:1px solid black;\n    justify-content: center;\n    background:white;\n    text-align:center;\n    flex-direction: column;\n    align-items: center;\n    \n\n    @media screen and (max-width:768px){\n        display:none;\n    }\n"]))),R=(M.a.h3(g||(g=Object(I.a)(["\n    font-size:24px;\n    font-weight:400;\n"]))),M.a.div(l||(l=Object(I.a)(["\n    display:flex;\n    flex-direction: column;\n    height:auto;\n    width:auto;\n"])))),q=Object(M.a)(F.b)(j||(j=Object(I.a)(["\n    height:40px;\n    text-decoration:none;\n    width:auto;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    padding:0 10px;\n    font-size:20px;\n    color:black;\n    font-weight:300;\n    text-align:center;\n    transition:all 0.3s;\n\n    &:hover{\n        color:red;\n        font-size: 21px;\n    }\n\n    @media (max-width:1060px){\n        font-size:16px;\n\n        &:hover{\n        color:red;\n        font-size: 17px;\n        }\n    }\n\n    @media (max-width:850px){\n        font-size:14px;\n\n        &:hover{\n        color:red;\n        font-size: 15px;\n        }\n    }\n\n\n"]))),X=M.a.div(h||(h=Object(I.a)(["\n\n"]))),U=function(){return Object(Y.jsx)(z,{children:Object(Y.jsxs)(R,{children:[Object(Y.jsx)(q,{to:"/category/Super_Mario",children:Object(Y.jsx)(X,{children:"Super Mario"})}),Object(Y.jsx)(q,{to:"/category/Metroid",children:Object(Y.jsx)(X,{children:"Metroid"})}),Object(Y.jsx)(q,{to:"/category/The_Legend_of_Zelda",children:Object(Y.jsx)(X,{children:"Legend of Zelda"})}),Object(Y.jsx)(q,{to:"/category/Animal_Crossing",children:Object(Y.jsx)(X,{children:"Animal Crossing"})}),Object(Y.jsx)(q,{to:"/category/Star_Fox",children:Object(Y.jsx)(X,{children:"Star Fox"})}),Object(Y.jsx)(q,{to:"/category/Splatoon",children:Object(Y.jsx)(X,{children:"Splatoon"})}),Object(Y.jsx)(q,{to:"/category/Pokemon",children:Object(Y.jsx)(X,{children:"Pokemon"})}),Object(Y.jsx)(q,{to:"/category/Kirby",children:Object(Y.jsx)(X,{children:"Kirby"})}),Object(Y.jsx)(q,{to:"/category/Fire_Emblem",children:Object(Y.jsx)(X,{children:"Fire Emblem"})}),Object(Y.jsx)(q,{to:"/category/Monster_Hunter",children:Object(Y.jsx)(X,{children:"Monster Hunter"})})]})})},J=t.p+"static/media/Background.738a4237.png",W=M.a.div(b||(b=Object(I.a)(["\n    display:flex;\n    width:100%;\n    height:100px;\n    position:sticky;\n    background-image: url(",");\n    top:0;\n    left:0;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid black;\n"])),J),V=M.a.nav(x||(x=Object(I.a)(["\n    width:90%;\n    height:100%;\n    display:grid;\n    grid-template-columns: 400px 400px;\n    grid-template-rows: 1fr;\n    justify-content: center;\n    align-content: center;\n"]))),Z=Object(M.a)(F.b)(u||(u=Object(I.a)(["\n    display:flex;\n    justify-content: center;\n    align-items:center;\n    flex-direction:column;\n    width:100%;\n    height:100%;\n    position:relative;\n    color:black;\n    text-decoration:none;\n\n"]))),_=M.a.span(p||(p=Object(I.a)(["\n    font-size:1.5rem;\n    font-weight:300;\n\n    \n"]))),$=M.a.img(m||(m=Object(I.a)(["\n    width:200px;\n    height:auto;\n    max-width:200px;\n"]))),nn=M.a.div(f||(f=Object(I.a)(["\n    display:flex;\n    justify-content: center;\n    align-items: center;\n\n"]))),en=function(n){var e=Object(O.useState)(!1),t=Object(B.a)(e,2),i=t[0],a=t[1],c=function(){a(!1)};return Object(Y.jsx)(W,{children:Object(Y.jsxs)(V,{children:[Object(Y.jsx)(Z,{to:"/",children:Object(Y.jsx)(_,{children:Object(Y.jsx)($,{src:"data:image/png;base64,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"})})}),Object(Y.jsxs)(nn,{onClick:c,children:[Object(Y.jsxs)(Z,{to:"/shop",onMouseEnter:function(){a(!i)},onMouseLeave:c,children:[Object(Y.jsx)(_,{children:"Shop"}),i?Object(Y.jsx)(U,{}):Object(Y.jsx)(Y.Fragment,{})]}),Object(Y.jsx)(Z,{to:"/Cart",children:Object(Y.jsx)(_,{children:"Cart"})})]})]})})},tn=t(13),an=t(19),cn=t(7),rn=t(22),on={cart:[],total:0,itemQuantity:0},dn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:on,e=arguments.length>1?arguments[1]:void 0,t=Object(rn.a)(n.cart),i=n.total,a=n.itemQuantity,c=!1,r=0,o=0;switch(e.type){case"ADD_TO_CART":for(var d=0;d<t.length;d++)t[d].id===e.payload.id&&(t[d].quantity=t[d].quantity+1,c=!0,i+=29.99,a+=1);return!1===c&&(t.push({id:e.payload.id,image:e.payload.image,name:e.payload.name,price:29.99,quantity:1}),i+=29.99,a+=1),Object(cn.a)(Object(cn.a)({},n),{},{total:i,cart:t,itemQuantity:a});case"REMOVE_FROM_CART":for(var A=0;A<t.length;A++)if(t[A].id===e.payload){r=A,i-=29.99*t[A].quantity,a-=t[A].quantity;break}return t.splice(r,1),Object(cn.a)(Object(cn.a)({},n),{},{total:i,cart:t,itemQuantity:a});case"CHANGE_QUANTITY":for(var s=0;s<t.length;s++)if(t[s].id===e.payload.id){o=e.payload.num-t[s].quantity,t[s].quantity=e.payload.num,i+=29.99*o,a+=o;break}return Object(cn.a)(Object(cn.a)({},n),{},{total:i,cart:t,itemQuantity:a});default:return n}},An="FETCH_PRODUCTS_PENDING",sn="FETCH_PRODUCTS_SUCCESS",gn="FETCH_GAME_SERIES_SUCCESS",ln="FETCH_SINGLE_PRODUCT_SUCCESS",jn="FETCH_PRODUCTS_ERROR";function hn(){return{type:An}}function bn(n){return{type:jn,payload:n}}var xn=function(n){return function(n){n(hn()),fetch("https://www.amiiboapi.com/api/amiibo/?type=figure").then((function(n){return n.json()})).then((function(e){if(e.error)throw e.error;var t;n((t=e.amiibo,{type:sn,payload:t}))})).catch((function(e){n(bn(e.message))}))}},un=function(n){return function(e){e(hn()),fetch(n).then((function(n){return n.json()})).then((function(n){if(n.error)throw n.error;var t;e((t=n.amiibo,{type:ln,payload:t}))})).catch((function(n){e(bn(n.message))}))}},pn=function(n){return function(e){e(hn()),fetch(n).then((function(n){return n.json()})).then((function(n){if(n.error)throw n.error;var t;e((t=n.amiibo,{type:gn,payload:t}))})).catch((function(n){e(bn(n.message))}))}},mn={pending:!1,products:[],error:null,singleProduct:[],gameSeriesFigures:[]};var fn,On,wn,yn,Cn,Bn,Qn,Dn,vn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mn,e=arguments.length>1?arguments[1]:void 0,t=[],i=["Super Mario","The Legend of Zelda","Animal Crossing","Star Fox","Metroid","Splatoon","Pokemon","Kirby","Fire Emblem","Monster Hunter"];switch(e.type){case An:return Object(cn.a)(Object(cn.a)({},n),{},{singleProduct:[],gameSeriesFigures:[],pending:!0});case sn:for(var a=0;a<e.payload.length;a++)i.includes(e.payload[a].gameSeries)&&t.push(e.payload[a]);return Object(cn.a)(Object(cn.a)({},n),{},{pending:!1,products:t});case ln:return Object(cn.a)(Object(cn.a)({},n),{},{pending:!1,singleProduct:e.payload});case jn:return Object(cn.a)(Object(cn.a)({},n),{},{pending:!1,error:e.payload});case gn:return Object(cn.a)(Object(cn.a)({},n),{},{pending:!1,gameSeriesFigures:Object(rn.a)(e.payload)});default:return n}},En=Object(an.b)({cartReducer:dn,dataReducer:vn}),In=t(37),Mn=t(38),Fn=t.n(Mn),kn=Object(an.c)(En,Object(an.a)(In.a,Fn.a));var Tn,Nn,Hn,Sn,Pn,Ln,Yn,Kn,Gn,zn,Rn,qn,Xn,Un,Jn,Wn,Vn,Zn,_n,$n,ne,ee,te,ie,ae,ce,re,oe,de,Ae,se,ge,le,je,he,be,xe,ue,pe,me,fe,Oe,we,ye,Ce,Be,Qe,De,ve,Ee,Ie,Me,Fe,ke,Te,Ne,He,Se=Object(M.b)(fn||(fn=Object(I.a)(["\n    0%{\n        opacity:0;\n        transform:scale(0)\n    }\n    25%{\n        opacity:1;\n    }\n    100%{\n        opacity:0;\n        transform:scale(1)\n    }\n"]))),Pe=Object(M.b)(On||(On=Object(I.a)(["\n    0%{\n        opacity:0;\n        transform:scale(0)\n    }\n    50%{\n        opacity:1;\n    }\n    100%{\n        opacity:0;\n        transform:scale(1)\n    }\n"]))),Le=Object(M.b)(wn||(wn=Object(I.a)(["\n    0%{\n        opacity:0;\n        transform:scale(0)\n    }\n    75%{\n        opacity:1;\n    }\n    100%{\n        opacity:0;\n        transform:scale(1)\n    }\n"]))),Ye=M.a.div(yn||(yn=Object(I.a)(["\n    height:calc(100vh - 80px);\n    width:100vw;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n"]))),Ke=M.a.div(Cn||(Cn=Object(I.a)(["\n    height:100%;\n    width:100%;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n"]))),Ge=M.a.div(Bn||(Bn=Object(I.a)(["\n    width:40px;\n    margin:20px;\n    height:40px;\n    border-radius:50px;\n    background:orange;\n    animation: "," 2s infinite;\n"])),Se),ze=M.a.div(Qn||(Qn=Object(I.a)(["\n    width:40px;\n    margin:20px;\n    height:40px;\n    border-radius:50px;\n    background:orange;\n    animation: "," 2s infinite;\n"])),Pe),Re=M.a.div(Dn||(Dn=Object(I.a)(["\n    width:40px;\n    margin:20px;\n    height:40px;\n    border-radius:50px;\n    background:orange;\n    animation: "," 2s infinite;\n"])),Le),qe=function(){return Object(Y.jsx)(Ye,{children:Object(Y.jsxs)(Ke,{children:[Object(Y.jsx)(Ge,{}),Object(Y.jsx)(ze,{}),Object(Y.jsx)(Re,{})]})})},Xe=M.a.div(Tn||(Tn=Object(I.a)(["\n    display:flex;\n    width:100%;\n    height:calc(100vh - 100px);\n"]))),Ue=M.a.div(Nn||(Nn=Object(I.a)(["\n    /* border:1px solid black; */\n    margin:20px;\n    padding:40px;\n    border-radius:50px;\n    box-shadow: 2px 2px 12px 3px rgba(0, 0, 0, 0.2);\n"]))),Je=M.a.img(Hn||(Hn=Object(I.a)(["\n    height:300px;\n"]))),We=M.a.div(Sn||(Sn=Object(I.a)(["\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]))),Ve=M.a.h2(Pn||(Pn=Object(I.a)(["\n    font-weight:400;\n    margin:0;\n    margin-bottom:10px;\n    padding:0;\n    font-size: 1.7rem;\n"]))),Ze=M.a.h3(Ln||(Ln=Object(I.a)(["\n    font-weight:300;\n    margin:0;\n    margin-bottom:10px;\n    padding:0;\n    font-size: 1.2rem;\n"]))),_e=M.a.h4(Yn||(Yn=Object(I.a)(["\n    font-weight:300;\n    margin:0;\n    margin-bottom:10px;\n    padding:0;\n"]))),$e=M.a.div(Kn||(Kn=Object(I.a)(["\n    display:flex;\n    height:auto;\n    width:auto;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 20px;\n"]))),nt=M.a.button(Gn||(Gn=Object(I.a)(["\n    border:1px solid black;\n    background:none;\n    width:125px;\n    cursor:pointer;\n"]))),et=Object(M.a)(F.b)(zn||(zn=Object(I.a)(["\n\n"]))),tt=M.a.button(Rn||(Rn=Object(I.a)(["\n    border:none;\n    background:none;\n    border:1px solid black;\n    width:125px;\n    cursor:pointer;\n"]))),it=M.a.div(qn||(qn=Object(I.a)(["\n    display:flex;\n    width:50%;\n    height:100%;\n    border-radius: 50px;\n    justify-content: space-around;\n    align-items: center;\n    margin:0 auto;\n    \n\n    &:hover{\n    }\n"]))),at=Object(tn.b)((function(n){return{data:n.dataReducer,cart:n.cartReducer}}),(function(n){return{fetchSingleProduct:function(e){n(un(e))},addToCart:function(e,t,i){n(function(n,e,t){return{type:"ADD_TO_CART",payload:{id:n,image:e,name:t}}}(e,t,i))}}}))((function(n){var e=Object(O.useRef)(null),t=Object(O.useState)(!1),i=Object(B.a)(t,2),a=i[0],c=i[1];Object(O.useEffect)((function(){n.fetchSingleProduct("https://www.amiiboapi.com/api/amiibo/?id="+n.match.params.id)}),[]);return!0===n.data.pending?Object(Y.jsx)(qe,{}):Object(Y.jsx)(Xe,{children:Object(Y.jsxs)(it,{children:[Object(Y.jsx)(Ue,{children:Object(Y.jsx)(Je,{src:n.data.singleProduct.image})}),Object(Y.jsxs)(We,{children:[Object(Y.jsx)(Ve,{children:n.data.singleProduct.name}),Object(Y.jsxs)(Ze,{children:["Game Series: ",n.data.singleProduct.gameSeries]}),Object(Y.jsx)(_e,{children:"Price: 29.99"}),Object(Y.jsxs)($e,{children:[Object(Y.jsx)(nt,{onClick:function(){n.addToCart(n.data.singleProduct.head+n.data.singleProduct.tail,n.data.singleProduct.image,n.data.singleProduct.name),e.current.className="",c(!0)},children:"Add to Cart"}),Object(Y.jsx)(et,{to:"/cart",ref:e,className:"hidden",children:a?Object(Y.jsx)(tt,{children:"Proceed to Cart"}):Object(Y.jsx)(Y.Fragment,{})})]})]})]})})})),ct=t.p+"static/media/EmptyImage.35d74ce2.png",rt=M.a.div(Xn||(Xn=Object(I.a)(["\n    width:100%;\n    height:100%;\n    display:flex;\n    justify-content: center;\n    align-items:center;\n    text-align:center;\n    flex-direction: column;\n"]))),ot=M.a.img(Un||(Un=Object(I.a)(["\n    width:500px;\n    height:auto;\n"]))),dt=M.a.p(Jn||(Jn=Object(I.a)(["\n    font-weight:300;\n    color:black;\n    font-size:2rem;\n"]))),At=function(){return Object(Y.jsxs)(rt,{children:[Object(Y.jsx)(ot,{src:ct}),Object(Y.jsx)(dt,{children:"Empty Cart"})]})},st=M.a.div(Wn||(Wn=Object(I.a)(["\n    display:flex;\n    width:100%;\n    height:100%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 40px;\n"]))),gt=M.a.div(Vn||(Vn=Object(I.a)(["\n    display:grid;\n    grid-auto-rows: auto;\n    grid-template-columns: 1fr;\n    grid-gap: 40px;\n    width:40%;\n"]))),lt=M.a.div(Zn||(Zn=Object(I.a)(["\n    display:grid;\n    grid-template-columns: 120px 1fr 150px;\n    justify-content: center;\n    align-content: center;\n    text-align:center;\n\n"]))),jt=M.a.h2(_n||(_n=Object(I.a)(["\n    margin:0;\n    padding:0;\n"]))),ht=M.a.h2($n||($n=Object(I.a)(["\n    grid-column: 3/4;\n    margin:0;\n    padding:0;\n"]))),bt=M.a.div(ne||(ne=Object(I.a)(["\n    display:grid;\n    grid-template-columns: auto 1fr 150px;\n    justify-content: center;\n    align-content: center;\n    grid-gap: 40px;\n    border-top: 1px solid black;\n    padding-top: 40px;\n\n    &:last-child{\n        margin-bottom: 120px;\n    }\n\n"]))),xt=M.a.img(ee||(ee=Object(I.a)(["\n    width:125px;\n    box-shadow: 2px 2px 12px 3px rgba(0, 0, 0, 0.2);\n    border-radius:20px;\n    padding:20px;\n"]))),ut=M.a.p(te||(te=Object(I.a)(["\n   text-align: center;\n   font-size:1.5rem;\n   font-weight:300;\n"]))),pt=M.a.div(ie||(ie=Object(I.a)(["\n    display:grid;\n    grid-auto-rows: auto;\n    grid-template-columns: 1fr;\n    justify-content: start;\n    align-content:start;\n    grid-gap: 10px;\n"]))),mt=M.a.p(ae||(ae=Object(I.a)(["\n    margin:0;\n    padding:0;\n    font-weight:300;\n    font-size:1.5rem;\n"]))),ft=M.a.input(ce||(ce=Object(I.a)(["\n    justify-self: start;\n"]))),Ot=M.a.div(re||(re=Object(I.a)(["\n"]))),wt=M.a.button(oe||(oe=Object(I.a)(["\n    border:none;\n    background:none;\n    text-decoration:underline;\n    cursor: pointer;\n"]))),yt=M.a.div(de||(de=Object(I.a)(["\n    position:fixed;\n    bottom:0;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    background:White;\n    left:0;\n    height:80px;\n    border:1px solid black;\n    width:100%;\n"]))),Ct=M.a.div(Ae||(Ae=Object(I.a)(["\n    font-size:1.5rem;\n    font-weight:300;\n"]))),Bt=M.a.div(se||(se=Object(I.a)(["\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    padding:0 40px;\n    font-weight:300;\n"]))),Qt=M.a.button(ge||(ge=Object(I.a)(["\n    border:1px solid black;\n    background:none;\n    font-size: 1.5rem;\n    font-weight:300;\n"]))),Dt=Object(tn.b)((function(n){return{cart:n.cartReducer}}),(function(n){return{removeFromCart:function(e){n(function(n){return{type:"REMOVE_FROM_CART",payload:n}}(e))},changeQuantity:function(e,t){n(function(n,e){return{type:"CHANGE_QUANTITY",payload:{id:n,num:e}}}(e,t))}}}))((function(n){var e=function(e){n.removeFromCart(e.target.parentNode.parentNode.id)},t=function(e){e.preventDefault(),n.changeQuantity(e.target.parentNode.id,e.target.value)};return 0===n.cart.cart.length?Object(Y.jsx)(At,{}):Object(Y.jsxs)(st,{children:[Object(Y.jsxs)(gt,{children:[Object(Y.jsxs)(lt,{children:[Object(Y.jsx)(jt,{children:"Item"}),Object(Y.jsx)(ht,{children:"Price"})]}),n.cart.cart.map((function(n,i){return Object(Y.jsxs)(bt,{children:[Object(Y.jsx)(xt,{src:n.image}),Object(Y.jsxs)(pt,{id:n.id,children:[Object(Y.jsx)(mt,{children:n.name+" Amiibo"}),Object(Y.jsx)(ft,{onChange:t,type:"number",min:"1",value:n.quantity}),Object(Y.jsx)(Ot,{children:Object(Y.jsx)(wt,{onClick:e,children:"Delete From Cart"})})]}),Object(Y.jsx)(ut,{children:(n.price*n.quantity).toFixed(2)})]},"cartItem"+i)}))]}),Object(Y.jsxs)(yt,{children:[Object(Y.jsx)(Ct,{children:"Cart Total: "+n.cart.total.toFixed(2)}),Object(Y.jsx)(Bt,{children:Object(Y.jsx)(Qt,{children:"Check out"})})]})]})})),vt=t(6),Et=M.a.div(le||(le=Object(I.a)(["\n    display:flex;\n    width:100%;\n    height:auto;\n    justify-content: center;\n    align-items: center;\n    flex-direction:column;\n"]))),It=M.a.div(je||(je=Object(I.a)(["\n    color:black;\n    font-size:2rem;\n    padding: 60px 0 10px 0;\n    margin-bottom: 50px;\n    font-weight:300;\n"]))),Mt=M.a.div(he||(he=Object(I.a)(["\n    width:75%;\n    display:grid;\n    margin: 0 auto;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-auto-rows:400px;\n"]))),Ft=M.a.img(be||(be=Object(I.a)(["\n    height:210px;\n    margin: 0 auto;\n    transition: height 0.2s ease-in;\n"]))),kt=M.a.h2(xe||(xe=Object(I.a)(["\n    padding:0;\n    margin:0%;\n    font-weight:600;\n    font-size:1.2rem;\n    \n"]))),Tt=M.a.h3(ue||(ue=Object(I.a)(["\n    padding:0;\n    margin:0%;\n    font-weight:300;\n    font-size:1rem;\n"]))),Nt=Object(M.a)(F.b)(pe||(pe=Object(I.a)(["\n    display:grid;\n    height:300px;\n    width:250px;\n    grid-template-rows: 1fr auto auto;\n    grid-template-columns:1fr;\n    text-align:center;\n    justify-content:center;\n    align-content:center;\n    flex-direction: column;\n    text-decoration:none;\n    color:black;\n    margin: 0 40px;\n\n    &:hover{\n        ","{\n            height:230px;\n        }\n        ","{color:#005bc6;}\n        ","{color:#005bc6}\n    }\n"])),Ft,kt,Tt),Ht=Object(tn.b)((function(n){return{data:n.dataReducer}}),(function(n){return{fetchProducts:function(e){n(xn())}}}))((function(n){return Object(O.useEffect)((function(){0===n.data.products.length&&n.fetchProducts("https://www.amiiboapi.com/api/amiibo?type=figure")}),[]),!0===n.data.pending?Object(Y.jsx)(qe,{}):Object(Y.jsxs)(Et,{children:[Object(Y.jsx)(It,{children:"All Series"}),Object(Y.jsx)(Mt,{children:n.data.products.map((function(n){return Object(Y.jsxs)(Nt,{to:"item/"+n.head+n.tail,children:[Object(Y.jsx)(Ft,{src:n.image}),Object(Y.jsx)(kt,{children:n.name}),Object(Y.jsx)(Tt,{children:n.gameSeries})]},E()())}))})]})})),St=M.a.div(me||(me=Object(I.a)(["\n    display:flex;\n    width:100%;\n    height:auto;\n    justify-content: center;\n    align-items: center;\n    flex-direction:column;\n"]))),Pt=M.a.div(fe||(fe=Object(I.a)(["\n    color:black;\n    font-size:2rem;\n    padding: 60px 0 10px 0;\n    margin-bottom: 50px;\n    font-weight:300;\n"]))),Lt=M.a.div(Oe||(Oe=Object(I.a)(["\n    width:75%;\n    display:grid;\n    margin: 0 auto;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-auto-rows:400px;\n"]))),Yt=M.a.img(we||(we=Object(I.a)(["\n    height:210px;\n    margin: 0 auto;\n    transition: height 0.2s ease-in;\n"]))),Kt=M.a.h2(ye||(ye=Object(I.a)(["\n    padding:0;\n    margin:0%;\n    font-weight:600;\n    font-size:1.2rem;\n    \n"]))),Gt=M.a.h3(Ce||(Ce=Object(I.a)(["\n    padding:0;\n    margin:0%;\n    font-weight:300;\n    font-size:1rem;\n"]))),zt=Object(M.a)(F.b)(Be||(Be=Object(I.a)(["\n    display:grid;\n    height:300px;\n    width:250px;\n    grid-template-rows: 1fr auto auto;\n    grid-template-columns:1fr;\n    text-align:center;\n    justify-content:center;\n    align-content:center;\n    flex-direction: column;\n    text-decoration:none;\n    color:black;\n    margin: 0 40px;\n\n    &:hover{\n        ","{\n            height:230px;\n        }\n        ","{color:#005bc6;}\n        ","{color:#005bc6}\n    }\n"])),Yt,Kt,Gt),Rt=Object(tn.b)((function(n){return{data:n.dataReducer}}),(function(n){return{fetchGameSeries:function(e){n(pn(e))}}}))((function(n){return Object(O.useEffect)((function(){var e=n.match.params.id.split("_").join(" ");n.fetchGameSeries("https://www.amiiboapi.com/api/amiibo/?type=Figure&gameseries="+e)}),[n.match.params.id]),!0===n.data.pending?Object(Y.jsx)(qe,{}):Object(Y.jsxs)(St,{children:[Object(Y.jsx)(Pt,{children:n.match.params.id.split("_").join(" ")+" Series"}),Object(Y.jsx)(Lt,{children:n.data.gameSeriesFigures.map((function(n){return Object(Y.jsxs)(zt,{to:"/item/"+n.head+n.tail,children:[Object(Y.jsx)(Yt,{src:n.image}),Object(Y.jsx)(Kt,{children:n.name}),Object(Y.jsx)(Gt,{children:n.gameSeries})]},E()())}))})]})})),qt=t(29),Xt=t(39),Ut=M.a.div(Qe||(Qe=Object(I.a)(["\n    width:100%;\n    height:100vh;\n    position:fixed;\n    margin:0;\n    padding:0;\n    top:0;\n    background:white;\n    z-index:999;\n    transition: 0.3s ease-in-out;\n\n    &.hidden{\n        opacity:0;\n        margin-left: -100%;\n    }\n\n"]))),Jt=M.a.div(De||(De=Object(I.a)(["\n    width:100%;\n    height:100%;\n    display:flex;\n    justify-content: start;\n    align-items: center;\n    flex-direction: column;\n"]))),Wt=M.a.div(ve||(ve=Object(I.a)(["\n    display:flex;\n    justify-content: flex-end;\n    align-items: center;\n    height:80px;\n    width:calc(100% - 40px);\n    padding-right:40px;\n    color:black;\n    font-size: 24px;\n"]))),Vt=M.a.div(Ee||(Ee=Object(I.a)(["\n    width:100%;\n    height:80px;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    \n"]))),Zt=Object(M.a)(F.b)(Ie||(Ie=Object(I.a)(["\n    color:black;\n    text-decoration: none;\n    margin:8px 0;\n    text-decoration: underline;\n    font-size: 18px;\n    font-weight: 400;\n\n"]))),_t=M.a.div(Me||(Me=Object(I.a)(["\n    display:flex;\n    width:100%;\n    height:auto;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n"]))),$t=M.a.div(Fe||(Fe=Object(I.a)(["\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    width:100%;\n    height:80px;\n"]))),ni=Object(M.a)(F.b)(ke||(ke=Object(I.a)(["\n    text-align: center;\n    font-size: 24px;\n    text-decoration:none;\n    font-weight: 400;\n    color:black;\n"]))),ei=M.a.div(Te||(Te=Object(I.a)(["\n    text-align: center;\n    font-size: 24px;\n    font-weight: 400;\n    color:black;\n"]))),ti=M.a.div(Ne||(Ne=Object(I.a)(["\n    display:flex;\n    width:calc(100vw - 150px);\n    justify-content: center;\n    padding-left:150px;\n    align-items: end;\n    position: absolute;\n    right:0;\n"]))),ii=M.a.div(He||(He=Object(I.a)(["\n    display:flex;\n    flex-direction:column;\n    justify-content: center;\n    align-items:center;\n    width:100%;\n    height:auto;\n\n    &.hidden{\n        display:none;\n    }\n"]))),ai=function(n){var e=Object(O.useState)(!1),t=Object(B.a)(e,2),i=t[0],a=t[1];return Object(Y.jsx)(Ut,{className:!1===n.dragToggle?"hidden":"active",children:Object(Y.jsxs)(Jt,{children:[Object(Y.jsx)(Wt,{children:Object(Y.jsx)(Xt.a,{onClick:function(){n.toggleDrag(),a(!1)}})}),Object(Y.jsx)(Vt,{children:Object(Y.jsx)(ni,{className:"heading",onClick:n.toggleDrag,to:"/",children:"Home"})}),Object(Y.jsxs)(_t,{children:[Object(Y.jsxs)($t,{onClick:function(){a(!i)},children:[Object(Y.jsx)(ei,{children:"Categories"}),Object(Y.jsx)(ti,{children:!1===i?Object(Y.jsx)(qt.a,{}):Object(Y.jsx)(qt.b,{})})]}),Object(Y.jsxs)(ii,{onClick:function(){n.toggleDrag(),a(!1)},className:!1===i?"hidden":"active",children:[Object(Y.jsx)(Zt,{to:"/shop",children:"All Items"}),Object(Y.jsx)(Zt,{to:"/category/Super_Mario",children:"Super Mario "}),Object(Y.jsx)(Zt,{to:"/category/The_Legend_of_Zelda",children:"The Legend of Zelda"}),Object(Y.jsx)(Zt,{to:"/category/Animal_Crossing",children:"Animal Crossing"}),Object(Y.jsx)(Zt,{to:"/category/Star_Fox",children:"Star Fox"}),Object(Y.jsx)(Zt,{to:"/category/Metroid",children:"Metroid"}),Object(Y.jsx)(Zt,{to:"/category/Splatoon",children:"Splatoon"}),Object(Y.jsx)(Zt,{to:"/category/Pokemon",children:"Pokemon"}),Object(Y.jsx)(Zt,{to:"/category/Kirby",children:"Kirby"}),Object(Y.jsx)(Zt,{to:"/category/Fire_Emblem",children:"Fire Emblem"}),Object(Y.jsx)(Zt,{to:"/category/Monster_Hunter",children:"Monster Hunter"})]})]}),Object(Y.jsx)(Vt,{children:Object(Y.jsx)(ni,{className:"heading",onClick:n.toggleDrag,to:"/cart",children:"Cart"})})]})})};var ci=function(){var n=Object(O.useState)(!1),e=Object(B.a)(n,2),t=e[0],i=e[1],a=function(){i(!t)};return Object(Y.jsx)(tn.a,{store:kn,children:Object(Y.jsxs)(F.a,{children:[Object(Y.jsx)(en,{toggleDrag:a}),Object(Y.jsx)(ai,{dragToggle:t,toggleDrag:a}),Object(Y.jsxs)(vt.c,{children:[Object(Y.jsx)(vt.a,{exact:!0,path:"/",component:G}),Object(Y.jsx)(vt.a,{exact:!0,path:"/shop",component:Ht}),Object(Y.jsx)(vt.a,{exact:!0,path:"/item/:id",component:at}),Object(Y.jsx)(vt.a,{exact:!0,path:"/cart",component:Dt}),Object(Y.jsx)(vt.a,{exact:!0,path:"/category/:id",component:Rt})]})]})})};C.a.render(Object(Y.jsx)(w.a.StrictMode,{children:Object(Y.jsx)(ci,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.20ac5161.chunk.js.map