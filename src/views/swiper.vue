<template>
    <div>
        <ul>
            <li
                v-for="(item, index) in getLists"
                :key="index"
            >
                {{ item.name }}
            </li>
        </ul>
        <el-button
            type="primary"
            @click="isHave = !isHave"
        >
            {{ isHave ? "收起更多" : "查看更多" }}
            <img
                src="../assets/images/icon-bottom.png"
                alt=""
                :style="{ transform: isHave ? 'rotate(180deg)' : 'rotate(0deg)' }"
            >
        </el-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list: [
                { name: '111', age: 180 },
                { name: '222', age: 181 },
                { name: '333', age: 182 },
                { name: '444', age: 183 },
            ],
            isHave: false
        };
    },
    computed: {
        getLists(){
            return this.list.filter((item,index) => {
                return !this.isHave && index < 3 || this.isHave;
            });
        }
    },
};
</script>

<style lang="less" scoped>

</style>
