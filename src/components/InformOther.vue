<template>
    <div>
        <Header></Header>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services' }">金融服务</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services/loan' }">银团信贷服务</el-breadcrumb-item>
            <el-breadcrumb-item>申请成立银团</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row>
            <h1>在点击下一步前,请先通知其他单位</h1>
            <el-button type="primary" @click="click">下一步</el-button>

        </el-row>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    export default {
        name: "InformOther",
        components:{
            Header,
            Footer
        },
        methods:{
            click(){
                this.$router.push({path: '/services/loan/applytenable'})
            }
        }
    }
</script>

<style scoped>

</style>