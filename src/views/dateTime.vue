<template>
    <div>
        <el-date-picker
            v-model="time"
            :picker-options="pickerOptions"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="选择日期时间"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            time: '',
            pickerOptions: {
                disabledDate(time) {
                    // return time.getTime() < Date.now() - 8.64e7; // 当日之后
                    return time.getTime() > Date.now(); // 当日之前
                }
            }
        };
    },
    mounted() {
        let arr = ['张三1','张三2','张三3'];
        let obj = {
            a: 10,
            b: 100,
            c: 1000
        };
        // 数组： 两者都可
        // 对象： for in
        for (let k in arr) {
            console.log(k, arr[k]);
        }
        for (let k of arr) {
            console.log(k);
        }
        for (let k in obj) {
            console.log(k, obj[k]);
        }
    }
};
</script>

<style lang="less" scoped></style>
