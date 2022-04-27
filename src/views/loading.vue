<template>
    <div>
        <div ref="scrollList" class="list_arr" @scroll="mixinScroll($event)">
            <p>111</p>
            <p>222</p>
            <p>333</p>
            <p>444</p>
            <p>555</p>
            <p>666</p>
            <p>777</p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getList(){
            console.log('滚动加载数据');
        },
    }
};
</script>

<style lang="less" scoped>
    .list_arr{
        max-height: 100px;
        overflow-y: scroll;
        border: 1px solid red;
    }
</style>
