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
                <el-form label-width="100px" style="padding: 10px">
                    <el-form-item label="卖出方">
                        <el-input :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="费率">
                        <el-input :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="名义本金总额">
                        <el-input :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="标的实体">
                        <el-input :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="标的债务">
                        <el-input :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="信用保护期限">
                        <el-input :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="起始日">
                        <el-input :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="到期日">
                        <el-input :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="支付频率">
                        <el-input :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="首次支付日">
                        <el-input :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="保付比例">
                        <el-input :disabled="true"></el-input>
                    </el-form-item>
                </el-form>

                <p>本表单不支持在线填写,请<a href="/screenshots.zip">下载文件</a>之后填写.</p>
                <p v-if="!upstate">请等待对方单位填写表单</p>
                <p v-if="upstate">对方单位已经完成表单填写, 请上传表单</p>
            </el-col>

            <el-button @click="confirm2" type="primary" :disabled="state">我已填写完毕</el-button>
            <el-button @click="confirm1" :disabled="!upstate" v-loading="!upstate">拍照上传</el-button>

            <el-button @click="confirm3">rrr</el-button>
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
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        :auto-upload="false">
<!--                    TODO 将action 替换为相应的服务器地址-->
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
        name: "O1Dealing",
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
        mounted() {
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