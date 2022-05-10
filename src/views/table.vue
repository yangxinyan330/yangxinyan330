<template>
    <div class="form container">
        <com-table
            ref="myTable"
            :table-data="tableData"
            :table-title="tableTitle"
            @handleSizeChange="handleSizeChange"
            @handleCurrentChange="handleCurrentChange"
        >
            <!-- <el-table-column label="状态">
                <template slot-scope="{ row }">
                    <div>{{ row.index | commentTypeFilter }}</div>
                </template>
            </el-table-column> -->
        </com-table>
        <!-- <ul>
            <li><img id="img1" src="https://mh.huodigou.cn/static/upload/images/goods/2019/01/14/1547450781101144.jpg" width="100px" height="100px" alt=""></li>
            <li><img id="img2" src="https://mh.huodigou.cn/static/upload/images/goods/2019/01/14/1547451274847894.jpg" width="100px" height="100px" alt=""></li>
            <li><img id="img3" src="https://mh.huodigou.cn/static/upload/images/goods/2019/01/14/1547451909951171.jpg" width="100px" height="100px" alt=""></li>
        </ul> -->
    </div>
</template>

<script>
import { commentTypeFilter } from '@/invariable/filters.js';
export default {
    data() {
        return {
            commentTypeFilter,
            formParams: {
                status: 1,
                text: ''
            },
            tableFun: 'getList',
            tableData: [],
            tableTitle: [
                { label: '热门', width: 100, prop: 'name' },
                { label: '状态', prop: 'msg', filter: this.commentTypeFilter},
            ],
        };
    },
    methods: {
        // 其他参数
        otherParams(){
            let p = { ...this.formParams, ...this.pageParams };
            return this.deleteEmptyParams(p);
        },
        // 获取列表
        start(){
            let imgArr = [
                { url: 'https://mh.huodigou.cn/static/upload/images/goods/2019/01/14/1547450781101144.jpg' },
                { url: 'https://mh.huodigou.cn/static/upload/images/goods/2019/01/14/1547451274847894.jpg' },
                { url: 'https://mh.huodigou.cn/static/upload/images/goods/2019/01/14/1547451909951171.jpg' },
                { url: 'https://mh.huodigou.cn/static/upload/images/goods/2019/01/14/1547452474332334.jpg' },
                { url: 'https://mh.huodigou.cn/static/upload/images/goods/2019/01/14/1547452714324599.jpg' },
                { url: 'https://mh.huodigou.cn/static/upload/images/goods/2019/01/14/1547453000703308.jpg' },
            ];
            let index1 = 10;
            let index2 = 20;
            let index3 = 30;
            let img1 = document.getElementById('img1');
            let img2 = document.getElementById('img2');
            let img3 = document.getElementById('img3');
            setInterval(() => {
                index1++;
                index2++;
                index3++;
                index1 = index1 % imgArr.length;
                index2 = index2 % imgArr.length;
                index3 = index3 % imgArr.length;
                imgArr.forEach(m => {
                    img1.src = imgArr[index1].url;
                    img2.src = imgArr[index2].url;
                    img3.src = imgArr[index3].url;
                });

            },1000);
        },
    }
};
</script>
<style lang="less" scoped></style>
