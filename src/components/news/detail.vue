<template>
    <div class="tmpl">
        <my-title :title='title'></my-title>
        <!-- 以上会根据路由不同的参数，改变，新闻的就是新闻详情，商品就是图文详情 -->
        <div class="news-title">
            <span>{{newsDetail.title}}</span>
            <div>
                <p>{{newsDetail.click}}次点击</p>
                <p>分类:民生经济</p>
                <p>添加时间:{{newsDetail.add_time | convertTime}}</p>
            </div>
        </div>
        <div class="news-content" v-html="newsDetail.content"></div>
    </div>
</template>
<script>
//如果是设置scoped 是只针对当前的template有效，当前template中news-content下面并没有img，所以无效，使用全局的方式就可以
export default {
    data() {
        return {
            newsDetail: {},
            title: ''
        }
    }, created() {
        //当组件被创建的时候，发起请求
        // console.log('获取到的id:', this.$route.params.id);
        let id = this.$route.params.id;
        this.title = this.$route.query.title; //拿到父组件传递的title
        //  /api/getnew/77  // 这个77就得需要获取，通过$route.params.id获取
        //  import config ;  config.host  引入次数太多了
        //  
        this.$http.get(this.$myConfig.host + '/api/getnew/' + id)
            .then(res => {
                this.newsDetail = res.body.message[0];
            }, res => {
                console.log('新闻详情获取失败');
            })

    }
}
</script>
<style scoped>
.news-title div p {
    display: inline-block;
    margin-right: 40px;
}

.news-title div {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}

.news-title span {
    font-size: 20px;
    font-weight: bold;
    color: #0a88f9;
}
</style>
