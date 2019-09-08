<template>
<div>
    <Header></Header>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/services' }">金融服务</el-breadcrumb-item>
        <el-breadcrumb-item>银团信贷服务</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>银团信贷服务</h1>
    <el-row>
        <el-col :span="12" >
            <h1>贷款申请栏</h1>
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
            >

                <el-table-column
                        prop="name"
                        label="名称"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="level"
                        label="风险评级"
                        width="100"
                        :filters="[{ text: 'AAA', value: 'AAA' }, { text: 'AA', value: 'AA' }, { text: 'A', value: 'A' }]"
                        :filter-method="filterLevel"
                        filter-placement="bottom-end">
                </el-table-column>
                <el-table-column
                        prop="amount"
                        label="申请额度"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="limit"
                        label="期限"
                        width="100"
                        :filters="[{ text: '1M', value: '1M' }, { text: '2M', value: '2M' }, { text: '3M', value: '3M' }]"
                        :filter-method="filterLimit"
                        filter-placement="bottom-end">
                </el-table-column>
                <el-table-column
                        prop="price"
                        label="利率"
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
                    <el-button @click="$router.push({path: '/services/loan/deal1'})">交易</el-button>
                </el-table-column>
            </el-table>

            <el-button @click="jumpApply" style="margin: 30px">我要申请</el-button>
        </el-col>
        <el-col :span="12">
            <h1>银团栏</h1>
            <el-button @click="clearFilter">清除所有过滤器</el-button>
            <el-input
                    v-model="search1"
                    size="mini"
                    placeholder="输入关键字搜索"
                    style="width: 300px"/>
            <el-table
                    ref="filterTable"
                    :data="tableData1.filter(data => !search1 || data.price.toLowerCase().includes(search1.toLowerCase()))"
                    style="width: 100%">

                <el-table-column
                        prop="name"
                        label="名称"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="level"
                        label="风险评级"
                        width="100"
                        :filters="[{ text: 'AAA', value: 'AAA' }, { text: 'AA', value: 'AA' }, { text: 'A', value: 'A' }]"
                        :filter-method="filterLevel"
                        filter-placement="bottom-end">
                </el-table-column>
                <el-table-column
                        prop="amount"
                        label="提供额度"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="limit"
                        label="期限"
                        width="100"
                        :filters="[{ text: '1M', value: '1M' }, { text: '2M', value: '2M' }, { text: '3M', value: '3M' }]"
                        :filter-method="filterLimit"
                        filter-placement="bottom-end">
                </el-table-column>
                <el-table-column
                        prop="price"
                        label="利率价格"
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
                    <el-button @click="$router.push({path: '/services/loan/deal2'})">交易</el-button>
                </el-table-column>
            </el-table>

            <el-button @click="jumpApply1" style="margin: 30px">申请成立银团</el-button>
        </el-col>
    </el-row>
    <Footer></Footer>
</div>
</template>

<style>

    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
</style>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    export default {
        name: "Loan",
        components:{
            Header,
            Footer,
        },
        data(){
            return{
                search:'',
                search1: '',
                tableData: [{
                    name: '大连银行',
                    level: 'AAA',
                    amount: '100',
                    limit: '1M',
                    price: 2.125,
                    tag: '是'
                }, {
                    name: '哈尔滨银行',
                    level: 'AAA',
                    amount: '100',
                    limit: '1M',
                    price: 2.125,
                    tag: '否'
                }, {
                    name: '建设银行',
                    level: 'AAA',
                    amount: '100',
                    limit: '1M',
                    price: 2.125,
                    tag: '是'
                }, {
                    name: '浦发银行',
                    level: 'AAA',
                    amount: '100',
                    limit: '1M',
                    price: 2.125,
                    tag: '是'
                }],
                tableData1: [{
                    name: '大连银行',
                    level: 'AAA',
                    amount: '100',
                    limit: '1M',
                    price: 2.125,
                    tag: '是'
                }, {
                    name: '哈尔滨银行',
                    level: 'AAA',
                    amount: '100',
                    limit: '1M',
                    price: 2.125,
                    tag: '否'
                }, {
                    name: '建设银行',
                    level: 'AAA',
                    amount: '100',
                    limit: '1M',
                    price: 2.125,
                    tag: '否'
                }, {
                    name: '浦发银行',
                    level: 'AAA',
                    amount: '100',
                    limit: '1M',
                    price: 2.125,
                    tag: '是'
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
                this.$router.push({path: '/services/loan/apploan'})
            },
            jumpApply1(){
                this.$router.push({path: '/services/loan/appbankgroup'})
            },

        }
    }
</script>

