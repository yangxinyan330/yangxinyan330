<template>
    <div>
        <van-pull-refresh v-model="refreshLoading" @refresh="onRefresh">
            <van-list
                v-model="isLoading"
                :finished="isFinished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <van-cell v-for="item in list" :key="item.id">
                    {{ item.id }}-{{ item.title }}
                </van-cell>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
export default {
    props: {
        list: { type: Array, default: () => { return []; } },
        refreshLoading: { type: Boolean, default: () => { return false; } },
        isLoading: { type: Boolean, default: () => { return false; } },
        isFinished: { type: Boolean, default: () => { return false; } },
    },
    data(){
        return {
            refreshLoading: false,
            isLoading: false,
            isFinished: false,
        };
    },
    methods: {
        onRefresh(){
            this.$emit('mixinOnRefresh');
        },
        onLoad(){
            this.$emit('mixinOnLoad');
        }
    }
};
</script>
<style lang="less" scope>

</style>
