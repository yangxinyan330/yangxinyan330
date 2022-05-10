<template>
    <div class="form container">
        <el-button @click="handleHash">
            hash修改路径
        </el-button>
        <el-button @click="handleHistory">
            history修改路径
        </el-button>
        <div class="test">
            <span>我是</span>
            <span>小明</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '王麻子'
        };
    },
    mounted(){
        let obj = {
            name: '张三',
            obj2: {
                name: '李四',
                fun: () =>{
                    console.log('this---1', this.name);
                    // console.log('我的名字111===' + this.name);
                    setTimeout(function(){
                        console.log('this---2', this.name);
                        // console.log('我的名字222===' + this.name);
                        setTimeout(function(){
                            console.log('this---3', this.name);
                        }, 500);
                    },500);
                }
            }
        };
        obj.obj2.fun();

        // let id = 'Global';
        function fun1() {
            // setTimeout中使用普通函数
            setTimeout(function(){
                console.log(this.id);
            }, 2000);
        }
        function fun2() {
            // setTimeout中使用箭头函数
            setTimeout(() => {
                console.log(this);
            }, 2000);
        }
        fun1.call({id: 'Obj'}); // 'Global'
        fun2.call({id: 'obj'}); // 'Obj'

        let arr = [
            { id: 1, name: '张三--1' },
            { id: 2, name: '张三--2' },
            { id: 3, name: '张三--3' },
            { id: 2, name: '张三--4' },
        ];
        let objs = {
            id: 2, name: '王麻子'
        };
        arr.forEach((m, index) => {
            // return m.id === objs.id ? objs : m;
            if(m.id === objs.id){
                m.isType = true;
            }
        });
        for(let i of arr){
            if(i.id === 2){
                console.log('index----', i.name);
                // return;
                break;
            }
        }
        console.log('当前arr' ,arr);

        console.log('some----newArr', arr.every(m => m.id > 0));
        console.log('oldArr', arr);

    },
    methods: {
        handleHash(){
            window.location.hash = '#/CCC';
        },
        handleHistory(){
            history.pushState({}, '', '#/DDD');
        },
    }
};
</script>
<style lang="less" scoped>
    .test{
        overflow: hidden;
        span{
            margin: 0 10px;
        }
    }
</style>
