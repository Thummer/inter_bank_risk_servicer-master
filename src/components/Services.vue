<template>
    <div id="root">

        <Header></Header>

        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>金融服务</el-breadcrumb-item>
            </el-breadcrumb>

        <h1 style="margin: 100px; font-size: 50px">金融服务</h1>

        <el-row>
            <el-col :span="8">
                <img src="" alt="" style="height: 300px; width: 300px; background: #70bee6">
                <p>担保服务</p>
            </el-col>

            <el-col :span="8">
                <img src="" alt="" style="height: 300px; width: 300px; background: #70bee6">
                <p>衍生品服务</p>
            </el-col>

            <el-col :span="8">
                <img src="" alt="" style="height: 300px; width: 300px; background: #70bee6">
                <p>银团信贷服务</p>
            </el-col>

        </el-row>

        <Footer></Footer>

    </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    export default {
        name: "Services",
        components:{
            Header,
            Footer
        },
        data() {
            return {

            }
        }
    }

</script>

<style scoped>

</style>