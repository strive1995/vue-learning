<template>
    <div class="tmpl">
        <my-title title="图片详情"></my-title>
        <div class="photo-title">
            <p>{{picInfo.title}}</p>
            <span>发起日期：{{picInfo.add_time | convertTime}}</span>
            <span>{{picInfo.click}}次浏览</span>
            <span>分类：民生经济</span>
        </div>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item,index) in imgs" :key="index">
                <img class="preview-img" :src="item.src" height="100" @click="$preview.open(index, imgs)">
            </li>
        </ul>
        <div class="photo-desc">
            <p v-html="picInfo.content"></p>
        </div>
        <comment :cid="this.$route.params.id"></comment>
    </div>
</template>
<script>
export default {
    data() {
        return {
            picInfo: {},
            imgs: [],
        }
    }, created() {
        //1：获取路由参数
        let cid = this.$route.params.id;
        //2:获取图片详情信息
        this.$http.get(this.$myConfig.host + '/api/getimageInfo/' + cid)
            .then(res => {
                this.picInfo = res.body.message[0];
            }, res => {
                console.log('获取图片详情失败');
            });
        //3:获取缩略图
        this.$http.get(this.$myConfig.host + '/api/getthumimages/' + cid)
            .then(res => {
                this.imgs = res.body.message;
                //给每个元素添加预览时的宽和高
                this.imgs.forEach(function(img) {
                    img.w = 300;
                    img.h = 300;
                });
            }, res => {
                console.log('缩略图获取失败');
            });
    }
}
</script>
<style scoped>
li {
    list-style: none;
}

ul {
    margin: 0;
    padding: 0;
}

.photo-title {
    overflow: hidden;
}

.photo-title,
.photo-desc {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
}

.photo-title p {
    color: #13c2f7;
    font-size: 20px;
    font-weight: bold;
}

.photo-title span {
    margin-right: 20px;
}

.mui-table-view.mui-grid-view.mui-grid-9 {
    background-color: white;
    border: 0;
}

.mui-table-view.mui-grid-view.mui-grid-9 li {
    border: 0;
}

.photo-desc p {
    font-size: 18px;
}

.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
    padding: 2 2;
}
</style>
