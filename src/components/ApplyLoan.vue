<template>
    <div>
        <Header></Header>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services' }">金融服务</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services/loan' }">银团信贷服务</el-breadcrumb-item>
            <el-breadcrumb-item>申请贷款</el-breadcrumb-item>
        </el-breadcrumb>

        <h1>申请贷款</h1>
        <el-row>
            <el-col style="margin: 50px 250px" :span="16">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" style="padding: 10px">
                    <el-form-item label="项目名称" prop="proID">
                        <el-input v-model="ruleForm.proID"></el-input>
                    </el-form-item>
                    <el-form-item label="借款金额" prop="borrowlimit">
                        <el-input v-model="ruleForm.borrowlimit" type="number"></el-input>
                    </el-form-item>
                    <el-form-item label="提款期" prop="drawperiod">
                        <el-input v-model="ruleForm.drawperiod"></el-input>
                    </el-form-item>
                    <el-form-item label="还款期" prop="repayperiod">
                        <el-input v-model="ruleForm.repayperiod"></el-input>
                    </el-form-item>
                    <el-form-item label="利率水平" prop="ratelevel">
                        <el-input v-model="ruleForm.ratelevel"  type="number" min="0" step="0.001"></el-input>
                    </el-form-item>
                    <el-form-item label="性质" prop="nature">
                        <el-input type="textarea" v-model="ruleForm.nature"></el-input>
                    </el-form-item>
                    <el-form-item label="借款用途" prop="purloin">
                        <el-input v-model="ruleForm.purloin"  type="number" min="0"></el-input>
                    </el-form-item>
                    <el-form-item label="借款币种" prop="borcurrency">
                        <el-input type="textarea" v-model="ruleForm.borcurrency"></el-input>
                    </el-form-item>
                    <el-form-item label="宽限期" prop="periodgrace">
                        <el-input type="textarea" v-model="ruleForm.periodgrace"></el-input>
                    </el-form-item>
                    <el-form-item label="提供的担保" prop="guarpro">
                        <el-input type="textarea" v-model="ruleForm.guarpro"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
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
        name: "ApplyLoan",
        components:{
            Header,
            Footer,
        },
        data() {
            return {
                ruleForm: {
                    proID: '',
                    borrowlimit: '',
                    drawperiod: '',
                    repayperiod: '',
                    ratelevel:'',
                    nature:'',
                    purloin:'',
                    borcurrency:'',
                    periodgrace:'',
                    guarpro:'',
                },
                rules: {
                    proID: [
                        {required: true, message: '请输入项目名称', trigger: 'blur'},
                    ],
                    borrowlimit: [
                        {required: true, message: '请输入借款金额', trigger: 'blur'}
                    ],
                    drawperiod: [
                        {required: true, message: '请输入提款期', trigger: 'blur'}
                    ],
                    repayperiod: [
                        {required: true, message: '请输入还款期', trigger: 'blur'}
                    ],
                    ratelevel: [
                        {required: true, message: '请输入利率水平', trigger: 'blur'}
                    ],
                    nature: [
                        {required: true, message: '请输入性质', trigger: 'blur'}
                    ],
                    purloin: [
                        {required: true, message: '请输入借款用途', trigger: 'blur'}
                    ],
                    borcurrency: [
                        {required: true, message: '请输入借款币种', trigger: 'blur'}
                    ],
                    periodgrace: [
                        {required: true, message: '请输入限宽期', trigger: 'blur'}
                    ],
                    guarpro: [
                        {required: true, message: '请输入提供的担保', trigger: 'blur'}
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
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>