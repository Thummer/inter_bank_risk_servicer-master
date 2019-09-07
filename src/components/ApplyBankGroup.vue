<template>
    <div>
        <Header></Header>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services' }">金融服务</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services/loan' }">银团信贷服务</el-breadcrumb-item>
            <el-breadcrumb-item>申请成立银团</el-breadcrumb-item>
        </el-breadcrumb>

        <h1>银团信息备忘录</h1>
        <el-row>
            <el-col style="margin: 50px 250px" :span="16">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" style="padding: 10px">
                    <el-form-item label="机构名称" prop="bankID">
                        <el-input v-model="ruleForm.bankID"></el-input>
                    </el-form-item>
                    <el-form-item label="提供贷款额度" prop="lineOfCredit">
                        <el-input v-model="ruleForm.lineOfCredit"></el-input>
                    </el-form-item>
                    <el-form-item label="可选贷款期限" prop="OptionalLoanTerm">
                        <el-input v-model="ruleForm.OptionalLoanTerm" type="number"></el-input>
                    </el-form-item>
                    <el-form-item label="组织结构" prop="organizationStructure">
                        <el-input v-model="ruleForm.organizationStructure"></el-input>
                    </el-form-item>
                    <el-form-item label="项目的投资环境" prop="projectEnvironment">
                        <el-input v-model="ruleForm.projectEnvironment"></el-input>
                    </el-form-item>
                    <el-form-item label="技术问题" prop="technicalMatter">
                        <el-input v-model="ruleForm.technicalMatter"  type="number" min="0" step="0.001"></el-input>
                    </el-form-item>
                    <el-form-item label="市场前景" prop="marketProspect">
                        <el-input type="textarea" v-model="ruleForm.marketProspect"></el-input>
                    </el-form-item>
                    <el-form-item label="资金需求" prop="fundDemand">
                        <el-input v-model="ruleForm.fundDemand"  type="number" min="0"></el-input>
                    </el-form-item>
                    <el-form-item label="现金流量分析" prop="cashflowAnalysis">
                        <el-input type="textarea" v-model="ruleForm.cashflowAnalysis"></el-input>
                    </el-form-item>


                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
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
        name: "ApplyBankGroup",
        components:{
            Header,
            Footer,
        },
        data() {
            return {
                ruleForm: {
                    bankID: '',
                    lineOfCredit: '',
                    OptionalLoanTerm: '',
                    organizationStructure: '',
                    projectEnvironment:'',
                    technicalMatter:'',
                    marketProspect:'',
                    fundDemand:'',
                    cashflowAnalysis:'',
                },
                rules: {
                    bankID: [
                        {required: true, message: '请输入机构名称', trigger: 'blur'},
                    ],
                    lineOfCredit: [
                        {required: true, message: '请输入提供贷款额度', trigger: 'blur'}
                    ],
                    OptionalLoanTerm: [
                        {required: true, message: '请输入可选贷款期限, ', trigger: 'blur'}
                    ],
                    organizationStructure: [
                        {required: true, message: '请输入组织结构', trigger: 'blur'}
                    ],
                    projectEnvironment: [
                        {required: true, message: '请输入项目的投资环境', trigger: 'blur'}
                    ],
                    technicalMatter: [
                        {required: true, message: '请输入技术问题', trigger: 'blur'}
                    ],
                    marketProspect: [
                        {required: true, message: '请输入市场前景', trigger: 'blur'}
                    ],
                    fundDemand: [
                        {required: true, message: '请输入资金需求', trigger: 'blur'}
                    ],
                    cashflowAnalysis: [
                        {required: true, message: '请输入限宽期', trigger: 'blur'}
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
                        this.$router.push({path: '/services/loan/appbankgroup/confirm'})
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