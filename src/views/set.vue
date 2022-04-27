<template>
    <div>
        <p v-for="item in arrs" :key="item.name">
            {{ item.name }}---{{ item.age }}
        </p>
        <button @click="addProp">
            添加属性
        </button>
        <el-input
            v-model="params.name"
            type="text"
        />
    </div>
</template>

<script>
export default {
    data(){
        return {
            params: {
                name: '张三'
            },
            arrs: [
                { name: '张三', age: 18 },
                { name: '李四', },
            ]
        };
    },
    methods: {
        addProp(){
            this.params.name = '李四';
            // this.arrs.forEach((m, index) => {
            //     if(index === 1){
            //         this.$set(this.arrs[index], 'age', 30);
            //     }
            // });
            this.$set(this.arrs[1], 'age', 30);
        }
    }
};
</script>

<style lang="less" scoped>

</style>
