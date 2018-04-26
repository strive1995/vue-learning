<template>
    <div class="tmpl">
        <!-- 引入返回导航 -->
        <my-title title="图片分享"></my-title>
        <div class="photo-header">
            <ul>
                <li v-for="item in categorys" :key="item.id">
                    <a href="javascript:;" @click="getImgs(item.id)">{{item.title}}</a>
                </li>
            </ul>
        </div>
        <div class="photo-list">
            <ul>
                <li v-for="item in imgs" :key="item.id">
                    <router-link :to="'/photo/detail/'+item.id">
                        <img v-lazy="item.img_url">
                        <p>
                            <span>{{item.title}}</span>
                            <br>
                            <span>{{item.zhaiyao}}</span>
                        </p>
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
                categorys: [],
                imgs: [] //保存图片对象数组
            }
        }, created() {
            this.getCategorys(); //获取分类
            //发起请求id=0的时候，代表加载全部图片
            this.getImgs(0); //获取图片，默认给0是加载全部
        },
        methods: {
            getImgs(id) { //这个函数又我们用户点击的时候触发，自动传递元素的id
                this.$http.get(this.$myConfig.host + '/api/getimages/' + id)
                    .then(res => {
                        this.imgs = res.body.message;
                    }, res => {
                        console.log('请求图片失败');
                    });
            },
            getCategorys() {
                //没有参数获取
                //发起请求获取分类信息
                this.$http.get(this.$myConfig.host + '/api/getimgcategory')
                    .then(res => {
                        this.categorys = res.body.message;
                        //在数组的顶部加入一个元素
                        this.categorys.unshift({
                            title: '全部',
                            id: 0
                        })
                    }, res => {
                        console.log('获取分类信息失败');
                    });
            }
        }
}
</script>
<style>
.photo-header li {
    list-style: none;
    display: inline-block;
    margin-left: 10px;
    height: 30px;
}

.photo-header ul {
    /*强制不换行*/
    white-space: nowrap;
    overflow-x: auto;
    padding-left: 0px;
    margin: 5;
}


/*下面的图片*/

.photo-list li {
    list-style: none;
    position: relative;
}

.photo-list li img {
    width: 100%;
    height: 230px;
    vertical-align: top;
}

.photo-list ul {
    padding-left: 0px;
    margin: 0;
}

.photo-list p {
    position: absolute;
    bottom: 0px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    margin-bottom: 0px;
}

.photo-list p span:nth-child(1) {
    font-weight: bold;
    font-size: 16px;
}


/*mint-ui懒加载*/

image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
}
</style>
