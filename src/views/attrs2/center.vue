<template>
    <div class="center">
        <div>{{ $attrs.title }}</div>
        <div>{{ $attrs.content }}</div>
        <bottom v-bind="$attrs" v-on="$listeners" />
    </div>
    <!--
        1、 v-bind="$attrs"
            跨级传递props, 即通过父组件传递props到孙组件
        2、 v-on="$listeners"
            可使父组件监听孙组件$emit事件
        3、 inheritAttrs:false
            父作用域不支持跨级传递,并且在传递时数据容易出现偏差，通过在子组件和孙组件中声明inheritAttrs:false , 即可正常传递并展示数据
    -->
</template>

<script>
import bottom from './bottom.vue';
export default {
    components: {
        bottom
    },
};
</script>

<style lang="less" scoped>

</style>
