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
                                label="日期"
                                prop="date"
                                width="150">
                        </el-table-column>
                        <el-table-column label="O/N"
                                         prop="on">
                        </el-table-column>
                        <el-table-column label="1W"
                                         prop="w1">
                        </el-table-column>
                        <el-table-column label="2W"
                                         prop="w2">
                        </el-table-column>
                        <el-table-column label="1M"
                                         prop="m1">
                        </el-table-column>
                        <el-table-column label="3M"
                                         prop="m3">
                        </el-table-column>
                        <el-table-column label="6M"
                                         prop="m6">
                        </el-table-column>
                        <el-table-column label="9M"
                                         prop="m9">
                        </el-table-column>
                        <el-table-column label="1Y"
                                         prop="y1">
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>

            <el-col :span="12">

                <highcharts :options="chartOptions"></highcharts>
                <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command= 0>O/N</el-dropdown-item>
                        <el-dropdown-item command= "1">1W</el-dropdown-item>
                        <el-dropdown-item command= "2">2W</el-dropdown-item>
                        <el-dropdown-item command= "3" >1M</el-dropdown-item>
                        <el-dropdown-item command= 4 >3M</el-dropdown-item>
                        <el-dropdown-item command= 5 >6M</el-dropdown-item>
                        <el-dropdown-item command= 6 >9M</el-dropdown-item>
                        <el-dropdown-item command= 7 >1Y</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
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
        components: {
            Header,
            Footer,
            highcharts: Chart
        },
        data() {

            const shibor = [[2.6340
                ,
                2.6340
                ,
                2.5440
                ,
                2.2610
                ,
                2.2200
                ,
                2.5000
                ,
                2.5960
                ,
                2.6290
                ,
                2.6670
                ,
                2.6890
                ,
                2.6590
                ,
                2.6650
                ,
                2.6660
                ,
                2.6420
                ,
                2.5832
                ,
                2.5440
                ,
                2.5860
                ,
                2.6390
                ,
                2.6770
                ,
                2.6090
                ,
                2.4780
                ,
                2.5720

            ], [2.6380
                ,
                2.6470
                ,
                2.6190
                ,
                2.4940
                ,
                2.5200
                ,
                2.5780
                ,
                2.6440
                ,
                2.6560
                ,
                2.7030
                ,
                2.6950
                ,
                2.6780
                ,
                2.6730
                ,
                2.6720
                ,
                2.6640
                ,
                2.6530
                ,
                2.6420
                ,
                2.6510
                ,
                2.6690
                ,
                2.6870
                ,
                2.6820
                ,
                2.6702
                ,
                2.6650
            ], [2.5900
                ,
                2.5990
                ,
                2.5170
                ,
                2.4860
                ,
                2.4330
                ,
                2.4380
                ,
                2.5120
                ,
                2.6370
                ,
                2.7720
                ,
                2.8030
                ,
                2.7720
                ,
                2.7760
                ,
                2.7730
                ,
                2.7910
                ,
                2.7540
                ,
                2.7540
                ,
                2.7450
                ,
                2.7390
                ,
                2.7410
                ,
                2.7540
                ,
                2.7350
                ,
                2.7010
            ], [2.6000
                ,
                2.6000
                ,
                2.5940
                ,
                2.5840
                ,
                2.5640
                ,
                2.5620
                ,
                2.5710
                ,
                2.5880
                ,
                2.6130
                ,
                2.6360
                ,
                2.6490
                ,
                2.6530
                ,
                2.6560
                ,
                2.6560
                ,
                2.6550
                ,
                2.6560
                ,
                2.6630
                ,
                2.6600
                ,
                2.6620
                ,
                2.6610
                ,
                2.6611
                ,
                2.6610
            ], [2.6460
                ,
                2.6490
                ,
                2.6460
                ,
                2.6350
                ,
                2.6230
                ,
                2.6180
                ,
                2.6180
                ,
                2.6250
                ,
                2.6440
                ,
                2.6560
                ,
                2.6610
                ,
                2.6660
                ,
                2.6690
                ,
                2.6710
                ,
                2.6740
                ,
                2.6820
                ,
                2.6900
                ,
                2.6940
                ,
                2.7000
                ,
                2.7020
                ,
                2.7002
                ,
                2.7010
            ], [2.7080
                ,
                2.7070
                ,
                2.7060
                ,
                2.7030
                ,
                2.7010
                ,
                2.7010
                ,
                2.7060
                ,
                2.7100
                ,
                2.7130
                ,
                2.7200
                ,
                2.7260
                ,
                2.7280
                ,
                2.7290
                ,
                2.7300
                ,
                2.7340
                ,
                2.7410
                ,
                2.7480
                ,
                2.7510
                ,
                2.7530
                ,
                2.7530
                ,
                2.7513
                ,
                2.7525
            ], [3.0160
                ,
                3.0180
                ,
                3.0150
                ,
                3.0100
                ,
                3.0050
                ,
                3.0040
                ,
                3.0020
                ,
                3.0010
                ,
                3.0010
                ,
                3.0010
                ,
                2.9970
                ,
                2.9960
                ,
                2.9980
                ,
                2.9990
                ,
                2.9960
                ,
                2.9960
                ,
                2.9960
                ,
                2.9950
                ,
                2.9930
                ,
                2.9910
                ,
                2.9921
                ,
                2.9900
            ], [3.0960
                ,
                3.0960
                ,
                3.0940
                ,
                3.0870
                ,
                3.0830
                ,
                3.0805
                ,
                3.0785
                ,
                3.0755
                ,
                3.0785
                ,
                3.0830
                ,
                3.0825
                ,
                3.0775
                ,
                3.0740
                ,
                3.0680
                ,
                3.0640
                ,
                3.0590
                ,
                3.0560
                ,
                3.0550
                ,
                3.0550
                ,
                3.0550
                ,
                3.0545
                ,
                3.0510
            ],['2019/8/1'
                ,
                '2019/8/2'
                ,
                '2019/8/5'
                ,
                '2019/8/6'
                ,
                '2019/8/7'
                ,
                '2019/8/8'
                ,
                '2019/8/9'
                ,
                '2019/8/12',
                '2019/8/13'
                ,
                '2019/8/14'
                ,
                '2019/8/15'
                ,
                '2019/8/16'
                ,
                '2019/8/19'
                ,
                '2019/8/20'
                ,
                '2019/8/21'
                ,
                '2019/8/22'
                ,
                '2019/8/23'
                ,
                '2019/8/26'
                ,
                '2019/8/27'
                ,
                '2019/8/28'
                ,
                '2019/8/29'
                ,
                '2019/8/30'
            ]];
            return {
                item : {
                    on: shibor[0][1],
                    m1: '2.5600',
                    nongye: '2.5600'
                },
                tableData:[
                    {
                        date: shibor[8][0],
                        on: shibor[0][0],
                        w1: shibor[1][0],
                        w2: shibor[2][0],
                        m1: shibor[3][0],
                        m3: shibor[4][0],
                        m6: shibor[5][0],
                        m9: shibor[6][0],
                        y1: shibor[7][0],
                    },{
                        date: shibor[8][2],
                        on: shibor[0][2],
                        w1: shibor[1][2],
                        w2: shibor[2][2],
                        m1: shibor[3][2],
                        m3: shibor[4][2],
                        m6: shibor[5][2],
                        m9: shibor[6][2],
                        y1: shibor[7][2],
                    },{
                        date: shibor[8][3],
                        on: shibor[0][3],
                        w1: shibor[1][3],
                        w2: shibor[2][3],
                        m1: shibor[3][3],
                        m3: shibor[4][3],
                        m6: shibor[5][3],
                        m9: shibor[6][3],
                        y1: shibor[7][3],
                    },{
                        date: shibor[8][4],
                        on: shibor[0][4],
                        w1: shibor[1][4],
                        w2: shibor[2][4],
                        m1: shibor[3][4],
                        m3: shibor[4][4],
                        m6: shibor[5][4],
                        m9: shibor[6][4],
                        y1: shibor[7][4],
                    },{
                        date: shibor[8][5],
                        on: shibor[0][5],
                        w1: shibor[1][5],
                        w2: shibor[2][5],
                        m1: shibor[3][5],
                        m3: shibor[4][5],
                        m6: shibor[5][5],
                        m9: shibor[6][5],
                        y1: shibor[7][5],
                    },{
                        date: shibor[8][6],
                        on: shibor[0][6],
                        w1: shibor[1][6],
                        w2: shibor[2][6],
                        m1: shibor[3][6],
                        m3: shibor[4][6],
                        m6: shibor[5][6],
                        m9: shibor[6][6],
                        y1: shibor[7][6],
                    },{
                        date: shibor[8][7],
                        on: shibor[0][7],
                        w1: shibor[1][7],
                        w2: shibor[2][7],
                        m1: shibor[3][7],
                        m3: shibor[4][7],
                        m6: shibor[5][7],
                        m9: shibor[6][7],
                        y1: shibor[7][7],
                    },{
                        date: shibor[8][8],
                        on: shibor[0][8],
                        w1: shibor[1][8],
                        w2: shibor[2][8],
                        m1: shibor[3][8],
                        m3: shibor[4][8],
                        m6: shibor[5][8],
                        m9: shibor[6][8],
                        y1: shibor[7][8],
                    },{
                        date: shibor[8][9],
                        on: shibor[0][9],
                        w1: shibor[1][9],
                        w2: shibor[2][9],
                        m1: shibor[3][9],
                        m3: shibor[4][9],
                        m6: shibor[5][9],
                        m9: shibor[6][9],
                        y1: shibor[7][9],
                    },{
                        date: shibor[8][10],
                        on: shibor[0][10],
                        w1: shibor[1][10],
                        w2: shibor[2][10],
                        m1: shibor[3][10],
                        m3: shibor[4][10],
                        m6: shibor[5][10],
                        m9: shibor[6][10],
                        y1: shibor[7][10],
                    },{
                        date: shibor[8][11],
                        on: shibor[0][11],
                        w1: shibor[1][11],
                        w2: shibor[2][11],
                        m1: shibor[3][11],
                        m3: shibor[4][11],
                        m6: shibor[5][11],
                        m9: shibor[6][11],
                        y1: shibor[7][11],
                    },{
                        date: shibor[8][12],
                        on: shibor[0][12],
                        w1: shibor[1][12],
                        w2: shibor[2][12],
                        m1: shibor[3][12],
                        m3: shibor[4][12],
                        m6: shibor[5][12],
                        m9: shibor[6][12],
                        y1: shibor[7][12],
                    },{
                        date: shibor[8][13],
                        on: shibor[0][13],
                        w1: shibor[1][13],
                        w2: shibor[2][13],
                        m1: shibor[3][13],
                        m3: shibor[4][13],
                        m6: shibor[5][13],
                        m9: shibor[6][13],
                        y1: shibor[7][13],
                    },{
                        date: shibor[8][14],
                        on: shibor[0][14],
                        w1: shibor[1][14],
                        w2: shibor[2][14],
                        m1: shibor[3][14],
                        m3: shibor[4][14],
                        m6: shibor[5][14],
                        m9: shibor[6][14],
                        y1: shibor[7][14],
                    },{
                        date: shibor[8][15],
                        on: shibor[0][15],
                        w1: shibor[1][15],
                        w2: shibor[2][15],
                        m1: shibor[3][15],
                        m3: shibor[4][15],
                        m6: shibor[5][15],
                        m9: shibor[6][15],
                        y1: shibor[7][15],
                    },{
                        date: shibor[8][16],
                        on: shibor[0][16],
                        w1: shibor[1][16],
                        w2: shibor[2][16],
                        m1: shibor[3][16],
                        m3: shibor[4][16],
                        m6: shibor[5][16],
                        m9: shibor[6][16],
                        y1: shibor[7][16],
                    },{
                        date: shibor[8][17],
                        on: shibor[0][17],
                        w1: shibor[1][17],
                        w2: shibor[2][17],
                        m1: shibor[3][17],
                        m3: shibor[4][17],
                        m6: shibor[5][17],
                        m9: shibor[6][17],
                        y1: shibor[7][17],
                    },{
                        date: shibor[8][18],
                        on: shibor[0][18],
                        w1: shibor[1][18],
                        w2: shibor[2][18],
                        m1: shibor[3][18],
                        m3: shibor[4][18],
                        m6: shibor[5][18],
                        m9: shibor[6][18],
                        y1: shibor[7][18],
                    },{
                        date: shibor[8][19],
                        on: shibor[0][19],
                        w1: shibor[1][19],
                        w2: shibor[2][19],
                        m1: shibor[3][19],
                        m3: shibor[4][19],
                        m6: shibor[5][19],
                        m9: shibor[6][19],
                        y1: shibor[7][19],
                    },{
                        date: shibor[8][20],
                        on: shibor[0][20],
                        w1: shibor[1][20],
                        w2: shibor[2][20],
                        m1: shibor[3][20],
                        m3: shibor[4][20],
                        m6: shibor[5][20],
                        m9: shibor[6][20],
                        y1: shibor[7][20],
                    },{
                        date: shibor[8][21],
                        on: shibor[0][21],
                        w1: shibor[1][21],
                        w2: shibor[2][21],
                        m1: shibor[3][21],
                        m3: shibor[4][21],
                        m6: shibor[5][21],
                        m9: shibor[6][21],
                        y1: shibor[7][21],
                    },{
                        date: shibor[8][22],
                        on: shibor[0][22],
                        w1: shibor[1][22],
                        w2: shibor[2][22],
                        m1: shibor[3][22],
                        m3: shibor[4][22],
                        m6: shibor[5][22],
                        m9: shibor[6][22],
                        y1: shibor[7][22],
                    },
                ],

                chartOptions: {
                    title: {
                        text: 'shibor网线'
                    },
                    series: [{
                        name: 'shibor网线',
                        data: [2.5720,2.6650,2.7010,2.6610,2.7010,2.7525,2.9900,3.0510]// sample data
                    }]
                },
                chartOptions1: {
                    title: {
                        text: 'O/N shibor历史走势'
                    },
                    series: [{
                        name: '2019年8月shibor值走势',
                        data: shibor[0] // sample data
                    }]
                },
            }
        },
        methods: {
            changeValue() {

            },
            handleCommand(command) {
                console.log(command);
                switch (command) {
                    case '0':
                        this.chartOptions1.series[0].data = [2.6340
                            ,
                            2.6340
                            ,
                            2.5440
                            ,
                            2.2610
                            ,
                            2.2200
                            ,
                            2.5000
                            ,
                            2.5960
                            ,
                            2.6290
                            ,
                            2.6670
                            ,
                            2.6890
                            ,
                            2.6590
                            ,
                            2.6650
                            ,
                            2.6660
                            ,
                            2.6420
                            ,
                            2.5832
                            ,
                            2.5440
                            ,
                            2.5860
                            ,
                            2.6390
                            ,
                            2.6770
                            ,
                            2.6090
                            ,
                            2.4780
                            ,
                            2.5720

                        ];
                        break;
                    case '1':
                        this.chartOptions1.series[0].data = [2.6380
                            ,
                            2.6470
                            ,
                            2.6190
                            ,
                            2.4940
                            ,
                            2.5200
                            ,
                            2.5780
                            ,
                            2.6440
                            ,
                            2.6560
                            ,
                            2.7030
                            ,
                            2.6950
                            ,
                            2.6780
                            ,
                            2.6730
                            ,
                            2.6720
                            ,
                            2.6640
                            ,
                            2.6530
                            ,
                            2.6420
                            ,
                            2.6510
                            ,
                            2.6690
                            ,
                            2.6870
                            ,
                            2.6820
                            ,
                            2.6702
                            ,
                            2.6650
                        ];
                        break;
                    case '2':
                        this.chartOptions1.series[0].data = [2.5900
                            ,
                            2.5990
                            ,
                            2.5170
                            ,
                            2.4860
                            ,
                            2.4330
                            ,
                            2.4380
                            ,
                            2.5120
                            ,
                            2.6370
                            ,
                            2.7720
                            ,
                            2.8030
                            ,
                            2.7720
                            ,
                            2.7760
                            ,
                            2.7730
                            ,
                            2.7910
                            ,
                            2.7540
                            ,
                            2.7540
                            ,
                            2.7450
                            ,
                            2.7390
                            ,
                            2.7410
                            ,
                            2.7540
                            ,
                            2.7350
                            ,
                            2.7010];
                        break;
                    case '3':
                        this.chartOptions1.series[0].data = [2.6000
                            ,
                            2.6000
                            ,
                            2.5940
                            ,
                            2.5840
                            ,
                            2.5640
                            ,
                            2.5620
                            ,
                            2.5710
                            ,
                            2.5880
                            ,
                            2.6130
                            ,
                            2.6360
                            ,
                            2.6490
                            ,
                            2.6530
                            ,
                            2.6560
                            ,
                            2.6560
                            ,
                            2.6550
                            ,
                            2.6560
                            ,
                            2.6630
                            ,
                            2.6600
                            ,
                            2.6620
                            ,
                            2.6610
                            ,
                            2.6611
                            ,
                            2.6610];
                        break;
                    case '4':
                        this.chartOptions1.series[0].data = [2.6460
                            ,
                            2.6490
                            ,
                            2.6460
                            ,
                            2.6350
                            ,
                            2.6230
                            ,
                            2.6180
                            ,
                            2.6180
                            ,
                            2.6250
                            ,
                            2.6440
                            ,
                            2.6560
                            ,
                            2.6610
                            ,
                            2.6660
                            ,
                            2.6690
                            ,
                            2.6710
                            ,
                            2.6740
                            ,
                            2.6820
                            ,
                            2.6900
                            ,
                            2.6940
                            ,
                            2.7000
                            ,
                            2.7020
                            ,
                            2.7002
                            ,
                            2.7010];
                        break;
                    case '5':
                        this.chartOptions1.series[0].data = [2.7080
                            ,
                            2.7070
                            ,
                            2.7060
                            ,
                            2.7030
                            ,
                            2.7010
                            ,
                            2.7010
                            ,
                            2.7060
                            ,
                            2.7100
                            ,
                            2.7130
                            ,
                            2.7200
                            ,
                            2.7260
                            ,
                            2.7280
                            ,
                            2.7290
                            ,
                            2.7300
                            ,
                            2.7340
                            ,
                            2.7410
                            ,
                            2.7480
                            ,
                            2.7510
                            ,
                            2.7530
                            ,
                            2.7530
                            ,
                            2.7513
                            ,
                            2.7525];
                        break;
                    case '6':
                        this.chartOptions1.series[0].data = [3.0160
                            ,
                            3.0180
                            ,
                            3.0150
                            ,
                            3.0100
                            ,
                            3.0050
                            ,
                            3.0040
                            ,
                            3.0020
                            ,
                            3.0010
                            ,
                            3.0010
                            ,
                            3.0010
                            ,
                            2.9970
                            ,
                            2.9960
                            ,
                            2.9980
                            ,
                            2.9990
                            ,
                            2.9960
                            ,
                            2.9960
                            ,
                            2.9960
                            ,
                            2.9950
                            ,
                            2.9930
                            ,
                            2.9910
                            ,
                            2.9921
                            ,
                            2.9900];
                        break;
                    case '7':
                        this.chartOptions1.series[0].data = [3.0960
                            ,
                            3.0960
                            ,
                            3.0940
                            ,
                            3.0870
                            ,
                            3.0830
                            ,
                            3.0805
                            ,
                            3.0785
                            ,
                            3.0755
                            ,
                            3.0785
                            ,
                            3.0830
                            ,
                            3.0825
                            ,
                            3.0775
                            ,
                            3.0740
                            ,
                            3.0680
                            ,
                            3.0640
                            ,
                            3.0590
                            ,
                            3.0560
                            ,
                            3.0550
                            ,
                            3.0550
                            ,
                            3.0550
                            ,
                            3.0545
                            ,
                            3.0510];
                        break;
                }
            }
        },

    }
</script>

<style >
    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>