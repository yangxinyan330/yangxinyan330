<template>
    <div id="app">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" :key="$route.fullPath" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" :key="$route.fullPath" />
    </div>
</template>
<script>
export default{
    data(){
        return {

        };
    }
};
</script>
<style lang="less">
    #app{
        padding: 30px;
    }
    .spanBtn{
        padding: 0 5px;
        cursor: pointer;
    }
</style>
