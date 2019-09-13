<template>
    <div>
        <Header></Header>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services' }">金融服务</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services/guarantee' }">担保服务</el-breadcrumb-item>
            <el-breadcrumb-item>交易</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row>

            <el-col style="margin: 50px 250px" :span="16">
                <el-select v-model="value" placeholder="请选择要交易的银行">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>

                <p v-if="!upstate">请等待对方单位填写表单</p>
                <p v-if="upstate">对方单位已经完成表单填写, 请上传表单</p>
            </el-col>

            <el-button @click="confirm2" type="primary" :disabled="state">我已填写完毕</el-button>
<!--            TODO 填写完毕后, 通过confirm函数将state值设置为true 同时应向服务器提交对应的修改, 表示本方已经完成填写, 对方能否提交文件取决于本方的状态.-->
            <el-button @click="confirm1" :disabled="!upstate" v-loading="!upstate">拍照上传</el-button>
<!--TODO 能否上传的状态取决于对方是否点击"我已填写完毕"-->
            <el-button @click="confirm3">rrr</el-button>
<!--            TODO 测试按钮, 手动将对方的状态设置为已经点击"我已填写完毕", 部署项目时请删除.-->
        </el-row>

        <div>
            <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                <el-upload
                        class="upload-demo"
                        ref="upload"
                       action="这里填写上传服务器"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        :auto-upload="false">
                    <!-- TODO 这里处理文件上传, action选项为上传到的服务器-->
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                <span slot="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
  </span>
            </el-dialog>
        </div>
        <Footer></Footer>

    </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    export default {
        name: "Dealing",
        components:{
            Header,
            Footer,
        },
        data() {
            return {
                fileList:[],
                options: [],
                value: '',
                dialogVisible: false,

                state: false,
                upstate: false
            }
        },
        methods:{
            cancel(){
                this.dialogVisible = false;
            },
            confirm(){
                this.dialogVisible = false;
                this.$router.push({path: '/qualification'});
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {

                        this.dialogVisible = false;
                    })
                    .catch(_ => {});
            },
            confirm1(){
                this.dialogVisible = true;
            },
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            confirm2(){
                this.state = true
            },
            confirm3(){
                this.axios.get('data').then(result =>{
                    this.upstate = result.data;
                    console.log(result.data);
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        mounted() { //TODO 这里通过动态获取后台设置的某一项数据, 来获取所选择的对方机构是否已经点击"我已填写完毕", 5000为延时参数, 数值为5秒
            // while (1){
            //     setTimeout(this.axios.get('data').then(result =>{
            //         this.upstate = result.data;
            //         console.log(result.data);
            //     }).catch((error) => {
            //         console.log(error)
            //     }),5000)
            // }
        }
    }
</script>

<style scoped>

</style>