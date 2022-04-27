<template>
    <div>
        <p>加法：{{ add }}</p>
        <p>减法：{{ less }}</p>
        <p>时间戳差值：{{ time }}</p>
    </div>
</template>

<script>
import { isAdd, isLess } from '../utils/index.js';
import { dateDiffs } from '../utils/date.js';
import { DELIVERY_TYPE } from '../invariable/index.js';
export default {
    data(){
        return {
            isAdd,
            isLess,
            dateDiffs,
            DELIVERY_TYPE,
            list: [
                { name: '111', age: 180 },
                { name: '222', age: 181 },
                { name: '333', age: 182 },
                { name: '444', age: 183 },
            ],
            isHave: false
        };
    },
    computed: {
        getLists(){
            return this.list.filter((item,index) => {
                return !this.isHave && index < 3 || this.isHave;
            });
        },
        add(){
            return this.isAdd('100', 50);
        },
        less(){
            return this.isLess('100', 50);
        },
        time(){
            return this.dateDiffs('2020-02-27', '2020-03-02');
        },
    },
    mounted(){
        console.log(3333, this.DELIVERY_TYPE);
    },
};
</script>

<style lang="less" scoped>

</style>
