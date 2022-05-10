<template>
    <div>
        <p>state: {{ stateCount }}</p>
        <p>getters: {{ stateText }}</p>
        <div>
            <el-button @click="setCount">
                mutationBtns
            </el-button>
            <el-button @click="asyncSetText">
                actionBtns
            </el-button>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    data() {
        return {

        };
    },
    computed: {
        // ...mapState(['stateCount']), // 无modules写法
        ...mapState({
            stateCount: state => state.a.stateCount,
            stateText: state => state.b.stateText
        }),
    },
    mounted(){
        let arr = [1, 3, 1, 2, 3, 4];
        console.log('去重---1', [...new Set(arr)]);
        console.log('去重---2', Array.from(new Set(arr)));
        let newArr = [];
        for(let i of arr){
            console.log(i);
            if(!newArr.includes(i)){
                newArr.push(i);
            }
        }
        console.log('去重---3', newArr);
    },
    methods: {
        ...mapMutations(['setCount']),
        ...mapActions(['asyncSetText']),
    },
};
</script>

<style lang="less" scoped></style>
