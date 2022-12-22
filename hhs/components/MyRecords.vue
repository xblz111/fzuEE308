<template>
    <div>
        <div class="h-30 bg-light-50 flex justify-end items-center">
            <div class="flex justify-center items-center mr-20">
                <img src="../assets/img/sp/tit2.png" alt="">
            </div>
        </div>

        <div class="flex justify-center items-center">
            <div @click="tab(0)"
                class="bg-light-50 leading-12 h-12 w-1/2 text-center text-xl font-bold text-orange-900 rounded-tr-xl cursor-pointer"
                :class="{'bg-turntable':activeIndex==0}">
                Dietary records
            </div>
            <div @click="tab(1)"
                class="bg-light-50 leading-12 h-12 w-1/2 text-center text-xl font-bold text-orange-900 rounded-tl-xl cursor-pointer"
                :class="{ 'bg-turntable': activeIndex == 1 }">
                Weight statistics
            </div>
        </div>

        <div class="bg-turntable w-full h-200 justify-center items-center felx coulmn relative">
            <!-- 表格 -->
            <div v-if="activeIndex == 0">
                <div class="table  w-full">
                    <div class="table-header-group h-12 leading-12">
                        <div class="table-row ">
                            <div class="table-cell  text-center">Data</div>
                            <div class="table-cell  text-center">Food</div>
                            <div class="table-cell  text-center">Calories</div>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-row">
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                        </div>
                        <div class="table-row">
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                        </div>
                        <div class="table-row">
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                        </div>
                        <div class="table-row">
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                        </div>
                        <div class="table-row">
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                        </div>
                        <div class="table-row">
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                        </div>
                        <div class="table-row">
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                        </div>
                        <div class="table-row">
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                        </div>
                        <div class="table-row">
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                        </div>
                        <div class="table-row">
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                        </div>
                        <div class="table-row">
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                        </div>
                        <div class="table-row">
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                        </div>
                        <div class="table-row">
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                        </div>
                        <div class="table-row">
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                        </div>
                        <div class="table-row">
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput1 border-0 outline-none text-center" type="text"></div>
                        </div>
                        <div class="table-row">
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                            <div class="table-cell borderLine"><input class="w-full bgInput2 border-0 outline-none text-center" type="text"></div>
                        </div>
                    </div>
    
                </div>
            </div>
            <!-- 数据图 -->
            <div class="flex justify-around items-start pt-30" v-if="activeIndex == 1">
                <div class="w-160">
                    <div class="font-bold text-xl mb-4">January</div>
                    <div class="flex justify-around items-center border-b-dark-900 " style="border-bottom-width: 1px;">
                        <span>Date</span>
                        <span>Weight</span>
                    </div>
                    <div class="flex justify-around items-center border-b-dark-900 " style="border-bottom-width: 1px;">
                        <span>7th</span>
                        <span>55.2</span>
                    </div>
                    <div class="flex justify-around items-center border-b-dark-900 " style="border-bottom-width: 1px;">
                        <span>6th</span>
                        <span>55.2</span>
                    </div>
                    <div class="flex justify-around items-center border-b-dark-900 " style="border-bottom-width: 1px;">
                        <span>5th</span>
                        <span>55</span>
                    </div>
                    <div class="flex justify-around items-center border-b-dark-900 " style="border-bottom-width: 1px;">
                        <span>4th</span>
                        <span>55.5</span>
                    </div>
                    <div class="flex justify-around items-center border-b-dark-900 " style="border-bottom-width: 1px;">
                        <span>3rd</span>
                        <span>55.7</span>
                    </div>
                    <div class="flex justify-around items-center border-b-dark-900 " style="border-bottom-width: 1px;">
                        <span>2nd</span>
                        <span>55.4</span>
                    </div>
                    <div class="flex justify-around items-center border-b-dark-900 " style="border-bottom-width: 1px;">
                        <span>1st</span>
                        <span>55</span>
                    </div>
                    <div class="flex justify-around items-center border-b-dark-900 " style="border-bottom-width: 1px;">
                        <span> &nbsp;</span>
                        <span> </span>
                    </div>
                    <div class="flex justify-around items-center border-b-dark-900 " style="border-bottom-width: 1px;">
                        <span> &nbsp;</span>
                        <span> </span>
                    </div>
                    <div class="flex justify-around items-center border-b-dark-900 " style="border-bottom-width: 1px;">
                        <span> &nbsp;</span>
                        <span> </span>
                    </div>
                    <div class="flex justify-around items-center border-b-dark-900 " style="border-bottom-width: 1px;">
                        <span> &nbsp;</span>
                        <span> </span>
                    </div>
                    <div class="flex justify-around items-center border-b-dark-900 " style="border-bottom-width: 1px;">
                        <span> &nbsp;</span>
                        <span> </span>
                    </div>
                    <div class="flex justify-around items-center border-b-dark-900 " style="border-bottom-width: 1px;">
                        <span> &nbsp;</span>
                        <span> </span>
                    </div>
                    <div class="flex justify-around items-center border-b-dark-900 " style="border-bottom-width: 1px;">
                        <span> &nbsp;</span>
                        <span> </span>
                    </div>


                </div>
                <div class="w-170 h-100" id="echartsWeight"></div>
            </div>

        </div>





    </div>

</template>

<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {
            activeIndex: 0
        }
    },
    methods: {
        tab(index) {
            this.activeIndex = index
            if (index == 1) {
                this.$nextTick(() => {
                    this.getmain();
                })

            }
        },

        getmain() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echartsWeight'));
            // 绘制图表
            myChart.setOption({
                title: {
                    text: ''
                },
                tooltip: {},
                xAxis: {
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                legend: {
                    data: ['Week of Weight'],
                    x: 'center',
                    y: 'bottom',
                },
                yAxis: { type: 'value' },
                series: [
                    {
                        name: 'Week of Weight',
                        type: 'line',
                        stack: 'Total',
                        data: [55, 55.4, 55.7, 54.5, 55, 55.2, 55.2]
                    }
                ]
            });
        },
    },

    mounted() {
        this.getmain();
    },

    created() {
        // this.getmain()
    }
}
</script>

<style lang="less" scoped>
.bg-turntable {
    background: #f7e3c2;
}

/deep/.el-container .el-main {
    background-color: #fff !important;
}

body {
    background-color: #fff !important;
}
.borderLine{
    border: 1px solid #918d86;
}
.bgInput1{
    background: #e6c4ab;
}
.bgInput2{
    background: #f7e3c2;
}
</style>
