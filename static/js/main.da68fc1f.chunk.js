(this["webpackJsonpstarter-app"]=this["webpackJsonpstarter-app"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(10),r=c.n(a),i=(c(22),c(23),c(24),c(1));var o=function(e){return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("i",{class:"material-icons",children:"theater_comedy"})," ",e.title," ",Object(i.jsx)("i",{class:"material-icons",children:"theater_comedy"})]})};c(26);var j=function(e){return Object(i.jsx)("div",{className:"footer",children:e.title})},l=c(11),b=c.n(l),u=c(13),d=c(6),O=(c(28),c(36)),h=c(35),x=c(37);var m=function(e){var t=Object(n.useState)(!1),c=Object(d.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(0),o=Object(d.a)(r,2),j=o[0],l=o[1],m=Object(n.useState)(""),p=Object(d.a)(m,2),v=p[0],f=p[1],g=Object(n.useState)(""),N=Object(d.a)(g,2),y=N[0],S=N[1],T=Object(n.useState)(""),w=Object(d.a)(T,2),P=w[0],C=w[1],B=Object(n.useState)(""),I=Object(d.a)(B,2),k=I[0],R=I[1],D=Object(n.useState)(""),F=Object(d.a)(D,2),M=F[0],A=F[1],E=Object(n.useState)(""),q=Object(d.a)(E,2),G=q[0],J=q[1],L=Object(n.useState)(0),_=Object(d.a)(L,2),U=_[0],Y=_[1],z=Object(n.useState)(""),H=Object(d.a)(z,2),K=H[0],Q=H[1],V=Object(n.useState)(""),W=Object(d.a)(V,2),X=W[0],Z=W[1];function $(){return($=Object(u.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://www.omdbapi.com/?apikey=".concat("84f9df6","&i=").concat(j,"&type=movie&r=json"),e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:c=e.sent,console.log(c),f(c.Title),console.log("Title: "+c.Title),console.log(v),S(c.Poster),C(c.Type),R(c.Released),A(c.Genre),J(c.Runtime),Y(c.imdbRating),Q(c.Plot),Z(c.Director);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){s&&function(){$.apply(this,arguments)}()}),[j]),Object(i.jsxs)("div",{className:"moviesGrid",children:[e.movies.map((function(e){var t=e.imdbID;return Object(i.jsx)(O.a,{className:"card",children:Object(i.jsxs)("div",{className:"movieContainer",onClick:function(e){var t;t=e.currentTarget,l(t.id),console.log(t.id),a(!0)},id:t,children:[Object(i.jsx)(O.a.Img,{variant:"top",src:"N/A"===e.Poster?"https://placehold.it/198x264&text=Image+Not+Found":e.Poster,className:"movieImage"}),Object(i.jsxs)(O.a.Body,{className:"cardBody",children:[Object(i.jsx)(O.a.Title,{children:Object(i.jsx)("h2",{children:Object(i.jsx)("b",{children:e.Title})})}),Object(i.jsx)(O.a.Text,{style:{margin:5},children:Object(i.jsx)("b",{children:e.Year})})]})]})})})),Object(i.jsx)(h.a,{show:s,centered:!0,children:Object(i.jsxs)(O.a,{className:"modalMovieContainer",style:{width:"50rem"},children:[Object(i.jsx)(O.a.Img,{variant:"top",className:"modalMovieImage",src:"N/A"===y?"https://placehold.it/198x264&text=Image+Not+Found":y}),Object(i.jsxs)(O.a.Body,{className:"modalMovieBody",style:{width:"23rem"},children:[Object(i.jsx)(O.a.Title,{children:Object(i.jsx)("h1",{children:Object(i.jsx)("b",{children:v})})}),Object(i.jsx)(O.a.Text,{className:"movieType",children:P}),Object(i.jsxs)(O.a.Text,{className:"movieRelease",children:["Release Date: ",k]}),Object(i.jsx)(O.a.Text,{className:"genreTags",children:M&&M.split(", ").map((function(e){return Object(i.jsx)("span",{children:e})}))}),Object(i.jsxs)(O.a.Text,{children:["Runtime: ",G]}),Object(i.jsx)(O.a.Text,{children:Object(i.jsx)("h4",{children:Object(i.jsxs)("b",{children:["Rating: ",U," / 10 "]})})}),Object(i.jsx)(O.a.Text,{children:K}),Object(i.jsxs)(O.a.Text,{children:["Director: ",X]}),Object(i.jsx)(x.a,{className:"modalBtn",variant:"primary",onClick:function(){a(!1)},children:"Close"})]})]})})]})};var p=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),r=Object(d.a)(a,2),o=r[0],j=r[1],l=Object(n.useState)(!1),O=Object(d.a)(l,2),h=O[0],x=O[1],p=Object(n.useState)(0),v=Object(d.a)(p,2),f=v[0],g=v[1],N=Object(n.useState)(1),y=Object(d.a)(N,2),S=y[0],T=y[1],w=Object(n.useState)(0),P=Object(d.a)(w,2),C=P[0],B=P[1];function I(){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(b.a.mark((function e(){var t,n,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=encodeURIComponent(c),n="https://www.omdbapi.com/?apikey=".concat("84f9df6","&s=").concat(t,"&type=movie&r=json&page=").concat(S),console.log(n),e.next=5,fetch(n);case 5:return s=e.sent,e.next=8,s.json();case 8:s=e.sent,j(s.Search),g(s.totalResults),console.log("Total results: "+s.totalResults),console.log("Total results (state): "+f),B(Math.ceil(s.totalResults/10));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){""!==c&&I()}),[S]),Object(i.jsxs)("div",{className:"movieinfo",children:[Object(i.jsxs)("div",{className:"api-info",children:["Data provided for free by the ",Object(i.jsx)("a",{href:"http://www.omdbapi.com/",children:"OMDb"})," API."]}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),T(1),I(),x(!0)},children:[Object(i.jsx)("label",{htmlFor:"queryInput"}),Object(i.jsx)("input",{id:"queryInput",placeholder:"Enter movie title",value:c,type:"text",onChange:function(e){return s(e.target.value)}}),Object(i.jsx)("button",{className:"search",children:"Search"})]}),Object(i.jsxs)("div",{className:"navigationBtns",children:[1!==S&&0!==C&&Object(i.jsx)("button",{className:"prevBtn",onClick:function(){return T(S-1)},children:"  < Previous Page"}),0!==C&&Object(i.jsxs)("p",{children:["Showing ",Object(i.jsxs)("b",{children:[f," results"]})," over ",C," pages | Page: ",Object(i.jsx)("b",{children:S})]}),S<C&&Object(i.jsx)("button",{className:"nextBtn",onClick:function(){return T(S+1)},children:" Next Page > "})]}),h?Object(i.jsx)(m,{movies:o}):Object(i.jsx)(i.Fragment,{}),Object(i.jsx)("div",{children:0!==C&&Object(i.jsxs)("p",{children:["Showing ",Object(i.jsxs)("b",{children:[f," results"]})," over ",C," pages | Page: ",Object(i.jsx)("b",{children:S})]})}),Object(i.jsxs)("div",{className:"navigationBtns",children:[1!==S&&0!==C&&Object(i.jsx)("button",{className:"prevBtn",onClick:function(){return T(S-1)},children:"  < Previous Page"}),S<C&&Object(i.jsx)("button",{className:"nextBtn",onClick:function(){return T(S+1)},children:" Next Page > "})]})]})};var v=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{title:"Movie Search App"}),Object(i.jsx)(p,{}),Object(i.jsx)(j,{title:"2021"})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),f()}},[[32,1,2]]]);
//# sourceMappingURL=main.da68fc1f.chunk.js.map