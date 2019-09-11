<template>
<div>
    <Header></Header>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/services' }">金融服务</el-breadcrumb-item>
        <el-breadcrumb-item>衍生品服务</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>衍生品服务</h1>

    <el-row>
        <el-col :span="12" >
            <h1>买方栏目</h1>
            <el-button @click="clearFilter">清除所有过滤器</el-button>
            <el-input
                    v-model="search"
                    size="mini"
                    placeholder="输入关键字搜索"
                    style="width: 300px"/>
            <el-table
                    ref="filterTable"
                    :data="tableData.filter(data => !search || data.price.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%"
                    :row-class-name="tableRowClassName">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="卖出方">
                                <span>{{ props.row.name }}</span>
                            </el-form-item>
                            <el-form-item label="费率">
                                <span>{{ props.row.ratio }}</span>
                            </el-form-item>
                            <el-form-item label="名义本金总额">
                                <span>{{ props.row.amount }}</span>
                            </el-form-item>
                            <el-form-item label="标的实体">
                                <span>{{ props.row.entity }}</span>
                            </el-form-item>
                            <el-form-item label="标的债务">
                                <span>{{ props.row.debt }}</span>
                            </el-form-item>
                            <el-form-item label="信用保护期限">
                                <span>{{ props.row.protect }}</span>
                            </el-form-item>
                            <el-form-item label="起始日">
                                <span>{{ props.row.first }}</span>
                            </el-form-item>
                            <el-form-item label="到期日">
                                <span>{{ props.row.end }}</span>
                            </el-form-item>
                            <el-form-item label="支付频率">
                                <span>{{ props.row.frequency }}</span>
                            </el-form-item>
                            <el-form-item label="保付比例">
                                <span>{{ props.row.bfratio }}</span>
                            </el-form-item>
                            <el-form-item label="信用事件">
                                <span>{{ props.row.event }}</span>
                            </el-form-item>
                            <el-form-item label="结算方式">
                                <span>{{ props.row.method }}</span>
                            </el-form-item>
                            <el-form-item label="备注">
                                <span>{{ props.row.note }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="买入方"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="ratio"
                        label="费率"
                        width="120"
                        sortable
                        :filters="[{ text: 'AAA', value: 'AAA' }, { text: 'AA', value: 'AA' }, { text: 'A', value: 'A' }]"
                        :filter-method="filterLevel"
                        filter-placement="bottom-end">
                </el-table-column>
                <el-table-column
                        prop="amount"
                        label="名义本金总额"
                        sortable
                        width="130">
                </el-table-column>
                <el-table-column
                        prop="entity"
                        label="标的实体"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="debt"
                        label="标的债务"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="first"
                        label="起始日"
                        sortable
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="end"
                        label="到期日"
                        sortable
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="event"
                        label="信用事件"
                        width="100">
                </el-table-column>


                <el-table-column
                        prop="tag"
                        label="协商状态"
                        width="100"
                        :filters="[{ text: '是', value: '是' }, { text: '否', value: '否' }]"
                        :filter-method="filterTag"
                        filter-placement="bottom-end">
                    <template slot-scope="scope">
                        <el-tag
                                :type="scope.row.tag === '是' ? 'primary' : 'danger'"
                                disable-transitions>{{scope.row.tag}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="deal"
                        label="交易"
                        width="100">
                    <el-button @click="$router.push({path: '/services/other/deal1'})">交易</el-button>
                </el-table-column>
            </el-table>
            <p>CRMA(信用用⻛风险缓释合约)买方报价列列表</p>
            <el-divider></el-divider>
            <el-table
                    ref="filterTable"
                    :data="tableData.filter(data => !search || data.price.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%"
                    :row-class-name="tableRowClassName">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="卖出方">
                                <span>{{ props.row.name }}</span>
                            </el-form-item>
                            <el-form-item label="费率">
                                <span>{{ props.row.ratio }}</span>
                            </el-form-item>
                            <el-form-item label="名义本金总额">
                                <span>{{ props.row.amount }}</span>
                            </el-form-item>
                            <el-form-item label="标的实体">
                                <span>{{ props.row.entity }}</span>
                            </el-form-item>
                            <el-form-item label="标的债务">
                                <span>{{ props.row.debt }}</span>
                            </el-form-item>
                            <el-form-item label="信用保护期限">
                                <span>{{ props.row.protect }}</span>
                            </el-form-item>
                            <el-form-item label="起始日">
                                <span>{{ props.row.first }}</span>
                            </el-form-item>
                            <el-form-item label="到期日">
                                <span>{{ props.row.end }}</span>
                            </el-form-item>
                            <el-form-item label="支付频率">
                                <span>{{ props.row.frequency }}</span>
                            </el-form-item>
                            <el-form-item label="保付比例">
                                <span>{{ props.row.bfratio }}</span>
                            </el-form-item>
                            <el-form-item label="信用事件">
                                <span>{{ props.row.event }}</span>
                            </el-form-item>
                            <el-form-item label="结算方式">
                                <span>{{ props.row.method }}</span>
                            </el-form-item>
                            <el-form-item label="备注">
                                <span>{{ props.row.note }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="买入方 "
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="ratio"
                        label="费率"
                        sortable
                        width="120"
                        :filters="[{ text: 'AAA', value: 'AAA' }, { text: 'AA', value: 'AA' }, { text: 'A', value: 'A' }]"
                        :filter-method="filterLevel"
                        filter-placement="bottom-end">
                </el-table-column>
                <el-table-column
                        prop="amount"
                        label="名义本金总额"
                        sortable
                        width="130">
                </el-table-column>
                <el-table-column
                        prop="entity"
                        label="标的实体"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="debt"
                        label="标的债务"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="first"
                        label="起始日"
                        sortable
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="end"
                        label="到期日"
                        sortable
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="event"
                        label="信用事件"
                        width="100">
                </el-table-column>


                <el-table-column
                        prop="tag"
                        label="协商状态"
                        width="100"
                        :filters="[{ text: '是', value: '是' }, { text: '否', value: '否' }]"
                        :filter-method="filterTag"
                        filter-placement="bottom-end">
                    <template slot-scope="scope">
                        <el-tag
                                :type="scope.row.tag === '是' ? 'primary' : 'danger'"
                                disable-transitions>{{scope.row.tag}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="deal"
                        label="交易"
                        width="100">
                    <el-button @click="$router.push({path: '/services/other/deal1'})">交易</el-button>
                </el-table-column>
            </el-table>
            <p>CDS(信用用违约互换合约)买方报价市场</p>
            <el-divider></el-divider>
            <el-button @click="jumpApply" style="margin: 30px" type="primary">买方填报</el-button>
        </el-col>


        <el-col :span="12">
            <h1>卖方栏目</h1>
            <el-button @click="clearFilter">清除所有过滤器</el-button>
            <el-input
                    v-model="search1"
                    size="mini"
                    placeholder="输入关键字搜索"
                    style="width: 300px"/>
            <el-table
                    ref="filterTable"
                    :data="tableData1.filter(data => !search || data.price.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%"
                    :row-class-name="tableRowClassName1">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="卖出方">
                                <span>{{ props.row.name }}</span>
                            </el-form-item>
                            <el-form-item label="费率">
                                <span>{{ props.row.ratio }}</span>
                            </el-form-item>
                            <el-form-item label="名义本金总额">
                                <span>{{ props.row.amount }}</span>
                            </el-form-item>
                            <el-form-item label="标的实体">
                                <span>{{ props.row.entity }}</span>
                            </el-form-item>
                            <el-form-item label="标的债务">
                                <span>{{ props.row.debt }}</span>
                            </el-form-item>
                            <el-form-item label="信用保护期限">
                                <span>{{ props.row.protect }}</span>
                            </el-form-item>
                            <el-form-item label="起始日">
                                <span>{{ props.row.first }}</span>
                            </el-form-item>
                            <el-form-item label="到期日">
                                <span>{{ props.row.end }}</span>
                            </el-form-item>
                            <el-form-item label="支付频率">
                                <span>{{ props.row.frequency }}</span>
                            </el-form-item>
                            <el-form-item label="保付比例">
                                <span>{{ props.row.bfratio }}</span>
                            </el-form-item>
                            <el-form-item label="信用事件">
                                <span>{{ props.row.event }}</span>
                            </el-form-item>
                            <el-form-item label="结算方式">
                                <span>{{ props.row.method }}</span>
                            </el-form-item>
                            <el-form-item label="备注">
                                <span>{{ props.row.note }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="卖出方"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="ratio"
                        label="费率"
                        sortable
                        width="120"
                        :filters="[{ text: 'AAA', value: 'AAA' }, { text: 'AA', value: 'AA' }, { text: 'A', value: 'A' }]"
                        :filter-method="filterLevel"
                        filter-placement="bottom-end">
                </el-table-column>
                <el-table-column
                        prop="amount"
                        label="名义本金总额"
                        sortable
                        width="130">
                </el-table-column>
                <el-table-column
                        prop="entity"
                        label="标的实体"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="debt"
                        label="标的债务"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="first"
                        label="起始日"
                        sortable
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="end"
                        label="到期日"
                        sortable
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="event"
                        label="信用事件"
                        width="100">
                </el-table-column>

                <el-table-column
                        prop="tag"
                        label="协商状态"
                        width="100"
                        :filters="[{ text: '是', value: '是' }, { text: '否', value: '否' }]"
                        :filter-method="filterTag"
                        filter-placement="bottom-end">
                    <template slot-scope="scope">
                        <el-tag
                                :type="scope.row.tag === '是' ? 'primary' : 'danger'"
                                disable-transitions>{{scope.row.tag}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="deal"
                        label="交易"
                        width="100">
                    <el-button @click="$router.push({path: '/services/other/deal2'})">交易</el-button>
                </el-table-column>
            </el-table>
            <p>CRMA(信用用⻛风险缓释合约)卖方报价列列表</p>
            <el-divider></el-divider>
            <el-table
                    ref="filterTable"
                    :data="tableData1.filter(data => !search || data.price.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%"
                    :row-class-name="tableRowClassName1">

                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="卖出方">
                                <span>{{ props.row.name }}</span>
                            </el-form-item>
                            <el-form-item label="费率">
                                <span>{{ props.row.ratio }}</span>
                            </el-form-item>
                            <el-form-item label="名义本金总额">
                                <span>{{ props.row.amount }}</span>
                            </el-form-item>
                            <el-form-item label="标的实体">
                                <span>{{ props.row.entity }}</span>
                            </el-form-item>
                            <el-form-item label="标的债务">
                                <span>{{ props.row.debt }}</span>
                            </el-form-item>
                            <el-form-item label="信用保护期限">
                                <span>{{ props.row.protect }}</span>
                            </el-form-item>
                            <el-form-item label="起始日">
                                <span>{{ props.row.first }}</span>
                            </el-form-item>
                            <el-form-item label="到期日">
                                <span>{{ props.row.end }}</span>
                            </el-form-item>
                            <el-form-item label="支付频率">
                                <span>{{ props.row.frequency }}</span>
                            </el-form-item>
                            <el-form-item label="保付比例">
                                <span>{{ props.row.bfratio }}</span>
                            </el-form-item>
                            <el-form-item label="信用事件">
                                <span>{{ props.row.event }}</span>
                            </el-form-item>
                            <el-form-item label="结算方式">
                                <span>{{ props.row.method }}</span>
                            </el-form-item>
                            <el-form-item label="备注">
                                <span>{{ props.row.note }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>



                <el-table-column
                        prop="name"
                        label="卖出方"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="ratio"
                        label="费率"
                        sortable
                        width="120"
                        :filters="[{ text: 'AAA', value: 'AAA' }, { text: 'AA', value: 'AA' }, { text: 'A', value: 'A' }]"
                        :filter-method="filterLevel"
                        filter-placement="bottom-end">
                </el-table-column>
                <el-table-column
                        prop="amount"
                        label="名义本金总额"
                        sortable
                        width="130">
                </el-table-column>
                <el-table-column
                        prop="entity"
                        label="标的实体"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="debt"
                        label="标的债务"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="first"
                        label="起始日"
                        sortable
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="end"
                        label="到期日"
                        sortable
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="event"
                        label="信用事件"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="tag"
                        label="协商状态"
                        width="100"
                        :filters="[{ text: '是', value: '是' }, { text: '否', value: '否' }]"
                        :filter-method="filterTag"
                        filter-placement="bottom-end">
                    <template slot-scope="scope">
                        <el-tag
                                :type="scope.row.tag === '是' ? 'primary' : 'danger'"
                                disable-transitions>{{scope.row.tag}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="deal"
                        label="交易"
                        width="100">
                    <el-button @click="$router.push({path: '/services/other/deal2'})">交易</el-button>
                </el-table-column>
            </el-table>
            <p>CDS(信用用违约互换合约)卖方报价市场</p>
            <el-divider></el-divider>
            <el-button @click="jumpApply1" style="margin: 30px" type="primary">卖方填报</el-button>
        </el-col>
    </el-row>


    <Footer></Footer>
</div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    export default {
        name: "Other",
        components:{
            Header,
            Footer,
        },
    data(){
        return{
            search:'',
            search1: '',
            tableData: [{   //TODO 请注意这里共有四个表格, 但是数据作为测试仅仅有tableData 和tableData1 ,应将其进行替换并且数据应从后端动态获取
                name: '大连银行',
                ratio: 123,
                amount: '100',
                entity:'abc',
                debt:'def',
                first:'123',
                end:'45',
                event:['avvvvv'],
                tag: '是',
                protect:'333',
                frequency:'cacacac',
                firstpay:' arstarstt',
                bfratio:'0.5',
                method:['010'],
                note:'11note'
            }, {
                name: '哈尔滨银行',
                ratio: 22,
                amount: '100',
                entity:'abc',
                debt:'def',
                first:'123',
                end:'45',
                event:['avvvvv'],
                tag: '否',
                protect:'333',
                frequency:'cacacac',
                firstpay:' arstarstt',
                bfratio:'0.5',
                method:['010'],
                note:'11note'
            }, {
                name: '建设银行',
                ratio: 321,
                amount: '100',
                entity:'abc',
                debt:'def',
                first:'123',
                end:'45',
                event:['avvvvv'],
                tag: '是',
                protect:'333',
                frequency:'cacacac',
                firstpay:' arstarstt',
                bfratio:'0.5',
                method:['010'],
                note:'11note'
            }, {
                name: '浦发银行',
                ratio: 442,
                amount: '100',
                entity:'abc',
                debt:'def',
                first:'123',
                end:'45',
                event:['avvvvv'],
                tag: '是',
                protect:'333',
                frequency:'cacacac',
                firstpay:' arstarstt',
                bfratio:'0.5',
                method:['010'],
                note:'11note'
            }],
            tableData1: [{
                name: '大连银行',
                ratio: 'AAA',
                amount: '100',
                entity:'abc',
                debt:'def',
                first:'123',
                end:'45',
                event:['avvvvv'],
                tag: '是',
                protect:'333',
                frequency:'cacacac',
                firstpay:' arstarstt',
                bfratio:'0.5',
                method:['010'],
                note:'11note'
            }, {
                name: '哈尔滨银行',
                ratio: 'AAA',
                amount: '100',
                entity:'abc',
                debt:'def',
                first:'123',
                end:'45',
                event:['avvvvv'],
                tag: '否',
                protect:'333',
                frequency:'cacacac',
                firstpay:' arstarstt',
                bfratio:'0.5',
                method:['010'],
                note:'11note'
            }, {
                name: '建设银行',
                ratio: 'AAA',
                amount: '100',
                entity:'abc',
                debt:'def',
                first:'123',
                end:'45',
                event:['avvvvv'],
                tag: '否',
                protect:'333',
                frequency:'cacacac',
                firstpay:' arstarstt',
                bfratio:'0.5',
                method:['010'],
                note:'11note'
            }, {
                name: '浦发银行',
                ratio: 'AAA',
                amount: '100',
                entity:'abc',
                debt:'def',
                first:'123',
                end:'45',
                event:['avvvvv'],
                tag: '是',
                protect:'333',
                frequency:'cacacac',
                firstpay:' arstarstt',
                bfratio:'0.5',
                method:['010'],
                note:'11note'
            }]
        }
    },
    methods: {
        clearFilter() {
            this.$refs.filterTable.clearFilter();
        },
        filterTag(value, row) {
            return row.tag === value;
        },
        filterLevel(value, row, column) {
            const property = column['property'];
            return row[property] === value;
        },
        filterLimit(value, row, column) {
            const property = column['property'];
            return row[property] === value;
        },
        jumpApply(){
            this.$router.push({path: '/services/other/bselect'})
        },
        jumpApply1(){
            this.$router.push({path: '/services/other/sselect'})
        },
        tableRowClassName({row, rowIndex}) {
            return 'warning-row';
        },
        tableRowClassName1({row, rowIndex}) {
            return 'success-row';
        }

    }
    }
</script>

<style>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }

    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 110px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>