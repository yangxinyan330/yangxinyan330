<template>
    <div class="table">
        <el-table :data="tableData" border style="width: 100%">
            <!-- <el-table-column
                v-for="(item, index) in tableTitle"
                :key="index"
                :label="item.name"
                :prop="item.value"
                align="center"
            /> -->
            <el-table-column
                v-for="(item, index) in tableTitle"
                :key="index"
                :label="item.name"
                :prop="myComputed(item.value, item.filter)"
                align="center"
            />
            <slot />
            <template v-if="tableData.length === 0" slot="empty">
                <com-empty />
            </template>
        </el-table>
        <!-- <div>{{ commentTypeFilter(1) }}</div> -->
        <el-row v-if="tableData.length">
            <el-col
                :span="24"
                :style="{ textAlign: pagePosition }"
            >
                <el-pagination
                    v-if="pageShow"
                    :current-page.sync="pageParams.page"
                    :page-sizes="[10, 20, 30, 50]"
                    :page-size="pageParams.size"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="tableData.length"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                />
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    props: {
        tableData: { type: Array, default: () => [] },
        tableTitle: { type: Array, default: () => [] },
        pagePosition: { type: String, default: () => 'center' },
    },
    data() {
        return {
            pageShow: true,
            pageParams: {
                page: 1,
                pageSize: 10,
            }
        };
    },
    computed: {
        myComputed(){
            return function(prop, filter){
                if(filter){
                    return prop;
                }
                return prop;

            };
        },
    },
    methods: {
        // 每页条数
        handleSizeChange(size) {
            this.pageParams.page = 1;
            this.pageParams.pageSize = size;
            let pageMax = Math.ceil(this.tableData.length / size);
            // 判断跳转页数是否大于最大页数，如果大于，跳转页数就等于最大页数
            if (this.pageParams.page > pageMax) {
                this.pageParams.page = pageMax;
            }
            this.$emit('handleSizeChange', size);
        },
        // 翻页
        handleCurrentChange(page) {
            this.$emit('handleCurrentChange', page);
        }
    }
};
</script>

<style lang="less" scoped>
    ::v-deep .el-pagination{
		padding: 30px 20px;
	}
</style>
