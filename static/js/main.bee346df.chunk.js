/*! For license information please see main.bee346df.chunk.js.LICENSE.txt */
(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{19:function(e,t,a){},21:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),c=a.n(s),o=(a(19),a(7)),i=a.n(o),u=a(8),l=a(11),h=a(3),d=a(4),m=a(6),b=a(5),p=(a(21),a(12)),j=a(1),f=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=Object(p.a)(e);(0,a.props.onSubmit)(a.state.value)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.value,t=this.handleChange,a=this.handleSubmit;return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{className:"SearchForm",onSubmit:a,children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:t})]})})}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"handleClick",value:function(e,t){this.props.openModal(e,t)}},{key:"render",value:function(){var e=this,t=this.props,a=t.smallImg,n=t.largeImg,r=t.alt;return Object(j.jsx)("li",{className:"ImageGalleryItem",children:Object(j.jsx)("img",{src:a,alt:r,className:"ImageGalleryItem-image",onClick:function(){return e.handleClick(n,r)}})})}}]),a}(n.Component);function O(e){var t=e.images,a=e.openModal;return Object(j.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,s=e.tags;return Object(j.jsx)(g,{smallImg:n,largeImg:r,alt:s,openModal:a},t)}))})}var v=function(){function e(){Object(h.a)(this,e),this.BASE_KEY="21932994-b9f805e2b70fd6b5c6454ae40",this.BASE_URL="https://pixabay.com/api/",this.PAGE_COUNTER=0,this.Q=""}return Object(d.a)(e,[{key:"fetchImages",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.Q!==t&&(this.Q=t,this.PAGE_COUNTER=0),this.PAGE_COUNTER=this.PAGE_COUNTER+1,e.next=4,fetch("".concat(this.BASE_URL,"?key=").concat(this.BASE_KEY,"&q=").concat(t,"&page=").concat(this.PAGE_COUNTER,"&image_type=photo&orientation=horizontal&per_page=12"));case 4:return a=e.sent,e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),S=a(14),x=a.n(S);function E(){return Object(j.jsx)(x.a,{type:"Puff",color:"#00BFFF",height:100,width:100})}var y=a(2),N=a.n(y);function w(e){var t=e.modal,a=t.image,n=t.tags,r=e.closeModal;return window.addEventListener("keydown",r),Object(j.jsx)("div",{className:"Overlay",onClick:r,children:Object(j.jsx)("div",{className:"Modal",children:Object(j.jsx)("img",{src:a,alt:n})})})}function M(e){var t=e.loadMore;return Object(j.jsx)("button",{className:"Button",onClick:t,children:"Load More"})}w.propTapes={closeModal:N.a.func.isRequired};var k=a(9),C=(a(43),new v),I={IDLE:"idle",PENDING:"pending"},L=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={searchValue:null,images:[],status:I.IDLE,modal:null,button:!1},e.searchService=Object(l.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.searchValue,t.prev=1,t.next=4,C.fetchImages(a).then((function(t){return t.hits.length<12?(e.setState((function(e){var a=e.images;return{images:[].concat(Object(u.a)(a),Object(u.a)(t.hits)),status:I.RESOLVED,button:!1}})),t):(e.setState((function(e){var a=e.images;return{images:[].concat(Object(u.a)(a),Object(u.a)(t.hits)),status:I.RESOLVED,button:!0}})),t)})).then((function(e){if(0===e.hits.length)throw Error("\u0448\u043e\u0437\u0430 \u0445\u0440\u0456\u043d\u044c?")}));case 4:return n=t.sent,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(1),e.notification(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e.onSubmit=function(t){e.setState({searchValue:t.trim(),status:I.PENDING})},e.openModal=function(t,a){e.setState({modal:{image:t,tags:a}})},e.closeModal=function(t){t.target===t.currentTarget&&e.changeStateModal(),"Escape"===t.key&&e.changeStateModal()},e.changeStateModal=function(){e.setState({modal:null}),window.removeEventListener("keydown",e.closeModal)},e.loadMore=function(){e.setState({status:I.PENDING}),e.searchService()},e.notification=function(e){k.b.error(e)},e}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){var n=this.state,r=n.searchValue;if("pending"===n.status&&t.searchValue!==r){if(""===r)return k.b.warning("empty field"),void this.setState({status:I.IDLE});this.setState({images:[]}),this.searchService()}}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.images,n=e.modal,r=e.button,s=this.onSubmit,c=this.closeModal,o=this.openModal,i=this.loadMore;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(f,{onSubmit:s}),Object(j.jsx)(O,{images:a,openModal:o}),"pending"===t&&Object(j.jsx)(E,{}),n&&Object(j.jsx)(w,{modal:n,closeModal:c}),r&&Object(j.jsx)(M,{loadMore:i}),Object(j.jsx)(k.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(j.jsx)(k.a,{})]})}}]),a}(n.PureComponent);c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.bee346df.chunk.js.map