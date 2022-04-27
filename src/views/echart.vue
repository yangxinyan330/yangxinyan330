<template>
    <div class="echartPage">
        <ul>
            <li>
                <echart
                    v-if="lineList.length"
                    id="echartLine"
                    title="N0.1"
                    :series-list="lineList"
                    :color-list="lineColor"
                    :legend-list="legendList"
                    :x-list="xList"
                />
            </li>
            <li>
                <echart
                    v-if="barList.length"
                    id="echartBar"
                    title="N0.2"
                    :series-list="barList"
                    :color-list="lineColor"
                    tooltip-type="shadow"
                    :legend-list="legendList"
                    :x-list="xList"
                />
            </li>
            <li>
                <echart
                    v-if="pieList.length"
                    id="echartPie"
                    title="N0.3"
                    :series-list="pieList"
                    :color-list="lineColor"
                    tooltip-type="shadow"
                    :legend-list="legendList"
                />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // "#ff1e17", "#83ffa6", "#ff55ff"
            lineColor: ['#ff1e17', '#83ffa6', '#ff55ff'],
            xList: [],
            legendList: [],
            lineList: [],
            barList: [],
            pieList: [{}],
        };
    },
    mounted() {
        const data1 = this.$store.state.data1;
        const data2 = this.$store.state.data2;
        // No.1
        this.xList = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        // this.legendList = this.xList;
        this.lineList = data1.map(m => ({ name: m.education, type: 'line', data: m.count }));
        this.barList = data1.map(m => ({ name: m.education, type: 'bar', barWidth: '10', data: m.count }));
        this.pieList[0].name = '数据参考';
        this.pieList[0].type = 'pie';
        this.pieList[0].radius = '50%';
        this.pieList[0].data = data2.map(m => ({ name: m.education, value: m.count }));
        // let itemStyle = {
        //     shadowBlur: 10,
        //     shadowOffsetX: 0,
        //     shadowColor: 'rgba(0, 0, 0, 0.5)'
        // };
        // this.pieList[0].emphasis.itemStyle = itemStyle;
        // No.2

        console.log(1, this.xList);
        console.log(2, this.legendList);
        console.log(3, this.lineList);
        console.log(4, this.pieList);
    },
    methods: {

    }
};
</script>

<style lang="less" scoped>
.echartPage{
    padding: 30px 0;
    ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
            width: 50%;
            padding: 20px;
        }
    }
}
</style>
