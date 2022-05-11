<template>
    <div>
        <section class="layout">
            <div class="layout_chart">
                <ul class="chart">
                    <li
                        v-for="(item,index) in gripOPtion"
                        :key="index"
                        class="chart_column cl"
                    >
                        <div
                            v-for="(v_item,v_index) in item"
                            :key="v_index"
                            :style="{backgroundColor:v_item.bgColor}"
                            class="chart_column__item"
                        >
                            {{ v_item.text }}
                            <p v-if="type === 'myself'">
                                <i
                                    v-if="chartData && v_item.value == chartData.num"
                                    class="iconfont iconxingxing"
                                />
                            </p>
                            <div
                                v-else
                                class="user_list"
                                @click="showMore(filterChartData[v_item.value],v_item.text)"
                            >
                                <template v-for="(vv_item,vv_index) in filterChartData[v_item.value].slice(0,3)">
                                    {{ vv_item.staffName }}{{ vv_item.rank }}
                                    <van-icon
                                        v-if="vv_index === 2 && filterChartData[v_item.value].length > 3"
                                        :key="vv_index"
                                        name="arrow-down"
                                        size="8"
                                    /> <br :key="vv_index">
                                </template>
                            </div>
                        </div>
                    </li>
                </ul>
                <section class="yais">
                    <div>90以上</div>
                    <div>70-90分</div>
                    <div>70以下</div>
                </section>
                <section class="xais">
                    <div>0-70%</div>
                    <div>70-90%</div>
                    <div>90%以上</div>
                </section>
                <section class="ytitle">
                    能力/潜力
                </section>
                <section class="xtitle">
                    绩效
                </section>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        chartData: {
            type: Array,
            default: () => {
                [];
            }
        },
        type: {
            type: String,
            default: 'myself'
        }
    },
    data(){
        return {
            showPopup: false,
            moreList: [],
            moreListTitle: '',
            gripOPtion: [
                [
                    { value: 4, text: '4.待发展者', bgColor: '#7FDFA9' },
                    { value: 7, text: '7.潜力之星', bgColor: '#FFB1AF' },
                    { value: 9, text: '9.超级明星', bgColor: '#EB4944' },
                ],
                [
                    { value: 2, text: '2.差距员工', bgColor: '#7FDFA9' },
                    { value: 5, text: '5.中坚力量', bgColor: '#FFB1AF' },
                    { value: 8, text: '8.绩效之星', bgColor: '#FFB1AF' },
                ],
                [
                    { value: 1, text: '1.不合格者', bgColor: '#1BCB69' },
                    { value: 3, text: '3.基本胜任', bgColor: '#7FDFA9' },
                    { value: 6, text: '6.熟练员工', bgColor: '#7FDFA9' },
                ]
            ]
        };
    }
};
</script>

<style lang="less" scoped>
    .layout {
        padding-left: 50px;
    }
    .layout_chart {
        display: flex;
        position: relative;
        justify-content: flex-start;
        align-items: flex-end;
        width: 250px;
        height: 180px;
        border-left: 2px solid #000;
        border-bottom: 2px solid #000;
        &::before,
        &::after {
            display: block;
            width: 0;
            height: 0;
            content: ''
        }
        &::before {
            top: -6px;
            left: -4px;
            border-bottom: 6px solid #000;
            border-left: 3px solid transparent;
            border-right: 3px solid transparent;
            background: #fff;

        }
        &::after {
            right: -6px;
            bottom: -4px;
            border-left: 6px solid #000;
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
            background: #fff;

        }
        .yais,
        .xais {
            color: #666666;
        }
        .yais {
            display: flex;
            flex-direction: row-reverse;
            flex-wrap: wrap;
            align-items: center;
            height: 100%;
            width: 58px;
            left: -68px;
            top: 0px;
            >div {
                text-align: right;
                font-size: 12px;
            }
        }
        .xais {
            width: 100%;
            display: flex;
            bottom: -22px;
            >div {
                text-align: center;
                flex: 1;
            }
        }
        .ytitle {
            top: -24px;
            left: -25px;
        }
        .xtitle {
            right: -32px;
            bottom: -8px;
        }
        .xtitle,
        .ytitle,
        .yais,
        .xais,
        &::before,
        &::after {
            position: absolute;
            font-size: 12px;
        }
        .xtitle,
        .ytitle {
            font-weight: bold;
            color: #000;
        }
    }
    .chart {
        .chart_column {
            display: flex;
            border-top: 0.5px solid #000;
            .chart_column__item {
                position: relative;
                font-size: 8px;
                border-right: 0.5px solid #000;
                width: 82.5px;
                height: 55px;
                box-sizing: border-box;
                line-height: 18px;
                padding: 2px 0 0 2px;
                color: #fff;
                overflow: hidden;
                .iconfont {
                    font-size: 20px;
                    color: #EB4944;

                }
                .user_list {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    text-overflow: ellipsis;
                    -webkit-box-orient: vertical;
                    overflow: hidden;

                }
            }
        }
    }
</style>
