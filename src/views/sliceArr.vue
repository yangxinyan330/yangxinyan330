<template>
    <div>
        <h1>循环切片</h1>
        <div v-for="(item, index) in tableData" :key="index">{{ item }}</div>
        <h1>分段切片</h1>
        <div v-for="(item, index) in tableData2" :key="index + '_index'">{{ item }}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tableData: [],
            tableData2: [],
        };
    },
    mounted(){
        let arr1 = [1,2,3,4,5,6];
        let arr2 = [1,2,3,4,5,6];
        this.getSliceRes(arr1, 5);
        this.getSliceRes2(arr2, 5);
    },
    methods: {
        // 循环切片
        getSliceRes(arr, num){
            if (arr.length > num) {
                let slpiceArr = (x) => {
                    const y = arr.splice(0, x);
                    arr = arr.concat(y);
                    return y;
                };
                this.tableData = slpiceArr(num);
                this.LeaveTimer = setInterval(() => {
                    this.tableData = slpiceArr(num);
                }, 2000);
                return;
            }
            this.tableData = arr;
        },
        // 分段切片
        getSliceRes2(arr, num){
            if (arr.length > num) {
                let allData = []; // 用来装处理完的数组
                let currData = []; // 子数组用来存分割完的数据
                for (let i = 0; i < arr.length; i++) {
                    currData.push(arr[i]);
                    if (i !== 0 && (i + 1) % 5 === 0 || i === arr.length - 1) {
                        allData.push(currData);
                        currData = [];
                    }
                }
                let count = 1;
                let sliceArr = (x) => {
                    if (allData[x] && allData[x].length > 0) {
                        return allData[x];
                    }
                    count = 0;
                    return allData[0];
                };
                this.tableData2 = sliceArr(0);
                setInterval(() => {
                    this.tableData2 = sliceArr(count);
                    count++;
                }, 2000);
                return;
            }
            this.tableData2 = arr;
        }
    }
};
</script>

<style lang="less" scoped>

</style>
