<template>
    <div>
        <ComCard title="单选和复选框">
            <ComCheckbox :city-options="options" />
            <ComRadio :city-options="options" />
        </ComCard>
    </div>
</template>

<script>
export default {
    data(){
        return {
            options: [
                { key: 1, label: '上海' },
                { key: 2, label: '北京' },
                { key: 3, label: '成都' },
            ]
        };
    },
};
</script>

<style lang="less" scoped></style>
