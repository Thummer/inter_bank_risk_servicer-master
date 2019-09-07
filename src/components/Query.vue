<template>
    <div id="Query">
        <Header></Header>

        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>数据查询</el-breadcrumb-item>
        </el-breadcrumb>

        <h1 style="margin: 100px; font-size: 50px">数据查询</h1>

        <el-row>
            <el-col :span="12">
                <img src="../assets/macro.jpg" alt="" style="height: 400px; width: 400px;">
                <router-link to="/query/macro" tag="h2">宏观数据</router-link>

            </el-col>
            <el-col :span="12">
                <img src="../assets/bank.jpg" alt="" style="height: 400px; width: 400px;">
                <router-link to="/query/bank" tag="h2">银行数据</router-link>

            </el-col>
        </el-row>

        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    export default {
        name: "Query",
        components:{
            Header,
            Footer
        }
    }
</script>

<style scoped>

</style>