<template>
    <div>
        <Header></Header>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services' }">金融服务</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services/other' }">衍生品服务</el-breadcrumb-item>
            <el-breadcrumb-item>买方CRMA填报</el-breadcrumb-item>
        </el-breadcrumb>
        <h1>信用风险缓释合约申请单</h1>
        <el-row>
            <el-col style="margin: 50px 250px" :span="16">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" style="padding: 10px">
                    <el-form-item label="买入方" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="费率(%)" prop="fee" >
                        <el-input v-model="ruleForm.fee" type="number" min="0" step="0.1"></el-input>
                    </el-form-item>
                    <el-form-item label="名义本金总额(万元)" prop="amount" >
                        <el-input v-model="ruleForm.amount" type="number" min="0" step="0.1"></el-input>
                    </el-form-item>
                    <el-form-item label="标的实体" prop="entity">
                        <el-input v-model="ruleForm.entity"></el-input>
                    </el-form-item>
                    <el-form-item label="标的债务" prop="debt">
                        <el-input v-model="ruleForm.debt"></el-input>
                    </el-form-item>
                    <el-form-item label="信用保护期限" prop="limit">
                        <el-input v-model="ruleForm.limit"></el-input>
                    </el-form-item>
                    <el-form-item label="起止日期" required>
                        <el-col :span="11">
                            <el-form-item prop="date1">
                                <el-date-picker type="date" placeholder="选择起始日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-form-item prop="date2">
                                <el-date-picker type="date" placeholder="选择到期日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>

                    <el-form-item label="支付频率" prop="frequency">
                        <el-input v-model="ruleForm.frequency"></el-input>
                    </el-form-item>
                    <el-form-item label="首次支付日" prop="first">
                        <el-input v-model="ruleForm.first"></el-input>
                    </el-form-item>
                    <el-form-item label="保付比例(%)" prop="ratio">
                        <el-input v-model="ruleForm.ratio"  type="number" min="0" step="0.1"></el-input>
                    </el-form-item>

                    <el-form-item label="信用事件">
                        <el-checkbox-group v-model="ruleForm.type">
                            <el-checkbox label="破产" name="type"></el-checkbox>
                            <el-checkbox label="支付违约" name="type"></el-checkbox>
                            <el-checkbox label="债务加速到期" name="type"></el-checkbox>
                            <el-checkbox label="债务违约" name="type"></el-checkbox>
                            <el-checkbox label="偿付变更" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>

                    <el-form-item label="信用事件">
                        <el-radio-group v-model="ruleForm.type1">
                            <el-radio label="实物结算"></el-radio>
                            <el-radio label="现金结算"></el-radio>
                            <el-radio label="其他"></el-radio>
                            </el-radio-group>
                    </el-form-item>

                    <el-form-item label="备注" prop="note">
                        <el-input type="textarea" v-model="ruleForm.note"></el-input>
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
        name: "OtherBuyer",
        components:{
            Header,
            Footer,
        },
    data() {
        return {
            ruleForm: {     //TODO 表格中涉及的数据, 动态输入同步
                type: [],
                type1: '',
                name: '',
                fee: '',
                amount: '',
                entity:'',
                debt:'',
                limit:'',
                date1:'',
                date2:'',
                frequency:'',
                first:'',
                ratio:'',
                note:'',
            },
            rules: {
                name: [
                    {required: true, trigger: 'blur'},
                ],
                fee: [
                    {required: true, trigger: 'blur'}
                ],
                amount: [
                    {required: true, trigger: 'blur'}
                ],
                entity: [
                    {required: true, trigger: 'blur'}
                ],
                debt: [
                    {required: true, trigger: 'blur'}
                ],
                frequency: [
                    {required: true, trigger: 'blur'}
                ],
                first: [
                    {required: true, trigger: 'blur'}
                ],
                ratio: [
                    {required: true, trigger: 'blur'}
                ],
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');       //TODO 经过前端表单验证之后会进行提交, 请修改为通过axios提交至后端的代码
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