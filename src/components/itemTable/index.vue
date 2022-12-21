<template>
    <div class="table">
        <!-- <el-table ref="multipleTable" :data="tableData" :table-list="tableTitle" border style="width: 100%">
            <template v-if="isSelect">
                <el-table-column
                    :reserve-selection="true"
                    :selectable="selectable"
                    type="selection"
                    width="55"
                />
            </template>
            <el-table-column v-for="(item, index) in tableTitle" :key="index" :prop="item.prop" :label="item.label" />
            <template>
                <slot />
            </template>
        </el-table> -->
        <el-table :data="tableData" style="width: 100%" border @selection-change="handleSelectionChange">
            <el-table-column v-if="isSelect" type="selection" width="55" />
            <!-- <el-table-column :reserve-selection="true" :selectable="selectable" type="selection" width="55" /> -->
            <el-table-column v-if="isIndex" type="index" :label="isIndexLabel" width="55" />
            <template v-for="item in tableTitle">
                <!--v-if 判断类型 -->
                <el-table-column v-if="item.type === 'function'" :key="item.prop" :prop="item.prop" :label="item.label">
                    <template slot-scope="scope">
                        <div v-html="item.callback && item.callback(scope.row)" />
                    </template>
                </el-table-column>
                <el-table-column v-else :key="item.prop" :prop="item.prop" :label="item.label" />
            </template>
            <template>
                <slot />
            </template>
        </el-table>
        <el-pagination
            :current-page.sync="currentPage"
            :page-sizes="[10, 20, 30, 50]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </div>
</template>

<script>
export default{
    props: {
        tableData: { type: Array, require: true, default: () => { return []; } },
        tableTitle: { type: Array, require: true, default: () => { return []; } },
        total: { type: Number, require: true, default: () => { return 0; } },
        isIndex: { type: Boolean, default: () => { return false; } },
        isIndexLabel: { type: String, default: () => { return '序号'; } },
        isSelect: { type: Boolean, default: () => { return false; } },
    },
    data(){
        return {
            currentPage: 1, // 当前页
        };
    },
    methods: {
        // 每页条数
        handleSizeChange(size) {
            // console.log('每页条数==== ', size);
            this.currentPage = 1;
            this.$emit('handleSizeChange', size);
        },
        // 翻页
        handleCurrentChange(page) {
            // console.log('翻页==== ', page);
            this.$emit('handleCurrentChange', page);
        },
        // 勾选
        handleSelectionChange(val){
            this.$emit('handleSelectionChange', val);
        },
    }
};
</script>

<style lang="less" scoped>
    .table{
        /deep/ .el-table{
            th{
                background: #FAFAFA;
            }
        }
        /deep/ .el-pagination{
            margin-top: 20px;
            text-align: center;
        }
    }
</style>
