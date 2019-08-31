<template>
    <div>
        <el-dialog
                title="请选择缓释工具"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">

            <el-button type="primary" @click="crwa">CRMA</el-button>

            <el-button type="primary" @click="cds">CDS</el-button>
            <span slot="footer" class="dialog-footer">
  </span>
        </el-dialog>
    </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    export default {
        name: "SellerSelect",
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
            crwa(){
                this.dialogVisible = false;
                this.$router.push({path: '/services/other/otherseller'});
            },
            cds(){
                this.dialogVisible = false;
                this.$router.push({path: '/services/other/othersellerc'});
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        this.$router.push({path: '/services/other'});
                    })
                    .catch(_ => {});
            }
        }
    }
</script>

<style scoped>

</style>