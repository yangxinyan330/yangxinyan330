<template>
    <div>
        <el-input id="myipt" v-model="test" type="text" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            test: 111
        };
    },
    mounted(){
        // 防抖：防止多次触发，只执行最后一次(节约性能)
        // 节流：控制执行次数
        let ipt = document.getElementById('myipt');
        ipt.oninput = this.debounce( ()=> {
            console.log('防抖===', ipt.value);
        }, 500);
        window.onscroll = this.debounce( ()=> {
            console.log('节流===', ipt.value);
        }, 500);

    },
    methods: {
        debounce(fn, time){
            let t = null;
            // eslint-disable-next-line no-unused-vars
            let p = false;
            return function(){
                if(t){
                    clearTimeout(t);
                }
                t = setTimeout(() => {
                    // this原本指向input,call改变指向全局
                    fn();
                    p = true;
                    // fn.call(this);
                }, time);
                p = false;
            };
        }
    }
};
</script>

<style lang="less" scoped>
    div{
        height: 2000px;
    }
</style>
