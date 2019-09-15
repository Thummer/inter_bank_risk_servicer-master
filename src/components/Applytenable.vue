<template>
    <div>
        <Header></Header>

        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <h2>请确认已经通知其他机构</h2>
            <span slot="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
    <el-button type="primary" @click="confirm">确 认</el-button>
  </span>
        </el-dialog>

        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services' }">金融服务</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services/loan' }">银团信贷服务</el-breadcrumb-item>
            <el-breadcrumb-item>申请成立银团</el-breadcrumb-item>
        </el-breadcrumb>

        <h1>银团申请成立表单</h1>
        <el-row>
            <el-col style="margin: 50px 250px" :span="16">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" style="padding: 10px">
                    <el-form-item label="机构名称" prop="bankID">
                        <el-input v-model="ruleForm.bankID"></el-input>
                    </el-form-item>
                    <el-form-item label="提供贷款额度" prop="loanpro">
                        <el-input v-model="ruleForm.loanpro"></el-input>
                    </el-form-item>
                    <el-form-item label="可选贷款期限" prop="loanterm">
                        <el-input v-model="ruleForm.loanterm" type="number"></el-input>
                    </el-form-item>
                    <el-form-item label="贷款利率" prop="loanrate">
                        <el-input v-model="ruleForm.loanrate"></el-input>
                    </el-form-item>
                    <el-form-item label="牵头行" prop="leadbank">
                        <el-input v-model="ruleForm.leadbank"></el-input>
                    </el-form-item>
                    <el-form-item label="副牵头行" prop="vleadbank">
                        <el-input v-model="ruleForm.vleadbank"  type="number" min="0" step="0.001"></el-input>
                    </el-form-item>
                    <el-form-item label="参加行的层次和地位" prop="bankstatus">
                        <el-input type="textarea" v-model="ruleForm.bankstatus"></el-input>
                    </el-form-item>
                    <el-form-item label="费用安排" prop="feesche">
                        <el-input v-model="ruleForm.feesche"  type="number" min="0"></el-input>
                    </el-form-item>
                    <el-form-item label="收益安排" prop="incomesche">
                        <el-input type="textarea" v-model="ruleForm.incomesche"></el-input>
                    </el-form-item>


                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

        </el-row>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    import axios from "axios";
    export default {
        name: "Applytenable",
        components:{
            Header,
            Footer,
        },
        data() {
            return {

                dialogVisible: true,
                ruleForm: {
                    bankID: '',
                    loanpro: '',
                    loanterm: '',
                    loanrate: '',
                    leadbank:'',
                    vleadbank:'',
                    bankstatus:'',
                    feesche:'',
                    incomesche:'',
                },
                rules: {
                    bankID: [
                        {required: true, message: '请输入机构名称', trigger: 'blur'},
                    ],
                    loanpro: [
                        {required: true, message: '请输入提供贷款额度', trigger: 'blur'}
                    ],
                    loanterm: [
                        {required: true, message: '请输入可选贷款期限, ', trigger: 'blur'}
                    ],
                    loanrate: [
                        {required: true, message: '请输入贷款利率', trigger: 'blur'}
                    ],
                    leadbank: [
                        {required: true, message: '请输入牵头行名称', trigger: 'blur'}
                    ],
                    vleadbank: [
                        {required: true, message: '请输入副牵头行名称', trigger: 'blur'}
                    ],
                    bankstatus: [
                        {required: true, message: '请输入参加行的层次和地位', trigger: 'blur'}
                    ],
                    feesche: [
                        {required: true, message: '请输入费用安排', trigger: 'blur'}
                    ],
                    incomesche: [
                        {required: true, message: '请输入收益安排', trigger: 'blur'}
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios({
                            url:'',
                            method:'POST',
                            data:'ruleForm'
                        });
                        this.$router.push({path: '/'})
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            cancel(){
                this.dialogVisible = false;
                this.$router.push({path: '/services/loan/confirm'});
            },
            confirm(){
                this.dialogVisible = false;
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        this.$router.push({path: '/services/loan/confirm'});
                    })
                    .catch(_ => {});
            },
        }
    }

</script>

<style scoped>

</style>

