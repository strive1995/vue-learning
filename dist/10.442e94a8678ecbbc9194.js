webpackJsonp([10],{167:function(n,t,r){r(243);var o=r(2)(r(195),r(232),"data-v-65efc612",null);o.options.__file="C:\\Users\\tujunxiong\\Desktop\\传智21期\\06-VUE-第6天-购物车-补充知识点-打包\\4-源代码\\code\\cms_vue_pro_21\\src\\components\\goods\\detail.vue",o.esModule&&Object.keys(o.esModule).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] detail.vue: functional components are not supported with templates, they should use render functions."),n.exports=o.exports},195:function(n,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(134),e=r.n(o),i=r(133),s=r.n(i);t.default={data(){return{imgs:[],prodInfo:{},pickNum:1,isShow:!1}},created(){let n=this.$route.params.id;this.$http.get(this.$myConfig.host+"/api/getthumimages/"+n).then(n=>{this.imgs=n.body.message},n=>{console.log("获取商品轮播图失败")}),this.$http.get(this.$myConfig.host+"/api/goods/getinfo/"+n).then(n=>{this.prodInfo=n.body.message[0]},n=>{console.log("获取商品详情失败")})},methods:{substract(){this.pickNum<=1||this.pickNum--},add(){this.prodInfo.stock_quantity<=this.pickNum||this.pickNum++},showPicInof(){this.$router.push("/goods/detailInfo/"+this.$route.params.id+"?title=图文详情")},showComments(){this.$router.push("/goods/comment/"+this.$route.params.id)},addCart(){this.isShow=!0,e.a.$emit("addCart",this.pickNum),s.a.addShopCart({id:this.prodInfo.id,num:this.pickNum})},afterEnter(){this.isShow=!1}},beforeRouteLeave(n,t,r){window.confirm("亲，确定要离开吗？")?r():r(!1)}}},215:function(n,t,r){t=n.exports=r(1)(void 0),t.push([n.i,"\n.ball-enter-active[data-v-65efc612] {\r\n    animation: bounce-in 1s;\n}\r\n\r\n\r\n/*过渡结束的时候，避免框架内部默认将元素移动到原位，直接将其不显示*/\n.ball-leave-active[data-v-65efc612] {\r\n    opacity: 0;\n}\n@keyframes bounce-in {\r\n    /*translate3d运行效果会流畅一些*/\n0% {\r\n        transform: translate(0, 0);\n}\n50% {\r\n        transform: translate(140px, -50px);\n}\n75% {\r\n        transform: translate(160px, 0px);\n}\n100% {\r\n        transform: translate(140px, 300px);\n}\n}\n.swiper[data-v-65efc612] {\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    margin: 8px;\r\n    width: 95%;\r\n    border-radius: 15px;\r\n    overflow: hidden;\n}\n.outer-swiper[data-v-65efc612],\r\n.product-desc[data-v-65efc612],\r\n.product-props[data-v-65efc612],\r\n.product-info[data-v-65efc612] {\r\n    border-radius: 5px;\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    margin: 3px;\n}\r\n\r\n\r\n/*请ulpadding*/\n.outer-swiper ul[data-v-65efc612],\r\n.product-desc ul[data-v-65efc612],\r\n.product-props ul[data-v-65efc612],\r\n.product-info ul[data-v-65efc612] {\r\n    padding: 0;\n}\n.product-desc ul li[data-v-65efc612],\r\n.product-props ul li[data-v-65efc612],\r\n.product-info ul li[data-v-65efc612] {\r\n    list-style: none;\r\n    font-size: 15px;\r\n    color: rgba(0, 0, 0, 0.5);\r\n    margin-top: 8px;\n}\n.product-desc ul >:nth-child(1) span[data-v-65efc612] {\r\n    color: blue;\r\n    font-size: 22px;\r\n    font-weight: bold;\n}\n.product-desc ul >[data-v-65efc612]:nth-child(1) {\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n}\n.product-desc ul[data-v-65efc612],\r\n.product-info ul[data-v-65efc612],\r\n.product-props ul[data-v-65efc612] {\r\n    padding-left: 10px;\n}\n.price-li span[data-v-65efc612] {\r\n    color: red;\r\n    font-size: 25px;\n}\n.price-li s[data-v-65efc612] {\r\n    margin-right: 16px;\n}\r\n\r\n\r\n/*加减*/\n.number-li span[data-v-65efc612] {\r\n    display: inline-block;\r\n    border: 2px solid rgba(0, 0, 0, 0.1);\r\n    width: 25px;\n}\r\n\r\n\r\n/*商品参数*/\n.product-props ul >[data-v-65efc612]:nth-child(1) {\r\n    text-align: left;\n}\n.product-props ul[data-v-65efc612]:not(:nth-child(1)) {\r\n    margin-left: 40px;\n}\n.product-info ul[data-v-65efc612] {\r\n    margin-bottom: 70px;\r\n    padding: 0 5;\n}\n.number-li span[data-v-65efc612] {\r\n    text-align: center;\n}\n.number-li >[data-v-65efc612]:nth-child(2) {\r\n    width: 40px;\n}\n.ball[data-v-65efc612] {\r\n    border-radius: 50%;\r\n    background-color: red;\r\n    width: 24px;\r\n    height: 24px;\r\n    position: absolute;\r\n    top: 440px;\r\n    left: 120px;\r\n    display: inline-block;\r\n    z-index: 9999;\n}\r\n",""])},232:function(n,t,r){n.exports={render:function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"tmpl"},[r("my-title",{attrs:{title:"商品详情"}}),n._v(" "),r("div",{staticClass:"outer-swiper"},[r("div",{staticClass:"swiper"},[r("my-swipe",{attrs:{imgs:n.imgs}})],1)]),n._v(" "),r("div",{staticClass:"product-desc"},[r("ul",[r("li",[r("span",{staticClass:"product-desc-span"},[n._v("\n                "+n._s(n.prodInfo.title)+"\n            ")])]),n._v(" "),r("li",{staticClass:"price-li"},[n._v("市场价：\n                "),r("s",[n._v("￥"+n._s(n.prodInfo.market_price))]),n._v(" 销售价："),r("span",[n._v("￥"+n._s(n.prodInfo.sell_price))])]),n._v(" "),r("li",{staticClass:"number-li"},[n._v("购买数量："),r("span",{on:{click:n.substract}},[n._v("-")]),r("span",[n._v(n._s(n.pickNum))]),r("span",{on:{click:n.add}},[n._v("+")])]),n._v(" "),r("li",[r("mt-button",{attrs:{type:"primary"}},[n._v("立即购买")]),n._v(" "),r("mt-button",{attrs:{type:"danger"},on:{click:n.addCart}},[n._v("加入购物车")])],1)])]),n._v(" "),r("transition",{attrs:{name:"ball"},on:{"after-enter":n.afterEnter}},[n.isShow?r("div",{staticClass:"ball"}):n._e()]),n._v(" "),r("div",{staticClass:"product-props"},[r("ul",[r("li",[n._v("商品参数")]),n._v(" "),r("li",[n._v("商品货号："+n._s(n.prodInfo.goods_no))]),n._v(" "),r("li",[n._v("库存情况："+n._s(n.prodInfo.stock_quantity)+"件")]),n._v(" "),r("li",[n._v("上架时间："+n._s(n._f("convertTime")(n.prodInfo.add_time)))])])]),n._v(" "),r("div",{staticClass:"product-info"},[r("ul",[r("li",[r("mt-button",{attrs:{type:"primary",size:"large",plain:""},on:{click:n.showPicInof}},[n._v("图文介绍")])],1),n._v(" "),r("li",[r("mt-button",{attrs:{type:"danger",size:"large",plain:""},on:{click:n.showComments}},[n._v("商品评论")])],1)])])],1)},staticRenderFns:[]},n.exports.render._withStripped=!0},243:function(n,t,r){var o=r(215);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);r(3)("99b1c498",o,!1)}});