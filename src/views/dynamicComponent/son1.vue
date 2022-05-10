<template>
    <div>
        我是子组件---1
        <el-input v-model="ipt" type="text" v-bind="$attrs" />
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    data() {
        return {
            ipt: this.value
        };
    },
};
</script>

<style lang="scss" scoped>

</style>
