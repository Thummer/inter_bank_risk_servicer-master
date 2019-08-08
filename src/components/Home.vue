<template>
    <div id="home">
        <Header></Header>
        <!--    <img alt="Vue logo" src="./assets/logo.png">-->
        <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

        <div style="margin-top: 120px; margin-bottom: 120px">
            <h1 style="font-size: 60px">INTERBANK RISK SERVICER</h1>
            <h2>银行同业务交易对手风险评估平台</h2>
        </div>
        <div id="cast">
            <el-carousel :interval="5000" arrow="hover">
                <el-carousel-item v-for="item in items">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>

        <div style="margin-top: 50px; margin-bottom: 50px">
            <el-row style="background: #abe692; height: 100px; padding: 30px;">
                <el-col :span="8"><el-button type="text" style="font-size: 20px">信息陈列</el-button></el-col>
                <el-col :span="8"><el-button type="text" style="font-size: 20px" @click="jumpServices">金融服务</el-button></el-col>
                <el-col :span="8"><el-button type="text" style="font-size: 20px" @click="jumpQuery">数据查询</el-button></el-col>
            </el-row>
        </div>

        <h1>信息陈列</h1>

        <div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="全部信息" name="first">全部信息</el-tab-pane>
                <el-tab-pane label="欠优信息" name="second">欠优信息</el-tab-pane>
                <el-tab-pane label="我的关注" name="third">我的关注</el-tab-pane>
            </el-tabs>
        </div>

        <div>
            <el-table
                    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%">
                <el-table-column
                        label="日期"
                        prop="date">
                </el-table-column>
                <el-table-column
                        label="名称"
                        prop="name">
                </el-table-column>
                <el-table-column
                        label="信息概述"
                        prop="information">
                </el-table-column>
                <el-table-column
                        align="right">
                    <template slot="header" slot-scope="scope">
                        <el-input
                                v-model="search"
                                size="mini"
                                placeholder="输入关键字搜索"/>
                    </template>

                </el-table-column>
            </el-table>
        </div>
        <Footer></Footer>


    </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    export default {
        name: 'home',
        components: {
            Header,
            Footer
        },
        data() {
            return {
                items:[
                    'Some information', 'Other information', 'More information'
                ],
                activeName:'first',

                tableData: [{
                    date: '2015-02-04',
                    name: 'sample1',
                    information: 'sample description 1'
                }, {
                    date: '2016-05-04',
                    name: 'sample2',
                    information:'sample description 2'
                }, {
                    date: '2017-03-01',
                    name: 'sample3',
                    information:'sample description 3'
                }, {
                    date: '2019-04-21',
                    name: 'sample4',
                    information:'sample description 4'
                }],
                search: ''
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            jumpServices(){
                this.$router.push({path: '/services'})
            },
            jumpQuery(){
                this.$router.push({path: '/query'})
            }
        }
    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 1000px;
        margin-top: 60px;
        margin-left: 200px;
        margin-right: 200px;
    }




</style>
