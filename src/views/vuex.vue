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
    methods: {
        ...mapMutations(['setCount']),
        ...mapActions(['asyncSetText']),
    },
};
</script>

<style lang="less" scoped></style>
