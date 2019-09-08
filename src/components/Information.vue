<template>
    <div>
        <Header></Header>

        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>信息陈列</el-breadcrumb-item>
        </el-breadcrumb>

        <h1>信息陈列</h1>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部信息" name="first">全部信息</el-tab-pane>
            <el-tab-pane label="我的关注" name="third">我的关注</el-tab-pane>
        </el-tabs>
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
    import * as axios from "axios";
    export default {
        name: "Information",
        components:{
            Header,
            Footer
        },
        data() {
            return {
                activeName:'first',

                tableData: [],
                search: ''
            }
        },
        mounted() {
            this.axios.get('data.json').then(result =>{
                this.tableData = result.data;
                console.log(result.data);
            }).catch((error) => {
                console.log(error)
            })
        }
    }
</script>

<style scoped>

</style>