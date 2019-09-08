<template>
    <div>
        <Header></Header>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services' }">金融服务</el-breadcrumb-item>
            <el-breadcrumb-item>银团信贷服务</el-breadcrumb-item>
        </el-breadcrumb>
        <div>
            <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                <p>示例法律条文</p>
                <span slot="footer" class="dialog-footer">
    <el-button @click="cancel">拒 绝</el-button>
    <el-button type="primary" @click="confirm">同 意</el-button>
  </span>
            </el-dialog>
        </div>


        <el-button type="primary" @click="online">线上商谈</el-button>

        <el-button type="primary" @click="offline">线下商谈</el-button>

        <el-button type="primary" @click="enter">进入合约填报</el-button>

        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    export default {
        name: "Bank2Deal",
        components:{
            Header,
            Footer,
        },
        data() {
            return {
                dialogVisible: true
            };
        },
        methods: {
            cancel(){
                this.dialogVisible = false;
                this.$router.push({path: '/services/loan'});
            },
            confirm(){
                this.dialogVisible = false;
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        this.$router.push({path: '/services/loan'});
                    })
                    .catch(_ => {});
            },
            online(){

            },
            offline(){

            },
            enter(){
                this.$router.push({path: '/b2dealing'});
            }
        }
    }
</script>

<style scoped>

</style>