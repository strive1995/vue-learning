<template>
    <div class="tmpl">
        <!-- <my-title :title="title"></my-title> -->
        <my-title title="新闻资讯"></my-title>
        <div>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                    <router-link :to="'/news/detail/' + item.id + '?title=新闻详情' ">
                        <img class="mui-media-object mui-pull-left" :src="item.img_url">
                        <div class="mui-media-body">
                            {{item.title}}
                            <div class="news-bottom">
                                <span>点击数：{{item.click}}</span>
                                <span>发表日期:{{item.add_time | convertTime}}</span>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                //保存新闻列表数据
                newsList: []
            }
        },
        created() {
            //发起请求
            this.$http.get(this.$myConfig.host + '/api/getnewslist')
                .then(res => {
                    this.newsList = res.body.message; //数组
                }, res => {
                    console.log('获取新闻资讯列表失败');
                })
        }
}
</script>
<style scoped>
.news-bottom span {
    display: inline-block;
    color: #04a1f0;
}

.news-bottom span:nth-child(1) {
    float: left;
}

.news-bottom span:nth-child(2) {
    float: right;
}
</style>
