<template>
    <!-- eslint-disable vue/singleline-html-element-content-newline -->
    <div class="index">
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './AAA' })">所有</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: '/newMethods' })">不同写法</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: '/echart' })">echart走势图</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './checkMore' })">查看更多</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './tree' })">tree树</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './form' })">form表单</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './monitor' })">监控系统</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './confirm' })">confirm弹窗</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './quill' })">quill富文本</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './nineGe' })">九宫格</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './dateTime' })">时间前后段</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './loading' })">下拉加载</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './previewFile' })">预览及下载文件</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './uploadImg' })">上传图片</el-button></p>
        <!-- <p><el-button type="primary" size="medium" @click="$router.push({ path: './stores' })">vuex</el-button></p> -->
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './input' })">input输入框</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './addLess' })">加减法</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './attrs2' })">$attrs2</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './reduce' })">reduce</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './set' })">$set</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './slot' })">slot</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './table' })">table</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './numbers' })">数字处理</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './checkboxRadio' })">复选和单选</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './tooltip' })">气泡弹窗</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './popover' })">气泡弹窗2</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './promise' })">promise</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './debounce' })">防抖节流</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './AAA' })">所有</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './vuex' })">vuex</el-button></p>
        <p><el-button type="primary" size="medium" @click="$router.push({ path: './dynamicComponent' })">动态组件</el-button></p>
        <!-- <div class="test-bg" /> -->
    </div>
</template>

<script>
import { setItem, getItem, removeItem } from '../utils/storage.js';
export default {
    data(){
        return {
            nums: 44442.876,
            phone: '15708474842',
        };
    },
    mounted() {
        const time = '2020-20-20 13:13:13';
        console.log('年月日',time.split(' ')[0]);
        console.log('时分秒',time.split(' ')[1]);


        const arr = [
            { 'name': '123', age: '19' },
            { 'name': '345', age: '30' },
        ];
        setItem('nums', arr);
        console.log(getItem('nums'));
        this.closeTimer = setTimeout(() => {
            removeItem('nums');
        },1000);
    },
    beforeDestroy() {
        clearTimeout(this.closeTimer);
    },
};
</script>

<style lang="less" scoped>
.test-bg{
    background: url('../assets/images/icon-bg.png');
    width: 200px;
    height: 200px;
}
    .wrapper {
        width: 100px;
        height: 500px;
        border: 2px solid red;
        box-sizing: border-box;
        overflow: scroll;
    }
    .content {
        border: 2px solid green;
        height: 50000px;
    }
    .index{
        padding: 0 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        p{
            width: 25%;
            padding: 10px 0;
        }
        .test{
            display: block;
            width: 100%;
        }
    }
</style>
