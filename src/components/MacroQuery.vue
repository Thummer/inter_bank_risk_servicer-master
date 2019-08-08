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
                <img src="" alt="" height="600px" style="background: #70bee6; margin-top: 50px" width="700px">
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
                <img src="" alt="" width="700px" height="300px" style="margin-top: 50px; background: chocolate"><br>
                <img src="" alt="" width="700px" height="300px" style="background: chocolate">
            </el-col>
        </el-row>

        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    export default {
        name: "MacroQuery",
        components:{
            Header,
            Footer
        }
    }
</script>

<style scoped>

</style>