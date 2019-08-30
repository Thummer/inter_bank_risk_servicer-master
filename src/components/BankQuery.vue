<template>
    <div id="BankQuery">
        <Header></Header>

        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/query' }">数据查询</el-breadcrumb-item>
            <el-breadcrumb-item>银行数据</el-breadcrumb-item>
        </el-breadcrumb>

        <el-row>
            <el-col :span="12">
                <div style="margin: 30px">
                    <el-table
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column
                                prop="data"
                                label="指标"
                                width="150">
                        </el-table-column>
                        <el-table-column label="银行">
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
        name: "BankQuery",
        components:{
            Header,
            Footer,
            highcharts: Chart
        },
        data() {
            return {
                tableData:[{
                    data:'O/N',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },{
                    data:'1W',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },{
                    data:'2W',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },{
                    data:'1M',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },{
                    data:'3M',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },{
                    data:'6M',
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
                        data: [12,48,51,20,15,45,120,48,10,1] // sample data
                    }]
                },
                chartOptions1: {
                    title: {
                        text: 'sample title'
                    },
                    series: [{
                        name:'sample',
                        data: [150,620,6,5,80,5,157,80,12] // sample data
                    }]
                },
            }
        },
    }
</script>

<style scoped>

</style>