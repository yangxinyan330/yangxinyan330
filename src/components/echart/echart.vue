<template>
    <div class="hello">
        <div :id="id" :style="{ width: '100%', height: '300px' }" ref="myEchart"></div>
    </div>
</template>

<script>
export default {
    props: {
        id: { type: String, default: () => '' },
        title: { type: String, default: () => '' }, // 图形标题
        seriesList: { type: Array, default: () => [] }, // 图形参数
        colorList: { type: Array, default: () => [] }, // 颜色自定义
        legendList: { type: Array, default: () => [] }, // 图中可选项
        xList: { type: Array, default: () => [] }, // X轴参数
        tooltipType: { type: String, default: () => 'line' }, // 鼠标移入效果 line/shadow
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById(this.id));
            // 绘制图表
            myChart.setOption({
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: this.tooltipType // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                title: {
                    text: this.title
                },
                legend: {
                    data: this.legendList
                },
                color: this.colorList,
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: this.xList
                },
                yAxis: {
                    type: 'value'
                },
                series: this.seriesList
            });
        }
    }
};
</script>

<style scoped>

</style>
