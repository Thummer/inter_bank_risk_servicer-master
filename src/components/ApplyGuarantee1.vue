<template>
    <div>
        <Header></Header>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services' }">金融服务</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services/guarantee' }">担保服务</el-breadcrumb-item>
            <el-breadcrumb-item>担保人资格申请</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="success" @click="apply" style="margin: 50px; font-size: 20px">担保人资格申请</el-button>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    export default {
        name: "ApplyGuarantee1",
        components:{
            Header,
            Footer,
        },
        methods:{
            apply(){
                this.$router.push({path: '/clause'})
            },
        }
    }
</script>

<style scoped>

</style>