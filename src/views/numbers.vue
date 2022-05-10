<template>
    <div>
        <p>超过一万显示W：{{ handleCount(count) }}</p>
        <p>保留两位：{{ count | filterCount }}</p>
        <p>手机号校验：{{ $checkMobile(phone) }}</p>
        <p>手机号隐藏：{{ $mobileMin(phone) }}</p>
        <p>加法：{{ add }}</p>
        <p>减法：{{ less }}</p>
        <p>时间戳差值：{{ time }}</p>
    </div>
</template>

<script>
import { handleCount, checkMobile, mobileMin, isAdd, isLess } from '@/utils/index.js';
import { dateDiffs } from '@/utils/date.js';
import { DELIVERY_TYPE } from '@/invariable/index.js';
export default {
    data(){
        return {
            handleCount,
            checkMobile,
            mobileMin,
            isAdd,
            isLess,
            dateDiffs,
            DELIVERY_TYPE,
            count: 123456.568,
            nums: 44442.876,
            phone: '15708474842',
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
