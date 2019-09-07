<template>
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
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    export default {
        name: "Clause",
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
                this.$router.push({path: '/applyguarantee1'});
            },
            confirm(){
                this.dialogVisible = false;
                this.$router.push({path: '/qualification'});
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        this.$router.push({path: '/applyguarantee1'});
                    })
                    .catch(_ => {});
            }
        }
    }
</script>

<style scoped>

</style>