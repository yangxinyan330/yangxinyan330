<template>
    <div class="top">
        <el-button type="primary" @click="onClick">
            点击
        </el-button>
        <center v-model="myText" :title="title" :visible="visible" @close="onClose">
            <!-- <template #content> -->
            <div slot="content">
                {{ content }}
            </div>
            <!-- </template> -->
        </center>
    </div>
</template>

<script>
import center from './center.vue';
export default {
    components: {
        center
    },
    provide: {
        provideTest: 'provideTest',
    },
    data(){
        return {
            mytext: 'hello world!!!',
            title: '弹窗title',
            content: '弹窗content',
            visible: false
        };
    },
    mounted(){
        let arr = [100, 200, 100];
        let sum = arr.reduce((pre, next) => {
            return pre + next;
        }, 0);
        console.log('求和', sum);
        console.log('最大', Math.max(...arr));
        console.log('最小', Math.min(...arr));
        console.log('去重', [...new Set(arr)]);

        let arr2 = [
            { count: 10, name: '张三' },
            { count: 40, name: '张三' },
            { count: 50, name: '张三' },
        ];
        let sum2 = arr2.reduce((pre, next) => {
            return pre + next.count;
        }, -10);
        console.log('对象数组求和', sum2);
    },
    methods: {
        onClick(){
            this.visible = true;
        },
        onClose(){
            this.visible = false;
        }
    }
};
</script>

<style lang="less" scoped>

</style>
