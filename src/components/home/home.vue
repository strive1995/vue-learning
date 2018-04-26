<template>
    <div class="tmpl">
        <!-- 使用轮播图组件 -->
        <my-swipe :imgs="imgs"></my-swipe>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/news/newsList">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photo/share">
                        <span class="mui-icon mui-icon-email"></span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/goods/list">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品展示</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/comment">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">搜索资讯</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgs: []
        }
    }, created() {
        //发起http请求
        this.$http.get(this.$myConfig.host + '/api/getlunbo') //挂载的时候prototype.$myConfig
            .then(res => {
                this.imgs = res.body.message; //此时是一个数组
            }, res => {
                console.log('请求轮播图失败');
            })
    }
}
</script>
<style scoped>
.mui-content {
    /*height: 500px;*/
}

.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3,
.mui-table-view.mui-grid-view.mui-grid-9 {
    background-color: white;
    border: 0;
}

.mui-table-view.mui-grid-view.mui-grid-9 {
    margin-top: 0px;
}


/*清楚原来的字体图标*/

.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before {
    content: '';
}


/*指定高度*/

.mui-icon {
    height: 50px;
    width: 50px;
}


/*指定新的背景图片*/

.mui-icon-home {
    background-image: url(../../../static/images/news.png);
    background-repeat: round;
}

.mui-icon-email {
    background-image: url('../../../static/images/picShare.png');
    background-repeat: round;
}

.mui-icon-chatbubble {
    background-image: url('../../../static/images/goodShow.png');
    background-repeat: round;
}

.mui-icon-location {
    background-image: url('../../../static/images/feedback.png');
    background-repeat: round;
}

.mui-icon-search {
    background-image: url('../../../static/images/search.png');
    background-repeat: round;
}

.mui-icon-phone {
    background-image: url('../../../static/images/callme.png');
    background-repeat: round;
}
</style>
