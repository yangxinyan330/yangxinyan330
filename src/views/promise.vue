<template>
    <div />
</template>

<script>
export default {
    data(){
        return {
            counts: 1
        };
    },
    mounted(){
        this.$http('getList')
        .then(res => {
            console.log('1---', res);
            return this.$http('getType');
        })
        .then(res => {
            console.log('2---', res);
            return this.$http('getData');
        })
        .then(res => {
            console.log('3---', res);
        })
        .catch(err => {
            console.error('err----', err);
        });

        // -------------------------------Promise--------------------------------
        /*
            优点：用一种链式结构将多个异步操作串联起来, 解决回调地狱
        */

        /*
            Promise状态一旦改变就不会第二次改变
            pending等待中    fulilled已完成(then)   rejected失败(catch)
                then/catch: 正常返回时, Promise状态是fulfilled
                            报错时, Promise状态是rejected
        */
        new Promise((resolve, reject) => {
            resolve(100);
        })
        .then(res => 2 * res) // 这里的res会把100包装成一个新的Promise对象返回;
        .then(res => console.log(res)); // 200

        /*
            all: 接收Promise数组, 所有方法成功就执行then, 有一个失败就执行catch
            race: 接收Promise数组, 无论成功或失败, 都会把第一个执行完的方法当成结果返回
        */
        const fun = (timer, type = true) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    type ? resolve(`成功===${type}`) : reject(`失败===${type}`);
                }, timer);
            });
        };
        Promise.race([fun(1000, false),fun(2000),fun(3000)])
        .then(res => {
            console.log('成功', res);
        })
        .catch(err => {
            console.log('失败', err);
        });

        // -------------------------------async/await--------------------------------
        // async: 定义异步函数(Promise对象函数), 返回Promise对象(如果不是Promise对象即封装后再返回)
        async function f1(){
            return 1;
        }
        async function f2(){
            return Promise.resolve(2);
        }
        const fun1 = f1();
        const fun2 = f2();
        console.log('fun1', fun1);
        console.log('fun2', fun2);
        // await: 跟表达式, 等待后边Promise对象执行完毕并拿到值后再执行后边代码(可能成功可能失败, await放在try/catch语句中);
        async function f3(){
            const data3 = await 3; // 等价于 await Promise.resolve(3); 封装后再返回
            console.log('f3', data3);
        }
        f3();

        let arr = [1, 2, 3];
        async function fun4(){
            for await(let i of arr) {
                console.log(`arrVal---${i}`);
            }
            console.log('已完成');
        }
        fun4().then(res => {
            console.log('成功了');
        });
        // http协议：
        //     客户端: 请求包括: 图片/文档/普通文本;
        //     服务端: 收到请求并相应
        //     请求头：token + 响应资源类型
        //     url结构：协议+主机+路径+查询参数
        //     http请求: 请求方式 + 请求路径 + 请求参数
        //         get: 获取资源  无请求体
        //         post: 创建资源  有请求体
        //         put: 更新资源   有请求体
        //         delete: 删除资源   无请求体
    },
};
</script>
<style lang="less" scoped></style>
