<template>
    <div>
        <Header></Header>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services' }">金融服务</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services/loan' }">银团信贷服务</el-breadcrumb-item>
            <el-breadcrumb-item>申请贷款</el-breadcrumb-item>
        </el-breadcrumb>

        <div>
            <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                <p><h3>法律声明</h3>
                法律声明
                1.任何单位和个人不得强令商业银行发放贷款或者提供担保。商业银行有权拒绝任何单位和个人强令要求其发放贷款或者提供担保。——《中华人民共和国商业银行法》 <br>
                2.借款人应当按期归还贷款的本金和利息。借款人到期不归还担保贷款的，商业银行依法享有要求保证人归还贷款本金和利息或者就该担保物优先受偿的权利。商业银行因行使抵押权、质权而取得的不动产或者股权，应当自取得之日起二年内予以处分。借款人到期不归还信用贷款的，应当按照合同约定承担责任。——《中华人民共和国商业银行法》<br>
                3.有下列情形之一的大额贷款，鼓励采取银团贷款方式：（一）大型集团客户、大型项目融资和大额流动资金融资；（二）单一企业或单一项目融资总额超过贷款行资本净额10%的；（三）单一集团客户授信总额超过贷款行资本净额15%的；（四）借款人以竞争性谈判选择银行业金融机构进行项目融资的。各地银行业协会可以根据以上原则，结合本地区实际情况，组织辖内会员银行共同确定银团贷款额度的具体下限。——《银团贷款业务指引》<br>
                4.银团贷款由借款人或银行发起。牵头行应当与借款人谈妥银团贷款的初步条件，并获得借款人签署的银团贷款委任书。——《银团贷款业务指引》<br>
                5.银团贷款收费是指银团成员接受借款人委托，为借款人提供银团筹组、包销安排、贷款承诺、银团事务管理等服务而收取的相关中间业务费用，纳入商业银行中间业务收费管理。银团贷款收费应当按照“自愿协商、公平合理、质价相符”的原则由银团成员和借款人协商确定，并在银团贷款合同或费用函中载明。——《银团贷款业务指引》<br>
                </p>
                <span slot="footer" class="dialog-footer">
    <el-button @click="cancel">拒 绝</el-button>
    <el-button type="primary" @click="confirm">同 意</el-button>
  </span>
            </el-dialog>
        </div>

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
                dialogVisible:'true',
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
            },
            cancel(){
                this.dialogVisible = false;
                this.$router.push({path: '/services/loan/'});
            },
            confirm(){
                this.dialogVisible = false;
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        this.$router.push({path: '/services/loan/'});
                    })
                    .catch(_ => {});
            },
        }
    }
</script>

<style scoped>

</style>