<template>
    <div class="tmpl" style="height:100%;">
        <my-title title="商品列表"></my-title>
        <mt-loadmore :bottom-method="loadBottom" :auto-fill="autoFill" :bottom-all-loaded="nonProducts" @bottom-status-change="handleBottomChange" ref="loader">
            <ul class="mui-table-view mui-grid-view">
                <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in goodsList" :key="item.id">
                    <router-link :to="'/goods/detail/'+ item.id">
                        <img class="mui-media-object" :src="item.img_url">
                        <div class="mui-media-body" v-text="item.title"></div>
                        <div class="desc">
                            <div class="sell">
                                <span>￥{{item.sell_price}}</span>
                                <s>￥{{item.market_price}}</s>
                            </div>
                            <div class="detail">
                                <div class="hot">
                                    热卖中
                                </div>
                                <div class="count">
                                    剩{{item.stock_quantity}}件
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
            <div>
                <span v-show="bottomStatus === 'loading'">
                   <mt-spinner type="triple-bounce"></mt-spinner>
                </span>
            </div>
        </mt-loadmore>
    </div>
</template>
<script>
///api/getgoods?pageindex=number
export default {
    data() {
        return {
            pageindex: 1,
            goodsList: [],
            autoFill: false,
            nonProducts: false,
            bottomStatus: '', //默认不显示加载
        }
    }, created() {
        //获取参数吗？不
        //发起请求
        this.$http.get(this.$myConfig.host + '/api/getgoods?pageindex=' + this.pageindex)
            .then(res => {
                this.goodsList = res.body.message;
            }, res => {
                console.log('获取商品列表失败');
            });
    }, methods: {
        loadBottom() {
            //发起请求
            this.pageindex++;
            this.$http.get(this.$myConfig.host + '/api/getgoods?pageindex=' + this.pageindex) //页码就是2、或者3及以后
                .then(res => {
                    if (res.body.message.length === 0) {
                        //禁止上拉刷新的行为
                        this.nonProducts = true;
                    }
                    this.goodsList = this.goodsList.concat(res.body.message);
                    this.$refs.loader.onBottomLoaded(); //通知元素进入Pull状态完成整个上拉操作
                })
        },
        handleBottomChange(s) {
            this.bottomStatus = s; //loading pull drop
        }
    }
}
</script>
<style scoped>
.mui-table-view.mui-grid-view .mui-table-view-cell > a:not(.mui-btn) {
    margin: 0px;
    padding: 0px;
    border: 1px solid #5c5c5c;
    box-shadow: 0 0 4px #666;
}

.sell > span {
    float: left;
    color: red;
    text-align: left;
}

.detail >.hot {
    float: left;
    text-align: left;
    font-size: 15px;
}

.detail >.count {
    float: right;
    text-align: right;
    font-size: 15px;
}


/*撑开，去除浮动没有的高度*/

.detail {
    overflow: hidden;
}

.desc {
    color: rgba(92, 92, 92, 0.8);
    background-color: rgba(0, 0, 0, 0.2);
}

.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
    height: 200px;
}
</style>
