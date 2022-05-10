<template>
    <div>
        <span>{{ value }}</span>
        <button @click="reduce">
            减少5
        </button>
    </div>
</template>

<script>
export default {
    props: {
        value: {type: Boolean,},
    },
    data(){
        return {
            dialogVisible: false,
        };
    },
    watch: {
        value(val){
            this.dialogVisible = val;
        },
    },
    methods: {
    // 关闭弹窗触发
        confrim(){
            this.$emit('input',false); // 通过 this.$emit() 向父组件传值
        }
    },
};
</script>
