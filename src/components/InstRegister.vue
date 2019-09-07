<template>
    <div>
        <Header></Header>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <h2>责任条款</h2>
            <p>    1.访问者在接受本网站服务之前，请务必仔细阅读本条款并同意本声明。访问者访问本网站的行为以及通过各类方式利用本网站的行为，都将被视作是对本声明全部内容的无异议的认可;如有异议，请立即跟本网站协商，并取得本网站的书面同意意见。<br>

                2.访问者在从事与本网站相关的所有行为(包括但不限于访问浏览、利用、转载、宣传介绍)时，必须以善意且谨慎的态度行事;访问者不得故意或者过失的损害或者弱化本网站的各类合法权利与利益，不得利用本网站以任何方式直接或者间接的从事违反中国法律、国际公约以及社会公德的行为，且访问者应当恪守下述承诺：<br>
                1)传输和利用信息符合中国法律、国际公约的规定、符合公序良俗;<br>
                2)不将本网站以及与之相关的网络服务用作非法用途以及非正当用途;<br>
                3)不干扰和扰乱本网站以及与之相关的网络服务;<br>
                4)遵守与本网站以及与之相关的网络服务的协议、规定、程序和惯例等。<br>

                3.服务（责任）条款的确认和接纳<br>
                IBRS平台用户服务的所有权和运作权归IBRS平台拥有。IBRS平台所提供的服务将按照有关章程、服务条款和操作规则严格执行。用户通过注册程序或签订合同成为注册用户，即表示用户与IBRS平台达成协议并接受所有的服务条款。<br>

                4.服务简介<br>
                IBRS平台通过互联网为用户提供法规信息、资讯下载和专业会员功能等服务。<br>
                1)自备上网设备及操作系统和软件。<br>
                2)支付与此服务有关的电话费用、网络费用。<br>
                用户同意：<br>
                1)提供及时、详尽及准确的用户资料。<br>
                2)及时更新注册资料，并符合详尽、准确的要求。<br>
                3)用户充分理解IBRS平台将通过电子邮件和/或传真、电话的方式与注册会员保持联络及沟通，用户在此同意IBRS平台通过电子邮件方式向其发送包括会员信息及服务信息在内的相关商业及非商业联络信息。<br>
                4)用户同意遵守《中华人民共和国保守国家秘密法》、《中华人民共和国计算机信息系统安全保护条例》、《计算机软件保护条例》等有关计算机及互联网规定的法律和法规、实施办法。在任何情况下，当IBRS平台合理判断用户的行为可能违反上述法律、法规时，IBRS平台可以不经事先通知终止向该用户提供服务。<br>

                5.服务条款的修订<br>
                IBRS平台会定期或不定期地修改服务条款，以持续满足相关法规要求和提升服务质量。服务条款一旦发生变动，IBRS平台将以书面形式邮件通知用户，如果您在5个工作日内不作回复或提出异议，则视为同意改动。如果您不接受，请务必在5个工作日内以邮件或传真方式书面回复IBRS平台，IBRS平台将暂停会员服务并与您商议解决相关异议或争议。<br>

                6.服务修改<br>
                在符合相关法规的前提下，IBRS平台保留随时修改或中断服务而不需知照用户的权利。IBRS平台行使修改或中断服务的权利，不需对用户或第三方负责。<br>

                7.用户隐私制度<br>
                IBRS平台视尊重用户个人隐私为基本政策。IBRS平台不会公开、编辑或透露用户的注册信息，除非有法律许可要求，或IBRS平台在诚信的基础上认为透露这些信息符合社会公认的道德规范以及社会大众利益。<br>

                8.用户的帐号，密码和安全性<br>
                一旦注册成功成为IBRS平台用户，您将得到一个密码和帐号。如果您不保管好自己的帐号和密码安全，将对因此产生的后果负全部责任。另外，每个用户都要对其帐户中的所有活动和事件负全责。IBRS平台提醒用户定期更新您的密码。用户同意若发现任何非法使用用户帐号或安全漏洞的情况，立即通知IBRS平台。<br>

                9.免责条款<br>
                用户明确同意网站服务的使用由用户承担风险，IBRS平台不作任何类型的担保。用户理解并接受使用互联网服务自己承担所有风险和责任。<br>

                10.不提供零售和商业性服务<br>
                用户承诺不经IBRS平台同意，不能利用网站服务进行销售或其他商业用途。<br>

                11.用户责任<br>
                用户单独承担传输内容的责任。用户必须遵循：<br>
                1)从中国境内向外传输技术性资料时必须符合中国有关法规。<br>
                2)使用网站服务不作非法用途。<br>
                3)不干扰或混乱网络服务。<br>
                4)不在留言簿发表任何与政治相关的信息。<br>
                5)遵守所有使用网站服务的网络协议、规定、程序和惯例。<br>
                6)不得利用本站危害国家安全、泄露国家秘密，不得侵犯国家社会集体的和公民的合法权益。<br>
                7)不得利用本站制作、复制和传播下列信息：<br>
                - 煽动抗拒、破坏宪法和法律、行政法规实施的；<br>
                - 煽动颠覆国家政权，推翻社会主义制度的；<br>
                - 煽动分裂国家、破坏国家统一的；<br>
                - 煽动民族仇恨、民族歧视，破坏民族团结的；<br>
                - 捏造或者歪曲事实，散布谣言，扰乱社会秩序的；<br>
                - 宣扬封建迷信、淫秽、色情、赌博、暴力、凶杀、恐怖、教唆犯罪的；<br>
                - 公然侮辱他人或者捏造事实诽谤他人的，或者进行其他恶意攻击的；<br>
                - 损害国家机关信誉的；<br>
                - 其他违反宪法和法律行政法规的；<br>
                - 进行商业广告行为的。<br>
                用户不能传输任何教唆他人构成犯罪行为的资料；不能传输损害国家利益和涉及国家安全的资料；不能传输任何不符合当地法规、国家法律和国际法 律的资料。未经许可而非法进入其它电脑系统是禁止的。若用户的行为不符合以上的条款，IBRS平台立即取消用户注册帐号。<br>

                12.网站内容的所有权<br>
                IBRS平台定义的内容包括：文字、软件、声音、相片、录象、图表； IBRS平台为用户提供的商业信息。所有这些内容受版权、商标、标签和其它财产所有权法律的保护。所以，用户只能在IBRS平台授权下才能使用这些内容，而不能擅自复制、篡改这些内容、或创造与内容有关的派生产品。<br>

                13.网站安全<br>
                IBRS平台有权处理违法违规内容，以及恶意发布、篡改以及下载异常行为，以保证IBRS平台数据库安全以及知识产权。<br>

                14.责任限制<br>
                基于以下原因而造成的，包括但不限于利润、信誉、应用、数据损失或其它无形损失，IBRS平台不承担任何直接、间接、附带、特别、衍生性或惩罚性赔偿责任<br>
                1)服务之使用或无法使用，<br>
                2)您的传输或数据遭到未获授权的存取或变造。<br>
                3)任何第三方对IBRS平台所作之声明或行为<br>

                15.附加信息服务<br>
                用户在使用IBRS平台提供服务的同时，同意接受IBRS平台提供的与网站主题相关的附加信息服务。<br>

                16.解释权<br>
                本注册协议的解释权归IBRS平台所有。如果其中有任何条款与国家的有关法律相抵触，则以国家法律的明文规定为准。</p>
            <span slot="footer" class="dialog-footer">
    <el-button @click="cancel">拒 绝</el-button>
    <el-button type="primary" @click="confirm">同 意</el-button>
  </span>
        </el-dialog>
        <el-row>
            <el-col :span="7">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>企业账号注册</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <el-col :span="10">
                <h1>账号注册</h1>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" style="padding: 10px">
                    <el-form-item label="机构全称" prop="bankID">
                        <el-input v-model="ruleForm.bankID"></el-input>
                    </el-form-item>
                    <el-form-item label="法人代表证明书" prop="legalrepre">
                        <el-upload
                                class="upload-demo"
                                ref="upload"
                                action="https://jsonplaceholder.typicode.com/posts/ 上传地址"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :file-list="fileList"
                                :auto-upload="false">
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="企业章程" prop="artincor">
                        <el-upload
                                class="upload-demo"
                                ref="upload"
                                action="https://jsonplaceholder.typicode.com/posts/ 上传地址"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :file-list="fileList"
                                :auto-upload="false">
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="营业执照" prop="license">
                        <el-upload
                                class="upload-demo"
                                ref="upload"
                                action="https://jsonplaceholder.typicode.com/posts/ 上传地址"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :file-list="fileList"
                                :auto-upload="false">
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="近2年度资产负债表" prop="balsheet">
                        <el-upload
                                class="upload-demo"
                                ref="upload"
                                action="https://jsonplaceholder.typicode.com/posts/ 上传地址"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :file-list="fileList"
                                :auto-upload="false">
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="近2年度现金流量表" prop="cashflowsheet">
                        <el-upload
                                class="upload-demo"
                                ref="upload"
                                action="https://jsonplaceholder.typicode.com/posts/ 上传地址"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :file-list="fileList"
                                :auto-upload="false">
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="成本收入比" prop="costinratio">
                        <el-input v-model="ruleForm.costinratio"></el-input>
                    </el-form-item>
                    <el-form-item label="流动性比例" prop="liquidass">
                        <el-input v-model="ruleForm.liquidass"></el-input>
                    </el-form-item>
                    <el-form-item label="拨备覆盖率" prop="provision" type="number">
                        <el-input v-model="ruleForm.provision"></el-input>
                    </el-form-item>
                    <el-form-item label="核心资本充足率" prop="tier1ratio" type="number">
                        <el-input v-model="ruleForm.tier1ratio"></el-input>
                    </el-form-item>
                    <el-form-item label="银行评级" prop="banklevel" type="number">
                        <el-input v-model="ruleForm.banklevel"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="7"></el-col>
        </el-row>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    import axios from "axios";
    export default {
        name: "InstRegister",
        components:{
            Header,
            Footer
        },
        data() {
            return {
                dialogVisible: true,
                ruleForm: {
                    bankID: '',
                    legalrepre: '',
                    artincor: '',
                    license:'',
                    balsheet:'',
                    cashflowsheet:'',
                    costinratio:'',
                    liquidass:'',
                    provision:'',
                    tier1ratio:'',
                    banklevel:'',
                },
                rules: {
                    bankID: [
                        {required: true, message: '请输入机构全称', trigger: 'blur'},
                    ],
                    legalrepre: [
                        {required: true, message: '请上传法人代表证明', trigger: 'blur'},
                    ],
                    artincor: [
                        {required: true, message: '请上传企业章程', trigger: 'blur'},
                    ],
                    license: [
                        {required: true, message: '请上传营业执照', trigger: 'blur'},
                    ],
                    balsheet: [
                        {required: true, message: '请上传资产负债表', trigger: 'blur'},
                    ],
                    cashflowsheet: [
                        {required: true, message: '请上传现金流量表', trigger: 'blur'},
                    ],
                    costinratio: [
                        {required: true, message: '请输入成本收入比', trigger: 'blur'},
                    ],
                    liquidass: [
                        {required: true, message: '请输入流动性比例', trigger: 'blur'},
                    ],
                    provision: [
                        {required: true, message: '请输入拨备覆盖率', trigger: 'blur'},
                    ],
                    tier1ratio: [
                        {required: true, message: '请输入核心资本充足率', trigger: 'blur'},
                    ],
                    banklevel: [
                        {required: true, message: '请输入银行评级', trigger: 'blur'},
                    ],

                }
            };
        },
        methods: {
            cancel(){
                this.dialogVisible = false;
                this.$router.push({path: '/login'});
            },
            confirm(){
                this.dialogVisible = false;
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        this.$router.push({path: '/login'});
                    })
                    .catch(_ => {});
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios({
                            url:'',
                            method:'POST',
                            data:'ruleForm'
                        });

                        this.$router.push({path: '/login'})
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
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
        }
    }
</script>

<style scoped>

</style>
