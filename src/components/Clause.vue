<template>
    <div>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <p>请使用下面的属性来规定限制：

                max - 规定允许的最大值。
                min - 规定允许的最小值。
                step - 规定合法数字间隔。
                value - 规定默认值。

                输入类型：reset
                Opera Safari Chrome Firefox Internet Explorer
                实例

                定义重置按钮（重置所有表单值为默认值）：

                尝试一下 »

                提示：请谨慎使用重置按钮！对于用户来说，不慎点击了重置按钮是件很恼火的事情。
                输入类型：search
                Opera Safari Chrome Firefox Internet Explorer
                实例

                定义搜索字段（比如站内搜索或谷歌搜索等）：</p>
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