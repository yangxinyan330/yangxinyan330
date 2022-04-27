<template>
    <div />
</template>

<script>
import { objArr } from '../utils/index.js';
export default {
    data() {
        return {
            objArr
        };
    },
    mounted(){
        let objArr = [
            { id: 1, name: 'AA' },
            { id: 2, name: 'BB' },
            { id: 3, name: 'BB' },
            { id: 2, name: 'AA' },
        ];
        let stringArr = [100, 20, 1, 20, 100];
        let newArr = [...new Set(stringArr)].sort(function(a,b){
            return a-b;
        });
        console.log('对象数组去重', this.objArr(objArr));
        console.log('字符串数组去重', newArr);

        // 如果初始值0 会从索引0开始计算(并且空数组不会报错); 反正则从1开始计算
        // pre: 初始值/计算后的返回值    next：当前元素     index: 当前元素索引
        let sum = stringArr.reduce((pre, next, index) => {
            console.log('参数', pre, next, index);
            return pre + next;
        }, 0);
        console.log('求和', sum);
    },
    methods: {

    }
};
</script>

<style lang="less" scoped>
    .list_arr{
        max-height: 100px;
        overflow-y: scroll;
        border: 1px solid red;
    }
</style>
