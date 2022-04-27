<template>
    <div class="bottom">
        <el-dialog
            :title="$attrs.title"
            :visible.sync="$attrs.visible"
            @close="$emit('close')"
        >
            <slot>
                <div>{{ $attrs.visible }}</div>
                <div>provideTest: {{ provideTest }}</div>
            </slot>
        </el-dialog>
    </div>
</template>

<script>
export default {
    inject: ['provideTest']
};
</script>

<style lang="less" scoped>

</style>
