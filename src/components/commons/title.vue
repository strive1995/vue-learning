<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack"></a>
            <h1 class="mui-title">{{title}}</h1>
        </header>
    </div>
</template>
<script>
// var obj = {
//      isShow:false
// }
// function func1(obj){
//     for(var key in obj){
//         console.log(key); //  key: isShow, obj[key]: false  //
//         //以上相当于告诉我，配置不显示？
//     }
// }
// func1(obj);

export default {
    data() {
            return {

            }
        }, props: ['title'], //this.$props.title = null|'' 新闻资讯
        methods: {
            goBack() {
                this.$router.go(-1); //返回上一次历史记录
            }
        }
}
</script>
<style scoped>
.mui-bar.mui-bar-nav {
    position: relative;

}
</style>
