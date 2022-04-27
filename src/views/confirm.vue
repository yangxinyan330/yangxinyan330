<template>
    <div>
        <el-button
            type="primary"
            @click="confirmDialog"
        >
            confirm弹窗
        </el-button>
        <el-button
            type="primary"
            @click="dialogVisible = true"
        >
            dialog弹窗
        </el-button>
        <ComDialog :dialog-visible="dialogVisible" @closeDialog="closeDialog" />
    </div>
</template>

<script>
export default {
    data(){
        return {
            dialogVisible: false,
        };
    },
    methods: {
        // dialog
        closeDialog(type){
            console.log(type);
            if(type === 'cancel'){
                this.dialogVisible = false;
            }else{
                this.dialogVisible = false;
                console.log('确定');
            }
            // 关闭即重置
            Object.assign(this.$data, this.$options.data());
        },
        // confirm
        confirmDialog(){
            this.confirmBox(this.backs);
        },
        backs(){
            try{
                // await this.$http........
                this.$message.success('操作成功');
            } catch(err) {
                this.$message.error('操作失败');
            }
        }
    }
};
</script>

<style lang="less" scoped>

</style>
