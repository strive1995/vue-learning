<template>
    <div>
        <!-- 头部 -->
        <mt-header title="CMS系统"></mt-header>
        <transition name="bounce">
            <router-view></router-view>
        </transition>
        <footer-vue></footer-vue>
    </div>
</template>
<script>
import footerVue from './components/partials/footer.vue';
export default {
    data() {
        return {

        }
    }, components: {
        footerVue
    }
}
</script>
<style scoped>
/*router-view使用的*/
.mint-header{
    font-size:26px;
}
.bounce-enter-active {
    animation: bounce-inb .5s;
}

@keyframes bounce-inb {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}
</style>
