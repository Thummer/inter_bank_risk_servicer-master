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
                <h1>银行查询</h1>
                <el-cascader-panel :options="options" @change="getCheckedNodes"></el-cascader-panel>
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
                tableData:[{        //TODO 表格数据已经过测试, 可以直接从后台获取Json数据, 注意获取到的数据与表格中数据命名不同的问题.
                    data:'Cost to income ratio',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },{
                    data:'Liquid Assets',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },{
                    data:'L Gross',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },{
                    data:'L less',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },{
                    data:'Tier 1 Ratio',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },{
                    data:'Level',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },
                ],
                options: [{     //TODO 这里尚未完成, 思路为列表数据通过axios动态地从后台获取
                    value: 'hebei',
                    label: '河北省',
                    children: [{
                        value: 'shejiyuanze',
                        label: '设计原则',
                    }, {
                        value: 'daohang',
                        label: '导航',
                    }]
                },
                    {
                    value: 'ziyuan',
                    label: '山东',
                    children: [{
                        value: 'axure',
                        label: 'Axure Components'
                    }, {
                        value: 'sketch',
                        label: 'Sketch Templates'
                    }, {
                        value: 'jiaohu',
                        label: '组件交互文档'
                    }]
                }]

            }
        },
        methods:{//TODO 这里可以获取选中的标签, 可以在这里写选中某个银行之后进行数据查询并重新渲染表格以获取数据.
            getCheckedNodes(val){
                // console.log(val)
            }
        }
    }
</script>

<style scoped>

</style>