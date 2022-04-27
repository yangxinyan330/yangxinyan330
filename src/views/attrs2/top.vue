<template>
    <div class="top">
        <el-button type="primary" @click="handleClick">
            点击
        </el-button>
        <center :visible.sync="dialogVisible" :title="title" :content="content" @handleClose="handleClose" />
    </div>
</template>

<script>
import center from './center.vue';
export default {
    components: {
        center
    },
    provide(){
        return {
            titles: this.title
        };
    },
    data(){
        return {
            title: '弹窗title',
            content: '弹窗内容',
            dialogVisible: false
        };
    },
    methods: {
        handleClick(){
            this.dialogVisible = true;
        },
        handleClose(){
            this.dialogVisible = false;
        },
    }
};
</script>

<style lang="less" scoped>

</style>
