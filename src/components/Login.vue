<template>
    <div>
        <Header></Header>
        <el-row>
            <el-col :span="6"><el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>登录</el-breadcrumb-item>
            </el-breadcrumb></el-col>
<el-col :span="10">
    <h1>请登录</h1>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input v-model="form.pass" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
    <br><br>
            <p>还没有账号?</p>
            <el-button type="primary" @click="register">个人用户注册</el-button>
            <el-button type="primary" @click="instregister">机构用户注册</el-button>
</el-col>
        </el-row>

        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    export default {
        name: "Login",
        components:{
            Header,
            Footer
        },
        data(){
            return{
                form:{
                    name:'',
                    pass:''
                },
                content: 'Sample',
                data:'NULL'

            }
        },
        methods: {
            onSubmit() {
                 console.log('submit!');
                this.axios.post("URL", {userName: this.name, password: this.pass}).then(
                    data => {
                        //TODO 涉及部分页面需要确认登录状态, 否则跳转至登录页面
                        if (data.data.status != 200) {
                            alert("登陆失败")
                        } else {
                            //设置Vuex登录标志为true，默认userLogin为false
                            this.$store.dispatch("userLogin", true);
                            //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
                            //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
                            localStorage.setItem("Flag", "isLogin");
                            alert("登录成功");
                            //登录成功后跳转到指定页面
                            this.$router.push("/home");
                        }
                    }
                )
            },

            register(){
                this.$router.push({path: '/register'})
            },
            instregister(){
                this.$router.push({path: '/instregister'})



            },



        },
    }
</script>

<style scoped>

</style>