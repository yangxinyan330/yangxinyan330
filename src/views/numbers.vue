<template>
    <div>
        <p>超过一万显示W：{{ handleCount(count) }}</p>
        <p>保留两位：{{ count | filterCount }}</p>
    </div>
</template>

<script>
import { handleCount } from '@/utils/numbers.js';
export default {
    data(){
        return {
            handleCount,
            count: 123456.568,
        };
    },
    mounted(){
        /*
            闭包：函数嵌套函数，内部函数就是闭包
                 函数访问所在的词法作用域，一个函数和它周围状态的引用捆绑在一起的组合
                特性: 内部函数没有执行完成，外部函数变量不会被销毁
                应用：封装代码
        */
        function f1(){
            let a = 1;
            return function f2(){
                console.log('闭包---', a);
            };
        }
        const fun1 = f1();
        fun1();

        //
        function f3(f4){
            // eslint-disable-next-line no-unused-vars
            const a = 100;
            f4();
        }
        const a = 200;
        function f4(){
            // a 会查往上或者周围查找
            console.log('a===', a);
        }
        f3(f4); // 200

        // 立即执行函数写法
        let all = (function(){
            let a = 10000;
            let b = 20000;
            function f1(){
                return a + b;
            }
            function f2(){
                return a - b;
            }
            return { f1, f2 };
        })();
        const res1 = all.f1();
        const res2 = all.f2();
        console.log('res1====', res1);
        console.log('res2====', res2);
    },
};
</script>

<style lang="less" scoped></style>
