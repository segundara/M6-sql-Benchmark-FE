(this["webpackJsonpproduct-sql-react"]=this["webpackJsonpproduct-sql-react"]||[]).push([[0],{109:function(e,t,a){e.exports=a(162)},114:function(e,t,a){},116:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},117:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),s=(a(114),a(6)),i=a.n(s),l=a(106),u=a(10),m=a(17),d=a(18),p=a(20),h=a(19),f=(a(116),a(117),a(38)),g=a(11),v=a(178),E=a(177),y=a(167),b=a(30),w=a(29),P=(a(76),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{collapseOnSelect:!0,expand:"lg"},r.a.createElement(f.b,{to:"/M6-sql-Benchmark-FE"},r.a.createElement(v.a.Brand,null,"Strive-Mazon")),r.a.createElement(v.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(v.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(E.a,{className:"mr-auto"},r.a.createElement(f.b,{to:"/backoffice",className:"/backoffice"===this.props.location.pathname?"nav-link active shadow-lg border-bottom":"nav-link"},"Backoffice")),"/backoffice"===this.props.location.pathname?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{icon:w.c,className:"mt-4",onClick:function(){return e.props.history.push("/checkout")}}),r.a.createElement(y.a,{variant:"info"},this.props.updateProductInCart?this.props.updateProductInCart:0))))}}]),a}(r.a.Component)),x=Object(g.e)(P),k=a(74),N=a(168),j=a(169),C=a(101),O=a(170),S=a(102),I=a(180),z=a(181),T=a(175),R=a(176),D=a(64),M=a(33),K=a(82),B=a.n(K);function q(e){var t=e.children,a=e.eventKey,c=e.callback,o=Object(n.useContext)(M.a),s=Object(D.b)(a,(function(){return c&&c(a)})),i=o===a;return r.a.createElement("div",{onClick:s,style:{cursor:"pointer",display:"flex",justifyContent:"space-between",color:"#fff",fontSize:"1rem",fontWeight:"900",padding:"0.5rem 1rem",fontFamily:"sans-serif"}},t,r.a.createElement(b.a,{style:{height:"auto"},icon:i?w.b:w.a}))}var F=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={product:[],productid:null,addReview:!1,editModal:!1,newReviewComment:{comment:""},newReviewRate:{rate:1},reviews:[],photo:""},e.handleComment=function(t){e.setState({newReviewComment:{comment:t.currentTarget.value}})},e.handleRating=function(t){e.setState({newReviewRate:{rate:parseInt(t)}})},e.fetchDetails=Object(u.a)(i.a.mark((function t(){var a,n,r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://strive-mazon.azurewebsites.net","/products/")+e.props.match.params.id);case 2:if(!(a=t.sent).ok){t.next=8;break}return t.next=6,a.json();case 6:n=t.sent,e.setState({product:n.data});case 8:return t.next=10,fetch("".concat("https://strive-mazon.azurewebsites.net","/products/")+e.props.match.params.id+"/reviews");case 10:if(!(r=t.sent).ok){t.next=16;break}return t.next=14,r.json();case 14:c=t.sent,e.setState({reviews:c.data});case 16:case"end":return t.stop()}}),t)}))),e.addReview=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),console.log(e.state.newReview),n=Object(k.a)(Object(k.a)(Object(k.a)({},e.state.newReviewComment),e.state.newReviewRate),{},{productid:e.props.match.params.id}),t.next=5,fetch("".concat("https://strive-mazon.azurewebsites.net","/reviews"),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 5:t.sent.ok&&(e.setState({addReview:!1,newReviewComment:{comment:""},newReviewRate:{rate:1}}),e.fetchDetails());case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteReview=function(){var t=Object(u.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://strive-mazon.azurewebsites.net","/reviews/")+a,{method:"DELETE"});case 2:t.sent,e.fetchDetails();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchDetails()}},{key:"render",value:function(){var e=this;return console.log(this.state.reviews),console.log(this.state.product),r.a.createElement(N.a,{className:"py-5"},r.a.createElement(j.a,null,this.state.product&&r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{md:3,className:"mt-5"},r.a.createElement(O.a,{src:this.state.product.image_url,style:{height:"20rem",width:"20rem"}})),r.a.createElement(C.a,{md:7,className:"mt-5 detail"},r.a.createElement("div",{className:"w-50"},r.a.createElement("p",null,r.a.createElement("h3",null,this.state.product.name)),r.a.createElement("p",null,r.a.createElement("span",null,r.a.createElement("strong",null,"Description:")),r.a.createElement("span",null," ",this.state.product.description)),r.a.createElement("p",null,r.a.createElement("span",null,r.a.createElement("strong",null,"Brand:")),r.a.createElement("span",null," ",this.state.product.brand))),r.a.createElement("div",{className:"d-flex justify-content-between w-50"},r.a.createElement(y.a,{variant:"info",style:{lineHeight:"2rem",fontSize:"large"}},"\u20ac",this.state.product.price),r.a.createElement(S.a,{variant:"secondary",onClick:function(){return e.setState({addReview:!0})}},"Add review")),r.a.createElement("div",{className:"d-flex justify-content-center mt-4 w-75"},this.state.reviews.length>0?r.a.createElement(I.a,{style:{width:"70%"}},r.a.createElement(z.a,{className:"accordion-card"},r.a.createElement(q,{as:z.a.Header,eventKey:"1"},"See customers' reviews!"),r.a.createElement(I.a.Collapse,{eventKey:"1"},r.a.createElement(r.a.Fragment,null,this.state.reviews.map((function(t){return r.a.createElement(z.a.Body,{key:t._id},r.a.createElement(B.a,{value:t.rate,size:24,edit:!1}),t.comment,r.a.createElement(S.a,{className:"ml-3",variant:"danger",onClick:function(){return e.deleteReview(t._id)}},"Delete"))})))))):null)))),r.a.createElement(T.a,{show:this.state.addReview,onHide:function(){return e.setState({addReview:!1,productid:null,newReviewComment:{comment:""},newReviewRate:{rate:1}})}},r.a.createElement(T.a.Body,null,r.a.createElement(R.a,{onSubmit:this.addReview},r.a.createElement(j.a,{className:"d-flex justify-content-center"},r.a.createElement(C.a,{md:8},r.a.createElement(R.a.Group,{controlId:"comment"},r.a.createElement(R.a.Label,null,"Comment"),r.a.createElement(R.a.Control,{value:this.state.newReviewComment.comment,onChange:this.handleComment,type:"text",placeholder:"Your comment for the product"})))),r.a.createElement(j.a,{className:"d-flex justify-content-center"},r.a.createElement(C.a,{md:8},r.a.createElement(R.a.Label,null,"Rate the product"),r.a.createElement(B.a,{count:5,value:this.state.newReviewRate.rate,onChange:this.handleRating,size:24,activeColor:"#ffd700"}))),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(S.a,{variant:"primary",type:"submit"},"Add review"))))))}}]),a}(n.Component),A=a(171),_=a(172),L=a(107),U=a(173),W=a(174),H=a(68),J=a.n(H),Y=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).getNumberOfProduct=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("https://strive-mazon.azurewebsites.net","/products"),e.next=3,fetch(t).then((function(e){return e.json()})).then((function(e){if(n.setState({totalProducts:e.count}),e.data.length>0){for(var t=Object.keys(e.data[0]),a=[],r=0;r<t.length;r++){var c=t[r];"name"!==c&&"brand"!==c&&"description"!==c&&"category"!==c&&"price"!==c||a.push(c)}n.setState({sortingKeys:a})}n.getPages(e.count)}));case 3:case"end":return e.stop()}}),e)}))),n.getPages=function(e){for(var t=[],a=1;a<=Math.ceil(e/n.state.numPerPage);a++)t.push(a);n.setState({pageNumbers:t})},n.changePage=function(e){n.setState({currentPageNum:e}),n.dataInPages(e)},n.dataInPages=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,r,c,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("..."!==n.state.selectedKey){e.next=7;break}return r=t*n.state.numPerPage-n.state.numPerPage,c="".concat("https://strive-mazon.azurewebsites.net","/products?limit=").concat(n.state.numPerPage,"&offset=").concat(r),e.next=5,fetch(c).then((function(e){return e.json()})).then((function(e){return n.setState({products:e.data})}));case 5:e.next=12;break;case 7:return a=n.state.selectedKey,o=t*n.state.numPerPage-n.state.numPerPage,s="".concat("https://strive-mazon.azurewebsites.net","/products?limit=").concat(n.state.numPerPage,"&offset=").concat(o,"&sort=").concat(a,"&order=").concat(n.state.orderKey),e.next=12,fetch(s).then((function(e){return e.json()})).then((function(e){return n.setState({products:e.data})}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getOrderBy=function(e){n.setState({orderKey:e})},n.sortedList=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.state.currentPageNum*n.state.numPerPage-n.state.numPerPage,r="".concat("https://strive-mazon.azurewebsites.net","/products?limit=").concat(n.state.numPerPage,"&offset=").concat(a,"&sort=").concat(t,"&order=").concat(n.state.orderKey),e.next=4,fetch(r).then((function(e){return e.json()})).then((function(e){return n.setState({products:e.data})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.orderedList=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.state.currentPageNum*n.state.numPerPage-n.state.numPerPage,r="".concat("https://strive-mazon.azurewebsites.net","/products?limit=").concat(n.state.numPerPage,"&offset=").concat(a,"&sort=").concat(n.state.selectedKey,"&order=").concat(t),e.next=4,fetch(r).then((function(e){return e.json()})).then((function(e){return n.setState({products:e.data})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleSelect=function(e){n.setState({selectedKey:e})},n.componentDidMount=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.getNumberOfProduct(),n.dataInPages(n.state.currentPageNum);case 2:case"end":return e.stop()}}),e)}))),n.saveImg=function(e){n.setState({photo:e.target.files[0]})},n.updateProductInfo=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("product",n.state.photo),e.next=5,fetch("".concat("https://strive-mazon.azurewebsites.net","/products/")+n.state.productid,{method:"PUT",body:JSON.stringify(n.state.editProductInfo),headers:{"Content-Type":"application/json"}});case 5:return r=e.sent,e.next=8,fetch("".concat("https://strive-mazon.azurewebsites.net","/products/")+n.state.productid+"/upload",{method:"POST",body:a});case 8:e.sent,r.ok&&(n.setState({editModal:!1}),n.dataInPages());case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.editInfo=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://strive-mazon.azurewebsites.net","/products/")+t);case 2:if(!(a=e.sent).ok){e.next=9;break}return e.next=6,a.json();case 6:r=e.sent,console.log(r),n.setState({editProductInfo:{name:r.data.name,brand:r.data.brand,description:r.data.description,category:r.data.category,price:r.data.price},productid:r.data._id,editModal:!0});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.editSingleProductInfo=function(e){var t=n.state.editProductInfo,a=e.currentTarget.id;console.log(a),t[a]=e.currentTarget.value,n.setState({editProductInfo:t})},n.getProductInfo=function(e){var t=n.state.newProduct,a=e.currentTarget.id;console.log(a),t[a]=e.currentTarget.value,n.setState({newProduct:t})},n.addNewproduct=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a="".concat("https://strive-mazon.azurewebsites.net","/products"),e.prev=2,e.next=5,fetch(a,{method:"POST",body:JSON.stringify(n.state.newProduct),headers:{"Content-Type":"application/json"}});case 5:if(r=e.sent,console.log(r.json()),!r.ok){e.next=13;break}alert("Record saved!"),n.setState({newProduct:{name:"",brand:"",description:"",category:"",price:""},addModal:!1}),n.dataInPages(),e.next=17;break;case 13:return e.next=15,r.json();case 15:c=e.sent,alert(c);case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(2),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(t){return e.apply(this,arguments)}}(),n.deleteInfo=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://strive-mazon.azurewebsites.net","/products/")+t,{method:"DELETE"});case 2:e.sent.ok&&(alert("Product deleted!"),n.dataInPages());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={pageNumbers:[],products:[],totalProducts:null,numPerPage:5,currentPageNum:1,sortingKeys:[],selectedKey:"...",orderKey:"desc",orderKeysArray:["asc","desc"],newProduct:{name:"",brand:"",description:"",category:"",price:""},editProductInfo:{name:"",brand:"",description:"",category:"",price:""},addModal:!1,editModal:!1,photo:"",productid:""},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(N.a,{className:"pt-3"},this.state.pageNumbers.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{variant:"info",onClick:function(){return e.setState({addModal:!0})}},"Add new product"),r.a.createElement(A.a,{as:_.a,className:"mx-3",key:"left",id:"dropdown-button-drop-left",drop:"left",variant:"secondary",title:"Sort by ".concat(this.state.selectedKey.toUpperCase()),onSelect:this.handleSelect},this.state.sortingKeys.map((function(t,a){return r.a.createElement(L.a.Item,{key:a,eventKey:t,onClick:function(){return e.sortedList(t)}},t)}))),r.a.createElement("div",{className:"d-flex mt-3"},r.a.createElement(U.a,{variant:"info",className:"text-center"},"page ",r.a.createElement("strong",null,this.state.currentPageNum)," of ",r.a.createElement("strong",null,this.state.pageNumbers.length)),"..."!==this.state.selectedKey?r.a.createElement("div",{className:"d-flex"},r.a.createElement(U.a,{variant:"info",className:"mx-3 text-center"},"Order By ",r.a.createElement("strong",null,this.state.selectedKey.toUpperCase())),r.a.createElement(A.a,{as:_.a,className:"h-75",key:"right",id:"dropdown-button-drop-right",drop:"right",variant:"secondary",title:"".concat(this.state.orderKey.toUpperCase(),"ENDING order"),onSelect:this.getOrderBy},this.state.orderKeysArray.map((function(t,a){return r.a.createElement(L.a.Item,{key:a,eventKey:t,onClick:function(){return e.orderedList(t)}},t)})))):null),r.a.createElement(W.a,{striped:!0,bordered:!0,hover:!0,size:"sm",responsive:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),this.state.sortingKeys.map((function(e,t){return r.a.createElement("th",{key:t},e.toUpperCase())})))),r.a.createElement("tbody",null,this.state.products.map((function(t,a){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,e.state.currentPageNum>1?a=a+1+e.state.numPerPage*e.state.currentPageNum-e.state.numPerPage:a+=1),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.description),r.a.createElement("td",null,t.brand),r.a.createElement("td",null,t.price),r.a.createElement("td",null,t.category),r.a.createElement("td",null,r.a.createElement(S.a,{variant:"warning",onClick:function(){return e.editInfo(t._id)}},"edit")),r.a.createElement("td",null,r.a.createElement(S.a,{variant:"danger",onClick:function(){return e.deleteInfo(t._id)}},"delete")))})))),r.a.createElement(J.a,{threeDots:!0,totalPages:this.state.pageNumbers.length,currentPage:this.state.currentPageNum,showMax:2,prevNext:!0,activeBgColor:"#17a2b8",color:"#17a2b8",activeBorderColor:"#17a2b8",onClick:function(t){return e.changePage(t)}}),r.a.createElement(T.a,{show:this.state.editModal,onHide:function(){return e.setState({editModal:!1,editProductInfo:{name:"",brand:"",description:"",category:"",price:""}})}},r.a.createElement(T.a.Body,null,r.a.createElement(R.a,{onSubmit:this.updateProductInfo},r.a.createElement("div",{className:"form-group mt-5"},r.a.createElement("label",{for:"name"},"Product name"),r.a.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:"Input here the Product name",onChange:this.editSingleProductInfo,value:this.state.editProductInfo.name,required:!0})),r.a.createElement("div",{className:"form-group "},r.a.createElement("label",{for:"brand"},"Product brand"),r.a.createElement("input",{type:"text",className:"form-control",id:"brand",placeholder:"Input here the Product brand",onChange:this.editSingleProductInfo,value:this.state.editProductInfo.brand,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"description"},"Product description"),r.a.createElement("input",{type:"text",className:"form-control",id:"description",placeholder:"Input here the Product description",onChange:this.editSingleProductInfo,value:this.state.editProductInfo.description,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"category"},"Product category"),r.a.createElement("input",{type:"text",className:"form-control",id:"category",placeholder:"Input here the Product category",onChange:this.editSingleProductInfo,value:this.state.editProductInfo.category,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"price"},"Product price"),r.a.createElement("input",{type:"text",className:"form-control",id:"price",placeholder:"Input here the Product price",onChange:this.editSingleProductInfo,value:this.state.editProductInfo.price,required:!0})),r.a.createElement("div",null,r.a.createElement("input",{type:"file",name:"file",onChange:this.saveImg})),r.a.createElement("div",{className:"form-group"},r.a.createElement(S.a,{className:"btn btn-primary mt-4",type:"submit"},"Update Product Info"))))),r.a.createElement(T.a,{show:this.state.addModal,onHide:function(){return e.setState({addModal:!1,newProduct:{name:"",surname:"",email:"",dateofbirth:"",country:""}})}},r.a.createElement(T.a.Body,null,r.a.createElement(R.a,{onSubmit:this.addNewproduct},r.a.createElement("div",{className:"form-group mt-5"},r.a.createElement("label",{for:"name"},"Product name"),r.a.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:"Input here the Product name",onChange:this.getProductInfo,value:this.state.newProduct.name,required:!0})),r.a.createElement("div",{className:"form-group "},r.a.createElement("label",{for:"surname"},"Product brand"),r.a.createElement("input",{type:"text",className:"form-control",id:"brand",placeholder:"Input here the Product brand",onChange:this.getProductInfo,value:this.state.newProduct.brand,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"eamil"},"Product description"),r.a.createElement("input",{type:"text",className:"form-control",id:"description",placeholder:"Input here the Product description",onChange:this.getProductInfo,value:this.state.newProduct.description,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"dateofbirth"},"Product category"),r.a.createElement("input",{type:"text",className:"form-control",id:"category",placeholder:"Input here the Product category",onChange:this.getProductInfo,value:this.state.newProduct.category,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"country"},"Product price"),r.a.createElement("input",{type:"number",className:"form-control",id:"price",placeholder:"Input here the Product price",onChange:this.getProductInfo,value:this.state.newProduct.price,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement(S.a,{className:"btn btn-primary mt-4",type:"submit"},"Save Product Info")))))))}}]),a}(n.Component),G=a(83),Q=a(103),V=a(179),Z=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={products:[],numOfProduct:[],numPerPage:8,currentPageNum:1,loading:!1,pageNumbers:[]},e.getNumberOfProduct=Object(u.a)(i.a.mark((function t(){var a,n,r,c,o,s,l,u,m,d,p;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=[],t.next=3,e.getCategories();case 3:if(!(n=t.sent)){t.next=40;break}r=Object(G.a)(n),t.prev=6,r.s();case 8:if((c=r.n()).done){t.next=21;break}return o=c.value,s="".concat("https://strive-mazon.azurewebsites.net","/products?category=").concat(o),t.next=13,fetch(s);case 13:if(!(l=t.sent).ok){t.next=19;break}return t.next=17,l.json();case 17:u=t.sent,a.push(u.count);case 19:t.next=8;break;case 21:t.next=26;break;case 23:t.prev=23,t.t0=t.catch(6),r.e(t.t0);case 26:return t.prev=26,r.f(),t.finish(26);case 29:return m="".concat("https://strive-mazon.azurewebsites.net","/products"),t.next=32,fetch(m);case 32:if(!(d=t.sent).ok){t.next=38;break}return t.next=36,d.json();case 36:p=t.sent,a.unshift(p.count);case 38:e.setState({numOfProduct:a}),e.getPages(a);case 40:case"end":return t.stop()}}),t,null,[[6,23,26,29]])}))),e.getPages=function(t){for(var a=[],n=0;n<t.length;n++){for(var r=t[n],c=[],o=1;o<=Math.ceil(r/e.state.numPerPage);o++)c.push(o);a.push(c)}e.setState({pageNumbers:a})},e.changePage=function(t){t>1?e.setState({currentPageNum:t}):e.setState({currentPageNum:1}),e.fetchProducts()},e.getCategories=Object(u.a)(i.a.mark((function e(){var t,a,n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("https://strive-mazon.azurewebsites.net","/products"),e.next=3,fetch(t);case 3:if(!(a=e.sent).ok){e.next=12;break}return e.next=7,a.json();case 7:return n=e.sent,r=n.data.map((function(e){return e.category})),c=[],r.map((function(e){return c.includes(e)?null:c.push(e)})),e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)}))),e.fetchProducts=Object(u.a)(i.a.mark((function t(){var a,n,r,c,o,s,l,u,m,d,p,h,f,g,v;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),a=[],t.next=4,e.getCategories();case 4:if(!(n=t.sent)){t.next=48;break}r=e.state.currentPageNum*e.state.numPerPage-e.state.numPerPage,c=Object(G.a)(n),t.prev=8,c.s();case 10:if((o=c.n()).done){t.next=26;break}return s=o.value,l={},u="".concat("https://strive-mazon.azurewebsites.net","/products?category=").concat(s,"&limit=").concat(e.state.numPerPage,"&offset=").concat(r),t.next=16,fetch(u);case 16:if(!(m=t.sent).ok){t.next=24;break}return t.next=20,m.json();case 20:d=t.sent,l.category=s,l.items=d.data,a.push(l);case 24:t.next=10;break;case 26:t.next=31;break;case 28:t.prev=28,t.t0=t.catch(8),c.e(t.t0);case 31:return t.prev=31,c.f(),t.finish(31);case 34:return p={},h="All Products",f="".concat("https://strive-mazon.azurewebsites.net","/products?limit=").concat(e.state.numPerPage,"&offset=").concat(r),t.next=39,fetch(f);case 39:if(!(g=t.sent).ok){t.next=47;break}return t.next=43,g.json();case 43:v=t.sent,p.category=h,p.items=v.data,a.unshift(p);case 47:e.setState({products:a,loading:!1});case 48:case"end":return t.stop()}}),t,null,[[8,28,31,34]])}))),e.linkToDetails=function(t){e.props.history.push("/productDetails/"+t)},e.addToCart=function(){var t=Object(u.a)(i.a.mark((function t(a){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=1,r="".concat("https://strive-mazon.azurewebsites.net","/cart"),t.next=4,fetch(r,{method:"POST",body:JSON.stringify({productid:a,userid:n}),headers:{"Content-Type":"application/json"}});case 4:t.sent.ok&&e.props.sendCartUpdate(a,n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getNumberOfProduct(),this.fetchProducts()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{fluid:!0},this.state.loading&&r.a.createElement(Q.a,Object.assign({style:{width:"100%",height:"100vh"},viewBox:"0 0 1500 800",height:800,width:1500},this.props),r.a.createElement("rect",{x:"5",y:"45",rx:"4",ry:"4",width:"220",height:"35"}),r.a.createElement("rect",{x:"5",y:"85",rx:"4",ry:"4",width:"220",height:"35"}),r.a.createElement("rect",{x:"5",y:"125",rx:"4",ry:"4",width:"220",height:"35"}),r.a.createElement("rect",{x:"5",y:"165",rx:"4",ry:"4",width:"220",height:"35"}),r.a.createElement("rect",{x:"250",y:"43",rx:"0",ry:"0",width:"280",height:"300"}),r.a.createElement("rect",{x:"550",y:"43",rx:"0",ry:"0",width:"280",height:"300"}),r.a.createElement("rect",{x:"850",y:"43",rx:"0",ry:"0",width:"280",height:"300"}),r.a.createElement("rect",{x:"1150",y:"43",rx:"0",ry:"0",width:"280",height:"300"}),r.a.createElement("rect",{x:"250",y:"400",rx:"2",ry:"2",width:"280",height:"300"}),r.a.createElement("rect",{x:"550",y:"400",rx:"2",ry:"2",width:"280",height:"300"}),r.a.createElement("rect",{x:"850",y:"400",rx:"2",ry:"2",width:"280",height:"300"}),r.a.createElement("rect",{x:"1150",y:"400",rx:"2",ry:"2",width:"280",height:"300"})),this.state.products&&this.state.products.length>0&&r.a.createElement("div",{className:"inStore"},r.a.createElement(V.a.Container,{id:"left-tabs-example",defaultActiveKey:"0",onSelect:function(){return e.changePage(1)}},r.a.createElement(j.a,null,r.a.createElement(C.a,{md:2},r.a.createElement(E.a,{variant:"pills",className:"flex-column"},this.state.products.map((function(t,a){return r.a.createElement(E.a.Item,{key:a},r.a.createElement(E.a.Link,{eventKey:a,className:"d-flex justify-content-between"},r.a.createElement("small",null,r.a.createElement("b",null,t.category)),r.a.createElement(y.a,{variant:"light"},r.a.createElement("span",null,e.state.numOfProduct[a]))))})))),r.a.createElement(C.a,{md:10},r.a.createElement(V.a.Content,null,this.state.products.map((function(t,a){return r.a.createElement(V.a.Pane,{key:a,eventKey:a},t.items.length>0&&e.state.pageNumbers&&e.state.pageNumbers.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex flex-wrap"},t.items.map((function(t){return r.a.createElement(z.a,{key:t._id,className:"productCard"},r.a.createElement(z.a.Img,{variant:"top",src:t.image_url,height:"40%"}),r.a.createElement(z.a.Body,null,r.a.createElement(z.a.Title,null,t.name),r.a.createElement("label",null,"Brand: ",t.brand),r.a.createElement("h4",null," \u20ac",t.price),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(S.a,{variant:"info",onClick:function(){return e.linkToDetails(t._id)}},"detail"),r.a.createElement(S.a,{variant:"secondary",onClick:function(){return e.addToCart(t._id)}},"add to cart",r.a.createElement(b.a,{icon:w.c})))))}))),r.a.createElement("div",{className:"d-flex justify-content-between mt-2 mainPageFooter"},r.a.createElement(J.a,{threeDots:!0,totalPages:e.state.pageNumbers[a].length,currentPage:e.state.currentPageNum,showMax:2,prevNext:!0,activeBgColor:"#17a2b8",color:"#17a2b8",activeBorderColor:"#17a2b8",onClick:function(t){return e.changePage(t)}}),r.a.createElement(U.a,{variant:"light"},"page"," ",r.a.createElement("strong",null,e.state.currentPageNum)," ","of"," ",r.a.createElement("strong",null,e.state.pageNumbers[a].length)))),!e.state.loading&&t.items.length<1&&r.a.createElement("p",{className:"text-center"},r.a.createElement("strong",null,"No product in store")))})))))))))}}]),a}(r.a.Component),$=Object(g.e)(Z),X=a(104),ee=a(41),te=a(108),ae=a(105),ne=a.n(ae),re=Object(g.e)((function(e){console.log(e.history);var t=Object(n.useState)(!1),a=Object(te.a)(t,2),c=a[0],o=a[1],s=Object(ee.useStripe)(),l=Object(ee.useElements)(),m=function(){var t=Object(u.a)(i.a.mark((function t(a){var n,r,c,u,m,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,s.createPaymentMethod({type:"card",card:l.getElement(ee.CardElement)});case 3:if(n=t.sent,r=n.error,c=n.paymentMethod,r){t.next=28;break}return console.log("Stripe 23 | token generated!",c),t.prev=8,u=c.id,t.next=12,ne.a.post("".concat("https://strive-mazon.azurewebsites.net","/cart/stripe/charge"),{amount:e.paymentTotal,id:u});case 12:if(m=t.sent,console.log("Stripe 35 | data",m.data.success),!m.data.success){t.next=21;break}return console.log("CheckoutForm.js 25 | payment successful!"),d="".concat("https://strive-mazon.azurewebsites.net","/cart/1"),t.next=19,fetch(d,{method:"DELETE"});case 19:t.sent.ok&&(e.emptyCart(0),o(!0),setTimeout((function(){o(!1),e.history.push("".concat("/M6-sql-Benchmark-FE"))}),5e3));case 21:t.next=26;break;case 23:t.prev=23,t.t0=t.catch(8),console.log("CheckoutForm.js 28 | ",t.t0);case 26:t.next=29;break;case 28:console.log(r.message);case 29:case"end":return t.stop()}}),t,null,[[8,23]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(N.a,{className:"text-center pt-3"},r.a.createElement("div",{style:{maxWidth:"50%",margin:"auto"}},r.a.createElement("h4",null,"Enter your card details to complete the payment"),r.a.createElement(U.a,{variant:"info"},r.a.createElement("strong",null,"Total Purchase (\u20ac",e.paymentTotal,")")),r.a.createElement(R.a,{onSubmit:m,style:{maxWidth:"75%",display:"flex",margin:"auto",flexDirection:"column"}},r.a.createElement(ee.CardElement,{className:"my-5"}),r.a.createElement("button",{id:"payBtn"},"Pay Now")),r.a.createElement(U.a,{variant:"info",show:c,className:"mt-3"},r.a.createElement("strong",null,"Payment accepted and your goods are on the way! Thank you for your purchase and hope to see you again!"))))})),ce=Object(X.a)("pk_test_51HiMfGF0BTR6mhRYaP0W68izWmkcFUYNqvzshZIwb8d3MyAuViC8HFmP8WU4TQEOBsjlAqLn9tOr5RacYxeit67q00iqLQn6QY"),oe=Object(g.e)((function(e){var t=e.paymentTotal,a=e.emptyCart;return r.a.createElement(ee.Elements,{stripe:ce},r.a.createElement(re,{paymentTotal:t,emptyCart:a}))})),se=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={cartTotal:0,cartItems:[]},e.makePayment=function(){e.props.paymentTotal(e.state.cartTotal),e.props.history.push("/payments")},e.removeFromCart=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat("https://strive-mazon.azurewebsites.net","/cart/1/").concat(a),t.next=3,fetch(n,{method:"DELETE"});case 3:t.sent.ok&&e.showCartDetails();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.showCartDetails=Object(u.a)(i.a.mark((function t(){var a,n,r,c,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat("https://strive-mazon.azurewebsites.net","/cart/1"),t.next=3,fetch(a);case 3:if(!(n=t.sent).ok){t.next=9;break}return t.next=7,n.json();case 7:(r=t.sent).length>0&&(c=r.map((function(e){return parseFloat(e.total)})),o=c.reduce((function(e,t){return e+t})),e.setState({cartItems:r,cartTotal:o}),console.log(c));case 9:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){e.showCartDetails()},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.state.cartItems),r.a.createElement(N.a,null,r.a.createElement("div",{className:"text-center mt-5"},r.a.createElement(W.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"name"),r.a.createElement("th",null,"unit price"),r.a.createElement("th",null,"quantity"),r.a.createElement("th",null,"total price"))),r.a.createElement("tbody",null,this.state.cartItems.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("th",null,a+1),r.a.createElement("th",null,t.name),r.a.createElement("th",null,t.unitary_price),r.a.createElement("th",null,t.quantity),r.a.createElement("th",null,t.total),r.a.createElement("th",null,r.a.createElement(S.a,{variant:"danger",onClick:function(){return e.removeFromCart(t._id)}},r.a.createElement(b.a,{icon:w.d}))))})),r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null),r.a.createElement("th",null),r.a.createElement("th",null,"Overall Total"),r.a.createElement("th",null,"\u20ac",this.state.cartTotal)))),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(S.a,{variant:"info",onClick:function(){return e.props.history.push("".concat("/M6-sql-Benchmark-FE"))}},"Continue shopping"),r.a.createElement(S.a,{variant:"success",onClick:function(){return e.makePayment()}},"Proceed to Payment"))))}}]),a}(r.a.Component),ie=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={count:0,productidArray:[],paymentTotal:0},e.addToCart=function(){var t=Object(u.a)(i.a.mark((function t(a,n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.state.productidArray.includes(a)?e.setState({count:e.state.count}):(r=[].concat(Object(l.a)(e.state.productidArray),[a]),e.setState({productidArray:r,count:e.state.count+1}));case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.emptyCart=function(t){e.setState({count:t})},e.setPayment=function(t){e.setState({paymentTotal:t})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.state.productidArray),r.a.createElement(f.a,null,r.a.createElement(x,{updateProductInCart:this.state.count}),r.a.createElement(g.a,{path:"/M6-sql-Benchmark-FE",exact:!0,render:function(t){return r.a.createElement($,Object.assign({},t,{sendCartUpdate:e.addToCart}))}}),r.a.createElement(g.a,{path:"/productDetails/:id",component:F}),r.a.createElement(g.a,{path:"/payments",render:function(t){return r.a.createElement(oe,Object.assign({},t,{paymentTotal:e.state.paymentTotal,emptyCart:e.emptyCart}))}}),r.a.createElement(g.a,{path:"/checkout",render:function(t){return r.a.createElement(se,Object.assign({},t,{paymentTotal:e.setPayment}))}}),r.a.createElement(g.a,{path:"/backoffice",component:Y}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(161);o.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.0fef22c1.chunk.js.map