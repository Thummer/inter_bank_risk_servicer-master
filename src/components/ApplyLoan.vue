<template>
    <div>
        <Header></Header>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services' }">金融服务</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services/guarantee' }">担保服务</el-breadcrumb-item>
            <el-breadcrumb-item>申请担保服务</el-breadcrumb-item>
        </el-breadcrumb>

        <h1>申请担保服务</h1>
        <el-row>
            <el-col style="margin: 50px 250px" :span="16">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" style="padding: 10px">
                    <el-form-item label="申请单位" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="交易人代表" prop="deputy">
                        <el-input v-model="ruleForm.deputy"></el-input>
                    </el-form-item>
                    <el-form-item label="公司地址" prop="address">
                        <el-input v-model="ruleForm.address"></el-input>
                    </el-form-item>
                    <el-form-item label="借款额度" prop="amount">
                        <el-input v-model="ruleForm.amount" type="number"></el-input>
                    </el-form-item>
                    <el-form-item label="借款期限" required>
                        <el-col :span="11">
                            <el-form-item prop="date1">
                                <el-date-picker type="date" placeholder="选择起始日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-form-item prop="date2">
                                <el-date-picker type="date" placeholder="选择结束日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="借款利率" prop="interests">
                        <el-input v-model="ruleForm.interests"  type="number" min="0" step="0.001"></el-input>
                    </el-form-item>
                    <el-form-item label="贷款直接用途" prop="usage">
                        <el-input type="textarea" v-model="ruleForm.usage"></el-input>
                    </el-form-item>
                    <el-form-item label="担保价格" prop="guaranteeprice">
                        <el-input v-model="ruleForm.guaranteeprice"  type="number" min="0"></el-input>
                    </el-form-item>
                    <el-form-item label="贷款直接用途" prop="usage">
                        <el-input type="textarea" v-model="ruleForm.usage"></el-input>
                    </el-form-item>
                    <el-form-item label="反担保措施" prop="antiguarantee">
                        <el-input type="textarea" v-model="ruleForm.antiguarantee"></el-input>
                    </el-form-item>
                    <el-form-item label="还款计划" prop="plan">
                        <el-input type="textarea" v-model="ruleForm.plan"></el-input>
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
    export default {
        name: "ApplyLoan",
        components:{
            Header,
            Footer,
        },
        data() {
            return {
                ruleForm: {
                    name: '',
                    deputy: '',
                    address: '',
                    amount: '',
                    date1:'',
                    date2:'',
                    interests:'',
                    usage:'',
                    guaranteeprice:'',
                    antiguarantee:'',
                    plan:'',
                },
                rules: {
                    name: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    deputy: [
                        {required: true, message: '请输入交易人代表', trigger: 'blur'}
                    ],
                    address: [
                        {required: true, message: '请输入地址', trigger: 'blur'}
                    ],
                    amount: [
                        {required: true, message: '请输入借款额度', trigger: 'blur'}
                    ],
                    interests: [
                        {required: true, message: '请输入借款利率', trigger: 'blur'}
                    ],
                    usage: [
                        {required: true, message: '请输入贷款直接用途', trigger: 'blur'}
                    ],
                    guaranteeprice: [
                        {required: true, message: '请输入担保价格', trigger: 'blur'}
                    ],
                    antiguarantee: [
                        {required: true, message: '请输入反担保措施', trigger: 'blur'}
                    ],
                    plan: [
                        {required: true, message: '请输入还款计划', trigger: 'blur'}
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
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