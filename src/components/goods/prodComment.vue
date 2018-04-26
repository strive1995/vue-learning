<template>
    <div class="tmpl">
        <my-title title="商品评论"></my-title>
        <comment :cid="$route.params.cid"></comment>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    }
}
</script>
<style>
</style>
