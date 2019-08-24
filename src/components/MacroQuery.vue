<template>
    <div id="MacroQuery">
        <Header></Header>

        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/query' }">数据查询</el-breadcrumb-item>
            <el-breadcrumb-item>宏观数据</el-breadcrumb-item>
        </el-breadcrumb>

        <el-row>
            <el-col :span="12">
                <div style="margin: 30px">
                    <el-table
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column
                                prop="date"
                                label="日期"
                                width="150">
                        </el-table-column>
                        <el-table-column label="报价银行">
                            <el-table-column
                                    prop="gongshang"
                                    label="工商银行">
                            </el-table-column>
                            <el-table-column
                                    prop="nongye"
                                    label="农业银行">
                            </el-table-column>
                        </el-table-column>
                    </el-table>
                </div>
                <el-row>
                    <el-col :span="12">
                        <el-button type="warning">最新SHIBOR报价</el-button>
                    </el-col>

                    <el-col :span="12">
                        <el-button type="warning">最近SHIBOR报价</el-button>
                    </el-col>
                </el-row>
            </el-col>

            <el-col :span="12">
                <highcharts :options="chartOptions"></highcharts>
                <highcharts :options="chartOptions1"></highcharts>
            </el-col>
        </el-row>

        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    import {Chart} from 'highcharts-vue'
    export default {
        name: "MacroQuery",
        components:{
            Header,
            Footer,
            highcharts: Chart
        },
        data(){
            return {
                tableData:[{
                    date:'O/N',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },{
                    date:'1W',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },{
                    date:'2W',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },{
                    date:'1M',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },{
                    date:'3M',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },{
                    date:'6M',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },
                ],
                chartOptions: {
                    title: {
                        text: 'sample title'
                    },
                    series: [{
                        name:'sample',
                        data: [95,23,654,210,5,1] // sample data
                    }]
                },
                chartOptions1: {
                    title: {
                        text: 'sample title'
                    },
                    series: [{
                        name:'sample',
                        data: [12,58,6,5,8,20,4,15] // sample data
                    }]
                },
            }
        }
    }
</script>

<style scoped>

</style>