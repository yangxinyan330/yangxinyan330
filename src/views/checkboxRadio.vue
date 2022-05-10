<template>
    <div>
        <ComCard title="单选和复选框">
            <ComCheckbox :city-options="options" />
            <ComRadio :city-options="options" />
        </ComCard>
        <dom-dialog v-model="isDomDialog" />
        <el-button @click="handleAdd" />
    </div>
</template>

<script>
import DomDialog from './myChild';
export default {
    components: {
        DomDialog
    },
    data(){
        return {
            isDomDialog: false,
            options: [
                { key: 1, label: '上海' },
                { key: 3, label: '成都' },
                { key: 2, label: '北京' },
            ]
        };
    },
    methods: {
        handleAdd(){
            this.count;
        }
    }
};
</script>

<style lang="less" scoped></style>
