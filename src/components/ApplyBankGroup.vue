<template>
    <div>
        <Header></Header>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services' }">金融服务</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/services/loan' }">银团信贷服务</el-breadcrumb-item>
            <el-breadcrumb-item>申请成立银团</el-breadcrumb-item>
        </el-breadcrumb>

        <div>
            <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                <p><h2>法律声明</h2>
                1.商业银行贷款，应当对借款人的借款用途、偿还能力、还款方式等情况进行严格审查。商业银行贷款，应当实行审贷分离、分级审批的制度。——《中华人民共和国商业银行法》<br>
                2.商业银行贷款，借款人应当提供担保。商业银行应当对保证人的偿还能力，抵押物、质物的权属和价值以及实现抵押权、质权的可行性进行严格审查。经商业银行审查、评估，确认借款人资信良好，确能偿还贷款的，可以不提供担保。——《中华人民共和国商业银行法》<br>
                3.商业银行贷款，应当与借款人订立书面合同。合同应当约定贷款种类、借款用途、金额、利率、还款期限、还款方式、违约责任和双方认为需要约定的其他事项。——《中华人民共和国商业银行法》<br>
                4.商业银行应当按照中国人民银行规定的贷款利率的上下限，确定贷款利率。——《中华人民共和国商业银行法》<br>
                5.商业银行贷款，应当遵守下列资产负债比例管理的规定： (一)资本充足率不得低于百分之八; (二)流动性资产余额与流动性负债余额的比例不得低于百分之二十五; (三)对同一借款人的贷款余额与商业银行资本余额的比例不得超过百分之十; (四)国务院银行业监督管理机构对资产负债比例管理的其他规定。——《中华人民共和国商业银行法》<br>
                6.商业银行不得向关系人发放信用贷款;向关系人发放担保贷款的条件不得优于其他借款人同类贷款的条件。前款所称关系人是指： (一)商业银行的董事、监事、管理人员、信贷业务人员及其近亲属; (二)前项所列人员投资或者担任高级管理职务的公司、企业和其他经济组织——《中华人民共和国商业银行法》<br>
                7.任何单位和个人不得强令商业银行发放贷款或者提供担保。商业银行有权拒绝任何单位和个人强令要求其发放贷款或者提供担保。——《中华人民共和国商业银行法》<br>
                8.商业银行发行金融债券或者到境外借款，应当依照法律、行政法规的规定报经批准。——《中华人民共和国商业银行法》<br>
                9.贷款人应当要求将符合抵质押条件的项目资产和/或项目预期收益等权利为贷款设定担保，并可以根据需要，将项目发起人持有的项目公司股权为贷款设定质押担保。贷款人应当要求成为项目所投保商业保险的第一顺位保险金请求权人，或采取其他措施有效控制保险赔款权益。——《项目融资业务指引》<br>
                10.参与银团贷款的银行均为银团成员。银团成员应按照“信息共享、独立审批、自主决策、风险自担”的原则自主确定各自授信行为，并按实际承担份额享有银团贷款项下相应的权利，履行相应的义务。——《银团贷款业务指引》<br>
                11.按照在银团贷款中的职能和分工，银团成员通常分为牵头行、代理行和参加行等角色，也可根据实际规模与需要在银团内部增设副牵头行、联合牵头行等，并按照银团贷款合同履行相应职责。——《银团贷款业务指引》<br>
                12.银团贷款牵头行是指经借款人同意，负责发起组织银团、分销银团贷款份额的银行。牵头行主要履行以下职责：（一）发起和筹组银团贷款，分销银团贷款份额；（二）对借款人进行贷前尽职调查，草拟银团贷款信息备忘录，并向潜在的参加行推荐；（三）代表银团与借款人谈判确定银团贷款条件；（四）代表银团聘请相关中介机构起草银团贷款法律文本；（五）组织银团成员与借款人签订书面银团贷款合同；（六）银团贷款合同确定的其他职责。——《银团贷款业务指引》<br>
                13.单家银行担任牵头行时，其承贷份额原则上不得少于银团融资总金额的20%；分销给其他银团成员的份额原则上不得低于50%。——《银团贷款业务指引》<br>
                14.收到银团贷款邀请函的银行应按照“信息共享、独立审贷、自主决策、风险自担”的原则，在全面掌握借款人相关信息的基础上做出是否参加银团贷款的决定。银团贷款信息备忘录信息不能满足潜在参加行审批要求的，潜在参加行可要求牵头行补充提供相关信息、提出工作建议或者直接进行调查。——《银团贷款业务指引》<br>
                15.牵头行应根据潜在参加行实际反馈情况，合理确定各银团成员的贷款份额。在超额认购或认购不足的情况下，牵头行可按事先约定的条件或与借款人协商后重新确定各银团成员的承贷份额。——《银团贷款业务指引》<br>
                16.在牵头行有效委任期间，其他未获委任的银行不得与借款人就同一项目进行委任或开展融资谈判。——《银团贷款业务指引》<br>
                17.银团成员在开展银团贷款业务过程中有以下行为，经银团会议审核认定违约的，可以要求其承担违约责任：（一）银团成员收到代理行按合同规定时间发出的通知后，未按合同约定时限足额划付款项的；（二）银团成员擅自提前收回贷款或违约退出银团的；（三）不执行银团会议决议的；（四）借款人归还银团贷款本息而代理行未如约及时划付银团成员的；（五）其他违反银团贷款合同、本业务指引以及法律法规的行为。银团成员之间的上述纠纷，不影响银团与借款人所定贷款合同的执行。——《银团贷款业务指引》<br>
                18.牵头行不得向银团成员提出任何不合理条件，不得以免予收费的手段，开展银团贷款业务竞争，不得借筹组银团贷款向银团成员和借款人搭售其他金融产品或收取其他费用。——《银团贷款业务指引》<br>
                19.牵头行不得向银团成员提出任何不合理条件，不得以免予收费的手段，开展银团贷款业务竞争，不得借筹组银团贷款向银团成员和借款人搭售其他金融产品或收取其他费用。——《银团贷款业务指引》<br>
                20.转让交易的出让方应当确保与转让标的相关的贷款合同及其他文件已由各方有效签署，其对转让的份额拥有合法的处分权，且转让标的之上不存在包括债务人抵销权在内的任何可能造成转让标的价值减损的其他权利。出让方应当为转让交易之目的向受让方充分披露信息，不得提供明知为虚假或具有误导性的信息，不得隐瞒转让标的相关负面信息。——《银团贷款业务指引》<br>
                </p>
                <span slot="footer" class="dialog-footer">
    <el-button @click="cancel">拒 绝</el-button>
    <el-button type="primary" @click="confirm">同 意</el-button>
  </span>
            </el-dialog>
        </div>


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
                dialogVisible:'true',
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