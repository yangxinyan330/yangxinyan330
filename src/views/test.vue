<template>
    <div class="test-page">
        <div class="test-page-title">
            <div>应用中心 Application center</div>
            <div>前往应用中心 Go to application center>></div>
        </div>
        <div class="test-page-content">
            <div class="tabs">
                <div v-for="(item, index) in tabList" :key="item.key" :class="['tabs-item', { 'tabs-item-active': tabIndex === index }]" @click="handleTabs(index)">
                    <div>{{ item.label }}</div>
                    <div>{{ item.label2 }}</div>
                </div>
            </div>
            <div class="list">
                <div v-for="item in tableData" :key="item.id" class="list-item">
                    <div><img :src="handleImg(item.status)" alt="" class="list-item-img"></div>
                    <div>{{ item.label }}</div>
                    <div>({{ item.status !== 0 ? handleStatus(item.status) :item.label2 }})</div>
                </div>
                <div class="list-item list-page">
                    <div class="item">
                        <div>上一页 Prievious</div>
                        <div>下一页 Next</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            img1: require('@/assets/images/icon-1.png'),
            img2: require('@/assets/images/icon-2.png'),
            img3: require('@/assets/images/icon-3.png'),
            params: {
                current: 1,
                pageSize: 20,
            },
            tabIndex: 0,
            tabList: [
                { key: 1, label: '我的常用应用', label2: 'My applications' },
                { key: 2, label: '生产应用系统', label2: 'Production apps' },
                { key: 3, label: 'HSSE相关应用系统', label2: 'HSSE-related' },
                { key: 4, label: '办公应用系统', label2: 'Offce apps' },
                { key: 5, label: '预留', label2: 'coming soon' },
                { key: 6, label: '预留', label2: 'coming soon' },
            ],
            tableData: [
                // status: 0正常显示  1使用中  2即将上线 3异常
                { id: 1, label: '我的常用应用', label2: 'BSC', status: 0 },
                { id: 2, label: '作业预报系统', label2: 'SWF', status: 1 },
                { id: 3, label: '我的常用应用', label2: 'ASD', status: 2 },
                { id: 4, label: '我的常用应用', label2: 'BSD', status: 3 },
                { id: 5, label: '我的常用应用', label2: 'ARS', status: 1 },
                { id: 6, label: '我的常用应用', label2: 'ARS', status: 0 },
                { id: 7, label: '我的常用应用', label2: 'ARS', status: 1 },
                { id: 8, label: '我的常用应用', label2: 'ARS', status: 0 },
                { id: 9, label: '我的常用应用', label2: 'ARS', status: 1 },
                { id: 10, label: '我的常用应用', label2: 'ARS', status: 1 },
                { id: 11, label: '我的常用应用', label2: 'BSC', status: 0 },
                { id: 12, label: '作业预报系统', label2: 'SWF', status: 1 },
                { id: 13, label: '我的常用应用', label2: 'ASD', status: 2 },
                { id: 14, label: '我的常用应用', label2: 'BSD', status: 3 },
                { id: 15, label: '我的常用应用', label2: 'ARS', status: 0 },
                { id: 16, label: '我的常用应用', label2: 'ARS', status: 0 },
                { id: 17, label: '我的常用应用', label2: 'ARS', status: 0 },
                { id: 18, label: '我的常用应用', label2: 'ARS', status: 0 },
                { id: 19, label: '我的常用应用', label2: 'ARS', status: 0 },
                { id: 20, label: '我的常用应用', label2: 'ARS', status: 0 },
            ]
        };
    },
    // computed: {
    //     imgPath(){
    //         retur
    //     }
    // },
    methods: {
        // 状态处理(正式开发需提出去)
        handleStatus(status){
            let title = '';
            const statusArr = {
                1: () => title = '使用中',
                2: () => title = '即将上线',
                3: () => title = '异常',
            };
            statusArr[status] ? statusArr[status]() : title = '';
            return title;
        },
        handleImg(status){
            let title = '';
            const statusArr = {
                0: () => title = this.img1,
                1: () => title = this.img1,
                2: () => title = this.img2,
                3: () => title = this.img3,
            };
            statusArr[status] ? statusArr[status]() : title = '';
            return title;
        },
        // 选项卡
        handleTabs(index){
            this.tabIndex = index;
        }
    }
};
</script>
<style lang="less" scoped>
    .test-page{
        border: 1px solid #666;
        padding: 20px;
        color: #8a8a8a;
        &-title{
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: rgb(7, 171, 230);
            margin-bottom: 10px;
            &>div{
                &:first-child{
                    font-size: 24px;
                    font-weight: bold;
                }
                &:last-child{
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
        }
        &-content{
            .tabs{
                display: flex;
                &-item{
                    flex: 1;
                    text-align: center;
                    background: #eee;
                    border-top-left-radius: 4px;
                    border-top-right-radius: 4px;
                    border: 1px solid #ddd;
                    padding: 10px 0;
                    cursor: pointer;
                    &-active{
                        color: rgb(7, 171, 230);
                        background: white;
                    }
                }
            }
            .list{
                display: flex;
                flex-wrap: wrap;
                padding: 10px 0;
                &-item{
                    width: calc(14.28% - 8.6px);
                    text-align: center;
                    margin: 7px 0;
                    &:not(:nth-child(7n)){
                        margin-right: 10px;
                    }
                    &-img{
                        width: 80px;
                    }
                }
                &-page{
                    color: rgb(7, 171, 230);
                    font-size: 12px;
                    text-align: left;
                    display: flex;
                    align-items: flex-end;
                    .item{
                        &>div{
                            cursor: pointer;
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
</style>
