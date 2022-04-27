<template>
    <div>
        <h1>钩子函数</h1>
        <button @click="$router.back()">
            返回
        </button>
    </div>
</template>

<script>
export default {
    beforeRouteEnter(to, from, next) {
        console.log(111,to, from);
        next(vm => {
            if(to.path === '/newMethods'){
                vm.isHave = true;
                vm.getList();
                vm.isHave = false;
            }
        });
    },
    data(){
        return {
            isHave: false
        };
    },
    // 路由设置缓存为true才能触发
    activated() {
        console.log('activated');
    },
    methods: {
        getList(){
            console.log('获取新数据');
        },
    }
};
</script>

<style lang="less" scoped>

</style>
