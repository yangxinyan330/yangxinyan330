<template>
    <div>
        <quill-editor
            ref="myQuillEditor"
            v-model="value"
        />
    </div>
</template>

<script>
import { timestampToTime } from '../utils/date.js';
export default {
    data(){
        return {
            value: '',
        };
    },
    mounted(){
        let t = 2000;
        let set1 = setInterval(fn, t);
        function fn() {
            console.log('我是用来测试打印速度的');
            t = 5000;
            clearInterval(set1);
            if (t > 0) {
                set1 = setInterval(fn, t);
            }
        }
        console.log(timestampToTime(1648734289));
    },
};
</script>

<style lang="less" scoped>
    /deep/ .ql-editor{
        min-height: 300px;
    }
</style>
