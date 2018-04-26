<template>
    <div class="tmpl">
        <my-title title="商品详情"></my-title>
        <div class="outer-swiper">
            <div class="swiper">
                <my-swipe :imgs="imgs"></my-swipe>
            </div>
        </div>
        <div class="product-desc">
            <ul>
                <li><span class="product-desc-span">
                    {{prodInfo.title}}
                </span></li>
                <li class="price-li">市场价：
                    <s>￥{{prodInfo.market_price}}</s> 销售价：<span>￥{{prodInfo.sell_price}}</span></li>
                <li class="number-li">购买数量：<span @click="substract">-</span><span>{{pickNum}}</span><span @click="add">+</span></li>
                <li>
                    <mt-button type="primary">立即购买</mt-button>
                    <mt-button type="danger" @click="addCart">加入购物车</mt-button>
                </li>
            </ul>
        </div>
        <transition name="ball" @after-enter="afterEnter">
            <div class="ball" v-if="isShow"></div>
        </transition>
        <div class="product-props">
            <ul>
                <li>商品参数</li>
                <li>商品货号：{{prodInfo.goods_no}}</li>
                <li>库存情况：{{prodInfo.stock_quantity}}件</li>
                <li>上架时间：{{prodInfo.add_time|convertTime}}</li>
            </ul>
        </div>
        <div class="product-info">
            <ul>
                <li>
                    <mt-button type="primary" size="large" plain @click="showPicInof">图文介绍</mt-button>
                </li>
                <li>
                    <mt-button type="danger" size="large" plain @click="showComments">商品评论</mt-button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Connect from '../commons/connect.js';
import ShopCartTools from '../commons/shopCartTools.js';
export default {
    data() {
            return {
                imgs: [],
                prodInfo: {},
                pickNum: 1,
                isShow: false,
            }
        }, created() {
            let id = this.$route.params.id;
            //当父组件创建的时候，发起请求，获取数据，给子组件 轮播图
            this.$http.get(this.$myConfig.host + '/api/getthumimages/' + id)
                .then(res => {
                    this.imgs = res.body.message;
                }, res => {
                    console.log('获取商品轮播图失败');
                });


            //发起请求获取商品详情
            this.$http.get(this.$myConfig.host + '/api/goods/getinfo/' + id)
                .then(res => {
                    this.prodInfo = res.body.message[0];
                }, res => {
                    console.log('获取商品详情失败');
                })
        },
        methods: {
            substract() {
                if (this.pickNum <= 1) return;
                this.pickNum--;
            },
            add() {
                if (this.prodInfo.stock_quantity <= this.pickNum) return;
                this.pickNum++;
            },
            showPicInof() { //显示图文信息
                // console.log('aa');
                //让锚点值发生改变
                this.$router.push('/goods/detailInfo/' + this.$route.params.id + '?title=图文详情'); //编程式导航
                //和<router-link to="/goods/detail/info"> 是一个故事（效果）
            },
            showComments() { //显示评论信息
                //改变路由
                this.$router.push('/goods/comment/' + this.$route.params.id);
            },
            addCart() { //添加购物车
                this.isShow = true;
                Connect.$emit('addCart', this.pickNum); //发射信号让底板做数字修改
                //持久化当前购物车信息
                ShopCartTools.addShopCart({
                    id: this.prodInfo.id,
                    num: this.pickNum,
                })


            },
            afterEnter() { //过度效果的钩子函数(元素插入以后)
                this.isShow = false; //触发过渡离开的效果
            }

        }, beforeRouteLeave(to, from, next) {
            //离开当前路由的钩子函数
            // 需要配合移动端特效来做
            if (window.confirm('亲，确定要离开吗？')) { //window对象可以直接用,建议通过window.调用
                next(); //放行
            } else {
                next(false); //留下来
            }
        },
}
</script>
<style scoped>
.ball-enter-active {
    animation: bounce-in 1s;
}


/*过渡结束的时候，避免框架内部默认将元素移动到原位，直接将其不显示*/

.ball-leave-active {
    opacity: 0;
}

@keyframes bounce-in {
    /*translate3d运行效果会流畅一些*/
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(140px, -50px);
    }
    75% {
        transform: translate(160px, 0px);
    }
    100% {
        transform: translate(140px, 300px);
    }
}

.swiper {
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 8px;
    width: 95%;
    border-radius: 15px;
    overflow: hidden;
}

.outer-swiper,
.product-desc,
.product-props,
.product-info {
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 3px;
}


/*请ulpadding*/

.outer-swiper ul,
.product-desc ul,
.product-props ul,
.product-info ul {
    padding: 0;
}

.product-desc ul li,
.product-props ul li,
.product-info ul li {
    list-style: none;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 8px;
}

.product-desc ul >:nth-child(1) span {
    color: blue;
    font-size: 22px;
    font-weight: bold;
}

.product-desc ul >:nth-child(1) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}

.product-desc ul,
.product-info ul,
.product-props ul {
    padding-left: 10px;
}

.price-li span {
    color: red;
    font-size: 25px;
}

.price-li s {
    margin-right: 16px;
}


/*加减*/

.number-li span {
    display: inline-block;
    border: 2px solid rgba(0, 0, 0, 0.1);
    width: 25px;
}


/*商品参数*/

.product-props ul >:nth-child(1) {
    text-align: left;
}

.product-props ul:not(:nth-child(1)) {
    margin-left: 40px;
}

.product-info ul {
    margin-bottom: 70px;
    padding: 0 5;
}

.number-li span {
    text-align: center;
}

.number-li >:nth-child(2) {
    width: 40px;
}

.ball {
    border-radius: 50%;
    background-color: red;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 440px;
    left: 120px;
    display: inline-block;
    z-index: 9999;
}
</style>
