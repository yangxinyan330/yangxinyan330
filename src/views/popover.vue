<template>
    <div>
        <ComPopover
            title="确定下架选中海报数据？"
            text="确定下架了选中海报数据，在app上将无法查看到该数据"
            btn-name="下架"
            :icon-url="iconUrl"
            @handleConfirm="lineHandle(row, 0)"
        >
        <!-- @handleConfirm="delete(row, 1)" -->
        </compopover>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
};
</script>

<style lang="less" scoped></style>
