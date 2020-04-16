(this["webpackJsonpdevf-frontend"]=this["webpackJsonpdevf-frontend"]||[]).push([[0],{42:function(e,a,t){e.exports=t(79)},76:function(e,a,t){},77:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(18),c=t.n(l),s=t(13),o=t(12),m=t(41),i=t(80),u=t(81),h=t(82),E=t(99),p=t(83),g=t(84),b=t(85),v=t(10),d=function(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),l=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{color:"light",light:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(u.a,{href:"/"},r.a.createElement(v.b,{color:"#575757"})),r.a.createElement(h.a,{onClick:function(){return c(!l)}}),r.a.createElement(E.a,{isOpen:l,navbar:!0},r.a.createElement(p.a,{className:"mr-auto",navbar:!0},r.a.createElement(g.a,null,r.a.createElement(b.a,null,r.a.createElement(s.b,{to:"/search"},"Search"))),r.a.createElement(g.a,null,r.a.createElement(b.a,null,r.a.createElement(s.b,{to:"/create-book"},"Inventory"))))))))},f=t(14),k=t(15),N=t(17),y=t(16),j=t(19),O=t.n(j),w=t(86),S=t(87),x=t(88),C=t(89),I=t(90),A=t(91),F=t(92),B=t(93),z=(t(76),t(77),function(e){Object(N.a)(t,e);var a=Object(y.a)(t);function t(){var e;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={image:e.props.image,title:e.props.title,author:e.props.author,categories:e.props.categories,language:e.props.language,publish:"",isbn:e.props.isbn,edition:e.props.edition},e}return Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-4 mb-3"},r.a.createElement(w.a,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement(S.a,{className:"m-2",top:!0,width:"100%",src:this.state.image,alt:"Card image cap"})),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement(x.a,{className:"p-0 m-2"},r.a.createElement(C.a,null,r.a.createElement("h5",null,this.state.title)),r.a.createElement(I.a,null,this.state.author.name),r.a.createElement(A.a,null,r.a.createElement("h6",{className:"mt-3"},"Details:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(v.a,{color:"#575757",className:"mr-2"}),this.state.isbn),r.a.createElement("li",null,r.a.createElement(v.d,{color:"#575757",className:"mr-2"}),null==this.state.language?"unknown":this.state.language),r.a.createElement("li",null,r.a.createElement(v.c,{color:"#575757",className:"mr-2"}),this.state.edition),r.a.createElement("li",null,r.a.createElement(F.a,{color:"light"},r.a.createElement(v.h,{className:"mr-2"}),null==this.state.categories?"unknown":this.state.categories)))))),r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(B.a,{className:"btn btn-dark m-2 ml-1",size:"sm"},r.a.createElement(v.f,null)),r.a.createElement(B.a,{className:"btn btn-success mr-0",size:"sm"},r.a.createElement(v.e,null))))))}}]),t}(n.Component)),D=t(94),J=t(95),M=t(100),W=function(e){Object(N.a)(t,e);var a=Object(y.a)(t);function t(){var e;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={title:"Which book do you want to consult?",search:"",message:"",books:[]},e.inputSearch=function(a){switch(a.target.name){case"search":e.state.message="Writing...",e.setState({search:a.target.value})}},e.submit=function(){var a=e.state.search,t="https://api-bookstores.herokuapp.com/api/v1/books/".concat(a);O.a.get(t).then((function(t){e.state.title=a;var n=t.data;e.setState({books:n})})).catch((function(e){return console.log(e)}))},e}return Object(k.a)(t,[{key:"componentDidMount",value:function(){this.state.message="Loading...",this.submit()}},{key:"renderBooks",value:function(){var e=this.state.books;return""==this.state.search?this.state.message="You must make a search":0===e.length?r.a.createElement("span",null,this.state.message):e.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",{className:"my-3"},e.length," books found"),r.a.createElement("div",{className:"row"},e.map((function(e){return r.a.createElement(z,{image:e.image,title:e.title,author:e.author,isbn:e.meta.isbn,language:e.meta.languages,categories:e.categories[0].title,edition:e.meta.edition})})))):void 0}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8 p-0"},r.a.createElement("h3",null,this.state.title)),r.a.createElement("div",{className:"col-lg-4 p-0"},r.a.createElement(D.a,null,r.a.createElement(J.a,{value:this.state.search,onChange:this.inputSearch,type:"text",name:"search"}),r.a.createElement(M.a,{addonType:"append"},r.a.createElement(B.a,{color:"secondary",onClick:this.submit},r.a.createElement(v.g,null))))),this.renderBooks()))}}]),t}(n.Component),L=t(96),P=t(97),R=t(98),T=function(e){Object(N.a)(t,e);var a=Object(y.a)(t);function t(){var e;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={nombre:"",precio:0,existencias:0},e.cambiarInput=function(a){switch(console.log(a.target.value),a.target.name){case"nombre":e.setState({nombre:a.target.value});break;case"precio":e.setState({precio:a.target.value});break;case"existencias":e.setState({existencias:a.target.value})}},e.manejarSubmit=function(){var a=e.state;O.a.post("https://supermercado-devf.herokuapp.com/api/v1/articulos",a).then((function(e){return alert("\xa1Art\xedculo creado!")})).catch((function(e){return alert("Error al crear art\xedculo")}))},e}return Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Crear Art\xedculo"),r.a.createElement(L.a,null,r.a.createElement(P.a,null,r.a.createElement(R.a,null,"Nombre"),r.a.createElement(J.a,{value:this.state.nombre,onChange:this.cambiarInput,type:"text",name:"nombre"})),r.a.createElement(P.a,null,r.a.createElement(R.a,null,"Precio"),r.a.createElement(J.a,{value:this.state.precio,onChange:this.cambiarInput,type:"number",name:"precio"})),r.a.createElement(P.a,null,r.a.createElement(R.a,null,"Existencias"),r.a.createElement(J.a,{value:this.state.existencias,onChange:this.cambiarInput,type:"number",name:"existencias"})),r.a.createElement(B.a,{onClick:this.manejarSubmit},"Submit")))}}]),t}(n.Component),Y=[r.a.createElement(r.a.Fragment,{key:"Routes"},r.a.createElement(o.a,{exact:!0,path:"/search",component:W}),r.a.createElement(o.a,{exact:!0,path:"/create-book",component:T}))];var q=function(){return r.a.createElement(s.a,null,r.a.createElement(d,null),r.a.createElement("div",{className:"container mt-4"},r.a.createElement(o.c,null,Y)))};t(78);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.3296a570.chunk.js.map