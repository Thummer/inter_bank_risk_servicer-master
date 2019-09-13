<template>
    <div>
        <Header></Header>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services' }">金融服务</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services/guarantee' }">担保服务</el-breadcrumb-item>
            <el-breadcrumb-item>申请担保服务</el-breadcrumb-item>
        </el-breadcrumb>

        <div>
            <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                <p><h2>法律声明</h2>
                    1.任何单位和个人不得强令银行等金融机构或者企业为他人提供保证；银行等金融机构或者企业对强令其为他人提供保证的行为，有权拒绝。——《担保法》<br>
                    2.保证人与债权人应当以书面形式订立保证合同。——《担保法》<br>
                    3.保证人与债权人可以就单个主合同分别订立保证合同，也可以协议在最高债权额限度内就一定期间连续发生的借款合同或者某项商品交易合同订立一个保证合同。——《担保法》<br>
                    4.一般保证的保证人在主合同纠纷未经审判或者仲裁，并就债务人财产依法强制执行仍不能履行债务前，对债权人可以拒绝承担保证责任。有下列情形之一的，保证人不得行使前款规定的权利：（一）债务人住所变更，致使债权人要求其履行债务发生重大困难的；（二）人民法院受理债务人破产案件，中止执行程序的；（三）保证人以书面形式放弃前款规定的权利的。——《担保法》<br>
                    5.保证期间，债权人许可债务人转让债务的，应当取得保证人书面同意，保证人对未经其同意转让的债务，不再承担保证责任。——《担保法》<br>
                    6.债权人与债务人协议变更主合同的，应当取得保证人书面同意，未经保证人书面同意的，保证人不再承担保证责任。保证合同另有约定的，按照约定。——《担保法》<br>
                    7.一般保证的保证人与债权人未约定保证期间的，保证期间为主债务履行期届满之日起六个月。——《担保法》<br>
                    8.在合同约定的保证期间和前款规定的保证期间，债权人未对债务人提起诉讼或者申请仲裁的，保证人免除保证责任；债权人已提起诉讼或者申请仲裁的，保证期间适用诉讼时效中断的规定。——《担保法》<br>
                    9.连带责任保证的保证人与债权人未约定保证期间的，债权人有权自主债务履行期届满之日起六个月内要求保证人承担保证责任。在合同约定的保证期间和前款规定的保证期间，债权人未要求保证人承担保证责任的，保证人免除保证责任。——《担保法》<br>
                    10.保证人依照本法第十四条规定就连续发生的债权作保证，未约定保证期间的，保证人可以随时书面通知债权人终止保证合同，但保证人对于通知到债权人前所发生的债权，承担保证责任。——《担保法》<br>
                    11.同一债权既有保证又有物的担保的，保证人对物的担保以外的债权承担保证责任。债权人放弃物的担保的，保证人在债权人放弃权利的范围内免除保证责任。——《担保法》<br>
                    12.有下列情形之一的，保证人不承担民事责任：（一）主合同当事人双方串通，骗取保证人提供保证的；（二）主合同债权人采取欺诈、胁迫等手段，使保证人在违背真实意思的情况下提供保证的。——《担保法》<br>
                    13.保证人承担保证责任后，有权向债务人追偿。——《担保法》<br>
                    14.人民法院受理债务人破产案件后，债权人未申报债权的，保证人可以参加破产财产分配，预先行使追偿权。——《担保法》<br>
                </p>
                <span slot="footer" class="dialog-footer">
    <el-button @click="cancel">拒 绝</el-button>
    <el-button type="primary" @click="confirm">同 意</el-button>
  </span>
            </el-dialog>
        </div>


        <h1>申请担保服务</h1>
        <el-row>
            <el-col style="margin: 50px 250px" :span="16">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" style="padding: 10px">
            <el-form-item label="银行名称" prop="bankID">
                <el-input v-model="ruleForm.bankID"></el-input>
            </el-form-item>
            <el-form-item label="申请单位" prop="applycom">
                <el-input v-model="ruleForm.applycom"></el-input>
            </el-form-item>
            <el-form-item label="交易人代表" prop="deputy">
                <el-input v-model="ruleForm.deputy"></el-input>
            </el-form-item>
            <el-form-item label="公司地址" prop="comaddress">
                <el-input v-model="ruleForm.comaddress"></el-input>
            </el-form-item>
            <el-form-item label="借款额度" prop="borrowlimit">
                <el-input v-model="ruleForm.borrowlimit" type="number"></el-input>
            </el-form-item>
            <el-form-item label="借款期限" required>
                <el-col :span="11" >
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
            <el-form-item label="借款利率" prop="lendrate">
                <el-input v-model="ruleForm.lendrate"  type="number" min="0" step="0.001"></el-input>
            </el-form-item>
            <el-form-item label="贷款直接用途" prop="useloan">
                <el-input type="textarea" v-model="ruleForm.useloan"></el-input>
            </el-form-item>
            <el-form-item label="担保价格" prop="guarprice">
                <el-input v-model="ruleForm.guarprice"  type="number" min="0"></el-input>
            </el-form-item>
            <el-form-item label="反担保措施" prop="counguarmea">
                <el-input type="textarea" v-model="ruleForm.counguarmea"></el-input>
            </el-form-item>
            <el-form-item label="还款计划" prop="repaysche">
            <el-input type="textarea" v-model="ruleForm.repaysche"></el-input>
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
        name: "ApplyGuarantee",
        components:{
            Header,
            Footer,
        },
        data() {
            return {
                dialogVisible:true,
                ruleForm: {
                    bankID,
                    applycom: '',
                    deputy: '',
                    comaddress: '',
                    borrowlimit: '',
                    date1:'',       //TODO 不清楚date类型格式, 如需替换 请替换
                    date2:'',
                    lendrate:'',
                    useloan:'',
                    guarprice:'',
                    counguarmea:'',
                    repaysche:'',

                },
                rules: {
                    bankID: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    applycom: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    deputy: [
                        {required: true, message: '请输入交易人代表', trigger: 'blur'}
                    ],
                    comaddress: [
                        {required: true, message: '请输入地址', trigger: 'blur'}
                    ],
                    borrowlimit: [
                        {required: true, message: '请输入借款额度', trigger: 'blur'}
                    ],
                    lendrate: [
                        {required: true, message: '请输入借款利率', trigger: 'blur'}
                    ],
                    useloan: [
                        {required: true, message: '请输入贷款直接用途', trigger: 'blur'}
                    ],
                    guarprice: [
                        {required: true, message: '请输入担保价格', trigger: 'blur'}
                    ],
                    counguarmea: [
                        {required: true, message: '请输入反担保措施', trigger: 'blur'}
                    ],
                    repaysche: [
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
            },
            cancel(){
                this.dialogVisible = false;
                this.$router.push({path: '/services/guarantee'});
            },
            confirm(){
                this.dialogVisible = false;
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        this.$router.push({path: '/services/guarantee'});
                    })
                    .catch(_ => {});
            },
        }
    }
</script>

<style scoped>

</style>