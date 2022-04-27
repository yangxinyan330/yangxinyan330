<template>
    <div class="bottom">
        <el-dialog
            :title="$attrs.title"
            :visible.sync="$attrs.visible"
            :close-on-click-modal="false"
            @close="$listeners.handleClose()"
        >
            <div>{{ $attrs.content }}</div>
            <div>{{ $attrs.content }}</div>
            <div>{{ $attrs.content }}</div>
            <div>{{ $attrs.content }}</div>
            <div>titles: {{ titles }}</div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    inject: ['titles']
};
</script>

<style lang="less" scoped>

</style>
