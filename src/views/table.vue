<template>
    <div class="form container">
        <item-table
            :table-data="tableData"
            :table-title="tableTitle"
            :total="tableData.length"
            @handleSizeChange="handleSizeChange"
            @handleCurrentChange="handleCurrentChange"
        >
            <el-table-column label="操作" width="160" fixed="right">
                <template slot-scope="{ row }">
                    <span class="spanBtn" @click="handleEdit(row)">编辑</span>
                </template>
            </el-table-column>
        </item-table>
        <ComDialog :dialog-visible="dialogVisible" :is-cancel="false" :is-comfirm="false">
            <add ref="add" @closeDialog="dialogVisible = false" />
        </ComDialog>
    </div>
</template>

<script>
import { DELIVERY_TYPE } from '@/invariable/index.js';
import { commentTypeFilter } from '@/invariable/filters.js';
import Add from './Add.vue';
export default {
    components: {
        Add
    },
    data() {
        return {
            DELIVERY_TYPE,
            commentTypeFilter,
            dialogVisible: true,
            formParams: {
                status: 1,
                text: ''
            },
            tableData: [],
            tableTitle: [
                { label: '标题', prop: 'title' },
                { label: '用户id', prop: 'userId', type: 'function', callback: (v)=>{
                    return `<span style="color: ${this.isColor(v.userId)}">${this.commentTypeFilter(v.userId)}</span>`;}},
            ],
        };
    },
    computed: {
        isColor() {
            return function(v){
                let color = 'red';
                if(v === 1){
                    color = 'blue';
                }
                return color;
            };
        }
    },
    created(){
        this.getTableData();
    },
    methods: {
        async getTableData(){
            try{
                const res = await this.$http('getList', this.otherParams());
                this.tableData = res.slice(0, 10);
            }catch(err){
                console.log(err);
            }
        },
        // 编辑
        handleEdit(row){
            // console.log('row====', row);
            this.dialogVisible = true;
        },
        // 关闭dialog
        closeDialog(type){
            if(type === 'cancel'){
                this.dialogVisible = false;
            }else{
                // const params
                console.log('params====', {...this.$refs.add.formParams});
            }
        }
    }
};
</script>
<style lang="less" scoped></style>
