<template>
    <div>
        <Header></Header>


        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    export default {
        name: "OnlineCommunication",
        components:{
            Header,
            Footer,
        },
        //TODO ;交易过程离线交流页面, 尚未注册路由
    }
</script>

<style scoped>

</style>