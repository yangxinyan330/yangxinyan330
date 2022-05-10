<template>
    <div class="MMM">
        <!-- <div v-html="val" /> -->
        <child>
            <div>我是默认插槽---父组件</div>
            <template #content>
                <div>我是具名插槽---content</div>
            </template>
            <template #footer>
                <div>我是具名插槽---footer</div>
            </template>
            <template #header="defaultText">
                <div>作用域插槽内容：{{ defaultText.text }}</div>
            </template>
        </child>
    </div>
</template>

<script>
import child from './slot2.vue';
export default {
    components: {
        child
    },
    data(){
        return {
            val: '<span>1111</span>'
        };
    },
    mounted(){
        function fun1(){
            let n = 100;
            function fun2(){
                console.log('闭包===1', n);
            }
            return fun2;
        }
        let result1 = fun1();
        result1();

        let arr1 = [1,2,3];
        let arr2 = arr1;
        arr2[0] = 100;
        console.log('数组1', arr1);
        console.log('数组2', arr2);
        console.log('浅拷贝', arr2 === arr1);

        let arr5 = [100,200,100,5];
        let newArr = [];
        let newArr2 = [...new Set(arr5)].sort((x, y) => {
            return y-x;
        });
        for(let i of arr5){
            if(!newArr.includes(i)){
                newArr.push(i);
            }
        }
        console.log('数组去重', newArr, newArr2);

        let ass1 = { a: 1, b: 2 };
        let ass2 = { a: 100, c: 200 };
        console.log('枚举属性', Object.assign(ass1, ass2));

        let obj = {
            a: 1,
            obj: {
                b: 100,
                list: [
                    { id: 1, label: '中国' }
                ]
            }
        };
        let obj2 = obj;
        console.log('浅拷贝---1', obj2);
        // console.log('深拷贝---1', JSON.parse(JSON.stringify(obj)));

        let types = typeof NaN;
        console.log('数据数据类型===', types);
    },
    created(){
        // this.$nextTick;
        console.log('$nextTick',this.$refs.input);
        // this.$nextTick(() => {
        //     console.log('$nextTick',this.$refs.input);
        // });
        // this.val = this.val * 2;
    },
};
</script>

<style lang="less" scoped>

</style>
