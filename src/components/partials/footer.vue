<template>
    <div>
        <!-- 底部 -->
        <nav class="mui-bar mui-bar-tab">
            <router-link to="/home" class="mui-tab-item">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link to="/member" class="mui-tab-item">
                <span class="mui-icon mui-icon-member"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link to="/shopcart" class="mui-tab-item">
                <span class="mui-icon mui-icon-shopcart"><span class="mui-badge">{{num}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link to="/search" class="mui-tab-item">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">查找</span>
            </router-link>
        </nav>
    </div>
</template>
<script>
import Connect from '../commons/connect.js';
import ShopCartTools from '../commons/shopCartTools.js';
export default {
    data() {
        return {
            num: 0,
        }
    }, created() {
        //在加载的时候就向LocalStorage获取购物车总数
        this.num = ShopCartTools.getTotalCount();
        //这里this
        Connect.$on('addCart', (num) => { //接受emit传递的参数
            //这里的this
            //箭头函数的this不再多变、其是根据声明的所在的function内部的this所绑定的，
            //逐级向上绑定function中的this
            this.num += num;

        });
    }
}
</script>
<style>
</style>
