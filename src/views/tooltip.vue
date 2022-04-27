<template>
    <div class="mytooltip">
        <ComTooltip :tips-text="text" :row-text-num="5" :row="1" />
    </div>
</template>

<script>
export default {
    data(){
        return {
            text: '当花钱状态我缴纳给了关闭发当花钱状态我缴纳给了关闭发当花钱状态我缴纳给了关闭发当花钱状态我缴纳给了关闭发当花钱状态我缴纳给了关闭发'
        };
    },
};
</script>

<style lang="less" scoped>
    .mytooltip{
        .text-line{

        }
    }
</style>
