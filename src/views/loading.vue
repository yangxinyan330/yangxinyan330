<template>
    <div>
        <div class="list_arr">
            <van-pull-refresh v-model="refreshLoading" @refresh="mixinOnRefresh">
                <van-list
                    v-model="isLoading"
                    :finished="isFinished"
                    finished-text="没有更多了"
                    @load="mixinOnLoad"
                >
                    <van-cell v-for="item in loadingList" :key="item.id">
                        {{ item.id }}-{{ item.title }}
                    </van-cell>
                </van-list>
            </van-pull-refresh>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            loadingList: [],
            formParams: {
                page: 1,
                size: 50
            }
        };
    },
    mounted(){
        this.confirmBox(this.getList, '是否加载此次请求？');
    },
    methods: {
        async getList(){
            try{
                let res = await this.$http('getListPage', this.formParams);
                if(res.value.records.length > 0){
                    this.loadingList = [...this.loadingList, ...res.value.records];
                    this.isFinished = false;
                }else{
                    this.isFinished = true;
                }
                this.isLoading = false;
                this.refreshLoading = false;
            }catch(err){
                console.log('err===',err);
            }
        },

    }
};
</script>

<style lang="less" scoped>
    ::v-deep .list_arr{
        max-height: 500px;
        overflow-y: scroll;
    }
</style>
