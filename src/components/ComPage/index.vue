<template>
    <div class="pagination">
        <el-row>
            <el-col
                :span="24"
                :style="{ textAlign:position }"
            >
                <el-pagination
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 30, 50]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total"
                    @size-change="handleSize"
                    @current-change="handlePage"
                />
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    props: {
        total: { type: Number, default: 0 },
        position: { type: String, default: 'center' },
    },
    data(){
        return {
            currentPage: 1, // 当前页
        };
    },
    methods: {
        // 每页条数
        handleSize(size) {
            this.$emit('handleSize', size);
        },
        // 翻页
        handlePage(page) {
            this.$emit('handlePage', page);
        }
    }
};
</script>
<style lang="less" scoped>
	.pagination{
		padding: 10px 20px;
		margin: 20px 0;
	}
</style>
