(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1999edb2"],{"148d":function(t,e,r){"use strict";r("6a4a")},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}},"656d":function(t,e,r){"use strict";r("87d1")},"6a4a":function(t,e,r){},"87d1":function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new C(n||[]);return a._invoke=E(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=s;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",y={};function m(){}function g(){}function v(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(S([])));x&&x!==r&&n.call(x,a)&&(b=x);var L=v.prototype=m.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function E(t,e,r){var n=h;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return I()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:d,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function S(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:I}}function I(){return{value:e,done:!0}}return g.prototype=L.constructor=v,v.constructor=g,g.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},k(_.prototype),_.prototype[i]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(L),u(L,c,"Generator"),L[a]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),F(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},b2a2:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-list"},[r("product-search",{attrs:{categoryList:t.categoryList},on:{submit:t.searchSubmit}}),r("a-button",{staticClass:"product-add-btn"},[r("router-link",{attrs:{to:{name:"ProductAdd"}}},[t._v("添加商品")])],1),r("product-table",{attrs:{productList:t.productList,pagination:t.page},on:{pageChange:t.pageChange,edit:t.productEdit,remove:t.productRomve}})],1)},o=[],a=(r("4160"),r("d81d"),r("b0c0"),r("159b"),r("5530")),i=(r("96cf"),r("1da1")),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-form-model",{attrs:{layout:"inline",model:t.searchForm},nativeOn:{submit:function(t){t.preventDefault()}}},[r("a-form-model-item",{attrs:{label:"搜索关键字"}},[r("a-input",{attrs:{placeholder:"搜索关键字"},model:{value:t.searchForm.searchWord,callback:function(e){t.$set(t.searchForm,"searchWord",e)},expression:"searchForm.searchWord"}})],1),r("a-form-model-item",{attrs:{label:"商品类目"}},[r("a-select",{staticStyle:{width:"200px"},attrs:{allowClear:!0,"show-search":"",placeholder:"选择商品类目"},model:{value:t.searchForm.category,callback:function(e){t.$set(t.searchForm,"category",e)},expression:"searchForm.category"}},t._l(t.categoryList,(function(e){return r("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],1),r("a-form-model-item",[r("a-button",{attrs:{type:"primary","html-type":"submit"},on:{click:t.handleClick}},[t._v(" 搜索 ")])],1)],1)},u=[],s={props:{categoryList:Array},data:function(){return{searchForm:{searchWord:"",category:""}}},methods:{handleClick:function(){this.$emit("submit",this.searchForm)}}},l=s,h=(r("656d"),r("2877")),d=Object(h["a"])(l,c,u,!1,null,null,null),f=d.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-table",{attrs:{columns:t.columns,"data-source":t.tableData,pagination:t.pagination},on:{change:t.handleChange},scopedSlots:t._u([{key:"operation",fn:function(e,n){return r("div",{},[r("a-button",{on:{click:function(e){return t.editProduct(n)}}},[t._v("编辑")]),r("a-button",{on:{click:function(e){return t.removeProduct(n)}}},[t._v("删除")])],1)}}])})},y=[],m=[{title:"Id",dataIndex:"id",key:"id"},{title:"标题",dataIndex:"title",key:"title",ellipsis:!0},{title:"描述",dataIndex:"desc",key:"desc",ellipsis:!0},{title:"类目",dataIndex:"categoryName",key:"category",ellipsis:!0},{title:"预售价格",dataIndex:"price",key:"price"},{title:"折扣价格",dataIndex:"price_off",key:"price_off"},{title:"标签",dataIndex:"tags",key:"tags"},{title:"限制购买数量",dataIndex:"inventory",key:"inventory"},{title:"上架状态",dataIndex:"status",key:"status",customRender:function(t,e){return t=1===e.status?"上架":"下架",t}},{title:"操作",width:200,dataIndex:"operation",key:"operation",scopedSlots:{customRender:"operation"}}],g={data:function(){return{columns:m}},props:{productList:Array,pagination:Object},methods:{handleChange:function(t){this.$emit("pageChange",t)},editProduct:function(t){this.$emit("edit",t)},removeProduct:function(t){this.$emit("remove",t)}},computed:{tableData:function(){return this.productList.map((function(t){return Object(a["a"])(Object(a["a"])({},t),{},{key:t.id})}))}}},v=g,b=Object(h["a"])(v,p,y,!1,null,null,null),w=b.exports,x=r("c405"),L=r("c4c8"),k={data:function(){return{searchForm:{},categoryList:[],productList:[],page:{current:1,pageSize:10,showSizeChanger:!0,total:1},categoryObj:{}}},components:{productSearch:f,productTable:w},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x["a"].categoryList().then((function(e){t.categoryList=e.data,e.data.forEach((function(e){t.categoryObj[e.id]=e.name}))}));case 2:t.getTableData();case 3:case"end":return e.stop()}}),e)})))()},methods:{pageChange:function(t){this.page=t,this.getTableData()},searchSubmit:function(t){this.searchForm=t,this.getTableData()},getTableData:function(){var t=this;L["a"].productAll(Object(a["a"])({page:this.page.current,size:this.page.pageSize},this.searchForm)).then((function(e){t.page.total=e.total,t.productList=e.data.map((function(e){return Object(a["a"])(Object(a["a"])({},e),{},{categoryName:t.categoryObj[e.category]})}))}))},productEdit:function(t){this.$router.push({name:"ProductEdit",params:{id:t.id,record:t}}),console.log(t)},productRomve:function(t){var e=this;this.$confirm({title:"确认删除",content:"确认删除商品标题为".concat(t.title,"吗？"),onOk:function(){L["a"].remove({id:t.id}).then((function(){return e.getTableData()}))},cancelText:"取消"})}}},_=k,E=(r("148d"),Object(h["a"])(_,n,o,!1,null,null,null));e["default"]=E.exports},c405:function(t,e,r){"use strict";var n=r("bb36");e["a"]={categoryList:function(t){return n["a"].get("category/all",t)},addCategory:function(t){return n["a"].post("/category/add",t)},editCategory:function(t){return n["a"].put("/category/edit",t)},deleteCategory:function(t){var e=t.id;return n["a"].delete("/category/".concat(e))}}},c4c8:function(t,e,r){"use strict";var n=r("bb36");e["a"]={productAll:function(t){return n["a"].get("/products/all",t)},remove:function(t){return n["a"].delete("/products/"+t.id)},add:function(t){return n["a"].post("/products/add",t)},edit:function(t){return n["a"].put("/products/edit",t)}}},d81d:function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").map,a=r("1dde"),i=r("ae40"),c=a("map"),u=i("map");n({target:"Array",proto:!0,forced:!c||!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-1999edb2.8de158d1.js.map