<template>
    <div>
        <button @click="change">点击改变两个属性的值</button>
        {{show}}
        <input type="text" name="" v-model="num">
    </div>
</template>
<script>
export default {
    data() {
        return {
            isSelected: false,
            num: 1
        }
    }, methods: {
        change() {
            this.isSelected = !this.isSelected;
            this.num++;
        }
    }, computed: { //计算属性当涉及到的this.属性值没有发生改变时，不会触发(取缓存)，只要其中任意一个this.属性发生改变，该函数随即被调用
        show() {
            console.log('计算属性被执行了');
            return this.num + '' + this.isSelected;
        }
    }

}
</script>
<style scoped>
</style>
